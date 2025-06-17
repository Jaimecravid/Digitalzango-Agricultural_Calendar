'use client'

import { useLanguage } from '../contexts/language-context'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const { currentLanguage, setLanguage, languages } = useLanguage()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleLanguageChange = (langCode) => {
    if (langCode !== currentLanguage) {
      setLanguage(langCode)
    }
  }

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 w-full">
          {/* Logo - always fully left */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/inicio" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🌱</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900">Digitalzango</span>
                <span className="text-xs text-gray-500 -mt-1">Agricultural Calendar</span>
              </div>
            </Link>
          </div>

          {/* Navigation - centered */}
          <nav className="hidden lg:flex items-center mx-auto space-x-12">
            <Link href="/inicio" className="flex items-center text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group">
              <span className="mr-1">🏠</span> Início
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link href="/calendario" className="flex items-center text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group">
              <span className="mr-1">📅</span> Calendário
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link href="/tempo" className="flex items-center text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group">
              <span className="mr-1">🌤️</span> Tempo
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link href="/pragas" className="flex items-center text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group">
              <span className="mr-1">🐛</span> Pragas & Doenças
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link href="/recursos" className="flex items-center text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group">
              <span className="mr-1">📚</span> Recursos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link href="/blog" className="flex items-center text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group">
              <span className="mr-1">📝</span> Blog
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link href="/comunidade" className="flex items-center text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group">
              <span className="mr-1">👥</span> Comunidade
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-200 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Right actions - always fully right */}
          <div className="flex items-center space-x-4 ml-auto">
            {/* Language Selector */}
            <div className="relative">
              <select 
                value={currentLanguage}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 cursor-pointer appearance-none pr-8 min-w-[120px]"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.flag} {lang.nativeName}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            {/* CTA Button */}
            <Link 
              href="/baixar-app"
              className="hidden sm:inline-flex items-center h-10 px-4 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors duration-200 shadow-sm"
            >
              <span className="mr-1">📱</span> Baixar App
            </Link>
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-green-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-200"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100">
            <div className="px-2 pt-4 pb-6 space-y-2">
              <Link href="/inicio" className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors duration-200" onClick={() => setIsMobileMenuOpen(false)}>🏠 Início</Link>
              <Link href="/calendario" className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors duration-200" onClick={() => setIsMobileMenuOpen(false)}>📅 Calendário</Link>
              <Link href="/tempo" className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors duration-200" onClick={() => setIsMobileMenuOpen(false)}>🌤️ Tempo</Link>
              <Link href="/pragas" className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors duration-200" onClick={() => setIsMobileMenuOpen(false)}>🐛 Pragas & Doenças</Link>
              <Link href="/recursos" className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors duration-200" onClick={() => setIsMobileMenuOpen(false)}>📚 Recursos</Link>
              <Link href="/blog" className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors duration-200" onClick={() => setIsMobileMenuOpen(false)}>📝 Blog</Link>
              <Link href="/comunidade" className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors duration-200" onClick={() => setIsMobileMenuOpen(false)}>👥 Comunidade</Link>
              <div className="pt-4 border-t border-gray-100">
                <Link href="/baixar-app" className="block w-full text-center px-4 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors duration-200" onClick={() => setIsMobileMenuOpen(false)}>📱 Baixar App</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
