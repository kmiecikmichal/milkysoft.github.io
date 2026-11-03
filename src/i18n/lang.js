import { createContext, useContext } from 'react'
import { COPY } from './copy'

export const LangContext = createContext('pl')

// Polish lives at "/", English at "/en"
export const homePath = (lang) => (lang === 'en' ? '/en' : '/')
export const privacyPath = (lang) => (lang === 'en' ? '/en/privacy-policy' : '/privacy-policy')

export function useLang() {
  const lang = useContext(LangContext)
  return { lang, t: COPY[lang] }
}
