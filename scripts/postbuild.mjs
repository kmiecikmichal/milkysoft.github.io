/**
 * Post-build steps for a client-side-routed app on GitHub Pages.
 *
 * GitHub Pages has no rewrite rules, so a deep link only resolves if a real file
 * sits at that path. Serving every route through 404.html works for humans but
 * returns HTTP 404, which makes crawlers treat the page as a soft 404 and skip
 * indexing it. So each real route also gets a directory index that returns 200.
 */
import { mkdirSync, copyFileSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const SITE = 'https://milkysoft.io'

// Routes that must resolve with a 200 on a hard navigation. Keep in sync with
// the <Route> list in src/App.jsx.
const ROUTES = [
  {
    path: 'en',
    lang: 'en',
    title: 'Milkysoft - AI on your own servers',
    description:
      'We deploy language models on company servers: knowledge bases with chat and custom AI applications. Your data never leaves your network.'
  },
  {
    path: 'privacy-policy',
    lang: 'pl',
    title: 'Polityka Prywatności - Milkysoft',
    description:
      'Polityka prywatności Milkysoft Sp. z o.o. - zasady przetwarzania danych osobowych zgodnie z RODO, cele, podstawy prawne, okresy przechowywania i prawa osób, których dane dotyczą.'
  },
  {
    path: 'en/privacy-policy',
    lang: 'en',
    title: 'Privacy Policy - Milkysoft',
    description:
      'Privacy policy of Milkysoft Sp. z o.o.: how we process personal data under the GDPR, for what purposes and on what legal bases, how long we keep it and your rights.'
  }
]

const LOCALE = { pl: 'pl_PL', en: 'en_US' }

const shell = readFileSync(join(dist, 'index.html'), 'utf8')

const replaceMeta = (html, pattern, replacement) => {
  if (!pattern.test(html)) {
    throw new Error(`postbuild: expected to find ${pattern} in index.html`)
  }
  return html.replace(pattern, replacement)
}

for (const route of ROUTES) {
  let html = shell
  const url = `${SITE}/${route.path}/`

  html = replaceMeta(html, /<html lang="[^"]*">/, `<html lang="${route.lang}">`)
  html = replaceMeta(html, /<title>[^<]*<\/title>/, `<title>${route.title}</title>`)
  html = replaceMeta(
    html,
    /(<meta\s+name="description"\s+content=")[^"]*(")/s,
    `$1${route.description}$2`
  )
  html = replaceMeta(html, /(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
  html = replaceMeta(html, /(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
  html = replaceMeta(html, /(<meta property="og:title" content=")[^"]*(")/, `$1${route.title}$2`)
  html = replaceMeta(html, /(<meta name="twitter:title" content=")[^"]*(")/, `$1${route.title}$2`)
  html = replaceMeta(
    html,
    /(<meta property="og:locale" content=")[^"]*(" \/>\s*<meta property="og:locale:alternate" content=")[^"]*(")/,
    `$1${LOCALE[route.lang]}$2${LOCALE[route.lang === 'pl' ? 'en' : 'pl']}$3`
  )

  const dir = join(dist, route.path)
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, 'index.html'), html)
  console.log(`postbuild: wrote ${route.path}/index.html (200 on hard navigation)`)
}

// SPA fallback for anything not prerendered above. Renders the in-app 404 page,
// and a real 404 status is the correct answer for an unknown URL.
copyFileSync(join(dist, 'index.html'), join(dist, '404.html'))
console.log('postbuild: wrote 404.html')

// Stop GitHub Pages from running the output through Jekyll.
writeFileSync(join(dist, '.nojekyll'), '')
console.log('postbuild: wrote .nojekyll')
