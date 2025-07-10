'use client';

import React, { createContext, useContext, useMemo, useCallback, useState, useEffect } from 'react';

interface WeatherData {
  temperature: number;
  humidity: number;
  rainfall: number;
  conditions: string;
  forecast: Array<{
    date: string;
    temp: number;
    conditions: string;
  }>;
}

interface WeatherState {
  currentWeather: WeatherData | null;
  selectedProvince: string;
  isLoading: boolean;
  error: string | null;
  lastUpdated: Date | null;
}

interface WeatherActions {
  setProvince: (province: string) => void;
  refreshWeather: () => Promise<void>;
  clearError: () => void;
}

const WeatherStateContext = createContext<WeatherState | null>(null);
const WeatherActionsContext = createContext<WeatherActions | null>(null);

export function OptimizedWeatherProvider({ children }: { children: React.ReactNode }) {
  const [currentWeather, setCurrentWeather] = useState<WeatherData | null>(null);
  const [selectedProvince, setSelectedProvince] = useState('Luanda');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  // Memoize state to prevent unnecessary re-renders
  const state = useMemo((): WeatherState => ({
    currentWeather,
    selectedProvince,
    isLoading,
    error,
    lastUpdated
  }), [currentWeather, selectedProvince, isLoading, error, lastUpdated]);

  // Memoize actions
  const actions = useMemo((): WeatherActions => ({
    setProvince: useCallback((province: string) => {
      setSelectedProvince(province);
    }, []),
    
    refreshWeather: useCallback(async () => {
      setIsLoading(true);
      setError(null);
      try {
        // Simulate API call - replace with actual weather API
        await new Promise(resolve => setTimeout(resolve, 1000));
        setCurrentWeather({
          temperature: 25 + Math.random() * 10,
          humidity: 60 + Math.random() * 30,
          rainfall: Math.random() * 10,
          conditions: 'Partly Cloudy',
          forecast: Array.from({ length: 5 }, (_, i) => ({
            date: new Date(Date.now() + i * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
            temp: 20 + Math.random() * 15,
            conditions: ['Sunny', 'Cloudy', 'Rainy'][Math.floor(Math.random() * 3)]
          }))
        });
        setLastUpdated(new Date());
      } catch (err) {
        setError('Failed to fetch weather data');
      } finally {
        setIsLoading(false);
      }
    }, []),
    
    clearError: useCallback(() => {
      setError(null);
    }, [])
  }), []);

  // Auto-refresh weather when province changes
  useEffect(() => {
    actions.refreshWeather();
  }, [selectedProvince, actions.refreshWeather]);

  return (
    <WeatherStateContext.Provider value={state}>
      <WeatherActionsContext.Provider value={actions}>
        {children}
      </WeatherActionsContext.Provider>
    </WeatherStateContext.Provider>
  );
}

export function useWeatherState() {
  const context = useContext(WeatherStateContext);
  if (!context) {
    throw new Error('useWeatherState must be used within OptimizedWeatherProvider');
  }
  return context;
}

export function useWeatherActions() {
  const context = useContext(WeatherActionsContext);
  if (!context) {
    throw new Error('useWeatherActions must be used within OptimizedWeatherProvider');
  }
  return context;
}
