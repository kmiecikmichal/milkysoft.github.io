import { useEffect } from 'react'

/**
 * Keeps <html lang> in sync with the language a route is actually written in.
 * The shell ships lang="en", but the privacy policy is Polish - screen readers
 * and translation tools need to be told, per page.
 */
export function useDocumentLang(lang) {
  useEffect(() => {
    const previous = document.documentElement.lang
    document.documentElement.lang = lang
    return () => {
      document.documentElement.lang = previous
    }
  }, [lang])
}
