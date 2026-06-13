import "dotenv/config";
import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

// ─── OpenRouter config ────────────────────────────────────────────────────────
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";

// Fallback list in case the API call fails
const FALLBACK_MODELS = [
  "deepseek/deepseek-r1:free",
  "deepseek/deepseek-chat:free",
  "nousresearch/hermes-3-llama-3.1-405b:free",
  "microsoft/phi-3-mini-128k-instruct:free",
];

let FREE_MODELS: string[] = FALLBACK_MODELS;

// Dynamically fetch available free models from OpenRouter at startup
async function loadFreeModels() {
  if (!OPENROUTER_API_KEY) return;
  try {
    const res = await fetch("https://openrouter.ai/api/v1/models", {
      headers: { "Authorization": `Bearer ${OPENROUTER_API_KEY}` },
    });
    const data = await res.json() as any;
    const available = (data?.data ?? [])
      .filter((m: any) =>
        m.id?.endsWith(":free") &&
        (m.pricing?.prompt === "0" || m.pricing?.prompt === 0 || Number(m.pricing?.prompt) === 0)
      )
      .map((m: any) => m.id as string);

    if (available.length > 0) {
      FREE_MODELS = available;
      console.log(`✅ Loaded ${available.length} free OpenRouter models:`, available.slice(0, 5));
    } else {
      console.warn("⚠️  No free models found via API, using fallback list.");
    }
  } catch (err) {
    console.warn("⚠️  Could not fetch OpenRouter models, using fallback list:", err);
  }
}

if (!OPENROUTER_API_KEY) {
  console.warn("⚠️  OPENROUTER_API_KEY is not set. Chat will not work.");
}


// ─── System prompt ────────────────────────────────────────────────────────────
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
  - G4: Supervision géotechnique d'exécution (Supervision de l'étude et du suivi des travaux).
  - G5: Diagnostic géotechnique d'un ouvrage existant.
- Services et Expertise :
  - Investigations in-situ (sondages pressiométriques, pénétrométriques, forages carottés).
  - Analyses de laboratoire (mécanique des sols, Roches).
  - Modélisation & Calcul (Talus, Soutènement, Fondations).
  - Ingénierie & Suivi (Assistance à maîtrise d'ouvrage, ingénierie de la construction).
- Secteurs Clés : Bâtiments de Grande Hauteur (IGH), Infrastructures (Routes, Autoroutes), Ouvrages Hydrauliques & Maritimes, Énergie et Industrie.
- Partenaires de confiance : CHEC (China Harbour Engineering), Zhengtai Group, Dima Groupe, Eydon, B.D.T.P, ProTec, PROMOGED, JL Structures, Xewell, NMA (Nouvelle Minoterie Africaine), Zikhar, La Brioche Dorée.
- Pourquoi Kaparoc : Excellence technique, Réactivité, Innovation, Équipe pluridisciplinaire, Qualité certifiée.
`;

// ─── Server ───────────────────────────────────────────────────────────────────
async function startServer() {
  const app = express();
  const PORT = 3001;

  app.use(express.json());

  // API Route for OpenRouter Chat
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;

      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }

      if (!OPENROUTER_API_KEY) {
        return res.status(500).json({ error: "Clé API OpenRouter non configurée. Veuillez contacter l'administrateur." });
      }

      // Build messages array (OpenAI format)
      const messages: { role: string; content: string }[] = [
        { role: "system", content: KAPAROC_CONTEXT.trim() },
      ];

      // Add conversation history
      if (history && Array.isArray(history)) {
        for (const turn of history) {
          messages.push({
            role: turn.role === "model" ? "assistant" : "user",
            content: turn.text,
          });
        }
      }

      // Add current user message
      messages.push({ role: "user", content: message });

      // Call OpenRouter API with fallback across free models
      let reply: string | null = null;

      for (const model of FREE_MODELS) {
        const response = await fetch(OPENROUTER_URL, {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
            "Content-Type": "application/json",
            "HTTP-Referer": process.env.APP_URL || "http://localhost:3001",
            "X-Title": "Kaparoc Ingénierie Assistant",
          },
          body: JSON.stringify({
            model,
            messages,
            temperature: 0.2,
            max_tokens: 1024,
          }),
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          console.error(`OpenRouter [${model}] Error:`, response.status, errorData);

          if (response.status === 429) {
            return res.status(429).json({
              error: "Le service est temporairement surchargé. Veuillez patienter quelques secondes avant de réessayer.",
            });
          }
          // Try next model on 404 or other errors
          continue;
        }

        const data = await response.json() as any;
        reply = data?.choices?.[0]?.message?.content ?? null;

        if (reply) {
          console.log(`✓ Response from model: ${model}`);
          break;
        }
      }

      if (!reply) {
        throw new Error("Empty response from OpenRouter");
      }

      res.json({ reply });
    } catch (error: any) {
      console.error("Chat Error:", error);
      res.status(500).json({ error: "Désolé, je rencontre des difficultés techniques pour le moment." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Using OpenRouter free models: ${FREE_MODELS.join(", ")}`);
  });
}

startServer();

// Load free models from OpenRouter API after server is ready
loadFreeModels();
