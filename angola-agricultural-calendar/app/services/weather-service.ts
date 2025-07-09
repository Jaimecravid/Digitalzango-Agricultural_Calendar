interface WeatherResponse {
  coord: {
    lon: number
    lat: number
  }
  weather: Array<{
    id: number
    main: string
    description: string
    icon: string
  }>
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
  }
  visibility: number
  wind: {
    speed: number
    deg: number
  }
  clouds: {
    all: number
  }
  dt: number
  sys: {
    country: string
    sunrise: number
    sunset: number
  }
  timezone: number
  id: number
  name: string
}

interface ForecastResponse {
  list: Array<{
    dt: number
    main: {
      temp: number
      temp_min: number
      temp_max: number
      humidity: number
    }
    weather: Array<{
      main: string
      description: string
      icon: string
    }>
    wind: {
      speed: number
    }
    pop: number
    dt_txt: string
  }>
  city: {
    name: string
    country: string
    coord: {
      lat: number
      lon: number
    }
  }
}

interface AlertsResponse {
  alerts?: Array<{
    sender_name: string
    event: string
    start: number
    end: number
    description: string
    tags: string[]
  }>
}

interface LocationData {
  name: string
  lat: number
  lon: number
  country: string
  state?: string
}

class WeatherService {
  private readonly baseUrl = "https://api.openweathermap.org/data/2.5"
  private readonly geoUrl = "https://api.openweathermap.org/geo/1.0"
  private readonly apiKey: string
  private cache = new Map<string, { data: any; timestamp: number }>()
  private readonly cacheTimeout = 10 * 60 * 1000 // 10 minutes

  constructor() {
    this.apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY || ""
  }

  private isApiKeyConfigured(): boolean {
    return !!this.apiKey && this.apiKey.length > 0
  }

  // Enhanced mock data generators
  private generateMockCurrentWeather(lat: number, lon: number): WeatherResponse {
    const temp = 22 + Math.random() * 12 // 22-34°C range for Angola
    const locationNames = ["Luanda", "Huambo", "Lobito", "Benguela", "Lubango"]
    const locationName = locationNames[Math.floor(Math.random() * locationNames.length)]

    return {
      coord: { lon, lat },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "céu limpo",
          icon: "01d",
        },
      ],
      main: {
        temp,
        feels_like: temp + 2,
        temp_min: temp - 3,
        temp_max: temp + 5,
        pressure: 1010 + Math.random() * 10,
        humidity: 55 + Math.random() * 25,
      },
      visibility: 8000 + Math.random() * 2000,
      wind: {
        speed: 2 + Math.random() * 6,
        deg: Math.floor(Math.random() * 360),
      },
      clouds: { all: Math.floor(Math.random() * 30) },
      dt: Math.floor(Date.now() / 1000),
      sys: {
        country: "AO",
        sunrise: Math.floor(Date.now() / 1000) - 6 * 3600 + Math.floor(Math.random() * 3600),
        sunset: Math.floor(Date.now() / 1000) + 6 * 3600 + Math.floor(Math.random() * 3600),
      },
      timezone: 3600,
      id: 2240449,
      name: locationName,
    }
  }

  private generateMockForecast(lat: number, lon: number): ForecastResponse {
    const locationNames = ["Luanda", "Huambo", "Lobito", "Benguela", "Lubango"]
    const locationName = locationNames[Math.floor(Math.random() * locationNames.length)]

    const list = Array.from({ length: 40 }, (_, i) => {
      const dt = Math.floor(Date.now() / 1000) + i * 3 * 3600 // 3-hour intervals
      const baseTemp = 20 + Math.random() * 15
      const temp = baseTemp + Math.sin(i * 0.5) * 5 // Add some variation

      const weatherConditions = [
        { main: "Clear", description: "céu limpo", icon: "01d" },
        { main: "Clouds", description: "nublado", icon: "03d" },
        { main: "Rain", description: "chuva leve", icon: "10d" },
      ]
      const weather = weatherConditions[Math.floor(Math.random() * weatherConditions.length)]

      return {
        dt,
        main: {
          temp,
          temp_min: temp - 2,
          temp_max: temp + 3,
          humidity: 50 + Math.random() * 40,
        },
        weather: [weather],
        wind: { speed: 1 + Math.random() * 8 },
        pop: Math.random() * 0.4, // 0-40% chance of precipitation
        dt_txt: new Date(dt * 1000).toISOString().replace("T", " ").slice(0, 19),
      }
    })

    return {
      list,
      city: {
        name: locationName,
        country: "AO",
        coord: { lat, lon },
      },
    }
  }

  private getCacheKey(endpoint: string, params: Record<string, any>): string {
    return `${endpoint}_${JSON.stringify(params)}`
  }

  private isValidCache(cacheKey: string): boolean {
    const cached = this.cache.get(cacheKey)
    if (!cached) return false
    return Date.now() - cached.timestamp < this.cacheTimeout
  }

  private async makeRequest<T>(endpoint: string, params: Record<string, any>): Promise<T> {
    if (!this.isApiKeyConfigured()) {
      throw new Error("OpenWeather API key not configured")
    }

    const cacheKey = this.getCacheKey(endpoint, params)

    // Check cache first
    if (this.isValidCache(cacheKey)) {
      return this.cache.get(cacheKey)!.data
    }

    const url = new URL(endpoint, endpoint.includes("geo") ? this.geoUrl : this.baseUrl)
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value.toString())
    })
    url.searchParams.append("appid", this.apiKey)

    try {
      const response = await fetch(url.toString())

      if (!response.ok) {
        if (response.status === 429) {
          throw new Error("API rate limit exceeded. Please try again later.")
        }
        if (response.status === 401) {
          throw new Error("Invalid API key. Please check your OpenWeather API configuration.")
        }
        throw new Error(`Weather API error: ${response.status} ${response.statusText}`)
      }

      const data = await response.json()

      // Cache the response
      this.cache.set(cacheKey, {
        data,
        timestamp: Date.now(),
      })

      return data
    } catch (error) {
      if (error instanceof Error) {
        throw error
      }
      throw new Error("Failed to fetch weather data")
    }
  }

  async getCurrentWeather(lat: number, lon: number): Promise<WeatherResponse> {
    if (!this.isApiKeyConfigured()) {
      // Return mock data immediately without making any fetch requests
      return Promise.resolve(this.generateMockCurrentWeather(lat, lon))
    }

    return this.makeRequest<WeatherResponse>("/weather", {
      lat,
      lon,
      units: "metric",
    })
  }

  async getForecast(lat: number, lon: number): Promise<ForecastResponse> {
    if (!this.isApiKeyConfigured()) {
      // Return mock data immediately without making any fetch requests
      return Promise.resolve(this.generateMockForecast(lat, lon))
    }

    return this.makeRequest<ForecastResponse>("/forecast", {
      lat,
      lon,
      units: "metric",
    })
  }

  async getWeatherAlerts(lat: number, lon: number): Promise<AlertsResponse> {
    if (!this.isApiKeyConfigured()) {
      // Return empty alerts for mock data
      return Promise.resolve({ alerts: [] })
    }

    try {
      return await this.makeRequest<AlertsResponse>("/onecall", {
        lat,
        lon,
        exclude: "current,minutely,hourly,daily",
        units: "metric",
      })
    } catch (error) {
      // Alerts might not be available for all locations
      console.warn("Weather alerts not available for this location")
      return { alerts: [] }
    }
  }

  async searchLocations(query: string): Promise<LocationData[]> {
    if (!query.trim()) return []

    if (!this.isApiKeyConfigured()) {
      // Return mock search results for common Angolan cities
      const mockCities: LocationData[] = [
        { name: "Luanda", lat: -8.839, lon: 13.2894, country: "AO" },
        { name: "Huambo", lat: -12.7756, lon: 15.7396, country: "AO" },
        { name: "Lobito", lat: -12.3598, lon: 13.5311, country: "AO" },
        { name: "Benguela", lat: -12.5763, lon: 13.4055, country: "AO" },
        { name: "Lubango", lat: -14.9177, lon: 13.4925, country: "AO" },
        { name: "Malanje", lat: -9.5402, lon: 16.341, country: "AO" },
        { name: "Namibe", lat: -15.1961, lon: 12.1522, country: "AO" },
        { name: "Soyo", lat: -6.1349, lon: 12.3689, country: "AO" },
      ]

      return Promise.resolve(mockCities.filter((city) => city.name.toLowerCase().includes(query.toLowerCase())))
    }

    return this.makeRequest<LocationData[]>("/direct", {
      q: query,
      limit: 5,
    })
  }

  async getCurrentLocation(): Promise<{ lat: number; lon: number }> {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error("Geolocation is not supported by this browser"))
        return
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          })
        },
        (error) => {
          let message = "Unable to retrieve location"
          switch (error.code) {
            case error.PERMISSION_DENIED:
              message = "Location access denied by user"
              break
            case error.POSITION_UNAVAILABLE:
              message = "Location information unavailable"
              break
            case error.TIMEOUT:
              message = "Location request timed out"
              break
          }
          reject(new Error(message))
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 300000, // 5 minutes
        },
      )
    })
  }

  getWeatherIconUrl(iconCode: string): string {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`
  }
}

export const weatherService = new WeatherService()
export type { WeatherResponse, ForecastResponse, AlertsResponse, LocationData }
