# Security & privacy notes

Operational notes for milkysoft.io. Anything that cannot be fixed in this repo is
listed under "Known gaps" with where it *does* have to be fixed.

## What this repo enforces

| Control | Where | Note |
| --- | --- | --- |
| Content Security Policy | `index.html` meta tag | `default-src 'self'`; only `api.web3forms.com` is allowed as a network destination |
| No third-party requests | `src/fonts.css`, `public/fonts/` | Fonts are self-hosted; the page makes zero requests to Google |
| Referrer policy | `index.html` meta tag | `strict-origin-when-cross-origin` |
| Contact-form abuse resistance | `src/components/CTA.jsx` | Honeypot field, submit cooldown, request timeout, recipient not settable from the client |
| Dependency hygiene | `.github/workflows/deploy.yml` | `npm audit --omit=dev --audit-level=high` fails the build |
| Automated updates | `.github/dependabot.yml` | Weekly npm, monthly actions |

## Known gaps (cannot be fixed from this repo)

GitHub Pages serves static files and does not let you set response headers. The
following therefore **cannot** be delivered from here:

- `Content-Security-Policy: frame-ancestors` / `X-Frame-Options` — clickjacking
  protection. `frame-ancestors` is ignored when CSP is delivered via a meta tag,
  so today the site can be framed by anyone.
- `X-Content-Type-Options: nosniff`
- `Permissions-Policy`
- `Strict-Transport-Security` with `includeSubDomains; preload` — GitHub sends a
  bare one-year HSTS header that cannot be changed.
- `Access-Control-Allow-Origin` is `*` on every asset, set by GitHub.

**Fix:** put Cloudflare (free tier) in front of the domain and set the headers
there, or move hosting to Cloudflare Pages / Netlify. This is also what unlocks
rate limiting and a WAF in front of the contact form.

## Configuration that lives outside the repo

These are one-time settings. If the site is ever rebuilt from scratch, redo them.

### DNS (registrar: GoDaddy)

```
_dmarc            TXT   v=DMARC1; p=none; rua=mailto:dmarc@milkysoft.io; fo=1
@                 CAA   0 issue "letsencrypt.org"
@                 CAA   0 issue "pki.goog"
@                 CAA   0 issuewild ";"
@                 CAA   0 iodef "mailto:contact@milkysoft.io"
@                 AAAA  2606:50c0:8000::153
@                 AAAA  2606:50c0:8001::153
@                 AAAA  2606:50c0:8002::153
@                 AAAA  2606:50c0:8003::153
```

SPF already exists and is strict (`v=spf1 include:secureserver.net -all`). DKIM
must be enabled in the mail provider's panel — it is not currently published.

Start DMARC at `p=none`, read the aggregate reports for 2-4 weeks, then move to
`p=quarantine` and finally `p=reject`.

### GitHub

- **Settings → Pages → verify custom domain.** Until `milkysoft.io` is verified,
  the domain can be claimed by another GitHub account if this repo or its Pages
  site ever goes away.
- **Settings → Pages → Source: GitHub Actions** (required by the deploy workflow).
- **Default branch: `main`.** Serving `gh-pages` as the default means visitors to
  the repo see minified build output instead of source.

### Web3Forms

- Enable hCaptcha or Cloudflare Turnstile on the form.
- Restrict the access key to the `milkysoft.io` domain.
- Set the recipient address in the dashboard. The client must never send
  `to_email` — it is attacker-controlled.

## Reporting

See `public/.well-known/security.txt`.
