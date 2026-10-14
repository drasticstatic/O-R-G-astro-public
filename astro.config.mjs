// @ts-check
import { defineConfig } from "astro/config";
import { satteri } from "@astrojs/markdown-satteri";
import { baseLinks } from "./src/plugins/base-links.mjs";

// Served as a GitHub Pages project site, so every route and asset lives under the repo name.
const BASE = "/O-R-G-astro-public";

// The base-links plugin (canonical copy: my-template/changelog-template/base-links.mjs) prefixes
// the base onto root-relative links inside Markdown, so any Markdown content added here can keep
// writing base-less links.
export default defineConfig({
  site: "https://drasticstatic.github.io",
  base: BASE,
  trailingSlash: "never",
  markdown: { processor: satteri({ hastPlugins: [baseLinks(BASE)] }) },
});
