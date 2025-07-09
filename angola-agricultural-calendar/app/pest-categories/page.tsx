"use client"

import { WeatherProvider } from "../contexts/weather-context"
import Header from "../components/header"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, ArrowRight, Bug, ChevronRight, Leaf, Shield, WormIcon as Virus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "../contexts/language-context"

function PestCategoriesContent() {
  const { t } = useLanguage()

  const pestCategories = [
    {
      id: "insects",
      name: t("pestCategories.insects"),
      icon: <Bug className="h-8 w-8 text-red-600" />,
      description: t("pestCategories.insectsDescription"),
      count: 12,
      severity: "high",
      color: "red",
      examples: [
        { name: t("pests.fallArmyworm.name"), href: "/pragas/lagarta-do-cartucho" },
        { name: t("pests.whitefly.name"), href: "/pragas/mosca-branca" },
      ],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "diseases",
      name: t("pestCategories.diseases"),
      icon: <Virus className="h-8 w-8 text-orange-600" />,
      description: t("pestCategories.diseasesDescription"),
      count: 8,
      severity: "high",
      color: "orange",
      examples: [
        { name: t("diseases.leafRust.name"), href: "/pragas/ferrugem-do-cafe" },
        { name: t("diseases.leafRust.name"), href: "/pragas/ferrugem-do-feijao" },
        { name: t("diseases.bacterialWilt.name"), href: "/pragas/requeima-do-tomate" },
      ],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "weeds",
      name: t("pestCategories.weeds"),
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      description: t("pestCategories.weedsDescription"),
      count: 15,
      severity: "medium",
      color: "green",
      examples: [
        { name: t("pestCategories.weed.tiririca"), href: "/pragas/tiririca" },
        { name: t("pestCategories.weed.cordaDeViola"), href: "/pragas/corda-de-viola" },
        { name: t("pestCategories.weed.capimMassambara"), href: "/pragas/capim-massambara" },
      ],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "rodents",
      name: t("pestCategories.rodents"),
      icon: <span className="text-4xl">🐭</span>,
      description: t("pestCategories.rodentsDescription"),
      count: 5,
      severity: "medium",
      color: "blue",
      examples: [
        { name: t("pestCategories.rodent.ratoDoCampo"), href: "/pragas/rato-do-campo" },
        { name: t("pestCategories.rodent.ratoDaCana"), href: "/pragas/rato-da-cana" },
        { name: t("pestCategories.rodent.toupeira"), href: "/pragas/toupeira" },
      ],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "nematodes",
      name: t("pestCategories.nematodes"),
      icon: <span className="text-4xl">🪱</span>,
      description: t("pestCategories.nematodesDescription"),
      count: 6,
      severity: "high",
      color: "purple",
      examples: [
        { name: t("pestCategories.nematode.galhas"), href: "/pragas/nematoide-das-galhas" },
        { name: t("pestCategories.nematode.lesoes"), href: "/pragas/nematoide-das-lesoes" },
        { name: t("pestCategories.nematode.cisto"), href: "/pragas/nematoide-de-cisto" },
      ],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "birds",
      name: t("pestCategories.birds"),
      icon: <span className="text-4xl">🐦</span>,
      description: t("pestCategories.birdsDescription"),
      count: 4,
      severity: "low",
      color: "yellow",
      examples: [
        { name: t("pestCategories.bird.pardal"), href: "/pragas/pardal" },
        { name: t("pestCategories.bird.pombo"), href: "/pragas/pombo" },
        { name: t("pestCategories.bird.periquito"), href: "/pragas/periquito" },
      ],
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "high":
        return <Badge className="bg-red-100 text-red-800 border-red-200">Alta</Badge>
      case "medium":
        return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Média</Badge>
      case "low":
        return <Badge className="bg-green-100 text-green-800 border-green-200">Baixa</Badge>
      default:
        return <Badge className="bg-gray-100 text-gray-800 border-gray-200">Desconhecida</Badge>
    }
  }

  const getCategoryColor = (color: string) => {
    const colors: Record<string, string> = {
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
    const colors: Record<string, string> = {
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
            <h1 className="text-4xl font-bold mb-4">ðŸ› Pragas e Doenças</h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">Conheça as principais pragas e doenças que afetam as culturas.</p>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-700">
              Início
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-gray-400 self-center" />
            <Link href="/informacoes" className="text-gray-500 hover:text-gray-700">
              Informações
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-gray-400 self-center" />
            <span className="text-gray-900 font-medium">Pragas e Doenças</span>
          </nav>
        </div>
      </div>

      {/* Alert Banner */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <AlertTriangle className="h-5 w-5 text-yellow-400 mr-3" />
            <p className="text-yellow-800">
              <strong>Alerta sazonal:</strong> Conheça as principais pragas e doenças que afetam as culturas durante a estação.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="mb-12 max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Categorias de Pragas</h2>
          <p className="text-gray-600 mb-6">Conheça as principais categorias de pragas que afetam as culturas.</p>
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
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Exemplos comuns:</h4>
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
                    Ver todas na categoria ({category.count})
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
            <h3 className="text-2xl font-bold text-gray-900">Dicas de Prevenção</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">ðŸ” Inspeção regular</h4>
              <p className="text-gray-600 text-sm">Realize inspeções regulares em suas culturas para detectar pragas e doenças precocemente.</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">ðŸŒ± Rotação de culturas</h4>
              <p className="text-gray-600 text-sm">Alterne entre culturas para evitar a propagação de pragas e doenças.</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">ðŸ’§ Irrigação adequada</h4>
              <p className="text-gray-600 text-sm">Evite o excesso de água, que pode contribuir para a propagação de pragas e doenças.</p>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <AlertTriangle className="h-8 w-8 text-red-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Alerta de Emergência</h3>
          <p className="text-gray-600 mb-4">Se você detectar uma praga ou doença em sua cultura, entre em contato conosco imediatamente.</p>
          <Link
            href="/contact"
            className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors font-medium inline-block"
          >
            ðŸ“ž Contate um especialista
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function PestCategoriesPage() {
  return <PestCategoriesContent />
}
