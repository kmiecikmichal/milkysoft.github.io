import { useEffect, useRef, useState } from 'react'
import { CheckCircle, FilePdf, WifiSlash } from '@phosphor-icons/react'
import './DeedDemo.css'

// The first case study, acted out: the agent reads a (made-up) notarial deed,
// marks each detail in the text and fills it into the form beside it. The time
// bars compare the client's estimate for doing it by hand with the agent.
// Starts when scrolled into view, pauses off screen. Reduced motion: the
// finished state, static. The card is visual only; `summary` says it in words.

const READ_MS = 1500
const FIELD_MS = 620
const HOLD_MS = 4200

const DeedDemo = ({ copy }) => {
  const total = copy.fields.length
  const [calm] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const [state, setState] = useState(() => (calm ? { phase: 'done', step: total } : { phase: 'reading', step: 0 }))
  const ref = useRef(null)

  useEffect(() => {
    if (calm) return undefined
    let cancelled = false
    const timers = []
    const wait = (ms) => new Promise((resolve) => timers.push(setTimeout(resolve, ms)))
    let visible = false
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
    }, { threshold: 0.35 })
    if (ref.current) io.observe(ref.current)
    const whenVisible = async () => {
      while (!cancelled && (!visible || document.hidden)) await wait(300)
    }

    const run = async () => {
      while (!cancelled) {
        await whenVisible()
        setState({ phase: 'reading', step: 0 })
        await wait(READ_MS)
        for (let i = 1; i <= total && !cancelled; i++) {
          setState({ phase: 'extracting', step: i })
          await wait(FIELD_MS)
        }
        if (cancelled) return
        setState({ phase: 'done', step: total })
        await wait(HOLD_MS)
      }
    }
    run()

    return () => {
      cancelled = true
      timers.forEach(clearTimeout)
      io.disconnect()
    }
  }, [calm, total])

  const { phase, step } = state
  const progress = phase === 'done' ? 1 : step / total

  return (
    <figure className="deed" ref={ref}>
      <div className="deed-card" aria-hidden="true">
        <div className="deed-head">
          <span className="deed-title">{copy.title}</span>
          <span className="deed-file">
            <FilePdf size={14} weight="fill" />
            <span className="deed-file-name">{copy.file}</span>
          </span>
          <span className="deed-status">
            <WifiSlash className="deed-offline" size={15} weight="bold" aria-hidden="true" />
            {copy.status}
          </span>
        </div>

        <div className="deed-body">
          <div className={`deed-paper${phase === 'reading' ? ' is-reading' : ''}`}>
            <p className="deed-heading">{copy.heading}</p>
            <p className="deed-ref">{copy.reference}</p>
            {copy.doc.map((paragraph, p) => (
              <p key={p} className="deed-text">
                {paragraph.map((part, i) => {
                  if (typeof part === 'string') return part
                  const [field, text] = part
                  const found = field < step
                  const current = phase === 'extracting' && field === step - 1
                  return (
                    <mark
                      key={i}
                      className={`deed-hit${found ? ' is-found' : ''}${current ? ' is-current' : ''}`}
                    >
                      {text}
                    </mark>
                  )
                })}
              </p>
            ))}
            <span className="deed-scan" />
          </div>

          <div className="deed-fields">
            <p className="deed-fields-title">{phase === 'reading' ? copy.reading : copy.found}</p>
            <dl>
              {copy.fields.map(({ label, value, derived }, i) => (
                <div key={label} className={`deed-field${i < step ? ' is-filled' : ''}`}>
                  <dt>
                    {label}
                    {derived && <span className="deed-derived">{copy.derived}</span>}
                  </dt>
                  <dd>
                    {/* Before it is filled, the value is still there but hidden
                        (phones, DeedDemo.css): the row is as tall as its answer
                        from the start, so the card never changes height. The
                        key remounts it when filled, so the pop plays. */}
                    <span key={i < step ? 'value' : 'ghost'} className={`deed-value${i < step ? '' : ' is-ghost'}`}>
                      <CheckCircle size={14} weight="fill" />
                      {value}
                    </span>
                    {i >= step && <span className="deed-skeleton" />}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="deed-time" style={{ '--progress': progress }}>
          <div className="deed-time-row">
            <span>{copy.manual}</span>
            <span className="deed-bar deed-bar--manual" />
            <span className="deed-time-value">{copy.manualValue}</span>
          </div>
          <div className="deed-time-row">
            <span>{copy.agent}</span>
            <span className="deed-bar deed-bar--agent" />
            <span className="deed-time-value is-agent">{copy.agentValue}</span>
          </div>
          <p className="deed-note">{copy.estimate}</p>
        </div>
      </div>
      <figcaption className="deed-caption">
        <span className="sr-only">{copy.summary} </span>
        {copy.sample}
      </figcaption>
    </figure>
  )
}

export default DeedDemo
