import Navbar from './Navbar'
import Footer from './Footer'
import { useLang, privacyPath } from '../i18n/lang'
import * as policyPl from './privacy/policyPl'
import * as policyEn from './privacy/policyEn'
import './PrivacyPolicy.css'

const POLICY = { pl: policyPl, en: policyEn }

// A long legal document, set for reading: contents on the left (sticky on
// desktop), the text in a single measure on the right, sections split by rules.
const PrivacyPolicy = () => {
  const { lang, t } = useLang()
  const { title, updated, note, sections } = POLICY[lang]

  return (
    <>
      <Navbar langPath={privacyPath} />
      <main className="privacy" id="main">
        <div className="container privacy-layout">
          <header className="privacy-header">
            <h1 className="privacy-title">{title}</h1>
            <p className="privacy-updated">{updated}</p>
            {note && <p className="privacy-note">{note}</p>}
          </header>

          <nav className="privacy-toc" aria-labelledby="privacy-toc-label">
            <p className="privacy-toc-label" id="privacy-toc-label">
              {t.privacy.contents}
            </p>
            <ul>
              {sections.map(({ id, heading }) => (
                <li key={id}>
                  <a href={`#${id}`}>{heading}</a>
                </li>
              ))}
            </ul>
          </nav>

          <article className="privacy-body">
            {sections.map(({ id, heading, body }) => (
              <section key={id} id={id} className="privacy-section" aria-labelledby={`${id}-heading`}>
                <h2 id={`${id}-heading`}>{heading}</h2>
                {body}
              </section>
            ))}
          </article>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default PrivacyPolicy
