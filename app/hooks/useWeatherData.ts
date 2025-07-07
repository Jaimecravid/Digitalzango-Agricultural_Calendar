'use client';

import { useState, useEffect } from 'react';
import { cacheWeatherData, getCachedWeatherData, WeatherData } from '../../utils/cache';

export const useWeatherData = (location: string) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isUsingCache, setIsUsingCache] = useState(false);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        setIsLoading(true);
        
        const cachedData = getCachedWeatherData(location);
        if (cachedData) {
          setWeatherData(cachedData);
          setError(null);
          setIsUsingCache(true);
          setIsLoading(false);
          
          fetch(`/api/weather?location=${location}`)
            .then(response => {
              if (response.ok) {
                return response.json();
              }
              throw new Error('Background fetch failed');
            })
            .then(data => {
              cacheWeatherData(location, data);
              if (JSON.stringify(data) !== JSON.stringify(cachedData)) {
                setWeatherData(data);
                setIsUsingCache(false);
              }
            })
            .catch(() => {
              console.log('DigitalZango: Background weather update failed, using cached data');
            });
          return;
        }

        const response = await fetch(`/api/weather?location=${location}`);
        
        if (!response.ok) {
          throw new Error(`Weather API error: ${response.status}`);
        }
        
        const data = await response.json();
        cacheWeatherData(location, data);
        setWeatherData(data);
        setError(null);
        setIsUsingCache(false);
        
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown weather error';
        setError(`${errorMessage} (using cached data)`);
        
        const fallbackData = getCachedWeatherData(location);
        if (fallbackData) {
          setWeatherData(fallbackData);
          setIsUsingCache(true);
          setError(`${errorMessage} (using cached data)`);
        }
      } finally {
        setIsLoading(false);
      }
    };

    if (location) {
      fetchWeatherData();
    }
  }, [location]);

  const refreshWeatherData = async () => {
    if (!location) return;
    
    setIsLoading(true);
    try {
      const response = await fetch(`/api/weather?location=${location}`);
      if (!response.ok) {
        throw new Error('Failed to refresh weather data');
      }
      const data = await response.json();
      cacheWeatherData(location, data);
      setWeatherData(data);
      setError(null);
      setIsUsingCache(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Refresh failed');
    } finally {
      setIsLoading(false);
    }
  };

  return { 
    weatherData, 
    isLoading, 
    error, 
    isUsingCache,
    refreshWeatherData 
  };
};

