"use client"

import Link from "next/link"
import { Calendar, Droplets, Thermometer, Sun, AlertTriangle, CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { RegionProvider } from "../../contexts/region-context"
import { WeatherProvider } from "../../contexts/weather-context"
import Header from "../../components/header"


// Use centralized language context
import { useLanguage } from "../../contexts/language-context";

function BeanGuideContent() {
  const { t } = useLanguage();

  // Arrays using t() must be defined AFTER the hook call
  const plantingCalendar = [
    { month: t("pages.guides.bean.months.october"), activity: t("pages.guides.bean.activities.landPreparation"), icon: "🚜" },
    { month: t("pages.guides.bean.months.november"), activity: t("pages.guides.bean.activities.planting"), icon: "🌱" },
    { month: t("pages.guides.bean.months.december"), activity: t("pages.guides.bean.activities.germination"), icon: "🌿" },
    { month: t("pages.guides.bean.months.january"), activity: t("pages.guides.bean.activities.flowering"), icon: "🌸" },
    { month: t("pages.guides.bean.months.february"), activity: t("pages.guides.bean.activities.podFormation"), icon: "🫛" },
    { month: t("pages.guides.bean.months.march"), activity: t("pages.guides.bean.activities.harvest"), icon: "🌾" },
    { month: t("pages.guides.bean.months.april"), activity: t("pages.guides.bean.activities.postHarvest"), icon: "📦" },
  ];

  const beanVarieties = [
    {
      name: t("commonBean"),
      scientificName: "Phaseolus vulgaris",
      maturity: "60-90",
      yield: "800-1200",
      characteristics: [t("droughtTolerant"), t("highYield")],
      regions: ["Huambo", "Bié", "Malanje"],
      color: "bg-green-100 text-green-800"
    },
    {
      name: t("blackBean"),
      scientificName: "Phaseolus vulgaris (var. nigra)",
      maturity: "70-95",
      yield: "900-1400",
      characteristics: [t("diseaseResistant"), t("marketDemand")],
      regions: ["Luanda", "Bengo", "Kwanza Norte"],
      color: "bg-gray-100 text-gray-800"
    },
    {
      name: t("redBean"),
      scientificName: "Phaseolus vulgaris (var. rubra)",
      maturity: "65-85",
      yield: "750-1100",
      characteristics: [t("droughtTolerant"), t("marketDemand")],
      regions: ["Huíla", "Cunene", "Namibe"],
      color: "bg-red-100 text-red-800"
    },
    {
      name: t("whiteBean"),
      scientificName: "Phaseolus vulgaris (var. alba)",
      maturity: "75-100",
      yield: "850-1300",
      characteristics: [t("highYield"), t("diseaseResistant")],
      regions: ["Uíge", "Zaire", "Cabinda"],
      color: "bg-blue-100 text-blue-800"
    }
  ]

  const careSteps = [
    {
      title: t("soilPreparation"),
      description: "Prepare o solo com aração profunda e incorporação de matéria orgânica",
      icon: "🚜",
      progress: 100,
      tips: ["Arar 20-25cm de profundidade", "Adicionar composto orgânico", "Nivelar o terreno"]
    },
    {
      title: t("planting"),
      description: "Plante as sementes com espaçamento adequado e profundidade correta",
      icon: "🌱",
      progress: 85,
      tips: ["Espaçamento: 30x10cm", "Profundidade: 3-4cm", "2-3 sementes por cova"]
    },
    {
      title: t("watering"),
      description: "Mantenha irrigação regular, especialmente durante floração",
      icon: "💧",
      progress: 70,
      tips: ["Rega 2-3 vezes por semana", "Evitar encharcamento", "Reduzir na colheita"]
    },
    {
      title: t("fertilization"),
      description: "Aplique fertilizantes conforme análise do solo",
      icon: "🧪",
      progress: 60,
      tips: ["NPK 10-20-20 no plantio", "Ureia aos 30 dias", "Micronutrientes se necessário"]
    }
  ]

  const commonIssues = [
    {
      type: t("commonPests"),
      name: "Pulgão",
      symptoms: "Folhas amareladas e enroladas",
      treatment: "Pulverização com sabão neutro ou inseticida natural",
      prevention: "Rotação de culturas e controlo biológico"
    },
    {
      type: t("commonDiseases"),
      name: "Antracnose",
      symptoms: "Manchas escuras nas vagens e folhas",
      treatment: "Fungicida à base de cobre",
      prevention: "Sementes tratadas e espaçamento adequado"
    },
    {
      type: t("commonPests"),
      name: "Lagarta-das-vagens",
      symptoms: "Furos nas vagens e grãos danificados",
      treatment: "Inseticida biológico ou químico",
      prevention: "Monitorização regular e armadilhas"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-6xl">🫛</span>
            <h1 className="text-4xl font-bold text-gray-900">{t("beanGuideTitle")}</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("beanGuideSubtitle")}
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <Badge className="bg-green-100 text-green-800">Cultura Principal</Badge>
            <Badge className="bg-blue-100 text-blue-800">60-100 dias</Badge>
            <Badge className="bg-yellow-100 text-yellow-800">Época das Chuvas</Badge>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button className="bg-green-600 hover:bg-green-700">
            {t("downloadGuide")}
          </Button>
          <Button variant="outline">
            {t("shareGuide")}
          </Button>
          <Button variant="outline">
            {t("askQuestion")}
          </Button>
        </div>

        {/* Planting Calendar */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t("plantingCalendar")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
            {plantingCalendar.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.month}</h3>
                  <p className="text-sm text-gray-600">{item.activity}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bean Varieties */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t("varietiesTitle")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {beanVarieties.map((variety, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{variety.name}</CardTitle>
                    <Badge className={variety.color}>{variety.regions[0]}</Badge>
                  </div>
                  <CardDescription className="italic">{variety.scientificName}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{variety.maturity}</div>
                      <div className="text-sm text-gray-600">{t("maturityDays")}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{variety.yield}</div>
                      <div className="text-sm text-gray-600">{t("yieldPerHectare")}</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Características:</h4>
                    <div className="flex flex-wrap gap-2">
                      {variety.characteristics.map((char, charIndex) => (
                        <Badge key={charIndex} variant="outline" className="text-xs">
                          {char}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-semibold text-gray-900 mb-2">{t("bestRegions")}:</h4>
                    <div className="flex flex-wrap gap-2">
                      {variety.regions.map((region, regionIndex) => (
                        <Badge key={regionIndex} className="bg-gray-100 text-gray-800 text-xs">
                          {region}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Care and Maintenance */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t("careAndMaintenance")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {careSteps.map((step, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{step.icon}</span>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </div>
                  <CardDescription>{step.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Progresso da Época</span>
                      <span className="text-sm font-medium">{step.progress}%</span>
                    </div>
                    <Progress value={step.progress} className="h-2" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Dicas:</h4>
                    <ul className="space-y-1">
                      {step.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="text-sm text-gray-600 flex items-start gap-2">
                          <CheckCircle className="h-3 w-3 text-green-600 mt-0.5 flex-shrink-0" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Common Issues */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t("pestManagement")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {commonIssues.map((issue, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-orange-600" />
                    <CardTitle className="text-lg">{issue.name}</CardTitle>
                  </div>
                  <Badge className={issue.type === t("commonPests") ? "bg-red-100 text-red-800" : "bg-yellow-100 text-yellow-800"}>
                    {issue.type}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Sintomas:</h4>
                    <p className="text-sm text-gray-600">{issue.symptoms}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{t("treatment")}:</h4>
                    <p className="text-sm text-gray-600">{issue.treatment}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{t("prevention")}:</h4>
                    <p className="text-sm text-gray-600">{issue.prevention}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="text-center">
          <Link href="/crop-guides">
            <Button variant="outline" className="mr-4">
              {t("backToGuides")}
            </Button>
          </Link>
          <Link href="/guias/milho">
            <Button className="bg-green-600 hover:bg-green-700">
              Próximo: Guia do Milho
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function BeanGuidePage() {
  return (
    <RegionProvider>
      <WeatherProvider>
        <BeanGuideContent />
      </WeatherProvider>
    </RegionProvider>
  )
}
