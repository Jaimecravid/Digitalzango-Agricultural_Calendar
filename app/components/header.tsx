"use client";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "../contexts/language-context";

export default function Header() {
  const { currentLanguage, setLanguage, languages, t } = useLanguage();
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const getCurrentLanguageFlag = () => {
    const lang = languages.find(l => l.code === currentLanguage);
    return lang ? lang.flag : "🌐";
  };

  const getCurrentLanguageName = () => {
    const lang = languages.find(l => l.code === currentLanguage);
    return lang ? lang.nativeName : "Language";
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <nav className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Digitalzango Brand Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img src="/logo.svg" alt="Digitalzango Logo" className="h-10 w-auto" />
          <span className="text-2xl font-bold text-green-700">Digitalzango</span>
          <span className="text-sm text-green-600 hidden md:block">Agricultural Calendar</span>
        </Link>

        {/* Navigation Menu */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link href="/inicio" className="text-gray-700 hover:text-green-600 font-medium">
              {t("home")}
            </Link>
          </li>
          <li>
            <Link href="/calendario" className="text-gray-700 hover:text-green-600 font-medium">
              {t("calendar")}
            </Link>
          </li>
          <li>
            <Link href="/guias" className="text-gray-700 hover:text-green-600 font-medium">
              Guides
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-gray-700 hover:text-green-600 font-medium">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/tools" className="text-gray-700 hover:text-green-600 font-medium">
              {t("tools")}
            </Link>
          </li>
        </ul>

        {/* Right Side: Language Selector + Download App Button */}
        <div className="flex items-center space-x-4">
          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
              onMouseEnter={() => setIsLanguageDropdownOpen(true)}
              className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-green-600 font-medium transition-colors duration-200"
            >
              <span className="text-lg">{getCurrentLanguageFlag()}</span>
              <span className="hidden sm:block">{getCurrentLanguageName()}</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isLanguageDropdownOpen && (
              <div
                className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50"
                onMouseLeave={() => setIsLanguageDropdownOpen(false)}
              >
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => {
                      setLanguage(language.code);
                      setIsLanguageDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center space-x-3 ${
                      currentLanguage === language.code ? 'bg-green-50 text-green-700' : 'text-gray-700'
                    }`}
                  >
                    <span className="text-lg">{language.flag}</span>
                    <div>
                      <div className="font-medium">{language.nativeName}</div>
                      <div className="text-xs text-gray-500">{language.name}</div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Download App Button */}
          <Link href="/baixar-app">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
              📱 {t("downloadApp")}
            </button>
          </Link>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-green-600">☰</button>
          </div>
        </div>
      </nav>
    </header>
  );
}

