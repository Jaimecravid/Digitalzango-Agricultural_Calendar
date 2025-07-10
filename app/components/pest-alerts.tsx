"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle, Bug, Search, Eye } from "lucide-react"
import { useLanguage } from "../contexts/language-context"
import { useRegion } from "../contexts/region-context"

interface PestInfo {
  id: string
  name: string
  type: "pest" | "disease"
  severity: "low" | "medium" | "high"
  affectedCrops: string[]
  symptoms: string[]
  prevention: string[]
  treatment: string[]
  season: string[]
  image: string
  description: string
}

interface Alert {
  id: string
  pestId: string
  region: string
  severity: "low" | "medium" | "high"
  reportedDate: string
  status: "active" | "resolved"
  description: string
}

const pestDatabase: PestInfo[] = [
  {
    id: "fall-armyworm",
    name: "Lagarta-do-cartucho",
    type: "pest",
    severity: "high",
    affectedCrops: ["Milho", "Sorgo", "Arroz"],
    symptoms: [
      "Furos nas folhas em forma circular",
      "Presença de lagartas no cartucho",
      "Fezes escuras nas folhas",
      "Plantas com crescimento atrofiado",
    ],
    prevention: [
      "Rotação de culturas",
      "Plantio de variedades resistentes",
      "Controlo de ervas daninhas",
      "Monitorização regular dos campos",
    ],
    treatment: [
      "Aplicação de inseticidas biológicos (Bt)",
      "Uso de armadilhas com feromonas",
      "Controlo biológico com parasitóides",
      "Aplicação de inseticidas químicos em casos severos",
    ],
    season: ["Época chuvosa", "Início da época seca"],
    image: "🐛",
    description: "Praga devastadora que ataca principalmente o milho, causando perdas significativas na produção.",
  },
  {
    id: "aphids",
    name: "Pulgões",
    type: "pest",
    severity: "medium",
    affectedCrops: ["Feijão", "Tomate", "Batata", "Cebola"],
    symptoms: [
      "Folhas amareladas e enroladas",
      "Presença de insetos pequenos nas folhas",
      "Substância pegajosa (melada) nas plantas",
      "Crescimento atrofiado das plantas",
    ],
    prevention: [
      "Eliminação de ervas daninhas",
      "Plantio de plantas repelentes",
      "Controlo da humidade",
      "Inspeção regular das culturas",
    ],
    treatment: [
      "Pulverização com água e sabão",
      "Aplicação de óleo de neem",
      "Uso de inseticidas sistémicos",
      "Introdução de predadores naturais",
    ],
    season: ["Época seca", "Transição de estações"],
    image: "🦗",
    description: "Pequenos insetos que sugam a seiva das plantas, enfraquecendo-as e transmitindo vírus.",
  },
  {
    id: "leaf-rust",
    name: "Ferrugem das Folhas",
    type: "disease",
    severity: "medium",
    affectedCrops: ["Feijão", "Café", "Trigo"],
    symptoms: [
      "Manchas alaranjadas nas folhas",
      "Pústulas com esporos nas folhas",
      "Amarelecimento e queda das folhas",
      "Redução da produtividade",
    ],
    prevention: [
      "Uso de variedades resistentes",
      "Espaçamento adequado entre plantas",
      "Evitar irrigação por aspersão",
      "Rotação de culturas",
    ],
    treatment: [
      "Aplicação de fungicidas cúpricos",
      "Remoção de folhas infectadas",
      "Melhoria da ventilação",
      "Aplicação de fungicidas sistémicos",
    ],
    season: ["Época chuvosa", "Alta humidade"],
    image: "🍂",
    description: "Doença fúngica que causa manchas nas folhas e pode reduzir significativamente a produção.",
  },
  {
    id: "whitefly",
    name: "Mosca-branca",
    type: "pest",
    severity: "high",
    affectedCrops: ["Tomate", "Feijão", "Mandioca", "Batata-doce"],
    symptoms: [
      "Pequenos insetos brancos voando quando a planta é tocada",
      "Folhas amareladas",
      "Melada nas folhas",
      "Transmissão de vírus",
    ],
    prevention: [
      "Uso de variedades resistentes",
      "Controlo de ervas daninhas",
      "Armadilhas amarelas",
      "Quarentena de plantas novas",
    ],
    treatment: [
      "Aplicação de inseticidas sistémicos",
      "Uso de óleo mineral",
      "Controlo biológico",
      "Remoção de plantas infectadas",
    ],
    season: ["Época seca", "Temperaturas elevadas"],
    image: "🦟",
    description: "Pequenos insetos que causam danos directos e transmitem vírus devastadores.",
  },
  {
    id: "bacterial-wilt",
    name: "Murcha Bacteriana",
    type: "disease",
    severity: "high",
    affectedCrops: ["Tomate", "Batata", "Beringela"],
    symptoms: [
      "Murcha súbita das plantas",
      "Amarelecimento das folhas",
      "Escurecimento dos vasos condutores",
      "Morte da planta",
    ],
    prevention: [
      "Uso de sementes certificadas",
      "Rotação de culturas",
      "Desinfecção de ferramentas",
      "Controlo da humidade do solo",
    ],
    treatment: [
      "Remoção de plantas infectadas",
      "Aplicação de bactericidas cúpricos",
      "Melhoria da drenagem",
      "Solarização do solo",
    ],
    season: ["Época chuvosa", "Solos encharcados"],
    image: "🦠",
    description: "Doença bacteriana grave que pode causar a morte completa das plantas.",
  },
]

export default function PestAlerts() {
  const { t } = useLanguage()
  const { getCurrentRegion } = useRegion()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedPest, setSelectedPest] = useState<PestInfo | null>(null)
  const [alerts, setAlerts] = useState<Alert[]>([])
  const [activeTab, setActiveTab] = useState("database")

  useEffect(() => {
    // Generate some sample alerts based on region and season
    const region = getCurrentRegion()
    if (!region) return

    const currentMonth = new Date().getMonth() + 1
    const isRainySeason = currentMonth >= region.rainySeasonStart || currentMonth <= region.rainySeasonEnd

    const sampleAlerts: Alert[] = []

    if (isRainySeason) {
      sampleAlerts.push({
        id: "1",
        pestId: "fall-armyworm",
        region: region.name,
        severity: "high",
        reportedDate: new Date().toISOString().split("T")[0],
        status: "active",
        description: "Surto de lagarta-do-cartucho reportado em campos de milho",
      })
      sampleAlerts.push({
        id: "2",
        pestId: "leaf-rust",
        region: region.name,
        severity: "medium",
        reportedDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
        status: "active",
        description: "Casos de ferrugem das folhas em plantações de feijão",
      })
    } else {
      sampleAlerts.push({
        id: "3",
        pestId: "whitefly",
        region: region.name,
        severity: "medium",
        reportedDate: new Date().toISOString().split("T")[0],
        status: "active",
        description: "Aumento da população de mosca-branca em culturas de tomate",
      })
    }

    setAlerts(sampleAlerts)
  }, [getCurrentRegion])

  const filteredPests = pestDatabase.filter(
    (pest) =>
      pest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pest.affectedCrops.some((crop) => crop.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  const getSeverityColor = (severity: "low" | "medium" | "high") => {
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

  const getSeverityLabel = (severity: "low" | "medium" | "high") => {
    switch (severity) {
      case "high":
        return "Alto"
      case "medium":
        return "Médio"
      case "low":
        return "Baixo"
      default:
        return severity
    }
  }

  const getTypeIcon = (type: "pest" | "disease") => {
    return type === "pest" ? "🐛" : "🦠"
  }

  const getTypeLabel = (type: "pest" | "disease") => {
    return type === "pest" ? "Praga" : "Doença"
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">{t("pestAlerts")}</h2>
          <p className="text-gray-600">Base de dados de pragas e doenças</p>
        </div>
      </div>

      {/* Active Alerts */}
      {alerts.filter((alert) => alert.status === "active").length > 0 && (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-red-800">Alertas Activos na Sua Região</h3>
          {alerts
            .filter((alert) => alert.status === "active")
            .map((alert) => {
              const pest = pestDatabase.find((p) => p.id === alert.pestId)
              if (!pest) return null

              return (
                <Card key={alert.id} className="border-red-200 bg-red-50">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-2xl">{pest.image}</span>
                          <h4 className="font-medium text-red-800">{pest.name}</h4>
                          <Badge className={getSeverityColor(alert.severity)}>{getSeverityLabel(alert.severity)}</Badge>
                        </div>
                        <p className="text-sm text-red-700 mb-2">{alert.description}</p>
                        <div className="flex items-center gap-4 text-xs text-red-600">
                          <span>Região: {alert.region}</span>
                          <span>Data: {new Date(alert.reportedDate).toLocaleDateString("pt-AO")}</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" onClick={() => setSelectedPest(pest)}>
                        Ver Detalhes
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
        </div>
      )}

      {/* Main Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="database">Base de Dados</TabsTrigger>
          <TabsTrigger value="alerts">Histórico de Alertas</TabsTrigger>
        </TabsList>

        <TabsContent value="database" className="space-y-4">
          {/* Search */}
          <div className="flex items-center space-x-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Pesquisar pragas, doenças ou culturas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Pest Database Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPests.map((pest) => (
              <Card key={pest.id} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <span className="text-2xl">{pest.image}</span>
                      {pest.name}
                    </CardTitle>
                    <Badge className={getSeverityColor(pest.severity)}>{getSeverityLabel(pest.severity)}</Badge>
                  </div>
                  <CardDescription className="flex items-center gap-2">
                    <span>{getTypeIcon(pest.type)}</span>
                    {getTypeLabel(pest.type)}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-1">Culturas Afectadas:</h4>
                    <div className="flex flex-wrap gap-1">
                      {pest.affectedCrops.slice(0, 3).map((crop, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {crop}
                        </Badge>
                      ))}
                      {pest.affectedCrops.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{pest.affectedCrops.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 line-clamp-2">{pest.description}</p>

                  <Button variant="outline" size="sm" className="w-full" onClick={() => setSelectedPest(pest)}>
                    <Eye className="h-4 w-4 mr-2" />
                    Ver Detalhes
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPests.length === 0 && (
            <Card>
              <CardContent className="flex flex-col items-center justify-center h-48 space-y-4">
                <Bug className="h-12 w-12 text-gray-400" />
                <div className="text-center">
                  <h3 className="font-medium text-gray-900">Nenhum resultado encontrado</h3>
                  <p className="text-gray-600">Tente pesquisar com outros termos</p>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="alerts" className="space-y-4">
          <div className="space-y-3">
            {alerts.map((alert) => {
              const pest = pestDatabase.find((p) => p.id === alert.pestId)
              if (!pest) return null

              return (
                <Card key={alert.id}>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        <span className="text-2xl">{pest.image}</span>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-medium">{pest.name}</h4>
                            <Badge className={getSeverityColor(alert.severity)}>
                              {getSeverityLabel(alert.severity)}
                            </Badge>
                            <Badge variant={alert.status === "active" ? "destructive" : "secondary"}>
                              {alert.status === "active" ? "Activo" : "Resolvido"}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{alert.description}</p>
                          <div className="flex items-center gap-4 text-xs text-gray-500">
                            <span>Região: {alert.region}</span>
                            <span>Data: {new Date(alert.reportedDate).toLocaleDateString("pt-AO")}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {alerts.length === 0 && (
            <Card>
              <CardContent className="flex flex-col items-center justify-center h-48 space-y-4">
                <AlertTriangle className="h-12 w-12 text-gray-400" />
                <div className="text-center">
                  <h3 className="font-medium text-gray-900">Nenhum alerta registado</h3>
                  <p className="text-gray-600">Os alertas aparecerão aqui quando forem reportados</p>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>

      {/* Pest Detail Modal */}
      {selectedPest && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl flex items-center gap-3">
                  <span className="text-4xl">{selectedPest.image}</span>
                  {selectedPest.name}
                </CardTitle>
                <Button variant="ghost" onClick={() => setSelectedPest(null)}>
                  ✕
                </Button>
              </div>
              <CardDescription className="flex items-center gap-4">
                <Badge className={getSeverityColor(selectedPest.severity)}>
                  {getSeverityLabel(selectedPest.severity)}
                </Badge>
                <span className="flex items-center gap-1">
                  {getTypeIcon(selectedPest.type)} {getTypeLabel(selectedPest.type)}
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-700">{selectedPest.description}</p>

              <div>
                <h4 className="font-semibold mb-2">Culturas Afectadas:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedPest.affectedCrops.map((crop, idx) => (
                    <Badge key={idx} variant="secondary">
                      {crop}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Época de Ocorrência:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedPest.season.map((season, idx) => (
                    <Badge key={idx} variant="outline">
                      {season}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-red-700">🔍 Sintomas</h4>
                  <ul className="space-y-2">
                    {selectedPest.symptoms.map((symptom, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        {symptom}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-blue-700">🛡️ Prevenção</h4>
                  <ul className="space-y-2">
                    {selectedPest.prevention.map((prevention, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        {prevention}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-green-700">💊 Tratamento</h4>
                  <ul className="space-y-2">
                    {selectedPest.treatment.map((treatment, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        {treatment}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
