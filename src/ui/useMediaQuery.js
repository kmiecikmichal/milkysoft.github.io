import { useSyncExternalStore } from 'react'

// True while the media query matches; re-renders when it starts or stops
// matching (e.g. a phone turned sideways).
export function useMediaQuery(query) {
  return useSyncExternalStore(
    (onChange) => {
      const list = window.matchMedia(query)
      list.addEventListener('change', onChange)
      return () => list.removeEventListener('change', onChange)
    },
    () => window.matchMedia(query).matches
  )
}
