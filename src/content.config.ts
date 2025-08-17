import { defineCollection, z } from 'astro:content';
import { glob, file } from "astro/loaders";

const blog = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./content/blog" }),
    schema: z.object({
        title: z.string().default("Sam Partington"),
        description: z.string(),
        date: z.coerce.date().transform(date => 
            date.toLocaleDateString(undefined, {
                year: "numeric",
                month: "short",
                day: "numeric",
            })
        ),
        tags: z.array(z.string())
    })
});

export const collections = { blog };