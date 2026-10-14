// The lab's root documents, ROADMAP.md and SUSTAINABILITY.md (kit 1.2), each rendered as a page
// (/roadmap, /sustainability) and read on GitHub as they are. The lab's changelog itself is data
// (src/data/changelog.ts), not a collection.
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const docs = defineCollection({
  loader: glob({ pattern: ["ROADMAP.md", "SUSTAINABILITY.md"], base: "." }),
  schema: z.object({}),
});

export const collections = { docs };
