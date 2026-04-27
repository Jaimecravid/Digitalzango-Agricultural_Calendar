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
  },
  {
    id: "batata-doce",
    name: "Batata-doce",
    scientificName: "Ipomoea batatas",
    icon: "🍠",
    category: "tuber",
    season: "Todo o ano",
    difficulty: "Fácil",
    yield: "10-20 ton/ha",
    description: "Tubérculo nutritivo, altamente produtivo e resistente à seca",
    detailedDescription: "A batata-doce é uma cultura versátil e nutritiva, amplamente cultivada em Angola para consumo humano e animal.",
    tips: [
      "Plantio por ramos ou estacas",
      "Colheita 3-5 meses após plantio",
      "Tolera solos pobres",
      "Boa resistência à seca",
      "Armazenar em local escuro e arejado"
    ],
    provinces: ["Huambo", "Bié", "Malanje", "Uíge", "Kwanza Norte", "Kwanza Sul", "Benguela"],
    color: "from-orange-400 to-red-500",
    plantingMonths: [10, 11, 12, 1, 2],
    harvestMonths: [3, 4, 5, 6],
    marketPrice: {
      min: 100,
      max: 180,
      currency: "AOA",
      unit: "kg"
    },
    soilRequirements: {
      type: ["Franco-arenoso", "Arenoso"],
      ph: { min: 5.5, max: 6.5 },
      drainage: "Boa"
    },
    climateRequirements: {
      rainfall: { min: 500, max: 1000 },
      temperature: { min: 20, max: 30 },
      humidity: { min: 50, max: 80 }
    },
    affiliateProducts: ["ramos-batata-doce", "fertilizante-organico"],
    pests: ["lagarta", "acaro", "besouro"],
    diseases: ["mancha-foliar", "podridao-raiz"],
    nutritionalValue: {
      calories: 86,
      protein: 1.6,
      carbs: 20.1,
      fiber: 3.0
    },
    storageInfo: "Armazenar em ambiente fresco e escuro, dura até 6 meses",
    processingOptions: ["Farinha", "Purê", "Chips", "Flocos"],
    exportPotential: true,
    sustainabilityScore: 9,
    waterRequirement: "Baixo",
    laborIntensity: "Médio",
    mechanizationLevel: "Manual",
    images: ["/images/crops/batata-doce-1.jpg"],
    videos: [],
    relatedCrops: ["mandioca", "inhame"],
    rotationCrops: ["milho", "feijao"],
    companionPlants: ["feijao", "amendoim"]
  },
  {
    id: "amendoim",
    name: "Amendoim",
    scientificName: "Arachis hypogaea",
    icon: "🥜",
    category: "oilseed",
    season: "Outubro - Março",
    difficulty: "Médio",
    yield: "1-2 ton/ha",
    description: "Leguminosa oleaginosa, excelente para rotação de culturas",
    detailedDescription: "O amendoim é uma cultura importante em Angola, utilizada para óleo, consumo direto e como cultura de cobertura.",
    tips: [
      "Plantio em solo solto e bem drenado",
      "Colheita quando folhas amarelam",
      "Deixar secar no campo 2-3 dias",
      "Excelente fixador de nitrogénio",
      "Requer pouca água"
    ],
    provinces: ["Huambo", "Bié", "Malanje", "Huíla", "Cunene"],
    color: "from-yellow-300 to-amber-500",
    plantingMonths: [10, 11, 12],
    harvestMonths: [2, 3, 4],
    marketPrice: {
      min: 400,
      max: 600,
      currency: "AOA",
      unit: "kg"
    },
    soilRequirements: {
      type: ["Franco-arenoso", "Arenoso"],
      ph: { min: 5.5, max: 7.0 },
      drainage: "Boa"
    },
    climateRequirements: {
      rainfall: { min: 400, max: 800 },
      temperature: { min: 20, max: 30 },
      humidity: { min: 40, max: 70 }
    },
    affiliateProducts: ["sementes-amendoim", "fungicida"],
    pests: ["lagarta", "caruncho", "nematoides"],
    diseases: ["mancha-foliar", "podridao-raiz", "mancha-de-alternaria"],
    nutritionalValue: {
      calories: 567,
      protein: 25.8,
      carbs: 16.1,
      fiber: 8.5
    },
    storageInfo: "Secar bem e armazenar com boa ventilação para evitar mofo",
    processingOptions: ["Óleo", "Manteiga", "Snacks", "Farinha"],
    exportPotential: true,
    sustainabilityScore: 9,
    waterRequirement: "Baixo",
    laborIntensity: "Alto",
    mechanizationLevel: "Manual",
    images: ["/images/crops/amendoim-1.jpg"],
    videos: [],
    relatedCrops: ["milho", "feijao"],
    rotationCrops: ["milho", "sorgo"],
    companionPlants: ["batata-doce", "mandioca"]
  },
  {
    id: "sorgo",
    name: "Sorgo",
    scientificName: "Sorghum bicolor",
    icon: "🌾",
    category: "cereal",
    season: "Novembro - Abril",
    difficulty: "Fácil",
    yield: "2-4 ton/ha",
    description: "Cereal resistente à seca, ideal para províncias áridas do sul",
    detailedDescription: "O sorgo é um cereal robusto e resistente à seca, crucial para a agricultura nas províncias mais áridas de Angola.",
    tips: [
      "Plantio no início das chuvas",
      "Tolera solos pobres e calor",
      "Colheita quando grãos estão duros",
      "Resistente a pragas",
      "Usar para grão, forragem ou cerveja"
    ],
    provinces: ["Huíla", "Namibe", "Cunene", "Benguela", "Huambo"],
    color: "from-red-300 to-amber-600",
    plantingMonths: [11, 12, 1],
    harvestMonths: [3, 4, 5],
    marketPrice: {
      min: 120,
      max: 180,
      currency: "AOA",
      unit: "kg"
    },
    soilRequirements: {
      type: ["Franco", "Franco-arenoso", "Arenoso"],
      ph: { min: 5.5, max: 7.5 },
      drainage: "Moderada"
    },
    climateRequirements: {
      rainfall: { min: 300, max: 800 },
      temperature: { min: 20, max: 35 },
      humidity: { min: 30, max: 70 }
    },
    affiliateProducts: ["sementes-sorgo", "fertilizante"],
    pests: ["lagarta", "percevejo", "ave"],
    diseases: ["ferrugem", "carvao", "mancha-foliar"],
    nutritionalValue: {
      calories: 329,
      protein: 10.6,
      carbs: 72.1,
      fiber: 6.3
    },
    storageInfo: "Armazenar em silos bem ventilados, resistente a pragas",
    processingOptions: ["Farinha", "Cerveja", "Ração animal"],
    exportPotential: false,
    sustainabilityScore: 9,
    waterRequirement: "Baixo",
    laborIntensity: "Médio",
    mechanizationLevel: "Semi-mecanizado",
    images: ["/images/crops/sorgo-1.jpg"],
    videos: [],
    relatedCrops: ["milho", "milheto"],
    rotationCrops: ["feijao", "amendoim"],
    companionPlants: ["feijao", "abobora"]
  },
  {
    id: "cafe",
    name: "Café",
    scientificName: "Coffea arabica",
    icon: "☕",
    category: "cash_crop",
    season: "Setembro - Janeiro",
    difficulty: "Difícil",
    yield: "0.5-1.5 ton/ha",
    description: "Cultura de exportação de alta montanha, principalmente em Uíge e Cuanza Norte",
    detailedDescription: "O café é uma das culturas de exportação mais importantes de Angola, cultivado principalmente nas províncias montanhosas do norte.",
    tips: [
      "Plantio em altitude superior a 1000m",
      "Sombreamento parcial nos primeiros anos",
      "Colheita manual seletiva",
      "Processamento húmido ou seco",
      "Requer manejo rigoroso de pragas"
    ],
    provinces: ["Uíge", "Kwanza Norte", "Kwanza Sul", "Huambo"],
    color: "from-amber-700 to-amber-900",
    plantingMonths: [9, 10, 11],
    harvestMonths: [5, 6, 7, 8, 9],
    marketPrice: {
      min: 1500,
      max: 3000,
      currency: "AOA",
      unit: "kg"
    },
    soilRequirements: {
      type: ["Franco", "Franco-argiloso"],
      ph: { min: 5.5, max: 6.5 },
      drainage: "Boa"
    },
    climateRequirements: {
      rainfall: { min: 1200, max: 2000 },
      temperature: { min: 15, max: 24 },
      humidity: { min: 60, max: 80 }
    },
    affiliateProducts: ["mudas-cafe", "fertilizante-cafe", "sombreamento"],
    pests: ["broca-cafe", "cochonilha", "lagarta"],
    diseases: ["ferrugem-do-cafe", "mancha-foliar", "podridao-de-raiz"],
    nutritionalValue: {
      calories: 2,
      protein: 0.1,
      carbs: 0.3,
      fiber: 0.0
    },
    storageInfo: "Armazenar em grão verde ou processado, proteger da humidade",
    processingOptions: ["Café verde", "Café torrado", "Café moído"],
    exportPotential: true,
    sustainabilityScore: 7,
    waterRequirement: "Alto",
    laborIntensity: "Alto",
    mechanizationLevel: "Manual",
    images: ["/images/crops/cafe-1.jpg"],
    videos: [],
    relatedCrops: ["banana", "abacate"],
    rotationCrops: ["banana", "abobora"],
    companionPlants: ["banana", "abacate", "mimosa"]
  },
  {
    id: "algodao",
    name: "Algodão",
    scientificName: "Gossypium hirsutum",
    icon: "🧵",
    category: "cash_crop",
    season: "Outubro - Março",
    difficulty: "Médio",
    yield: "1-2 ton/ha",
    description: "Fibra têxtil importante, cultivada principalmente no sul de Angola",
    detailedDescription: "O algodão é uma cultura industrial importante para a indústria têxtil angolana, cultivado nas regiões mais áridas.",
    tips: [
      "Plantio quando solo está quente",
      "Controle rigoroso de pragas",
      "Colheita quando cápsulas abrem",
      "Evitar chuva durante colheita",
      "Requer muita luz solar"
    ],
    provinces: ["Huíla", "Namibe", "Cunene", "Benguela"],
    color: "from-green-200 to-white",
    plantingMonths: [10, 11, 12],
    harvestMonths: [2, 3, 4],
    marketPrice: {
      min: 800,
      max: 1200,
      currency: "AOA",
      unit: "kg"
    },
    soilRequirements: {
      type: ["Franco", "Franco-argiloso"],
      ph: { min: 5.5, max: 7.0 },
      drainage: "Boa"
    },
    climateRequirements: {
      rainfall: { min: 500, max: 1000 },
      temperature: { min: 20, max: 30 },
      humidity: { min: 40, max: 60 }
    },
    affiliateProducts: ["sementes-algodao", "insecticida", "fertilizante"],
    pests: ["bicudo-do-algodoeiro", "lagarta", "percevejo"],
    diseases: ["mildio", "mancha-foliar", "podridao-capsulas"],
    nutritionalValue: {
      calories: 0,
      protein: 0,
      carbs: 0,
      fiber: 0
    },
    storageInfo: "Armazenar em fardos em local seco, protegido de pragas",
    processingOptions: ["Fibra", "Sementes", "Óleo"],
    exportPotential: true,
    sustainabilityScore: 6,
    waterRequirement: "Médio",
    laborIntensity: "Alto",
    mechanizationLevel: "Semi-mecanizado",
    images: ["/images/crops/algodao-1.jpg"],
    videos: [],
    relatedCrops: ["sorgo", "girassol"],
    rotationCrops: ["milho", "sorgo"],
    companionPlants: ["amendoim", "feijao"]
  },
  {
    id: "abacate",
    name: "Abacate",
    scientificName: "Persea americana",
    icon: "🥑",
    category: "fruit",
    season: "Agosto - Dezembro",
    difficulty: "Médio",
    yield: "5-15 ton/ha",
    description: "Fruto oleaginoso de alto valor nutricional e exportação crescente",
    detailedDescription: "O abacate é uma cultura de frutas em expansão em Angola, com grande potencial de exportação para mercados internacionais.",
    tips: [
      "Plantio em solos bem drenados",
      "Polinização cruzada necessária",
      "Colheita quando maduro na árvore",
      "Mercado de exportação em crescimento",
      "Pode produzir o ano todo com irrigação"
    ],
    provinces: ["Uíge", "Kwanza Norte", "Kwanza Sul", "Malanje", "Huambo"],
    color: "from-green-500 to-green-700",
    plantingMonths: [2, 3, 4, 9, 10, 11],
    harvestMonths: [8, 9, 10, 11, 12],
    marketPrice: {
      min: 500,
      max: 1200,
      currency: "AOA",
      unit: "kg"
    },
    soilRequirements: {
      type: ["Franco", "Franco-arenoso"],
      ph: { min: 6.0, max: 7.0 },
      drainage: "Boa"
    },
    climateRequirements: {
      rainfall: { min: 800, max: 1500 },
      temperature: { min: 15, max: 25 },
      humidity: { min: 60, max: 80 }
    },
    affiliateProducts: ["mudas-abacate", "fertilizante", "sistema-irrigacao"],
    pests: ["cochonilha", "acaro", "broca"],
    diseases: ["podridao-raiz", "antacnose", "mancha-foliar"],
    nutritionalValue: {
      calories: 160,
      protein: 2.0,
      carbs: 8.5,
      fiber: 6.7
    },
    storageInfo: "Colher verde e amadurecer em câmara controlada",
    processingOptions: ["Fresco", "Óleo", "Polpa congelada"],
    exportPotential: true,
    sustainabilityScore: 8,
    waterRequirement: "Médio",
    laborIntensity: "Médio",
    mechanizationLevel: "Manual",
    images: ["/images/crops/abacate-1.jpg"],
    videos: [],
    relatedCrops: ["cafe", "banana"],
    rotationCrops: ["cafe", "banana"],
    companionPlants: ["cafe", "banana", "ervas-aromaticas"]
  },
  {
    id: "banana",
    name: "Banana",
    scientificName: "Musa spp.",
    icon: "🍌",
    category: "fruit",
    season: "Todo o ano",
    difficulty: "Médio",
    yield: "20-40 ton/ha",
    description: "Fruta tropical essencial, alta produtividade em regiões húmidas",
    detailedDescription: "A banana é uma das frutas mais importantes em Angola, cultivada principalmente nas regiões húmidas do norte e centro.",
    tips: [
      "Plantio por filhotes (filhos)",
      "Colheita 9-12 meses após plantio",
      "Proteger do vento",
      "Manter solo húmido",
      "Mercado local constante"
    ],
    provinces: ["Uíge", "Kwanza Norte", "Kwanza Sul", "Malanje", "Uíge", "Luanda"],
    color: "from-yellow-400 to-yellow-500",
    plantingMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    harvestMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    marketPrice: {
      min: 150,
      max: 300,
      currency: "AOA",
      unit: "kg"
    },
    soilRequirements: {
      type: ["Franco", "Franco-argiloso"],
      ph: { min: 5.5, max: 7.0 },
      drainage: "Boa"
    },
    climateRequirements: {
      rainfall: { min: 1000, max: 2500 },
      temperature: { min: 20, max: 30 },
      humidity: { min: 70, max: 90 }
    },
    affiliateProducts: ["mudas-banana", "fertilizante", "sacos-protecao"],
    pests: ["lagarta", "nematoides", "cochonilha"],
    diseases: ["panama", "sigatoka", "murcha-bacteriana"],
    nutritionalValue: {
      calories: 89,
      protein: 1.1,
      carbs: 22.8,
      fiber: 2.6
    },
    storageInfo: "Colher verde, transportar e amadurecer em armazém",
    processingOptions: ["Fresca", "Farinha", "Chips", "Puré"],
    exportPotential: true,
    sustainabilityScore: 7,
    waterRequirement: "Alto",
    laborIntensity: "Médio",
    mechanizationLevel: "Manual",
    images: ["/images/crops/banana-1.jpg"],
    videos: [],
    relatedCrops: ["abacate", "cafe"],
    rotationCrops: ["abacate", "cafe"],
    companionPlants: ["abacate", "cafe", "ervas-leguminosas"]
  },
  {
    id: "tomate",
    name: "Tomate",
    scientificName: "Solanum lycopersicum",
    icon: "🍅",
    category: "vegetable",
    season: "Setembro - Maio",
    difficulty: "Médio",
    yield: "20-40 ton/ha",
    description: "Hortaliça de alta demanda, cultivada em estação fria e com irrigação",
    detailedDescription: "O tomate é uma hortaliça de alta valorização no mercado angolano, cultivado principalmente durante a estação mais fria ou com irrigação.",
    tips: [
      "Plantio em estufa ou campo aberto",
      "Tutores necessários",
      "Colheita quando maduro",
      "Evitar molhar folhas",
      "Rotação de culturas essencial"
    ],
    provinces: ["Huambo", "Bié", "Huíla", "Benguela", "Kwanza Sul"],
    color: "from-red-500 to-red-600",
    plantingMonths: [9, 10, 11, 3, 4],
    harvestMonths: [12, 1, 2, 5, 6],
    marketPrice: {
      min: 300,
      max: 600,
      currency: "AOA",
      unit: "kg"
    },
    soilRequirements: {
      type: ["Franco", "Franco-arenoso"],
      ph: { min: 6.0, max: 6.8 },
      drainage: "Boa"
    },
    climateRequirements: {
      rainfall: { min: 400, max: 800 },
      temperature: { min: 18, max: 25 },
      humidity: { min: 50, max: 70 }
    },
    affiliateProducts: ["sementes-tomate", "estufa", "fertilizante", "tutores"],
    pests: ["traca", "pulgão", "mosca-branca"],
    diseases: ["mildio", "mancha-bacteriana", "fusarium"],
    nutritionalValue: {
      calories: 18,
      protein: 0.9,
      carbs: 3.9,
      fiber: 1.2
    },
    storageInfo: "Colher maduro, armazenar refrigerado até 2 semanas",
    processingOptions: ["Fresco", "Polpa", "Molho", "Seco"],
    exportPotential: true,
    sustainabilityScore: 7,
    waterRequirement: "Alto",
    laborIntensity: "Alto",
    mechanizationLevel: "Manual",
    images: ["/images/crops/tomate-1.jpg"],
    videos: [],
    relatedCrops: ["cebola", "pimento"],
    rotationCrops: ["feijao", "amendoim", "milho"],
    companionPlants: ["cebola", "alho", "manjericão"]
  },
  {
    id: "cebola",
    name: "Cebola",
    scientificName: "Allium cepa",
    icon: "🧅",
    category: "vegetable",
    season: "Março - Agosto",
    difficulty: "Médio",
    yield: "15-30 ton/ha",
    description: "Bulbo essencial na culinária angolana, plantio na estação fria",
    detailedDescription: "A cebola é uma hortaliça fundamental na culinária angolana, cultivada principalmente durante a estação seca e fria.",
    tips: [
      "Plantio por semente ou bulbo",
      "Requer dias curtos para bulbificação",
      "Colheita quando folhas caem",
      "Secar bem antes armazenamento",
      "Curar 2-3 semanas após colheita"
    ],
    provinces: ["Huambo", "Bié", "Huíla", "Benguela", "Huíla"],
    color: "from-purple-400 to-purple-600",
    plantingMonths: [3, 4, 5, 6],
    harvestMonths: [7, 8, 9, 10],
    marketPrice: {
      min: 250,
      max: 500,
      currency: "AOA",
      unit: "kg"
    },
    soilRequirements: {
      type: ["Franco", "Franco-arenoso"],
      ph: { min: 6.0, max: 7.0 },
      drainage: "Boa"
    },
    climateRequirements: {
      rainfall: { min: 300, max: 600 },
      temperature: { min: 13, max: 24 },
      humidity: { min: 40, max: 60 }
    },
    affiliateProducts: ["sementes-cebola", "fertilizante", "fungicida"],
    pests: ["mosca-cebola", "trips", "nematoides"],
    diseases: ["mildio", "podridao-colar", "mancha-roxa"],
    nutritionalValue: {
      calories: 40,
      protein: 1.1,
      carbs: 9.3,
      fiber: 1.7
    },
    storageInfo: "Curar bem e armazenar em local fresco e ventilado",
    processingOptions: ["Fresca", "Seca", "Desidratada", "Molho"],
    exportPotential: true,
    sustainabilityScore: 8,
    waterRequirement: "Médio",
    laborIntensity: "Alto",
    mechanizationLevel: "Semi-mecanizado",
    images: ["/images/crops/cebola-1.jpg"],
    videos: [],
    relatedCrops: ["tomate", "alho"],
    rotationCrops: ["milho", "feijao", "batata-doce"],
    companionPlants: ["tomate", "cenoura", "alface"]
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
