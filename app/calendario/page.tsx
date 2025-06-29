"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useWeatherData } from "../contexts/weather-context";
import { useLanguage } from "../contexts/language-context";
import { useRegion } from "../contexts/region-context";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import {
  Droplets,
  Sprout,
  Scissors,
  Sun,
  Cloud,
  CloudRain,
  Calendar as CalendarIcon,
  MapPin,
  Thermometer,
  Wind,
  Eye,
  Gauge,
  RefreshCw,
  AlertTriangle,
  CheckCircle,
  Info,
  TrendingUp,
  Users,
  BookOpen,
  Star,
  Loader2
} from "lucide-react";
import AgriculturalIntelligence from "../../lib/agricultural-intelligence";

// Province to city mapping for Angola
const PROVINCE_CITY_MAP = {
  "Luanda": "Luanda",
  "Bengo": "Caxito",
  "Benguela": "Benguela",
  "Bié": "Kuito",
  "Cabinda": "Cabinda",
  "Cuando Cubango": "Menongue",
  "Cunene": "Ondjiva",
  "Huambo": "Huambo",
  "Huíla": "Lubango",
  "Kwanza Norte": "N'dalatando",
  "Kwanza Sul": "Sumbe",
  "Lunda Norte": "Dundo",
  "Lunda Sul": "Saurimo",
  "Malanje": "Malanje",
  "Moxico": "Luena",
  "Namibe": "Moçâmedes",
  "Uíge": "Uíge",
  "Zaire": "M'banza-Kongo"
};

// Agricultural activity types
const ACTIVITY_TYPES = {
  irrigation: {
    label: "Irrigação",
    icon: Droplets,
    color: "bg-blue-100 dark:bg-blue-900/50 text-blue-900 dark:text-blue-100",
    borderColor: "border-blue-500"
  },
  planting: {
    label: "Plantio",
    icon: Sprout,
    color: "bg-green-100 dark:bg-green-900/50 text-green-900 dark:text-green-100",
    borderColor: "border-green-500"
  },
  harvest: {
    label: "Colheita",
    icon: Scissors,
    color: "bg-yellow-100 dark:bg-yellow-900/50 text-yellow-900 dark:text-yellow-100",
    borderColor: "border-yellow-500"
  }
};

// Generate agricultural calendar based on weather and season
const generateAgriculturalCalendar = (currentWeather, forecast, selectedProvince) => {
  const today = new Date();
  const activities = {
    irrigation: [],
    planting: [],
    harvest: []
  };

  // Generate activities for the next 3 months
  for (let i = 0; i < 90; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    
    const month = date.getMonth();
    const dayOfWeek = date.getDay();
    
    // Irrigation schedule (every 3 days, avoid weekends if possible)
    if (i % 3 === 0 && dayOfWeek !== 0) {
      activities.irrigation.push(new Date(date));
    }
    
    // Planting schedule (based on season and weather)
    // Dry season (May-September) - better for planting
    if (month >= 4 && month <= 8) {
      if (i % 14 === 0) {
        activities.planting.push(new Date(date));
      }
    }
    
    // Harvest schedule (typically 60-90 days after planting)
    if (i % 21 === 0) {
      activities.harvest.push(new Date(date));
    }
  }

  return activities;
};

// Generate recommendations based on weather and calendar
const generateRecommendations = (currentWeather, forecast, agriculturalData) => {
  const recommendations = [];
  
  if (currentWeather) {
    // Temperature-based recommendations
    if (currentWeather.temperature > 30) {
      recommendations.push({
        type: "warning",
        title: "Temperatura Alta",
        description: "Considere irrigação adicional devido ao calor intenso",
        action: "Aumentar frequência de irrigação",
        priority: "high",
        icon: "🌡️"
      });
    }
    
    if (currentWeather.temperature < 18) {
      recommendations.push({
        type: "info",
        title: "Temperatura Baixa",
        description: "Proteja plantas sensíveis ao frio",
        action: "Usar cobertura para plantas jovens",
        priority: "medium",
        icon: "❄️"
      });
    }
    
    // Humidity-based recommendations
    if (currentWeather.humidity && currentWeather.humidity > 80) {
      recommendations.push({
        type: "warning",
        title: "Humidade Alta",
        description: "Risco aumentado de doenças fúngicas",
        action: "Melhorar ventilação e espaçamento",
        priority: "medium",
        icon: "💧"
      });
    }
    
    // Wind-based recommendations
    if (currentWeather.windSpeed && currentWeather.windSpeed > 5) {
      recommendations.push({
        type: "info",
        title: "Vento Forte",
        description: "Evite aplicação de pesticidas",
        action: "Adiar pulverizações",
        priority: "low",
        icon: "💨"
      });
    }
  }
  
  // Add general recommendations
  recommendations.push({
    type: "success",
    title: "Monitoramento Regular",
    description: "Continue o acompanhamento diário das culturas",
    action: "Verificar pragas e doenças",
    priority: "medium",
    icon: "👁️"
  });
  
  return recommendations;
};

const CalendarioPage = () => {
  // State management
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedProvince, setSelectedProvince] = useState("Luanda");
  const [agriculturalData, setAgriculturalData] = useState({
    irrigation: [],
    planting: [],
    harvest: []
  });
  const [recommendations, setRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Context hooks
  const { 
    currentWeather, 
    forecast, 
    isLoading: weatherLoading, 
    error: weatherError,
    fetchWeatherByLocation 
  } = useWeatherData();
  
  const { t, isLoading: langLoading } = useLanguage();
  const { getCurrentRegion } = useRegion();

  // Generate agricultural calendar when weather data changes
  useEffect(() => {
    if (currentWeather || forecast.length > 0) {
      setIsLoading(true);
      
      try {
        // Generate calendar based on weather and location
        const calendar = generateAgriculturalCalendar(currentWeather, forecast, selectedProvince);
        setAgriculturalData(calendar);
        
        // Generate recommendations
        const recs = generateRecommendations(currentWeather, forecast, calendar);
        setRecommendations(recs);
        
      } catch (error) {
        console.error('Failed to generate agricultural calendar:', error);
      } finally {
        setIsLoading(false);
      }
    }
  }, [currentWeather, forecast, selectedProvince]);

  // Handle province change
  const handleProvinceChange = async (province) => {
    setSelectedProvince(province);
    const city = PROVINCE_CITY_MAP[province];
    
    if (city && fetchWeatherByLocation) {
      try {
        await fetchWeatherByLocation(city);
      } catch (error) {
        console.error('Failed to fetch weather for calendar:', error);
      }
    }
  };

  // Auto-fetch weather for default location on mount
  useEffect(() => {
    if (fetchWeatherByLocation) {
      const city = PROVINCE_CITY_MAP[selectedProvince];
      fetchWeatherByLocation(city);
    }
  }, [fetchWeatherByLocation, selectedProvince]);

  // Get activities for selected date
  const getActivitiesForDate = (date) => {
    const activities = [];
    const dateStr = date.toDateString();
    
    if (agriculturalData.irrigation.some(d => d.toDateString() === dateStr)) {
      activities.push({ type: 'irrigation', ...ACTIVITY_TYPES.irrigation });
    }
    if (agriculturalData.planting.some(d => d.toDateString() === dateStr)) {
      activities.push({ type: 'planting', ...ACTIVITY_TYPES.planting });
    }
    if (agriculturalData.harvest.some(d => d.toDateString() === dateStr)) {
      activities.push({ type: 'harvest', ...ACTIVITY_TYPES.harvest });
    }
    
    return activities;
  };

  // Loading state
  if (langLoading || isLoading || weatherLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
        <div className="text-center space-y-6">
          <Loader2 className="h-12 w-12 animate-spin text-green-600 mx-auto" />
          <div className="w-64">
            <div className="h-2 bg-green-200 rounded-full overflow-hidden">
              <div className="h-full bg-green-600 rounded-full animate-pulse" style={{ width: '75%' }}></div>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Carregando calendário agrícola...
            </p>
          </div>
        </div>
      </div>
    );
  }

  const selectedDateActivities = getActivitiesForDate(selectedDate);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">Calendário Agrícola de Angola</h1>
              <p className="text-green-100">Planeje suas atividades agrícolas com base no clima</p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <select
                  value={selectedProvince}
                  onChange={(e) => handleProvinceChange(e.target.value)}
                  className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  {Object.keys(PROVINCE_CITY_MAP).map((province) => (
                    <option key={province} value={province} className="text-gray-800">
                      {province}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weather Error */}
      {weatherError && (
        <div className="bg-orange-500 text-white text-center py-2 px-4">
          <div className="flex items-center justify-center gap-2">
            <AlertTriangle className="h-4 w-4" />
            <span>Erro ao carregar dados meteorológicos - usando dados padrão</span>
          </div>
        </div>
      )}

      {/* Main Content */}
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Calendar Section */}
            <div className="lg:col-span-2">
              <Card className="bg-white/90 backdrop-blur-sm shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CalendarIcon className="h-6 w-6 text-green-600" />
                    Calendário de Atividades Agrícolas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    irrigationDays={agriculturalData.irrigation}
                    plantingDays={agriculturalData.planting}
                    harvestDays={agriculturalData.harvest}
                    className="rounded-md border shadow-sm"
                  />
                  
                  {/* Legend */}
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    {Object.entries(ACTIVITY_TYPES).map(([key, activity]) => (
                      <div key={key} className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded ${activity.color}`}></div>
                        <span className="text-sm font-medium">{activity.label}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              
              {/* Selected Date Activities */}
              <Card className="bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg">
                    {selectedDate.toLocaleDateString('pt-PT', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {selectedDateActivities.length > 0 ? (
                    <div className="space-y-3">
                      {selectedDateActivities.map((activity, idx) => (
                        <div key={idx} className={`p-3 rounded-lg ${activity.color} border-l-4 ${activity.borderColor}`}>
                          <div className="flex items-center gap-2">
                            <activity.icon className="h-5 w-5" />
                            <span className="font-semibold">{activity.label}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-center py-4">
                      Nenhuma atividade programada para este dia
                    </p>
                  )}
                </CardContent>
              </Card>

              {/* Current Weather */}
              {currentWeather && (
                <Card className="bg-white/90 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Sun className="h-5 w-5 text-yellow-500" />
                      Clima Atual
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold">{currentWeather.temperature}°C</span>
                        <span className="text-gray-600 capitalize">{currentWeather.description}</span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="flex items-center gap-2">
                          <Droplets className="h-4 w-4 text-blue-500" />
                          <span>{currentWeather.humidity || 65}%</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Wind className="h-4 w-4 text-gray-500" />
                          <span>{currentWeather.windSpeed ? Math.round(currentWeather.windSpeed * 3.6) : 12} km/h</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Recommendations */}
              {recommendations.length > 0 && (
                <Card className="bg-white/90 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Star className="h-5 w-5 text-yellow-500" />
                      Recomendações
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {recommendations.slice(0, 3).map((rec, idx) => (
                        <div
                          key={idx}
                          className={`p-3 rounded-lg border-l-4 ${
                            rec.type === 'warning' 
                              ? 'bg-orange-50 border-orange-500' 
                              : rec.type === 'success'
                              ? 'bg-green-50 border-green-500'
                              : 'bg-blue-50 border-blue-500'
                          }`}
                        >
                          <div className="flex items-start gap-2">
                            <span className="text-lg">{rec.icon}</span>
                            <div className="flex-1">
                              <h4 className="font-semibold text-sm">{rec.title}</h4>
                              <p className="text-xs text-gray-600 mt-1">{rec.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 text-gray-600 mb-2 flex-wrap">
            <Badge variant="outline" className="bg-white/80">
              Calendário Inteligente
            </Badge>
            <Badge variant="outline" className="bg-white/80">
              Baseado em Dados Meteorológicos
            </Badge>
            <Badge variant="outline" className="bg-white/80">
              IA Agrícola
            </Badge>
          </div>
          <p className="text-sm text-gray-500">
            Calendário agrícola personalizado para Angola com recomendações baseadas em inteligência artificial.
          </p>
        </div>
      </section>
    </div>
  );
};

export default CalendarioPage;
