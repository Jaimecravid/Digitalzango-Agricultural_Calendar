'use client'

import { useEffect } from 'react'

export default function HtmlLang() {
  useEffect(() => {
    document.documentElement.lang = 'pt'
  }, [])

  return null
}
