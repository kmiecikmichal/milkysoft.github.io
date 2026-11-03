import { useLang } from '../i18n/lang'
import SectionHeader from '../ui/SectionHeader'
import './Team.css'

const Team = () => {
  const { t } = useLang()
  const copy = t.team

  return (
    <section className="team section" id="team">
      <div className="container">
        <SectionHeader copy={copy} layout="center" />

        <ul className="people">
          {copy.people.map(({ name, tone, role, description }, i) => (
            <li key={name} className={`person tone-bar-${tone} draw-in`} style={{ '--i': i }}>
              <h3 className="person-name">{name}</h3>
              <p className="person-role">{role}</p>
              <p className="person-description">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Team
