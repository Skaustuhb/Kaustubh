# Kaustubh Sharma — Portfolio

A single-page React portfolio built with Vite and Tailwind CSS.

## Edit your content

All copy lives in one place: `src/data.js`. Update your name, role, skills,
experience, projects, education, and contact links there — the components
just render it.

Two things to fill in before you deploy:
- `profile.github` and `profile.linkedin` in `src/data.js`
- Replace the sample project descriptions with anything new you build

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Outputs static files to `dist/`.

## Deploy to GitHub Pages

1. In `vite.config.js`, set `base` to your repo name (skip this if using a
   `username.github.io` repo):

   ```js
   export default defineConfig({
     plugins: [react()],
     base: "/your-repo-name/",
   });
   ```

2. Install the deploy helper and add a script:

   ```bash
   npm install -D gh-pages
   ```

   Add to `package.json`:

   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

3. Push your code to GitHub, then run:

   ```bash
   npm run deploy
   ```

4. In your GitHub repo settings → Pages, set the source branch to `gh-pages`.

Your site will be live at `https://<your-username>.github.io/<your-repo-name>/`.
