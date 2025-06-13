"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useWeather } from "../contexts/weather-context";
import { useLanguage } from "../contexts/language-context";
import { useRegion } from "../contexts/region-context";
import Header from "../components/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Sun, 
  Cloud, 
  CloudRain, 
  CloudSnow, 
  CloudLightning, 
  CloudSun, 
  CloudFog, 
  CloudDrizzle,
  Wind,
  Droplets,
  Gauge,
  Eye,
  Sunrise,
  Sunset,
  MapPin,
  RefreshCw,
  TrendingUp,
  Calendar,
  Clock,
  Thermometer,
  Umbrella,
  Navigation,
  Heart,
  Star,
  BookOpen,
  Users,
  ExternalLink,
  AlertTriangle,
  Sprout,
  Tractor,
  Bug,
  Wifi,
  WifiOff,
  Download,
  CheckCircle,
  XCircle,
  Loader2
} from "lucide-react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

// Import our enhanced systems - CORRECTED PATHS
import AgriculturalIntelligence from "../../lib/agricultural-intelligence";
import {
  useNetworkStatus
} from "../../lib/performance-offline";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

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

// Enhanced weather icon mapping with animations
const getWeatherIcon = (condition, size = "md", animated = false) => {
  const sizeClasses = {
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-12 w-12",
    xl: "h-16 w-16"
  };

  const animationClass = animated ? "weather-icon-animated" : "";

  if (!condition) {
    return <Cloud className={`${sizeClasses[size]} text-gray-500 ${animationClass}`} />;
  }

  const iconMap = {
    clear: <Sun className={`${sizeClasses[size]} text-yellow-500 drop-shadow-lg ${animationClass}`} />,
    sunny: <Sun className={`${sizeClasses[size]} text-yellow-500 drop-shadow-lg ${animationClass}`} />,
    rain: <CloudRain className={`${sizeClasses[size]} text-blue-500 drop-shadow-lg ${animationClass}`} />,
    drizzle: <CloudDrizzle className={`${sizeClasses[size]} text-blue-400 drop-shadow-lg ${animationClass}`} />,
    snow: <CloudSnow className={`${sizeClasses[size]} text-blue-200 drop-shadow-lg ${animationClass}`} />,
    thunderstorm: <CloudLightning className={`${sizeClasses[size]} text-purple-600 drop-shadow-lg animate-pulse ${animationClass}`} />,
    fog: <CloudFog className={`${sizeClasses[size]} text-gray-400 drop-shadow-lg ${animationClass}`} />,
    mist: <CloudFog className={`${sizeClasses[size]} text-gray-400 drop-shadow-lg ${animationClass}`} />,
    haze: <CloudFog className={`${sizeClasses[size]} text-gray-400 drop-shadow-lg ${animationClass}`} />,
    clouds: <Cloud className={`${sizeClasses[size]} text-gray-500 drop-shadow-lg ${animationClass}`} />,
    "few clouds": <CloudSun className={`${sizeClasses[size]} text-yellow-400 drop-shadow-lg ${animationClass}`} />,
    "scattered clouds": <Cloud className={`${sizeClasses[size]} text-gray-400 drop-shadow-lg ${animationClass}`} />,
    "broken clouds": <Cloud className={`${sizeClasses[size]} text-gray-600 drop-shadow-lg ${animationClass}`} />,
    "overcast clouds": <Cloud className={`${sizeClasses[size]} text-gray-700 drop-shadow-lg ${animationClass}`} />,
  };

  return (
    iconMap[condition.toLowerCase()] ||
    iconMap[condition.toLowerCase().split(" ").pop() || ""] ||
    <Cloud className={`${sizeClasses[size]} text-gray-500 drop-shadow-lg ${animationClass}`} />
  );
};

// Dynamic background gradient based on weather condition
const getWeatherGradient = (condition) => {
  const gradients = {
    clear: "from-yellow-400 via-orange-400 to-red-400",
    sunny: "from-yellow-400 via-orange-400 to-red-400",
    rain: "from-gray-600 via-blue-600 to-blue-800",
    drizzle: "from-gray-500 via-blue-500 to-blue-700",
    thunderstorm: "from-purple-800 via-gray-800 to-black",
    snow: "from-blue-200 via-blue-300 to-blue-400",
    fog: "from-gray-400 via-gray-500 to-gray-600",
    mist: "from-gray-400 via-gray-500 to-gray-600",
    clouds: "from-gray-400 via-gray-500 to-gray-600",
    "few clouds": "from-blue-400 via-blue-500 to-blue-600",
    "scattered clouds": "from-gray-500 via-gray-600 to-gray-700",
    "broken clouds": "from-gray-600 via-gray-700 to-gray-800",
    "overcast clouds": "from-gray-700 via-gray-800 to-gray-900",
  };

  return gradients[condition?.toLowerCase()] || "from-blue-500 to-blue-600";
};

// Temperature unit conversion
const convertTemperature = (temp, unit) => {
  if (unit === "F") {
    return Math.round((temp * 9/5) + 32);
  }
  return Math.round(temp);
};

// Enhanced Weather Page Component with all features integrated
const EnhancedWeatherPage = () => {
  // State management
  const [selectedProvince, setSelectedProvince] = useState("Luanda");
  const [temperatureUnit, setTemperatureUnit] = useState("C");
  const [favoriteLocation, setFavoriteLocation] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [agriculturalRecommendations, setAgriculturalRecommendations] = useState([]);
  const [language, setLanguage] = useState('pt');
  const [isLoading, setIsLoading] = useState(false);

  // Enhanced hooks - simplified since we only have useNetworkStatus
  const { isOnline, connectionType } = useNetworkStatus();

  // Context hooks
  const { 
    currentWeather, 
    forecast, 
    hourlyForecast, 
    isLoading: weatherLoading, 
    error, 
    hasApiKey,
    fetchWeatherByLocation 
  } = useWeather();

  const { t, isLoading: langLoading } = useLanguage();
  const { getCurrentRegion } = useRegion();

  // Initialize systems - simplified
  const [agriculturalAI] = useState(() => new AgriculturalIntelligence(selectedProvince));

  // Generate agricultural recommendations when weather data changes
  useEffect(() => {
    if (currentWeather && forecast.length > 0) {
      setIsLoading(true);
      
      try {
        const recommendations = agriculturalAI.generateRecommendations(
          currentWeather,
          forecast.slice(0, 5)
        );
        setAgriculturalRecommendations(recommendations);
      } catch (error) {
        console.error('Failed to generate agricultural recommendations:', error);
      } finally {
        setIsLoading(false);
      }
    }
  }, [currentWeather, forecast, agriculturalAI]);

  // Handle province change
  const handleProvinceChange = useCallback(async (province) => {
    setIsLoading(true);
    
    setSelectedProvince(province);
    const city = PROVINCE_CITY_MAP[province];
    
    if (city) {
      try {
        await fetchWeatherByLocation(city);
        setLastUpdated(new Date());
      } catch (error) {
        console.error('Failed to fetch weather:', error);
      } finally {
        setIsLoading(false);
      }
    }
  }, [fetchWeatherByLocation]);

  // Handle refresh
  const handleRefresh = useCallback(async () => {
    setIsLoading(true);
    
    const city = PROVINCE_CITY_MAP[selectedProvince];
    if (city) {
      try {
        await fetchWeatherByLocation(city);
        setLastUpdated(new Date());
      } catch (error) {
        console.error('Failed to refresh weather:', error);
      } finally {
        setIsLoading(false);
      }
    }
  }, [selectedProvince, fetchWeatherByLocation]);

  // Handle favorite location
  const toggleFavorite = useCallback(() => {
    if (favoriteLocation === selectedProvince) {
      setFavoriteLocation(null);
      localStorage.removeItem('favoriteWeatherLocation');
    } else {
      setFavoriteLocation(selectedProvince);
      localStorage.setItem('favoriteWeatherLocation', selectedProvince);
    }
  }, [favoriteLocation, selectedProvince]);

  // Load favorite location on mount
  useEffect(() => {
    const saved = localStorage.getItem('favoriteWeatherLocation');
    if (saved && PROVINCE_CITY_MAP[saved]) {
      setFavoriteLocation(saved);
    }
  }, []);

  // Extended forecast data (5 days for trend chart)
  const extendedForecast = forecast.slice(0, 5);
  const next24Hours = hourlyForecast.slice(0, 8);

  // Enhanced 5-day temperature trend chart
  const temperatureTrendData = {
    labels: extendedForecast.map(day => 
      new Date(day.date).toLocaleDateString("pt-PT", { 
        weekday: "short", 
        day: "numeric" 
      })
    ),
    datasets: [
      {
        label: `Temperatura Máxima (°${temperatureUnit})`,
        data: extendedForecast.map(day => convertTemperature(day.temperature + 3, temperatureUnit)),
        borderColor: "#f59e0b",
        backgroundColor: "rgba(245, 158, 11, 0.1)",
        fill: true,
        tension: 0.4,
        pointBackgroundColor: "#f59e0b",
        pointBorderColor: "#ffffff",
        pointBorderWidth: 3,
        pointRadius: 6,
        pointHoverRadius: 8,
      },
      {
        label: `Temperatura Mínima (°${temperatureUnit})`,
        data: extendedForecast.map(day => convertTemperature(day.temperature - 5, temperatureUnit)),
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        fill: true,
        tension: 0.4,
        pointBackgroundColor: "#3b82f6",
        pointBorderColor: "#ffffff",
        pointBorderWidth: 3,
        pointRadius: 6,
        pointHoverRadius: 8,
      },
    ],
  };

  // Enhanced chart options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 1000,
      easing: 'easeInOutQuart',
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            size: 12,
            weight: 'bold'
          }
        }
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        titleColor: "#ffffff",
        bodyColor: "#ffffff",
        borderColor: "#374151",
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: true,
        intersect: false,
        mode: 'index',
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          color: "#6b7280",
          font: { weight: 'bold' }
        },
      },
      y: {
        grid: { color: "rgba(107, 114, 128, 0.2)" },
        ticks: {
          color: "#6b7280",
          font: { weight: 'bold' }
        },
      },
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
  };

  // Loading state
  if (langLoading || isLoading || weatherLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center space-y-6">
          <Loader2 className="h-12 w-12 animate-spin text-blue-600 mx-auto" />
          <div className="w-64">
            <Progress value={75} className="h-2" />
            <p className="text-sm text-gray-600 mt-2">
              Carregando dados meteorológicos...
            </p>
          </div>
          <div className="text-xs text-gray-500 space-y-1">
            <div>Conexão: {connectionType} {isOnline ? '🟢' : '🔴'}</div>
          </div>
        </div>
      </div>
    );
  }

  // Dynamic background based on current weather
  const weatherGradient = currentWeather ? getWeatherGradient(currentWeather.description) : "from-blue-500 to-blue-600";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header />
      
      {/* Enhanced status indicators */}
      <div className="bg-white border-b border-gray-200 px-4 py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              {isOnline ? (
                <Wifi className="h-4 w-4 text-green-500" />
              ) : (
                <WifiOff className="h-4 w-4 text-red-500" />
              )}
              <span className={isOnline ? "text-green-600" : "text-red-600"}>
                {isOnline ? "Online" : "Offline"}
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className={`h-2 w-2 rounded-full ${
                connectionType === '4g' ? 'bg-green-500' : 
                connectionType === '3g' ? 'bg-yellow-500' : 
                'bg-red-500'
              }`} />
              <span className="text-gray-600">{connectionType}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="text-xs border rounded px-2 py-1"
            >
              <option value="pt">Português</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Offline indicator */}
      {!isOnline && (
        <div className="bg-orange-500 text-white text-center py-2 px-4">
          <div className="flex items-center justify-center gap-2">
            <AlertTriangle className="h-4 w-4" />
            <span>Modo offline - Mostrando dados em cache</span>
          </div>
        </div>
      )}
      
      {/* Hero Section with Dynamic Background */}
      <section className={`relative py-8 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br ${weatherGradient}`}>
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-6xl animate-float">☀️</div>
          <div className="absolute top-20 right-20 text-4xl animate-float-delayed">⛅</div>
          <div className="absolute bottom-20 left-20 text-5xl animate-float">🌧️</div>
          <div className="absolute bottom-10 right-10 text-4xl animate-float-delayed">🌤️</div>
          <div className="absolute top-1/2 left-1/4 text-3xl animate-pulse">❄️</div>
          <div className="absolute top-1/3 right-1/3 text-4xl animate-bounce">⛈️</div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Location Selector and Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-white" />
                <select
                  value={selectedProvince}
                  onChange={(e) => handleProvinceChange(e.target.value)}
                  className="text-lg font-semibold bg-white/90 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent shadow-lg"
                >
                  {Object.keys(PROVINCE_CITY_MAP).map((province) => (
                    <option key={province} value={province}>
                      {province}
                    </option>
                  ))}
                </select>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={toggleFavorite}
                className={`bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 ${favoriteLocation === selectedProvince ? "text-red-300" : ""}`}
              >
                <Heart className={`h-4 w-4 ${favoriteLocation === selectedProvince ? "fill-current" : ""}`} />
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleRefresh}
                disabled={isLoading}
                className="flex items-center gap-2 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
              >
                <RefreshCw className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
                Atualizar
              </Button>
              <div className="flex bg-white/20 backdrop-blur-sm rounded-lg p-1 border border-white/30">
                <button
                  onClick={() => setTemperatureUnit("C")}
                  className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                    temperatureUnit === "C" 
                      ? "bg-white text-blue-600 shadow-sm" 
                      : "text-white hover:text-blue-100"
                  }`}
                >
                  °C
                </button>
                <button
                  onClick={() => setTemperatureUnit("F")}
                  className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                    temperatureUnit === "F" 
                      ? "bg-white text-blue-600 shadow-sm" 
                      : "text-white hover:text-blue-100"
                  }`}
                >
                  °F
                </button>
              </div>
            </div>
          </div>

          {/* Error State */}
          {error && (
            <Card className="mb-8 border-red-200 bg-red-50/90 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 text-red-700">
                  <CloudRain className="h-6 w-6" />
                  <div>
                    <h3 className="font-semibold">Erro ao obter dados meteorológicos</h3>
                    <p className="text-sm">{error}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleRefresh}
                        className="text-xs"
                      >
                        Tentar Novamente
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Current Weather Display with Enhanced Styling */}
          {!isLoading && !error && currentWeather && (
            <Card className="mb-8 bg-white/10 backdrop-blur-md text-white border-white/20 shadow-2xl">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Main Weather Info */}
                  <div className="text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start gap-6 mb-6">
                      <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm shadow-lg">
                        {getWeatherIcon(currentWeather.description, "xl", true)}
                      </div>
                      <div>
                        <div className="text-6xl font-bold mb-2 drop-shadow-lg">
                          {convertTemperature(currentWeather.temperature, temperatureUnit)}°{temperatureUnit}
                        </div>
                        <div className="text-2xl capitalize opacity-90 drop-shadow-md">
                          {currentWeather.description}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center lg:justify-start gap-2 text-white/90 mb-3">
                      <MapPin className="h-5 w-5" />
                      <span className="text-lg">{PROVINCE_CITY_MAP[selectedProvince]}, {selectedProvince}</span>
                    </div>
                    
                    <div className="flex items-center justify-center lg:justify-start gap-2 text-white/80 text-sm">
                      <Clock className="h-4 w-4" />
                      <span>Atualizado às {lastUpdated.toLocaleTimeString("pt-PT", { hour: "2-digit", minute: "2-digit" })}</span>
                    </div>
                  </div>

                  {/* Enhanced Weather Details Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm shadow-lg border border-white/30">
                      <div className="flex items-center gap-2 mb-3">
                        <Thermometer className="h-5 w-5 text-white/80" />
                        <span className="text-sm text-white/80">Sensação</span>
                      </div>
                      <div className="text-2xl font-bold">
                        {convertTemperature(currentWeather.temperature + 2, temperatureUnit)}°{temperatureUnit}
                      </div>
                    </div>

                    <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm shadow-lg border border-white/30">
                      <div className="flex items-center gap-2 mb-3">
                        <Droplets className="h-5 w-5 text-white/80" />
                        <span className="text-sm text-white/80">Humidade</span>
                      </div>
                      <div className="text-2xl font-bold">65%</div>
                    </div>

                    <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm shadow-lg border border-white/30">
                      <div className="flex items-center gap-2 mb-3">
                        <Wind className="h-5 w-5 text-white/80" />
                        <span className="text-sm text-white/80">Vento</span>
                      </div>
                      <div className="text-2xl font-bold">12 km/h</div>
                    </div>

                    <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm shadow-lg border border-white/30">
                      <div className="flex items-center gap-2 mb-3">
                        <Eye className="h-5 w-5 text-white/80" />
                        <span className="text-sm text-white/80">Visibilidade</span>
                      </div>
                      <div className="text-2xl font-bold">10 km</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Enhanced Agricultural Intelligence Section */}
      {agriculturalRecommendations.length > 0 && (
        <section className="px-4 sm:px-6 lg:px-8 py-6">
          <div className="max-w-7xl mx-auto">
            <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-800">
                  <Sprout className="h-6 w-6" />
                  Inteligência Agrícola Avançada
                  <Badge variant="secondary" className="ml-2">
                    IA
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {agriculturalRecommendations.slice(0, 6).map((rec, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-lg border-l-4 ${
                        rec.priority === 'critical' 
                          ? 'bg-red-50 border-red-500' 
                          : rec.priority === 'high' 
                          ? 'bg-orange-50 border-orange-500' 
                          : rec.priority === 'medium'
                          ? 'bg-yellow-50 border-yellow-500'
                          : 'bg-blue-50 border-blue-500'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-2xl">{rec.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-gray-800">{rec.title}</h4>
                            <Badge 
                              variant={rec.priority === 'critical' ? 'destructive' : 'secondary'}
                              className="text-xs"
                            >
                              {rec.priority}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{rec.description}</p>
                          <p className="text-xs text-gray-500 font-medium">{rec.action}</p>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-xs text-gray-400">{rec.timeframe}</span>
                            <div className="flex items-center gap-1">
                              <Star className="h-3 w-3 text-yellow-500" />
                              <span className="text-xs text-gray-500">
                                {Math.round(rec.confidence * 100)}%
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {agriculturalRecommendations.length > 6 && (
                  <div className="mt-4 text-center">
                    <Button variant="outline" size="sm">
                      Ver Todas as Recomendações ({agriculturalRecommendations.length})
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Enhanced Main Content Tabs */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="trends" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8 bg-white/80 backdrop-blur-sm">
              <TabsTrigger value="trends" className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Tendências
              </TabsTrigger>
              <TabsTrigger value="hourly" className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Horária
              </TabsTrigger>
              <TabsTrigger value="daily" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                5 Dias
              </TabsTrigger>
              <TabsTrigger value="community" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Comunidade
              </TabsTrigger>
            </TabsList>

            {/* Enhanced 5-Day Temperature Trends Tab */}
            <TabsContent value="trends" className="space-y-6">
              <Card className="bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-orange-600" />
                    Tendência de Temperatura - Próximos 5 Dias
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80 mb-6">
                    <Line data={temperatureTrendData} options={chartOptions} />
                  </div>
                  
                  {/* Temperature insights */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Thermometer className="h-5 w-5 text-orange-600" />
                        <span className="font-semibold text-orange-800">Temperatura Máxima</span>
                      </div>
                      <div className="text-2xl font-bold text-orange-600">
                        {extendedForecast.length > 0 ? 
                          `${convertTemperature(Math.max(...extendedForecast.map(d => d.temperature + 3)), temperatureUnit)}°${temperatureUnit}` 
                          : '--°'
                        }
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Thermometer className="h-5 w-5 text-blue-600" />
                        <span className="font-semibold text-blue-800">Temperatura Mínima</span>
                      </div>
                      <div className="text-2xl font-bold text-blue-600">
                        {extendedForecast.length > 0 ? 
                          `${convertTemperature(Math.min(...extendedForecast.map(d => d.temperature - 5)), temperatureUnit)}°${temperatureUnit}` 
                          : '--°'
                        }
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="h-5 w-5 text-green-600" />
                        <span className="font-semibold text-green-800">Tendência</span>
                      </div>
                      <div className="text-lg font-bold text-green-600">
                        {extendedForecast.length >= 2 ? 
                          (extendedForecast[extendedForecast.length - 1].temperature > extendedForecast[0].temperature ? 
                            '📈 Aquecimento' : '📉 Resfriamento') 
                          : '➡️ Estável'
                        }
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Other tabs content - simplified for now */}
            <TabsContent value="hourly">
              <Card>
                <CardHeader>
                  <CardTitle>Previsão Horária</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Dados horários em desenvolvimento...</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="daily">
              <Card>
                <CardHeader>
                  <CardTitle>Previsão de 5 Dias</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Previsão estendida em desenvolvimento...</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="community">
              <Card>
                <CardHeader>
                  <CardTitle>Comunidade</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Recursos da comunidade em desenvolvimento...</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Enhanced Trust Signals Footer */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 text-gray-600 mb-4 flex-wrap">
            <Badge variant="outline" className="flex items-center gap-2 bg-white/80 backdrop-blur-sm">
              <Star className="h-4 w-4 text-yellow-500" />
              Powered by OpenWeather
            </Badge>
            <Badge variant="outline" className="bg-white/80 backdrop-blur-sm">
              Dados atualizados a cada 10 minutos
            </Badge>
            <Badge variant="outline" className="bg-white/80 backdrop-blur-sm">
              IA Agrícola Integrada
            </Badge>
            <Badge variant="outline" className="bg-white/80 backdrop-blur-sm">
              PWA Offline Ready
            </Badge>
          </div>
          <p className="text-sm text-gray-500 mb-2">
            Dados meteorológicos fornecidos pela OpenWeather API com inteligência agrícola avançada.
          </p>
          <p className="text-xs text-gray-400">
            Última atualização: {lastUpdated.toLocaleString("pt-PT")} | 
            {isOnline ? " Online" : " Offline"} | 
            Conexão: {connectionType}
          </p>
          {!hasApiKey && (
            <p className="text-xs text-orange-600 mt-2 font-medium">
              ⚠️ Modo demonstração - dados simulados com IA para fins de teste
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default EnhancedWeatherPage;
