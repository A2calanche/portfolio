// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';


const projects = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/projects',
    generateId: ({ entry }) => entry, 
  }),
  schema: z.object({
    lang: z.enum(['es', 'en', 'pt']),
    slug: z.string(), 
    title: z.string(),
    problem: z.string(),
    solution: z.string(),
    result: z.string(),
    stack: z.array(z.string()),
    draft: z.boolean().default(false),
  }),
});

const experience = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/experience',
    generateId: ({ entry }) => entry, 
  }),
  schema: z.object({
    lang: z.enum(['es', 'en', 'pt']),
    company: z.string(),
    role: z.string(),
    period: z.string(),
    stack: z.array(z.string()),
    description: z.string(),
    responsabilities: z.array(z.string()),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, experience };