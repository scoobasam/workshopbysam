# workshopbysam

A testing ground for interactive demos and design experiments. Built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Quick start

```bash
npm install
npm run dev
```

Then open http://localhost:4321 — pages live under `src/pages/`, experiments under `src/pages/experiments/`.

## Add an experiment

1. **Create a page** in `src/pages/experiments/<slug>.astro`. Use `ExperimentLayout` for the header/frame:

   ```astro
   ---
   import ExperimentLayout from '../../layouts/ExperimentLayout.astro';
   ---
   <ExperimentLayout title="My thing" description="One-liner." tags={['canvas']} date="2026-04">
     <div class="experiment-body">
       <!-- your interactive content here -->
     </div>
   </ExperimentLayout>
   ```

   For interactive JS, wrap it in `<script is:inline>...</script>` (no module bundling, just pasted into the page).

2. **Register it** in `src/data/experiments.js` so it shows up on the home page and index:

   ```js
   {
     slug: 'my-thing',
     title: 'My Thing',
     description: 'One-liner.',
     tags: ['canvas'],
     date: '2026-04',
     tone: 'pink', // pink | orange | yellow | lime | sky | violet
   }
   ```

3. If your experiment is a standalone HTML file, drop it in `public/` and embed it with an `<iframe>` — that's how `economic-globe.astro` works. Files in `public/` are served as-is.

## Deploy to GitHub Pages

1. **Create a repo** on GitHub named `workshopbysam` (any name works — but if you change it, update `base` in `astro.config.mjs`).

2. **Point `site` at your username** in `astro.config.mjs`:

   ```js
   site: 'https://YOUR-GITHUB-USERNAME.github.io',
   base: '/workshopbysam/',
   ```

   - For a **user site** (`<username>.github.io` repo) or a **custom domain**, set `base: '/'` instead.

3. **Push the code:**

   ```bash
   git init
   git add .
   git commit -m "first push"
   git branch -M main
   git remote add origin https://github.com/YOUR-GITHUB-USERNAME/workshopbysam.git
   git push -u origin main
   ```

4. In the repo on GitHub, go to **Settings → Pages** and set **Source** to **GitHub Actions**.

5. The workflow in `.github/workflows/deploy.yml` runs on every push to `main` and publishes the site. Check the Actions tab for build progress. First deploy takes ~2 minutes.

## Project structure

```
workshopbysam/
├── .github/workflows/deploy.yml   GitHub Pages deploy
├── astro.config.mjs               site + base URL config
├── package.json
├── public/
│   ├── favicon.svg
│   └── economic-globe.html        standalone HTML embedded via iframe
└── src/
    ├── data/experiments.js        list of experiments (edit this to add)
    ├── layouts/
    │   ├── BaseLayout.astro       site chrome (header, footer)
    │   └── ExperimentLayout.astro experiment page frame
    ├── pages/
    │   ├── index.astro            home
    │   ├── about.astro
    │   └── experiments/
    │       ├── index.astro        experiment listing
    │       ├── economic-globe.astro
    │       ├── color-field.astro
    │       └── canvas-bloom.astro
    └── styles/global.css          design tokens + shared styles
```

## Design tokens

Change colors, type, radii, etc. in `src/styles/global.css` under `:root`. Dark mode kicks in automatically from the system preference.

Card glow colors: `is-pink`, `is-orange`, `is-yellow`, `is-lime`, `is-sky`, `is-violet`.
