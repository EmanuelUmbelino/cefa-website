# Climate Education for All (CEFA) website

Website of **Climate Education for All (CEFA)**, a student-led movement expanding climate education to every university student.

## Tech stack

- [Astro](https://astro.build): static site, zero JavaScript by default (one small script for the menu and scroll effects)
- [Tailwind CSS v4](https://tailwindcss.com): palette built around `#0E5140` (forest), `#D7DBB4` (sage) and `#AC4524` (clay)
- Fonts: Fraunces (headings) and Inter (body), self-hosted via Fontsource
- TypeScript (strictest), ESLint (with a11y rules) and Prettier
- GitHub Actions: checks on every pull request, deploy to GitHub Pages on push to `main`

No database or backend: everything is built into static HTML.

## Getting started

Requires Node.js 22.12+ (see `.nvmrc`).

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # outputs ./dist
npm run preview      # serves ./dist
npm run ci           # format:check + lint + type-check + build
```

## Editing content

All text lives in [`src/data/site.ts`](src/data/site.ts): mission, vision, programs, values, team bios, contact links. Components in `src/components/` only handle layout.

### Adding team photos

1. Put the photo in `src/assets/team/` (e.g. `juliana-janot.webp`, portrait orientation, at least 720 px wide).
2. Import it in `src/data/site.ts` and set the member's `photo` field:

   ```ts
   import julianaPhoto from '@/assets/team/juliana-janot.webp';
   // ...
   { name: 'Juliana Janot', role: 'Executive Director', photo: julianaPhoto, bio: '...' },
   ```

Astro resizes and converts photos to WebP at build time. Until a photo is set, the card shows the person's initials.

## Page sections

Hero (misty pine forest) · Who we are · Mission & vision · What we do · Core values · The story behind our logo · Team · Get involved · Footer

## Deploying

1. In the GitHub repository, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
2. Push to `main`. The workflow in `.github/workflows/deploy.yml` checks, builds and publishes the site.
3. Update `site` in [`astro.config.mjs`](astro.config.mjs) to the final domain (used for canonical links, social previews and the sitemap). For a custom domain, add it in **Settings → Pages** and put a `CNAME` file containing the domain in `public/`.

The workflow builds the site for the URL GitHub Pages serves it from, so it works both on a custom domain and under `https://<user>.github.io/<repo>/`. To build for a sub-path locally: `BASE_PATH=/cefa-website npm run build`.

## Credits

- Logo designed by [@arts_so.m](https://www.instagram.com/arts_so.m/)
- Hero photo by [Dan Otis](https://unsplash.com/photos/OYFHT4X5isg) on Unsplash ([Unsplash License](https://unsplash.com/license))
