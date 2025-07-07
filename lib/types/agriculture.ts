// Comprehensive type definitions for Angola agriculture
export interface Crop {
  id: string;
  name: string;
  scientificName: string;
  icon: string;
  category: 'cereal' | 'legume' | 'tuber' | 'vegetable' | 'fruit' | 'cash_crop' | 'oilseed';
  season: string;
  difficulty: 'Fácil' | 'Médio' | 'Difícil';
  yield: string;
  description: string;
  detailedDescription: string;
  tips: string[];
  provinces: string[];
  color: string;
  plantingMonths: number[];
  harvestMonths: number[];
  marketPrice: {
    min: number;
    max: number;
    currency: 'AOA' | 'USD';
    unit: 'kg' | 'ton' | 'saca';
  };
  soilRequirements: {
    type: string[];
    ph: { min: number; max: number };
    drainage: 'Boa' | 'Moderada' | 'Pobre';
  };
  climateRequirements: {
    rainfall: { min: number; max: number };
    temperature: { min: number; max: number };
    humidity: { min: number; max: number };
  };
  affiliateProducts: string[];
  pests: string[];
  diseases: string[];
  nutritionalValue: {
    calories: number;
    protein: number;
    carbs: number;
    fiber: number;
  };
  storageInfo: string;
  processingOptions: string[];
  exportPotential: boolean;
  sustainabilityScore: number;
  waterRequirement: 'Baixo' | 'Médio' | 'Alto';
  laborIntensity: 'Baixo' | 'Médio' | 'Alto';
  mechanizationLevel: 'Manual' | 'Semi-mecanizado' | 'Mecanizado';
  images: string[];
  videos: string[];
  relatedCrops: string[];
  rotationCrops: string[];
  companionPlants: string[];
}
