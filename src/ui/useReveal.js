import { useLayoutEffect } from 'react'

// Elements that play their entrance once, when they first scroll into view.
// The CSS for each lives in App.css (.rise, .rise-fade) and Team.css (.draw-in).
const SELECTOR = '.rise, .rise-fade, .draw-in'

// Marks entrance elements with .is-in as they reach the viewport. `key` is the
// current language: switching it can mount new nodes that still need watching.
export function useReveal(key) {
  useLayoutEffect(() => {
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (calm || !('IntersectionObserver' in window)) return undefined

    // Set before paint, so nothing flashes visible and then hides
    document.documentElement.classList.add('can-reveal')

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-in')
          io.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -6% 0px' }
    )
    document.querySelectorAll(SELECTOR).forEach((el) => {
      if (!el.classList.contains('is-in')) io.observe(el)
    })
    return () => io.disconnect()
  }, [key])
}
