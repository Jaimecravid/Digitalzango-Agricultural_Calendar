"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Globe, Check, ChevronDown } from "lucide-react"
import { useLanguage } from "../contexts/language-context"

interface LanguageSelectorProps {
  variant?: "desktop" | "mobile"
  className?: string
}

export default function LanguageSelector({ variant = "desktop", className = "" }: LanguageSelectorProps) {
  const { currentLanguage, setLanguage, languages, t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const currentLang = languages.find((lang) => lang.code === currentLanguage)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Close dropdown on escape key
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false)
        buttonRef.current?.focus()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      return () => {
        document.removeEventListener("keydown", handleEscape)
      }
    }
  }, [isOpen])

  const handleLanguageSelect = (langCode: string) => {
    setLanguage(langCode)
    setIsOpen(false)

    // Announce language change to screen readers
    const announcement = `Language changed to ${languages.find((l) => l.code === langCode)?.name}`
    const ariaLive = document.createElement("div")
    ariaLive.setAttribute("aria-live", "polite")
    ariaLive.setAttribute("aria-atomic", "true")
    ariaLive.className = "sr-only"
    ariaLive.textContent = announcement
    document.body.appendChild(ariaLive)
    setTimeout(() => document.body.removeChild(ariaLive), 1000)
  }

  const handleKeyDown = (event: React.KeyboardEvent, langCode?: string) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      if (langCode) {
        handleLanguageSelect(langCode)
      } else {
        setIsOpen(!isOpen)
      }
    } else if (event.key === "ArrowDown" && !isOpen) {
      event.preventDefault()
      setIsOpen(true)
    }
  }

  if (variant === "mobile") {
    return (
      <div className={`space-y-3 ${className}`}>
        <div className="px-3 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">{t("language")}</div>
        <div className="grid grid-cols-2 gap-2 px-3">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageSelect(lang.code)}
              className={`px-3 py-2 text-sm rounded-md transition-colors duration-200 flex items-center space-x-2 ${
                currentLanguage === lang.code
                  ? "bg-green-100 text-green-700 font-medium ring-2 ring-green-500"
                  : "bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-600"
              }`}
              aria-pressed={currentLanguage === lang.code}
              aria-label={`Switch to ${lang.name}`}
            >
              <span className="text-base">{lang.flag}</span>
              <span className="truncate">{lang.nativeName}</span>
              {currentLanguage === lang.code && <Check className="h-3 w-3 ml-auto flex-shrink-0" aria-hidden="true" />}
            </button>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        className="p-2 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 flex items-center space-x-1"
        aria-label={`${t("selectLanguage")} - ${t("language")}: ${currentLang?.name}`}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        title={`${t("language")}: ${currentLang?.name}`}
      >
        <Globe className="h-4 w-4" aria-hidden="true" />
        <span className="hidden sm:inline text-sm font-medium">{currentLang?.flag}</span>
        <ChevronDown
          className={`h-3 w-3 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute right-0 mt-1 w-56 bg-white rounded-md shadow-lg border border-gray-200 z-50 py-1"
          role="listbox"
          aria-label={t("selectLanguage")}
        >
          {languages.map((lang, index) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageSelect(lang.code)}
              onKeyDown={(e) => handleKeyDown(e, lang.code)}
              className={`w-full text-left px-4 py-3 text-sm hover:bg-green-50 hover:text-green-600 transition-colors duration-200 flex items-center space-x-3 ${
                currentLanguage === lang.code ? "bg-green-50 text-green-600 font-medium" : "text-gray-700"
              }`}
              role="option"
              aria-selected={currentLanguage === lang.code}
              aria-label={`Switch to ${lang.name} (${lang.nativeName})`}
              tabIndex={isOpen ? 0 : -1}
            >
              <span className="text-lg flex-shrink-0" aria-hidden="true">
                {lang.flag}
              </span>
              <div className="flex-1 min-w-0">
                <div className="font-medium truncate">{lang.nativeName}</div>
                <div className="text-xs text-gray-500 truncate">{lang.name}</div>
              </div>
              {currentLanguage === lang.code && (
                <Check className="h-4 w-4 flex-shrink-0 text-green-600" aria-hidden="true" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
