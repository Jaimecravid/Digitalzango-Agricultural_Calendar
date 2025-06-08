"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect, useCallback } from "react"
import { weatherService, type ForecastResponse, type AlertsResponse } from "../services/weather-service"

interface WeatherData {
  current: {
    temperature: number
    feelsLike: number
    humidity: number
    windSpeed: number
    windDirection: number
    pressure: number
    visibility: number
    precipitation: number
    condition: string
    description: string
    icon: string
    iconUrl: string
    sunrise: number
    sunset: number
  }
  forecast: Array<{
    date: string
    day: string
    high: number
    low: number
    condition: string
    description: string
    icon: string
    iconUrl: string
    precipitation: number
    humidity: number
    windSpeed: number
  }>
  alerts: Array<{
    type: string
    event: string
    message: string
    severity: "low" | "medium" | "high"
    start: number
    end: number
    sender: string
  }>
  location: {
    name: string
    country: string
    lat: number
    lon: number
  } | null
}

interface WeatherContextType {
  weatherData: WeatherData | null
  loading: boolean
  error: string | null
  refreshWeather: () => void
  setLocation: (location: { lat: number; lon: number; name: string }) => void
  lastUpdated: Date | null
  isApiKeyConfigured: boolean
  isUsingMockData: boolean
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined)

// Default location (Luanda, Angola)
const DEFAULT_LOCATION = {
  lat: -8.839,
  lon: 13.2894,
  name: "Luanda, Angola",
}

function processForecastData(forecast: ForecastResponse): WeatherData["forecast"] {
  // Group forecast data by day and get daily min/max
  const dailyData = new Map<string, any[]>()

  forecast.list.forEach((item) => {
    const date = new Date(item.dt * 1000)
    const dateKey = date.toISOString().split("T")[0]

    if (!dailyData.has(dateKey)) {
      dailyData.set(dateKey, [])
    }
    dailyData.get(dateKey)!.push(item)
  })

  const result: WeatherData["forecast"] = []

  for (const [dateKey, dayData] of dailyData) {
    if (result.length >= 7) break // Limit to 7 days

    const date = new Date(dateKey)
    const temps = dayData.map((d) => d.main.temp)
    const high = Math.max(...temps)
    const low = Math.min(...temps)

    // Use midday data for general conditions (around 12:00)
    const middayData =
      dayData.find((d) => {
        const hour = new Date(d.dt * 1000).getHours()
        return hour >= 11 && hour <= 13
      }) || dayData[Math.floor(dayData.length / 2)]

    const avgPrecipitation = dayData.reduce((sum, d) => sum + d.pop * 100, 0) / dayData.length
    const avgHumidity = dayData.reduce((sum, d) => sum + d.main.humidity, 0) / dayData.length
    const avgWindSpeed = dayData.reduce((sum, d) => sum + d.wind.speed, 0) / dayData.length

    result.push({
      date: dateKey,
      day: date.toLocaleDateString("pt-AO", { weekday: "short" }),
      high: Math.round(high),
      low: Math.round(low),
      condition: middayData.weather[0].main,
      description: middayData.weather[0].description,
      icon: middayData.weather[0].icon,
      iconUrl: weatherService.getWeatherIconUrl(middayData.weather[0].icon),
      precipitation: Math.round(avgPrecipitation),
      humidity: Math.round(avgHumidity),
      windSpeed: Math.round(avgWindSpeed * 3.6), // Convert m/s to km/h
    })
  }

  return result
}

function processAlertsData(alerts: AlertsResponse): WeatherData["alerts"] {
  if (!alerts.alerts || alerts.alerts.length === 0) {
    return []
  }

  return alerts.alerts.map((alert) => {
    let severity: "low" | "medium" | "high" = "medium"

    // Determine severity based on event type
    const eventLower = alert.event.toLowerCase()
    if (eventLower.includes("severe") || eventLower.includes("extreme") || eventLower.includes("warning")) {
      severity = "high"
    } else if (eventLower.includes("watch") || eventLower.includes("advisory")) {
      severity = "medium"
    } else {
      severity = "low"
    }

    return {
      type: alert.event,
      event: alert.event,
      message: alert.description,
      severity,
      start: alert.start,
      end: alert.end,
      sender: alert.sender_name,
    }
  })
}

export function WeatherProvider({ children }: { children: React.ReactNode }) {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentLocation, setCurrentLocation] = useState(DEFAULT_LOCATION)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)
  const [isUsingMockData, setIsUsingMockData] = useState(false)

  const isApiKeyConfigured = !!(
    process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY && process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY.length > 0
  )

  const fetchWeatherData = useCallback(
    async (location: typeof currentLocation) => {
      setLoading(true)
      setError(null)

      try {
        // Check if we're using mock data
        if (!isApiKeyConfigured) {
          setIsUsingMockData(true)
          console.log("Using mock weather data - API key not configured")
        } else {
          setIsUsingMockData(false)
        }

        // Fetch current weather, forecast, and alerts
        // The weather service will automatically use mock data if API key is not configured
        const [currentWeatherResult, forecastResult, alertsResult] = await Promise.allSettled([
          weatherService.getCurrentWeather(location.lat, location.lon),
          weatherService.getForecast(location.lat, location.lon),
          weatherService.getWeatherAlerts(location.lat, location.lon),
        ])

        if (currentWeatherResult.status === "rejected") {
          throw new Error("Failed to fetch current weather data")
        }

        if (forecastResult.status === "rejected") {
          throw new Error("Failed to fetch weather forecast data")
        }

        const currentData = currentWeatherResult.value
        const forecastData = forecastResult.value
        const alertsData = alertsResult.status === "fulfilled" ? alertsResult.value : { alerts: [] }

        const processedData: WeatherData = {
          current: {
            temperature: Math.round(currentData.main.temp),
            feelsLike: Math.round(currentData.main.feels_like),
            humidity: currentData.main.humidity,
            windSpeed: Math.round(currentData.wind.speed * 3.6), // Convert m/s to km/h
            windDirection: currentData.wind.deg || 0,
            pressure: currentData.main.pressure,
            visibility: Math.round(currentData.visibility / 1000), // Convert m to km
            precipitation: 0, // Current weather doesn't include precipitation
            condition: currentData.weather[0].main,
            description: currentData.weather[0].description,
            icon: currentData.weather[0].icon,
            iconUrl: weatherService.getWeatherIconUrl(currentData.weather[0].icon),
            sunrise: currentData.sys.sunrise,
            sunset: currentData.sys.sunset,
          },
          forecast: processForecastData(forecastData),
          alerts: processAlertsData(alertsData),
          location: {
            name: currentData.name,
            country: currentData.sys.country,
            lat: currentData.coord.lat,
            lon: currentData.coord.lon,
          },
        }

        setWeatherData(processedData)
        setLastUpdated(new Date())
        setError(null)
      } catch (err) {
        console.error("Weather fetch error:", err)
        setError("Não foi possível carregar os dados meteorológicos")

        // Set mock data as fallback even on error
        if (!isApiKeyConfigured) {
          setIsUsingMockData(true)
          // Generate basic mock data as fallback
          const mockData: WeatherData = {
            current: {
              temperature: 28,
              feelsLike: 30,
              humidity: 65,
              windSpeed: 12,
              windDirection: 180,
              pressure: 1013,
              visibility: 10,
              precipitation: 0,
              condition: "Clear",
              description: "céu limpo",
              icon: "01d",
              iconUrl: weatherService.getWeatherIconUrl("01d"),
              sunrise: Math.floor(Date.now() / 1000) - 3600,
              sunset: Math.floor(Date.now() / 1000) + 3600,
            },
            forecast: Array.from({ length: 7 }, (_, i) => ({
              date: new Date(Date.now() + i * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
              day: new Date(Date.now() + i * 24 * 60 * 60 * 1000).toLocaleDateString("pt-AO", { weekday: "short" }),
              high: 30 + Math.floor(Math.random() * 8),
              low: 20 + Math.floor(Math.random() * 5),
              condition: "Clear",
              description: "céu limpo",
              icon: "01d",
              iconUrl: weatherService.getWeatherIconUrl("01d"),
              precipitation: Math.floor(Math.random() * 20),
              humidity: 60 + Math.floor(Math.random() * 20),
              windSpeed: 10 + Math.floor(Math.random() * 10),
            })),
            alerts: [],
            location: {
              name: location.name.split(",")[0] || "Luanda",
              country: "AO",
              lat: location.lat,
              lon: location.lon,
            },
          }
          setWeatherData(mockData)
          setError(null) // Clear error when using mock data
        }
      } finally {
        setLoading(false)
      }
    },
    [isApiKeyConfigured],
  )

  const refreshWeather = useCallback(() => {
    fetchWeatherData(currentLocation)
  }, [currentLocation, fetchWeatherData])

  const setLocation = useCallback((location: { lat: number; lon: number; name: string }) => {
    setCurrentLocation(location)
  }, [])

  // Initial load
  useEffect(() => {
    fetchWeatherData(currentLocation)
  }, [currentLocation, fetchWeatherData])

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        loading,
        error,
        refreshWeather,
        setLocation,
        lastUpdated,
        isApiKeyConfigured,
        isUsingMockData,
      }}
    >
      {children}
    </WeatherContext.Provider>
  )
}

export function useWeather() {
  const context = useContext(WeatherContext)
  if (context === undefined) {
    throw new Error("useWeather must be used within a WeatherProvider")
  }
  return context
}
