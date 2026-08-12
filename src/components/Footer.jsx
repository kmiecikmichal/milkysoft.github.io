import { Link, useLocation } from 'react-router-dom'
import './Footer.css'
import logo from '../assets/Milkysoft_logo_new.svg'

const SERVICE_LINKS = [
  { id: 'services', label: 'AI Consulting' },
  { id: 'services', label: 'Agentic Systems' },
  { id: 'services', label: 'Custom Development' }
]

const COMPANY_LINKS = [
  { id: 'expertise', label: 'Expertise' },
  { id: 'technologies', label: 'Technologies' },
  { id: 'contact', label: 'Contact' }
]

const Footer = () => {
  const { pathname } = useLocation()
  // The footer also renders on /privacy-policy and the 404 page, where these
  // sections do not exist - there the links have to go back to the home page.
  const isHome = pathname === '/'

  const handleSectionClick = (e, id) => {
    if (!isHome) return
    const element = document.getElementById(id)
    if (!element) return
    e.preventDefault()
    window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' })
  }

  const sectionLinks = (links) =>
    links.map(({ id, label }) => (
      <li key={label}>
        <a href={isHome ? `#${id}` : `/#${id}`} onClick={(e) => handleSectionClick(e, id)}>
          {label}
        </a>
      </li>
    ))

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <img src={logo} alt="Milkysoft" className="footer-logo-image" />
            <p className="footer-tagline">We code, you profit</p>
          </div>

          <div className="footer-column">
            <h4>Services</h4>
            <ul>{sectionLinks(SERVICE_LINKS)}</ul>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <ul>{sectionLinks(COMPANY_LINKS)}</ul>
          </div>

          <div className="footer-column">
            <h4>Connect</h4>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/company/milkysoft"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/milkysoft_io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a href="mailto:contact@milkysoft.io">contact@milkysoft.io</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Milkysoft. All rights reserved.{' '}
            <Link to="/privacy-policy" className="privacy-link">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
