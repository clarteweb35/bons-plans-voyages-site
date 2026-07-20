import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const bonsPlans = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/bons-plans" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    confidence: z.enum(["ELEVE", "MOYEN", "FAIBLE"]),
  }),
});

export const collections = {
  "bons-plans": bonsPlans,
};
