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
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
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
  Loader2,
  Bug,
  Leaf,
  Bell,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Zap,
  Target,
  Calendar as CalendarDays,
  Clock,
  Shield,
  Lightbulb,
  BarChart3,
  Settings,
  Cloudy,
  Sunrise,
  Sunset,
  Moon,
  Snowflake,
  CloudLightning,
  CloudFog,
  CloudSnow,
  CloudDrizzle,
  CloudSun,
  CloudMoon
} from "lucide-react";

// Import utility functions
import {
  PestAlert,
  ANGOLA_PESTS,
  getPestAlertsForConditions,
  getPestRiskForDate,
  getSeasonalPestWarnings,
  getCurrentSeason,
  generatePestRecommendations
} from "@/lib/utils/pest-utils";

import {
  CropInfo,
  ANGOLA_CROPS,
  getSuitableCrops,
  calculateOptimalPlantingDate,
  generateRotationRecommendations,
  getCropById,
  generateCropCalendar
} from "@/lib/utils/crop-utils";

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
  "Kwanza Norte": "N\'dalatando",
  "Kwanza Sul": "Sumbe",
  "Lunda Norte": "Dundo",
  "Lunda Sul": "Saurimo",
  "Malanje": "Malanje",
  "Moxico": "Luena",
  "Namibe": "Moçâmedes",
  "Uíge": "Uíge",
  "Zaire": "M\'banza-Kongo"
};

// Enhanced activity types with pest integration
const ACTIVITY_TYPES = {
  irrigation: {
    label: "Irrigação",
    icon: Droplets,
    color: "bg-blue-100 dark:bg-blue-900/50 text-blue-900 dark:text-blue-100",
    borderColor: "border-blue-500",
    bgColor: "bg-blue-50"
  },
  planting: {
    label: "Plantio",
    icon: Sprout,
    color: "bg-green-100 dark:bg-green-900/50 text-green-900 dark:text-green-100",
    borderColor: "border-green-500",
    bgColor: "bg-green-50"
  },
  harvest: {
    label: "Colheita",
    icon: Scissors,
    color: "bg-yellow-100 dark:bg-yellow-900/50 text-yellow-900 dark:text-yellow-100",
    borderColor: "border-yellow-500",
    bgColor: "bg-yellow-50"
  },
  pestAlert: {
    label: "Alerta de Praga",
    icon: Bug,
    color: "bg-red-100 dark:bg-red-900/50 text-red-900 dark:text-red-100",
    borderColor: "border-red-500",
    bgColor: "bg-red-50"
  },
  cropPlanning: {
    label: "Planejamento",
    icon: Target,
    color: "bg-purple-100 dark:bg-purple-900/50 text-purple-900 dark:text-purple-100",
    borderColor: "border-purple-500",
    bgColor: "bg-purple-50"
  }
};

// Notification types
interface Notification {
  id: string;
  type: 'weather' | 'pest' | 'crop' | 'general';
  priority: 'low' | 'medium' | 'high' | 'critical';
  title: string;
  message: string;
  action?: string;
  date: Date;
  read: boolean;
  icon: React.ComponentType;
  color: string;
}

// Helper to get weather icon based on description
const getWeatherIcon = (description: string) => {
  if (!description) return Sun;
  const lowerDesc = description.toLowerCase();
  if (lowerDesc.includes('chuva') || lowerDesc.includes('rain')) return CloudRain;
  if (lowerDesc.includes('nublado') || lowerDesc.includes('cloudy')) return Cloud;
  if (lowerDesc.includes('sol') || lowerDesc.includes('clear')) return Sun;
  if (lowerDesc.includes('parcialmente nublado')) return CloudSun;
  if (lowerDesc.includes('neve')) return CloudSnow;
  if (lowerDesc.includes('trovoada')) return CloudLightning;
  if (lowerDesc.includes('névoa') || lowerDesc.includes('fog')) return CloudFog;
  return Sun;
};

// Helper to get temperature color class
const getTemperatureColorClass = (temp: number) => {
  if (temp > 30) return 'text-red-500';
  if (temp >= 25 && temp <= 30) return 'text-orange-500';
  return 'text-green-500';
};

// Enhanced calendar generation with pest and crop integration
const generateEnhancedAgriculturalCalendar = (
  currentWeather: any,
  forecast: any[],
  selectedProvince: string,
  selectedCrops: string[] = []
) => {
  const today = new Date();
  const activities = {
    irrigation: [],
    planting: [],
    harvest: [],
    pestAlert: [],
    cropPlanning: []
  };

  // Generate activities for the next 3 months
  for (let i = 0; i < 90; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    
    const month = date.getMonth();
    const dayOfWeek = date.getDay();
    
    // Enhanced irrigation schedule based on weather
    const temp = currentWeather?.temperature || 25;
    const humidity = currentWeather?.humidity || 65;
    
    // More frequent irrigation in hot, dry conditions
    const irrigationFrequency = temp > 30 && humidity < 50 ? 2 : 3;
    if (i % irrigationFrequency === 0 && dayOfWeek !== 0) {
      activities.irrigation.push(new Date(date));
    }
    
    // Crop-specific planting and harvest dates
    selectedCrops.forEach(cropId => {
      const crop = getCropById(cropId);
      if (crop && crop.suitableProvinces.includes(selectedProvince)) {
        if (crop.plantingMonths.includes(month) && i % 14 === 0) {
          activities.planting.push(new Date(date));
        }
        if (crop.harvestMonths.includes(month) && i % 21 === 0) {
          activities.harvest.push(new Date(date));
        }
      }
    });
    
    // Pest alert dates based on conditions
    if (currentWeather) {
      const pestRisk = getPestRiskForDate(date, temp, humidity, selectedProvince);
      if (pestRisk.level === 'high' || pestRisk.level === 'critical') {
        activities.pestAlert.push(new Date(date));
      }
    }
    
    // Crop planning dates (monthly)
    if (date.getDate() === 1) {
      activities.cropPlanning.push(new Date(date));
    }
  }

  return activities;
};

// Generate smart notifications
const generateSmartNotifications = (
  currentWeather: any,
  forecast: any[],
  selectedProvince: string,
  selectedCrops: string[],
  pestAlerts: PestAlert[]
): Notification[] => {
  const notifications: Notification[] = [];
  const today = new Date();

  // Weather-based notifications
  if (currentWeather) {
    if (currentWeather.temperature > 35) {
      notifications.push({
        id: `weather-heat-${Date.now()}`,
        type: 'weather',
        priority: 'high',
        title: 'Alerta de Calor Extremo',
        message: `Temperatura de ${currentWeather.temperature}°C. Aumente a irrigação e proteja as plantas.`,
        action: 'Irrigar culturas sensíveis',
        date: today,
        read: false,
        icon: Thermometer,
        color: 'text-red-600'
      });
    }

    if (currentWeather.humidity > 85) {
      notifications.push({
        id: `weather-humidity-${Date.now()}`,
        type: 'weather',
        priority: 'medium',
        title: 'Humidade Muito Alta',
        message: `Humidade de ${currentWeather.humidity}%. Risco de doenças fúngicas.`,
        action: 'Melhorar ventilação',
        date: today,
        read: false,
        icon: Droplets,
        color: 'text-blue-600'
      });
    }
  }

  // Pest outbreak warnings
  pestAlerts.forEach(pest => {
    if (pest.riskLevel === 'high' || pest.riskLevel === 'critical') {
      notifications.push({
        id: `pest-${pest.id}-${Date.now()}`,
        type: 'pest',
        priority: pest.riskLevel === 'critical' ? 'critical' : 'high',
        title: `Alerta: ${pest.namePortuguese}`,
        message: `Condições favoráveis para ${pest.namePortuguese}. Monitorar ${pest.affectedCrops.join(', ')}.`, 
        action: 'Inspecionar culturas',
        date: today,
        read: false,
        icon: Bug,
        color: 'text-red-600'
      });
    }
  });

  // Crop planning notifications
  selectedCrops.forEach(cropId => {
    const crop = getCropById(cropId);
    if (crop) {
      const currentMonth = today.getMonth();
      
      // Planting reminders
      if (crop.plantingMonths.includes(currentMonth)) {
        notifications.push({
          id: `crop-plant-${cropId}-${Date.now()}`,
          type: 'crop',
          priority: 'medium',
          title: `Época de Plantio: ${crop.namePortuguese}`,
          message: `Época ideal para plantar ${crop.namePortuguese} em ${selectedProvince}.`,
          action: 'Preparar plantio',
          date: today,
          read: false,
          icon: Sprout,
          color: 'text-green-600'
        });
      }

      // Harvest reminders
      if (crop.harvestMonths.includes(currentMonth)) {
        notifications.push({
          id: `crop-harvest-${cropId}-${Date.now()}`,
          type: 'crop',
          priority: 'high',
          title: `Época de Colheita: ${crop.namePortuguese}`,
          message: `Época de colheita para ${crop.namePortuguese}. Verificar maturação.`,
          action: 'Verificar colheita',
          date: today,
          read: false,
          icon: Scissors,
          color: 'text-yellow-600'
        });
      }
    }
  });

  // General agricultural notifications
  const season = getCurrentSeason(today.getMonth());
  notifications.push({
    id: `general-season-${Date.now()}`,
    type: 'general',
    priority: 'low',
    title: `Estação ${season === 'dry' ? 'Seca' : season === 'wet' ? 'Chuvosa' : 'de Transição'}`,
    message: `Atividades recomendadas para a estação atual em ${selectedProvince}.`,
    action: 'Ver recomendações',
    date: today,
    read: false,
    icon: CalendarDays,
    color: 'text-blue-600'
  });

  return notifications.sort((a, b) => {
    const priorityOrder = { critical: 4, high: 3, medium: 2, low: 1 };
    return priorityOrder[b.priority] - priorityOrder[a.priority];
  });
};

const EnhancedCalendarioPage = () => {
  // State management
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedProvince, setSelectedProvince] = useState("Luanda");
  const [selectedCrops, setSelectedCrops] = useState<string[]>(["milho", "feijao"]);
  const [agriculturalData, setAgriculturalData] = useState({
    irrigation: [],
    planting: [],
    harvest: [],
    pestAlert: [],
    cropPlanning: []
  });
  const [pestAlerts, setPestAlerts] = useState<PestAlert[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [recommendations, setRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("calendar");
  const [showCropWizard, setShowCropWizard] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState({
    weather: false,
    alerts: false, // New section for critical alerts
    planting: false, // New section for planting recommendations
    market: false, // New section for market analysis
    irrigation: false, // New section for irrigation scheduler
    financial: false, // New section for financial planner
    soil: false, // New section for soil health monitor
    activities: false,
    pests: false,
    recommendations: false,
    notifications: false
  });

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

  // Generate enhanced agricultural calendar when data changes
  useEffect(() => {
    if (currentWeather || forecast.length > 0) {
      setIsLoading(true);
      
      try {
        // Generate enhanced calendar
        const calendar = generateEnhancedAgriculturalCalendar(
          currentWeather, 
          forecast, 
          selectedProvince, 
          selectedCrops
        );
        setAgriculturalData(calendar);
        
        // Get pest alerts
        const temp = currentWeather?.temperature || 25;
        const humidity = currentWeather?.humidity || 65;
        const month = new Date().getMonth();
        const alerts = getPestAlertsForConditions(temp, humidity, month, selectedProvince);
        setPestAlerts(alerts);
        
        // Generate recommendations (including pest recommendations)
        const pestRecs = generatePestRecommendations(temp, humidity, month, selectedProvince);
        const generalRecs = [
          {
            type: "success",
            title: "Monitoramento Regular",
            description: "Continue o acompanhamento diário das culturas",
            action: "Verificar pragas e doenças",
            priority: "medium",
            icon: "👁️"
          }
        ];
        setRecommendations([...pestRecs, ...generalRecs]);
        
        // Generate smart notifications
        const smartNotifications = generateSmartNotifications(
          currentWeather,
          forecast,
          selectedProvince,
          selectedCrops,
          alerts
        );
        setNotifications(smartNotifications);
        
      } catch (error) {
        console.error('Failed to generate enhanced agricultural calendar:', error);
      } finally {
        setIsLoading(false);
      }
    }
  }, [currentWeather, forecast, selectedProvince, selectedCrops]);

  // Handle province change
  const handleProvinceChange = async (province: string) => {
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
  const getActivitiesForDate = (date: Date) => {
    const activities = [];
    const dateStr = date.toDateString();
    
    Object.entries(agriculturalData).forEach(([type, dates]) => {
      if (dates.some((d: Date) => d.toDateString() === dateStr)) {
        activities.push({ type, ...ACTIVITY_TYPES[type] });
      }
    });
    
    return activities;
  };

  // Get pest risk for selected date
  const getPestRiskForSelectedDate = () => {
    if (!currentWeather) return { level: 'low', pests: [] };
    
    return getPestRiskForDate(
      selectedDate,
      currentWeather.temperature,
      currentWeather.humidity || 65,
      selectedProvince
    );
  };

  // Toggle sidebar section
  const toggleSidebarSection = (section: string) => {
    setSidebarCollapsed(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Mark notification as read
  const markNotificationAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
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
              Carregando calendário agrícola inteligente...
            </p>
          </div>
        </div>
      </div>
    );
  }

  const selectedDateActivities = getActivitiesForDate(selectedDate);
  const pestRisk = getPestRiskForSelectedDate();
  const unreadNotifications = notifications.filter(n => !n.read);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Enhanced Header Section */}
      <section className="bg-gradient-to-r from-green-600 via-green-700 to-blue-600 text-white py-8 px-4 sm:px-6 lg:px-8 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
                <CalendarIcon className="h-8 w-8" />
                Calendário Agrícola Inteligente de Angola
              </h1>
              <p className="text-green-100 mb-4">
                Planeje suas atividades agrícolas com inteligência artificial e dados meteorológicos
              </p>
              
              {/* Quick stats */}
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2 bg-white/20 rounded-lg px-3 py-1">
                  <Bug className="h-4 w-4" />
                  <span>{pestAlerts.length} alertas de pragas</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 rounded-lg px-3 py-1">
                  <Bell className="h-4 w-4" />
                  <span>{unreadNotifications.length} notificações</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 rounded-lg px-3 py-1">
                  <Leaf className="h-4 w-4" />
                  <span>{selectedCrops.length} culturas selecionadas</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Notifications button */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowNotifications(true)}
                className="bg-white/20 border-white/30 text-white hover:bg-white/30 relative"
              >
                <Bell className="h-4 w-4 mr-2" />
                Notificações
                {unreadNotifications.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs">
                    {unreadNotifications.length}
                  </Badge>
                )}
              </Button>
              
              {/* Province selector */}
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <Select value={selectedProvince} onValueChange={handleProvinceChange}>
                  <SelectTrigger className="bg-white/20 backdrop-blur-sm border-white/30 text-white w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.keys(PROVINCE_CITY_MAP).map((province) => (
                      <SelectItem key={province} value={province}>
                        {province}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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

      {/* Main Content with Tabs */}
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4">
              <TabsTrigger value="calendar" className="flex items-center gap-2">
                <CalendarIcon className="h-4 w-4" />
                Calendário
              </TabsTrigger>
              <TabsTrigger value="crops" className="flex items-center gap-2">
                <Leaf className="h-4 w-4" />
                Culturas
              </TabsTrigger>
              <TabsTrigger value="pests" className="flex items-center gap-2">
                <Bug className="h-4 w-4" />
                Pragas
              </TabsTrigger>
              <TabsTrigger value="analytics" className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                Análises
              </TabsTrigger>
            </TabsList>

            {/* Calendar Tab */}
            <TabsContent value="calendar">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Enhanced Calendar Section */}
                <div className="lg:col-span-2">
                  <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CalendarIcon className="h-6 w-6 text-green-600" />
                          Calendário de Atividades Agrícolas
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setShowCropWizard(true)}
                          className="flex items-center gap-2"
                        >
                          <Target className="h-4 w-4 mr-2" />
                          Assistente de Culturas
                        </Button>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {/* Enhanced Calendar Component */}
                        <div className="bg-white rounded-lg border shadow-sm p-4">
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            className="rounded-md"
                            // Enhanced calendar with activity indicators
                            modifiers={{
                              irrigation: agriculturalData.irrigation,
                              planting: agriculturalData.planting,
                              harvest: agriculturalData.harvest,
                              pestAlert: agriculturalData.pestAlert,
                              cropPlanning: agriculturalData.cropPlanning
                            }}
                            modifiersStyles={{
                              irrigation: { backgroundColor: '#dbeafe', color: '#1e40af' },
                              planting: { backgroundColor: '#dcfce7', color: '#166534' },
                              harvest: { backgroundColor: '#fef3c7', color: '#92400e' },
                              pestAlert: { backgroundColor: '#fee2e2', color: '#dc2626' },
                              cropPlanning: { backgroundColor: '#f3e8ff', color: '#7c3aed' }
                            }}
                          />
                        </div>
                        
                        {/* Enhanced Legend */}
                        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
                          {Object.entries(ACTIVITY_TYPES).map(([key, activity]) => (
                            <div key={key} className="flex items-center gap-2 p-2 rounded-lg bg-gray-50">
                              <div className={`w-3 h-3 rounded-full ${activity.color.split(' ')[0]}`}></div>
                              <span className="text-sm font-medium">{activity.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Enhanced Sidebar */}
                <div className="space-y-4">
                  
                  {/* Enhanced Weather Widget - Moved to Top */}
                  {currentWeather && (
                    <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
                      <Collapsible 
                        open={!sidebarCollapsed.weather} 
                        onOpenChange={() => toggleSidebarSection('weather')}
                      >
                        <CollapsibleTrigger asChild>
                          <CardHeader className="cursor-pointer hover:bg-gray-50/50 transition-colors">
                            <CardTitle className="flex items-center justify-between text-lg">
                              <div className="flex items-center gap-2">
                                <Sun className="h-5 w-5 text-yellow-500" />
                                Clima Atual em {selectedProvince}
                              </div>
                              {sidebarCollapsed.weather ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
                            </CardTitle>
                          </CardHeader>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <CardContent>
                            <div className="space-y-4">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  {React.createElement(getWeatherIcon(currentWeather.description), { className: `h-12 w-12 ${getTemperatureColorClass(currentWeather.temperature)}` })}
                                  <span className={`text-4xl font-bold ${getTemperatureColorClass(currentWeather.temperature)}`}>{currentWeather.temperature}°C</span>
                                </div>
                                <span className="text-gray-600 capitalize bg-gray-100 px-3 py-1 rounded-full text-sm">
                                  {currentWeather.description}
                                </span>
                              </div>
                              
                              <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center gap-2 p-2 bg-blue-50 rounded-lg">
                                  <Droplets className="h-4 w-4 text-blue-500" />
                                  <div>
                                    <p className="text-xs text-gray-600">Humidade</p>
                                    <p className="font-semibold">{currentWeather.humidity || 65}%</p>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                                  <Wind className="h-4 w-4 text-gray-500" />
                                  <div>
                                    <p className="text-xs text-gray-600">Vento</p>
                                    <p className="font-semibold">{currentWeather.windSpeed ? Math.round(currentWeather.windSpeed * 3.6) : 12} km/h</p>
                                  </div>
                                </div>
                                {/* Add Rainfall if available in currentWeather */}
                                {currentWeather.rainfall && (
                                  <div className="flex items-center gap-2 p-2 bg-blue-50 rounded-lg">
                                    <CloudRain className="h-4 w-4 text-blue-500" />
                                    <div>
                                      <p className="text-xs text-gray-600">Precipitação</p>
                                      <p className="font-semibold">{currentWeather.rainfall} mm</p>
                                    </div>
                                  </div>
                                )}
                              </div>
                              
                              {/* Weather-based recommendations */}
                              <div className="mt-4 p-3 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border">
                                <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                                  <Lightbulb className="h-4 w-4 text-yellow-500" />
                                  Recomendação Climática
                                </h4>
                                <p className="text-sm text-gray-700">
                                  {currentWeather.temperature > 30 
                                    ? "Temperatura alta - aumente a irrigação" 
                                    : currentWeather.temperature < 18 
                                    ? "Temperatura baixa - proteja plantas sensíveis"
                                    : "Condições climáticas favoráveis"}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </CollapsibleContent>
                      </Collapsible>
                    </Card>
                  )}

                  {/* Critical Alerts - New Section */}
                  {notifications.filter(n => n.priority === 'critical' || n.priority === 'high').length > 0 && (
                    <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
                      <Collapsible 
                        open={!sidebarCollapsed.alerts} 
                        onOpenChange={() => toggleSidebarSection('alerts')}
                      >
                        <CollapsibleTrigger asChild>
                          <CardHeader className="cursor-pointer hover:bg-gray-50/50 transition-colors">
                            <CardTitle className="flex items-center justify-between text-lg">
                              <div className="flex items-center gap-2">
                                <AlertTriangle className="h-5 w-5 text-red-500" />
                                Alertas Críticos
                                <Badge variant="destructive" className="ml-2">
                                  {notifications.filter(n => n.priority === 'critical' || n.priority === 'high').length}
                                </Badge>
                              </div>
                              {sidebarCollapsed.alerts ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
                            </CardTitle>
                          </CardHeader>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <CardContent>
                            <div className="space-y-3">
                              {notifications.filter(n => n.priority === 'critical' || n.priority === 'high').map((notif, idx) => (
                                <div
                                  key={idx}
                                  className={`p-3 rounded-lg border-l-4 transition-all hover:shadow-md ${
                                    notif.priority === 'critical' 
                                      ? 'bg-red-50 border-red-500' 
                                      : 'bg-orange-50 border-orange-500'
                                  }`}
                                >
                                  <div className="flex items-start gap-3">
                                    {React.createElement(notif.icon, { className: `h-5 w-5 ${notif.color}` })}
                                    <div className="flex-1">
                                      <h4 className="font-semibold text-sm">{notif.title}</h4>
                                      <p className="text-xs text-gray-600 mt-1">{notif.message}</p>
                                      {notif.action && (
                                        <p className="text-xs font-medium mt-2 text-blue-600">
                                          Ação: {notif.action}
                                        </p>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </CollapsibleContent>
                      </Collapsible>
                    </Card>
                  )}

                  {/* Planting Recommendations - New Section */}
                  {selectedCrops.length > 0 && (
                    <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
                      <Collapsible 
                        open={!sidebarCollapsed.planting} 
                        onOpenChange={() => toggleSidebarSection('planting')}
                      >
                        <CollapsibleTrigger asChild>
                          <CardHeader className="cursor-pointer hover:bg-gray-50/50 transition-colors">
                            <CardTitle className="flex items-center justify-between text-lg">
                              <div className="flex items-center gap-2">
                                <Sprout className="h-5 w-5 text-green-500" />
                                Recomendações de Plantio
                              </div>
                              {sidebarCollapsed.planting ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
                            </CardTitle>
                          </CardHeader>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <CardContent>
                            <div className="space-y-3">
                              {selectedCrops.map(cropId => {
                                const crop = getCropById(cropId);
                                if (!crop) return null;
                                const optimalDate = calculateOptimalPlantingDate(crop, forecast, new Date().getMonth() + 2); // Example: target harvest in 2 months
                                return (
                                  <div key={cropId} className="p-3 rounded-lg border-l-4 border-green-500 bg-green-50">
                                    <h4 className="font-semibold text-sm">{crop.namePortuguese}</h4>
                                    <p className="text-xs text-gray-600 mt-1">
                                      Plantio Ótimo: {optimalDate.plantingDate.toLocaleDateString('pt-PT')}
                                    </p>
                                    <p className="text-xs text-gray-600">
                                      Colheita Estimada: {optimalDate.harvestDate.toLocaleDateString('pt-PT')}
                                    </p>
                                    <Badge variant="outline" className="mt-2 text-xs">
                                      Confiança: {(optimalDate.confidence * 100).toFixed(0)}%
                                    </Badge>
                                  </div>
                                );
                              })}
                            </div>
                          </CardContent>
                        </CollapsibleContent>
                      </Collapsible>
                    </Card>
                  )}

                  {/* Market Analysis - Placeholder */}
                  <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
                    <Collapsible 
                      open={!sidebarCollapsed.market} 
                      onOpenChange={() => toggleSidebarSection('market')}
                    >
                      <CollapsibleTrigger asChild>
                        <CardHeader className="cursor-pointer hover:bg-gray-50/50 transition-colors">
                          <CardTitle className="flex items-center justify-between text-lg">
                            <div className="flex items-center gap-2">
                              <BarChart3 className="h-5 w-5 text-blue-500" />
                              Análise de Mercado
                            </div>
                            {sidebarCollapsed.market ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
                          </CardTitle>
                        </CardHeader>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <CardContent>
                          <p className="text-sm text-gray-600">Em breve: Insights sobre preços de culturas e demanda de mercado.</p>
                        </CardContent>
                      </CollapsibleContent>
                    </Collapsible>
                  </Card>

                  {/* Irrigation Scheduler - Placeholder */}
                  <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
                    <Collapsible 
                      open={!sidebarCollapsed.irrigation} 
                      onOpenChange={() => toggleSidebarSection('irrigation')}
                    >
                      <CollapsibleTrigger asChild>
                        <CardHeader className="cursor-pointer hover:bg-gray-50/50 transition-colors">
                          <CardTitle className="flex items-center justify-between text-lg">
                            <div className="flex items-center gap-2">
                              <Droplets className="h-5 w-5 text-blue-500" />
                              Programação de Irrigação
                            </div>
                            {sidebarCollapsed.irrigation ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
                          </CardTitle>
                        </CardHeader>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <CardContent>
                          <p className="text-sm text-gray-600">Em breve: Ferramenta para otimizar a programação de irrigação.</p>
                        </CardContent>
                      </CollapsibleContent>
                    </Collapsible>
                  </Card>

                  {/* Financial Planner - Placeholder */}
                  <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
                    <Collapsible 
                      open={!sidebarCollapsed.financial} 
                      onOpenChange={() => toggleSidebarSection('financial')}
                    >
                      <CollapsibleTrigger asChild>
                        <CardHeader className="cursor-pointer hover:bg-gray-50/50 transition-colors">
                          <CardTitle className="flex items-center justify-between text-lg">
                            <div className="flex items-center gap-2">
                              <Gauge className="h-5 w-5 text-yellow-500" />
                              Planejamento Financeiro
                            </div>
                            {sidebarCollapsed.financial ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
                          </CardTitle>
                        </CardHeader>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <CardContent>
                          <p className="text-sm text-gray-600">Em breve: Ferramentas para gestão financeira da sua fazenda.</p>
                        </CardContent>
                      </CollapsibleContent>
                    </Collapsible>
                  </Card>

                  {/* Soil Health Monitor - Placeholder */}
                  <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
                    <Collapsible 
                      open={!sidebarCollapsed.soil} 
                      onOpenChange={() => toggleSidebarSection('soil')}
                    >
                      <CollapsibleTrigger asChild>
                        <CardHeader className="cursor-pointer hover:bg-gray-50/50 transition-colors">
                          <CardTitle className="flex items-center justify-between text-lg">
                            <div className="flex items-center gap-2">
                              <Shield className="h-5 w-5 text-green-500" />
                              Monitor de Saúde do Solo
                            </div>
                            {sidebarCollapsed.soil ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
                          </CardTitle>
                        </CardHeader>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <CardContent>
                          <p className="text-sm text-gray-600">Em breve: Análise e recomendações para a saúde do solo.</p>
                        </CardContent>
                      </CollapsibleContent>
                    </Collapsible>
                  </Card>

                  {/* Selected Date Activities */}
                  <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
                    <Collapsible 
                      open={!sidebarCollapsed.activities} 
                      onOpenChange={() => toggleSidebarSection('activities')}
                    >
                      <CollapsibleTrigger asChild>
                        <CardHeader className="cursor-pointer hover:bg-gray-50/50 transition-colors">
                          <CardTitle className="text-lg flex items-center justify-between">
                            <span>
                              {selectedDate.toLocaleDateString('pt-PT', { 
                                weekday: 'long', 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric' 
                              })}
                            </span>
                            {sidebarCollapsed.activities ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
                          </CardTitle>
                        </CardHeader>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <CardContent>
                          {selectedDateActivities.length > 0 ? (
                            <div className="space-y-3">
                              {selectedDateActivities.map((activity, idx) => (
                                <div key={idx} className={`p-3 rounded-lg ${activity.color} border-l-4 ${activity.borderColor} transition-all hover:shadow-md`}>
                                  <div className="flex items-center gap-2">
                                    <activity.icon className="h-5 w-5" />
                                    <span className="font-semibold">{activity.label}</span>
                                  </div>
                                </div>
                              ))}
                              
                              {/* Pest risk indicator for selected date */}
                              {pestRisk.level !== 'low' && (
                                <div className={`p-3 rounded-lg border-l-4 ${
                                  pestRisk.level === 'critical' ? 'bg-red-100 border-red-500 text-red-900' :
                                  pestRisk.level === 'high' ? 'bg-orange-100 border-orange-500 text-orange-900' :
                                  'bg-yellow-100 border-yellow-500 text-yellow-900'
                                }`}>
                                  <div className="flex items-center gap-2">
                                    <Bug className="h-5 w-5" />
                                    <span className="font-semibold">Risco de Pragas: {pestRisk.level}</span>
                                  </div>
                                  <p className="text-sm mt-1">{pestRisk.pests.length} pragas ativas</p>
                                </div>
                              )}
                            </div>
                          ) : (
                            <p className="text-gray-500 text-center py-4">
                              Nenhuma atividade programada para este dia
                            </p>
                          )}
                        </CardContent>
                      </CollapsibleContent>
                    </Collapsible>
                  </Card>

                  {/* Enhanced Recommendations */}
                  {recommendations.length > 0 && (
                    <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
                      <Collapsible 
                        open={!sidebarCollapsed.recommendations} 
                        onOpenChange={() => toggleSidebarSection('recommendations')}
                      >
                        <CollapsibleTrigger asChild>
                          <CardHeader className="cursor-pointer hover:bg-gray-50/50 transition-colors">
                            <CardTitle className="flex items-center justify-between text-lg">
                              <div className="flex items-center gap-2">
                                <Star className="h-5 w-5 text-yellow-500" />
                                Recomendações IA
                              </div>
                              {sidebarCollapsed.recommendations ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
                            </CardTitle>
                          </CardHeader>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <CardContent>
                            <div className="space-y-3">
                              {recommendations.slice(0, 3).map((rec, idx) => (
                                <div
                                  key={idx}
                                  className={`p-3 rounded-lg border-l-4 transition-all hover:shadow-md ${
                                    rec.type === 'warning' 
                                      ? 'bg-orange-50 border-orange-500' 
                                      : rec.type === 'success'
                                      ? 'bg-green-50 border-green-500'
                                      : 'bg-blue-50 border-blue-500'
                                  }`}
                                >
                                  <div className="flex items-start gap-3">
                                    <span className="text-lg">{rec.icon}</span>
                                    <div className="flex-1">
                                      <h4 className="font-semibold text-sm">{rec.title}</h4>
                                      <p className="text-xs text-gray-600 mt-1">{rec.description}</p>
                                      {rec.action && (
                                        <p className="text-xs font-medium mt-2 text-blue-600">
                                          Ação: {rec.action}
                                        </p>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </CollapsibleContent>
                      </Collapsible>
                    </Card>
                  )}
                </div>
              </div>
            </TabsContent>

            {/* Crops Tab - Crop Planning Wizard */}
            <TabsContent value="crops">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Leaf className="h-6 w-6 text-green-600" />
                      Culturas Selecionadas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {selectedCrops.map(cropId => {
                        const crop = getCropById(cropId);
                        if (!crop) return null;
                        
                        return (
                          <div key={cropId} className="p-4 border rounded-lg bg-green-50">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="font-semibold">{crop.namePortuguese}</h3>
                              <Badge variant="outline">{crop.category}</Badge>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <p className="text-gray-600">Plantio:</p>
                                <p className="font-medium">
                                  {crop.plantingMonths.map(m => 
                                    new Date(2024, m).toLocaleDateString('pt-PT', { month: 'short' })
                                  ).join(', ')}
                                </p>
                              </div>
                              <div>
                                <p className="text-gray-600">Colheita:</p>
                                <p className="font-medium">
                                  {crop.harvestMonths.map(m => 
                                    new Date(2024, m).toLocaleDateString('pt-PT', { month: 'short' })
                                  ).join(', ')}
                                </p>
                              </div>
                              <div>
                                <p className="text-gray-600">Ciclo:</p>
                                <p className="font-medium">{crop.growingPeriodDays} dias</p>
                              </div>
                              <div>
                                <p className="text-gray-600">Dificuldade:</p>
                                <p className="font-medium capitalize">{crop.difficulty}</p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                      
                      <Button 
                        onClick={() => setShowCropWizard(true)}
                        className="w-full"
                        variant="outline"
                      >
                        <Target className="h-4 w-4 mr-2" />
                        Adicionar/Editar Culturas
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-6 w-6 text-blue-600" />
                      Recomendações de Rotação
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {selectedCrops.length > 0 && (() => {
                        const currentCrop = getCropById(selectedCrops[0]);
                        if (!currentCrop) return null;
                        
                        const rotationRecs = generateRotationRecommendations(
                          currentCrop,
                          selectedCrops.slice(1),
                          selectedProvince
                        );
                        
                        return rotationRecs.slice(0, 3).map((rec, idx) => (
                          <div key={idx} className="p-3 border rounded-lg bg-blue-50">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold">{rec.crop.namePortuguese}</h4>
                              <Badge variant="secondary">Score: {rec.score}</Badge>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">{rec.reason}</p>
                            <div className="flex flex-wrap gap-1">
                              {rec.benefits.slice(0, 2).map((benefit, bidx) => (
                                <Badge key={bidx} variant="outline" className="text-xs">
                                  {benefit}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        ));
                      })()}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Pests Tab */}
            <TabsContent value="pests">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Bug className="h-6 w-6 text-red-600" />
                      Pragas Ativas em {selectedProvince}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {pestAlerts.map((pest, idx) => (
                        <div
                          key={idx}
                          className={`p-4 border rounded-lg cursor-pointer transition-all hover:shadow-md ${
                            pest.riskLevel === 'critical' 
                              ? 'bg-red-50 border-red-200' 
                              : pest.riskLevel === 'high'
                              ? 'bg-orange-50 border-orange-200'
                              : 'bg-yellow-50 border-yellow-200'
                          }`}
                          onClick={() => window.open(pest.pestPageUrl, '_blank')}
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="font-semibold">{pest.namePortuguese}</h3>
                              <p className="text-sm text-gray-600">{pest.name}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge 
                                variant={pest.riskLevel === 'critical' ? 'destructive' : 'secondary'}
                              >
                                {pest.riskLevel}
                              </Badge>
                              <ExternalLink className="h-4 w-4 text-gray-400" />
                            </div>
                          </div>
                          
                          <p className="text-sm text-gray-700 mb-3">{pest.description}</p>
                          
                          <div className="space-y-2">
                            <div>
                              <p className="text-xs font-medium text-gray-600">Culturas Afetadas:</p>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {pest.affectedCrops.slice(0, 3).map((crop, cidx) => (
                                  <Badge key={cidx} variant="outline" className="text-xs">
                                    {crop}
                                  </Badge>
                                ))}
                                {pest.affectedCrops.length > 3 && (
                                  <Badge variant="outline" className="text-xs">
                                    +{pest.affectedCrops.length - 3}
                                  </Badge>
                                )}
                              </div>
                            </div>
                            
                            <div>
                              <p className="text-xs font-medium text-gray-600">Condições Favoráveis:</p>
                              <p className="text-xs text-gray-700">
                                {pest.temperature.min}°C - {pest.temperature.max}°C, 
                                {pest.humidity.min}% - {pest.humidity.max}% humidade
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                      
                      {pestAlerts.length === 0 && (
                        <div className="text-center py-8 text-gray-500">
                          <Bug className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                          <p>Nenhuma praga ativa detectada</p>
                          <p className="text-sm">Condições atuais não favorecem pragas conhecidas</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-6 w-6 text-green-600" />
                      Medidas Preventivas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {pestAlerts.length > 0 ? (
                        pestAlerts.slice(0, 2).map((pest, idx) => (
                          <div key={idx} className="p-4 border rounded-lg bg-green-50">
                            <h4 className="font-semibold mb-3">{pest.namePortuguese}</h4>
                            
                            <div className="space-y-3">
                              <div>
                                <h5 className="text-sm font-medium text-gray-700 mb-2">Prevenção:</h5>
                                <ul className="text-sm text-gray-600 space-y-1">
                                  {pest.prevention.slice(0, 3).map((prev, pidx) => (
                                    <li key={pidx} className="flex items-start gap-2">
                                      <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                                      {prev}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              
                              <div>
                                <h5 className="text-sm font-medium text-gray-700 mb-2">Tratamento:</h5>
                                <ul className="text-sm text-gray-600 space-y-1">
                                  {pest.treatment.slice(0, 2).map((treat, tidx) => (
                                    <li key={tidx} className="flex items-start gap-2">
                                      <Zap className="h-3 w-3 text-blue-500 mt-0.5 flex-shrink-0" />
                                      {treat}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="text-center py-8 text-gray-500">
                          <Shield className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                          <p>Mantenha as práticas preventivas gerais</p>
                          <ul className="text-sm mt-4 space-y-2 text-left">
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              Monitoramento regular das culturas
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              Rotação de culturas
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              Controle de ervas daninhas
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-6 w-6 text-blue-600" />
                      Resumo Mensal
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-blue-50 rounded-lg text-center">
                          <p className="text-2xl font-bold text-blue-600">{agriculturalData.irrigation.length}</p>
                          <p className="text-sm text-gray-600">Irrigações Programadas</p>
                        </div>
                        <div className="p-4 bg-green-50 rounded-lg text-center">
                          <p className="text-2xl font-bold text-green-600">{agriculturalData.planting.length}</p>
                          <p className="text-sm text-gray-600">Plantios Programados</p>
                        </div>
                        <div className="p-4 bg-yellow-50 rounded-lg text-center">
                          <p className="text-2xl font-bold text-yellow-600">{agriculturalData.harvest.length}</p>
                          <p className="text-sm text-gray-600">Colheitas Programadas</p>
                        </div>
                        <div className="p-4 bg-red-50 rounded-lg text-center">
                          <p className="text-2xl font-bold text-red-600">{pestAlerts.length}</p>
                          <p className="text-sm text-gray-600">Alertas de Pragas</p>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <h4 className="font-semibold mb-3">Distribuição de Atividades</h4>
                        <div className="space-y-2">
                          {Object.entries(agriculturalData).map(([type, activities]) => {
                            const total = Object.values(agriculturalData).reduce((sum, acts) => sum + acts.length, 0);
                            const percentage = total > 0 ? (activities.length / total) * 100 : 0;
                            const activityType = ACTIVITY_TYPES[type];
                            
                            return (
                              <div key={type} className="flex items-center gap-3">
                                <div className="flex items-center gap-2 w-32">
                                  <activityType.icon className="h-4 w-4" />
                                  <span className="text-sm">{activityType.label}</span>
                                </div>
                                <div className="flex-1 bg-gray-200 rounded-full h-2">
                                  <div 
                                    className={`h-2 rounded-full ${activityType.color.split(' ')[0]}`}
                                    style={{ width: `${percentage}%` }}
                                  ></div>
                                </div>
                                <span className="text-sm font-medium w-12">{activities.length}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-6 w-6 text-green-600" />
                      Insights e Tendências
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Lightbulb className="h-4 w-4 text-yellow-500" />
                          Análise Inteligente
                        </h4>
                        <ul className="text-sm space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                            <span>
                              {selectedCrops.length > 1 
                                ? "Boa diversificação de culturas detectada" 
                                : "Considere diversificar suas culturas"}
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Info className="h-4 w-4 text-blue-500 mt-0.5" />
                            <span>
                              {pestAlerts.length === 0 
                                ? "Condições atuais não favorecem pragas" 
                                : `${pestAlerts.length} pragas requerem atenção`}
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <TrendingUp className="h-4 w-4 text-green-500 mt-0.5" />
                            <span>
                              Calendário otimizado para {selectedProvince}
                            </span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold mb-3">Próximas Ações Recomendadas</h4>
                        <div className="space-y-2">
                          {recommendations.slice(0, 4).map((rec, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-2 bg-gray-50 rounded">
                              <span className="text-lg">{rec.icon}</span>
                              <div className="flex-1">
                                <p className="text-sm font-medium">{rec.title}</p>
                                <p className="text-xs text-gray-600">{rec.action}</p>
                              </div>
                              <Badge 
                                variant={rec.priority === 'high' ? 'destructive' : 'secondary'}
                                className="text-xs"
                              >
                                {rec.priority}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Crop Planning Wizard Dialog */}
      <Dialog open={showCropWizard} onOpenChange={setShowCropWizard}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Target className="h-6 w-6 text-green-600" />
              Assistente de Planejamento de Culturas
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3">Culturas Adequadas para {selectedProvince}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {getSuitableCrops(selectedProvince, new Date().getMonth()).map(crop => (
                  <div 
                    key={crop.id} 
                    className={`p-4 border rounded-lg cursor-pointer transition-all hover:shadow-md ${
                      selectedCrops.includes(crop.id) 
                        ? 'bg-green-50 border-green-500' 
                        : 'bg-white border-gray-200 hover:border-green-300'
                    }`}
                    onClick={() => {
                      setSelectedCrops(prev => 
                        prev.includes(crop.id) 
                          ? prev.filter(id => id !== crop.id)
                          : [...prev, crop.id]
                      );
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">{crop.namePortuguese}</h4>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{crop.category}</Badge>
                        {selectedCrops.includes(crop.id) && (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        )}
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-3">{crop.nutritionalValue}</p>
                    
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="text-gray-500">Ciclo:</span>
                        <span className="ml-1 font-medium">{crop.growingPeriodDays} dias</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Dificuldade:</span>
                        <span className="ml-1 font-medium capitalize">{crop.difficulty}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Valor:</span>
                        <span className="ml-1 font-medium capitalize">{crop.marketValue}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Água:</span>
                        <span className="ml-1 font-medium capitalize">{crop.waterRequirement}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={() => setShowCropWizard(false)}>
                Cancelar
              </Button>
              <Button onClick={() => setShowCropWizard(false)}>
                Aplicar Seleção
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Smart Notifications Dialog */}
      <Dialog open={showNotifications} onOpenChange={setShowNotifications}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Bell className="h-6 w-6 text-blue-600" />
              Notificações Inteligentes
              {unreadNotifications.length > 0 && (
                <Badge variant="destructive">{unreadNotifications.length} novas</Badge>
              )}
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            {notifications.length > 0 ? (
              notifications.map(notification => (
                <div 
                  key={notification.id}
                  className={`p-4 border rounded-lg transition-all hover:shadow-md cursor-pointer ${
                    notification.read ? 'bg-gray-50 border-gray-200' : 'bg-white border-blue-200'
                  }`}
                  onClick={() => markNotificationAsRead(notification.id)}
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-full ${
                      notification.priority === 'critical' ? 'bg-red-100' :
                      notification.priority === 'high' ? 'bg-orange-100' :
                      notification.priority === 'medium' ? 'bg-yellow-100' :
                      'bg-blue-100'
                    }`}>
                      <notification.icon className={`h-4 w-4 ${notification.color}`} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-sm">{notification.title}</h4>
                        <Badge 
                          variant={notification.priority === 'critical' ? 'destructive' : 'secondary'}
                          className="text-xs"
                        >
                          {notification.priority}
                        </Badge>
                        {!notification.read && (
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        )}
                      </div>
                      
                      <p className="text-sm text-gray-700 mb-2">{notification.message}</p>
                      
                      {notification.action && (
                        <p className="text-xs font-medium text-blue-600">
                          Ação recomendada: {notification.action}
                        </p>
                      )}
                      
                      <p className="text-xs text-gray-500 mt-2">
                        {notification.date.toLocaleDateString('pt-PT')} às {notification.date.toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                <Bell className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p>Nenhuma notificação disponível</p>
              </div>
            )}
          </div>
          
          <div className="flex justify-end gap-3 mt-6">
            <Button 
              variant="outline" 
              onClick={() => {
                setNotifications(prev => prev.map(n => ({ ...n, read: true })));
              }}
            >
              Marcar Todas como Lidas
            </Button>
            <Button onClick={() => setShowNotifications(false)}>
              Fechar
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="bg-gray-50 border-t py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center items-center gap-8 mb-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Zap className="h-4 w-4 text-yellow-500" />
              <span>Calendário Inteligente</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Cloud className="h-4 w-4 text-blue-500" />
              <span>Baseado em Dados Meteorológicos</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Target className="h-4 w-4 text-green-500" />
              <span>IA Agrícola</span>
            </div>
          </div>
          <p className="text-sm text-gray-500">
            © 2025 Digitalzango Calendário Agrícola. Todos os direitos reservados.
            <br />
            Desenvolvido por Digitalzango
          </p>
        </div>
      </footer>
    </div>
  );
};

export default EnhancedCalendarioPage;



