// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Final public URL — used for canonical links, Open Graph and the sitemap.
  // The deploy workflow passes the GitHub Pages origin and base path; locally the
  // site builds for the root of the production domain.
  site: process.env.SITE_URL || 'https://climateeducationforall.org',
  base: `${(process.env.BASE_PATH || '').replace(/\/$/, '')}/`,
  trailingSlash: 'ignore',
  devToolbar: { enabled: false },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
