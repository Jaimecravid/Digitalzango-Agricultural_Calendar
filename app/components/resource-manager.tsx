"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Package, AlertTriangle, Edit, Trash2 } from "lucide-react"
import { useLanguage } from "../contexts/language-context"

interface Resource {
  id: string
  name: string
  type: "seed" | "fertilizer" | "equipment" | "pesticide"
  quantity: number
  unit: string
  cost: number
  supplier: string
  purchaseDate: string
  expiryDate?: string
  status: "available" | "low" | "expired" | "out-of-stock"
  notes: string
}

const resourceTypes = {
  seed: { icon: "🌱", label: "Sementes", color: "bg-green-100 text-green-800" },
  fertilizer: { icon: "🌿", label: "Fertilizantes", color: "bg-blue-100 text-blue-800" },
  equipment: { icon: "🚜", label: "Equipamentos", color: "bg-gray-100 text-gray-800" },
  pesticide: { icon: "🧪", label: "Pesticidas", color: "bg-red-100 text-red-800" },
}

export default function ResourceManager() {

  const [resources, setResources] = useState<Resource[]>([])
  const [showAddForm, setShowAddForm] = useState(false)
  const [editingResource, setEditingResource] = useState<Resource | null>(null)
  const [activeTab, setActiveTab] = useState("all")
  const [newResource, setNewResource] = useState<Partial<Resource>>({
    name: "",
    type: "seed",
    quantity: 0,
    unit: "",
    cost: 0,
    supplier: "",
    purchaseDate: "",
    expiryDate: "",
    notes: "",
  })

  useEffect(() => {
    const savedResources = localStorage.getItem("farm-resources")
    if (savedResources) {
      setResources(JSON.parse(savedResources))
    } else {
      // Add some sample data
      const sampleResources: Resource[] = [
        {
          id: "1",
          name: "Sementes de Milho Híbrido",
          type: "seed",
          quantity: 50,
          unit: "kg",
          cost: 15000,
          supplier: "AgroSementes Lda",
          purchaseDate: "2024-01-15",
          expiryDate: "2024-12-31",
          status: "available",
          notes: "Variedade resistente à seca",
        },
        {
          id: "2",
          name: "NPK 20-10-10",
          type: "fertilizer",
          quantity: 5,
          unit: "sacos 50kg",
          cost: 8000,
          supplier: "FertilAngola",
          purchaseDate: "2024-02-01",
          status: "low",
          notes: "Para aplicação na fase inicial",
        },
        {
          id: "3",
          name: "Tractor John Deere",
          type: "equipment",
          quantity: 1,
          unit: "unidade",
          cost: 2500000,
          supplier: "Máquinas Agrícolas SA",
          purchaseDate: "2023-06-15",
          status: "available",
          notes: "Manutenção em dia",
        },
      ]
      setResources(sampleResources)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("farm-resources", JSON.stringify(resources))
  }, [resources])

  const calculateStatus = (resource: Partial<Resource>): Resource["status"] => {
    if (resource.quantity === 0) return "out-of-stock"
    if (resource.expiryDate && new Date(resource.expiryDate) < new Date()) return "expired"
    if (resource.type === "seed" && resource.quantity && resource.quantity < 10) return "low"
    if (resource.type === "fertilizer" && resource.quantity && resource.quantity < 3) return "low"
    return "available"
  }

  const addResource = () => {
    if (!newResource.name || !newResource.type) return

    const resource: Resource = {
      id: Date.now().toString(),
      name: newResource.name,
      type: newResource.type as Resource["type"],
      quantity: newResource.quantity || 0,
      unit: newResource.unit || "",
      cost: newResource.cost || 0,
      supplier: newResource.supplier || "",
      purchaseDate: newResource.purchaseDate || new Date().toISOString().split("T")[0],
      expiryDate: newResource.expiryDate,
      status: calculateStatus(newResource),
      notes: newResource.notes || "",
    }

    setResources([...resources, resource])
    resetForm()
  }

  const updateResource = () => {
    if (!editingResource) return

    const updatedResource = {
      ...editingResource,
      status: calculateStatus(editingResource),
    }

    setResources(resources.map((r) => (r.id === editingResource.id ? updatedResource : r)))
    setEditingResource(null)
    setShowAddForm(false)
  }

  const deleteResource = (id: string) => {
    setResources(resources.filter((r) => r.id !== id))
  }

  const resetForm = () => {
    setNewResource({
      name: "",
      type: "seed",
      quantity: 0,
      unit: "",
      cost: 0,
      supplier: "",
      purchaseDate: "",
      expiryDate: "",
      notes: "",
    })
    setShowAddForm(false)
    setEditingResource(null)
  }

  const startEdit = (resource: Resource) => {
    setEditingResource(resource)
    setShowAddForm(true)
  }

  const getStatusColor = (status: Resource["status"]) => {
    switch (status) {
      case "available":
        return "bg-green-100 text-green-800"
      case "low":
        return "bg-yellow-100 text-yellow-800"
      case "expired":
        return "bg-red-100 text-red-800"
      case "out-of-stock":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusLabel = (status: Resource["status"]) => {
    switch (status) {
      case "available":
        return "Disponível"
      case "low":
        return "Baixo"
      case "expired":
        return "Expirado"
      case "out-of-stock":
        return "Esgotado"
      default:
        return status
    }
  }

  const filteredResources = resources.filter((resource) => {
    if (activeTab === "all") return true
    return resource.type === activeTab
  })

  const lowStockResources = resources.filter((r) => r.status === "low" || r.status === "out-of-stock")
  const expiredResources = resources.filter((r) => r.status === "expired")

  const currentResource = editingResource || newResource

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">{t("resourceManagement")}</h2>
          <p className="text-gray-600">Gerir sementes, fertilizantes e equipamentos</p>
        </div>
        <Button onClick={() => setShowAddForm(true)}>
          <Plus className="h-4 w-4 mr-2" />
          {t("addResource")}
        </Button>
      </div>

      {/* Alerts */}
      {(lowStockResources.length > 0 || expiredResources.length > 0) && (
        <div className="space-y-3">
          {lowStockResources.length > 0 && (
            <Card className="border-yellow-200 bg-yellow-50">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-yellow-800">Stock Baixo</h4>
                    <p className="text-sm text-yellow-700">
                      {lowStockResources.length} recurso(s) com stock baixo ou esgotado
                    </p>
                    <div className="mt-2 space-x-2">
                      {lowStockResources.slice(0, 3).map((resource) => (
                        <Badge key={resource.id} variant="secondary" className="text-xs">
                          {resource.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {expiredResources.length > 0 && (
            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-red-800">Recursos Expirados</h4>
                    <p className="text-sm text-red-700">{expiredResources.length} recurso(s) expirado(s)</p>
                    <div className="mt-2 space-x-2">
                      {expiredResources.slice(0, 3).map((resource) => (
                        <Badge key={resource.id} variant="secondary" className="text-xs">
                          {resource.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      )}

      {/* Add/Edit Form */}
      {showAddForm && (
        <Card>
          <CardHeader>
            <CardTitle>{editingResource ? "Editar Recurso" : "Adicionar Novo Recurso"}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Nome do Recurso</Label>
                <Input
                  id="name"
                  value={editingResource ? editingResource.name : newResource.name}
                  onChange={(e) => {
                    if (editingResource) {
                      setEditingResource({ ...editingResource, name: e.target.value })
                    } else {
                      setNewResource({ ...newResource, name: e.target.value })
                    }
                  }}
                />
              </div>

              <div>
                <Label htmlFor="type">Tipo</Label>
                <Select
                  value={editingResource ? editingResource.type : newResource.type}
                  onValueChange={(value) => {
                    if (editingResource) {
                      setEditingResource({ ...editingResource, type: value as Resource["type"] })
                    } else {
                      setNewResource({ ...newResource, type: value as Resource["type"] })
                    }
                  }}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(resourceTypes).map(([key, type]) => (
                      <SelectItem key={key} value={key}>
                        {type.icon} {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="quantity">Quantidade</Label>
                <Input
                  id="quantity"
                  type="number"
                  value={editingResource ? editingResource.quantity : newResource.quantity}
                  onChange={(e) => {
                    const quantity = Number.parseFloat(e.target.value)
                    if (editingResource) {
                      setEditingResource({ ...editingResource, quantity })
                    } else {
                      setNewResource({ ...newResource, quantity })
                    }
                  }}
                />
              </div>

              <div>
                <Label htmlFor="unit">Unidade</Label>
                <Input
                  id="unit"
                  placeholder="kg, sacos, unidades..."
                  value={editingResource ? editingResource.unit : newResource.unit}
                  onChange={(e) => {
                    if (editingResource) {
                      setEditingResource({ ...editingResource, unit: e.target.value })
                    } else {
                      setNewResource({ ...newResource, unit: e.target.value })
                    }
                  }}
                />
              </div>

              <div>
                <Label htmlFor="cost">Custo (Kz)</Label>
                <Input
                  id="cost"
                  type="number"
                  value={editingResource ? editingResource.cost : newResource.cost}
                  onChange={(e) => {
                    const cost = Number.parseFloat(e.target.value)
                    if (editingResource) {
                      setEditingResource({ ...editingResource, cost })
                    } else {
                      setNewResource({ ...newResource, cost })
                    }
                  }}
                />
              </div>

              <div>
                <Label htmlFor="supplier">Fornecedor</Label>
                <Input
                  id="supplier"
                  value={editingResource ? editingResource.supplier : newResource.supplier}
                  onChange={(e) => {
                    if (editingResource) {
                      setEditingResource({ ...editingResource, supplier: e.target.value })
                    } else {
                      setNewResource({ ...newResource, supplier: e.target.value })
                    }
                  }}
                />
              </div>

              <div>
                <Label htmlFor="purchaseDate">Data de Compra</Label>
                <Input
                  id="purchaseDate"
                  type="date"
                  value={editingResource ? editingResource.purchaseDate : newResource.purchaseDate}
                  onChange={(e) => {
                    if (editingResource) {
                      setEditingResource({ ...editingResource, purchaseDate: e.target.value })
                    } else {
                      setNewResource({ ...newResource, purchaseDate: e.target.value })
                    }
                  }}
                />
              </div>

              <div>
                <Label htmlFor="expiryDate">Data de Validade (opcional)</Label>
                <Input
                  id="expiryDate"
                  type="date"
                  value={editingResource ? editingResource.expiryDate || "" : newResource.expiryDate || ""}
                  onChange={(e) => {
                    if (editingResource) {
                      setEditingResource({ ...editingResource, expiryDate: e.target.value })
                    } else {
                      setNewResource({ ...newResource, expiryDate: e.target.value })
                    }
                  }}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="notes">Notas</Label>
              <Input
                id="notes"
                placeholder="Observações adicionais..."
                value={editingResource ? editingResource.notes : newResource.notes}
                onChange={(e) => {
                  if (editingResource) {
                    setEditingResource({ ...editingResource, notes: e.target.value })
                  } else {
                    setNewResource({ ...newResource, notes: e.target.value })
                  }
                }}
              />
            </div>

            <div className="flex space-x-2">
              <Button onClick={editingResource ? updateResource : addResource}>
                {editingResource ? "Actualizar" : "Adicionar"} Recurso
              </Button>
              <Button variant="outline" onClick={resetForm}>
                Cancelar
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Resources Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="all">Todos</TabsTrigger>
          <TabsTrigger value="seed">🌱 Sementes</TabsTrigger>
          <TabsTrigger value="fertilizer">🌿 Fertilizantes</TabsTrigger>
          <TabsTrigger value="equipment">🚜 Equipamentos</TabsTrigger>
          <TabsTrigger value="pesticide">🧪 Pesticidas</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredResources.map((resource) => (
              <Card key={resource.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <span className="text-2xl">{resourceTypes[resource.type].icon}</span>
                      {resource.name}
                    </CardTitle>
                    <div className="flex space-x-1">
                      <Button variant="ghost" size="icon" onClick={() => startEdit(resource)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => deleteResource(resource.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardDescription>{resourceTypes[resource.type].label}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge className={getStatusColor(resource.status)}>{getStatusLabel(resource.status)}</Badge>
                    <span className="text-sm font-medium">
                      {resource.quantity} {resource.unit}
                    </span>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Custo:</span>
                      <span className="font-medium">{resource.cost.toLocaleString()} Kz</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Fornecedor:</span>
                      <span className="font-medium">{resource.supplier}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Compra:</span>
                      <span className="font-medium">{new Date(resource.purchaseDate).toLocaleDateString("pt-AO")}</span>
                    </div>
                    {resource.expiryDate && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Validade:</span>
                        <span
                          className={`font-medium ${new Date(resource.expiryDate) < new Date() ? "text-red-600" : ""}`}
                        >
                          {new Date(resource.expiryDate).toLocaleDateString("pt-AO")}
                        </span>
                      </div>
                    )}
                  </div>

                  {resource.notes && <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded">{resource.notes}</p>}
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <Card>
              <CardContent className="flex flex-col items-center justify-center h-48 space-y-4">
                <Package className="h-12 w-12 text-gray-400" />
                <div className="text-center">
                  <h3 className="font-medium text-gray-900">Nenhum recurso encontrado</h3>
                  <p className="text-gray-600">
                    {activeTab === "all"
                      ? "Comece por adicionar recursos"
                      : `Nenhum ${resourceTypes[activeTab as keyof typeof resourceTypes]?.label.toLowerCase()} encontrado`}
                  </p>
                </div>
                <Button onClick={() => setShowAddForm(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Adicionar Recurso
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
