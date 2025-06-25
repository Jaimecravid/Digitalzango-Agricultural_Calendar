"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { AlertTriangle, Shield } from "lucide-react"

function PragasContent() {
  const pestCategories = [
    {
      id: "insects",
      name: "Insetos",
      icon: "🐛",
      description: "Pragas que atacam folhas, caules e frutos",
      count: 12,
      severity: "high",
      color: "red",
    },
    {
      id: "diseases",
      name: "Doenças",
      icon: "🦠",
      description: "Fungos, bactérias e vírus que afetam as plantas",
      count: 8,
      severity: "high",
      color: "orange",
    },
    {
      id: "weeds",
      name: "Ervas Daninhas",
      icon: "🌿",
      description: "Plantas invasoras que competem por recursos",
      count: 15,
      severity: "medium",
      color: "yellow",
    },
    {
      id: "rodents",
      name: "Roedores",
      icon: "🐭",
      description: "Ratos e outros animais que danificam culturas",
      count: 5,
      severity: "medium",
      color: "blue",
    },
  ]

  const commonPests = [
    {
      id: "lagarta-do-cartucho",
      name: "Lagarta-do-cartucho",
      scientificName: "Spodoptera frugiperda",
      icon: "🐛",
      crops: ["Milho", "Sorgo"],
      severity: "high",
      season: "Época chuvosa",
      href: "/pragas/lagarta-do-cartucho",
    },
    {
      id: "mosca-branca",
      name: "Mosca-branca",
      scientificName: "Bemisia tabaci",
      icon: "🦟",
      crops: ["Tomate", "Feijão"],
      severity: "high",
      season: "Época seca",
      href: "/pragas/mosca-branca",
    },
    {
      id: "ferrugem-do-cafe",
      name: "Ferrugem do café",
      scientificName: "Hemileia vastatrix",
      icon: "🦠",
      crops: ["Café"],
      severity: "high",
      season: "Época chuvosa",
      href: "/pragas/ferrugem-do-cafe",
    },
    {
      id: "broca-do-cafe",
      name: "Broca do café",
      scientificName: "Hypothenemus hampei",
      icon: "🪲",
      crops: ["Café"],
      severity: "high",
      season: "Todo o ano",
      href: "/pragas/broca-do-cafe",
    },
    {
      id: "pulgao",
      name: "Pulgões",
      scientificName: "Aphis spp.",
      icon: "🐛",
      crops: ["Hortaliças"],
      severity: "medium",
      season: "Época seca",
      href: "/pragas/pulgao",
    },
    {
      id: "nematoides",
      name: "Nematóides",
      scientificName: "Meloidogyne spp.",
      icon: "🪱",
      crops: ["Tomate", "Hortaliças"],
      severity: "medium",
      season: "Todo o ano",
      href: "/pragas/nematoides",
    },
  ]

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "bg-red-100 text-red-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getSeverityText = (severity: string) => {
    switch (severity) {
      case "high":
        return "Alto"
      case "medium":
        return "Médio"
      case "low":
        return "Baixo"
      default:
        return "Desconhecido"
    }
  }

  const getCategoryColor = (color: string) => {
    const colors = {
      red: "from-red-500 to-red-600",
      orange: "from-orange-500 to-orange-600",
      yellow: "from-yellow-500 to-yellow-600",
      blue: "from-blue-500 to-blue-600",
    }
    return colors[color] || colors.red
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">🐛 Pragas e Doenças</h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Identifique, previna e controle pragas e doenças nas suas culturas com informações especializadas para Angola
            </p>
          </div>
        </div>
      </div>

      {/* Alert Banner */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <AlertTriangle className="h-5 w-5 text-yellow-400 mr-3" />
            <p className="text-yellow-800">
              <strong>Alerta Sazonal:</strong> Época chuvosa favorece o aparecimento de fungos e bactérias. Mantenha vigilância constante.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Categories Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Categorias de Pragas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pestCategories.map((category) => (
              <Link key={category.id} href={`/pragas/categoria/${category.id}`} className="group">
                <Card
                  className={`h-full hover:shadow-lg transition-all duration-200 group-hover:scale-105 bg-gradient-to-br ${getCategoryColor(category.color)} text-white`}
                >
                  <CardHeader className="pb-3">
                    <div className="text-4xl mb-2">{category.icon}</div>
                    <CardTitle className="text-lg text-white">{category.name}</CardTitle>
                    <CardDescription className="text-white/80 text-sm">{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between">
                      <span className="text-white/80 text-sm">
                        {category.count} ameaças
                      </span>
                      <Badge className="bg-white/20 text-white border-white/30">
                        {getSeverityText(category.severity)}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Common Pests Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Pragas Comuns</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonPests.map((pest) => (
              <Link key={pest.id} href={pest.href} className="group">
                <Card className="h-full hover:shadow-lg transition-all duration-200 group-hover:scale-105">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-3xl">{pest.icon}</div>
                      <Badge className={getSeverityColor(pest.severity)}>
                        {getSeverityText(pest.severity)}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg group-hover:text-red-600 transition-colors">{pest.name}</CardTitle>
                    <CardDescription className="text-sm italic">{pest.scientificName}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm text-gray-500">Culturas afetadas:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {pest.crops.map((crop, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {crop}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Época ativa:</span>
                        <span className="font-medium">{pest.season}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Prevention Tips */}
        <div className="bg-green-50 rounded-lg p-8 mb-12">
          <div className="flex items-center mb-4">
            <Shield className="h-6 w-6 text-green-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">Dicas de Prevenção</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">🔍 Inspeção Regular</h4>
              <p className="text-gray-600 text-sm">
                Examine suas plantas semanalmente para detectar sinais precoces de pragas e doenças
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">🌱 Rotação de Culturas</h4>
              <p className="text-gray-600 text-sm">
                Alterne diferentes tipos de culturas para quebrar o ciclo de vida das pragas
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">💧 Irrigação Adequada</h4>
              <p className="text-gray-600 text-sm">
                Evite excesso de água que pode favorecer doenças fúngicas e bacterianas
              </p>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <AlertTriangle className="h-8 w-8 text-red-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Alerta de Emergência</h3>
          <p className="text-gray-600 mb-4">
            Detectou uma praga ou doença desconhecida? Entre em contato com nossos especialistas imediatamente.
          </p>
          <Link
            href="/contact"
            className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors font-medium inline-block"
          >
            📞 Contactar Especialista
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function PragasPage() {
  return <PragasContent />
}
