"use client"

import Link from "next/link"
import { Sprout, Calendar, Droplets, Thermometer, Bug, ArrowLeft } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import { RegionProvider } from "../../contexts/region-context"
import Header from "../../components/header"

function CornGuideContent() {
  const { t } = useLanguage()

  const plantingCalendar = [
    { month: "Outubro", activity: "Preparação do solo", description: "Arar e preparar o terreno" },
    { month: "Novembro", activity: "Plantio", description: "Época ideal para plantar milho" },
    { month: "Dezembro", activity: "Primeira adubação", description: "Aplicar fertilizante NPK" },
    { month: "Janeiro", activity: "Capina", description: "Remover ervas daninhas" },
    { month: "Fevereiro", activity: "Segunda adubação", description: "Aplicar ureia" },
    { month: "Março", activity: "Controlo de pragas", description: "Monitorizar lagarta-do-cartucho" },
    { month: "Abril", activity: "Colheita", description: "Colher quando os grãos estiverem secos" },
  ]

  const varieties = [
    {
      name: "Milho Branco Local",
      cycle: "120-140 dias",
      yield: "2-3 ton/ha",
      characteristics: "Resistente à seca, adaptado ao clima local",
    },
    {
      name: "Milho Amarelo Híbrido",
      cycle: "110-120 dias",
      yield: "4-6 ton/ha",
      characteristics: "Alto rendimento, requer mais água",
    },
    {
      name: "Milho Doce",
      cycle: "90-100 dias",
      yield: "8-12 ton/ha",
      characteristics: "Para consumo fresco, mercado urbano",
    },
  ]

  const commonPests = [
    {
      name: "Lagarta-do-cartucho",
      severity: "Alta",
      symptoms: "Furos nas folhas, presença de lagartas no cartucho",
      control: "Inseticidas biológicos, armadilhas com feromonas",
    },
    {
      name: "Pulgões",
      severity: "Média",
      symptoms: "Folhas amareladas, substância pegajosa",
      control: "Óleo de neem, predadores naturais",
    },
    {
      name: "Broca do milho",
      severity: "Média",
      symptoms: "Galerias no caule, plantas quebradas",
      control: "Rotação de culturas, controlo biológico",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8">
          <Link href="/informacoes" className="text-green-600 hover:text-green-700">
            {t("information")}
          </Link>
          <span className="text-gray-400">/</span>
          <Link href="/guias" className="text-green-600 hover:text-green-700">
            {t("cropGuides")}
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600">Milho</span>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🌽</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Guia Completo do Milho</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tudo o que precisa saber para cultivar milho com sucesso em Angola. Desde o plantio até à colheita.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sprout className="h-5 w-5 text-green-600" />
                  Visão Geral
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  O milho é uma das culturas mais importantes de Angola, sendo cultivado em todas as províncias. É uma
                  fonte essencial de alimentação e renda para milhões de famílias angolanas.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">120</div>
                    <div className="text-sm text-gray-600">Dias até colheita</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">3-5</div>
                    <div className="text-sm text-gray-600">Ton/hectare</div>
                  </div>
                  <div className="text-center p-3 bg-yellow-50 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-600">Nov</div>
                    <div className="text-sm text-gray-600">Melhor época</div>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">600mm</div>
                    <div className="text-sm text-gray-600">Água necessária</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Planting Calendar */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-green-600" />
                  Calendário de Plantio
                </CardTitle>
                <CardDescription>Actividades mensais para o cultivo de milho</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {plantingCalendar.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium min-w-fit">
                        {item.month}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.activity}</h4>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Varieties */}
            <Card>
              <CardHeader>
                <CardTitle>Variedades Recomendadas</CardTitle>
                <CardDescription>Principais variedades de milho cultivadas em Angola</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {varieties.map((variety, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">{variety.name}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Ciclo:</span>
                          <div className="font-medium">{variety.cycle}</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Rendimento:</span>
                          <div className="font-medium">{variety.yield}</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Características:</span>
                          <div className="font-medium">{variety.characteristics}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Common Pests */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bug className="h-5 w-5 text-red-600" />
                  Pragas Comuns
                </CardTitle>
                <CardDescription>Principais pragas que afectam o milho e como controlá-las</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {commonPests.map((pest, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">{pest.name}</h4>
                        <Badge
                          className={
                            pest.severity === "Alta" ? "bg-red-100 text-red-800" : "bg-yellow-100 text-yellow-800"
                          }
                        >
                          {pest.severity}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Sintomas:</span>
                          <div className="font-medium">{pest.symptoms}</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Controlo:</span>
                          <div className="font-medium">{pest.control}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Facts */}
            <Card>
              <CardHeader>
                <CardTitle>Factos Rápidos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Thermometer className="h-5 w-5 text-red-500" />
                  <div>
                    <div className="font-medium">Temperatura</div>
                    <div className="text-sm text-gray-600">20-30°C ideal</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Droplets className="h-5 w-5 text-blue-500" />
                  <div>
                    <div className="font-medium">Precipitação</div>
                    <div className="text-sm text-gray-600">500-800mm/ano</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl">🌱</span>
                  <div>
                    <div className="font-medium">Espaçamento</div>
                    <div className="text-sm text-gray-600">75cm x 25cm</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl">🌾</span>
                  <div>
                    <div className="font-medium">Profundidade</div>
                    <div className="text-sm text-gray-600">3-5cm</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Guides */}
            <Card>
              <CardHeader>
                <CardTitle>Guias Relacionados</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link
                  href="/guias/feijao"
                  className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">🫘</span>
                    <div>
                      <div className="font-medium">Feijão</div>
                      <div className="text-sm text-gray-600">Cultura associada</div>
                    </div>
                  </div>
                </Link>
                <Link
                  href="/guias/mandioca"
                  className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">🥔</span>
                    <div>
                      <div className="font-medium">Mandioca</div>
                      <div className="text-sm text-gray-600">Rotação de culturas</div>
                    </div>
                  </div>
                </Link>
                <Link href="/pragas" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">🐛</span>
                    <div>
                      <div className="font-medium">Base de Pragas</div>
                      <div className="text-sm text-gray-600">Mais informações</div>
                    </div>
                  </div>
                </Link>
              </CardContent>
            </Card>

            {/* Download Guide */}
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-gray-900 mb-2">Baixar Guia PDF</h3>
                <p className="text-gray-600 text-sm mb-4">Tenha este guia sempre consigo</p>
                <Button className="w-full bg-green-600 hover:bg-green-700">Baixar PDF</Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-12">
          <Link href="/informacoes">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar às Informações
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function CornGuidePage() {
  return (
    
      <RegionProvider>
        <CornGuideContent />
      </RegionProvider>
    
  )
}
