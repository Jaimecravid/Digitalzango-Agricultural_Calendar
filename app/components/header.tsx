"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import { useLanguage } from "../contexts/language-context";
import { ChevronDown, Globe } from "lucide-react";

export default function Header() {
  const { t, currentLanguage, changeLanguage } = useLanguage();
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const languages = [
    { code: 'pt', name: 'Português', flag: '🇦🇴' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
  ];

  const handleLanguageChange = (languageCode: string) => {
    changeLanguage(languageCode);
    setIsLanguageDropdownOpen(false);
  };

  return (
    <header className="bg-white shadow-sm py-4 px-4 sm:px-6 lg:px-8 border-b border-gray-200 relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo and Brand Name */}
        <Link href="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">🌱</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-green-700">Digitalzango</span>
            <span className="text-xs text-gray-500">Agricultural Calendar</span>
          </div>
        </Link>

        {/* Desktop Navigation Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200 px-3 py-2 rounded-md hover:bg-green-50">
            🏠 {t("home") || "Home"}
          </Link>
          <Link href="/calendario" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200 px-3 py-2 rounded-md hover:bg-green-50">
            📅 {t("calendar") || "Calendar"}
          </Link>
          <Link href="/tempo" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200 px-3 py-2 rounded-md hover:bg-green-50">
            🌤️ {t("weather") || "Weather"}
          </Link>
          <Link href="/pragas" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200 px-3 py-2 rounded-md hover:bg-green-50">
            🐛 {t("pests") || "Pests"}
          </Link>
          <Link href="/guias" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200 px-3 py-2 rounded-md hover:bg-green-50">
            📚 {t("guides") || "Guides"}
          </Link>
          <Link href="/blog" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200 px-3 py-2 rounded-md hover:bg-green-50">
            ✍️ {t("blog") || "Blog"}
          </Link>
        </nav>

        {/* Right Side: Language Selector + CTA Button */}
        <div className="hidden md:flex items-center space-x-4">
          
          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
              className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors duration-200 border border-gray-200 hover:border-green-300"
              aria-label="Select Language"
            >
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium">
                {languages.find(lang => lang.code === currentLanguage)?.flag} 
                {languages.find(lang => lang.code === currentLanguage)?.name || 'Português'}
              </span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isLanguageDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {isLanguageDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => handleLanguageChange(language.code)}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-green-50 hover:text-green-600 transition-colors duration-200 flex items-center space-x-2 ${
                      currentLanguage === language.code ? 'bg-green-50 text-green-600' : 'text-gray-700'
                    }`}
                  >
                    <span>{language.flag}</span>
                    <span>{language.name}</span>
                    {currentLanguage === language.code && (
                      <span className="ml-auto text-green-600">✓</span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Call-to-Action Button */}
          <Link href="/baixar-app">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105">
              📱 {t("downloadApp") || "Download App"}
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          {/* Mobile Language Selector */}
          <div className="relative">
            <button
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
              className="flex items-center space-x-1 px-2 py-1 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors duration-200"
              aria-label="Select Language"
            >
              <Globe className="h-4 w-4" />
              <span className="text-xs">
                {languages.find(lang => lang.code === currentLanguage)?.flag}
              </span>
            </button>

            {/* Mobile Dropdown Menu */}
            {isLanguageDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => handleLanguageChange(language.code)}
                    className={`w-full text-left px-3 py-2 text-sm hover:bg-green-50 hover:text-green-600 transition-colors duration-200 flex items-center space-x-2 ${
                      currentLanguage === language.code ? 'bg-green-50 text-green-600' : 'text-gray-700'
                    }`}
                  >
                    <span>{language.flag}</span>
                    <span className="text-xs">{language.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-600 hover:text-green-600 hover:bg-green-50"
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
          <nav className="flex flex-col space-y-2 pt-4">
            <Link href="/" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200 px-3 py-2 rounded-md hover:bg-green-50">
              🏠 {t("home") || "Home"}
            </Link>
            <Link href="/calendario" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200 px-3 py-2 rounded-md hover:bg-green-50">
              📅 {t("calendar") || "Calendar"}
            </Link>
            <Link href="/tempo" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200 px-3 py-2 rounded-md hover:bg-green-50">
              🌤️ {t("weather") || "Weather"}
            </Link>
            <Link href="/pragas" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200 px-3 py-2 rounded-md hover:bg-green-50">
              🐛 {t("pests") || "Pests"}
            </Link>
            <Link href="/guias" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200 px-3 py-2 rounded-md hover:bg-green-50">
              📚 {t("guides") || "Guides"}
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200 px-3 py-2 rounded-md hover:bg-green-50">
              ✍️ {t("blog") || "Blog"}
            </Link>
            <Link href="/baixar-app" className="mt-4">
              <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
                📱 {t("downloadApp") || "Download App"}
              </Button>
            </Link>
          </nav>
        </div>
      )}

      {/* Click outside to close dropdown */}
      {isLanguageDropdownOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsLanguageDropdownOpen(false)}
        />
      )}
    </header>
  );
}
