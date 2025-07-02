import { CropData, PestAlert, WeatherAlert, RegionData } from '@/types/calendar';

export const angolaRegions: RegionData[] = [
  {
    id: 'luanda',
    name: 'Luanda',
    province: 'Luanda',
    climate: 'tropical',
    rainySeasonStart: 10,
    rainySeasonEnd: 4,
    averageRainfall: 400,
    averageTemperature: 25
  },
  {
    id: 'huambo',
    name: 'Huambo',
    province: 'Huambo',
    climate: 'subtropical',
    rainySeasonStart: 10,
    rainySeasonEnd: 3,
    averageRainfall: 1200,
    averageTemperature: 19
  },
  {
    id: 'benguela',
    name: 'Benguela',
    province: 'Benguela',
    climate: 'tropical',
    rainySeasonStart: 11,
    rainySeasonEnd: 4,
    averageRainfall: 350,
    averageTemperature: 24
  },
  {
    id: 'huila',
    name: 'Huíla',
    province: 'Huíla',
    climate: 'subtropical',
    rainySeasonStart: 10,
    rainySeasonEnd: 3,
    averageRainfall: 800,
    averageTemperature: 20
  }
];

export const cropCalendar = {
  milho: {
    name: 'Milho',
    plantingSeasons: [
      { start: 10, end: 12, season: 'chuvas' },
      { start: 3, end: 5, season: 'seca' }
    ],
    growthPeriod: 120,
    waterRequirement: 'medium',
    commonPests: ['pulgao', 'lagarta', 'broca']
  },
  feijao: {
    name: 'Feijão',
    plantingSeasons: [
      { start: 10, end: 11, season: 'chuvas' },
      { start: 4, end: 6, season: 'seca' }
    ],
    growthPeriod: 90,
    waterRequirement: 'medium',
    commonPests: ['mosca-branca', 'pulgao']
  },
  mandioca: {
    name: 'Mandioca',
    plantingSeasons: [
      { start: 9, end: 12, season: 'chuvas' }
    ],
    growthPeriod: 365,
    waterRequirement: 'low',
    commonPests: ['cochonilha', 'acaro']
  },
  batata_doce: {
    name: 'Batata-doce',
    plantingSeasons: [
      { start: 9, end: 11, season: 'chuvas' },
      { start: 3, end: 5, season: 'seca' }
    ],
    growthPeriod: 120,
    waterRequirement: 'medium',
    commonPests: ['gorgulho', 'broca']
  }
};

export const currentPestAlerts: PestAlert[] = [
  {
    id: 'alert-001',
    pestName: 'Pulgão',
    severity: 'media',
    affectedCrops: ['milho', 'feijao'],
    region: 'luanda',
    description: 'Infestação moderada de pulgões detectada em culturas de milho e feijão na região de Luanda.',
    treatment: 'Aplicar inseticida sistêmico ou usar predadores naturais como joaninhas. Monitorar semanalmente.',
    dateReported: new Date('2025-06-25'),
    isActive: true
  },
  {
    id: 'alert-002',
    pestName: 'Mosca-branca',
    severity: 'alta',
    affectedCrops: ['feijao', 'batata_doce'],
    region: 'benguela',
    description: 'Alta incidência de mosca-branca causando amarelecimento das folhas em Benguela.',
    treatment: 'Uso de armadilhas amarelas e aplicação de óleo de neem. Remover plantas infectadas.',
    dateReported: new Date('2025-06-27'),
    isActive: true
  },
  {
    id: 'alert-003',
    pestName: 'Cochonilha',
    severity: 'baixa',
    affectedCrops: ['mandioca'],
    region: 'huambo',
    description: 'Presença de cochonilha em plantações de mandioca no Huambo.',
    treatment: 'Aplicação de sabão potássico e controle biológico com predadores naturais.',
    dateReported: new Date('2025-06-28'),
    isActive: true
  }
];

export const weatherAlerts: WeatherAlert[] = [
  {
    id: 'weather-001',
    type: 'chuva',
    severity: 'media',
    region: 'luanda',
    description: 'Previsão de chuvas intensas para os próximos 3 dias.',
    startDate: new Date('2025-06-30'),
    endDate: new Date('2025-07-02'),
    recommendations: [
      'Evitar plantio em áreas mal drenadas',
      'Verificar sistemas de drenagem',
      'Proteger mudas jovens'
    ]
  }
];

// ENHANCED DATA FOR ALL 3 PARTS

// Enhanced crop data with financial and farming details
export const enhancedCropData = {
  milho: {
    ...cropCalendar.milho,
    id: 'milho',
    marketPrice: 'Kz 180-220/kg',
    expectedYield: '3-5 ton/hectare',
    profitMargin: '40-60%',
    seedCost: 'Kz 25.000/hectare',
    fertilizerCost: 'Kz 45.000/hectare',
    laborCost: 'Kz 35.000/hectare',
    soilType: ['argiloso', 'franco'],
    riskFactors: ['seca', 'pragas', 'preços voláteis'],
    suitableProvinces: ['luanda', 'benguela', 'huila', 'huambo']
  },
  feijao: {
    ...cropCalendar.feijao,
    id: 'feijao',
    marketPrice: 'Kz 350-450/kg',
    expectedYield: '1-2 ton/hectare',
    profitMargin: '50-70%',
    seedCost: 'Kz 30.000/hectare',
    fertilizerCost: 'Kz 35.000/hectare',
    laborCost: 'Kz 25.000/hectare',
    soilType: ['franco', 'arenoso'],
    riskFactors: ['doenças', 'chuva excessiva'],
    suitableProvinces: ['huila', 'huambo', 'benguela']
  },
  mandioca: {
    ...cropCalendar.mandioca,
    id: 'mandioca',
    marketPrice: 'Kz 80-120/kg',
    expectedYield: '10-15 ton/hectare',
    profitMargin: '30-50%',
    seedCost: 'Kz 15.000/hectare',
    fertilizerCost: 'Kz 20.000/hectare',
    laborCost: 'Kz 40.000/hectare',
    soilType: ['arenoso', 'franco'],
    riskFactors: ['pragas', 'doenças virais'],
    suitableProvinces: ['luanda', 'benguela', 'huambo']
  },
  batata_doce: {
    ...cropCalendar.batata_doce,
    id: 'batata_doce',
    marketPrice: 'Kz 150-200/kg',
    expectedYield: '8-12 ton/hectare',
    profitMargin: '40-60%',
    seedCost: 'Kz 20.000/hectare',
    fertilizerCost: 'Kz 30.000/hectare',
    laborCost: 'Kz 30.000/hectare',
    soilType: ['arenoso', 'franco'],
    riskFactors: ['pragas', 'armazenamento'],
    suitableProvinces: ['huila', 'benguela']
  },
  cafe: {
    id: 'cafe',
    name: 'Café',
    plantingSeasons: [{ start: 10, end: 12, season: 'chuvas' }],
    growthPeriod: 1095,
    waterRequirement: 'high',
    commonPests: ['broca-do-café', 'ferrugem'],
    marketPrice: 'Kz 800-1200/kg',
    expectedYield: '1-2 ton/hectare',
    profitMargin: '60-80%',
    seedCost: 'Kz 50.000/hectare',
    fertilizerCost: 'Kz 60.000/hectare',
    laborCost: 'Kz 80.000/hectare',
    soilType: ['argiloso', 'franco'],
    riskFactors: ['mudanças climáticas', 'pragas', 'mercado internacional'],
    suitableProvinces: ['huila']
  },
  banana: {
    id: 'banana',
    name: 'Banana',
    plantingSeasons: [{ start: 1, end: 12, season: 'todo ano' }],
    growthPeriod: 365,
    waterRequirement: 'high',
    commonPests: ['nematóides', 'sigatoka'],
    marketPrice: 'Kz 200-300/kg',
    expectedYield: '20-30 ton/hectare',
    profitMargin: '50-70%',
    seedCost: 'Kz 40.000/hectare',
    fertilizerCost: 'Kz 55.000/hectare',
    laborCost: 'Kz 65.000/hectare',
    soilType: ['franco', 'argiloso'],
    riskFactors: ['doenças', 'vento forte'],
    suitableProvinces: ['benguela', 'luanda']
  }
};

// Complete Angola provinces (all 18)
export const completeAngolaProvinces = [
  ...angolaRegions,
  { id: 'bie', name: 'Bié', province: 'Bié', climate: 'subtropical', rainySeasonStart: 10, rainySeasonEnd: 3, averageRainfall: 1100, averageTemperature: 21 },
  { id: 'namibe', name: 'Namibe', province: 'Namibe', climate: 'arid', rainySeasonStart: 11, rainySeasonEnd: 3, averageRainfall: 50, averageTemperature: 25 },
  { id: 'cunene', name: 'Cunene', province: 'Cunene', climate: 'semi-arid', rainySeasonStart: 11, rainySeasonEnd: 4, averageRainfall: 400, averageTemperature: 28 },
  { id: 'cuando-cubango', name: 'Cuando Cubango', province: 'Cuando Cubango', climate: 'semi-arid', rainySeasonStart: 10, rainySeasonEnd: 4, averageRainfall: 600, averageTemperature: 25 },
  { id: 'moxico', name: 'Moxico', province: 'Moxico', climate: 'tropical', rainySeasonStart: 10, rainySeasonEnd: 4, averageRainfall: 1000, averageTemperature: 24 },
  { id: 'lunda-norte', name: 'Lunda Norte', province: 'Lunda Norte', climate: 'tropical', rainySeasonStart: 10, rainySeasonEnd: 4, averageRainfall: 1300, averageTemperature: 25 },
  { id: 'lunda-sul', name: 'Lunda Sul', province: 'Lunda Sul', climate: 'tropical', rainySeasonStart: 10, rainySeasonEnd: 4, averageRainfall: 1250, averageTemperature: 24 },
  { id: 'malanje', name: 'Malanje', province: 'Malanje', climate: 'tropical', rainySeasonStart: 10, rainySeasonEnd: 4, averageRainfall: 1100, averageTemperature: 23 },
  { id: 'uige', name: 'Uíge', province: 'Uíge', climate: 'tropical', rainySeasonStart: 10, rainySeasonEnd: 4, averageRainfall: 1400, averageTemperature: 22 },
  { id: 'zaire', name: 'Zaire', province: 'Zaire', climate: 'tropical', rainySeasonStart: 10, rainySeasonEnd: 4, averageRainfall: 1200, averageTemperature: 25 },
  { id: 'cabinda', name: 'Cabinda', province: 'Cabinda', climate: 'tropical', rainySeasonStart: 10, rainySeasonEnd: 4, averageRainfall: 1300, averageTemperature: 26 },
  { id: 'kwanza-norte', name: 'Kwanza Norte', province: 'Kwanza Norte', climate: 'tropical', rainySeasonStart: 10, rainySeasonEnd: 4, averageRainfall: 1000, averageTemperature: 25 },
  { id: 'kwanza-sul', name: 'Kwanza Sul', province: 'Kwanza Sul', climate: 'tropical', rainySeasonStart: 10, rainySeasonEnd: 4, averageRainfall: 800, averageTemperature: 24 },
  { id: 'bengo', name: 'Bengo', province: 'Bengo', climate: 'tropical', rainySeasonStart: 10, rainySeasonEnd: 4, averageRainfall: 600, averageTemperature: 26 }
];

// DigitalZango Affiliate Products for monetization (Part 3)
export const digitalZangoProducts = [
  {
    id: 'dz-001',
    name: 'Kit de Irrigação Inteligente AgriTech Pro',
    description: 'Sistema automatizado com sensores IoT e controle via smartphone',
    price: 'Kz 85.000',
    rating: 4.8,
    category: 'Irrigação',
    relevantFor: ['milho', 'feijao', 'cafe'],
    commission: 15,
    discount: { percentage: 20, validUntil: '2025-08-31' },
    features: ['Controle automático', 'App móvel', 'Economia 40% água', 'Sensores IoT'],
    waterSavings: '40%',
    roiMonths: 8,
    affiliateLink: 'https://digitalzango.com/affiliate/irrigation-pro'
  },
  {
    id: 'dz-002',
    name: 'Fertilizante Orgânico Premium Angola',
    description: 'Fertilizante 100% orgânico desenvolvido para solos angolanos',
    price: 'Kz 12.500',
    rating: 4.7,
    category: 'Fertilizantes',
    relevantFor: ['milho', 'feijao', 'mandioca'],
    commission: 12,
    features: ['Certificado orgânico', 'Rico em nutrientes', 'Melhora solo', '25kg'],
    yieldIncrease: '25%',
    roiMonths: 3,
    affiliateLink: 'https://digitalzango.com/affiliate/fertilizer-premium'
  },
  {
    id: 'dz-003',
    name: 'Sementes Híbridas Resistentes à Seca',
    description: 'Variedades melhoradas adaptadas ao clima angolano',
    price: 'Kz 18.000',
    rating: 4.9,
    category: 'Sementes',
    relevantFor: ['milho', 'feijao'],
    commission: 18,
    discount: { percentage: 15, validUntil: '2025-07-15' },
    features: ['Resistente à seca', 'Alto rendimento', 'Ciclo otimizado', 'Garantia'],
    yieldIncrease: '35%',
    roiMonths: 4,
    affiliateLink: 'https://digitalzango.com/affiliate/drought-seeds'
  },
  {
    id: 'dz-004',
    name: 'Pulverizador Elétrico Profissional',
    description: 'Equipamento para aplicação de defensivos e fertilizantes',
    price: 'Kz 35.000',
    rating: 4.6,
    category: 'Equipamentos',
    relevantFor: ['milho', 'cafe', 'banana'],
    commission: 20,
    features: ['Bateria recarregável', 'Bico ajustável', 'Tanque 16L', 'Ergonômico'],
    laborSavings: '60%',
    roiMonths: 6,
    affiliateLink: 'https://digitalzango.com/affiliate/electric-sprayer'
  },
  {
    id: 'dz-005',
    name: 'Sensor de Solo Inteligente',
    description: 'Monitoramento em tempo real de pH, umidade e nutrientes',
    price: 'Kz 45.000',
    rating: 4.8,
    category: 'Monitoramento',
    relevantFor: ['cafe', 'banana', 'milho'],
    commission: 22,
    features: ['Monitoramento 24/7', 'App móvel', 'Alertas automáticos', 'Bateria 2 anos'],
    costSavings: '30%',
    roiMonths: 5,
    affiliateLink: 'https://digitalzango.com/affiliate/soil-sensor'
  }
];

// Community farmer experiences for social features (Part 2)
export const farmerExperiences = [
  {
    id: 'exp-001',
    farmer: 'João Silva',
    location: 'Huambo',
    crop: 'milho',
    season: 'Chuvas 2024',
    insight: 'Uso de sementes resistentes aumentou produção em 30% mesmo com pouca chuva.',
    yield: '4.2 ton/hectare',
    profit: '+45%',
    verified: true,
    likes: 23,
    shares: 8
  },
  {
    id: 'exp-002',
    farmer: 'Maria Santos',
    location: 'Benguela',
    crop: 'feijao',
    season: 'Seca 2024',
    insight: 'Irrigação por gotejamento reduziu custos de água em 60%.',
    yield: '1.8 ton/hectare',
    profit: '+35%',
    verified: true,
    likes: 19,
    shares: 12
  },
  {
    id: 'exp-003',
    farmer: 'António Mukonko',
    location: 'Luanda',
    crop: 'mandioca',
    season: 'Todo ano 2024',
    insight: 'Controle biológico de pragas eliminou uso de pesticidas químicos.',
    yield: '12 ton/hectare',
    profit: '+28%',
    verified: true,
    likes: 31,
    shares: 15
  },
  {
    id: 'exp-004',
    farmer: 'Ana Fernandes',
    location: 'Huíla',
    crop: 'cafe',
    season: 'Chuvas 2024',
    insight: 'Técnicas de sombreamento melhoraram qualidade dos grãos significativamente.',
    yield: '1.5 ton/hectare',
    profit: '+52%',
    verified: true,
    likes: 27,
    shares: 9
  }
];

// Soil health data for monitoring (Part 1)
export const soilHealthData = {
  luanda: { ph: 6.2, nitrogen: 68, phosphorus: 45, potassium: 72, organicMatter: 58 },
  huambo: { ph: 5.8, nitrogen: 55, phosphorus: 38, potassium: 65, organicMatter: 45 },
  benguela: { ph: 6.5, nitrogen: 72, phosphorus: 52, potassium: 78, organicMatter: 62 },
  huila: { ph: 6.0, nitrogen: 60, phosphorus: 42, potassium: 70, organicMatter: 50 }
};

// Analytics data for DigitalZango dashboard (Part 3)
export const analyticsData = {
  affiliateClicks: 156,
  contentShares: 89,
  userEngagement: 67,
  monthlyRevenue: 'Kz 125.000',
  topProducts: ['dz-001', 'dz-003', 'dz-002'],
  conversionRate: 12.5
};
