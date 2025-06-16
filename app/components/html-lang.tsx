'use client'

import { useLanguage } from '../contexts/language-context'
import { useEffect } from 'react'

export default function HtmlLang() {
  const { currentLanguage } = useLanguage()

  useEffect(() => {
    document.documentElement.lang = currentLanguage || 'pt'
  }, [currentLanguage])

  return null
}
