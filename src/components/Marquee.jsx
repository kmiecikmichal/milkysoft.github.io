import { FileText } from '@phosphor-icons/react'
import { useLang } from '../i18n/lang'
import './Marquee.css'

// A slow strip of the document types a knowledge base reads. The list is drawn
// twice so the loop is seamless; the copy is hidden from screen readers.
const Marquee = () => {
  const { t } = useLang()
  const { label, items } = t.marquee

  const row = (hidden) => (
    <ul className="marquee-row" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li key={item}>
          <FileText size={22} weight="fill" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  )

  return (
    <section className="marquee" aria-label={label}>
      <p className="marquee-label">{label}</p>
      <div className="marquee-track">
        <div className="marquee-inner">
          {row(false)}
          {row(true)}
        </div>
      </div>
    </section>
  )
}

export default Marquee
