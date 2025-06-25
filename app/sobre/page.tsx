"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

import { RegionProvider, useRegion } from "../contexts/region-context"
import { WeatherProvider } from "../contexts/weather-context"
import NewsletterSignup from "../components/newsletter-signup"
import Link from "next/link"

function AppContent() {
  const { language, setLanguage } = useLanguage()
  const { region, setRegion } = useRegion()

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Sobre o CalendÃ¡rio AgrÃ­cola de Angola
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Uma plataforma completa para apoiar os agricultores angolanos com informaÃ§Ãµes 
              precisas sobre cultivo, clima e melhores prÃ¡ticas agrÃ­colas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6">
              <CardContent className="p-0">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Nossa MissÃ£o
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Capacitar os agricultores angolanos com tecnologia e conhecimento para 
                  aumentar a produtividade agrÃ­cola e promover prÃ¡ticas sustentÃ¡veis.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Sustentabilidade</Badge>
                  <Badge variant="secondary">InovaÃ§Ã£o</Badge>
                  <Badge variant="secondary">Comunidade</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Funcionalidades
                </h2>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>â€¢ CalendÃ¡rio de plantio personalizado</li>
                  <li>â€¢ PrevisÃµes meteorolÃ³gicas precisas</li>
                  <li>â€¢ Guias de cultivo detalhados</li>
                  <li>â€¢ GestÃ£o de pragas e doenÃ§as</li>
                  <li>â€¢ Comunidade de agricultores</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Comece Sua Jornada AgrÃ­cola
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/calendario" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Ver CalendÃ¡rio
              </Link>
              <Link 
                href="/guias" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Guias de Cultivo
              </Link>
            </div>
          </div>

          <NewsletterSignup />
        </div>
      </main>
    </div>
  )
}

export default function SobrePage() {
  return <AppContent />
}

