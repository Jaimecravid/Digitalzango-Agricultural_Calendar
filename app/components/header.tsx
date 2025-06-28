"use client";

import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  // Determine the current path for aria-current
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
  // Helper to check if a link is active
  const isActive = (href: string) => currentPath === href;

  return (
    <header className="bg-white shadow-sm py-4 px-4 sm:px-6 lg:px-8 border-b border-gray-200" role="banner">
      {/* Skip Navigation Link */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 bg-white text-green-700 p-2 rounded shadow">Pular para o conteúdo principal</a>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo and Brand Name */}
        <Link href="/" className="flex items-center space-x-3" aria-label="Página inicial Digitalzango">
          <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center" aria-hidden="true">
            <span className="text-white font-bold text-xl">🌱</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-green-700">Digitalzango</span>
            <span className="text-xs text-gray-500">Calendário Agrícola</span>
          </div>
        </Link>

        {/* Desktop Navigation Menu */}
        <nav className="hidden md:flex space-x-6" aria-label="Navegação principal">
          <Link href="/" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200 px-3 py-2 rounded-md hover:bg-green-50" aria-current={isActive('/') ? 'page' : undefined}>
            <span aria-hidden="true">🏠</span> Início
          </Link>
          <Link href="/calendario" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200 px-3 py-2 rounded-md hover:bg-green-50" aria-current={isActive('/calendario') ? 'page' : undefined}>
            <span aria-hidden="true">📅</span> Calendário
          </Link>
          <Link href="/tempo" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200 px-3 py-2 rounded-md hover:bg-green-50" aria-current={isActive('/tempo') ? 'page' : undefined}>
            <span aria-hidden="true">🌤️</span> Tempo
          </Link>
          <Link href="/pragas" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200 px-3 py-2 rounded-md hover:bg-green-50" aria-current={isActive('/pragas') ? 'page' : undefined}>
            <span aria-hidden="true">🐛</span> Pragas
          </Link>
          <Link href="/recursos" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200 px-3 py-2 rounded-md hover:bg-green-50" aria-current={isActive('/recursos') ? 'page' : undefined}>
            <span aria-hidden="true">📚</span> Recursos
          </Link>
          <Link href="/blog" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200 px-3 py-2 rounded-md hover:bg-green-50" aria-current={isActive('/blog') ? 'page' : undefined}>
            <span aria-hidden="true">✍️</span> Blog
          </Link>
          <Link href="/comunidade" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200 px-3 py-2 rounded-md hover:bg-green-50" aria-current={isActive('/comunidade') ? 'page' : undefined}>
            <span aria-hidden="true">👥</span> Comunidade
          </Link>
        </nav>

        {/* Call-to-Action Button */}
        <div className="hidden md:block">
          <Link href="/baixar-app">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105">
              📱 Baixar App
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            aria-label="Abrir menu de navegação"
            className="text-gray-600 hover:text-green-600 hover:bg-green-50"
            aria-label="Abrir menu de navegação"
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
