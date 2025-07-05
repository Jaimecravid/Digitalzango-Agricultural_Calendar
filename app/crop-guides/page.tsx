"use client"


import { RegionProvider } from "../contexts/region-context"
import { WeatherProvider } from "../contexts/weather-context"
import Header from "../components/header"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, TrendingUp } from "lucide-react"

function CropGuidesContent() {


  const cropGuides = [
    {
      id: "milho",
      name: t("cornGuide"),
      icon: "ðŸŒ½",
      description: t("cornDescription"),
      difficulty: t("beginner"),
      season: t("rainySeasonShort"),
      duration: "90-120 dias",
      popularity: "high",
      href: "/guias/milho",
    },
    {
      id: "feijao",
      name: t("beanGuide"),
      icon: "ðŸ«˜",
      description: t("beanDescription"),
      difficulty: t("intermediate"),
      season: t("rainySeasonShort"),
      duration: "60-90 dias",
      popularity: "high",
      href: "/guias/feijao",
    },
    {
      id: "mandioca",
      name: "Guias de Cultivo",
      icon: "ðŸ¥”",
      description: "Veja dicas para diferentes culturas.",
      difficulty: "Iniciante",
      season: "Ano todo",
      duration: "8-12 meses",
      popularity: "high",
      href: "/guias/mandioca",
    },
    {
      id: "batata-doce",
      name: t("sweetPotatoGuide"),
      icon: "ðŸ ",
      description: t("sweetPotatoDescription"),
      difficulty: t("beginner"),
      season: t("rainySeasonShort"),
      duration: "90-120 dias",
      popularity: "medium",
      href: "/guias/batata-doce",
    },
    {
      id: "tomate",
      name: t("tomatoGuide"),
      icon: "ðŸ…",
      description: t("tomatoDescription"),
      difficulty: t("intermediate"),
      season: t("drySeasonShort"),
      duration: "70-90 dias",
      popularity: "high",
      href: "/guias/tomate",
    },
    {
      id: "cebola",
      name: t("onionGuide"),
      icon: "ðŸ§…",
      description: t("onionDescription"),
      difficulty: t("intermediate"),
      season: t("drySeasonShort"),
      duration: "90-120 dias",
      popularity: "medium",
      href: "/guias/cebola",
    },
    {
      id: "cafe",
      name: t("coffeeGuide"),
      icon: "â˜•",
      description: t("coffeeDescription"),
      difficulty: t("advanced"),
      season: t("yearRound"),
      duration: "3-5 anos",
      popularity: "medium",
      href: "/guias/cafe",
    },
    {
      id: "banana",
      name: t("bananaGuide"),
      icon: "ðŸŒ",
      description: t("bananaDescription"),
      difficulty: t("intermediate"),
      season: t("yearRound"),
      duration: "9-12 meses",
      popularity: "high",
      href: "/guias/banana",
    },
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case t("beginner"):
        return "bg-green-100 text-green-800"
      case t("intermediate"):
        return "bg-yellow-100 text-yellow-800"
      case t("advanced"):
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getPopularityIcon = (popularity: string) => {
    return popularity === "high" ? <TrendingUp className="h-4 w-4 text-green-600" /> : null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">ðŸŒ¾ {t("cropGuidesTitle")}</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">{t("cropGuidesSubtitle")}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-green-600 mb-2">{cropGuides.length}</div>
            <div className="text-gray-600">{t("totalCrops")}</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-green-600 mb-2">12</div>
            <div className="text-gray-600">{t("monthsCoverage")}</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-green-600 mb-2">18</div>
            <div className="text-gray-600">{t("provinces")}</div>
          </div>
        </div>

        {/* Filter Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("allCropGuides")}</h2>
          <p className="text-gray-600 mb-6">{t("selectCropGuide")}</p>
        </div>

        {/* Crop Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cropGuides.map((crop) => (
            <Link key={crop.id} href={crop.href} className="group">
              <Card className="h-full hover:shadow-lg transition-all duration-200 group-hover:scale-105">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-3xl">{crop.icon}</div>
                    {getPopularityIcon(crop.popularity)}
                  </div>
                  <CardTitle className="text-lg group-hover:text-green-600 transition-colors">{crop.name}</CardTitle>
                  <CardDescription className="text-sm">{crop.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">{t("difficulty")}:</span>
                      <Badge className={getDifficultyColor(crop.difficulty)}>{crop.difficulty}</Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500 flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {t("duration")}:
                      </span>
                      <span className="font-medium">{crop.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">{t("season")}:</span>
                      <span className="font-medium">{crop.season}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-green-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{t("needHelp")}</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">{t("needHelpDescription")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/comunidade"
              className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors font-medium"
            >
              ðŸ‘¥ {t("joinCommunity")}
            </Link>
            <Link
              href="/contact"
              className="bg-white text-green-600 border border-green-600 px-6 py-3 rounded-md hover:bg-green-50 transition-colors font-medium"
            >
              ðŸ“ž {t("contactExpert")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CropGuidesPage() {
  const { t } = useLanguage();
  return <CropGuidesContent />
}












