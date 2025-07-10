"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode, useMemo, useCallback } from "react";

// --- Types ---
interface WeatherData {
  temperature: number;
  description: string;
  icon: string;
  humidity?: number;
  windSpeed?: number;
  pressure?: number;
  visibility?: number;
  feelsLike?: number;
  [key: string]: any;
}

interface ForecastData {
  date: string;
  temperature: number;
  description: string;
  icon: string;
  humidity?: number;
  [key: string]: any;
}

interface HourlyData {
  time: string;
  temperature: number;
  description: string;
  icon: string;
}

// UNIFIED INTERFACE - This matches what your tempo page expects
interface WeatherContextType {
  currentWeather: WeatherData | null;
  forecast: ForecastData[];
  hourlyForecast: HourlyData[];
  isLoading: boolean;
  error: string | null;
  hasApiKey: boolean;
  fetchWeatherByLocation: (location: string) => Promise<void>;
  fetchWeatherByCoords?: (lat: number, lon: number) => Promise<void>;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

// --- Helper: Detect API Key ---
const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
const isApiKeyConfigured = !!(apiKey && apiKey.length > 0);

// --- Mock Data (used if no API key) ---
const mockWeather: WeatherData = {
  temperature: 25,
  description: "Ensolarado",
  icon: "01d",
  humidity: 65,
  windSpeed: 3.2,
  pressure: 1013,
  visibility: 10,
  feelsLike: 27,
};

const mockForecast: ForecastData[] = [
  { date: "2025-06-09", temperature: 26, description: "Ensolarado", icon: "01d", humidity: 60 },
  { date: "2025-06-10", temperature: 24, description: "Parcialmente nublado", icon: "02d", humidity: 70 },
  { date: "2025-06-11", temperature: 23, description: "Chuva leve", icon: "10d", humidity: 80 },
  { date: "2025-06-12", temperature: 25, description: "Nublado", icon: "04d", humidity: 75 },
  { date: "2025-06-13", temperature: 27, description: "Ensolarado", icon: "01d", humidity: 55 },
];

const mockHourlyForecast: HourlyData[] = [
  { time: "12:00", temperature: 25, description: "Ensolarado", icon: "01d" },
  { time: "15:00", temperature: 27, description: "Ensolarado", icon: "01d" },
  { time: "18:00", temperature: 24, description: "Parcialmente nublado", icon: "02d" },
  { time: "21:00", temperature: 22, description: "Limpo", icon: "01n" },
];

// --- Weather Provider ---
export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const [currentWeather, setCurrentWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastData[]>([]);
  const [hourlyForecast, setHourlyForecast] = useState<HourlyData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // --- Fetch by Location ---
  const fetchWeatherByLocation = useCallback(async (location: string) => {
    console.log(`Fetching weather for: ${location}`);
    setIsLoading(true);
    setError(null);

    if (!isApiKeyConfigured) {
      console.log("No API key - using mock data");
      // Customize mock data based on location
      const locationTemps: { [key: string]: number } = {
        'Luanda': 28,
        'Benguela': 26,
        'Huambo': 22,
        'Lubango': 24,
        'Cabinda': 29,
        'Caxito': 27,
        'Kuito': 20,
        'Ondjiva': 32,
        'N\'dalatando': 25,
        'Sumbe': 26,
        'Dundo': 24,
        'Saurimo': 23,
        'Malanje': 25,
        'Luena': 22,
        'Moçâmedes': 24,
        'Uíge': 26,
        'M\'banza-Kongo': 28
      };

      const temp = locationTemps[location] || 25;
      
      setCurrentWeather({
        ...mockWeather,
        temperature: temp,
        feelsLike: temp + 2,
      });
      setForecast(mockForecast.map(day => ({
        ...day,
        temperature: temp + Math.random() * 4 - 2 // Slight variation
      })));
      setHourlyForecast(mockHourlyForecast);
      setIsLoading(false);
      return;
    }

    try {
      // Current Weather
      const weatherRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(location)},AO&appid=${apiKey}&units=metric&lang=pt`
      );
      
      if (!weatherRes.ok) {
        throw new Error(`Falha ao obter o clima atual: ${weatherRes.status}`);
      }

      const weatherJson = await weatherRes.json();
      console.log('Current weather API response:', weatherJson);
      
      setCurrentWeather({
        temperature: Math.round(weatherJson.main.temp),
        description: weatherJson.weather[0].description,
        icon: weatherJson.weather[0].icon,
        humidity: weatherJson.main.humidity,
        windSpeed: weatherJson.wind?.speed || 0,
        pressure: weatherJson.main.pressure,
        visibility: weatherJson.visibility ? weatherJson.visibility / 1000 : 10,
        feelsLike: Math.round(weatherJson.main.feels_like),
      });

      // 5-Day/3-Hour Forecast
      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(location)},AO&appid=${apiKey}&units=metric&lang=pt`
      );
      
      if (forecastRes.ok) {
        const forecastJson = await forecastRes.json();
        console.log('Forecast API response:', forecastJson);
        
        // Take one data point per day (every 24 hours, 8*3=24)
        const daily = forecastJson.list
          .filter((_: any, idx: number) => idx % 8 === 0)
          .slice(0, 5)
          .map((d: any) => ({
            date: d.dt_txt.split(" ")[0],
            temperature: Math.round(d.main.temp),
            description: d.weather[0].description,
            icon: d.weather[0].icon,
            humidity: d.main.humidity,
          }));
        setForecast(daily);

        // Extract hourly data (next 12 entries, 3-hour intervals = 36 hours)
        const hourly = forecastJson.list
          .slice(0, 12)
          .map((d: any) => ({
            time: d.dt_txt.split(" ")[1].slice(0, 5), // "HH:MM"
            temperature: Math.round(d.main.temp),
            description: d.weather[0].description,
            icon: d.weather[0].icon,
          }));
        setHourlyForecast(hourly);
      }
    } catch (err: any) {
      console.error('Weather API error:', err);
      setError(err.message || "Erro desconhecido");
      
      // Fallback to mock data on error
      setCurrentWeather(mockWeather);
      setForecast(mockForecast);
      setHourlyForecast(mockHourlyForecast);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // --- Fetch by Coordinates ---
  const fetchWeatherByCoords = useCallback(async (lat: number, lon: number) => {
    setIsLoading(true);
    setError(null);

    if (!isApiKeyConfigured) {
      setCurrentWeather(mockWeather);
      setForecast(mockForecast);
      setHourlyForecast(mockHourlyForecast);
      setIsLoading(false);
      return;
    }

    try {
      // Current Weather
      const weatherRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt`
      );
      if (!weatherRes.ok) throw new Error("Falha ao obter o clima atual");

      const weatherJson = await weatherRes.json();
      setCurrentWeather({
        temperature: Math.round(weatherJson.main.temp),
        description: weatherJson.weather[0].description,
        icon: weatherJson.weather[0].icon,
        humidity: weatherJson.main.humidity,
        windSpeed: weatherJson.wind?.speed || 0,
        pressure: weatherJson.main.pressure,
        visibility: weatherJson.visibility ? weatherJson.visibility / 1000 : 10,
        feelsLike: Math.round(weatherJson.main.feels_like),
      });

      // 5-Day/3-Hour Forecast
      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt`
      );
      if (!forecastRes.ok) throw new Error("Falha ao obter a previsão");

      const forecastJson = await forecastRes.json();
      const daily = forecastJson.list
        .filter((_: any, idx: number) => idx % 8 === 0)
        .slice(0, 5)
        .map((d: any) => ({
          date: d.dt_txt.split(" ")[0],
          temperature: Math.round(d.main.temp),
          description: d.weather[0].description,
          icon: d.weather[0].icon,
          humidity: d.main.humidity,
        }));
      setForecast(daily);

      const hourly = forecastJson.list
        .slice(0, 12)
        .map((d: any) => ({
          time: d.dt_txt.split(" ")[1].slice(0, 5), // "HH:MM"
          temperature: Math.round(d.main.temp),
          description: d.weather[0].description,
          icon: d.weather[0].icon,
        }));
      setHourlyForecast(hourly);
    } catch (err: any) {
      setError(err.message || "Erro desconhecido");
      // Fallback to mock data
      setCurrentWeather(mockWeather);
      setForecast(mockForecast);
      setHourlyForecast(mockHourlyForecast);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Memoize the complete context value
  const contextValue = useMemo((): WeatherContextType => ({
    currentWeather,
    forecast,
    hourlyForecast,
    isLoading,
    error,
    hasApiKey: isApiKeyConfigured,
    fetchWeatherByLocation,
    fetchWeatherByCoords,
  }), [currentWeather, forecast, hourlyForecast, isLoading, error, fetchWeatherByLocation, fetchWeatherByCoords]);

  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  );
};

// --- SINGLE Custom Hook (matches what your tempo page expects) ---
export const useWeatherData = () => {
  const context = useContext(WeatherContext);
  if (context === undefined) {
    throw new Error("useWeatherData must be used within a WeatherProvider");
  }
  return context;
};

// Keep these for backward compatibility if needed elsewhere
export const useWeatherActions = () => {
  const context = useContext(WeatherContext);
  if (context === undefined) {
    throw new Error("useWeatherActions must be used within a WeatherProvider");
  }
  return {
    fetchWeatherByLocation: context.fetchWeatherByLocation,
    fetchWeatherByCoords: context.fetchWeatherByCoords,
  };
};

export const useWeatherConfig = () => {
  const context = useContext(WeatherContext);
  if (context === undefined) {
    throw new Error("useWeatherConfig must be used within a WeatherProvider");
  }
  return {
    hasApiKey: context.hasApiKey,
  };
};
