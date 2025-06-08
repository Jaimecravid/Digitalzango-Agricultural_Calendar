"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Calendar, Plus, Trash2, Sprout, Clock } from "lucide-react"
import { useLanguage } from "../contexts/language-context"
import { useRegion } from "../contexts/region-context"

interface CropPlan {
  id: string
  crop: string
  variety: string
  plantingDate: string
  harvestDate: string
  area: number
  status: "planned" | "planted" | "growing" | "harvested"
  notes: string
}

interface CropInfo {
  name: string
  varieties: string[]
  plantingMonths: number[]
  growthDuration: number // days
  waterRequirement: "low" | "medium" | "high"
  soilType: string[]
}

const cropDatabase: CropInfo[] = [
  {
    name: "Milho",
    varieties: ["Branco", "Amarelo", "Híbrido"],
    plantingMonths: [10, 11, 12, 1],
    growthDuration: 120,
    waterRequirement: "medium",
    soilType: ["Argiloso", "Franco"],
  },
  {
    name: "Feijão",
    varieties: ["Comum", "Frade", "Manteiga"],
    plantingMonths: [10, 11, 12, 1, 2],
    growthDuration: 90,
    waterRequirement: "medium",
    soilType: ["Franco", "Arenoso"],
  },
  {
    name: "Mandioca",
    varieties: ["Doce", "Brava", "Amarela"],
    plantingMonths: [9, 10, 11, 12, 1, 2, 3],
    growthDuration: 365,
    waterRequirement: "low",
    soilType: ["Arenoso", "Franco"],
  },
  {
    name: "Batata-doce",
    varieties: ["Roxa", "Branca", "Amarela"],
    plantingMonths: [9, 10, 11, 12, 1],
    growthDuration: 120,
    waterRequirement: "medium",
    soilType: ["Franco", "Arenoso"],
  },
  {
    name: "Tomate",
    varieties: ["Cereja", "Salada", "Industrial"],
    plantingMonths: [3, 4, 5, 8, 9],
    growthDuration: 100,
    waterRequirement: "high",
    soilType: ["Franco", "Argiloso"],
  },
  {
    name: "Cebola",
    varieties: ["Branca", "Roxa", "Amarela"],
    plantingMonths: [3, 4, 5, 6],
    growthDuration: 150,
    waterRequirement: "medium",
    soilType: ["Franco", "Arenoso"],
  },
]

export default function CropPlanner() {
  const { t } = useLanguage()
  const { getCurrentRegion } = useRegion()
  const [cropPlans, setCropPlans] = useState<CropPlan[]>([])
  const [showAddForm, setShowAddForm] = useState(false)
  const [newPlan, setNewPlan] = useState<Partial<CropPlan>>({
    crop: "",
    variety: "",
    plantingDate: "",
    area: 0,
    notes: "",
  })

  useEffect(() => {
    const savedPlans = localStorage.getItem("crop-plans")
    if (savedPlans) {
      setCropPlans(JSON.parse(savedPlans))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("crop-plans", JSON.stringify(cropPlans))
  }, [cropPlans])

  const calculateHarvestDate = (plantingDate: string, crop: string) => {
    const cropInfo = cropDatabase.find((c) => c.name === crop)
    if (!cropInfo || !plantingDate) return ""

    const planting = new Date(plantingDate)
    const harvest = new Date(planting.getTime() + cropInfo.growthDuration * 24 * 60 * 60 * 1000)
    return harvest.toISOString().split("T")[0]
  }

  const addCropPlan = () => {
    if (!newPlan.crop || !newPlan.plantingDate) return

    const harvestDate = calculateHarvestDate(newPlan.plantingDate, newPlan.crop)

    const plan: CropPlan = {
      id: Date.now().toString(),
      crop: newPlan.crop,
      variety: newPlan.variety || "",
      plantingDate: newPlan.plantingDate,
      harvestDate,
      area: newPlan.area || 0,
      status: "planned",
      notes: newPlan.notes || "",
    }

    setCropPlans([...cropPlans, plan])
    setNewPlan({
      crop: "",
      variety: "",
      plantingDate: "",
      area: 0,
      notes: "",
    })
    setShowAddForm(false)
  }

  const deleteCropPlan = (id: string) => {
    setCropPlans(cropPlans.filter((plan) => plan.id !== id))
  }

  const updatePlanStatus = (id: string, status: CropPlan["status"]) => {
    setCropPlans(cropPlans.map((plan) => (plan.id === id ? { ...plan, status } : plan)))
  }

  const getStatusColor = (status: CropPlan["status"]) => {
    switch (status) {
      case "planned":
        return "bg-gray-100 text-gray-800"
      case "planted":
        return "bg-blue-100 text-blue-800"
      case "growing":
        return "bg-green-100 text-green-800"
      case "harvested":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getRecommendedCrops = () => {
    const region = getCurrentRegion()
    if (!region) return []

    const currentMonth = new Date().getMonth() + 1
    return cropDatabase.filter(
      (crop) =>
        crop.plantingMonths.includes(currentMonth) &&
        region.mainCrops.some((regionCrop) => regionCrop.toLowerCase().includes(crop.name.toLowerCase())),
    )
  }

  const selectedCropInfo = cropDatabase.find((c) => c.name === newPlan.crop)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">{t("cropPlanning")}</h2>
          <p className="text-gray-600">Planeie e acompanhe as suas culturas</p>
        </div>
        <Button onClick={() => setShowAddForm(true)}>
          <Plus className="h-4 w-4 mr-2" />
          {t("addCrop")}
        </Button>
      </div>

      {/* Recommended Crops */}
      <Card>
        <CardHeader>
          <CardTitle>Culturas Recomendadas para Este Mês</CardTitle>
          <CardDescription>Baseado na sua região ({getCurrentRegion()?.name}) e época do ano</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {getRecommendedCrops().map((crop, idx) => (
              <div key={idx} className="p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex items-center space-x-3">
                  <Sprout className="h-8 w-8 text-green-600" />
                  <div>
                    <h4 className="font-medium">{crop.name}</h4>
                    <p className="text-sm text-gray-600">{crop.growthDuration} dias para colheita</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="secondary" className="text-xs">
                        Água: {crop.waterRequirement}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Add Crop Form */}
      {showAddForm && (
        <Card>
          <CardHeader>
            <CardTitle>Adicionar Nova Cultura</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="crop">{t("selectCrop")}</Label>
                <Select
                  value={newPlan.crop}
                  onValueChange={(value) => setNewPlan({ ...newPlan, crop: value, variety: "" })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar cultura" />
                  </SelectTrigger>
                  <SelectContent>
                    {cropDatabase.map((crop) => (
                      <SelectItem key={crop.name} value={crop.name}>
                        {crop.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {selectedCropInfo && (
                <div>
                  <Label htmlFor="variety">Variedade</Label>
                  <Select value={newPlan.variety} onValueChange={(value) => setNewPlan({ ...newPlan, variety: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar variedade" />
                    </SelectTrigger>
                    <SelectContent>
                      {selectedCropInfo.varieties.map((variety) => (
                        <SelectItem key={variety} value={variety}>
                          {variety}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div>
                <Label htmlFor="plantingDate">{t("plantingDate")}</Label>
                <Input
                  id="plantingDate"
                  type="date"
                  value={newPlan.plantingDate}
                  onChange={(e) => setNewPlan({ ...newPlan, plantingDate: e.target.value })}
                />
              </div>

              <div>
                <Label htmlFor="area">Área (hectares)</Label>
                <Input
                  id="area"
                  type="number"
                  step="0.1"
                  value={newPlan.area}
                  onChange={(e) => setNewPlan({ ...newPlan, area: Number.parseFloat(e.target.value) })}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="notes">Notas</Label>
              <Input
                id="notes"
                placeholder="Observações adicionais..."
                value={newPlan.notes}
                onChange={(e) => setNewPlan({ ...newPlan, notes: e.target.value })}
              />
            </div>

            {selectedCropInfo && newPlan.plantingDate && (
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-medium text-green-800 mb-2">Informações da Cultura</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Data de colheita prevista:</span>
                    <div className="font-medium">
                      {new Date(calculateHarvestDate(newPlan.plantingDate, newPlan.crop)).toLocaleDateString("pt-AO")}
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-600">Duração do ciclo:</span>
                    <div className="font-medium">{selectedCropInfo.growthDuration} dias</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Necessidade de água:</span>
                    <div className="font-medium">{selectedCropInfo.waterRequirement}</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Tipos de solo:</span>
                    <div className="font-medium">{selectedCropInfo.soilType.join(", ")}</div>
                  </div>
                </div>
              </div>
            )}

            <div className="flex space-x-2">
              <Button onClick={addCropPlan}>Adicionar Cultura</Button>
              <Button variant="outline" onClick={() => setShowAddForm(false)}>
                Cancelar
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Crop Plans List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cropPlans.map((plan) => (
          <Card key={plan.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{plan.crop}</CardTitle>
                <Button variant="ghost" size="icon" onClick={() => deleteCropPlan(plan.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              <CardDescription>{plan.variety}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <Badge className={getStatusColor(plan.status)}>{plan.status}</Badge>
                <span className="text-sm text-gray-600">{plan.area} ha</span>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <span>Plantio: {new Date(plan.plantingDate).toLocaleDateString("pt-AO")}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span>Colheita: {new Date(plan.harvestDate).toLocaleDateString("pt-AO")}</span>
                </div>
              </div>

              {plan.notes && <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded">{plan.notes}</p>}

              <div className="flex space-x-2">
                <Select
                  value={plan.status}
                  onValueChange={(value) => updatePlanStatus(plan.id, value as CropPlan["status"])}
                >
                  <SelectTrigger className="text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="planned">Planeado</SelectItem>
                    <SelectItem value="planted">Plantado</SelectItem>
                    <SelectItem value="growing">Crescendo</SelectItem>
                    <SelectItem value="harvested">Colhido</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {cropPlans.length === 0 && (
        <Card>
          <CardContent className="flex flex-col items-center justify-center h-48 space-y-4">
            <Sprout className="h-12 w-12 text-gray-400" />
            <div className="text-center">
              <h3 className="font-medium text-gray-900">Nenhuma cultura planeada</h3>
              <p className="text-gray-600">Comece por adicionar a sua primeira cultura</p>
            </div>
            <Button onClick={() => setShowAddForm(true)}>
              <Plus className="h-4 w-4 mr-2" />
              Adicionar Cultura
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
