"use client"

import Link from "next/link"
import { Calendar, Wrench, Droplets, Bug, TrendingUp, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { RegionProvider } from "../contexts/region-context"
import { WeatherProvider } from "../contexts/weather-context"
import Header from "../components/header"

// Translation function for DigitalZango Agricultural Calendar
function useLanguage() {
  const translations = {
    // Tools Page Translations
    toolsTitle: "Ferramentas Agrícolas",
    toolsSubtitle: "Ferramentas digitais para melhorar a sua produção agrícola em Angola",
    
    // Tool Names
    agriculturalCalendar: "Calendário Agrícola",
    calendarDescription: "Planeie as suas actividades agrícolas com base no clima e época do ano",
    weatherForecast: "Previsão Meteorológica",
    weatherDescription: "Previsões precisas para planear as suas actividades de campo",
    pestControl: "Controlo de Pragas",
    pestDescription: "Identifique e trate pragas e doenças nas suas culturas",
    cropManagement: "Gestão de Culturas",
    cropDescription: "Acompanhe o crescimento e desenvolvimento das suas plantas",
    marketPrices: "Preços de Mercado",
    marketDescription: "Consulte os preços actuais dos produtos agrícolas",
    farmCommunity: "Comunidade Agrícola",
    communityDescription: "Conecte-se com outros agricultores e partilhe experiências",
    
    // Actions
    accessTool: "Aceder à Ferramenta",
    learnMore: "Saber Mais",
    getStarted: "Começar",
    
    // Categories
    planning: "Planeamento",
    monitoring: "Monitorização",
    community: "Comunidade",
    free: "Gratuito",
    premium: "Premium",
    
    // Call to Action
    needHelp: "Precisa de Ajuda?",
    contactSupport: "Entre em contacto com a nossa equipa de suporte especializada",
    contactUs: "Contacte-nos",
    viewGuides: "Ver Guias",
  };

  const t = (key: string): string => {
    return translations[key as keyof typeof translations] || key;
  };

  return { t };
}

function ToolsContent() {
  const { t } = useLanguage();

  const tools = [
    {
      title: t("agriculturalCalendar"),
      description: t("calendarDescription"),
      icon: Calendar,
      href: "/calendar",
      category: t("planning"),
      type: t("free"),
      featured: true,
    },
    {
      title: t("weatherForecast"),
      description: t("weatherDescription"),
      icon: Droplets,
      href: "/weather",
      category: t("monitoring"),
      type: t("free"),
      featured: false,
    },
    {
      title: t("pestControl"),
      description: t("pestDescription"),
      icon: Bug,
      href: "/pest-control",
      category: t("monitoring"),
      type: t("free"),
      featured: false,
    },
    {
      title: t("cropManagement"),
      description: t("cropDescription"),
      icon: Wrench,
      href: "/crop-management",
      category: t("planning"),
      type: t("premium"),
      featured: false,
    },
    {
      title: t("marketPrices"),
      description: t("marketDescription"),
      icon: TrendingUp,
      href: "/market-prices",
      category: t("monitoring"),
      type: t("free"),
      featured: false,
    },
    {
      title: t("farmCommunity"),
      description: t("communityDescription"),
      icon: Users,
      href: "/community",
      category: t("community"),
      type: t("free"),
      featured: false,
    },
  ]

  const featuredTools = tools.filter(tool => tool.featured)
  const regularTools = tools.filter(tool => !tool.featured)

  const getTypeColor = (type: string) => {
    return type === t("free") ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t("toolsTitle")}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("toolsSubtitle")}
          </p>
        </div>

        {/* Featured Tools */}
        {featuredTools.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Ferramenta em Destaque</h2>
            {featuredTools.map((tool, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow border-green-200">
                <div className="bg-green-50 p-8">
                  <div className="flex items-center gap-6">
                    <div className="bg-green-100 p-4 rounded-full">
                      <tool.icon className="h-12 w-12 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-green-600 text-white">Destaque</Badge>
                        <Badge variant="outline">{tool.category}</Badge>
                        <Badge className={getTypeColor(tool.type)}>{tool.type}</Badge>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{tool.title}</h3>
                      <p className="text-gray-700 mb-4">{tool.description}</p>
                      <div className="flex gap-3">
                        <Link href={tool.href}>
                          <Button className="bg-green-600 hover:bg-green-700">
                            {t("accessTool")}
                          </Button>
                        </Link>
                        <Button variant="outline">{t("learnMore")}</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* All Tools Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Todas as Ferramentas</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularTools.map((tool, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-200 hover:scale-105">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-gray-100 p-3 rounded-full">
                    <tool.icon className="h-8 w-8 text-gray-600" />
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline">{tool.category}</Badge>
                    <Badge className={getTypeColor(tool.type)}>{tool.type}</Badge>
                  </div>
                </div>
                <CardTitle className="text-xl">{tool.title}</CardTitle>
                <CardDescription className="text-base">{tool.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Link href={tool.href} className="flex-1">
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      {t("accessTool")}
                    </Button>
                  </Link>
                  <Button variant="outline" size="sm">
                    {t("learnMore")}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-green-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{t("needHelp")}</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">{t("contactSupport")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-green-600 hover:bg-green-700">
                {t("contactUs")}
              </Button>
            </Link>
            <Link href="/guides">
              <Button variant="outline">
                {t("viewGuides")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ToolsPage() {
  return (
    <RegionProvider>
      <WeatherProvider>
        <ToolsContent />
      </WeatherProvider>
    </RegionProvider>
  )
}
