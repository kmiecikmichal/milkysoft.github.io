import { useLang } from '../i18n/lang'
import DeedDemo from './DeedDemo'
import SectionHeader from '../ui/SectionHeader'
import { ICONS } from '../ui/icons'
import './Expertise.css'

// Two real projects, told in full rather than four told in one line. Each has
// fact tiles: plain facts with a big value, instead of percentages nobody can
// check. A `wide` tile spans the row and carries the case's strongest result. Icon colours carry one meaning each across the page: yellow stays
// local, terracotta is documents, blue is the model, teal is the deployment.
const FactTiles = ({ tiles }) => (
  <ul className="fact-tiles">
    {tiles.map(({ icon, tone, value, label, wide }) => {
      const Icon = ICONS[icon]
      return (
        <li key={value} className={`fact-tile${wide ? ' is-wide' : ''}`}>
          <span className={`fact-tile-icon icon-chip is-${tone}`} aria-hidden="true">
            <Icon size={18} weight="bold" />
          </span>
          <span className="fact-tile-value">{value}</span>
          <span className="fact-tile-label">{label}</span>
        </li>
      )
    })}
  </ul>
)

const CaseIntro = ({ item, tone }) => (
  <>
    <p className="case-meta">
      <span className={`case-status is-${tone}`}>
        <span className="case-status-dot" aria-hidden="true" />
        {item.status}
      </span>
      <span className="case-client">{item.client}</span>
    </p>
    <h3 className="case-title rise">{item.title}</h3>
    <p className="case-copy">{item.lead}</p>
  </>
)

// The hero's pinwheel mark, pinned to the pilot's tiles
const Pinwheel = () => (
  <svg className="case-pinwheel" viewBox="0 0 100 100" aria-hidden="true">
    {[0, 90, 180, 270].map((deg) => (
      <rect key={deg} x="50" y="6" width="26" height="44" rx="13" transform={`rotate(${deg} 50 50)`} />
    ))}
  </svg>
)

const Expertise = () => {
  const { t } = useLang()
  const copy = t.work
  const { live, pilot } = copy

  return (
    <section className="expertise section" id="expertise">
      <div className="container">
        <SectionHeader copy={copy} layout="stack" />
      </div>

      <article className="case case--live">
        <div className="case-text">
          <CaseIntro item={live} tone="live" />
        </div>
        <div className="case-panel">
          <DeedDemo copy={copy.demo} />
        </div>
        <div className="case-facts">
          <FactTiles tiles={live.tiles} />
        </div>
      </article>

      <article className="case case--pilot">
        <div className="case-text">
          <CaseIntro item={pilot} tone="pilot" />
          <div className="pilot-soon">
            <span className="pilot-soon-badge">{pilot.soon.badge}</span>
            <p className="pilot-soon-title">
              {pilot.soon.title}
              <span> {pilot.soon.titleMuted}</span>
            </p>
            <a className="btn btn-light" href="#contact">
              {pilot.soon.cta}
            </a>
          </div>
        </div>
        <div className="case-panel">
          <div className="pilot-tiles-wrap">
            <Pinwheel />
            <FactTiles tiles={pilot.tiles} />
          </div>
        </div>
      </article>
    </section>
  )
}

export default Expertise
