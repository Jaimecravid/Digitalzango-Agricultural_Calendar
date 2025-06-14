"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { useLanguage } from "../contexts/language-context";

export default function Header() {
  const { t } = useLanguage();

  return (
    <header className="bg-white shadow-sm py-4 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
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

        {/* Call-to-Action Button */}
        <div className="hidden md:block">
          <Link href="/baixar-app">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105">
              📱 {t("downloadApp") || "Download App"}
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
}
