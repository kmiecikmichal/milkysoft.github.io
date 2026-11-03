# Milkysoft website

Marketing site for milkysoft.io. React 18 + Vite, plain CSS per component (`src/components/*.css`), global tokens in `src/App.css`. Deployed to GitHub Pages via `npm run deploy`.

## Positioning

Milkysoft builds **on-premise LLM solutions**: models deployed on the client's own infrastructure, where data never leaves their network. Every section should support this. Generic "we do AI / web / Web3" content dilutes it.

## Brand (fixed, do not change)

- Logo: `src/assets/Milkysoft_logo_new.svg`
- Colors: terracotta `#CF6C58`, teal `#3BA181`, blue `#3079B5`, yellow `#F8CC45` / `#FFD80B`, cream background `#FFFCF4`, text `#313030`, muted text `#6B6866`
- Type: Inter Tight (700, tight tracking) for headings, Inter for body. Alfa Slab One was dropped in Oct 2026 by the owner's decision; the logo SVG keeps its own lettering.

Cream + terracotta is close to a common AI-generated look, so distinctiveness has to come from layout, typography treatment, the other brand colors in real roles, and specific content, not from new colors.

## Design rules

- One signature element per page; keep everything else quiet.
- No stock gradients (uiGradients-style purple/pink/cyan), no rows of identical icon cards, no soft-shadow card kits.
- No numbered markers (01/02/03) unless the content is a real sequence.
- No scattered fade-up-on-scroll for every section; motion only where it means something.
- No unverifiable stats. Numbers need context (what, for whom, measured how).
- Real copy only: specific, plain, active voice, no filler.
- Quality floor: responsive to 320px, visible keyboard focus, `prefers-reduced-motion` respected.

## Verifying UI changes

Run `npm run dev` and check the rendered page with the Playwright MCP at desktop (1440px) and mobile (390px) widths before calling a visual change done.
