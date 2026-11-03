import { useRef } from 'react'
import { Plus } from '@phosphor-icons/react'
import { useLang } from '../i18n/lang'
import { useMediaQuery } from '../ui/useMediaQuery'
import { useAnimatedDetails } from '../ui/useAnimatedDetails'
import './Faq.css'

const EMAIL = 'contact@milkysoft.io'

// Native <details>: keyboard and screen-reader support come for free. A shared
// `name` makes them an accordion: opening one closes the one that was open.
// On phones the hook animates them instead (and keeps one open), since the CSS
// animation in Faq.css runs only in Chrome; the shared name must go there.
const Faq = () => {
  const { t } = useLang()
  const copy = t.faq
  const phone = useMediaQuery('(max-width: 640px)')
  const listRef = useRef(null)
  useAnimatedDetails(listRef, phone)

  return (
    <section className="faq section" id="faq">
      <div className="container faq-layout">
        <div className="faq-header">
          <h2 className="section-title rise">{copy.title}</h2>
          <p className="section-subtitle rise-fade">
            {copy.intro}{' '}
            <a className="faq-mail" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
            .
          </p>
        </div>

        <div className="faq-list" ref={listRef}>
          {copy.items.map(({ q, a }) => (
            <details key={q} className="faq-item" name={phone ? undefined : 'faq'}>
              <summary>
                <span>{q}</span>
                <Plus className="faq-icon" size={22} weight="bold" aria-hidden="true" />
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faq
