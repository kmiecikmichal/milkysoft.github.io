import { useRef } from 'react'
import { Check, Plus } from '@phosphor-icons/react'
import { useLang } from '../i18n/lang'
import { ICONS } from '../ui/icons'
import { useMediaQuery } from '../ui/useMediaQuery'
import { useAnimatedDetails } from '../ui/useAnimatedDetails'
import SectionHeader from '../ui/SectionHeader'
import './Services.css'

const Features = ({ items }) => (
  <ul className="service-features">
    {items.map((feature) => (
      <li key={feature}>
        <Check size={16} weight="bold" aria-hidden="true" />
        {feature}
      </li>
    ))}
  </ul>
)

const Services = () => {
  const { t } = useLang()
  const copy = t.services
  // Phones get an accordion: three titled rows that fit on one screen, the
  // first one open. Native <details>, so keyboard support comes for free; the
  // hook animates them and keeps one open at a time.
  const phone = useMediaQuery('(max-width: 640px)')
  const gridRef = useRef(null)
  useAnimatedDetails(gridRef, phone)

  return (
    <section className="services section" id="services">
      <div className="container">
        <SectionHeader copy={copy} layout="stack" />

        <div className="services-grid" ref={gridRef}>
          {copy.items.map(({ icon, tone, title, description, features }, i) => {
            const Icon = ICONS[icon]
            const badge = (
              <span className={`service-icon tone-${tone}`} aria-hidden="true">
                <Icon size={26} weight="bold" />
              </span>
            )

            if (phone) {
              return (
                <details key={title} className="service-fold" open={i === 0}>
                  <summary>
                    {badge}
                    <h3 className="service-title">{title}</h3>
                    <Plus className="service-fold-icon" size={22} weight="bold" aria-hidden="true" />
                  </summary>
                  <div className="service-fold-body">
                    <p className="service-description">{description}</p>
                    <Features items={features} />
                  </div>
                </details>
              )
            }

            return (
              <article key={title} className="service">
                {badge}
                <h3 className="service-title">{title}</h3>
                <p className="service-description">{description}</p>
                <Features items={features} />
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
