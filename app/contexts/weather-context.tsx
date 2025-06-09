import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

// --- Types ---
interface WeatherData {
  temperature: number;
  description: string;
  icon: string;
  [key: string]: any; // Extend as needed
}

interface ForecastData {
  date: string;
  temperature: number;
  description: string;
  icon: string;
  [key: string]: any; // Extend as needed
}

interface HourlyData {
  time: string;
  temperature: number;
  description: string;
  icon: string;
}

interface WeatherContextType {
  currentWeather: WeatherData | null;
  forecast: ForecastData[];
  hourlyForecast: HourlyData[];
  isLoading: boolean;
  error: string | null;
  hasApiKey: boolean;
  fetchWeatherByLocation: (location: string) => Promise<void>;
  fetchWeatherByCoords: (lat: number, lon: number) => Promise<void>;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

// --- Helper: Detect API Key ---
const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
const isApiKeyConfigured = !!(apiKey && apiKey.length > 0);
console.log("DEBUG: API KEY =", apiKey);

// --- Mock Data (used if no API key) ---
const mockWeather: WeatherData = {
  temperature: 25,
  description: "Ensolarado",
  icon: "01d",
};

const mockForecast: ForecastData[] = [
  { date: "2025-06-09", temperature: 26, description: "Ensolarado", icon: "01d" },
  { date: "2025-06-10", temperature: 24, description: "Parcialmente nublado", icon: "02d" },
  { date: "2025-06-11", temperature: 23, description: "Chuva leve", icon: "10d" },
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
  const fetchWeatherByLocation = async (location: string) => {
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
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(location)}&appid=${apiKey}&units=metric&lang=pt`
      );
      if (!weatherRes.ok) throw new Error("Falha ao obter o clima atual");

      const weatherJson = await weatherRes.json();
      setCurrentWeather({
        temperature: weatherJson.main.temp,
        description: weatherJson.weather[0].description,
        icon: weatherJson.weather[0].icon,
      });

      // 5-Day/3-Hour Forecast
      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(location)}&appid=${apiKey}&units=metric&lang=pt`
      );
      if (!forecastRes.ok) throw new Error("Falha ao obter a previsão");

      const forecastJson = await forecastRes.json();
      // Take one data point per day (every 24 hours, 8*3=24)
      const daily = forecastJson.list
        .filter((_: any, idx: number) => idx % 8 === 0)
        .slice(0, 5)
        .map((d: any) => ({
          date: d.dt_txt.split(" ")[0],
          temperature: d.main.temp,
          description: d.weather[0].description,
          icon: d.weather[0].icon,
        }));
      setForecast(daily);

      // Extract hourly data (next 12 entries, 3-hour intervals = 36 hours)
      const hourly = forecastJson.list
        .slice(0, 12)
        .map((d: any) => ({
          time: d.dt_txt.split(" ")[1].slice(0, 5), // "HH:MM"
          temperature: d.main.temp,
          description: d.weather[0].description,
          icon: d.weather[0].icon,
        }));
      setHourlyForecast(hourly);
    } catch (err: any) {
      setError(err.message || "Erro desconhecido");
    } finally {
      setIsLoading(false);
    }
  };

  // --- Fetch by Coordinates ---
  const fetchWeatherByCoords = async (lat: number, lon: number) => {
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
        temperature: weatherJson.main.temp,
        description: weatherJson.weather[0].description,
        icon: weatherJson.weather[0].icon,
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
          temperature: d.main.temp,
          description: d.weather[0].description,
          icon: d.weather[0].icon,
        }));
      setForecast(daily);

      const hourly = forecastJson.list
        .slice(0, 12)
        .map((d: any) => ({
          time: d.dt_txt.split(" ")[1].slice(0, 5), // "HH:MM"
          temperature: d.main.temp,
          description: d.weather[0].description,
          icon: d.weather[0].icon,
        }));
      setHourlyForecast(hourly);
    } catch (err: any) {
      setError(err.message || "Erro desconhecido");
    } finally {
      setIsLoading(false);
    }
  };

  // --- Initial Load (optional, e.g., Luanda) ---
  useEffect(() => {
    fetchWeatherByLocation("Luanda");
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        currentWeather,
        forecast,
        hourlyForecast,
        isLoading,
        error,
        hasApiKey: isApiKeyConfigured,
        fetchWeatherByLocation,
        fetchWeatherByCoords,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

// --- Custom Hook ---
export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (context === undefined) {
    throw new Error("useWeather must be used within a WeatherProvider");
  }
  return context;
};