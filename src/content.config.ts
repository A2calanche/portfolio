// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/projects',
    generateId: ({ entry }) => entry, // path completo → nunca colisiona
  }),
  schema: z.object({
    lang: z.enum(['es', 'en', 'pt']),
    slug: z.string(), // vos controlás la URL, separado del id interno
    title: z.string(),
    problem: z.string(),
    solution: z.string(),
    result: z.string(),
    stack: z.array(z.string()),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };