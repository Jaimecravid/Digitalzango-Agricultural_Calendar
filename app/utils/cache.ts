// DigitalZango Agricultural Calendar - Cache Utilities
export interface CacheData<T> {
  data: T;
  timestamp: number;
  expiry: number;
}

export interface WeatherData {
  temperature: number;
  humidity: number;
  rainfall: number;
  location: string;
  forecast: any[];
}

export interface CropData {
  id: string;
  name: string;
  plantingSeasons: string[];
  harvestTime: number;
  region: string;
}

export interface ToolData {
  id: string;
  name: string;
  price: number;
  currency: string;
  region: string;
}

// Cache weather data with 30-minute expiry
export const cacheWeatherData = (location: string, data: WeatherData): void => {
  try {
    const cacheKey = `weather-${location}`;
    const cacheData: CacheData<WeatherData> = {
      data,
      timestamp: Date.now(),
      expiry: Date.now() + (1000 * 60 * 30) // 30 minutes
    };
    localStorage.setItem(cacheKey, JSON.stringify(cacheData));
    console.log(`DigitalZango: Weather data cached for ${location}`);
  } catch (error) {
    console.error('DigitalZango: Failed to cache weather data:', error);
  }
};

// Get cached weather data
export const getCachedWeatherData = (location: string): WeatherData | null => {
  try {
    const cacheKey = `weather-${location}`;
    const cached = localStorage.getItem(cacheKey);
    
    if (!cached) return null;
    
    const cacheData: CacheData<WeatherData> = JSON.parse(cached);
    
    // Check if cache is still valid
    if (Date.now() > cacheData.expiry) {
      localStorage.removeItem(cacheKey);
      console.log(`DigitalZango: Weather cache expired for ${location}`);
      return null;
    }
    
    console.log(`DigitalZango: Using cached weather data for ${location}`);
    return cacheData.data;
  } catch (error) {
    console.error('DigitalZango: Failed to get cached weather data:', error);
    return null;
  }
};

// Cache crop data with 24-hour expiry
export const cacheCropData = (crops: CropData[]): void => {
  try {
    const cacheData: CacheData<CropData[]> = {
      data: crops,
      timestamp: Date.now(),
      expiry: Date.now() + (1000 * 60 * 60 * 24) // 24 hours
    };
    localStorage.setItem('crops-data', JSON.stringify(cacheData));
    console.log('DigitalZango: Crop data cached successfully');
  } catch (error) {
    console.error('DigitalZango: Failed to cache crop data:', error);
  }
};

// Get cached crop data
export const getCachedCropData = (): CropData[] | null => {
  try {
    const cached = localStorage.getItem('crops-data');
    
    if (!cached) return null;
    
    const cacheData: CacheData<CropData[]> = JSON.parse(cached);
    
    // Check if cache is still valid
    if (Date.now() > cacheData.expiry) {
      localStorage.removeItem('crops-data');
      console.log('DigitalZango: Crop cache expired');
      return null;
    }
    
    console.log('DigitalZango: Using cached crop data');
    return cacheData.data;
  } catch (error) {
    console.error('DigitalZango: Failed to get cached crop data:', error);
    return null;
  }
};

// Cache agricultural tools data with 6-hour expiry (prices may change)
export const cacheToolsData = (tools: ToolData[]): void => {
  try {
    const cacheData: CacheData<ToolData[]> = {
      data: tools,
      timestamp: Date.now(),
      expiry: Date.now() + (1000 * 60 * 60 * 6) // 6 hours
    };
    localStorage.setItem('tools-data', JSON.stringify(cacheData));
    console.log('DigitalZango: Tools data cached successfully');
  } catch (error) {
    console.error('DigitalZango: Failed to cache tools data:', error);
  }
};

// Get cached tools data
export const getCachedToolsData = (): ToolData[] | null => {
  try {
    const cached = localStorage.getItem('tools-data');
    
    if (!cached) return null;
    
    const cacheData: CacheData<ToolData[]> = JSON.parse(cached);
    
    // Check if cache is still valid
    if (Date.now() > cacheData.expiry) {
      localStorage.removeItem('tools-data');
      console.log('DigitalZango: Tools cache expired');
      return null;
    }
    
    console.log('DigitalZango: Using cached tools data');
    return cacheData.data;
  } catch (error) {
    console.error('DigitalZango: Failed to get cached tools data:', error);
    return null;
  }
};

// Clear all cache data
export const clearAllCache = (): void => {
  try {
    const keys = Object.keys(localStorage);
    keys.forEach(key => {
      if (key.startsWith('`weather-${location}`') || key === 'crops-data' || key === 'tools-data') {
        localStorage.removeItem(key);
      }
    });
    console.log('DigitalZango: All cache data cleared');
  } catch (error) {
    console.error('DigitalZango: Failed to clear cache:', error);
  }
};

// Get cache status for debugging
export const getCacheStatus = () => {
  const weatherKeys = Object.keys(localStorage).filter(key => key.startsWith('`weather-${location}`'));
  const hasCrops = localStorage.getItem('crops-data') !== null;
  const hasTools = localStorage.getItem('tools-data') !== null;
  
  return {
    weatherLocations: weatherKeys.length,
    hasCropsData: hasCrops,
    hasToolsData: hasTools,
    totalCacheItems: weatherKeys.length + (hasCrops ? 1 : 0) + (hasTools ? 1 : 0)
  };
};

