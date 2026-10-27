// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The production URL. Override at build time with SITE_URL, e.g.
//   SITE_URL=https://estimatingsoftware.example npm run build
// For a GitHub Pages *project* site, also set BASE_PATH=/repo-name
const site = process.env.SITE_URL || 'https://example.com';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  integrations: [sitemap()],
  build: { format: 'directory' },
});
