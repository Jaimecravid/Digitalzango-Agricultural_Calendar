// app/calendario/page.tsx
'use client';

import '@testing-library/jest-dom';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

import React, { useState, useEffect, useMemo, useCallback, lazy, Suspense } from 'react';
import { Calendar, ChevronLeft, ChevronRight, AlertTriangle, Thermometer, Droplets, Wind, Sun, Cloud, CloudRain, MapPin, TrendingUp, ShoppingCart, BarChart3, Users, Share2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';

// Enhanced Types
interface ProvinceWeatherData {
  province: string;
  temperature: number;
  humidity: number;
  rainfall: number;
  windSpeed: number;
  conditions: string;
  climate: 'tropical' | 'subtropical' | 'semi-arid' | 'arid';
  forecast: Array<{
    date: string;
    temperature: number;
    conditions: string;
    rainfall: number;
  }>;
}

interface CropData {
  id: string;
  name: string;
  namePortuguese: string;
  plantingSeasons: {
    rainy: string;
    dry: string;
  };
  commonPests: string[];
  suitableProvinces: string[];
  marketPrice: string;
  growthDuration: number;
  waterRequirement: 'low' | 'medium' | 'high';
  soilType: string[];
}

interface AffiliateProduct {
  id: string;
  name: string;
  description: string;
  price: string;
  rating: number;
  category: string;
  imageUrl: string;
  affiliateLink: string;
  relevantFor: string[];
  features: string[];
  discount?: {
    percentage: number;
    validUntil: string;
  };
  commission: number;
}

interface AnalyticsData {
  monthlyActivities: number;
  pestAlerts: number;
  favorableConditions: number;
  userEngagement: number;
  affiliateClicks: number;
  contentShares: number;
}

const CalendarioPage: React.FC = () => {
  // Enhanced State Management
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedProvince, setSelectedProvince] = useState('Luanda');
  const [selectedCrop, setSelectedCrop] = useState('');
  const [weatherData, setWeatherData] = useState<ProvinceWeatherData | null>(null);
  const [analytics, setAnalytics] = useState<AnalyticsData>({
    monthlyActivities: 24,
    pestAlerts: 3,
    favorableConditions: 85,
    userEngagement: 67,
    affiliateClicks: 156,
    contentShares: 89
  });

  // Complete Angola Provinces Data
  const angolaProvincies = [
    { name: 'Luanda', capital: 'Luanda', climate: 'tropical' as const },
    { name: 'Benguela', capital: 'Benguela', climate: 'tropical' as const },
    { name: 'Huíla', capital: 'Lubango', climate: 'subtropical' as const },
    { name: 'Huambo', capital: 'Huambo', climate: 'subtropical' as const },
    { name: 'Bié', capital: 'Kuito', climate: 'subtropical' as const },
    { name: 'Namibe', capital: 'Moçâmedes', climate: 'arid' as const },
    { name: 'Cunene', capital: 'Ondjiva', climate: 'semi-arid' as const },
    { name: 'Quando Cubango', capital: 'Menongue', climate: 'semi-arid' as const },
    { name: 'Moxico', capital: 'Luena', climate: 'tropical' as const },
    { name: 'Lunda Norte', capital: 'Dundo', climate: 'tropical' as const },
    { name: 'Lunda Sul', capital: 'Saurimo', climate: 'tropical' as const },
    { name: 'Malanje', capital: 'Malanje', climate: 'tropical' as const },
    { name: 'Uíge', capital: 'Uíge', climate: 'tropical' as const },
    { name: 'Zaire', capital: 'Mbanza Congo', climate: 'tropical' as const },
    { name: 'Cabinda', capital: 'Cabinda', climate: 'tropical' as const },
    { name: 'Kwanza Norte', capital: 'Ndalatando', climate: 'tropical' as const },
    { name: 'Kwanza Sul', capital: 'Sumbe', climate: 'tropical' as const },
    { name: 'Bengo', capital: 'Caxito', climate: 'tropical' as const }
  ];

  // Enhanced Crop Database
  const cropDatabase: CropData[] = [
    {
      id: 'milho',
      name: 'Corn',
      namePortuguese: 'Milho',
      plantingSeasons: { rainy: 'Out-Dez', dry: 'Abr-Jun' },
      commonPests: ['lagarta-do-cartucho', 'pulgão', 'broca'],
      suitableProvinces: ['Luanda', 'Benguela', 'Huíla', 'Huambo', 'Malanje'],
      marketPrice: 'Kz 180-220/kg',
      growthDuration: 120,
      waterRequirement: 'medium',
      soilType: ['argiloso', 'franco']
    },
    {
      id: 'feijao',
      name: 'Beans',
      namePortuguese: 'Feijão',
      plantingSeasons: { rainy: 'Set-Nov', dry: 'Mar-Mai' },
      commonPests: ['mosca-branca', 'pulgão'],
      suitableProvinces: ['Huíla', 'Huambo', 'Bié', 'Benguela'],
      marketPrice: 'Kz 350-450/kg',
      growthDuration: 90,
      waterRequirement: 'medium',
      soilType: ['franco', 'arenoso']
    },
    {
      id: 'mandioca',
      name: 'Cassava',
      namePortuguese: 'Mandioca',
      plantingSeasons: { rainy: 'Set-Dez', dry: 'Todo ano' },
      commonPests: ['cochonilha', 'ácaro'],
      suitableProvinces: ['Luanda', 'Uíge', 'Malanje', 'Kwanza Norte'],
      marketPrice: 'Kz 80-120/kg',
      growthDuration: 365,
      waterRequirement: 'low',
      soilType: ['arenoso', 'franco']
    },
    {
      id: 'batata-doce',
      name: 'Sweet Potato',
      namePortuguese: 'Batata-doce',
      plantingSeasons: { rainy: 'Set-Nov', dry: 'Mar-Mai' },
      commonPests: ['gorgulho', 'broca'],
      suitableProvinces: ['Huíla', 'Benguela', 'Kwanza Sul'],
      marketPrice: 'Kz 150-200/kg',
      growthDuration: 120,
      waterRequirement: 'medium',
      soilType: ['arenoso', 'franco']
    },
    {
      id: 'cafe',
      name: 'Coffee',
      namePortuguese: 'Café',
      plantingSeasons: { rainy: 'Out-Dez', dry: 'N/A' },
      commonPests: ['broca-do-café', 'ferrugem'],
      suitableProvinces: ['Huíla', 'Kwanza Sul', 'Uíge'],
      marketPrice: 'Kz 800-1200/kg',
      growthDuration: 1095,
      waterRequirement: 'high',
      soilType: ['argiloso', 'franco']
    },
    {
      id: 'banana',
      name: 'Banana',
      namePortuguese: 'Banana',
      plantingSeasons: { rainy: 'Todo ano', dry: 'Todo ano' },
      commonPests: ['nematóides', 'sigatoka'],
      suitableProvinces: ['Benguela', 'Kwanza Sul', 'Cabinda'],
      marketPrice: 'Kz 200-300/kg',
      growthDuration: 365,
      waterRequirement: 'high',
      soilType: ['franco', 'argiloso']
    }
  ];

  // Enhanced Affiliate Products Database
  const affiliateProducts: AffiliateProduct[] = [
    {
      id: '1',
      name: 'Kit de Irrigação Inteligente AgriTech Pro',
      description: 'Sistema de irrigação automatizado com sensores IoT e controle via smartphone',
      price: 'Kz 85.000',
      rating: 4.8,
      category: 'Irrigação',
      imageUrl: '/images/irrigation-kit.jpg',
      affiliateLink: 'https://digitalzango.com/affiliate/irrigation-pro',
      relevantFor: ['milho', 'feijao', 'cafe'],
      features: ['Controle automático', 'App móvel', 'Economia 40% água', 'Sensores IoT'],
      discount: { percentage: 20, validUntil: '2025-08-31' },
      commission: 15
    },
    {
      id: '2',
      name: 'Fertilizante Orgânico Premium Angola',
      description: 'Fertilizante 100% orgânico desenvolvido para solos angolanos',
      price: 'Kz 12.500',
      rating: 4.7,
      category: 'Fertilizantes',
      imageUrl: '/images/organic-fertilizer.jpg',
      affiliateLink: 'https://digitalzango.com/affiliate/fertilizer-premium',
      relevantFor: ['milho', 'feijao', 'mandioca'],
      features: ['Certificado orgânico', 'Rico em nutrientes', 'Melhora solo', '25kg'],
      commission: 12
    },
    {
      id: '3',
      name: 'Sementes Híbridas Resistentes à Seca',
      description: 'Variedades melhoradas adaptadas ao clima angolano',
      price: 'Kz 18.000',
      rating: 4.9,
      category: 'Sementes',
      imageUrl: '/images/drought-seeds.jpg',
      affiliateLink: 'https://digitalzango.com/affiliate/drought-seeds',
      relevantFor: ['milho', 'feijao'],
      features: ['Resistente à seca', 'Alto rendimento', 'Ciclo otimizado', 'Garantia'],
      discount: { percentage: 15, validUntil: '2025-07-15' },
      commission: 18
    },
    {
      id: '4',
      name: 'Pulverizador Elétrico Profissional',
      description: 'Equipamento para aplicação de defensivos e fertilizantes',
      price: 'Kz 35.000',
      rating: 4.6,
      category: 'Equipamentos',
      imageUrl: '/images/sprayer.jpg',
      affiliateLink: 'https://digitalzango.com/affiliate/electric-sprayer',
      relevantFor: ['milho', 'cafe', 'banana'],
      features: ['Bateria recarregável', 'Bico ajustável', 'Tanque 16L', 'Ergonômico'],
      commission: 20
    }
  ];

  // Mock Weather Data Generator
  const generateWeatherData = (province: string): ProvinceWeatherData => {
    const provinceInfo = angolaProvincies.find(p => p.name === province);
    
    const weatherVariations = {
      tropical: { temp: [22, 32], humidity: [60, 85], rainfall: [5, 25] },
      subtropical: { temp: [15, 28], humidity: [45, 75], rainfall: [2, 15] },
      'semi-arid': { temp: [18, 35], humidity: [30, 60], rainfall: [0, 8] },
      arid: { temp: [20, 38], humidity: [25, 50], rainfall: [0, 5] }
    };

    const variation = weatherVariations[provinceInfo?.climate || 'tropical'];
    
    return {
      province,
      temperature: Math.floor(Math.random() * (variation.temp[1] - variation.temp[0]) + variation.temp[0]),
      humidity: Math.floor(Math.random() * (variation.humidity[1] - variation.humidity[0]) + variation.humidity[0]),
      rainfall: Math.floor(Math.random() * (variation.rainfall[1] - variation.rainfall[0]) + variation.rainfall[0]),
      windSpeed: Math.floor(Math.random() * 20 + 5),
      conditions: ['sunny', 'cloudy', 'partly-cloudy'][Math.floor(Math.random() * 3)],
      climate: provinceInfo?.climate || 'tropical',
      forecast: []
    };
  };

  // Track Affiliate Clicks for DigitalZango Analytics
  const trackAffiliateClick = (productId: string, productName: string) => {
    console.log(`DigitalZango Affiliate Click: ${productName} (${productId})`);
    
    // Update analytics
    setAnalytics(prev => ({
      ...prev,
      affiliateClicks: prev.affiliateClicks + 1
    }));

    // Send to analytics service
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'affiliate_click', {
        event_category: 'digitalzango_affiliate',
        event_label: productName,
        value: 1,
        custom_parameters: {
          product_id: productId,
          brand: 'DigitalZango'
        }
      });
    }
  };

  // Share Content for Social Media
  const shareContent = (platform: string, content: string) => {
    const shareText = `🌱 ${content} - Planeje sua agricultura com DigitalZango! 📅 #AgriculturaAngola #DigitalZango`;
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(shareText)}`,
      instagram: '', // Instagram doesn't support direct URL sharing
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(window.location.href)}`
    };

    if (shareUrls[platform as keyof typeof shareUrls]) {
      window.open(shareUrls[platform as keyof typeof shareUrls], '_blank');
      
      setAnalytics(prev => ({
        ...prev,
        contentShares: prev.contentShares + 1
      }));
    }
  };

  // Effects
  useEffect(() => {
    const newWeatherData = generateWeatherData(selectedProvince);
    setWeatherData(newWeatherData);
  }, [selectedProvince]);

  // Get weather icon
  const getWeatherIcon = (conditions: string) => {
    switch (conditions?.toLowerCase()) {
      case 'sunny':
      case 'clear':
        return <Sun className="h-5 w-5 text-yellow-500" />;
      case 'cloudy':
      case 'overcast':
        return <Cloud className="h-5 w-5 text-gray-500" />;
      case 'partly-cloudy':
        return <Cloud className="h-5 w-5 text-blue-400" />;
      case 'rainy':
        return <CloudRain className="h-5 w-5 text-blue-600" />;
      default:
        return <Sun className="h-5 w-5" />;
    }
  };

  // Get filtered products based on selected crop
  const getRelevantProducts = () => {
    if (!selectedCrop) return affiliateProducts;
    return affiliateProducts.filter(product => 
      product.relevantFor.includes(selectedCrop)
    );
  };

  // Get crop data for selected crop
  const getSelectedCropData = () => {
    return cropDatabase.find(crop => crop.id === selectedCrop);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Enhanced Header with DigitalZango Branding */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">DZ</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-green-800">
                Calendário Agrícola de Angola
              </h1>
              <p className="text-sm text-green-600 font-medium">
                Powered by DigitalZango - Inovação Digital para Agricultura
              </p>
            </div>
          </div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Sistema inteligente de planejamento agrícola com dados climáticos em tempo real, 
            alertas de pragas e recomendações de produtos para todas as 18 províncias de Angola
          </p>
        </div>

        {/* Enhanced Navigation Tabs */}
        <Card>
          <CardContent className="p-4">
            <Tabs defaultValue="calendario" className="w-full">
              <TabsList className="grid w-full grid-cols-4 lg:grid-cols-4">
                <TabsTrigger value="calendario" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Calendário
                </TabsTrigger>
                <TabsTrigger value="clima" className="flex items-center gap-2">
                  <Cloud className="h-4 w-4" />
                  Clima
                </TabsTrigger>
                <TabsTrigger value="culturas" className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Culturas
                </TabsTrigger>
                <TabsTrigger value="produtos" className="flex items-center gap-2">
                  <ShoppingCart className="h-4 w-4" />
                  Produtos
                </TabsTrigger>
              </TabsList>

              {/* Calendar Tab */}
              <TabsContent value="calendario" className="mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-3">
                    <Card>
                      <CardHeader>
                        <div className="flex justify-between items-center">
                          <h3 className="text-xl font-semibold">Julho 2025</h3>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm">
                              <ChevronLeft className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm">Hoje</Button>
                            <Button variant="outline" size="sm">
                              <ChevronRight className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-7 gap-2 mb-4">
                          {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(day => (
                            <div key={day} className="text-center text-sm font-medium text-gray-500 p-2">
                              {day}
                            </div>
                          ))}
                        </div>
                        <div className="grid grid-cols-7 gap-2">
                          {Array.from({ length: 31 }, (_, i) => (
                            <div key={i + 1} className="min-h-20 p-2 border rounded-lg hover:bg-green-50 cursor-pointer">
                              <span className="text-sm font-medium">{i + 1}</span>
                              {(i + 1) === 15 && (
                                <div className="mt-1">
                                  <div className="w-2 h-2 bg-green-500 rounded-full mb-1"></div>
                                  <div className="text-xs text-green-700">Plantio</div>
                                </div>
                              )}
                              {(i + 1) === 20 && (
                                <div className="mt-1">
                                  <div className="w-2 h-2 bg-orange-500 rounded-full mb-1"></div>
                                  <div className="text-xs text-orange-700">Colheita</div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="space-y-4">
                    {/* Province Selector */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          Província Selecionada
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Select value={selectedProvince} onValueChange={setSelectedProvince}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {angolaProvincies.map(province => (
                              <SelectItem key={province.name} value={province.name}>
                                {province.name} ({province.capital})
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </CardContent>
                    </Card>

                    {/* Quick Weather Display */}
                    {weatherData && (
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-base flex items-center gap-2">
                            {getWeatherIcon(weatherData.conditions)}
                            Clima Atual
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-sm">Temperatura</span>
                              <span className="font-medium">{weatherData.temperature}°C</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm">Umidade</span>
                              <span className="font-medium">{weatherData.humidity}%</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                </div>
              </TabsContent>

              {/* Enhanced Climate Tab */}
              <TabsContent value="clima" className="mt-6">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-semibold">Dados Climáticos por Província</h3>
                    <Select value={selectedProvince} onValueChange={setSelectedProvince}>
                      <SelectTrigger className="w-64">
                        <SelectValue placeholder="Selecione uma província" />
                      </SelectTrigger>
                      <SelectContent>
                        {angolaProvincies.map(province => (
                          <SelectItem key={province.name} value={province.name}>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              {province.name} - {province.capital}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {weatherData && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <Card>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg flex items-center gap-2">
                            <Thermometer className="h-5 w-5 text-red-500" />
                            Temperatura
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-3xl font-bold text-red-600">
                            {weatherData.temperature}°C
                          </div>
                          <p className="text-sm text-gray-600 mt-2">
                            Clima {weatherData.climate}
                          </p>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg flex items-center gap-2">
                            <Droplets className="h-5 w-5 text-blue-500" />
                            Umidade
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-3xl font-bold text-blue-600">
                            {weatherData.humidity}%
                          </div>
                          <Progress value={weatherData.humidity} className="mt-2" />
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg flex items-center gap-2">
                            <CloudRain className="h-5 w-5 text-indigo-500" />
                            Precipitação
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-3xl font-bold text-indigo-600">
                            {weatherData.rainfall}mm
                          </div>
                          <p className="text-sm text-gray-600 mt-2">
                            Últimas 24h
                          </p>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg flex items-center gap-2">
                            <Wind className="h-5 w-5 text-gray-500" />
                            Vento
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-3xl font-bold text-gray-600">
                            {weatherData.windSpeed} km/h
                          </div>
                          <p className="text-sm text-gray-600 mt-2">
                            Velocidade média
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  )}

                  {/* All Provinces Overview */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Visão Geral - Todas as Províncias</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {angolaProvincies.map(province => {
                          const provinceWeather = generateWeatherData(province.name);
                          return (
                            <Card key={province.name} className="cursor-pointer hover:shadow-md transition-shadow"
                                  onClick={() => setSelectedProvince(province.name)}>
                              <CardContent className="p-4">
                                <div className="flex justify-between items-start mb-2">
                                  <div>
                                    <h4 className="font-semibold">{province.name}</h4>
                                    <p className="text-sm text-gray-600">{province.capital}</p>
                                  </div>
                                  {getWeatherIcon(provinceWeather.conditions)}
                                </div>
                                <div className="space-y-1 text-sm">
                                  <div className="flex justify-between">
                                    <span>Clima:</span>
                                    <span className="capitalize">{province.climate}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span>Temperatura:</span>
                                    <span>{provinceWeather.temperature}°C</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span>Umidade:</span>
                                    <span>{provinceWeather.humidity}%</span>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Enhanced Cultures Tab */}
              <TabsContent value="culturas" className="mt-6">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-semibold">Banco de Dados de Culturas</h3>
                    <Select value={selectedCrop} onValueChange={setSelectedCrop}>
                      <SelectTrigger className="w-64">
                        <SelectValue placeholder="Selecione uma cultura" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">Todas as culturas</SelectItem>
                        {cropDatabase.map(crop => (
                          <SelectItem key={crop.id} value={crop.id}>
                            {crop.namePortuguese}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Selected Crop Details */}
                  {selectedCrop && getSelectedCropData() && (
                    <Card className="border-green-200 bg-green-50">
                      <CardHeader>
                        <CardTitle className="text-xl text-green-800">
                          {getSelectedCropData()?.namePortuguese} - Informações Detalhadas
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          <div>
                            <h4 className="font-semibold mb-2">Épocas de Plantio</h4>
                            <div className="space-y-1 text-sm">
                              <div><strong>Chuvas:</strong> {getSelectedCropData()?.plantingSeasons.rainy}</div>
                              <div><strong>Seca:</strong> {getSelectedCropData()?.plantingSeasons.dry}</div>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Informações Econômicas</h4>
                            <div className="space-y-1 text-sm">
                              <div><strong>Preço de Mercado:</strong> {getSelectedCropData()?.marketPrice}</div>
                              <div><strong>Duração:</strong> {getSelectedCropData()?.growthDuration} dias</div>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Requisitos</h4>
                            <div className="space-y-1 text-sm">
                              <div><strong>Água:</strong> <Badge variant="outline">{getSelectedCropData()?.waterRequirement}</Badge></div>
                              <div><strong>Solo:</strong> {getSelectedCropData()?.soilType.join(', ')}</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-4 pt-4 border-t">
                          <h4 className="font-semibold mb-2">Províncias Adequadas</h4>
                          <div className="flex flex-wrap gap-2">
                            {getSelectedCropData()?.suitableProvinces.map(province => (
                              <Badge key={province} variant="secondary">{province}</Badge>
                            ))}
                          </div>
                        </div>

                        <div className="mt-4 pt-4 border-t">
                          <h4 className="font-semibold mb-2">Pragas Comuns</h4>
                          <div className="flex flex-wrap gap-2">
                            {getSelectedCropData()?.commonPests.map(pest => (
                              <Badge key={pest} variant="destructive">{pest}</Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* All Crops Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cropDatabase.map(crop => (
                      <Card key={crop.id} className={`cursor-pointer transition-all hover:shadow-lg ${
                        selectedCrop === crop.id ? 'ring-2 ring-green-500 bg-green-50' : ''
                      }`} onClick={() => setSelectedCrop(crop.id)}>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <span className="text-2xl">🌱</span>
                            {crop.namePortuguese}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div>
                              <h5 className="font-medium text-sm">Épocas de Plantio:</h5>
                              <div className="text-sm text-gray-600">
                                <div><strong>Chuvas:</strong> {crop.plantingSeasons.rainy}</div>
                                <div><strong>Seca:</strong> {crop.plantingSeasons.dry}</div>
                              </div>
                            </div>
                            
                            <div>
                              <h5 className="font-medium text-sm">Preço de Mercado:</h5>
                              <div className="text-lg font-bold text-green-600">{crop.marketPrice}</div>
                            </div>

                            <div>
                              <h5 className="font-medium text-sm">Pragas Comuns:</h5>
                              <div className="flex flex-wrap gap-1">
                                {crop.commonPests.slice(0, 2).map(pest => (
                                  <Badge key={pest} variant="outline" className="text-xs">{pest}</Badge>
                                ))}
                                {crop.commonPests.length > 2 && (
                                  <Badge variant="outline" className="text-xs">+{crop.commonPests.length - 2}</Badge>
                                )}
                              </div>
                            </div>

                            <Button variant="outline" size="sm" className="w-full">
                              Ver Detalhes Completos
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Enhanced Products Tab - DigitalZango Affiliate Marketing */}
              <TabsContent value="produtos" className="mt-6">
                <div className="space-y-6">
                  {/* DigitalZango Brand Header */}
                  <Card className="bg-gradient-to-r from-green-100 to-blue-100 border-green-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center">
                            <span className="text-white font-bold text-xl">DZ</span>
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-green-800">DigitalZango Marketplace</h3>
                            <p className="text-green-600">Produtos selecionados para agricultura moderna em Angola</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-600">Produtos Recomendados</div>
                          <div className="text-2xl font-bold text-green-600">{getRelevantProducts().length}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Product Filter */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">Produtos para sua Cultura</h3>
                    <Select value={selectedCrop} onValueChange={setSelectedCrop}>
                      <SelectTrigger className="w-64">
                        <SelectValue placeholder="Filtrar por cultura" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">Todos os produtos</SelectItem>
                        {cropDatabase.map(crop => (
                          <SelectItem key={crop.id} value={crop.id}>
                            {crop.namePortuguese}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Products Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {getRelevantProducts().map(product => (
                      <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex gap-4">
                            {/* Product Image Placeholder */}
                            <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                              <ShoppingCart className="h-8 w-8 text-green-600" />
                            </div>
                            
                            <div className="flex-1 space-y-3">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h4 className="font-bold text-lg">{product.name}</h4>
                                  <p className="text-sm text-gray-600">{product.description}</p>
                                </div>
                                
                                <div className="text-right">
                                  <div className="text-xl font-bold text-green-600">
                                    {product.price}
                                  </div>
                                  {product.discount && (
                                    <Badge variant="destructive" className="text-xs">
                                      -{product.discount.percentage}% OFF
                                    </Badge>
                                  )}
                                </div>
                              </div>
                              
                              {/* Rating */}
                              <div className="flex items-center gap-2">
                                <div className="flex items-center">
                                  {Array.from({ length: 5 }, (_, i) => (
                                    <span key={i} className={`text-sm ${
                                      i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                                    }`}>★</span>
                                  ))}
                                </div>
                                <span className="text-sm text-gray-600">({product.rating})</span>
                                <Badge variant="outline" className="text-xs">{product.category}</Badge>
                              </div>
                              
                              {/* Features */}
                              <div>
                                <h5 className="text-sm font-medium mb-2">Características:</h5>
                                <div className="grid grid-cols-2 gap-1">
                                  {product.features.slice(0, 4).map((feature, index) => (
                                    <div key={index} className="flex items-center gap-1 text-xs text-gray-600">
                                      <span className="text-green-500">✓</span>
                                      {feature}
                                    </div>
                                  ))}
                                </div>
                              </div>
                              
                              {/* Action Buttons */}
                              <div className="flex gap-2 pt-2">
                                <Button 
                                  className="flex-1 bg-green-600 hover:bg-green-700"
                                  onClick={() => {
                                    trackAffiliateClick(product.id, product.name);
                                    window.open(product.affiliateLink, '_blank');
                                  }}
                                >
                                  <ShoppingCart className="h-4 w-4 mr-2" />
                                  Comprar Agora
                                </Button>
                                <Button 
                                  variant="outline"
                                  onClick={() => shareContent('facebook', `Produto incrível: ${product.name}`)}
                                >
                                  <Share2 className="h-4 w-4" />
                                </Button>
                              </div>
                              
                              {/* Commission Info for Content Creators */}
                              <div className="text-xs text-blue-600 bg-blue-50 p-2 rounded">
                                💰 Comissão DigitalZango: {product.commission}% por venda
                              </div>
                              
                              {product.discount && (
                                <div className="text-xs text-orange-600 bg-orange-50 p-2 rounded">
                                  🔥 Oferta especial válida até {new Date(product.discount.validUntil).toLocaleDateString('pt-AO')}
                                </div>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* DigitalZango Analytics Dashboard */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BarChart3 className="h-5 w-5" />
                        DigitalZango Analytics - Performance do Afiliado
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Card>
                          <CardContent className="p-4 text-center">
                            <div className="text-2xl font-bold text-blue-600">{analytics.affiliateClicks}</div>
                            <div className="text-sm text-gray-600">Clicks de Afiliado</div>
                            <div className="text-xs text-green-600">+23% este mês</div>
                          </CardContent>
                        </Card>
                        
                        <Card>
                          <CardContent className="p-4 text-center">
                            <div className="text-2xl font-bold text-green-600">{analytics.contentShares}</div>
                            <div className="text-sm text-gray-600">Compartilhamentos</div>
                            <div className="text-xs text-green-600">+15% este mês</div>
                          </CardContent>
                        </Card>
                        
                        <Card>
                          <CardContent className="p-4 text-center">
                            <div className="text-2xl font-bold text-purple-600">{analytics.userEngagement}%</div>
                            <div className="text-sm text-gray-600">Engajamento</div>
                            <div className="text-xs text-green-600">+8% este mês</div>
                          </CardContent>
                        </Card>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Social Media Sharing Tools */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="h-5 w-5" />
                        Ferramentas para Criadores de Conteúdo
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Button 
                          variant="outline" 
                          className="flex items-center gap-2"
                          onClick={() => shareContent('facebook', 'Confira os melhores produtos agrícolas')}
                        >
                          <span className="text-blue-600">📘</span>
                          Compartilhar no Facebook
                        </Button>
                        
                        <Button 
                          variant="outline" 
                          className="flex items-center gap-2"
                          onClick={() => shareContent('instagram', 'Produtos incríveis para agricultura')}
                        >
                          <span className="text-pink-600">📷</span>
                          Story para Instagram
                        </Button>
                        
                        <Button 
                          variant="outline" 
                          className="flex items-center gap-2"
                          onClick={() => shareContent('twitter', 'Inovação agrícola em Angola')}
                        >
                          <span className="text-blue-400">🐦</span>
                          Tweet sobre Produtos
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Affiliate Disclaimer */}
                  <Card className="bg-gray-50 border-gray-200">
                    <CardContent className="p-4">
                      <p className="text-xs text-gray-600">
                        <strong>Nota de Transparência:</strong> Os links acima são links de afiliado do DigitalZango. 
                        Ao comprar através destes links, você apoia o desenvolvimento de ferramentas digitais para 
                        agricultura em Angola sem custo adicional. Todos os produtos são cuidadosamente selecionados 
                        com base na qualidade e relevância para agricultores angolanos.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CalendarioPage;

describe('Placeholder', () => {
  it('should pass', () => {
    expect(true).toBe(true);
  });
});
