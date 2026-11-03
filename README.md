# Milkysoft

Landing page for [milkysoft.io](https://milkysoft.io), built with React + Vite and
served from GitHub Pages.

## Technologies

- **React 18** — UI library
- **Vite 7** — build tool and dev server
- **React Router 7** — client-side routing
- **PostCSS + Autoprefixer** — CSS processing
- **ESLint 9** (flat config) — linting, including `jsx-a11y` accessibility rules

Styling is plain CSS, one file per component, with design tokens in `src/App.css`.

## Prerequisites

- Node.js 20 or newer
- npm

## Installation

```bash
git clone https://github.com/kmiecikmichal/milkysoft.github.io.git
cd milkysoft-react
npm install
```

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Dev server on http://localhost:5173 |
| `npm run build` | Production build into `dist/`, then `scripts/postbuild.mjs` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | ESLint over the whole project |
| `npm run fonts` | Re-download and regenerate the self-hosted webfonts |
| `npm run deploy` | Manual deploy — normally CI does this, see below |

## Project structure

```
milkysoft-react/
├── .github/workflows/deploy.yml   # CI build + Pages deploy
├── docs/SECURITY.md               # security posture, DNS records, known gaps
├── public/
│   ├── fonts/                     # self-hosted woff2 (generated)
│   ├── .well-known/security.txt
│   ├── robots.txt, sitemap.xml, og-image.png, CNAME
├── scripts/
│   ├── fetch-fonts.sh             # regenerates public/fonts + src/fonts.css
│   └── postbuild.mjs              # prerendered routes, 404.html, .nojekyll
├── src/
│   ├── components/                # <Name>.jsx + <Name>.css pairs
│   ├── hooks/useDocumentLang.js
│   ├── fonts.css                  # generated - do not edit by hand
│   ├── App.jsx, App.css, main.jsx, index.css
├── index.html
└── vite.config.js
```

`dist/` is build output and is **not** committed.

## Fonts are self-hosted

The page makes no requests to Google. Fonts live in `public/fonts/` and are
declared in the generated `src/fonts.css`. Sending visitor IPs to Google Fonts
would contradict the privacy policy's claim that no data leaves the EEA.

To change which weights or icons are bundled, edit `scripts/fetch-fonts.sh` and
run `npm run fonts`. The Material Symbols font is subsetted to only the icons the
site actually uses (~2 KB rather than ~3 MB).

## Routing on GitHub Pages

GitHub Pages has no rewrite rules, so a hard navigation only returns HTTP 200 if a
real file exists at that path. `scripts/postbuild.mjs` therefore writes a
directory index for every real route, plus a `404.html` fallback that renders the
in-app 404 page.

**When adding a route**, add it in two places: the `<Routes>` list in
`src/App.jsx` and the `ROUTES` array in `scripts/postbuild.mjs`. Miss the second
and the page will still work for humans but return 404 to crawlers.

## Deployment

Pushing to `main` builds and deploys via `.github/workflows/deploy.yml`. The
workflow lints, fails on high-severity production vulnerabilities, builds, and
publishes to Pages.

This requires **Settings → Pages → Source: GitHub Actions**.

`npm run deploy` still works as a manual fallback, publishing to the `gh-pages`
branch from your machine.

## Security

See [docs/SECURITY.md](docs/SECURITY.md) for the security posture, the DNS records
that must exist, and the headers GitHub Pages cannot deliver.

## License

Private and proprietary.
