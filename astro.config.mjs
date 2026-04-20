// @ts-check
import { defineConfig } from 'astro/config';

// If deploying to a project-level GitHub Pages URL
// (https://<user>.github.io/workshopbysam/), keep `base` set to '/workshopbysam/'.
// If deploying to a user/org root site (https://<user>.github.io/),
// or to a custom domain, set `base: '/'` and update `site` accordingly.
export default defineConfig({
  site: 'https://YOUR-GITHUB-USERNAME.github.io',
  base: '/workshopbysam/',
  trailingSlash: 'ignore',
  build: {
    assets: '_assets',
  },
});
