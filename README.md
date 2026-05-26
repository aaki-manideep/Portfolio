# Manideep Aaki — Portfolio

One-page React portfolio built with Vite.

## Project structure

```
portfolio-jsx/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── index.jsx       # React entry point
    ├── App.jsx         # Root component
    ├── Portfolio.jsx   # Full portfolio (all sections + data)
    └── Portfolio.css   # All styles
```

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server (hot reload)
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build
npm run preview
```

## Customisation

All content lives at the top of `Portfolio.jsx` as plain JS arrays/objects:

- `STATS`        — 4 hero stat numbers
- `SKILLS`       — skill groups and tags
- `HIGHLIGHTS`   — 3 impact cards
- `EXPERIENCES`  — job roles, bullets, stack tags

Edit those arrays and the page updates automatically.

## Deployment

After `npm run build`, upload the `dist/` folder to any static host:

- **Netlify** — drag-and-drop the `dist/` folder at netlify.com/drop
- **Vercel**  — `npx vercel` from the project root
- **GitHub Pages** — push `dist/` to a `gh-pages` branch
