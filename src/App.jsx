import { useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Marquee from './components/Marquee'
import Process from './components/Process'
import Expertise from './components/Expertise'
import Technologies from './components/Technologies'
import Team from './components/Team'
import Faq from './components/Faq'
import CTA from './components/CTA'
import Footer from './components/Footer'
import PrivacyPolicy from './components/PrivacyPolicy'
import NotFound from './components/NotFound'
import { LangProvider } from './i18n/LangContext'
import { privacyPath } from './i18n/lang'
import { COPY } from './i18n/copy'
import { useReveal } from './ui/useReveal'
import './App.css'

function Home({ lang }) {
  useReveal(lang)

  // Links from other pages (nav, footer) arrive as /#team. The browser looks for
  // the anchor before React has rendered it, so jump to it once the page is in.
  useEffect(() => {
    const id = window.location.hash.slice(1)
    if (!id) return undefined
    const frame = requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView())
    return () => cancelAnimationFrame(frame)
  }, [])
  return (
    <LangProvider lang={lang}>
      <Navbar />
      <main id="main">
        <Hero />
        <Marquee />
        <Services />
        <Expertise />
        <Technologies />
        <Process />
        <Team />
        <Faq />
        <CTA />
      </main>
      <Footer />
    </LangProvider>
  )
}

function App() {
  // Pages outside Home (404, privacy) pick the language from the path
  const { pathname } = useLocation()
  const lang = pathname.startsWith('/en') ? 'en' : 'pl'

  // Opening another page (e.g. the privacy policy from the footer) starts at its
  // top. Switching language keeps the place: the page is the same, so the key
  // ignores the /en prefix. The first render is left to the browser.
  const page = pathname.replace(/^\/en(?=\/|$)/, '') || '/'
  const firstPage = useRef(true)
  useEffect(() => {
    if (firstPage.current) {
      firstPage.current = false
      return
    }
    if (!window.location.hash) window.scrollTo({ top: 0, behavior: 'instant' })
  }, [page])

  return (
    <div className="app">
      <a className="skip-link" href="#main">
        {COPY[lang].skipLink}
      </a>
      <Routes>
        <Route path="/" element={<Home lang="pl" />} />
        <Route path="/en" element={<Home lang="en" />} />
        {['pl', 'en'].map((code) => (
          <Route
            key={code}
            path={privacyPath(code)}
            element={
              <LangProvider lang={code} title={COPY[code].privacy.metaTitle}>
                <PrivacyPolicy />
              </LangProvider>
            }
          />
        ))}
        <Route
          path="*"
          element={
            <LangProvider lang={lang}>
              <NotFound />
            </LangProvider>
          }
        />
      </Routes>
    </div>
  )
}

export default App
