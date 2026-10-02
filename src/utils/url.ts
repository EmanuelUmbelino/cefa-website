/** Prefix a root-relative path with the configured base (e.g. `/cefa-website` on GitHub Pages). */
export const withBase = (path = '') =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
