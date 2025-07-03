"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Calendar, Plus, Edit, Trash2, Clock, MapPin } from "lucide-react";

interface Activity {
  id: string;
  type: "planting" | "irrigation" | "fertilization" | "pest-control" | "harvesting" | "land-prep" | "weeding" | "other";
  crop: string;
  area: string;
  date: string;
  duration: number;
  notes: string;
  weather: string;
  location: string;
}

const ActivityLogger = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingActivity, setEditingActivity] = useState<Activity | null>(null);
  const [newActivity, setNewActivity] = useState<Partial<Activity>>({
    type: "planting",
    crop: "",
    area: "",
    date: new Date().toISOString().split('T')[0],
    duration: 1,
    notes: "",
    weather: "",
    location: ""
  });

  const addActivity = () => {
    if (!newActivity.type || !newActivity.crop) return;

    const activity: Activity = {
      id: Date.now().toString(),
      type: newActivity.type as Activity['type'],
      crop: newActivity.crop,
      area: newActivity.area || "",
      date: newActivity.date || new Date().toISOString().split('T')[0],
      duration: newActivity.duration || 1,
      notes: newActivity.notes || "",
      weather: newActivity.weather || "",
      location: newActivity.location || ""
    };

    setActivities([...activities, activity]);
    setNewActivity({
      type: "planting",
      crop: "",
      area: "",
      date: new Date().toISOString().split('T')[0],
      duration: 1,
      notes: "",
      weather: "",
      location: ""
    });
    setShowAddForm(false);
  };

  const updateActivity = () => {
    if (!editingActivity) return;

    setActivities(activities.map((a) => (a.id === editingActivity.id ? editingActivity : a)));
    setEditingActivity(null);
  };

  const deleteActivity = (id: string) => {
    setActivities(activities.filter((a) => a.id !== id));
  };

  const getActivityTypeColor = (type: string) => {
    const colors = {
      planting: "bg-green-100 text-green-800",
      irrigation: "bg-blue-100 text-blue-800",
      fertilization: "bg-yellow-100 text-yellow-800",
      "pest-control": "bg-red-100 text-red-800",
      harvesting: "bg-orange-100 text-orange-800",
      "land-prep": "bg-purple-100 text-purple-800",
      weeding: "bg-gray-100 text-gray-800",
      other: "bg-gray-100 text-gray-800"
    };
    return colors[type as keyof typeof colors] || colors.other;
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Registo de Atividades</h2>
          <p className="text-gray-600">Registe e acompanhe as atividades da sua quinta</p>
        </div>
        <Button onClick={() => setShowAddForm(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Adicionar Atividade
        </Button>
      </div>

      {/* Add Activity Form */}
      {showAddForm && (
        <Card>
          <CardHeader>
            <CardTitle>Nova Atividade</CardTitle>
            <CardDescription>Adicione uma nova atividade agrícola</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="type">Tipo de Atividade</Label>
                <Select 
                  value={newActivity.type} 
                  onValueChange={(value) => setNewActivity({...newActivity, type: value as Activity['type']})}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="planting">Plantio</SelectItem>
                    <SelectItem value="irrigation">Irrigação</SelectItem>
                    <SelectItem value="fertilization">Fertilização</SelectItem>
                    <SelectItem value="pest-control">Controle de Pragas</SelectItem>
                    <SelectItem value="harvesting">Colheita</SelectItem>
                    <SelectItem value="land-prep">Preparação do Solo</SelectItem>
                    <SelectItem value="weeding">Capina</SelectItem>
                    <SelectItem value="other">Outro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="crop">Cultura</Label>
                <Input
                  id="crop"
                  value={newActivity.crop}
                  onChange={(e) => setNewActivity({...newActivity, crop: e.target.value})}
                  placeholder="Ex: Milho, Feijão, Mandioca"
                />
              </div>
              
              <div>
                <Label htmlFor="area">Área (hectares)</Label>
                <Input
                  id="area"
                  value={newActivity.area}
                  onChange={(e) => setNewActivity({...newActivity, area: e.target.value})}
                  placeholder="Ex: 2.5"
                />
              </div>
              
              <div>
                <Label htmlFor="date">Data</Label>
                <Input
                  id="date"
                  type="date"
                  value={newActivity.date}
                  onChange={(e) => setNewActivity({...newActivity, date: e.target.value})}
                />
              </div>
              
              <div>
                <Label htmlFor="duration">Duração (horas)</Label>
                <Input
                  id="duration"
                  type="number"
                  value={newActivity.duration}
                  onChange={(e) => setNewActivity({...newActivity, duration: parseInt(e.target.value)})}
                  min="1"
                />
              </div>
              
              <div>
                <Label htmlFor="location">Localização</Label>
                <Input
                  id="location"
                  value={newActivity.location}
                  onChange={(e) => setNewActivity({...newActivity, location: e.target.value})}
                  placeholder="Ex: Campo Norte, Lote 3"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="notes">Observações</Label>
              <Textarea
                id="notes"
                value={newActivity.notes}
                onChange={(e) => setNewActivity({...newActivity, notes: e.target.value})}
                placeholder="Observações adicionais sobre a atividade"
                rows={3}
              />
            </div>
            
            <div className="flex gap-2">
              <Button onClick={addActivity}>Adicionar</Button>
              <Button variant="outline" onClick={() => setShowAddForm(false)}>Cancelar</Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Activities List */}
      <div className="grid gap-4">
        {activities.length === 0 ? (
          <Card>
            <CardContent className="text-center py-8">
              <Calendar className="h-12 w-12 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-500">Nenhuma atividade registada ainda</p>
              <p className="text-sm text-gray-400">Comece por adicionar a sua primeira atividade</p>
            </CardContent>
          </Card>
        ) : (
          activities.map((activity) => (
            <Card key={activity.id}>
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={getActivityTypeColor(activity.type)}>
                        {activity.type === 'planting' && 'Plantio'}
                        {activity.type === 'irrigation' && 'Irrigação'}
                        {activity.type === 'fertilization' && 'Fertilização'}
                        {activity.type === 'pest-control' && 'Controle de Pragas'}
                        {activity.type === 'harvesting' && 'Colheita'}
                        {activity.type === 'land-prep' && 'Preparação do Solo'}
                        {activity.type === 'weeding' && 'Capina'}
                        {activity.type === 'other' && 'Outro'}
                      </Badge>
                      <span className="font-semibold">{activity.crop}</span>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(activity.date).toLocaleDateString('pt-PT')}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {activity.duration}h
                      </div>
                      {activity.area && (
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {activity.area} ha
                        </div>
                      )}
                      {activity.location && (
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {activity.location}
                        </div>
                      )}
                    </div>
                    
                    {activity.notes && (
                      <p className="text-sm text-gray-600 mt-2">{activity.notes}</p>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setEditingActivity(activity)}
                    >
                      <Edit className="h-3 w-3" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => deleteActivity(activity.id)}
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

export default ActivityLogger;
