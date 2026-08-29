import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { dictionaries } from '../content'
import type { Dictionary, Lang } from '../content'

const STORAGE_KEY = 'dvr-lang'

interface I18nValue {
  lang: Lang
  t: Dictionary
  setLang: (lang: Lang) => void
  toggleLang: () => void
}

const I18nContext = createContext<I18nValue | null>(null)

function detectLang(): Lang {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'es' || stored === 'en') return stored
  return navigator.language.toLowerCase().startsWith('en') ? 'en' : 'es'
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectLang)

  const t = dictionaries[lang]

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = lang
    document.title = t.meta.title

    const description = document.querySelector('meta[name="description"]')
    description?.setAttribute('content', t.meta.description)
  }, [lang, t])

  const setLang = useCallback((next: Lang) => setLangState(next), [])
  const toggleLang = useCallback(
    () => setLangState((current) => (current === 'es' ? 'en' : 'es')),
    [],
  )

  const value = useMemo<I18nValue>(
    () => ({ lang, t, setLang, toggleLang }),
    [lang, t, setLang, toggleLang],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n(): I18nValue {
  const context = useContext(I18nContext)
  if (!context) throw new Error('useI18n must be used inside I18nProvider')
  return context
}
