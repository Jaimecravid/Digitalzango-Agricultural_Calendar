// Crop Planning Utilities for Angola Agricultural Calendar

export interface CropInfo {
  id: string;
  name: string;
  namePortuguese: string;
  category: 'cereal' | 'legume' | 'vegetable' | 'fruit' | 'cash-crop' | 'tuber';
  plantingMonths: number[]; // 0-11 (Jan-Dec)
  harvestMonths: number[]; // 0-11 (Jan-Dec)
  growingPeriodDays: number;
  suitableProvinces: string[];
  waterRequirement: 'low' | 'medium' | 'high';
  soilType: string[];
  temperature: {
    min: number;
    max: number;
    optimal: number;
  };
  rainfall: {
    min: number; // mm per month
    max: number;
    optimal: number;
  };
  spacing: {
    betweenRows: number; // cm
    betweenPlants: number; // cm
  };
  yield: {
    min: number; // kg/ha
    max: number;
    average: number;
  };
  rotationBenefits: string[];
  rotationPartners: string[]; // IDs of compatible crops
  rotationAvoid: string[]; // IDs of crops to avoid in rotation
  pests: string[]; // Common pest IDs
  diseases: string[]; // Common diseases
  nutritionalValue: string;
  marketValue: 'low' | 'medium' | 'high';
  difficulty: 'easy' | 'medium' | 'hard';
}

// Angola crop database
export const ANGOLA_CROPS: CropInfo[] = [
  {
    id: 'milho',
    name: 'Maize',
    namePortuguese: 'Milho',
    category: 'cereal',
    plantingMonths: [10, 11, 0], // Nov-Jan
    harvestMonths: [3, 4, 5], // Apr-Jun
    growingPeriodDays: 120,
    suitableProvinces: ['Luanda', 'Bengo', 'Kwanza Norte', 'Kwanza Sul', 'Malanje', 'Uíge'],
    waterRequirement: 'medium',
    soilType: ['franco', 'franco-arenoso', 'franco-argiloso'],
    temperature: { min: 18, max: 35, optimal: 25 },
    rainfall: { min: 400, max: 800, optimal: 600 },
    spacing: { betweenRows: 75, betweenPlants: 25 },
    yield: { min: 1500, max: 4000, average: 2500 },
    rotationBenefits: ['Melhora estrutura do solo', 'Fonte de matéria orgânica'],
    rotationPartners: ['feijao', 'amendoim', 'mandioca'],
    rotationAvoid: ['sorgo', 'milheto'],
    pests: ['lagarta-do-cartucho', 'pulgao'],
    diseases: ['ferrugem', 'mancha-foliar'],
    nutritionalValue: 'Rico em carboidratos e proteínas',
    marketValue: 'high',
    difficulty: 'medium'
  },
  {
    id: 'feijao',
    name: 'Common Bean',
    namePortuguese: 'Feijão',
    category: 'legume',
    plantingMonths: [10, 11, 0, 3, 4], // Nov-Jan, Apr-May
    harvestMonths: [1, 2, 3, 6, 7], // Feb-Mar, Jul-Aug
    growingPeriodDays: 90,
    suitableProvinces: ['Huambo', 'Bié', 'Benguela', 'Kwanza Sul', 'Huíla'],
    waterRequirement: 'medium',
    soilType: ['franco', 'franco-argiloso'],
    temperature: { min: 15, max: 28, optimal: 22 },
    rainfall: { min: 300, max: 600, optimal: 450 },
    spacing: { betweenRows: 40, betweenPlants: 10 },
    yield: { min: 800, max: 2000, average: 1200 },
    rotationBenefits: ['Fixa nitrogênio no solo', 'Melhora fertilidade'],
    rotationPartners: ['milho', 'mandioca', 'batata'],
    rotationAvoid: ['amendoim', 'soja'],
    pests: ['pulgao', 'mosca-branca'],
    diseases: ['antracnose', 'ferrugem'],
    nutritionalValue: 'Rico em proteínas e ferro',
    marketValue: 'high',
    difficulty: 'easy'
  },
  {
    id: 'mandioca',
    name: 'Cassava',
    namePortuguese: 'Mandioca',
    category: 'tuber',
    plantingMonths: [10, 11, 0, 1], // Nov-Feb
    harvestMonths: [10, 11, 0, 1, 2], // Nov-Mar (next year)
    growingPeriodDays: 365,
    suitableProvinces: ['Luanda', 'Bengo', 'Kwanza Norte', 'Kwanza Sul', 'Uíge', 'Zaire'],
    waterRequirement: 'low',
    soilType: ['arenoso', 'franco-arenoso', 'franco'],
    temperature: { min: 20, max: 35, optimal: 28 },
    rainfall: { min: 500, max: 1200, optimal: 800 },
    spacing: { betweenRows: 100, betweenPlants: 100 },
    yield: { min: 8000, max: 25000, average: 15000 },
    rotationBenefits: ['Tolerante à seca', 'Melhora solo degradado'],
    rotationPartners: ['milho', 'feijao', 'amendoim'],
    rotationAvoid: ['batata-doce'],
    pests: ['mosca-branca', 'trips'],
    diseases: ['mosaico', 'bacteriose'],
    nutritionalValue: 'Rico em carboidratos',
    marketValue: 'medium',
    difficulty: 'easy'
  },
  {
    id: 'batata',
    name: 'Potato',
    namePortuguese: 'Batata',
    category: 'tuber',
    plantingMonths: [4, 5, 6], // May-Jul
    harvestMonths: [7, 8, 9], // Aug-Oct
    growingPeriodDays: 100,
    suitableProvinces: ['Huambo', 'Bié', 'Huíla', 'Benguela'],
    waterRequirement: 'high',
    soilType: ['franco', 'franco-arenoso'],
    temperature: { min: 10, max: 25, optimal: 18 },
    rainfall: { min: 400, max: 600, optimal: 500 },
    spacing: { betweenRows: 75, betweenPlants: 30 },
    yield: { min: 10000, max: 30000, average: 18000 },
    rotationBenefits: ['Quebra ciclo de pragas', 'Melhora estrutura do solo'],
    rotationPartners: ['feijao', 'milho', 'repolho'],
    rotationAvoid: ['tomate', 'pimentao'],
    pests: ['pulgao', 'trips'],
    diseases: ['requeima', 'sarna'],
    nutritionalValue: 'Rico em carboidratos e vitamina C',
    marketValue: 'high',
    difficulty: 'medium'
  },
  {
    id: 'tomate',
    name: 'Tomato',
    namePortuguese: 'Tomate',
    category: 'vegetable',
    plantingMonths: [4, 5, 6, 7], // May-Aug
    harvestMonths: [7, 8, 9, 10], // Aug-Nov
    growingPeriodDays: 110,
    suitableProvinces: ['Luanda', 'Benguela', 'Huambo', 'Huíla'],
    waterRequirement: 'high',
    soilType: ['franco', 'franco-argiloso'],
    temperature: { min: 18, max: 30, optimal: 24 },
    rainfall: { min: 300, max: 500, optimal: 400 },
    spacing: { betweenRows: 100, betweenPlants: 50 },
    yield: { min: 15000, max: 40000, average: 25000 },
    rotationBenefits: ['Alto valor comercial', 'Uso eficiente do espaço'],
    rotationPartners: ['feijao', 'alface', 'cebola'],
    rotationAvoid: ['batata', 'pimentao', 'berinjela'],
    pests: ['mosca-branca', 'pulgao', 'trips'],
    diseases: ['requeima', 'murcha-bacteriana'],
    nutritionalValue: 'Rico em vitaminas A e C',
    marketValue: 'high',
    difficulty: 'hard'
  },
  {
    id: 'cafe',
    name: 'Coffee',
    namePortuguese: 'Café',
    category: 'cash-crop',
    plantingMonths: [10, 11, 0], // Nov-Jan
    harvestMonths: [4, 5, 6, 7], // May-Aug
    growingPeriodDays: 1095, // 3 years to first harvest
    suitableProvinces: ['Kwanza Sul', 'Huambo', 'Bié', 'Uíge'],
    waterRequirement: 'medium',
    soilType: ['franco', 'franco-argiloso'],
    temperature: { min: 18, max: 28, optimal: 23 },
    rainfall: { min: 1200, max: 1800, optimal: 1500 },
    spacing: { betweenRows: 300, betweenPlants: 200 },
    yield: { min: 500, max: 1500, average: 800 },
    rotationBenefits: ['Cultura perene', 'Alto valor comercial'],
    rotationPartners: ['feijao', 'milho'], // intercropping
    rotationAvoid: [],
    pests: ['broca-do-cafe'],
    diseases: ['ferrugem-do-cafe', 'cercosporiose'],
    nutritionalValue: 'Bebida estimulante',
    marketValue: 'high',
    difficulty: 'hard'
  },
  {
    id: 'amendoim',
    name: 'Groundnut',
    namePortuguese: 'Amendoim',
    category: 'legume',
    plantingMonths: [10, 11, 0], // Nov-Jan
    harvestMonths: [3, 4, 5], // Apr-Jun
    growingPeriodDays: 120,
    suitableProvinces: ['Malanje', 'Lunda Norte', 'Lunda Sul', 'Moxico'],
    waterRequirement: 'low',
    soilType: ['arenoso', 'franco-arenoso'],
    temperature: { min: 20, max: 35, optimal: 28 },
    rainfall: { min: 400, max: 700, optimal: 550 },
    spacing: { betweenRows: 40, betweenPlants: 15 },
    yield: { min: 800, max: 2000, average: 1200 },
    rotationBenefits: ['Fixa nitrogênio', 'Tolerante à seca'],
    rotationPartners: ['milho', 'mandioca', 'sorgo'],
    rotationAvoid: ['feijao', 'soja'],
    pests: ['trips', 'pulgao'],
    diseases: ['mancha-foliar', 'murcha'],
    nutritionalValue: 'Rico em proteínas e óleos',
    marketValue: 'medium',
    difficulty: 'easy'
  },
  {
    id: 'cebola',
    name: 'Onion',
    namePortuguese: 'Cebola',
    category: 'vegetable',
    plantingMonths: [4, 5, 6], // May-Jul
    harvestMonths: [8, 9, 10], // Sep-Nov
    growingPeriodDays: 120,
    suitableProvinces: ['Huambo', 'Benguela', 'Huíla', 'Namibe'],
    waterRequirement: 'medium',
    soilType: ['franco', 'franco-arenoso'],
    temperature: { min: 15, max: 28, optimal: 22 },
    rainfall: { min: 300, max: 500, optimal: 400 },
    spacing: { betweenRows: 30, betweenPlants: 10 },
    yield: { min: 8000, max: 20000, average: 12000 },
    rotationBenefits: ['Repele pragas', 'Melhora solo'],
    rotationPartners: ['tomate', 'repolho', 'cenoura'],
    rotationAvoid: ['alho'],
    pests: ['trips', 'mosca-da-cebola'],
    diseases: ['podridao-branca', 'mildio'],
    nutritionalValue: 'Rico em vitaminas e antioxidantes',
    marketValue: 'medium',
    difficulty: 'medium'
  }
];

// Get suitable crops for province and season
export const getSuitableCrops = (
  province: string,
  month: number,
  difficulty?: 'easy' | 'medium' | 'hard'
): CropInfo[] => {
  return ANGOLA_CROPS.filter(crop => {
    const suitableProvince = crop.suitableProvinces.includes(province);
    const suitableMonth = crop.plantingMonths.includes(month);
    const suitableDifficulty = difficulty ? crop.difficulty === difficulty : true;
    
    return suitableProvince && suitableMonth && suitableDifficulty;
  });
};

// Calculate optimal planting date based on weather forecast
export const calculateOptimalPlantingDate = (
  crop: CropInfo,
  weatherForecast: Array<{ date: Date; temperature: number; rainfall: number }>,
  targetHarvestMonth?: number
): { plantingDate: Date; harvestDate: Date; confidence: number } => {
  const today = new Date();
  let bestDate = new Date(today);
  let bestScore = 0;
  
  // Check next 60 days for optimal planting conditions
  for (let i = 0; i < 60; i++) {
    const checkDate = new Date(today);
    checkDate.setDate(today.getDate() + i);
    
    const month = checkDate.getMonth();
    
    // Check if month is suitable for planting
    if (!crop.plantingMonths.includes(month)) continue;
    
    // Calculate score based on weather conditions
    let score = 0;
    
    // Check weather forecast for next 14 days from this planting date
    const forecastPeriod = weatherForecast.filter(forecast => {
      const forecastDate = new Date(forecast.date);
      const daysDiff = (forecastDate.getTime() - checkDate.getTime()) / (1000 * 60 * 60 * 24);
      return daysDiff >= 0 && daysDiff <= 14;
    });
    
    if (forecastPeriod.length > 0) {
      const avgTemp = forecastPeriod.reduce((sum, f) => sum + f.temperature, 0) / forecastPeriod.length;
      const totalRainfall = forecastPeriod.reduce((sum, f) => sum + f.rainfall, 0);
      
      // Temperature score (0-40 points)
      if (avgTemp >= crop.temperature.min && avgTemp <= crop.temperature.max) {
        const tempOptimalness = 1 - Math.abs(avgTemp - crop.temperature.optimal) / 
          (crop.temperature.max - crop.temperature.min);
        score += tempOptimalness * 40;
      }
      
      // Rainfall score (0-30 points)
      const monthlyRainfall = totalRainfall * 2; // Approximate monthly from 2-week period
      if (monthlyRainfall >= crop.rainfall.min && monthlyRainfall <= crop.rainfall.max) {
        const rainOptimalness = 1 - Math.abs(monthlyRainfall - crop.rainfall.optimal) / 
          (crop.rainfall.max - crop.rainfall.min);
        score += rainOptimalness * 30;
      }
      
      // Seasonal appropriateness (0-30 points)
      const seasonScore = crop.plantingMonths.includes(month) ? 30 : 0;
      score += seasonScore;
    }
    
    // Target harvest month bonus
    if (targetHarvestMonth) {
      const harvestDate = new Date(checkDate);
      harvestDate.setDate(checkDate.getDate() + crop.growingPeriodDays);
      if (harvestDate.getMonth() === targetHarvestMonth) {
        score += 20;
      }
    }
    
    if (score > bestScore) {
      bestScore = score;
      bestDate = new Date(checkDate);
    }
  }
  
  const harvestDate = new Date(bestDate);
  harvestDate.setDate(bestDate.getDate() + crop.growingPeriodDays);
  
  const confidence = Math.min(bestScore / 100, 1); // Normalize to 0-1
  
  return { plantingDate: bestDate, harvestDate, confidence };
};

// Generate crop rotation recommendations
export const generateRotationRecommendations = (
  currentCrop: CropInfo,
  previousCrops: string[], // IDs of crops grown in previous seasons
  province: string
): Array<{
  crop: CropInfo;
  benefits: string[];
  score: number;
  reason: string;
}> => {
  const recommendations: Array<{
    crop: CropInfo;
    benefits: string[];
    score: number;
    reason: string;
  }> = [];
  
  ANGOLA_CROPS.forEach(crop => {
    if (crop.id === currentCrop.id) return; // Skip same crop
    if (!crop.suitableProvinces.includes(province)) return; // Skip unsuitable crops
    
    let score = 0;
    const benefits: string[] = [];
    let reason = '';
    
    // Check rotation compatibility
    if (currentCrop.rotationPartners.includes(crop.id)) {
      score += 30;
      benefits.push('Rotação recomendada');
      reason = 'Culturas complementares';
    }
    
    if (currentCrop.rotationAvoid.includes(crop.id)) {
      score -= 50;
      reason = 'Rotação não recomendada';
    }
    
    // Nutrient complementarity
    if (currentCrop.category === 'cereal' && crop.category === 'legume') {
      score += 25;
      benefits.push('Fixa nitrogênio no solo');
    }
    
    if (currentCrop.category === 'legume' && crop.category === 'cereal') {
      score += 20;
      benefits.push('Aproveita nitrogênio fixado');
    }
    
    // Pest and disease break
    const commonPests = currentCrop.pests.filter(pest => crop.pests.includes(pest));
    if (commonPests.length === 0) {
      score += 15;
      benefits.push('Quebra ciclo de pragas');
    } else {
      score -= 10;
    }
    
    // Water requirement diversity
    if (currentCrop.waterRequirement !== crop.waterRequirement) {
      score += 10;
      benefits.push('Diversifica uso da água');
    }
    
    // Market value consideration
    if (crop.marketValue === 'high') {
      score += 15;
      benefits.push('Alto valor comercial');
    }
    
    // Avoid recent crops
    if (previousCrops.includes(crop.id)) {
      score -= 20;
      reason = reason || 'Cultivado recentemente';
    }
    
    if (score > 0) {
      recommendations.push({
        crop,
        benefits,
        score,
        reason: reason || 'Rotação adequada'
      });
    }
  });
  
  return recommendations.sort((a, b) => b.score - a.score).slice(0, 5);
};

// Get crop by ID
export const getCropById = (id: string): CropInfo | undefined => {
  return ANGOLA_CROPS.find(crop => crop.id === id);
};

// Type for the calendar entry
type CalendarMonth = {
  month: number;
  plantingCrops: CropInfo[];
  harvestingCrops: CropInfo[];
};

// Calculate crop calendar for the year
export const generateCropCalendar = (
  selectedCrops: string[],
  province: string,
  year: number = new Date().getFullYear()
): CalendarMonth[] => {
  const calendar: CalendarMonth[] = [];
  
  // Get all valid crops first (filter out any undefined or invalid crops)
  const validCrops = selectedCrops
    .map(id => getCropById(id))
    .filter((crop): crop is CropInfo => {
      return !!crop && 
             Array.isArray(crop.plantingMonths) && 
             Array.isArray(crop.harvestMonths) && 
             Array.isArray(crop.suitableProvinces);
    });
  
  // For each month, find which crops should be planted or harvested
  for (let month = 0; month < 12; month++) {
    const monthEntry: CalendarMonth = {
      month,
      plantingCrops: [],
      harvestingCrops: []
    };
    
    // Check each valid crop for this month
    for (const crop of validCrops) {
      // Check if this crop should be planted this month in this province
      if (crop.plantingMonths.includes(month) && 
          crop.suitableProvinces.includes(province)) {
        monthEntry.plantingCrops.push(crop);
      }
      
      // Check if this crop should be harvested this month in this province
      if (crop.harvestMonths.includes(month) && 
          crop.suitableProvinces.includes(province)) {
        monthEntry.harvestingCrops.push(crop);
      }
    }
    
    calendar.push(monthEntry);
  }
  
  return calendar;
};

