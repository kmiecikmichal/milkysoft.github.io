import { useEffect } from 'react'
import { COPY } from './copy'
import { LangContext } from './lang'

// `title` overrides the home page title on other pages. It is set here, not in
// the page, because a parent's effect runs after its children's and would win.
export function LangProvider({ lang, title, children }) {
  useEffect(() => {
    document.documentElement.lang = lang
    document.title = title ?? COPY[lang].meta.title
  }, [lang, title])

  return <LangContext.Provider value={lang}>{children}</LangContext.Provider>
}
