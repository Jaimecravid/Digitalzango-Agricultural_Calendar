"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Package, Plus, Edit, Trash2, AlertTriangle, CheckCircle } from "lucide-react";

interface Resource {
  id: string;
  type: "seeds" | "fertilizer" | "equipment" | "pesticide" | "other";
  name: string;
  quantity: number;
  unit: string;
  location: string;
  expiryDate?: string;
  notes: string;
  status: "available" | "low" | "expired" | "out-of-stock";
}

const ResourceManager = () => {
  const [resources, setResources] = useState<Resource[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingResource, setEditingResource] = useState<Resource | null>(null);
  const [newResource, setNewResource] = useState<Partial<Resource>>({
    type: "seeds",
    name: "",
    quantity: 0,
    unit: "kg",
    location: "",
    expiryDate: "",
    notes: "",
    status: "available"
  });

  const addResource = () => {
    if (!newResource.name || !newResource.quantity) return;

    const resource: Resource = {
      id: Date.now().toString(),
      type: newResource.type as Resource['type'],
      name: newResource.name,
      quantity: newResource.quantity,
      unit: newResource.unit || "kg",
      location: newResource.location || "",
      expiryDate: newResource.expiryDate,
      notes: newResource.notes || "",
      status: newResource.status as Resource['status']
    };

    setResources([...resources, resource]);
    setNewResource({
      type: "seeds",
      name: "",
      quantity: 0,
      unit: "kg",
      location: "",
      expiryDate: "",
      notes: "",
      status: "available"
    });
    setShowAddForm(false);
  };

  const updateResource = () => {
    if (!editingResource) return;

    setResources(resources.map((r) => (r.id === editingResource.id ? editingResource : r)));
    setEditingResource(null);
  };

  const deleteResource = (id: string) => {
    setResources(resources.filter((r) => r.id !== id));
  };

  const getStatusColor = (status: string) => {
    const colors = {
      available: "bg-green-100 text-green-800",
      low: "bg-yellow-100 text-yellow-800",
      expired: "bg-red-100 text-red-800",
      "out-of-stock": "bg-gray-100 text-gray-800"
    };
    return colors[status as keyof typeof colors] || colors.available;
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "available":
        return <CheckCircle className="h-4 w-4" />;
      case "low":
      case "expired":
      case "out-of-stock":
        return <AlertTriangle className="h-4 w-4" />;
      default:
        return <Package className="h-4 w-4" />;
    }
  };

  const getTypeLabel = (type: string) => {
    const labels = {
      seeds: "Sementes",
      fertilizer: "Fertilizante",
      equipment: "Equipamento",
      pesticide: "Pesticida",
      other: "Outro"
    };
    return labels[type as keyof typeof labels] || type;
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Gestão de Recursos</h2>
          <p className="text-gray-600">Gerir sementes, fertilizantes e equipamentos</p>
        </div>
        <Button onClick={() => setShowAddForm(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Adicionar Recurso
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Package className="h-5 w-5 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">Total de Recursos</p>
                <p className="text-xl font-bold">{resources.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <div>
                <p className="text-sm text-gray-600">Disponíveis</p>
                <p className="text-xl font-bold">
                  {resources.filter(r => r.status === "available").length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-600" />
              <div>
                <p className="text-sm text-gray-600">Estoque Baixo</p>
                <p className="text-xl font-bold">
                  {resources.filter(r => r.status === "low").length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              <div>
                <p className="text-sm text-gray-600">Expirados</p>
                <p className="text-xl font-bold">
                  {resources.filter(r => r.status === "expired").length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Add Resource Form */}
      {showAddForm && (
        <Card>
          <CardHeader>
            <CardTitle>Novo Recurso</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="type">Tipo de Recurso</Label>
                <Select 
                  value={newResource.type} 
                  onValueChange={(value) => setNewResource({...newResource, type: value as Resource['type']})}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="seeds">Sementes</SelectItem>
                    <SelectItem value="fertilizer">Fertilizante</SelectItem>
                    <SelectItem value="equipment">Equipamento</SelectItem>
                    <SelectItem value="pesticide">Pesticida</SelectItem>
                    <SelectItem value="other">Outro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="name">Nome do Recurso</Label>
                <Input
                  id="name"
                  value={newResource.name}
                  onChange={(e) => setNewResource({...newResource, name: e.target.value})}
                  placeholder="Ex: Sementes de Milho"
                />
              </div>
              
              <div>
                <Label htmlFor="quantity">Quantidade</Label>
                <Input
                  id="quantity"
                  type="number"
                  value={newResource.quantity}
                  onChange={(e) => setNewResource({...newResource, quantity: parseInt(e.target.value)})}
                  min="0"
                />
              </div>
              
              <div>
                <Label htmlFor="unit">Unidade</Label>
                <Select 
                  value={newResource.unit} 
                  onValueChange={(value) => setNewResource({...newResource, unit: value})}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kg">Quilogramas (kg)</SelectItem>
                    <SelectItem value="g">Gramas (g)</SelectItem>
                    <SelectItem value="l">Litros (l)</SelectItem>
                    <SelectItem value="ml">Mililitros (ml)</SelectItem>
                    <SelectItem value="unidade">Unidade</SelectItem>
                    <SelectItem value="saco">Saco</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="location">Localização</Label>
                <Input
                  id="location"
                  value={newResource.location}
                  onChange={(e) => setNewResource({...newResource, location: e.target.value})}
                  placeholder="Ex: Armazém A, Prateleira 2"
                />
              </div>
              
              <div>
                <Label htmlFor="expiryDate">Data de Validade (opcional)</Label>
                <Input
                  id="expiryDate"
                  type="date"
                  value={newResource.expiryDate}
                  onChange={(e) => setNewResource({...newResource, expiryDate: e.target.value})}
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="notes">Observações</Label>
              <Textarea
                id="notes"
                value={newResource.notes}
                onChange={(e) => setNewResource({...newResource, notes: e.target.value})}
                placeholder="Observações adicionais sobre o recurso"
                rows={3}
              />
            </div>
            
            <div className="flex gap-2">
              <Button onClick={addResource}>Adicionar</Button>
              <Button variant="outline" onClick={() => setShowAddForm(false)}>Cancelar</Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Resources List */}
      <div className="grid gap-4">
        {resources.length === 0 ? (
          <Card>
            <CardContent className="text-center py-8">
              <Package className="h-12 w-12 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-500">Nenhum recurso registado ainda</p>
              <p className="text-sm text-gray-400">Comece por adicionar o seu primeiro recurso</p>
            </CardContent>
          </Card>
        ) : (
          resources.map((resource) => (
            <Card key={resource.id}>
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{getTypeLabel(resource.type)}</Badge>
                      <span className="font-semibold">{resource.name}</span>
                      <Badge className={getStatusColor(resource.status)}>
                        {getStatusIcon(resource.status)}
                        <span className="ml-1">
                          {resource.status === "available" && "Disponível"}
                          {resource.status === "low" && "Estoque Baixo"}
                          {resource.status === "expired" && "Expirado"}
                          {resource.status === "out-of-stock" && "Sem Estoque"}
                        </span>
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-gray-600">
                      <div>
                        <span className="font-medium">Quantidade:</span> {resource.quantity} {resource.unit}
                      </div>
                      {resource.location && (
                        <div>
                          <span className="font-medium">Local:</span> {resource.location}
                        </div>
                      )}
                      {resource.expiryDate && (
                        <div>
                          <span className="font-medium">Validade:</span> {new Date(resource.expiryDate).toLocaleDateString('pt-PT')}
                        </div>
                      )}
                    </div>
                    
                    {resource.notes && (
                      <p className="text-sm text-gray-600 mt-2">{resource.notes}</p>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setEditingResource(resource)}
                    >
                      <Edit className="h-3 w-3" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => deleteResource(resource.id)}
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default ResourceManager;
