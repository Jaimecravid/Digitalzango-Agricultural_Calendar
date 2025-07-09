export interface CropData {
  id: string;
  name: string;
  variety?: string;
  plantingDate: Date;
  harvestDate: Date;
  region: string;
  season: 'seca' | 'chuvas';
  status: 'planejado' | 'plantado' | 'crescimento' | 'colheita' | 'colhido';
  area?: number;
  expectedYield?: number;
  actualYield?: number;
  notes?: string;
}

export interface PestAlert {
  id: string;
  pestName: string;
  severity: 'baixa' | 'media' | 'alta' | 'critica';
  affectedCrops: string[];
  region: string;
  description: string;
  treatment: string;
  dateReported: Date;
  isActive: boolean;
}

export interface WeatherAlert {
  id: string;
  type: 'chuva' | 'seca' | 'vento' | 'temperatura';
  severity: 'baixa' | 'media' | 'alta';
  region: string;
  description: string;
  startDate: Date;
  endDate?: Date;
  recommendations: string[];
}

export interface CalendarEvent {
  id: string;
  title: string;
  date: Date;
  type: 'plantio' | 'colheita' | 'tratamento' | 'irrigacao' | 'fertilizacao';
  cropId?: string;
  description?: string;
  completed: boolean;
  priority: 'baixa' | 'media' | 'alta';
}

export interface RegionData {
  id: string;
  name: string;
  province: string;
  climate: 'tropical' | 'subtropical' | 'arido' | 'semi-arido';
  rainySeasonStart: number; // month (1-12)
  rainySeasonEnd: number;
  averageRainfall: number;
  averageTemperature: number;
}
