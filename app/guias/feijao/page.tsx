"use client"

import { LanguageProvider } from "../../contexts/language-context"
import { RegionProvider } from "../../contexts/region-context"
import { WeatherProvider } from "../../contexts/weather-context"
import Header from "../../components/header"
import { useLanguage } from "../../contexts/language-context"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Droplets, Sun, Thermometer } from "lucide-react"

function FeijaoContent() {
  const { t } = useLanguage()

  const plantingCalendar = [
    { month: t("october"), activity: t("landPreparation"), icon: "🚜" },
    { month: t("november"), activity: t("planting"), icon: "🌱" },
    { month: t("december"), activity: t("germination"), icon: "🌿" },
    { month: t("january"), activity: t("flowering"), icon: "🌸" },
    { month: t("february"), activity: t("harvest"), icon: "🫘" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-green-600">
              {t("home")}
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/crop-guides" className="text-gray-500 hover:text-green-600">
              {t("cropGuides")}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{t("beanGuide")}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <Link href="/crop-guides" className="mr-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <div>
              <div className="flex items-center mb-2">
                <span className="text-4xl mr-4">🫘</span>
                <Badge className="bg-green-800 text-white">{t("intermediate")}</Badge>
              </div>
              <h1 className="text-3xl font-bold mb-2">{t("beanGuide")}</h1>
              <p className="text-green-100">Phaseolus vulgaris</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <Card>
              <CardHeader>
                <CardTitle>{t("overview")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{t("beanOverview")}</p>
                <p className="text-gray-700">{t("beanNutrition")}</p>
              </CardContent>
            </Card>

            {/* Planting Calendar */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 text-green-600 mr-2" />
                  {t("plantingCalendar")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {plantingCalendar.map((item, index) => (
                    <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-2xl mr-4">{item.icon}</span>
                      <div>
                        <div className="font-semibold text-gray-900">{item.month}</div>
                        <div className="text-gray-600 text-sm">{item.activity}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Growing Conditions */}
            <Card>
              <CardHeader>
                <CardTitle>{t("growingConditions")}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Thermometer className="h-5 w-5 text-red-500 mr-3" />
                      <div>
                        <div className="font-semibold">{t("temperature")}</div>
                        <div className="text-gray-600 text-sm">18-25°C</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Droplets className="h-5 w-5 text-blue-500 mr-3" />
                      <div>
                        <div className="font-semibold">{t("rainfall")}</div>
                        <div className="text-gray-600 text-sm">400-600mm</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Sun className="h-5 w-5 text-yellow-500 mr-3" />
                      <div>
                        <div className="font-semibold">{t("sunlight")}</div>
                        <div className="text-gray-600 text-sm">{t("fullSun")}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-brown-600 mr-3">🌱</span>
                      <div>
                        <div className="font-semibold">{t("soilType")}</div>
                        <div className="text-gray-600 text-sm">{t("wellDrainedSoil")}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Facts */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t("quickFacts")}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">{t("difficulty")}:</span>
                  <Badge className="bg-yellow-100 text-yellow-800">{t("intermediate")}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">{t("duration")}:</span>
                  <span className="text-sm font-medium">60-90 {t("days")}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">{t("yield")}:</span>
                  <span className="text-sm font-medium">1-2 ton/ha</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">{t("spacing")}:</span>
                  <span className="text-sm font-medium">30x10 cm</span>
                </div>
              </CardContent>
            </Card>

            {/* Common Varieties */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t("commonVarieties")}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="font-semibold text-gray-900">Carioca</div>
                  <div className="text-gray-600 text-sm">{t("cariocaDescription")}</div>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="font-semibold text-gray-900">Preto</div>
                  <div className="text-gray-600 text-sm">{t("pretoDescription")}</div>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="font-semibold text-gray-900">Fradinho</div>
                  <div className="text-gray-600 text-sm">{t("fradinhoDescription")}</div>
                </div>
              </CardContent>
            </Card>

            {/* Related Links */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t("relatedLinks")}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/guias/milho" className="block text-green-600 hover:text-green-700 text-sm">
                  🌽 {t("cornGuide")}
                </Link>
                <Link href="/pragas/pulgao" className="block text-green-600 hover:text-green-700 text-sm">
                  🐛 {t("aphids")}
                </Link>
                <Link href="/recursos" className="block text-green-600 hover:text-green-700 text-sm">
                  🌱 {t("resources")}
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function FeijaoPage() {
  return (
    <LanguageProvider>
      <RegionProvider>
        <WeatherProvider>
          <FeijaoContent />
        </WeatherProvider>
      </RegionProvider>
    </LanguageProvider>
  )
}
