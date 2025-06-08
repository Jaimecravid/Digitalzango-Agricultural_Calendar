"use client"

import Link from "next/link"
import { Play, Clock, User, BookOpen, Video } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { LanguageProvider, useLanguage } from "../contexts/language-context"
import { RegionProvider } from "../contexts/region-context"
import Header from "../components/header"

function TutorialsContent() {
  const { t } = useLanguage()

  const tutorials = [
    {
      id: 1,
      title: "Como Usar o Calendário Agrícola",
      description: "Aprenda a navegar e usar todas as funcionalidades do calendário para planear as suas actividades.",
      duration: "8 min",
      level: "Iniciante",
      category: "Básico",
      type: "video",
      thumbnail: "/placeholder.svg?height=200&width=300",
      views: 1234,
      featured: true,
    },
    {
      id: 2,
      title: "Interpretar Previsões Meteorológicas",
      description: "Como ler e usar as previsões do tempo para tomar decisões agrícolas informadas.",
      duration: "12 min",
      level: "Intermédio",
      category: "Meteorologia",
      type: "video",
      thumbnail: "/placeholder.svg?height=200&width=300",
      views: 987,
      featured: false,
    },
    {
      id: 3,
      title: "Configurar Alertas de Pragas",
      description: "Configure notificações para receber alertas sobre pragas na sua região.",
      duration: "5 min",
      level: "Iniciante",
      category: "Pragas",
      type: "video",
      thumbnail: "/placeholder.svg?height=200&width=300",
      views: 756,
      featured: false,
    },
    {
      id: 4,
      title: "Gerir Recursos e Inventário",
      description: "Como adicionar e gerir sementes, fertilizantes e equipamentos na plataforma.",
      duration: "10 min",
      level: "Iniciante",
      category: "Recursos",
      type: "video",
      thumbnail: "/placeholder.svg?height=200&width=300",
      views: 654,
      featured: false,
    },
    {
      id: 5,
      title: "Participar na Comunidade",
      description: "Como se conectar com outros agricultores e participar em discussões.",
      duration: "7 min",
      level: "Iniciante",
      category: "Comunidade",
      type: "video",
      thumbnail: "/placeholder.svg?height=200&width=300",
      views: 543,
      featured: false,
    },
    {
      id: 6,
      title: "Planeamento de Culturas Avançado",
      description: "Técnicas avançadas para optimizar o planeamento das suas culturas.",
      duration: "15 min",
      level: "Avançado",
      category: "Planeamento",
      type: "video",
      thumbnail: "/placeholder.svg?height=200&width=300",
      views: 432,
      featured: false,
    },
  ]

  const categories = [
    { name: "Todos", count: tutorials.length, active: true },
    { name: "Básico", count: tutorials.filter((t) => t.category === "Básico").length, active: false },
    { name: "Meteorologia", count: tutorials.filter((t) => t.category === "Meteorologia").length, active: false },
    { name: "Pragas", count: tutorials.filter((t) => t.category === "Pragas").length, active: false },
    { name: "Recursos", count: tutorials.filter((t) => t.category === "Recursos").length, active: false },
    { name: "Comunidade", count: tutorials.filter((t) => t.category === "Comunidade").length, active: false },
  ]

  const featuredTutorial = tutorials.find((tutorial) => tutorial.featured)
  const regularTutorials = tutorials.filter((tutorial) => !tutorial.featured)

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Iniciante":
        return "bg-green-100 text-green-800"
      case "Intermédio":
        return "bg-yellow-100 text-yellow-800"
      case "Avançado":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t("tutorials")}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Aprenda a usar todas as funcionalidades do Calendário Agrícola para Angola com os nossos tutoriais em vídeo.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category, index) => (
            <Badge
              key={index}
              variant={category.active ? "default" : "secondary"}
              className="cursor-pointer hover:bg-green-100 hover:text-green-800 transition-colors"
            >
              {category.name} ({category.count})
            </Badge>
          ))}
        </div>

        {/* Featured Tutorial */}
        {featuredTutorial && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Tutorial em Destaque</h2>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/2 relative">
                  <img
                    src={featuredTutorial.thumbnail || "/placeholder.svg"}
                    alt={featuredTutorial.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <Button size="lg" className="bg-white bg-opacity-90 text-gray-900 hover:bg-white">
                      <Play className="h-6 w-6 mr-2" />
                      Reproduzir
                    </Button>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-red-600 text-white">
                    <Video className="h-3 w-3 mr-1" />
                    Destaque
                  </Badge>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge className="bg-blue-100 text-blue-800">{featuredTutorial.category}</Badge>
                    <Badge className={getLevelColor(featuredTutorial.level)}>{featuredTutorial.level}</Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{featuredTutorial.title}</h3>
                  <p className="text-gray-600 mb-6">{featuredTutorial.description}</p>
                  <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredTutorial.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {featuredTutorial.views} visualizações
                    </div>
                  </div>
                  <Button className="bg-green-600 hover:bg-green-700">
                    <Play className="h-4 w-4 mr-2" />
                    Assistir Tutorial
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Tutorials Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Todos os Tutoriais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularTutorials.map((tutorial) => (
              <Card key={tutorial.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={tutorial.thumbnail || "/placeholder.svg"}
                    alt={tutorial.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Button className="bg-white bg-opacity-90 text-gray-900 hover:bg-white">
                      <Play className="h-5 w-5 mr-2" />
                      Reproduzir
                    </Button>
                  </div>
                  <Badge className="absolute top-3 right-3 bg-black bg-opacity-70 text-white">
                    {tutorial.duration}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-blue-100 text-blue-800">{tutorial.category}</Badge>
                    <Badge className={getLevelColor(tutorial.level)}>{tutorial.level}</Badge>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{tutorial.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{tutorial.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {tutorial.views} visualizações
                    </div>
                    <div className="flex items-center gap-1">
                      <Video className="h-4 w-4" />
                      Vídeo
                    </div>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <Play className="h-4 w-4 mr-2" />
                    Assistir
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Help Section */}
        <Card className="bg-green-50 border-green-200">
          <CardContent className="p-8 text-center">
            <BookOpen className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Precisa de Mais Ajuda?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Se não encontrou o que procurava nos nossos tutoriais, consulte a nossa central de ajuda ou entre em
              contacto connosco.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/help">
                <Button className="bg-green-600 hover:bg-green-700">{t("helpCenter")}</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline">{t("contactUs")}</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default function TutorialsPage() {
  return (
    <LanguageProvider>
      <RegionProvider>
        <TutorialsContent />
      </RegionProvider>
    </LanguageProvider>
  )
}
