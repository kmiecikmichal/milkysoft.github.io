// Section header: a two-tone title (the statement in ink, its continuation in
// grey, running on in the same line like one sentence) and an optional intro.
// `layout` varies the arrangement so consecutive sections don't all look alike:
// split (title left, intro right), stack (intro under the title), center.
const SectionHeader = ({ copy, layout = 'split' }) => (
  <div className={`section-header is-${layout}`}>
    <h2 className="section-title rise">
      {copy.title}
      {/* The space stays outside the grey span: an inline-block drops a leading space */}
      {copy.titleMuted && ' '}
      {copy.titleMuted && <span className="section-title-muted">{copy.titleMuted}</span>}
    </h2>
    {copy.intro && <p className="section-subtitle rise-fade">{copy.intro}</p>}
  </div>
)

export default SectionHeader
