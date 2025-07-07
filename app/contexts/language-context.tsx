"use client"

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react"

interface LanguageContextType {
  language: string
  setLanguage: (lang: string) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

function getNested(obj: any, path: string): string | undefined {
  return path
    .split(".")
    .reduce((acc, part) => (acc && acc[part] ? acc[part] : undefined), obj)
}

const defaultLanguage = "pt"

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<string>(defaultLanguage)
  const [translations, setTranslations] = useState<any>({})

  useEffect(() => {
    async function loadTranslations() {
      try {
        const data = await import(`../locales/${language}.json`)
        setTranslations(data.default || data)
      } catch (e) {
        setTranslations({})
      }
    }
    loadTranslations()
  }, [language])

  const t = (key: string): string => {
    const value = getNested(translations, key)
    return typeof value === "string" ? value : key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

