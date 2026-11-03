import { useLang } from '../i18n/lang'
import SectionHeader from '../ui/SectionHeader'
import './Process.css'

const Process = () => {
  const { t } = useLang()
  const copy = t.process

  return (
    <section className="process section" id="process">
      <div className="container">
        <div className="process-panel">
          <SectionHeader copy={copy} layout="center" />

          <ol className="process-steps draw-in">
            {copy.steps.map(({ title, description }, i) => (
              <li key={title} className="process-step" style={{ '--i': i }}>
                <div className="process-marker">
                  <span className="process-number">{i + 1}</span>
                  {i < copy.steps.length - 1 && <span className="process-line" aria-hidden="true" />}
                </div>
                <h3 className="process-title">{title}</h3>
                <p className="process-description">{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default Process
