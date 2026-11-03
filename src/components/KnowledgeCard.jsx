import { useEffect, useRef, useState } from 'react'
import { FilePdf, MagnifyingGlass } from '@phosphor-icons/react'

// The hero's dark card: a knowledge base answering questions from company files.
// It loops through a few sample questions: the question types itself, the model
// searches, the answer arrives word by word and the source document pops in.
// The outbound counter never moves. Reduced motion: the first answer, static.

const TYPE_MS = 34
const SEARCH_MS = 1100
const WORD_MS = 70
const HOLD_MS = 3200

const KnowledgeCard = ({ copy, onThinking }) => {
  const [index, setIndex] = useState(0)
  const [view, setView] = useState({ typed: Infinity, phase: 'done', words: Infinity })
  const cardRef = useRef(null)
  const item = copy.qa[index]
  const thinking = view.phase === 'searching' || view.phase === 'answering'

  // Let the page know while the model is working (the headline dots wave)
  useEffect(() => {
    onThinking?.(thinking)
  }, [thinking, onThinking])
  const words = item.a.split(' ')

  useEffect(() => {
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (calm) {
      setView({ typed: Infinity, phase: 'done', words: Infinity })
      return undefined
    }

    let cancelled = false
    const timers = []
    const wait = (ms) => new Promise((resolve) => timers.push(setTimeout(resolve, ms)))
    // pause while the card is off screen or the tab is hidden
    let visible = true
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
    })
    if (cardRef.current) io.observe(cardRef.current)
    const whenVisible = async () => {
      while (!cancelled && (!visible || document.hidden)) await wait(400)
    }

    const run = async () => {
      const qa = copy.qa[index]
      const answer = qa.a.split(' ')
      setView({ typed: 0, phase: 'typing', words: 0 })
      await wait(index === 0 ? 1400 : 500)
      for (let i = 1; i <= qa.q.length; i++) {
        if (cancelled) return
        setView({ typed: i, phase: 'typing', words: 0 })
        await wait(TYPE_MS)
      }
      setView({ typed: Infinity, phase: 'searching', words: 0 })
      await wait(SEARCH_MS)
      for (let w = 1; w <= answer.length; w++) {
        if (cancelled) return
        setView({ typed: Infinity, phase: 'answering', words: w })
        await wait(WORD_MS)
      }
      setView({ typed: Infinity, phase: 'done', words: Infinity })
      await wait(HOLD_MS)
      await whenVisible()
      if (!cancelled) setIndex((i) => (i + 1) % copy.qa.length)
    }
    run()

    return () => {
      cancelled = true
      timers.forEach(clearTimeout)
      io.disconnect()
    }
  }, [index, copy])

  const question = view.typed === Infinity ? item.q : item.q.slice(0, view.typed)
  const shownWords = view.words === Infinity ? words.length : view.words
  const showAnswer = view.phase === 'answering' || view.phase === 'done'

  return (
    <div className="kb-card" ref={cardRef}>
      <div className="kb-head">
        <span className="kb-title">{copy.title}</span>
        <span className="kb-scope" key={item.scope}>
          {item.scope}
        </span>
        <span className="kb-status">
          <span className="kb-dot" />
          {copy.status}
        </span>
      </div>

      <div className="kb-body">
        {/* Hidden full copies of every question and answer, stacked in the same
            cell as the live one (on narrow screens), so the card is always as
            tall as its longest answer and never jumps while it types */}
        {copy.qa.map((qa) => (
          <div key={qa.q} className="kb-ghost" aria-hidden="true">
            <p className="kb-question">
              <MagnifyingGlass size={16} weight="bold" />
              <span>{qa.q}</span>
            </p>
            <p className="kb-answer">{qa.a}</p>
            <p className="kb-source">
              <FilePdf size={18} weight="fill" />
              <span className="kb-source-name">{qa.source}</span>
              <span className="kb-source-page">{qa.page}</span>
            </p>
          </div>
        ))}

        <div className="kb-live">
          <p className="kb-question">
            <MagnifyingGlass size={16} weight="bold" aria-hidden="true" />
            <span>
              {question}
              {view.phase === 'typing' && <span className="kb-caret" />}
            </span>
          </p>

          {view.phase === 'searching' && (
            <p className="kb-searching">
              {copy.searching}
              <span className="kb-dots">
                <span />
                <span />
                <span />
              </span>
            </p>
          )}

          {showAnswer && (
            <p className="kb-answer">
              {words.slice(0, shownWords).map((word, i) => (
                <span key={`${index}-${i}`} className="kb-word">
                  {word}{' '}
                </span>
              ))}
            </p>
          )}

          {view.phase === 'done' && (
            <p className="kb-source" key={item.source}>
              <FilePdf size={18} weight="fill" aria-hidden="true" />
              <span className="kb-source-name">{item.source}</span>
              <span className="kb-source-page">{item.page}</span>
            </p>
          )}
        </div>
      </div>

      <div className="kb-foot">
        <span>{copy.outbound}</span>
        <span className="kb-zero">{copy.outboundValue}</span>
      </div>
      <p className="kb-sample">{copy.sample}</p>
    </div>
  )
}

export default KnowledgeCard
