import type { VercelRequest, VercelResponse } from "@vercel/node";

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";

const KAPAROC_CONTEXT = `
Vous êtes l'assistant virtuel IA de "KAPAROC INGÉNIERIE", un bureau d'études géotechniques de premier plan basé à Dakar, au Sénégal, et intervenant dans toute l'Afrique de l'Ouest.
Votre rôle EXCLUSIF est de répondre aux questions concernant Kaparoc, ses services, ses missions (G1 à G5), ses partenaires, ses domaines d'intervention, sa directrice générale, et l'ingénierie géotechnique.

DIRECTIVES STRICTES :
1. VOUS NE DEVEZ RÉPONDRE QU'AUX QUESTIONS LIÉES À KAPAROC ET À SON EXPERTISE GÉOTECHNIQUE.
2. Si une question est hors sujet (ex: recettes de cuisine, programmation informatique pure, politique, questions générales non liées à Kaparoc ou à la géotechnique), vous DEVEZ répondre poliment que vous êtes uniquement conçu pour fournir des informations relatives à KAPAROC INGÉNIERIE.
3. Soyez professionnel, précis et courtois. Exprimez-vous en français.

INFORMATIONS SUR KAPAROC :
- Contact : Téléphone: +221 33 853 01 79, Email: contact@kaparoc.com, Adresse: Liberté VI Ext, 17 Rue L 50 x 25, Dakar, Sénégal.
- Directrice Générale : Peinda SOW CISS (Ingénieur Géotechnicienne).
- Missions Géotechniques (Norme NF P94-500) :
  - G1: Étude géotechnique préalable.
  - G2: Étude géotechnique de conception (AVP/PRO/DCE).
  - G3: Étude géotechnique d'exécution.
  - G4: Supervision géotechnique d'exécution.
  - G5: Diagnostic géotechnique d'un ouvrage existant.
- Services et Expertise :
  - Investigations in-situ (sondages pressiométriques, pénétrométriques, forages carottés).
  - Analyses de laboratoire (mécanique des sols, Roches).
  - Modélisation & Calcul (Talus, Soutènement, Fondations).
  - Ingénierie & Suivi (Assistance à maîtrise d'ouvrage, ingénierie de la construction).
- Secteurs Clés : Bâtiments de Grande Hauteur (IGH), Infrastructures (Routes, Autoroutes), Ouvrages Hydrauliques & Maritimes, Énergie et Industrie.
- Partenaires : CHEC, Zhengtai Group, Dima Groupe, Eydon, B.D.T.P, ProTec, PROMOGED, JL Structures, Xewell, NMA, Zikhar, La Brioche Dorée.
- Pourquoi Kaparoc : Excellence technique, Réactivité, Innovation, Équipe pluridisciplinaire, Qualité certifiée.
`.trim();

async function getFreeModels(): Promise<string[]> {
  const FALLBACK = [
    "meta-llama/llama-3.3-70b-instruct:free",
    "nousresearch/hermes-3-llama-3.1-405b:free",
    "openai/gpt-oss-20b:free",
  ];
  if (!OPENROUTER_API_KEY) return FALLBACK;
  try {
    const res = await fetch("https://openrouter.ai/api/v1/models", {
      headers: { Authorization: `Bearer ${OPENROUTER_API_KEY}` },
    });
    const data = (await res.json()) as any;
    const models = (data?.data ?? [])
      .filter(
        (m: any) =>
          m.id?.endsWith(":free") &&
          Number(m.pricing?.prompt) === 0
      )
      .map((m: any) => m.id as string);
    return models.length > 0 ? models : FALLBACK;
  } catch {
    return FALLBACK;
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!OPENROUTER_API_KEY) {
    return res.status(500).json({ error: "Clé API OpenRouter non configurée." });
  }

  const { message, history } = req.body as { message?: string; history?: { role: string; text: string }[] };

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  const messages: { role: string; content: string }[] = [
    { role: "system", content: KAPAROC_CONTEXT },
  ];

  if (history && Array.isArray(history)) {
    for (const turn of history) {
      messages.push({
        role: turn.role === "model" ? "assistant" : "user",
        content: turn.text,
      });
    }
  }
  messages.push({ role: "user", content: message });

  const freeModels = await getFreeModels();

  for (const model of freeModels) {
    try {
      const response = await fetch(OPENROUTER_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": process.env.APP_URL || "https://kaparoc-website.vercel.app",
          "X-Title": "Kaparoc Ingénierie Assistant",
        },
        body: JSON.stringify({ model, messages, temperature: 0.2, max_tokens: 1024 }),
      });

      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        console.error(`[${model}] Error ${response.status}:`, err);
        if (response.status === 429) {
          return res.status(429).json({
            error: "Le service est temporairement surchargé. Veuillez réessayer dans quelques secondes.",
          });
        }
        continue; // try next model
      }

      const data = (await response.json()) as any;
      const reply = data?.choices?.[0]?.message?.content;

      if (reply) {
        return res.status(200).json({ reply });
      }
    } catch (err) {
      console.error(`[${model}] Exception:`, err);
      continue;
    }
  }

  return res.status(500).json({ error: "Désolé, je rencontre des difficultés techniques pour le moment." });
}
