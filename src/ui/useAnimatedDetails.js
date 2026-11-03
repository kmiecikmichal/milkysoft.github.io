import { useEffect } from 'react'

// Same values as --dur-slow, --ease and --ease-out in App.css
const DURATION = 420
const EASE = 'cubic-bezier(0.65, 0.05, 0, 1)'
const EASE_OUT = 'cubic-bezier(0.2, 0.8, 0.2, 1)'

// Animates every <details> inside `ref` open and shut, and keeps one open at a
// time. CSS alone (::details-content with interpolate-size) only animates in
// Chrome; Safari, where most phone visitors are, snapped open. Clicks on the
// summary (keyboard Enter/Space included) are taken over, so the details must
// not share a `name`: the browser would close the others before they animate.
export function useAnimatedDetails(ref, enabled = true) {
  useEffect(() => {
    const root = ref.current
    if (!enabled || !root) return undefined

    const running = new Map()
    const state = new Map()

    const stop = (d) => {
      running.get(d)?.cancel()
      running.delete(d)
      d.style.overflow = ''
    }

    const closedHeight = (d) => {
      const cs = getComputedStyle(d)
      return (
        d.querySelector('summary').offsetHeight +
        parseFloat(cs.borderTopWidth) +
        parseFloat(cs.borderBottomWidth)
      )
    }

    const animateHeight = (d, from, to, onDone) => {
      d.style.overflow = 'hidden'
      const anim = d.animate({ height: [`${from}px`, `${to}px`] }, { duration: DURATION, easing: EASE, fill: 'forwards' })
      running.set(d, anim)
      anim.onfinish = () => {
        onDone?.()
        stop(d)
        state.delete(d)
      }
    }

    const open = (d) => {
      const from = d.offsetHeight
      stop(d)
      state.set(d, 'opening')
      d.open = true
      animateHeight(d, from, d.offsetHeight)
      d.querySelector(':scope > :not(summary)')?.animate(
        { opacity: [0, 1], transform: ['translateY(-6px)', 'none'] },
        { duration: DURATION, easing: EASE_OUT }
      )
    }

    const close = (d) => {
      const from = d.offsetHeight
      stop(d)
      state.set(d, 'closing')
      animateHeight(d, from, closedHeight(d), () => {
        d.open = false
      })
    }

    const handleClick = (e) => {
      const summary = e.target.closest('summary')
      const d = summary?.parentElement
      if (!d || d.tagName !== 'DETAILS' || !root.contains(d)) return
      e.preventDefault()

      const opening = !d.open || state.get(d) === 'closing'
      const others = [...root.querySelectorAll('details')].filter(
        (o) => o !== d && o.open && state.get(o) !== 'closing'
      )

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        if (opening) others.forEach((o) => (o.open = false))
        d.open = opening
        return
      }

      if (opening) {
        others.forEach(close)
        open(d)
      } else {
        close(d)
      }
    }

    root.addEventListener('click', handleClick)
    return () => {
      root.removeEventListener('click', handleClick)
      running.forEach((anim, d) => {
        anim.finish()
        stop(d)
      })
    }
  }, [ref, enabled])
}
