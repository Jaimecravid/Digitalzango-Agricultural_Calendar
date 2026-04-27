"use client";
import { useLanguage } from "../contexts/language-context";

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Button } from "./ui/button";

export default function Header() {
  const currentPath = usePathname();
  const { t } = useLanguage();
  const isActive = (href: string) => currentPath === href;

  return (
    <header className="bg-[#0B1020]/90 backdrop-blur-md border-b border-white/10 py-4 px-4 sm:px-6 lg:px-8 sticky top-0 z-50" role="banner">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 bg-[#1A2338] text-[#22C55E] p-2 rounded shadow">Pular para o conteúdo principal</a>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3" aria-label="Página inicial Digitalzango">
          <div className="w-10 h-10 bg-[#22C55E] rounded-lg flex items-center justify-center" aria-hidden="true">
            <span className="text-white font-bold text-xl">🌱</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-white">Digitalzango</span>
            <span className="text-xs text-slate-400">Calendário Agrícola</span>
          </div>
        </Link>

        <nav className="hidden md:flex space-x-6" aria-label="Navegação principal">
          <Link
            href="/"
            className={`font-medium transition-colors duration-200 px-3 py-2 rounded-md ${
              isActive('/') ? 'text-[#22C55E] bg-white/10' : 'text-slate-200 hover:text-white hover:bg-white/5'
            }`}
            aria-current={isActive('/') ? 'page' : undefined}
          >
            <span aria-hidden="true">🏠</span> Início
          </Link>

          <Link
            href="/calendario"
            className={`font-medium transition-colors duration-200 px-3 py-2 rounded-md ${
              isActive('/calendario') ? 'text-[#22C55E] bg-white/10' : 'text-slate-200 hover:text-white hover:bg-white/5'
            }`}
            aria-current={isActive('/calendario') ? 'page' : undefined}
          >
            <span aria-hidden="true">📅</span> Calendário
          </Link>

          <Link
            href="/guias"
            className={`font-medium transition-colors duration-200 px-3 py-2 rounded-md ${
              isActive('/guias') ? 'text-[#22C55E] bg-white/10' : 'text-slate-200 hover:text-white hover:bg-white/5'
            }`}
            aria-current={isActive('/guias') ? 'page' : undefined}
          >
            <span aria-hidden="true">�</span> Guias
          </Link>

          <Link
            href="/pragas"
            className={`font-medium transition-colors duration-200 px-3 py-2 rounded-md ${
              isActive('/pragas') ? 'text-[#22C55E] bg-white/10' : 'text-slate-200 hover:text-white hover:bg-white/5'
            }`}
            aria-current={isActive('/pragas') ? 'page' : undefined}
          >
            <span aria-hidden="true">�</span> Pragas
          </Link>
        </nav>

        <div className="hidden md:block">
          <Link href="/baixar-app">
            <Button className="bg-[#22C55E] hover:bg-[#34D399] text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105">
              📱 Baixar App
            </Button>
          </Link>
        </div>

        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Abrir menu de navegação"
            className="text-slate-200 hover:text-white hover:bg-white/10"
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

      <div className="md:hidden mt-4 border-t border-white/10 pt-4">
        <nav className="flex flex-col space-y-2" aria-label="Navegação móvel">
          <Link
            href="/"
            className={`font-medium transition-colors duration-200 px-3 py-2 rounded-md ${
              isActive('/') ? 'text-[#22C55E] bg-white/10' : 'text-slate-200 hover:text-white hover:bg-white/5'
            }`}
          >
            <span aria-hidden="true">🏠</span> Início
          </Link>

          <Link
            href="/calendario"
            className={`font-medium transition-colors duration-200 px-3 py-2 rounded-md ${
              isActive('/calendario') ? 'text-[#22C55E] bg-white/10' : 'text-slate-200 hover:text-white hover:bg-white/5'
            }`}
          >
            <span aria-hidden="true">�</span> Calendário
          </Link>

          <Link
            href="/guias"
            className={`font-medium transition-colors duration-200 px-3 py-2 rounded-md ${
              isActive('/guias') ? 'text-[#22C55E] bg-white/10' : 'text-slate-200 hover:text-white hover:bg-white/5'
            }`}
          >
            <span aria-hidden="true">�</span> Guias
          </Link>

          <Link
            href="/pragas"
            className={`font-medium transition-colors duration-200 px-3 py-2 rounded-md ${
              isActive('/pragas') ? 'text-[#22C55E] bg-white/10' : 'text-slate-200 hover:text-white hover:bg-white/5'
            }`}
          >
            <span aria-hidden="true">🐛</span> Pragas
          </Link>

          <Link
            href="/baixar-app"
            className="bg-[#22C55E] hover:bg-[#34D399] text-white font-semibold py-2 px-4 rounded-lg text-center transition-colors duration-200"
          >
            📱 Baixar App
          </Link>
        </nav>
      </div>
    </header>
  );
}