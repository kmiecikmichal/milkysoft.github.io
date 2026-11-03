import { useState, useEffect, useLayoutEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowUpRight } from '@phosphor-icons/react'
import './Navbar.css'
import logo from '../assets/Milkysoft_logo_new.svg'
import { useLang, homePath } from '../i18n/lang'
import { COPY } from '../i18n/copy'

const NAV_IDS = ['services', 'expertise', 'technologies', 'process', 'team']
const LANGS = ['pl', 'en']

// `langPath` maps a language to this page in that language, so the switch
// keeps the reader on the same page (home by default, or the privacy policy).
// Off the home page the section links lead back to home.
const Navbar = ({ langPath = homePath }) => {
  const { lang, t } = useLang()
  const { pathname } = useLocation()
  const home = homePath(lang)
  const isHome = pathname === home
  const sectionHref = (id) => (isHome ? `#${id}` : `${home === '/' ? '' : home}/#${id}`)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeId, setActiveId] = useState(null)
  const [indicator, setIndicator] = useState(null)
  const listRef = useRef(null)
  const navRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scrollspy: the section crossing the middle of the viewport is the active one
  useEffect(() => {
    const visible = new Set()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.add(entry.target.id)
          else visible.delete(entry.target.id)
        })
        setActiveId(NAV_IDS.find((id) => visible.has(id)) ?? null)
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    NAV_IDS.forEach((id) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })
    return () => observer.disconnect()
  }, [])

  // Re-measure whenever a link changes size, not only when the section changes:
  // switching language or a late font swap changes the labels' widths
  useLayoutEffect(() => {
    const list = listRef.current
    if (!list) return undefined
    const measure = () => {
      const link = activeId && list.querySelector(`[href="#${activeId}"]`)
      setIndicator(link ? { left: link.offsetLeft, width: link.offsetWidth } : null)
    }
    measure()
    const observer = new ResizeObserver(measure)
    list.querySelectorAll('a').forEach((link) => observer.observe(link))
    return () => observer.disconnect()
  }, [activeId])

  // While the menu is open: Escape closes it and returns focus to the toggle,
  // focus leaving the nav closes it, and the page under it does not scroll
  useEffect(() => {
    if (!menuOpen) return undefined
    const nav = navRef.current
    const handleKey = (e) => {
      if (e.key !== 'Escape') return
      setMenuOpen(false)
      nav?.querySelector('.mobile-menu-toggle')?.focus()
    }
    const handleFocus = (e) => {
      if (nav && !nav.contains(e.target)) setMenuOpen(false)
    }
    const root = document.documentElement
    root.classList.add('menu-locked')
    window.addEventListener('keydown', handleKey)
    document.addEventListener('focusin', handleFocus)
    return () => {
      root.classList.remove('menu-locked')
      window.removeEventListener('keydown', handleKey)
      document.removeEventListener('focusin', handleFocus)
    }
  }, [menuOpen])

  // The menu exists only below 1100px; close it if the window grows past that
  useEffect(() => {
    const wide = window.matchMedia('(min-width: 1101px)')
    const handleChange = (e) => e.matches && setMenuOpen(false)
    wide.addEventListener('change', handleChange)
    return () => wide.removeEventListener('change', handleChange)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav
      ref={navRef}
      className={`navbar ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}
      aria-label={t.nav.label}
    >
      <div className="container nav-content">
        {isHome ? (
          <a className="logo" href="#top" onClick={closeMenu}>
            <img src={logo} alt={t.nav.logo} className="logo-image" />
          </a>
        ) : (
          <Link className="logo" to={home}>
            <img src={logo} alt={t.nav.home} className="logo-image" />
          </Link>
        )}

        {/* The toggle comes before the panel, so Tab moves from it straight into
            the open menu. On desktop it is hidden and the grid is unaffected. */}
        <button
          type="button"
          className="mobile-menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? t.nav.close : t.nav.open}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>

        <div className="nav-panel" id="primary-navigation">
          <ul className="nav-links" ref={listRef}>
            {NAV_IDS.map((id) => (
              <li key={id}>
                <a
                  href={sectionHref(id)}
                  className={activeId === id ? 'active' : ''}
                  aria-current={activeId === id ? 'location' : undefined}
                  onClick={closeMenu}
                >
                  {t.nav.items[id]}
                </a>
              </li>
            ))}
            <li
              className="nav-indicator"
              aria-hidden="true"
              style={
                indicator
                  ? { opacity: 1, width: indicator.width, transform: `translateX(${indicator.left}px)` }
                  : { opacity: 0 }
              }
            />
          </ul>
          {/* The language switch sits last, against the edge, so it never moves
              when the CTA text changes length */}
          <div className="nav-end">
            <a className="nav-cta" href={sectionHref('contact')} onClick={closeMenu}>
              {t.nav.cta}
              <span className="nav-cta-icon" aria-hidden="true">
                <ArrowUpRight size={18} weight="bold" />
              </span>
            </a>
            <div className="nav-lang" data-current={lang} role="group" aria-label={t.meta.langLabel}>
              {/* Both options stay links so React keeps the same elements across a
                  switch and their colour can fade along with the thumb */}
              {LANGS.map((code) => (
                <Link
                  key={code}
                  className={`nav-lang-option${code === lang ? ' is-current' : ''}`}
                  to={langPath(code)}
                  hrefLang={code}
                  lang={code}
                  aria-current={code === lang ? 'true' : undefined}
                  aria-label={COPY[code].meta.langName}
                  preventScrollReset
                  onClick={closeMenu}
                >
                  {code.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="nav-backdrop" aria-hidden="true" onClick={closeMenu} />
    </nav>
  )
}

export default Navbar
