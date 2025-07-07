import { Crop } from '../types/agriculture';

export const ANGOLA_CROPS: Crop[] = [
  {
    id: "milho",
    name: "Milho",
    scientificName: "Zea mays",
    icon: "🌽",
    category: "cereal",
    season: "Outubro - Março",
    difficulty: "Fácil",
    yield: "2-4 ton/ha",
    description: "Cultura principal em Angola, adaptada ao clima tropical",
    detailedDescription: "O milho é a cultura cerealífera mais importante de Angola, cultivada em todas as províncias.",
    tips: [
      "Plantio no início das chuvas (outubro-novembro)",
      "Espaçamento recomendado: 75x25cm",
      "Colheita aos 120-140 dias após plantio",
      "Aplicar fertilizante NPK na base e cobertura",
      "Controlar pragas como lagarta-do-cartucho"
    ],
    provinces: ["Huambo", "Bié", "Malanje", "Uíge", "Kwanza Norte", "Kwanza Sul"],
    color: "from-yellow-400 to-orange-500",
    plantingMonths: [10, 11, 12],
    harvestMonths: [2, 3, 4],
    marketPrice: {
      min: 180,
      max: 250,
      currency: "AOA",
      unit: "kg"
    },
    soilRequirements: {
      type: ["Franco", "Franco-arenoso", "Franco-argiloso"],
      ph: { min: 5.5, max: 7.0 },
      drainage: "Boa"
    },
    climateRequirements: {
      rainfall: { min: 600, max: 1200 },
      temperature: { min: 18, max: 30 },
      humidity: { min: 60, max: 80 }
    },
    affiliateProducts: ["sementes-milho", "fertilizante-npk", "herbicida-milho"],
    pests: ["lagarta-cartucho", "broca-colmo", "pulgao"],
    diseases: ["ferrugem", "mancha-foliar", "podridao-espiga"],
    nutritionalValue: {
      calories: 365,
      protein: 9.4,
      carbs: 74.3,
      fiber: 7.3
    },
    storageInfo: "Armazenar em local seco, ventilado, protegido de roedores",
    processingOptions: ["Farinha", "Fubá", "Óleo", "Ração animal"],
    exportPotential: true,
    sustainabilityScore: 8,
    waterRequirement: "Médio",
    laborIntensity: "Médio",
    mechanizationLevel: "Semi-mecanizado",
    images: ["/images/crops/milho-1.jpg", "/images/crops/milho-2.jpg"],
    videos: ["/videos/milho-plantio.mp4"],
    relatedCrops: ["feijao", "abobora"],
    rotationCrops: ["feijao", "soja", "girassol"],
    companionPlants: ["feijao", "abobora", "quiabo"]
  },
  {
    id: "feijao",
    name: "Feijão",
    scientificName: "Phaseolus vulgaris",
    icon: "🫘",
    category: "legume",
    season: "Setembro - Janeiro",
    difficulty: "Médio",
    yield: "1-2 ton/ha",
    description: "Rica fonte de proteína, essencial na dieta angolana",
    detailedDescription: "O feijão é uma leguminosa fundamental na segurança alimentar de Angola.",
    tips: [
      "Solo bem drenado é essencial",
      "Irrigação moderada e regular",
      "Excelente para rotação com milho",
      "Colheita quando vagens estão secas",
      "Armazenar em recipientes herméticos"
    ],
    provinces: ["Huambo", "Benguela", "Cuanza Sul", "Bié"],
    color: "from-red-400 to-red-600",
    plantingMonths: [9, 10, 11],
    harvestMonths: [12, 1, 2],
    marketPrice: {
      min: 350,
      max: 500,
      currency: "AOA",
      unit: "kg"
    },
    soilRequirements: {
      type: ["Franco", "Franco-arenoso"],
      ph: { min: 6.0, max: 7.5 },
      drainage: "Boa"
    },
    climateRequirements: {
      rainfall: { min: 400, max: 800 },
      temperature: { min: 15, max: 25 },
      humidity: { min: 50, max: 70 }
    },
    affiliateProducts: ["sementes-feijao", "inoculante", "fungicida"],
    pests: ["vaquinha", "mosca-branca", "trips"],
    diseases: ["antracnose", "ferrugem", "mosaico"],
    nutritionalValue: {
      calories: 347,
      protein: 23.0,
      carbs: 63.0,
      fiber: 15.2
    },
    storageInfo: "Secar bem antes do armazenamento, usar inseticidas naturais",
    processingOptions: ["Farinha", "Conservas", "Produtos processados"],
    exportPotential: true,
    sustainabilityScore: 9,
    waterRequirement: "Médio",
    laborIntensity: "Médio",
    mechanizationLevel: "Manual",
    images: ["/images/crops/feijao-1.jpg"],
    videos: [],
    relatedCrops: ["milho", "abobora"],
    rotationCrops: ["milho", "sorgo", "milheto"],
    companionPlants: ["milho", "abobora", "batata-doce"]
  },
  {
    id: "mandioca",
    name: "Mandioca",
    scientificName: "Manihot esculenta",
    icon: "🍠",
    category: "tuber",
    season: "Todo o ano",
    difficulty: "Fácil",
    yield: "15-25 ton/ha",
    description: "Cultura de segurança alimentar, resistente à seca",
    detailedDescription: "A mandioca é uma cultura essencial para a segurança alimentar em Angola.",
    tips: [
      "Propagação por estacas",
      "Colheita 8-12 meses após plantio",
      "Resistente à seca",
      "Solo bem drenado",
      "Evitar encharcamento"
    ],
    provinces: ["Kwanza Norte", "Uíge", "Zaire", "Malanje"],
    color: "from-amber-400 to-yellow-600",
    plantingMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    harvestMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    marketPrice: {
      min: 80,
      max: 150,
      currency: "AOA",
      unit: "kg"
    },
    soilRequirements: {
      type: ["Franco-arenoso", "Arenoso"],
      ph: { min: 5.0, max: 7.0 },
      drainage: "Boa"
    },
    climateRequirements: {
      rainfall: { min: 300, max: 1000 },
      temperature: { min: 20, max: 35 },
      humidity: { min: 40, max: 80 }
    },
    affiliateProducts: ["estacas-mandioca", "fertilizante-organico"],
    pests: ["mosca-branca", "acaro", "trips"],
    diseases: ["mosaico", "bacteriose"],
    nutritionalValue: {
      calories: 160,
      protein: 1.4,
      carbs: 38.1,
      fiber: 1.8
    },
    storageInfo: "Consumir fresca ou processar rapidamente",
    processingOptions: ["Farinha", "Tapioca", "Fécula"],
    exportPotential: true,
    sustainabilityScore: 9,
    waterRequirement: "Baixo",
    laborIntensity: "Baixo",
    mechanizationLevel: "Manual",
    images: ["/images/crops/mandioca-1.jpg"],
    videos: [],
    relatedCrops: ["batata-doce", "inhame"],
    rotationCrops: ["milho", "feijao"],
    companionPlants: ["feijao", "amendoim"]
  },
  {
    id: "arroz",
    name: "Arroz",
    scientificName: "Oryza sativa",
    icon: "🌾",
    category: "cereal",
    season: "Outubro - Abril",
    difficulty: "Médio",
    yield: "3-6 ton/ha",
    description: "Cereal básico cultivado em zonas húmidas, essencial para segurança alimentar",
    detailedDescription: "O arroz é um cereal fundamental cultivado em zonas alagadiças de Angola, especialmente nas províncias costeiras.",
    tips: [
      "Plantio em campos alagados ou irrigados",
      "Transplante das mudas aos 25-30 dias",
      "Manter lâmina d'água constante",
      "Colheita quando grãos estão dourados",
      "Secagem adequada antes armazenamento"
    ],
    provinces: ["Luanda", "Bengo", "Kwanza Norte", "Malanje", "Uíge"],
    color: "from-green-400 to-emerald-500",
    plantingMonths: [10, 11, 12],
    harvestMonths: [2, 3, 4],
    marketPrice: {
      min: 150,
      max: 220,
      currency: "AOA",
      unit: "kg"
    },
    soilRequirements: {
      type: ["Argiloso", "Franco-argiloso"],
      ph: { min: 5.5, max: 7.0 },
      drainage: "Pobre" // Rice needs waterlogged conditions
    },
    climateRequirements: {
      rainfall: { min: 1200, max: 2500 },
      temperature: { min: 20, max: 35 },
      humidity: { min: 70, max: 90 }
    },
    affiliateProducts: ["sementes-arroz", "fertilizante-arroz", "sistema-irrigacao"],
    pests: ["broca-colmo", "percevejo", "lagarta-folha"],
    diseases: ["brusone", "queima-folhas", "podridao-raiz"],
    nutritionalValue: {
      calories: 365,
      protein: 7.1,
      carbs: 77.2,
      fiber: 1.4
    },
    storageInfo: "Secar até 14% umidade, armazenar em silos ventilados",
    processingOptions: ["Arroz branco", "Farinha de arroz", "Óleo de farelo"],
    exportPotential: true,
    sustainabilityScore: 7,
    waterRequirement: "Alto",
    laborIntensity: "Alto",
    mechanizationLevel: "Semi-mecanizado",
    images: ["/images/crops/arroz-1.jpg"],
    videos: [],
    relatedCrops: ["milho", "sorgo"],
    rotationCrops: ["feijao", "soja"],
    companionPlants: ["peixe", "pato"] // Aquaculture integration
  }
];

// Export functions for data access
export const getCropById = (id: string): Crop | undefined => {
  return ANGOLA_CROPS.find(crop => crop.id === id);
};

export const getCropsByCategory = (category: Crop['category']): Crop[] => {
  return ANGOLA_CROPS.filter(crop => crop.category === category);
};

export const getCropsByProvince = (province: string): Crop[] => {
  return ANGOLA_CROPS.filter(crop => crop.provinces.includes(province));
};

export const getCropsBySeason = (month: number): Crop[] => {
  return ANGOLA_CROPS.filter(crop => 
    crop.plantingMonths.includes(month) || crop.harvestMonths.includes(month)
  );
};

export const searchCrops = (query: string): Crop[] => {
  const lowercaseQuery = query.toLowerCase();
  return ANGOLA_CROPS.filter(crop =>
    crop.name.toLowerCase().includes(lowercaseQuery) ||
    crop.description.toLowerCase().includes(lowercaseQuery) ||
    crop.scientificName.toLowerCase().includes(lowercaseQuery)
  );
};
