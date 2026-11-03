import { Link, useLocation } from 'react-router-dom'
import { useLang, homePath, privacyPath } from '../i18n/lang'
import './Footer.css'
import logo from '../assets/Milkysoft_logo_new.svg'

const COMPANY_IDS = ['expertise', 'technologies', 'process', 'team', 'contact']

// Keep hyphenated words such as "on-premise" whole; browsers break lines at the hyphen
const keepHyphenated = (label) =>
  label.split(/(\S+-\S+)/).map((part, i) =>
    i % 2 ? (
      <span key={i} className="footer-nowrap">
        {part}
      </span>
    ) : (
      part
    )
  )

const Footer = () => {
  const { pathname } = useLocation()
  const { lang, t } = useLang()
  const copy = t.footer
  // The footer also renders on /privacy-policy and the 404 page, where these
  // sections do not exist - there the links have to go back to the home page.
  const home = homePath(lang)
  const isHome = pathname === home

  const handleSectionClick = (e, id) => {
    if (!isHome) return
    const element = document.getElementById(id)
    if (!element) return
    e.preventDefault()
    element.scrollIntoView({ behavior: 'smooth' })
  }

  const href = (id) => (isHome ? `#${id}` : `${home === '/' ? '' : home}/#${id}`)
  const companyLabel = (id) => (id === 'contact' ? copy.contact : t.nav.items[id])

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <img src={logo} alt="Milkysoft" className="footer-logo-image" />
            <p className="footer-tagline">{copy.tagline}</p>
          </div>

          <div className="footer-column">
            <h2>{copy.services}</h2>
            <ul>
              {copy.serviceLinks.map((label) => (
                <li key={label}>
                  <a href={href('services')} onClick={(e) => handleSectionClick(e, 'services')}>
                    {keepHyphenated(label)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h2>{copy.company}</h2>
            <ul>
              {COMPANY_IDS.map((id) => (
                <li key={id}>
                  <a href={href(id)} onClick={(e) => handleSectionClick(e, id)}>
                    {companyLabel(id)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h2>{copy.connect}</h2>
            <ul>
              <li>
                <a href="https://www.linkedin.com/company/milkysoft" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/milkysoft_io" target="_blank" rel="noopener noreferrer">
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
            &copy; {new Date().getFullYear()} Milkysoft. {copy.rights}
          </p>
          <Link to={privacyPath(lang)} className="privacy-link">
            {copy.privacy}
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
