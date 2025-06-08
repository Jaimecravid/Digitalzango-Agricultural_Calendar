"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Calendar, Plus, Edit, Trash2, Clock, MapPin } from "lucide-react"
import { useLanguage } from "../contexts/language-context"

interface Activity {
  id: string
  type: "planting" | "irrigation" | "fertilization" | "pest-control" | "harvesting" | "land-prep" | "weeding" | "other"
  crop: string
  area: string
  date: string
  duration: number // in hours
  cost: number
  laborers: number
  equipment: string[]
  materials: string[]
  weather: string
  notes: string
  status: "planned" | "in-progress" | "completed"
}

const activityTypes = {
  "land-prep": { label: "Preparação do Solo", icon: "🚜", color: "bg-brown-100 text-brown-800" },
  planting: { label: "Plantio", icon: "🌱", color: "bg-green-100 text-green-800" },
  irrigation: { label: "Irrigação", icon: "💧", color: "bg-blue-100 text-blue-800" },
  fertilization: { label: "Fertilização", icon: "🌿", color: "bg-lime-100 text-lime-800" },
  weeding: { label: "Capina", icon: "🌾", color: "bg-yellow-100 text-yellow-800" },
  "pest-control": { label: "Controlo de Pragas", icon: "🐛", color: "bg-red-100 text-red-800" },
  harvesting: { label: "Colheita", icon: "🌽", color: "bg-orange-100 text-orange-800" },
  other: { label: "Outro", icon: "📝", color: "bg-gray-100 text-gray-800" },
}

export default function ActivityLogger() {
  const { t } = useLanguage()
  const [activities, setActivities] = useState<Activity[]>([])
  const [showAddForm, setShowAddForm] = useState(false)
  const [editingActivity, setEditingActivity] = useState<Activity | null>(null)
  const [filterType, setFilterType] = useState<string>("all")
  const [filterStatus, setFilterStatus] = useState<string>("all")
  const [newActivity, setNewActivity] = useState<Partial<Activity>>({
    type: "planting",
    crop: "",
    area: "",
    date: new Date().toISOString().split("T")[0],
    duration: 0,
    cost: 0,
    laborers: 1,
    equipment: [],
    materials: [],
    weather: "",
    notes: "",
    status: "planned",
  })

  useEffect(() => {
    const savedActivities = localStorage.getItem("farm-activities")
    if (savedActivities) {
      setActivities(JSON.parse(savedActivities))
    } else {
      // Add some sample data
      const sampleActivities: Activity[] = [
        {
          id: "1",
          type: "planting",
          crop: "Milho",
          area: "Campo A - 2 hectares",
          date: "2024-01-15",
          duration: 8,
          cost: 25000,
          laborers: 4,
          equipment: ["Tractor", "Semeadora"],
          materials: ["Sementes de milho", "Fertilizante NPK"],
          weather: "Ensolarado",
          notes: "Plantio realizado com sucesso. Solo em boas condições.",
          status: "completed",
        },
        {
          id: "2",
          type: "irrigation",
          crop: "Tomate",
          area: "Estufa 1",
          date: "2024-01-20",
          duration: 2,
          cost: 5000,
          laborers: 1,
          equipment: ["Sistema de irrigação"],
          materials: ["Água"],
          weather: "Seco",
          notes: "Irrigação de rotina. Plantas em bom estado.",
          status: "completed",
        },
        {
          id: "3",
          type: "pest-control",
          crop: "Feijão",
          area: "Campo B - 1.5 hectares",
          date: new Date().toISOString().split("T")[0],
          duration: 4,
          cost: 15000,
          laborers: 2,
          equipment: ["Pulverizador"],
          materials: ["Inseticida biológico"],
          weather: "Nublado",
          notes: "Aplicação preventiva contra pulgões.",
          status: "planned",
        },
      ]
      setActivities(sampleActivities)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("farm-activities", JSON.stringify(activities))
  }, [activities])

  const addActivity = () => {
    if (!newActivity.type || !newActivity.crop) return

    const activity: Activity = {
      id: Date.now().toString(),
      type: newActivity.type as Activity["type"],
      crop: newActivity.crop,
      area: newActivity.area || "",
      date: newActivity.date || new Date().toISOString().split("T")[0],
      duration: newActivity.duration || 0,
      cost: newActivity.cost || 0,
      laborers: newActivity.laborers || 1,
      equipment: newActivity.equipment || [],
      materials: newActivity.materials || [],
      weather: newActivity.weather || "",
      notes: newActivity.notes || "",
      status: (newActivity.status as Activity["status"]) || "planned",
    }

    setActivities([...activities, activity])
    resetForm()
  }

  const updateActivity = () => {
    if (!editingActivity) return

    setActivities(activities.map((a) => (a.id === editingActivity.id ? editingActivity : a)))
    setEditingActivity(null)
    setShowAddForm(false)
  }

  const deleteActivity = (id: string) => {
    setActivities(activities.filter((a) => a.id !== id))
  }

  const resetForm = () => {
    setNewActivity({
      type: "planting",
      crop: "",
      area: "",
      date: new Date().toISOString().split("T")[0],
      duration: 0,
      cost: 0,
      laborers: 1,
      equipment: [],
      materials: [],
      weather: "",
      notes: "",
      status: "planned",
    })
    setShowAddForm(false)
    setEditingActivity(null)
  }

  const startEdit = (activity: Activity) => {
    setEditingActivity(activity)
    setShowAddForm(true)
  }

  const getStatusColor = (status: Activity["status"]) => {
    switch (status) {
      case "planned":
        return "bg-blue-100 text-blue-800"
      case "in-progress":
        return "bg-yellow-100 text-yellow-800"
      case "completed":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusLabel = (status: Activity["status"]) => {
    switch (status) {
      case "planned":
        return "Planeado"
      case "in-progress":
        return "Em Progresso"
      case "completed":
        return "Concluído"
      default:
        return status
    }
  }

  const filteredActivities = activities.filter((activity) => {
    const typeMatch = filterType === "all" || activity.type === filterType
    const statusMatch = filterStatus === "all" || activity.status === filterStatus
    return typeMatch && statusMatch
  })

  const totalCost = filteredActivities.reduce((sum, activity) => sum + activity.cost, 0)
  const totalHours = filteredActivities.reduce((sum, activity) => sum + activity.duration, 0)

  const currentActivity = editingActivity || newActivity

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">{t("activityLog")}</h2>
          <p className="text-gray-600">Registe e acompanhe as actividades da sua quinta</p>
        </div>
        <Button onClick={() => setShowAddForm(true)}>
          <Plus className="h-4 w-4 mr-2" />
          {t("addActivity")}
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{activities.length}</div>
              <div className="text-sm text-gray-600">Total de Actividades</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {activities.filter((a) => a.status === "completed").length}
              </div>
              <div className="text-sm text-gray-600">Concluídas</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">{totalHours}h</div>
              <div className="text-sm text-gray-600">Horas Trabalhadas</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{totalCost.toLocaleString()} Kz</div>
              <div className="text-sm text-gray-600">Custo Total</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4">
        <Select value={filterType} onValueChange={setFilterType}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filtrar por tipo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos os tipos</SelectItem>
            {Object.entries(activityTypes).map(([key, type]) => (
              <SelectItem key={key} value={key}>
                {type.icon} {type.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={filterStatus} onValueChange={setFilterStatus}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filtrar por estado" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos os estados</SelectItem>
            <SelectItem value="planned">Planeado</SelectItem>
            <SelectItem value="in-progress">Em Progresso</SelectItem>
            <SelectItem value="completed">Concluído</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Add/Edit Form */}
      {showAddForm && (
        <Card>
          <CardHeader>
            <CardTitle>{editingActivity ? "Editar Actividade" : "Adicionar Nova Actividade"}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="type">Tipo de Actividade</Label>
                <Select
                  value={editingActivity ? editingActivity.type : newActivity.type}
                  onValueChange={(value) => {
                    if (editingActivity) {
                      setEditingActivity({ ...editingActivity, type: value as Activity["type"] })
                    } else {
                      setNewActivity({ ...newActivity, type: value as Activity["type"] })
                    }
                  }}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(activityTypes).map(([key, type]) => (
                      <SelectItem key={key} value={key}>
                        {type.icon} {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="crop">Cultura</Label>
                <Input
                  id="crop"
                  value={editingActivity ? editingActivity.crop : newActivity.crop}
                  onChange={(e) => {
                    if (editingActivity) {
                      setEditingActivity({ ...editingActivity, crop: e.target.value })
                    } else {
                      setNewActivity({ ...newActivity, crop: e.target.value })
                    }
                  }}
                />
              </div>

              <div>
                <Label htmlFor="area">Área/Local</Label>
                <Input
                  id="area"
                  placeholder="ex: Campo A - 2 hectares"
                  value={editingActivity ? editingActivity.area : newActivity.area}
                  onChange={(e) => {
                    if (editingActivity) {
                      setEditingActivity({ ...editingActivity, area: e.target.value })
                    } else {
                      setNewActivity({ ...newActivity, area: e.target.value })
                    }
                  }}
                />
              </div>

              <div>
                <Label htmlFor="date">Data</Label>
                <Input
                  id="date"
                  type="date"
                  value={editingActivity ? editingActivity.date : newActivity.date}
                  onChange={(e) => {
                    if (editingActivity) {
                      setEditingActivity({ ...editingActivity, date: e.target.value })
                    } else {
                      setNewActivity({ ...newActivity, date: e.target.value })
                    }
                  }}
                />
              </div>

              <div>
                <Label htmlFor="duration">Duração (horas)</Label>
                <Input
                  id="duration"
                  type="number"
                  value={editingActivity ? editingActivity.duration : newActivity.duration}
                  onChange={(e) => {
                    const duration = Number.parseFloat(e.target.value)
                    if (editingActivity) {
                      setEditingActivity({ ...editingActivity, duration })
                    } else {
                      setNewActivity({ ...newActivity, duration })
                    }
                  }}
                />
              </div>

              <div>
                <Label htmlFor="cost">Custo (Kz)</Label>
                <Input
                  id="cost"
                  type="number"
                  value={editingActivity ? editingActivity.cost : newActivity.cost}
                  onChange={(e) => {
                    const cost = Number.parseFloat(e.target.value)
                    if (editingActivity) {
                      setEditingActivity({ ...editingActivity, cost })
                    } else {
                      setNewActivity({ ...newActivity, cost })
                    }
                  }}
                />
              </div>

              <div>
                <Label htmlFor="laborers">Número de Trabalhadores</Label>
                <Input
                  id="laborers"
                  type="number"
                  value={editingActivity ? editingActivity.laborers : newActivity.laborers}
                  onChange={(e) => {
                    const laborers = Number.parseInt(e.target.value)
                    if (editingActivity) {
                      setEditingActivity({ ...editingActivity, laborers })
                    } else {
                      setNewActivity({ ...newActivity, laborers })
                    }
                  }}
                />
              </div>

              <div>
                <Label htmlFor="weather">Condições Meteorológicas</Label>
                <Input
                  id="weather"
                  placeholder="ex: Ensolarado, Nublado, Chuva"
                  value={editingActivity ? editingActivity.weather : newActivity.weather}
                  onChange={(e) => {
                    if (editingActivity) {
                      setEditingActivity({ ...editingActivity, weather: e.target.value })
                    } else {
                      setNewActivity({ ...newActivity, weather: e.target.value })
                    }
                  }}
                />
              </div>

              <div>
                <Label htmlFor="equipment">Equipamentos (separados por vírgula)</Label>
                <Input
                  id="equipment"
                  placeholder="ex: Tractor, Semeadora, Pulverizador"
                  value={
                    editingActivity ? editingActivity.equipment.join(", ") : newActivity.equipment?.join(", ") || ""
                  }
                  onChange={(e) => {
                    const equipment = e.target.value
                      .split(",")
                      .map((item) => item.trim())
                      .filter((item) => item)
                    if (editingActivity) {
                      setEditingActivity({ ...editingActivity, equipment })
                    } else {
                      setNewActivity({ ...newActivity, equipment })
                    }
                  }}
                />
              </div>

              <div>
                <Label htmlFor="materials">Materiais (separados por vírgula)</Label>
                <Input
                  id="materials"
                  placeholder="ex: Sementes, Fertilizante, Pesticida"
                  value={
                    editingActivity ? editingActivity.materials.join(", ") : newActivity.materials?.join(", ") || ""
                  }
                  onChange={(e) => {
                    const materials = e.target.value
                      .split(",")
                      .map((item) => item.trim())
                      .filter((item) => item)
                    if (editingActivity) {
                      setEditingActivity({ ...editingActivity, materials })
                    } else {
                      setNewActivity({ ...newActivity, materials })
                    }
                  }}
                />
              </div>

              <div>
                <Label htmlFor="status">Estado</Label>
                <Select
                  value={editingActivity ? editingActivity.status : newActivity.status}
                  onValueChange={(value) => {
                    if (editingActivity) {
                      setEditingActivity({ ...editingActivity, status: value as Activity["status"] })
                    } else {
                      setNewActivity({ ...newActivity, status: value as Activity["status"] })
                    }
                  }}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="planned">Planeado</SelectItem>
                    <SelectItem value="in-progress">Em Progresso</SelectItem>
                    <SelectItem value="completed">Concluído</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="notes">Notas</Label>
              <Textarea
                id="notes"
                placeholder="Observações adicionais..."
                value={editingActivity ? editingActivity.notes : newActivity.notes}
                onChange={(e) => {
                  if (editingActivity) {
                    setEditingActivity({ ...editingActivity, notes: e.target.value })
                  } else {
                    setNewActivity({ ...newActivity, notes: e.target.value })
                  }
                }}
              />
            </div>

            <div className="flex space-x-2">
              <Button onClick={editingActivity ? updateActivity : addActivity}>
                {editingActivity ? "Actualizar" : "Adicionar"} Actividade
              </Button>
              <Button variant="outline" onClick={resetForm}>
                Cancelar
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Activities List */}
      <div className="space-y-4">
        {filteredActivities.map((activity) => (
          <Card key={activity.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg flex items-center gap-2">
                  <span className="text-2xl">{activityTypes[activity.type].icon}</span>
                  {activityTypes[activity.type].label} - {activity.crop}
                </CardTitle>
                <div className="flex items-center space-x-2">
                  <Badge className={getStatusColor(activity.status)}>{getStatusLabel(activity.status)}</Badge>
                  <Button variant="ghost" size="icon" onClick={() => startEdit(activity)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => deleteActivity(activity.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <CardDescription className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {new Date(activity.date).toLocaleDateString("pt-AO")}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {activity.duration}h
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {activity.area}
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Custo:</span>
                  <div className="font-medium">{activity.cost.toLocaleString()} Kz</div>
                </div>
                <div>
                  <span className="text-gray-600">Trabalhadores:</span>
                  <div className="font-medium">{activity.laborers}</div>
                </div>
                <div>
                  <span className="text-gray-600">Tempo:</span>
                  <div className="font-medium">{activity.weather}</div>
                </div>
              </div>

              {activity.equipment.length > 0 && (
                <div>
                  <span className="text-gray-600 text-sm">Equipamentos:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {activity.equipment.map((equipment, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {equipment}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {activity.materials.length > 0 && (
                <div>
                  <span className="text-gray-600 text-sm">Materiais:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {activity.materials.map((material, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {material}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {activity.notes && <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded">{activity.notes}</p>}
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredActivities.length === 0 && (
        <Card>
          <CardContent className="flex flex-col items-center justify-center h-48 space-y-4">
            <Calendar className="h-12 w-12 text-gray-400" />
            <div className="text-center">
              <h3 className="font-medium text-gray-900">Nenhuma actividade encontrada</h3>
              <p className="text-gray-600">
                {filterType !== "all" || filterStatus !== "all"
                  ? "Tente ajustar os filtros"
                  : "Comece por adicionar a sua primeira actividade"}
              </p>
            </div>
            <Button onClick={() => setShowAddForm(true)}>
              <Plus className="h-4 w-4 mr-2" />
              Adicionar Actividade
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
