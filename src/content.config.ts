import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const bonsPlans = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/bons-plans" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    confidence: z.enum(["ELEVE", "MOYEN", "FAIBLE"]),
    // Champs structurés, alimentés directement depuis le JSON de l'offre
    // (pas depuis le texte généré par Gemini) — optionnels pour rester
    // compatibles avec les anciens articles de test générés avant cette
    // refonte, qui n'ont pas ces champs.
    destination: z.string().optional(),
    voyagiste: z.string().optional(),
    prix: z.number().optional(),
    prixInitial: z.number().optional(),
    reduction: z.number().optional(),
    duree: z.number().optional(),
    villeDepart: z.string().optional(),
    image: z.string().optional(),
    lien: z.string().optional(),
    avisPourquoi: z.string().optional(),
    avisAttention: z.string().optional(),
  }),
});

// Guides "Astuces & Hacks Voyage" — contenu éditorial evergreen (SEO),
// écrit à la main (pas généré automatiquement comme les bons plans).
const guides = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/guides" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    image: z.string().optional(),
  }),
});

export const collections = {
  "bons-plans": bonsPlans,
  guides,
};
