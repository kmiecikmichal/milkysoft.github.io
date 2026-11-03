import { useRef } from 'react'
import { Plus } from '@phosphor-icons/react'
import { useLang } from '../i18n/lang'
import { ICONS } from '../ui/icons'
import { useMediaQuery } from '../ui/useMediaQuery'
import { useAnimatedDetails } from '../ui/useAnimatedDetails'
import SectionHeader from '../ui/SectionHeader'
import './Technologies.css'

const Technologies = () => {
  const { t } = useLang()
  const copy = t.tech
  // Phones get the titles only, as a list that fits on one screen; each row
  // opens its description, animated like Services and the FAQ.
  const phone = useMediaQuery('(max-width: 640px)')
  const listRef = useRef(null)
  useAnimatedDetails(listRef, phone)

  return (
    <section className="technologies section" id="technologies">
      <div className="container">
        <SectionHeader copy={copy} />

        <ul className="capabilities" ref={listRef}>
          {copy.items.map(({ icon, title, description }) => {
            const Icon = ICONS[icon]
            const iconEl = <Icon className="capability-icon" size={28} weight="fill" aria-hidden="true" />

            if (phone) {
              return (
                <li key={title} className="capability is-fold">
                  <details>
                    <summary>
                      {iconEl}
                      <h3 className="capability-title">{title}</h3>
                      <Plus className="capability-fold-icon" size={22} weight="bold" aria-hidden="true" />
                    </summary>
                    <p className="capability-description">{description}</p>
                  </details>
                </li>
              )
            }

            return (
              <li key={title} className="capability">
                {iconEl}
                <div>
                  <h3 className="capability-title">{title}</h3>
                  <p className="capability-description">{description}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Technologies
