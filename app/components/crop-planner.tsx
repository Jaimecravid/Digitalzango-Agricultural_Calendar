"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Plus, Edit, Trash2, Clock, MapPin } from "lucide-react";

interface CropPlan {
  id: string;
  crop: string;
  area: string;
  plantingDate: string;
  harvestDate: string;
  notes: string;
}

const CropPlanner = () => {
  const [plans, setPlans] = useState<CropPlan[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingPlan, setEditingPlan] = useState<CropPlan | null>(null);
  const [newPlan, setNewPlan] = useState<Partial<CropPlan>>({
    crop: "",
    area: "",
    plantingDate: new Date().toISOString().split('T')[0],
    harvestDate: new Date().toISOString().split('T')[0],
    notes: ""
  });

  const addPlan = () => {
    if (!newPlan.crop || !newPlan.plantingDate || !newPlan.harvestDate) return;

    const plan: CropPlan = {
      id: Date.now().toString(),
      crop: newPlan.crop,
      area: newPlan.area || "",
      plantingDate: newPlan.plantingDate,
      harvestDate: newPlan.harvestDate,
      notes: newPlan.notes || ""
    };

    setPlans([...plans, plan]);
    setNewPlan({
      crop: "",
      area: "",
      plantingDate: new Date().toISOString().split('T')[0],
      harvestDate: new Date().toISOString().split('T')[0],
      notes: ""
    });
    setShowAddForm(false);
  };

  const updatePlan = () => {
    if (!editingPlan) return;

    setPlans(plans.map((p) => (p.id === editingPlan.id ? editingPlan : p)));
    setEditingPlan(null);
  };

  const deletePlan = (id: string) => {
    setPlans(plans.filter((p) => p.id !== id));
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Planeamento de Culturas</h2>
          <p className="text-gray-600">Planeie e acompanhe as suas culturas</p>
        </div>
        <Button onClick={() => setShowAddForm(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Adicionar Plano
        </Button>
      </div>

      {/* Add Plan Form */}
      {showAddForm && (
        <Card>
          <CardHeader>
            <CardTitle>Novo Plano de Cultura</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="crop">Cultura</Label>
                <Input
                  id="crop"
                  value={newPlan.crop}
                  onChange={(e) => setNewPlan({ ...newPlan, crop: e.target.value })}
                  placeholder="Ex: Milho, Feijão, Mandioca"
                />
              </div>

              <div>
                <Label htmlFor="area">Área (hectares)</Label>
                <Input
                  id="area"
                  value={newPlan.area}
                  onChange={(e) => setNewPlan({ ...newPlan, area: e.target.value })}
                  placeholder="Ex: 2.5"
                />
              </div>

              <div>
                <Label htmlFor="plantingDate">Data de Plantio</Label>
                <Input
                  id="plantingDate"
                  type="date"
                  value={newPlan.plantingDate}
                  onChange={(e) => setNewPlan({ ...newPlan, plantingDate: e.target.value })}
                />
              </div>

              <div>
                <Label htmlFor="harvestDate">Data de Colheita</Label>
                <Input
                  id="harvestDate"
                  type="date"
                  value={newPlan.harvestDate}
                  onChange={(e) => setNewPlan({ ...newPlan, harvestDate: e.target.value })}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="notes">Observações</Label>
              <Textarea
                id="notes"
                value={newPlan.notes}
                onChange={(e) => setNewPlan({ ...newPlan, notes: e.target.value })}
                placeholder="Observações adicionais sobre o plano"
                rows={3}
              />
            </div>

            <div className="flex gap-2">
              <Button onClick={addPlan}>Adicionar</Button>
              <Button variant="outline" onClick={() => setShowAddForm(false)}>
                Cancelar
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Plans List */}
      <div className="grid gap-4">
        {plans.length === 0 ? (
          <Card>
            <CardContent className="text-center py-8">
              <Calendar className="h-12 w-12 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-500">Nenhum plano registado ainda</p>
              <p className="text-sm text-gray-400">Comece por adicionar o seu primeiro plano</p>
            </CardContent>
          </Card>
        ) : (
          plans.map((plan) => (
            <Card key={plan.id}>
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold">{plan.crop}</span>
                      {plan.area && <span className="text-sm text-gray-600">{plan.area} ha</span>}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>Plantio: {new Date(plan.plantingDate).toLocaleDateString('pt-PT')}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>Colheita: {new Date(plan.harvestDate).toLocaleDateString('pt-PT')}</span>
                      </div>
                    </div>
                    
                    {plan.notes && (
                      <p className="text-sm text-gray-600 mt-2">{plan.notes}</p>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setEditingPlan(plan)}
                    >
                      <Edit className="h-3 w-3" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => deletePlan(plan.id)}
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

export default CropPlanner;
