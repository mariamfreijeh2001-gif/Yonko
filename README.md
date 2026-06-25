# Yonko Capital — Landing Page

A component-based landing page built with **React + Vite**. Content is
data-driven, so updating the site means editing simple arrays — no HTML digging.

## Run locally

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## Project structure

```
public/assets/         images, icons, partner logos
src/
  data/                ← edit content here
    site.js            brand, nav, hero, how-we-work, contact, footer
    services.js        "What We Do" cards
    differentiators.js "Why We Are Different" items
    partners.js        partner logos + links
  components/          one component per section (+ reusable Reveal)
  hooks/               useParallax, useScrollSpy
  index.css           global styles + design tokens
  App.jsx             page composition
  main.jsx            app entry
```

## Common edits

- **Add a partner** → append an object to the array in `src/data/partners.js`
  (drop its logo in `public/assets/partners/`).
- **Add a service / differentiator** → append to `src/data/services.js` or
  `src/data/differentiators.js`.
- **Change copy, address, links** → `src/data/site.js`.
- **Colours / fonts** → the `:root` design tokens at the top of `src/index.css`.

## Deploy (Vercel)

Push to GitHub and import the repo in Vercel. It auto-detects Vite, runs
`npm run build`, and serves `dist/`. Security headers, CSP, and asset caching
are configured in `vercel.json`.
