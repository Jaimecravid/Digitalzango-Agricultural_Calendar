// Pest Alert Integration Utilities for Angola Agricultural Calendar

export interface PestAlert {
  id: string;
  name: string;
  namePortuguese: string;
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  season: 'dry' | 'wet' | 'transition' | 'year-round';
  affectedCrops: string[];
  province: string[];
  temperature: {
    min: number;
    max: number;
    optimal: number;
  };
  humidity: {
    min: number;
    max: number;
    optimal: number;
  };
  description: string;
  symptoms: string[];
  prevention: string[];
  treatment: string[];
  pestPageUrl: string;
  activeMonths: number[]; // 0-11 (Jan-Dec)
  weatherTriggers: {
    highTemperature?: number;
    lowTemperature?: number;
    highHumidity?: number;
    lowHumidity?: number;
    rainfall?: boolean;
  };
}

// Common pests in Angola agriculture
export const ANGOLA_PESTS: PestAlert[] = [
  {
    id: 'lagarta-do-cartucho',
    name: 'Fall Armyworm',
    namePortuguese: 'Lagarta-do-cartucho',
    riskLevel: 'high',
    season: 'wet',
    affectedCrops: ['milho', 'sorgo', 'arroz', 'cana-de-açúcar'],
    province: ['Luanda', 'Bengo', 'Kwanza Norte', 'Kwanza Sul', 'Malanje'],
    temperature: { min: 20, max: 35, optimal: 28 },
    humidity: { min: 60, max: 90, optimal: 75 },
    description: 'Praga devastadora que ataca principalmente culturas de cereais',
    symptoms: [
      'Furos nas folhas em formato circular',
      'Presença de lagartas no cartucho das plantas',
      'Fezes escuras nas folhas',
      'Plantas com crescimento retardado'
    ],
    prevention: [
      'Rotação de culturas',
      'Uso de variedades resistentes',
      'Monitoramento regular das culturas',
      'Controle de ervas daninhas'
    ],
    treatment: [
      'Aplicação de inseticidas biológicos',
      'Uso de feromônios para captura',
      'Controle biológico com parasitoides',
      'Aplicação de Bacillus thuringiensis'
    ],
    pestPageUrl: '/pragas/lagarta-do-cartucho',
    activeMonths: [10, 11, 0, 1, 2, 3], // Nov-Mar (wet season)
    weatherTriggers: {
      highTemperature: 30,
      highHumidity: 80,
      rainfall: true
    }
  },
  {
    id: 'mosca-branca',
    name: 'Whitefly',
    namePortuguese: 'Mosca-branca',
    riskLevel: 'medium',
    season: 'dry',
    affectedCrops: ['tomate', 'feijão', 'algodão', 'mandioca'],
    province: ['Huambo', 'Bié', 'Benguela', 'Huíla'],
    temperature: { min: 18, max: 32, optimal: 25 },
    humidity: { min: 40, max: 70, optimal: 55 },
    description: 'Inseto sugador que transmite vírus às plantas',
    symptoms: [
      'Folhas amareladas',
      'Presença de insetos brancos pequenos',
      'Melada nas folhas',
      'Fumagina (fungo preto) nas folhas'
    ],
    prevention: [
      'Uso de plantas armadilhas',
      'Eliminação de ervas daninhas',
      'Uso de mulching reflexivo',
      'Controle de formigas'
    ],
    treatment: [
      'Aplicação de óleo de neem',
      'Uso de armadilhas amarelas',
      'Controle biológico com Encarsia',
      'Pulverização com sabão neutro'
    ],
    pestPageUrl: '/pragas/mosca-branca',
    activeMonths: [4, 5, 6, 7, 8, 9], // May-Sep (dry season)
    weatherTriggers: {
      lowHumidity: 50,
      highTemperature: 28
    }
  },
  {
    id: 'pulgao',
    name: 'Aphids',
    namePortuguese: 'Pulgão',
    riskLevel: 'medium',
    season: 'transition',
    affectedCrops: ['batata', 'tomate', 'feijão', 'repolho'],
    province: ['Luanda', 'Huambo', 'Benguela', 'Kwanza Norte'],
    temperature: { min: 15, max: 25, optimal: 20 },
    humidity: { min: 50, max: 80, optimal: 65 },
    description: 'Insetos sugadores que enfraquecem as plantas',
    symptoms: [
      'Folhas enroladas e deformadas',
      'Presença de insetos pequenos verdes ou pretos',
      'Melada nas folhas',
      'Crescimento retardado'
    ],
    prevention: [
      'Uso de plantas repelentes',
      'Controle de formigas',
      'Adubação equilibrada',
      'Irrigação adequada'
    ],
    treatment: [
      'Pulverização com água e sabão',
      'Uso de óleo de neem',
      'Controle biológico com joaninhas',
      'Aplicação de extrato de alho'
    ],
    pestPageUrl: '/pragas/pulgao',
    activeMonths: [3, 4, 9, 10], // Mar-Apr, Sep-Oct (transition periods)
    weatherTriggers: {
      lowTemperature: 22,
      highHumidity: 70
    }
  },
  {
    id: 'trips',
    name: 'Thrips',
    namePortuguese: 'Trips',
    riskLevel: 'medium',
    season: 'dry',
    affectedCrops: ['cebola', 'alho', 'tomate', 'pimentão'],
    province: ['Namibe', 'Cunene', 'Huíla', 'Benguela'],
    temperature: { min: 20, max: 35, optimal: 28 },
    humidity: { min: 30, max: 60, optimal: 45 },
    description: 'Insetos minúsculos que causam danos às folhas',
    symptoms: [
      'Manchas prateadas nas folhas',
      'Pontos pretos (fezes) nas folhas',
      'Folhas com aspecto bronzeado',
      'Deformação de frutos'
    ],
    prevention: [
      'Uso de mulching',
      'Irrigação por gotejamento',
      'Eliminação de ervas daninhas',
      'Uso de variedades resistentes'
    ],
    treatment: [
      'Aplicação de óleo mineral',
      'Uso de armadilhas azuis',
      'Controle biológico com ácaros predadores',
      'Pulverização com extrato de nim'
    ],
    pestPageUrl: '/pragas/trips',
    activeMonths: [5, 6, 7, 8], // Jun-Aug (peak dry season)
    weatherTriggers: {
      lowHumidity: 40,
      highTemperature: 32
    }
  },
  {
    id: 'broca-do-cafe',
    name: 'Coffee Berry Borer',
    namePortuguese: 'Broca-do-café',
    riskLevel: 'high',
    season: 'year-round',
    affectedCrops: ['café'],
    province: ['Kwanza Sul', 'Huambo', 'Bié', 'Uíge'],
    temperature: { min: 18, max: 28, optimal: 23 },
    humidity: { min: 60, max: 85, optimal: 72 },
    description: 'Praga específica do café que perfura os grãos',
    symptoms: [
      'Furos pequenos nos frutos do café',
      'Grãos perfurados e danificados',
      'Queda prematura de frutos',
      'Redução na qualidade do café'
    ],
    prevention: [
      'Colheita completa dos frutos',
      'Limpeza dos cafezais',
      'Uso de armadilhas com álcool',
      'Manejo adequado da sombra'
    ],
    treatment: [
      'Aplicação de fungos entomopatogênicos',
      'Uso de armadilhas com feromônios',
      'Controle cultural rigoroso',
      'Aplicação de inseticidas específicos'
    ],
    pestPageUrl: '/pragas/broca-do-cafe',
    activeMonths: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Year-round
    weatherTriggers: {
      highHumidity: 75,
      highTemperature: 25
    }
  }
];

// Get pest alerts for specific conditions
export const getPestAlertsForConditions = (
  temperature: number,
  humidity: number,
  month: number,
  province: string
): PestAlert[] => {
  return ANGOLA_PESTS.filter(pest => {
    // Check if pest is active in current month
    const isActiveMonth = pest.activeMonths.includes(month);
    
    // Check if pest affects current province
    const affectsProvince = pest.province.includes(province);
    
    // Check temperature conditions
    const temperatureMatch = temperature >= pest.temperature.min && temperature <= pest.temperature.max;
    
    // Check humidity conditions
    const humidityMatch = humidity >= pest.humidity.min && humidity <= pest.humidity.max;
    
    // Check weather triggers
    let weatherTriggerMatch = true;
    if (pest.weatherTriggers.highTemperature && temperature < pest.weatherTriggers.highTemperature) {
      weatherTriggerMatch = false;
    }
    if (pest.weatherTriggers.lowTemperature && temperature > pest.weatherTriggers.lowTemperature) {
      weatherTriggerMatch = false;
    }
    if (pest.weatherTriggers.highHumidity && humidity < pest.weatherTriggers.highHumidity) {
      weatherTriggerMatch = false;
    }
    if (pest.weatherTriggers.lowHumidity && humidity > pest.weatherTriggers.lowHumidity) {
      weatherTriggerMatch = false;
    }
    
    return isActiveMonth && affectsProvince && temperatureMatch && humidityMatch && weatherTriggerMatch;
  });
};

// Get pest risk level for a specific date
export const getPestRiskForDate = (
  date: Date,
  temperature: number,
  humidity: number,
  province: string
): { level: 'low' | 'medium' | 'high' | 'critical', pests: PestAlert[] } => {
  const month = date.getMonth();
  const activePests = getPestAlertsForConditions(temperature, humidity, month, province);
  
  if (activePests.length === 0) {
    return { level: 'low', pests: [] };
  }
  
  // Determine overall risk level based on highest individual pest risk
  const highestRisk = activePests.reduce((max, pest) => {
    const riskLevels = { low: 1, medium: 2, high: 3, critical: 4 };
    return riskLevels[pest.riskLevel] > riskLevels[max] ? pest.riskLevel : max;
  }, 'low' as 'low' | 'medium' | 'high' | 'critical');
  
  return { level: highestRisk, pests: activePests };
};

// Get seasonal pest warnings
export const getSeasonalPestWarnings = (
  season: 'dry' | 'wet' | 'transition',
  province: string
): PestAlert[] => {
  return ANGOLA_PESTS.filter(pest => 
    (pest.season === season || pest.season === 'year-round') && 
    pest.province.includes(province)
  );
};

// Determine current season based on month
export const getCurrentSeason = (month: number): 'dry' | 'wet' | 'transition' => {
  if (month >= 4 && month <= 8) return 'dry'; // May-Sep
  if (month >= 10 || month <= 2) return 'wet'; // Nov-Mar
  return 'transition'; // Mar-Apr, Sep-Oct
};

// Generate pest recommendations based on current conditions
export const generatePestRecommendations = (
  temperature: number,
  humidity: number,
  month: number,
  province: string
): Array<{
  type: 'warning' | 'info' | 'success';
  title: string;
  description: string;
  action: string;
  priority: 'low' | 'medium' | 'high';
  pestId?: string;
}> => {
  const activePests = getPestAlertsForConditions(temperature, humidity, month, province);
  const season = getCurrentSeason(month);
  const seasonalPests = getSeasonalPestWarnings(season, province);
  
  const recommendations = [];
  
  // Active pest warnings
  activePests.forEach(pest => {
    recommendations.push({
      type: pest.riskLevel === 'high' || pest.riskLevel === 'critical' ? 'warning' : 'info',
      title: `Alerta: ${pest.namePortuguese}`,
      description: `Condições favoráveis para ${pest.namePortuguese}`,
      action: `Monitorar ${pest.affectedCrops.join(', ')}`,
      priority: pest.riskLevel === 'critical' ? 'high' : pest.riskLevel === 'high' ? 'medium' : 'low',
      pestId: pest.id
    });
  });
  
  // Seasonal recommendations
  if (seasonalPests.length > 0) {
    recommendations.push({
      type: 'info',
      title: `Pragas da Estação ${season === 'dry' ? 'Seca' : season === 'wet' ? 'Chuvosa' : 'Transição'}`,
      description: `Monitorar pragas típicas desta época`,
      action: 'Implementar medidas preventivas',
      priority: 'medium'
    });
  }
  
  // General prevention recommendation
  recommendations.push({
    type: 'success',
    title: 'Prevenção de Pragas',
    description: 'Manter monitoramento regular das culturas',
    action: 'Inspeção semanal das plantas',
    priority: 'medium'
  });
  
  return recommendations;
};

