// @ts-check
import { defineConfig } from 'astro/config';

// Served as a GitHub Pages project site, so every route and asset lives under the repo name.
export default defineConfig({
  site: 'https://drasticstatic.github.io',
  base: '/O-R-G-astro-public',
  trailingSlash: 'ignore',
});
