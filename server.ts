import "dotenv/config";
import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      "User-Agent": "aistudio-build",
    },
  },
});

const KAPAROC_CONTEXT = `
Vous êtes l'assistant virtuel IA de "KAPAROC INGÉNIERIE", un bureau d'études géotechniques de premier plan basé à Dakar, au Sénégal, et intervenant dans toute l'Afrique de l'Ouest.
Votre rôle EXCLUSIF est de répondre aux questions concernant Kaparoc, ses services, ses missions (G1 à G5), ses partenaires, ses domaines d'intervention, sa directrice générale, et l'ingénierie géotechnique.

DIRECTIVES STRICTES :
1. VOUS NE DEVEZ RÉPONDRE QU'AUX QUESTIONS LIÉES À KAPAROC ET À SON EXPERTISE GÉOTECHNIQUE.
2. Si une question est hors sujet (ex: recettes de cuisine, programmation informatique pure, politique, questions générales non liées à Kaparoc ou à la géotechnique), vous DEVEZ répondre poliment que vous êtes uniquement conçu pour fournir des informations relatives à KAPAROC INGÉNIERIE.
3. Soyez professionnel, précis et courtois. Exprimez-vous en français.

INFORMATIONS SUR KAPAROC :
- Contact : Téléphone: +221 33 853 01 79, Email: infos@kaparoc.com, Adresse: Ouakam Cité ASECNA P78, Etage2, Dakar, Sénégal.
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

async function startServer() {
  const app = express();
  const PORT = 3001;

  app.use(express.json());

  // API Route for Gemini Chat
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      
      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }

      const chat = ai.chats.create({
        model: "gemini-2.0-flash",
        config: {
          systemInstruction: KAPAROC_CONTEXT,
          temperature: 0.2,
        },
      });

      // Pass history to simulate continuous conversation if needed
      // Actually with @google/genai, ai.chats doesn't take history in create() the way standard models did,
      // Wait, let's look at the gemini-api skill for how to use chat with history.
      // Since it's a simple stateless interaction or we can just send the chat context. 
      // If we use ai.chats.create we might just send the previous messages as part of contents if supported, 
      // but without standard history, it's safer to just do a generateContent.
      // Let's use generateContent for now passing the formatted history.

      let contents = [];
      if (history && Array.isArray(history)) {
        for (const turn of history) {
          contents.push({ role: turn.role, parts: [{ text: turn.text }] });
        }
      }
      contents.push({ role: "user", parts: [{ text: message }] });

      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents,
        config: {
          systemInstruction: KAPAROC_CONTEXT,
          temperature: 0.2,
        },
      });

      res.json({ reply: response.text });
    } catch (error: any) {
      console.error("Gemini API Error:", error);
      if (error?.status === 429) {
        res.status(429).json({ error: "Le service est temporairement surchargé. Veuillez patienter 30 secondes avant de réessayer." });
      } else {
        res.status(500).json({ error: "Désolé, je rencontre des difficultés techniques pour le moment." });
      }
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
  });
}

startServer();
