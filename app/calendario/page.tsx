'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { AlertTriangle, Calendar as CalendarIcon, Cloud, Sprout, MapPin, ShoppingCart, TrendingUp, Thermometer, Droplets, Wind, Calculator, Beaker } from 'lucide-react';
import dynamic from 'next/dynamic';

// Import your enhanced data
import { 
  completeAngolaProvinces, 
  enhancedCropData, 
  currentPestAlerts, 
  digitalZangoProducts,
  farmerExperiences,
  soilHealthData 
} from '@/lib/data/calendar';

// Client-only wrapper to prevent hydration issues
function ClientOnly({ children }: { children: React.ReactNode }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-lg">DZ</span>
          </div>
          <p>Carregando Calendário Agrícola...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

// Dynamically import the heavy calendar component
const BigCalendar = dynamic(() => import('react-big-calendar').then(mod => ({ default: mod.Calendar })), {
  loading: () => <div className="h-96 flex items-center justify-center">Carregando calendário...</div>,
  ssr: false
});

import { dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = {
  'pt-BR': ptBR,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

// Enhanced Angola Provinces Data (All 18 provinces)
const allAngolaProvinces = [
  { id: 'luanda', name: 'Luanda', capital: 'Luanda', climate: 'tropical', avgTemp: 26, humidity: 75, rainfall: 350 },
  { id: 'benguela', name: 'Benguela', capital: 'Benguela', climate: 'tropical', avgTemp: 24, humidity: 70, rainfall: 300 },
  { id: 'huila', name: 'Huíla', capital: 'Lubango', climate: 'subtropical', avgTemp: 22, humidity: 65, rainfall: 800 },
  { id: 'huambo', name: 'Huambo', capital: 'Huambo', climate: 'subtropical', avgTemp: 20, humidity: 70, rainfall: 1200 },
  { id: 'bie', name: 'Bié', capital: 'Kuito', climate: 'subtropical', avgTemp: 21, humidity: 68, rainfall: 1100 },
  { id: 'namibe', name: 'Namibe', capital: 'Moçâmedes', climate: 'arid', avgTemp: 25, humidity: 45, rainfall: 50 },
  { id: 'cunene', name: 'Cunene', capital: 'Ondjiva', climate: 'semi-arid', avgTemp: 28, humidity: 50, rainfall: 400 },
  { id: 'cuando-cubango', name: 'Cuando Cubango', capital: 'Menongue', climate: 'semi-arid', avgTemp: 25, humidity: 55, rainfall: 600 },
  { id: 'moxico', name: 'Moxico', capital: 'Luena', climate: 'tropical', avgTemp: 24, humidity: 72, rainfall: 1000 },
  { id: 'lunda-norte', name: 'Lunda Norte', capital: 'Dundo', climate: 'tropical', avgTemp: 25, humidity: 78, rainfall: 1300 },
  { id: 'lunda-sul', name: 'Lunda Sul', capital: 'Saurimo', climate: 'tropical', avgTemp: 24, humidity: 76, rainfall: 1250 },
  { id: 'malanje', name: 'Malanje', capital: 'Malanje', climate: 'tropical', avgTemp: 23, humidity: 74, rainfall: 1100 },
  { id: 'uige', name: 'Uíge', capital: 'Uíge', climate: 'tropical', avgTemp: 22, humidity: 80, rainfall: 1400 },
  { id: 'zaire', name: 'Zaire', capital: 'Mbanza Congo', climate: 'tropical', avgTemp: 25, humidity: 78, rainfall: 1200 },
  { id: 'cabinda', name: 'Cabinda', capital: 'Cabinda', climate: 'tropical', avgTemp: 26, humidity: 82, rainfall: 1300 },
  { id: 'kwanza-norte', name: 'Kwanza Norte', capital: 'Ndalatando', climate: 'tropical', avgTemp: 25, humidity: 76, rainfall: 1000 },
  { id: 'kwanza-sul', name: 'Kwanza Sul', capital: 'Sumbe', climate: 'tropical', avgTemp: 24, humidity: 72, rainfall: 800 },
  { id: 'bengo', name: 'Bengo', capital: 'Caxito', climate: 'tropical', avgTemp: 26, humidity: 74, rainfall: 600 }
];

// Enhanced Crop Database with farmer-relevant data
const enhancedCropDatabase = [
  {
    id: 'milho',
    name: 'Milho',
    plantingSeasons: [
      { season: 'Chuvas', start: 10, end: 12 },
      { season: 'Seca', start: 4, end: 6 }
    ],
    commonPests: ['lagarta-do-cartucho', 'pulgão', 'broca'],
    suitableProvinces: ['luanda', 'benguela', 'huila', 'huambo', 'malanje'],
    marketPrice: 'Kz 180-220/kg',
    growthDuration: 120,
    waterRequirement: 'medium',
    soilType: ['argiloso', 'franco'],
    expectedYield: '3-5 ton/hectare',
    profitMargin: '40-60%',
    riskFactors: ['seca', 'pragas', 'preços voláteis']
  },
  {
    id: 'feijao',
    name: 'Feijão',
    plantingSeasons: [
      { season: 'Chuvas', start: 9, end: 11 },
      { season: 'Seca', start: 3, end: 5 }
    ],
    commonPests: ['mosca-branca', 'pulgão'],
    suitableProvinces: ['huila', 'huambo', 'bie', 'benguela'],
    marketPrice: 'Kz 350-450/kg',
    growthDuration: 90,
    waterRequirement: 'medium',
    soilType: ['franco', 'arenoso'],
    expectedYield: '1-2 ton/hectare',
    profitMargin: '50-70%',
    riskFactors: ['doenças', 'chuva excessiva']
  },
  {
    id: 'mandioca',
    name: 'Mandioca',
    plantingSeasons: [
      { season: 'Todo ano', start: 1, end: 12 }
    ],
    commonPests: ['cochonilha', 'ácaro'],
    suitableProvinces: ['luanda', 'uige', 'malanje', 'kwanza-norte'],
    marketPrice: 'Kz 80-120/kg',
    growthDuration: 365,
    waterRequirement: 'low',
    soilType: ['arenoso', 'franco'],
    expectedYield: '10-15 ton/hectare',
    profitMargin: '30-50%',
    riskFactors: ['pragas', 'doenças virais']
  },
  {
    id: 'cafe',
    name: 'Café',
    plantingSeasons: [
      { season: 'Chuvas', start: 10, end: 12 }
    ],
    commonPests: ['broca-do-café', 'ferrugem'],
    suitableProvinces: ['huila', 'kwanza-sul', 'uige'],
    marketPrice: 'Kz 800-1200/kg',
    growthDuration: 1095,
    waterRequirement: 'high',
    soilType: ['argiloso', 'franco'],
    expectedYield: '1-2 ton/hectare',
    profitMargin: '60-80%',
    riskFactors: ['mudanças climáticas', 'pragas', 'mercado internacional']
  },
  {
    id: 'banana',
    name: 'Banana',
    plantingSeasons: [
      { season: 'Todo ano', start: 1, end: 12 }
    ],
    commonPests: ['nematóides', 'sigatoka'],
    suitableProvinces: ['benguela', 'kwanza-sul', 'cabinda'],
    marketPrice: 'Kz 200-300/kg',
    growthDuration: 365,
    waterRequirement: 'high',
    soilType: ['franco', 'argiloso'],
    expectedYield: '20-30 ton/hectare',
    profitMargin: '50-70%',
    riskFactors: ['doenças', 'vento forte']
  },
  {
    id: 'batata-doce',
    name: 'Batata-doce',
    plantingSeasons: [
      { season: 'Chuvas', start: 9, end: 11 },
      { season: 'Seca', start: 3, end: 5 }
    ],
    commonPests: ['gorgulho', 'broca'],
    suitableProvinces: ['huila', 'benguela', 'kwanza-sul'],
    marketPrice: 'Kz 150-200/kg',
    growthDuration: 120,
    waterRequirement: 'medium',
    soilType: ['arenoso', 'franco'],
    expectedYield: '8-12 ton/hectare',
    profitMargin: '40-60%',
    riskFactors: ['pragas', 'armazenamento']
  }
];

// DigitalZango Affiliate Products
const affiliateProducts = [
  {
    id: '1',
    name: 'Kit de Irrigação Inteligente',
    description: 'Sistema automatizado com sensores IoT',
    price: 'Kz 85.000',
    rating: 4.8,
    category: 'Irrigação',
    relevantFor: ['milho', 'feijao', 'cafe'],
    commission: 15,
    discount: { percentage: 20, validUntil: '2025-08-31' }
  },
  {
    id: '2',
    name: 'Fertilizante Orgânico Premium',
    description: 'Desenvolvido para solos angolanos',
    price: 'Kz 12.500',
    rating: 4.7,
    category: 'Fertilizantes',
    relevantFor: ['milho', 'feijao', 'mandioca'],
    commission: 12
  },
  {
    id: '3',
    name: 'Sementes Híbridas Resistentes',
    description: 'Adaptadas ao clima angolano',
    price: 'Kz 18.000',
    rating: 4.9,
    category: 'Sementes',
    relevantFor: ['milho', 'feijao'],
    commission: 18,
    discount: { percentage: 15, validUntil: '2025-07-15' }
  },
  {
    id: '4',
    name: 'Pulverizador Elétrico Profissional',
    description: 'Equipamento para aplicação de defensivos',
    price: 'Kz 35.000',
    rating: 4.6,
    category: 'Equipamentos',
    relevantFor: ['milho', 'cafe', 'banana'],
    commission: 20
  }
];

// Mock data for missing imports
const angolaRegions = allAngolaProvinces.map(p => ({
  id: p.id,
  name: p.name,
  rainySeasonStart: 10,
  rainySeasonEnd: 4
}));

const currentPestAlertsData: any[] = [];

// NEW: Critical Farmer Features Components

// 1. Weather-Based Alerts Component
const WeatherAlerts = ({ weatherData, selectedProvince }: { weatherData: any, selectedProvince: string }) => {
  const [criticalAlerts, setCriticalAlerts] = useState<any[]>([]);
  
  useEffect(() => {
    const alerts = [];
    
    if (weatherData?.avgTemp > 35) {
      alerts.push({
        id: 'heat-stress',
        type: 'critical',
        title: '🌡️ Temperatura Extrema',
        message: `${weatherData.avgTemp}°C em ${selectedProvince} - Risco para culturas`,
        actions: ['Aumentar irrigação', 'Aplicar sombreamento', 'Monitorar gado'],
        urgency: 'critical'
      });
    }
    
    if (weatherData?.rainfall < 100 && weatherData?.climate !== 'arid') {
      alerts.push({
        id: 'drought-warning',
        type: 'warning',
        title: '💧 Alerta de Seca',
        message: `Baixa precipitação (${weatherData.rainfall}mm/ano) para região`,
        actions: ['Implementar irrigação', 'Plantar culturas resistentes', 'Conservar água'],
        urgency: 'high'
      });
    }

    if (weatherData?.humidity > 85) {
      alerts.push({
        id: 'high-humidity',
        type: 'warning',
        title: '💨 Alta Umidade',
        message: `Umidade de ${weatherData.humidity}% favorece doenças fúngicas`,
        actions: ['Melhorar ventilação', 'Aplicar fungicidas preventivos', 'Monitorar plantas'],
        urgency: 'medium'
      });
    }
    
    setCriticalAlerts(alerts);
  }, [weatherData, selectedProvince]);

  if (criticalAlerts.length === 0) return null;

  return (
    <Card className="border-orange-500 bg-orange-50">
      <CardHeader>
        <CardTitle className="text-orange-800 flex items-center gap-2">
          <AlertTriangle className="h-5 w-5" />
          Alertas Críticos
        </CardTitle>
      </CardHeader>
      <CardContent>
        {criticalAlerts.map(alert => (
          <div key={alert.id} className="mb-4 last:mb-0">
            <h4 className="font-semibold text-orange-800">{alert.title}</h4>
            <p className="text-sm text-orange-700 mb-2">{alert.message}</p>
            <div className="space-y-1">
              <p className="text-xs font-medium text-orange-800">Ações Recomendadas:</p>
              {alert.actions.map((action: string, index: number) => (
                <div key={index} className="text-xs text-orange-700 flex items-center gap-1">
                  <span className="w-1 h-1 bg-orange-500 rounded-full"></span>
                  {action}
                </div>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

// 2. Smart Planting Recommendations
const PlantingRecommendations = ({ selectedProvince, currentMonth, weatherData }: { selectedProvince: string, currentMonth: number, weatherData: any }) => {
  const [recommendations, setRecommendations] = useState<any[]>([]);
  
  useEffect(() => {
    const month = currentMonth || new Date().getMonth() + 1;
    const recs: any[] = [];
    
    enhancedCropDatabase.forEach(crop => {
      crop.plantingSeasons.forEach(season => {
        if (month >= season.start && month <= season.end) {
          const suitability = calculateSuitability(crop, selectedProvince, weatherData);
          recs.push({
            crop: crop.name,
            suitability,
            reason: getSuitabilityReason(crop, selectedProvince, weatherData),
            expectedHarvest: calculateHarvestDate(crop, month),
            marketPrice: crop.marketPrice,
            riskLevel: assessRiskLevel(crop, weatherData),
            expectedYield: crop.expectedYield,
            profitMargin: crop.profitMargin
          });
        }
      });
    });
    
    setRecommendations(recs.sort((a, b) => b.suitability - a.suitability).slice(0, 3));
  }, [selectedProvince, currentMonth, weatherData]);

  // Helper functions
  const calculateSuitability = (crop: any, province: string, weather: any) => {
    let score = 50; // Base score
    
    if (crop.suitableProvinces.includes(province)) score += 30;
    if (weather?.climate === 'tropical' && crop.id !== 'cafe') score += 10;
    if (weather?.rainfall > 800 && crop.waterRequirement === 'high') score += 20;
    if (weather?.rainfall < 300 && crop.waterRequirement === 'low') score += 15;
    
    return Math.min(score, 100);
  };

  const getSuitabilityReason = (crop: any, province: string, weather: any) => {
    if (crop.suitableProvinces.includes(province)) {
      return `Ideal para ${province}. Condições climáticas favoráveis.`;
    }
    return `Possível em ${province}, mas requer cuidados especiais.`;
  };

  const calculateHarvestDate = (crop: any, plantingMonth: number) => {
    const harvestMonth = (plantingMonth + Math.floor(crop.growthDuration / 30)) % 12 || 12;
    const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    return months[harvestMonth - 1];
  };

  const assessRiskLevel = (crop: any, weather: any) => {
    if (weather?.avgTemp > 35 && crop.id === 'milho') return 'Alto';
    if (weather?.rainfall < 300 && crop.waterRequirement === 'high') return 'Médio';
    return 'Baixo';
  };

  return (
    <Card className="border-green-500 bg-green-50">
      <CardHeader>
        <CardTitle className="text-green-800 flex items-center gap-2">
          <Sprout className="h-5 w-5" />
          Recomendações de Plantio
        </CardTitle>
        <CardDescription className="text-green-700">
          Melhores culturas para plantar agora
        </CardDescription>
      </CardHeader>
      <CardContent>
        {recommendations.length > 0 ? (
          <div className="space-y-3">
            {recommendations.map((rec, index) => (
              <div key={rec.crop} className="border border-green-200 rounded-lg p-3 bg-white">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-green-800">{rec.crop}</h4>
                  <Badge variant={rec.suitability > 80 ? 'default' : 'secondary'}>
                    {rec.suitability}% adequado
                  </Badge>
                </div>
                <p className="text-sm text-green-700 mb-2">{rec.reason}</p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="font-medium">Colheita:</span> {rec.expectedHarvest}
                  </div>
                  <div>
                    <span className="font-medium">Preço:</span> {rec.marketPrice}
                  </div>
                  <div>
                    <span className="font-medium">Rendimento:</span> {rec.expectedYield}
                  </div>
                  <div>
                    <span className="font-medium">Lucro:</span> {rec.profitMargin}
                  </div>
                  <div className="col-span-2">
                    <span className="font-medium">Risco:</span> 
                    <Badge variant={rec.riskLevel === 'Alto' ? 'destructive' : 'outline'} className="ml-1 text-xs">
                      {rec.riskLevel}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-green-700 text-sm">Nenhuma recomendação disponível para este período.</p>
        )}
      </CardContent>
    </Card>
  );
};

// 3. Pest Early Warning System
const PestEarlyWarning = ({ weatherData, selectedCrops }: { weatherData: any, selectedCrops: string[] }) => {
  const [pestRisks, setPestRisks] = useState<any[]>([]);
  
  useEffect(() => {
    const risks = [];
    
    // Lagarta-do-cartucho risk for corn
    if (weatherData?.avgTemp >= 25 && weatherData?.humidity >= 60) {
      risks.push({
        id: 'lagarta-cartucho',
        pest: 'Lagarta-do-cartucho',
        crop: 'Milho',
        riskLevel: 'Alto',
        peakPeriod: 'Próximos 7-14 dias',
        preventiveMeasures: [
          'Aplicar Bt (Bacillus thuringiensis)',
          'Monitorar plantas 2x por semana',
          'Instalar armadilhas com feromônios'
        ],
        economicImpact: 'Até 60% de perdas se não controlado'
      });
    }
    
    // Coffee borer risk
    if (weatherData?.avgTemp >= 20 && weatherData?.avgTemp <= 30 && weatherData?.humidity >= 70) {
      risks.push({
        id: 'broca-cafe',
        pest: 'Broca-do-café',
        crop: 'Café',
        riskLevel: 'Médio',
        peakPeriod: 'Próximos 10-21 dias',
        preventiveMeasures: [
          'Colheita sanitária',
          'Aplicar armadilhas com feromônios',
          'Controle biológico'
        ],
        economicImpact: 'Até 40% de perdas na qualidade'
      });
    }

    // Fungal diseases in high humidity
    if (weatherData?.humidity > 80) {
      risks.push({
        id: 'fungal-diseases',
        pest: 'Doenças Fúngicas',
        crop: 'Todas as culturas',
        riskLevel: 'Médio',
        peakPeriod: 'Próximos 5-10 dias',
        preventiveMeasures: [
          'Melhorar ventilação',
          'Aplicar fungicidas preventivos',
          'Reduzir irrigação foliar'
        ],
        economicImpact: 'Até 30% de perdas na qualidade'
      });
    }
    
    setPestRisks(risks);
  }, [weatherData, selectedCrops]);

  if (pestRisks.length === 0) return null;

  return (
    <Card className="border-red-500 bg-red-50">
      <CardHeader>
        <CardTitle className="text-red-800 flex items-center gap-2">
          <AlertTriangle className="h-5 w-5" />
          Alerta de Pragas
        </CardTitle>
      </CardHeader>
      <CardContent>
        {pestRisks.map(risk => (
          <div key={risk.id} className="mb-4 last:mb-0">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-semibold text-red-800">{risk.pest}</h4>
              <Badge variant="destructive">{risk.riskLevel}</Badge>
            </div>
            <p className="text-sm text-red-700 mb-2">
              <strong>Cultura afetada:</strong> {risk.crop}
            </p>
            <p className="text-sm text-red-700 mb-2">
              <strong>Período crítico:</strong> {risk.peakPeriod}
            </p>
            <div className="mb-2">
              <p className="text-xs font-medium text-red-800 mb-1">Medidas Preventivas:</p>
              {risk.preventiveMeasures.map((measure: string, index: number) => (
                <div key={index} className="text-xs text-red-700 flex items-center gap-1">
                  <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                  {measure}
                </div>
              ))}
            </div>
            <p className="text-xs text-red-600 font-medium">
              💰 Impacto: {risk.economicImpact}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

// 4. Market Insights Component
const MarketInsights = ({ selectedCrop }: { selectedCrop: string }) => {
  const [marketData, setMarketData] = useState<any[]>([]);
  
  useEffect(() => {
    // Simulate market data
    const crops = selectedCrop === 'all' ? enhancedCropDatabase : enhancedCropDatabase.filter(c => c.id === selectedCrop);
    
    const data = crops.map(crop => ({
      crop: crop.name,
      currentPrice: crop.marketPrice,
      trend: Math.random() > 0.5 ? 'up' : 'down',
      change: (Math.random() * 20 - 10).toFixed(1),
      demand: ['Alto', 'Médio', 'Baixo'][Math.floor(Math.random() * 3)],
      bestMarkets: ['Luanda', 'Benguela', 'Huambo'].slice(0, Math.floor(Math.random() * 3) + 1),
      profitMargin: crop.profitMargin,
      expectedYield: crop.expectedYield
    }));
    
    setMarketData(data);
  }, [selectedCrop]);

  return (
    <Card className="border-blue-500 bg-blue-50">
      <CardHeader>
        <CardTitle className="text-blue-800 flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          Análise de Mercado
        </CardTitle>
      </CardHeader>
      <CardContent>
        {marketData.slice(0, 3).map(item => (
          <div key={item.crop} className="mb-3 last:mb-0 border border-blue-200 rounded-lg p-3 bg-white">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-semibold text-blue-800">{item.crop}</h4>
              <div className="flex items-center gap-1">
                <span className={`text-sm ${item.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                  {item.trend === 'up' ? '↗' : '↘'} {item.change}%
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="font-medium">Preço:</span> {item.currentPrice}
              </div>
              <div>
                <span className="font-medium">Demanda:</span> {item.demand}
              </div>
              <div>
                <span className="font-medium">Rendimento:</span> {item.expectedYield}
              </div>
              <div>
                <span className="font-medium">Margem:</span> {item.profitMargin}
              </div>
            </div>
            <p className="text-xs text-blue-600 mt-2">
              <strong>Melhores mercados:</strong> {item.bestMarkets.join(', ')}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

// NEW: Part 1 Enhanced Sidebar Components

// 5. Irrigation Scheduler Component
const IrrigationScheduler = ({ selectedCrop, weatherData }: { selectedCrop: string, weatherData: any }) => {
  const [farmSize, setFarmSize] = useState('');
  const [irrigationSchedule, setIrrigationSchedule] = useState<any[]>([]);

  useEffect(() => {
    if (!selectedCrop || selectedCrop === 'all') return;
    
    const crop = enhancedCropDatabase.find(c => c.id === selectedCrop);
    if (!crop) return;

    const schedule = generateIrrigationSchedule(crop, weatherData);
    setIrrigationSchedule(schedule);
  }, [selectedCrop, weatherData]);

  const generateIrrigationSchedule = (crop: any, weather: any) => {
    const baseWaterNeed = crop.waterRequirement === 'high' ? 50 : crop.waterRequirement === 'medium' ? 30 : 15;
    const weatherMultiplier = weather?.avgTemp > 30 ? 1.3 : weather?.humidity < 50 ? 1.2 : 1.0;
    const dailyWater = Math.round(baseWaterNeed * weatherMultiplier);

    return [
      { day: 'Segunda', amount: dailyWater, time: '06:00', duration: '45 min' },
      { day: 'Quarta', amount: dailyWater, time: '06:00', duration: '45 min' },
      { day: 'Sexta', amount: dailyWater, time: '06:00', duration: '45 min' },
    ];
  };

  return (
    <Card className="border-blue-500 bg-blue-50">
      <CardHeader>
        <CardTitle className="text-blue-800 flex items-center gap-2">
          <Droplets className="h-5 w-5" />
          Programação de Irrigação
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="farm-size">Tamanho da Fazenda (hectares)</Label>
          <Input
            id="farm-size"
            type="number"
            placeholder="Ex: 5"
            value={farmSize}
            onChange={(e) => setFarmSize(e.target.value)}
          />
        </div>
        
        {irrigationSchedule.length > 0 && (
          <div className="space-y-2">
            <h4 className="font-medium text-blue-800">Cronograma Semanal:</h4>
            {irrigationSchedule.map((item, index) => (
              <div key={index} className="bg-white p-3 rounded border border-blue-200">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{item.day}</span>
                  <span className="text-sm text-blue-600">{item.time}</span>
                </div>
                <div className="text-sm text-gray-600">
                  {item.amount}L/m² • {item.duration}
                </div>
              </div>
            ))}
            
            {farmSize && (
              <div className="bg-green-100 p-3 rounded border border-green-300">
                <p className="text-sm font-medium text-green-800">
                  💧 Total semanal: {(irrigationSchedule.reduce((sum, item) => sum + item.amount, 0) * parseFloat(farmSize) * 10000 / 1000).toFixed(0)}L
                </p>
                <p className="text-xs text-green-600">
                  Para {farmSize} hectares de {enhancedCropDatabase.find(c => c.id === selectedCrop)?.name}
                </p>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

// 6. Financial Planner Component
const FinancialPlanner = ({ selectedCrop }: { selectedCrop: string }) => {
  const [farmSize, setFarmSize] = useState('');
  const [financialData, setFinancialData] = useState<any>(null);

  useEffect(() => {
    if (!selectedCrop || selectedCrop === 'all' || !farmSize) return;
    
    const crop = enhancedCropDatabase.find(c => c.id === selectedCrop);
    if (!crop) return;

    const calculations = calculateFinancials(crop, parseFloat(farmSize));
    setFinancialData(calculations);
  }, [selectedCrop, farmSize]);

  const calculateFinancials = (crop: any, size: number) => {
    const yieldRange = crop.expectedYield.split('-').map((y: string) => parseFloat(y.split(' ')[0]));
    const avgYield = (yieldRange[0] + yieldRange[1]) / 2;
    const priceRange = crop.marketPrice.match(/\d+/g)?.map(Number) || [0, 0];
    const avgPrice = (priceRange[0] + priceRange[1]) / 2;
    
    const totalProduction = avgYield * size;
    const grossRevenue = totalProduction * avgPrice;
    const estimatedCosts = grossRevenue * 0.4; // 40% of revenue as costs
    const netProfit = grossRevenue - estimatedCosts;
    const profitPerHectare = netProfit / size;

    return {
      totalProduction,
      grossRevenue,
      estimatedCosts,
      netProfit,
      profitPerHectare,
      roi: ((netProfit / estimatedCosts) * 100).toFixed(1)
    };
  };

  return (
    <Card className="border-green-500 bg-green-50">
      <CardHeader>
        <CardTitle className="text-green-800 flex items-center gap-2">
          <Calculator className="h-5 w-5" />
          Planejamento Financeiro
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="financial-farm-size">Tamanho da Fazenda (hectares)</Label>
          <Input
            id="financial-farm-size"
            type="number"
            placeholder="Ex: 10"
            value={farmSize}
            onChange={(e) => setFarmSize(e.target.value)}
          />
        </div>

        {financialData && (
          <div className="space-y-3">
            <div className="bg-white p-3 rounded border border-green-200">
              <h4 className="font-medium text-green-800 mb-2">Projeção Financeira:</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Produção Total:</span>
                  <span className="font-medium">{financialData.totalProduction.toFixed(1)} ton</span>
                </div>
                <div className="flex justify-between">
                  <span>Receita Bruta:</span>
                  <span className="font-medium text-green-600">Kz {financialData.grossRevenue.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Custos Estimados:</span>
                  <span className="font-medium text-red-600">Kz {financialData.estimatedCosts.toLocaleString()}</span>
                </div>
                <div className="flex justify-between border-t pt-2">
                  <span className="font-medium">Lucro Líquido:</span>
                  <span className="font-bold text-green-700">Kz {financialData.netProfit.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Lucro/Hectare:</span>
                  <span className="font-medium">Kz {financialData.profitPerHectare.toLocaleString()}</span>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-100 p-3 rounded border border-blue-300">
              <p className="text-sm font-medium text-blue-800">
                📈 ROI Estimado: {financialData.roi}%
              </p>
              <p className="text-xs text-blue-600">
                Retorno sobre investimento em uma safra
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

// 7. Soil Health Monitor Component
const SoilHealthMonitor = ({ selectedProvince }: { selectedProvince: string }) => {
  const [soilData, setSoilData] = useState<any>(null);

  useEffect(() => {
    // Simulate soil data based on province
    const province = allAngolaProvinces.find(p => p.id === selectedProvince);
    if (!province) return;

    const mockSoilData = {
      ph: (6.0 + Math.random() * 2).toFixed(1),
      nitrogen: Math.floor(20 + Math.random() * 60),
      phosphorus: Math.floor(10 + Math.random() * 40),
      potassium: Math.floor(100 + Math.random() * 200),
      organicMatter: (2 + Math.random() * 4).toFixed(1),
      soilType: province.climate === 'arid' ? 'Arenoso' : province.climate === 'tropical' ? 'Argiloso' : 'Franco'
    };

    setSoilData(mockSoilData);
  }, [selectedProvince]);

  const getSoilRecommendations = (data: any) => {
    const recommendations = [];
    
    if (parseFloat(data.ph) < 6.0) {
      recommendations.push('Aplicar calcário para corrigir acidez');
    } else if (parseFloat(data.ph) > 7.5) {
      recommendations.push('Aplicar enxofre para reduzir alcalinidade');
    }
    
    if (data.nitrogen < 30) {
      recommendations.push('Aumentar adubação nitrogenada');
    }
    
    if (data.phosphorus < 20) {
      recommendations.push('Aplicar fertilizante fosfatado');
    }
    
    if (parseFloat(data.organicMatter) < 3.0) {
      recommendations.push('Incorporar matéria orgânica (compostagem)');
    }

    return recommendations;
  };

  return (
    <Card className="border-amber-500 bg-amber-50">
      <CardHeader>
        <CardTitle className="text-amber-800 flex items-center gap-2">
          <Beaker className="h-5 w-5" />
          Monitor de Solo
        </CardTitle>
      </CardHeader>
      <CardContent>
        {soilData && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white p-3 rounded border border-amber-200">
                <div className="text-xs text-amber-600">pH do Solo</div>
                <div className="text-lg font-bold text-amber-800">{soilData.ph}</div>
                <Progress value={parseFloat(soilData.ph) * 10} className="h-2 mt-1" />
              </div>
              
              <div className="bg-white p-3 rounded border border-amber-200">
                <div className="text-xs text-amber-600">Nitrogênio (ppm)</div>
                <div className="text-lg font-bold text-amber-800">{soilData.nitrogen}</div>
                <Progress value={soilData.nitrogen} className="h-2 mt-1" />
              </div>
              
              <div className="bg-white p-3 rounded border border-amber-200">
                <div className="text-xs text-amber-600">Fósforo (ppm)</div>
                <div className="text-lg font-bold text-amber-800">{soilData.phosphorus}</div>
                <Progress value={soilData.phosphorus * 2} className="h-2 mt-1" />
              </div>
              
              <div className="bg-white p-3 rounded border border-amber-200">
                <div className="text-xs text-amber-600">Potássio (ppm)</div>
                <div className="text-lg font-bold text-amber-800">{soilData.potassium}</div>
                <Progress value={soilData.potassium / 3} className="h-2 mt-1" />
              </div>
            </div>
            
            <div className="bg-white p-3 rounded border border-amber-200">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Matéria Orgânica:</span>
                <span className="font-bold text-amber-800">{soilData.organicMatter}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Tipo de Solo:</span>
                <Badge variant="outline">{soilData.soilType}</Badge>
              </div>
            </div>
            
            <div className="bg-green-100 p-3 rounded border border-green-300">
              <h4 className="font-medium text-green-800 mb-2">🌱 Recomendações:</h4>
              {getSoilRecommendations(soilData).map((rec, index) => (
                <div key={index} className="text-sm text-green-700 flex items-center gap-1 mb-1">
                  <span className="w-1 h-1 bg-green-500 rounded-full"></span>
                  {rec}
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default function CalendarioPage() {
  const [events, setEvents] = useState<any[]>([]);
  const [activeAlerts, setActiveAlerts] = useState<any[]>(currentPestAlertsData);
  const [selectedRegion, setSelectedRegion] = useState('luanda');
  const [selectedCrop, setSelectedCrop] = useState('all');
  const [affiliateClicks, setAffiliateClicks] = useState(0);

  // Generate sample calendar events
  useEffect(() => {
    const sampleEvents = [
      {
        id: 'event-1',
        title: 'Plantio de Milho',
        date: new Date(2025, 6, 5),
        start: new Date(2025, 6, 5),
        end: new Date(2025, 6, 5),
        type: 'plantio',
        description: 'Início do plantio de milho na época seca',
        completed: false,
        priority: 'alta'
      },
      {
        id: 'event-2',
        title: 'Colheita de Feijão',
        date: new Date(2025, 6, 15),
        start: new Date(2025, 6, 15),
        end: new Date(2025, 6, 15),
        type: 'colheita',
        description: 'Colheita prevista para feijão plantado em abril',
        completed: false,
        priority: 'alta'
      },
      {
        id: 'event-3',
        title: 'Tratamento Preventivo',
        date: new Date(2025, 6, 10),
        start: new Date(2025, 6, 10),
        end: new Date(2025, 6, 10),
        type: 'tratamento',
        description: 'Aplicação preventiva contra pragas',
        completed: false,
        priority: 'media'
      }
    ];
    setEvents(sampleEvents);
  }, []);

  const handleAlertResolved = (alertId: string) => {
    setActiveAlerts(prev => prev.map(alert =>
      alert.id === alertId ? { ...alert, isActive: false } : alert
    ));
  };

  const trackAffiliateClick = (productId: string) => {
    setAffiliateClicks(prev => prev + 1);
    console.log(`DigitalZango Affiliate Click: Product ${productId}`);
  };

  const selectedProvinceData = allAngolaProvinces.find(p => p.id === selectedRegion);
  
  const getRelevantProducts = () => {
    if (!selectedCrop || selectedCrop === 'all') return affiliateProducts;
    return affiliateProducts.filter(product => 
      product.relevantFor.includes(selectedCrop)
    );
  };

  const seasonInfo = useMemo(() => {
    const currentMonth = new Date().getMonth() + 1;
    const region = angolaRegions.find(r => r.id === selectedRegion);

    if (!region) return { season: 'desconhecida', description: '' };

    const isRainySeason = currentMonth >= region.rainySeasonStart || currentMonth <= region.rainySeasonEnd;

    return {
      season: isRainySeason ? 'chuvas' : 'seca',
      description: isRainySeason
        ? 'Época ideal para culturas que necessitam de muita água.'
        : 'Época para culturas resistentes à seca e irrigação.'
    };
  }, [selectedRegion]);

  return (
    <ClientOnly>
      <div className="container mx-auto px-4 py-8">
        {/* Enhanced Header with DigitalZango Branding */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
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
            Sistema inteligente de planejamento agrícola com dados climáticos para todas as 18 províncias de Angola
          </p>
        </div>

        {/* Emergency Alerts Banner */}
        {selectedProvinceData?.avgTemp > 40 && (
          <div className="mb-6 p-4 bg-red-100 border-l-4 border-red-500 rounded-lg">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-red-600" />
              <div>
                <h3 className="font-bold text-red-800">🚨 EMERGÊNCIA CLIMÁTICA</h3>
                <p className="text-red-700">
                  Temperatura extrema de {selectedProvinceData.avgTemp}°C em {selectedProvinceData.name}. 
                  Tome medidas imediatas para proteger suas culturas!
                </p>
                <div className="mt-2 flex gap-2">
                  <Button size="sm" variant="destructive">
                    Ver Ações de Emergência
                  </Button>
                  <Button size="sm" variant="outline">
                    Contactar Extensão Rural
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        <Tabs defaultValue="calendario" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
            <TabsTrigger value="calendario"><CalendarIcon className="w-4 h-4 mr-2" />Calendário</TabsTrigger>
            <TabsTrigger value="alertas">
              <AlertTriangle className="w-4 h-4 mr-2" />Alertas ({activeAlerts.filter(a => a.isActive).length})
            </TabsTrigger>
            <TabsTrigger value="culturas"><Sprout className="w-4 h-4 mr-2" />Culturas</TabsTrigger>
            <TabsTrigger value="clima"><Cloud className="w-4 h-4 mr-2" />Clima</TabsTrigger>
            <TabsTrigger value="produtos"><ShoppingCart className="w-4 h-4 mr-2" />Produtos</TabsTrigger>
          </TabsList>

          <TabsContent value="calendario" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Calendário de Atividades</CardTitle>
                    <CardDescription>
                      Visualize e gerencie suas atividades agrícolas.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div style={{ height: 500 }}>
                      <BigCalendar
                        localizer={localizer}
                        events={events}
                        startAccessor="start"
                        endAccessor="end"
                        culture="pt-BR"
                        messages={{
                          next: 'Próximo',
                          previous: 'Anterior',
                          today: 'Hoje',
                          month: 'Mês',
                          week: 'Semana',
                          day: 'Dia',
                          agenda: 'Agenda',
                          date: 'Data',
                          time: 'Hora',
                          event: 'Evento',
                          noEventsInRange: 'Não há eventos neste período.',
                        }}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                {/* Province Selector - All 18 Provinces */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Província Selecionada
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {allAngolaProvinces.map(province => (
                          <SelectItem key={province.id} value={province.id}>
                            {province.name} ({province.capital})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </CardContent>
                </Card>

                {/* NEW: Critical Weather Alerts */}
                <WeatherAlerts 
                  weatherData={selectedProvinceData} 
                  selectedProvince={selectedProvinceData?.name || ''} 
                />

                {/* NEW: Smart Planting Recommendations */}
                <PlantingRecommendations 
                  selectedProvince={selectedRegion}
                  currentMonth={new Date().getMonth() + 1}
                  weatherData={selectedProvinceData}
                />

                {/* NEW: Pest Early Warning */}
                <PestEarlyWarning 
                  weatherData={selectedProvinceData}
                  selectedCrops={[selectedCrop]}
                />

                {/* NEW: Market Insights */}
                <MarketInsights selectedCrop={selectedCrop} />

                {/* NEW: Part 1 Enhanced Components */}
                <IrrigationScheduler 
                  selectedCrop={selectedCrop}
                  weatherData={selectedProvinceData}
                />

                <FinancialPlanner selectedCrop={selectedCrop} />

                <SoilHealthMonitor selectedProvince={selectedRegion} />

                {/* Weather Display for Selected Province */}
                {selectedProvinceData && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base flex items-center gap-2">
                        <Cloud className="h-4 w-4" />
                        Clima - {selectedProvinceData.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm flex items-center gap-1">
                            <Thermometer className="h-4 w-4 text-red-500" />
                            Temperatura
                          </span>
                          <span className="font-medium">{selectedProvinceData.avgTemp}°C</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm flex items-center gap-1">
                            <Droplets className="h-4 w-4 text-blue-500" />
                            Umidade
                          </span>
                          <span className="font-medium">{selectedProvinceData.humidity}%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm flex items-center gap-1">
                            <Cloud className="h-4 w-4 text-gray-500" />
                            Precipitação
                          </span>
                          <span className="font-medium">{selectedProvinceData.rainfall}mm/ano</span>
                        </div>
                        <Badge variant="outline" className="w-full justify-center">
                          Clima {selectedProvinceData.climate}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </TabsContent>

          {/* Rest of your existing tabs remain the same */}
          <TabsContent value="alertas" className="mt-6 grid gap-4">
            {activeAlerts.filter(alert => alert.isActive).length > 0 ? (
              activeAlerts.filter(alert => alert.isActive).map(alert => (
                <Card key={alert.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg">{alert.title}</h4>
                        <p className="text-gray-600 mt-1">{alert.description}</p>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="mt-3"
                          onClick={() => handleAlertResolved(alert.id)}
                        >
                          Marcar como Resolvido
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card>
                <CardContent className="text-center py-12">
                  <p className="text-muted-foreground">Nenhum alerta ativo no momento.</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="culturas" className="mt-6">
            <div className="space-y-6">
              {/* Crop Selector Dropdown */}
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold">Banco de Dados de Culturas</h3>
                <Select value={selectedCrop} onValueChange={setSelectedCrop}>
                  <SelectTrigger className="w-64">
                    <SelectValue placeholder="Selecione uma cultura" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas as culturas</SelectItem>
                    {enhancedCropDatabase.map(crop => (
                      <SelectItem key={crop.id} value={crop.id}>
                        {crop.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Enhanced Crops Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {enhancedCropDatabase.map(crop => (
                  <Card key={crop.id} className={`cursor-pointer transition-all hover:shadow-lg ${
                    selectedCrop === crop.id ? 'ring-2 ring-green-500 bg-green-50' : ''
                  }`} onClick={() => setSelectedCrop(crop.id)}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Sprout className="h-5 w-5" />
                        {crop.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <h4 className="font-medium text-sm">Épocas de Plantio:</h4>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {crop.plantingSeasons.map((s, i) => (
                            <Badge key={i} variant="secondary">
                              {s.season}: Mês {s.start}-{s.end}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Preço de Mercado:</h4>
                        <div className="text-lg font-bold text-green-600">{crop.marketPrice}</div>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Rendimento Esperado:</h4>
                        <div className="text-sm text-blue-600">{crop.expectedYield}</div>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Margem de Lucro:</h4>
                        <div className="text-sm text-green-600 font-medium">{crop.profitMargin}</div>
                      </div>
                      <div>
                         <h4 className="font-medium text-sm">Pragas Comuns:</h4>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {crop.commonPests.map((pest, i) => (
                            <Badge key={i} variant="destructive" className="text-xs">
                              {pest}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Províncias Adequadas:</h4>
                        <div className="text-xs text-gray-600 mt-1">
                          {crop.suitableProvinces.map(p => 
                            allAngolaProvinces.find(prov => prov.id === p)?.name
                          ).join(', ')}
                        </div>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span>Duração: {crop.growthDuration} dias</span>
                        <Badge variant={crop.waterRequirement === 'high' ? 'default' : 'secondary'}>
                          Água: {crop.waterRequirement}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="clima" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {allAngolaProvinces.map(province => (
                <Card key={province.id} className={selectedRegion === province.id ? 'ring-2 ring-blue-500' : ''}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{province.name}</span>
                      <Badge variant="outline">{province.climate}</Badge>
                    </CardTitle>
                    <CardDescription>{province.capital}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm flex items-center gap-1">
                          <Thermometer className="h-4 w-4 text-red-500" />
                          Temperatura
                        </span>
                        <span className="font-medium">{province.avgTemp}°C</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm flex items-center gap-1">
                          <Droplets className="h-4 w-4 text-blue-500" />
                          Umidade
                        </span>
                        <span className="font-medium">{province.humidity}%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm flex items-center gap-1">
                          <Cloud className="h-4 w-4 text-gray-500" />
                          Precipitação
                        </span>
                        <span className="font-medium">{province.rainfall}mm</span>
                      </div>
                      <Button 
                        size="sm" 
                        variant={selectedRegion === province.id ? "default" : "outline"}
                        className="w-full"
                        onClick={() => setSelectedRegion(province.id)}
                      >
                        {selectedRegion === province.id ? 'Selecionada' : 'Selecionar'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="produtos" className="mt-6">
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-2">Produtos DigitalZango</h3>
                <p className="text-gray-600">
                  Produtos testados e recomendados para agricultura angolana
                </p>
                <div className="mt-4 p-3 bg-green-100 rounded-lg inline-block">
                  <p className="text-sm text-green-800">
                    💰 Total de cliques em produtos: <strong>{affiliateClicks}</strong>
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {getRelevantProducts().map(product => (
                  <Card key={product.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{product.name}</CardTitle>
                          <CardDescription>{product.description}</CardDescription>
                        </div>
                        <Badge variant="secondary">{product.category}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-2xl font-bold text-green-600">{product.price}</span>
                          <div className="flex items-center gap-1">
                            <span className="text-yellow-500">★</span>
                            <span className="text-sm font-medium">{product.rating}</span>
                          </div>
                        </div>

                        {product.discount && (
                          <div className="bg-red-100 p-2 rounded border border-red-200">
                            <p className="text-sm text-red-700 font-medium">
                              🔥 Desconto de {product.discount.percentage}% 
                              até {product.discount.validUntil}
                            </p>
                          </div>
                        )}

                        <div>
                          <h4 className="font-medium text-sm mb-2">Ideal para:</h4>
                          <div className="flex flex-wrap gap-1">
                            {product.relevantFor.map(cropId => {
                              const crop = enhancedCropDatabase.find(c => c.id === cropId);
                              return crop ? (
                                <Badge key={cropId} variant="outline" className="text-xs">
                                  {crop.name}
                                </Badge>
                              ) : null;
                            })}
                          </div>
                        </div>

                        <div className="flex justify-between items-center pt-2 border-t">
                          <span className="text-sm text-blue-600">
                            Comissão: {product.commission}%
                          </span>
                          <Button 
                            onClick={() => trackAffiliateClick(product.id)}
                            className="bg-green-600 hover:bg-green-700"
                          >
                            Ver Produto
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* DigitalZango Brand Section */}
              <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">DZ</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">DigitalZango</h3>
                  <p className="text-gray-600 mb-4">
                    Transformando a agricultura angolana através da inovação digital. 
                    Conectamos agricultores com tecnologia de ponta e soluções práticas.
                  </p>
                  <div className="flex justify-center gap-4">
                    <Button variant="outline" size="sm">
                      📱 Instagram
                    </Button>
                    <Button variant="outline" size="sm">
                      📺 YouTube
                    </Button>
                    <Button variant="outline" size="sm">
                      📝 Blog
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Footer with DigitalZango Branding */}
        <footer className="mt-12 text-center text-gray-500 text-sm">
          <div className="border-t pt-6">
            <p>© 2025 DigitalZango - Calendário Agrícola de Angola</p>
            <p className="mt-1">
              Desenvolvido para agricultores angolanos • Dados climáticos das 18 províncias
            </p>
          </div>
        </footer>
      </div>
    </ClientOnly>
  );
}

