"use client"

import { useState } from "react"
import { Download, MapPin, Menu, X, Sprout } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "../contexts/language-context"
import { useRegion } from "../contexts/region-context"
import LanguageSelector from "./language-selector"
import Link from "next/link"

export default function Header() {
  const { t } = useLanguage()
  const { currentRegion, setRegion, regions } = useRegion()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="bg-green-600 p-1.5 rounded-lg">
              <Sprout className="h-5 w-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-gray-900 leading-tight">
                {t("companyName")} <span className="text-green-600">Angola</span>
              </h1>
            </div>
            <div className="sm:hidden">
              <h1 className="text-base font-bold text-gray-900">AgriCalendário</h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" role="navigation" aria-label="Main navigation">
            <Link
              href="/"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              aria-label={t("home")}
            >
              {t("home")}
            </Link>

            {/* Ferramentas Dropdown */}
            <div className="relative group">
              <Link
                href="/ferramentas"
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 flex items-center"
              >
                {t("tools")}
                <svg className="ml-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="absolute left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1" role="menu">
                  <Link
                    href="/calendario"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                    role="menuitem"
                  >
                    📅 {t("calendar")}
                  </Link>
                  <Link
                    href="/tempo"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                    role="menuitem"
                  >
                    🌤️ {t("weather")}
                  </Link>
                  <Link
                    href="/recursos"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                    role="menuitem"
                  >
                    🌱 {t("resources")}
                  </Link>
                </div>
              </div>
            </div>

            {/* Informações Dropdown with Crop Guides */}
            <div className="relative group">
              <Link
                href="/informacoes"
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 flex items-center"
              >
                {t("information")}
                <svg className="ml-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="absolute left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1" role="menu">
                  <Link
                    href="/crop-guides"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                    role="menuitem"
                  >
                    🌾 {t("cropGuides")}
                  </Link>
                  <Link
                    href="/pest-categories"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                    role="menuitem"
                  >
                    🐛 {t("pests")} & Doenças
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/comunidade"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              aria-label={t("community")}
            >
              {t("community")}
            </Link>

            <Link
              href="/sobre"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              aria-label={t("about")}
            >
              {t("about")}
            </Link>
          </nav>

          {/* Right Side Controls */}
          <div className="flex items-center space-x-3">
            {/* Download App Button - Main CTA */}
            <Link href="/baixar-app">
              <Button
                className="hidden md:flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                aria-label={t("downloadApp")}
              >
                <Download className="h-4 w-4" />
                <span>{t("downloadApp")}</span>
              </Button>
            </Link>

            {/* Utility Controls */}
            <div className="hidden md:flex items-center space-x-2">
              {/* Language Selector */}
              <LanguageSelector variant="desktop" />

              {/* Region Selector */}
              <div className="relative group">
                <button
                  className="p-2 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  aria-label={t("selectRegion")}
                  title={t("region")}
                >
                  <MapPin className="h-4 w-4" />
                </button>
                <div className="absolute right-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 max-h-64 overflow-y-auto">
                  <div className="py-1">
                    {regions.map((region) => (
                      <button
                        key={region.id}
                        onClick={() => setRegion(region.id)}
                        className={`block w-full text-left px-4 py-2 text-sm hover:bg-green-50 hover:text-green-600 transition-colors ${
                          currentRegion === region.id ? "bg-green-50 text-green-600 font-medium" : "text-gray-700"
                        }`}
                      >
                        {region.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Abrir menu de navegação"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                🏠 {t("home")}
              </Link>

              <Link
                href="/ferramentas"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                🔧 {t("tools")}
              </Link>

              <Link
                href="/informacoes"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                📚 {t("information")}
              </Link>

              <Link
                href="/comunidade"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                👥 {t("community")}
              </Link>

              <Link
                href="/sobre"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ℹ️ {t("about")}
              </Link>

              {/* Mobile Download Button */}
              <div className="pt-4 border-t border-gray-200">
                <Link href="/baixar-app">
                  <Button
                    className="w-full flex items-center justify-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white py-3 text-base font-medium rounded-md transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Download className="h-5 w-5" />
                    <span>{t("downloadApp")}</span>
                  </Button>
                </Link>
              </div>

              {/* Mobile Language Selector */}
              <div className="pt-4 border-t border-gray-200">
                <LanguageSelector variant="mobile" />
              </div>

              {/* Mobile Region Selector */}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <div className="px-3 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  {t("region")}
                </div>
                <div className="px-3 space-y-1 max-h-48 overflow-y-auto">
                  {regions.map((region) => (
                    <button
                      key={region.id}
                      onClick={() => {
                        setRegion(region.id)
                        setIsMobileMenuOpen(false)
                      }}
                      className={`block w-full text-left px-3 py-2 text-sm rounded-md transition-colors duration-200 ${
                        currentRegion === region.id
                          ? "bg-green-100 text-green-700 font-medium"
                          : "bg-gray-100 text-gray-700 hover:bg-green-50"
                      }`}
                    >
                      {region.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
