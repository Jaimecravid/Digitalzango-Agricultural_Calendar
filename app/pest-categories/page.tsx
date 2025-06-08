"use client"

import { LanguageProvider } from "../contexts/language-context"
import { RegionProvider } from "../contexts/region-context"
import { WeatherProvider } from "../contexts/weather-context"
import Header from "../components/header"
import { useLanguage } from "../contexts/language-context"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, ArrowRight, Bug, ChevronRight, Leaf, Shield, WormIcon as Virus } from "lucide-react"
import { Button } from "@/components/ui/button"

function PestCategoriesContent() {
  const { t } = useLanguage()

  const pestCategories = [
    {
      id: "insects",
      name: t("insects"),
      icon: <Bug className="h-8 w-8 text-red-600" />,
      description: t("insectsDescription"),
      count: 12,
      severity: "high",
      color: "red",
      examples: [
        { name: t("fallArmyworm"), href: "/pragas/lagarta-do-cartucho" },
        { name: t("whitefly"), href: "/pragas/mosca-branca" },
        { name: t("coffeeBorer"), href: "/pragas/broca-do-cafe" },
      ],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "diseases",
      name: t("diseases"),
      icon: <Virus className="h-8 w-8 text-orange-600" />,
      description: t("diseasesDescription"),
      count: 8,
      severity: "high",
      color: "orange",
      examples: [
        { name: t("coffeeRust"), href: "/pragas/ferrugem-do-cafe" },
        { name: t("beanRust"), href: "/pragas/ferrugem-do-feijao" },
        { name: t("tomatoBlight"), href: "/pragas/requeima-do-tomate" },
      ],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "weeds",
      name: t("weeds"),
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      description: t("weedsDescription"),
      count: 15,
      severity: "medium",
      color: "green",
      examples: [
        { name: t("nutgrass"), href: "/pragas/tiririca" },
        { name: t("morningGlory"), href: "/pragas/corda-de-viola" },
        { name: t("johnsongrass"), href: "/pragas/capim-massambara" },
      ],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "rodents",
      name: t("rodents"),
      icon: <span className="text-4xl">🐭</span>,
      description: t("rodentsDescription"),
      count: 5,
      severity: "medium",
      color: "blue",
      examples: [
        { name: t("fieldMouse"), href: "/pragas/rato-do-campo" },
        { name: t("caneRat"), href: "/pragas/rato-da-cana" },
        { name: t("mole"), href: "/pragas/toupeira" },
      ],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "nematodes",
      name: t("nematodes"),
      icon: <span className="text-4xl">🪱</span>,
      description: t("nematodesDescription"),
      count: 6,
      severity: "high",
      color: "purple",
      examples: [
        { name: t("rootKnotNematode"), href: "/pragas/nematoide-das-galhas" },
        { name: t("lesionNematode"), href: "/pragas/nematoide-das-lesoes" },
        { name: t("cystNematode"), href: "/pragas/nematoide-de-cisto" },
      ],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "birds",
      name: t("birds"),
      icon: <span className="text-4xl">🐦</span>,
      description: t("birdsDescription"),
      count: 4,
      severity: "low",
      color: "yellow",
      examples: [
        { name: t("sparrow"), href: "/pragas/pardal" },
        { name: t("pigeon"), href: "/pragas/pombo" },
        { name: t("parakeet"), href: "/pragas/periquito" },
      ],
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "high":
        return <Badge className="bg-red-100 text-red-800 border-red-200">{t("highSeverity")}</Badge>
      case "medium":
        return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">{t("mediumSeverity")}</Badge>
      case "low":
        return <Badge className="bg-green-100 text-green-800 border-green-200">{t("lowSeverity")}</Badge>
      default:
        return <Badge className="bg-gray-100 text-gray-800 border-gray-200">{t("unknownSeverity")}</Badge>
    }
  }

  const getCategoryColor = (color: string) => {
    const colors = {
      red: "border-red-200 bg-red-50",
      orange: "border-orange-200 bg-orange-50",
      yellow: "border-yellow-200 bg-yellow-50",
      green: "border-green-200 bg-green-50",
      blue: "border-blue-200 bg-blue-50",
      purple: "border-purple-200 bg-purple-50",
    }
    return colors[color] || colors.red
  }

  const getCategoryButtonColor = (color: string) => {
    const colors = {
      red: "bg-red-600 hover:bg-red-700",
      orange: "bg-orange-600 hover:bg-orange-700",
      yellow: "bg-yellow-600 hover:bg-yellow-700",
      green: "bg-green-600 hover:bg-green-700",
      blue: "bg-blue-600 hover:bg-blue-700",
      purple: "bg-purple-600 hover:bg-purple-700",
    }
    return colors[color] || colors.red
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">🐛 {t("pestsAndDiseasesTitle")}</h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">{t("pestsAndDiseasesSubtitle")}</p>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-700">
              {t("home")}
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-gray-400 self-center" />
            <Link href="/informacoes" className="text-gray-500 hover:text-gray-700">
              {t("information")}
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-gray-400 self-center" />
            <span className="text-gray-900 font-medium">{t("pestsAndDiseases")}</span>
          </nav>
        </div>
      </div>

      {/* Alert Banner */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <AlertTriangle className="h-5 w-5 text-yellow-400 mr-3" />
            <p className="text-yellow-800">
              <strong>{t("seasonalAlert")}:</strong> {t("seasonalAlertMessage")}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="mb-12 max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("pestCategoriesIntro")}</h2>
          <p className="text-gray-600 mb-6">{t("pestCategoriesDescription")}</p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {pestCategories.map((category) => (
            <Card
              key={category.id}
              className={`border overflow-hidden hover:shadow-lg transition-all duration-200 ${getCategoryColor(
                category.color,
              )}`}
            >
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>{category.icon}</div>
                  {getSeverityBadge(category.severity)}
                </div>
                <CardTitle className="text-xl mt-2">{category.name}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="mb-4">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-32 object-cover rounded-md"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">{t("commonExamples")}:</h4>
                  <ul className="space-y-1">
                    {category.examples.map((example, index) => (
                      <li key={index} className="text-sm">
                        <Link
                          href={example.href}
                          className="text-gray-600 hover:text-red-600 hover:underline flex items-center"
                        >
                          <ArrowRight className="h-3 w-3 mr-1 inline" />
                          {example.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="pt-2">
                <Link href={`/pragas/categoria/${category.id}`} className="w-full">
                  <Button className={`w-full ${getCategoryButtonColor(category.color)}`}>
                    {t("viewAllInCategory")} ({category.count})
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Prevention Tips */}
        <div className="bg-green-50 rounded-lg p-8 mb-12">
          <div className="flex items-center mb-4">
            <Shield className="h-6 w-6 text-green-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">{t("preventionTips")}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">🔍 {t("regularInspection")}</h4>
              <p className="text-gray-600 text-sm">{t("regularInspectionTip")}</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">🌱 {t("cropRotation")}</h4>
              <p className="text-gray-600 text-sm">{t("cropRotationTip")}</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">💧 {t("properIrrigation")}</h4>
              <p className="text-gray-600 text-sm">{t("properIrrigationTip")}</p>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <AlertTriangle className="h-8 w-8 text-red-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">{t("emergencyAlert")}</h3>
          <p className="text-gray-600 mb-4">{t("emergencyAlertDescription")}</p>
          <Link
            href="/contact"
            className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors font-medium inline-block"
          >
            📞 {t("contactExpert")}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function PestCategoriesPage() {
  return (
    <LanguageProvider>
      <RegionProvider>
        <WeatherProvider>
          <PestCategoriesContent />
        </WeatherProvider>
      </RegionProvider>
    </LanguageProvider>
  )
}
