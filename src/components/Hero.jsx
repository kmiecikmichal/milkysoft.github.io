import { useEffect, useRef, useState } from 'react'
import { CaretRight, FileDoc, FilePdf, FileXls } from '@phosphor-icons/react'
import KnowledgeCard from './KnowledgeCard'
import { useLang } from '../i18n/lang'
import { ICONS } from '../ui/icons'
import { useMediaQuery } from '../ui/useMediaQuery'
import servers from '../assets/mock/hero-servers.jpg'
import './Hero.css'

// Company files, set into the headline where the reference has faces
const FILE_CHIPS = [
  { Icon: FilePdf, tone: 'terracotta' },
  { Icon: FileDoc, tone: 'blue' },
  { Icon: FileXls, tone: 'teal' }
]

const starburst = (() => {
  const points = []
  for (let i = 0; i < 32; i++) {
    const r = i % 2 ? 34 : 50
    const a = (Math.PI * i) / 16
    points.push(`${(50 + r * Math.sin(a)).toFixed(2)},${(50 - r * Math.cos(a)).toFixed(2)}`)
  }
  return points.join(' ')
})()

const Hero = () => {
  const { t } = useLang()
  const copy = t.hero
  const visualRef = useRef(null)
  const filesRef = useRef(null)
  const [thinking, setThinking] = useState(false)
  const [hopping, setHopping] = useState(false)

  // Each time the card starts thinking, the dots run one wave with a fixed number
  // of hops (set in CSS). Tying the wave to how long the card thinks gave 2 hops
  // for short answers and 3 for long ones.
  useEffect(() => {
    if (thinking) setHopping(true)
  }, [thinking])

  // When every dot has landed, drop the class so the next wave starts fresh
  useEffect(() => {
    if (!hopping) return undefined
    const hops = (filesRef.current?.getAnimations({ subtree: true }) ?? []).filter(
      (a) => a.animationName === 'typing-dot'
    )
    let cancelled = false
    Promise.all(hops.map((a) => a.finished))
      .then(() => !cancelled && setHopping(false))
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [hopping])

  // Gentle depth on the visual: layers drift against the pointer
  useEffect(() => {
    const el = visualRef.current
    if (!el) return undefined
    const fine = window.matchMedia('(pointer: fine)').matches
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || calm) return undefined
    let raf = 0
    const move = (e) => {
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        el.style.setProperty('--px', x.toFixed(3))
        el.style.setProperty('--py', y.toFixed(3))
      })
    }
    const leave = () => {
      el.style.setProperty('--px', 0)
      el.style.setProperty('--py', 0)
    }
    el.addEventListener('pointermove', move)
    el.addEventListener('pointerleave', leave)
    return () => {
      cancelAnimationFrame(raf)
      el.removeEventListener('pointermove', move)
      el.removeEventListener('pointerleave', leave)
    }
  }, [])

  // On phones the statement moves under the headline as the lead, so the first
  // screen says what we do before the photo; on wider screens it keeps its row.
  // The lead drops the icons: right under the file chips in the headline they
  // were a second row of coloured dots, and in a narrow column they break up
  // the sentence instead of marking distant points of it.
  const phone = useMediaQuery('(max-width: 640px)')
  const statement = (className, withIcons = true) => (
    <span className={className}>
      {copy.statement.map((part, i) => {
        if (part.text) return <span key={i}>{part.text} </span>
        if (!withIcons) return null
        const Icon = ICONS[part.icon]
        return (
          <span key={i} className={`statement-icon tone-${part.tone}`} aria-hidden="true">
            <Icon size={26} weight="bold" />
          </span>
        )
      })}
    </span>
  )

  return (
    <section className="hero" id="top">
      <div className="hero-grid">
        <div className="hero-main">
          <p className="hero-badge">
            <span className="hero-badge-icon" aria-hidden="true">
              <ICONS.HardDrives size={20} weight="bold" />
            </span>
            {copy.badge}
          </p>

          <h1 className="hero-title">
            {copy.titleLines.map((line, i) => (
              <span className="hero-line" key={line}>
                <span className="hero-line-inner" style={{ '--i': i }}>
                  {line}
                  {i === copy.filesAfterLine && (
                    <span
                      ref={filesRef}
                      className={`hero-files${hopping ? ' is-thinking' : ''}`}
                      role="img"
                      aria-label={copy.filesLabel}
                    >
                      {FILE_CHIPS.map(({ Icon, tone }, a) => (
                        <span key={tone} className="hero-file-slot" style={{ '--a': a }}>
                          <span className={`hero-file tone-${tone}`}>
                            <Icon weight="fill" />
                          </span>
                        </span>
                      ))}
                    </span>
                  )}
                </span>
              </span>
            ))}
          </h1>

          {phone && <p className="hero-lead">{statement(undefined, false)}</p>}

          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">
              {copy.cta}
            </a>
            <a className="link-underline" href="#process">
              {copy.link}
            </a>
          </div>
        </div>

        <div className="hero-visual" ref={visualRef}>
          <div className="hero-visual-inner">
            <svg className="hero-pinwheel layer-3" viewBox="0 0 100 100" aria-hidden="true">
              {[0, 90, 180, 270].map((deg) => (
                <rect key={deg} x="50" y="6" width="26" height="44" rx="13" transform={`rotate(${deg} 50 50)`} />
              ))}
            </svg>

            <div className="hero-grid-pattern layer-1" aria-hidden="true" />

            <div className="hero-arch layer-2">
              <img src={servers} alt={copy.photoAlt} width="720" height="880" />
            </div>

            <svg className="hero-starburst layer-3" viewBox="0 0 100 100" aria-hidden="true">
              <polygon points={starburst} />
            </svg>

            <p className="hero-vertical layer-1" aria-label={copy.verticalLabel}>
              <span aria-hidden="true">{copy.vertical}</span>
            </p>

            <div className="hero-card layer-4" aria-hidden="true">
              <KnowledgeCard copy={copy.kb} onThinking={setThinking} />
            </div>
          </div>
        </div>

        {!phone && <p className="hero-statement">{statement('hero-statement-text rise')}</p>}

        <ul className="hero-promises">
          {copy.promises.map(({ icon, text }) => {
            const Icon = ICONS[icon]
            return (
              <li key={text}>
                <a href="#process">
                  <Icon className="promise-icon" size={24} weight="fill" aria-hidden="true" />
                  <span>{text}</span>
                  <CaretRight className="promise-caret" size={18} weight="bold" aria-hidden="true" />
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Hero
