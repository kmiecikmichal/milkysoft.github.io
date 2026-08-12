import { useState, useEffect } from 'react'
import './Navbar.css'
import logo from '../assets/Milkysoft_logo_new.svg'

const NAV_ITEMS = [
  { id: 'services', label: 'Services' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'technologies', label: 'Technologies' },
  { id: 'contact', label: 'Contact' }
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Real hrefs keep the links crawlable and keyboard-operable; this only takes
  // over to add the sticky-header offset and close the mobile menu.
  const handleNavClick = (e, id) => {
    const element = document.getElementById(id)
    if (!element) return
    e.preventDefault()
    window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} aria-label="Main">
      <div className="container">
        <div className="nav-content">
          <div className="logo">
            <img src={logo} alt="Milkysoft" className="logo-image" />
          </div>

          <ul id="primary-navigation" className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            {NAV_ITEMS.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} onClick={(e) => handleNavClick(e, id)}>
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="primary-navigation"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
