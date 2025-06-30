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
