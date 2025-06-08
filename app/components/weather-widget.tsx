"use client"

import { useState } from "react"
import {
  Cloud,
  Sun,
  CloudRain,
  Wind,
  Eye,
  Droplets,
  Gauge,
  Sunrise,
  Sunset,
  MapPin,
  Search,
  Navigation,
  AlertTriangle,
  Thermometer,
  Calendar,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useWeather } from "../contexts/weather-context"
import { useLanguage } from "../contexts/language-context"
import type { JSX } from "react/jsx-runtime"

export default function WeatherWidget() {
  const { t } = useLanguage()
  const { currentWeather, forecast, isLoading, error, hasApiKey, fetchWeatherByLocation, fetchWeatherByCoords } =
    useWeather()

  const [location, setLocation] = useState("")
  const [isDetectingLocation, setIsDetectingLocation] = useState(false)

  const handleLocationSearch = async () => {
    if (location.trim()) {
      await fetchWeatherByLocation(location)
    }
  }

  const handleCurrentLocation = async () => {
    setIsDetectingLocation(true)
    try {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            await fetchWeatherByCoords(position.coords.latitude, position.coords.longitude)
            setIsDetectingLocation(false)
          },
          (error) => {
            console.error("Error getting location:", error)
            setIsDetectingLocation(false)
          },
        )
      }
    } catch (error) {
      console.error("Geolocation error:", error)
      setIsDetectingLocation(false)
    }
  }

  const getWeatherIcon = (condition: string) => {
    const iconMap: { [key: string]: JSX.Element } = {
      clear: <Sun className="h-8 w-8 text-yellow-500" />,
      clouds: <Cloud className="h-8 w-8 text-gray-500" />,
      rain: <CloudRain className="h-8 w-8 text-blue-500" />,
      thunderstorm: <CloudRain className="h-8 w-8 text-purple-500" />,
      snow: <Cloud className="h-8 w-8 text-blue-200" />,
      mist: <Cloud className="h-8 w-8 text-gray-400" />,
      fog: <Cloud className="h-8 w-8 text-gray-400" />,
    }
    return iconMap[condition.toLowerCase()] || <Cloud className="h-8 w-8 text-gray-500" />
  }

  const getWeatherConditionText = (condition: string) => {
    const conditionMap: { [key: string]: string } = {
      clear: t("clear"),
      clouds: t("cloudy"),
      rain: t("rainy"),
      thunderstorm: t("thunderstorm"),
      snow: t("snow"),
      mist: t("fog"),
      fog: t("fog"),
    }
    return conditionMap[condition.toLowerCase()] || condition
  }

  const getAgriculturalRecommendations = () => {
    if (!currentWeather) return []

    const recommendations = []

    if (currentWeather.temperature > 35) {
      recommendations.push({
        type: "warning",
        title: t("highTemperatureAlert"),
        description: t("increaseIrrigationFrequency"),
      })
    }

    if (currentWeather.humidity < 30) {
      recommendations.push({
        type: "info",
        title: t("lowHumidity"),
        description: t("monitorPlantsClosely"),
      })
    }

    if (currentWeather.windSpeed > 20) {
      recommendations.push({
        type: "warning",
        title: t("strongWinds"),
        description: t("protectYoungPlants"),
      })
    }

    if (forecast && forecast.length > 0 && forecast[0].precipitation > 10) {
      recommendations.push({
        type: "info",
        title: t("highPrecipitationExpected"),
        description: t("reduceIrrigation"),
      })
    }

    if (recommendations.length === 0) {
      recommendations.push({
        type: "success",
        title: t("favorableConditions"),
        description: t("currentWeatherConditionsAreFavorable"),
      })
    }

    return recommendations
  }

  if (!hasApiKey) {
    return (
      <div className="space-y-6">
        <Alert>
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            <strong>{t("apiKeyNotConfigured")}</strong>
            <br />
            {t("apiKeyInstructions")}
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cloud className="h-5 w-5" />
              {t("demonstrationData")}
            </CardTitle>
            <CardDescription>{t("demonstrationDataDescription")}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <div className="text-6xl mb-4">🌤️</div>
              <h3 className="text-xl font-semibold mb-2">Luanda, Angola</h3>
              <p className="text-3xl font-bold mb-2">28°C</p>
              <p className="text-gray-600 mb-4">{t("partlyCloudy")}</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">{t("humidity")}:</span> 65%
                </div>
                <div>
                  <span className="text-gray-500">{t("windSpeed")}:</span> 12 km/h
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">{t("loadingWeatherData")}</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <Card>
        <CardContent className="text-center py-8">
          <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">{t("weatherDataUnavailable")}</h3>
          <p className="text-gray-600 mb-4">{error}</p>
          <Button onClick={() => window.location.reload()} variant="outline">
            {t("tryAgain")}
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      {/* Location Search */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            {t("weatherLocation")}
          </CardTitle>
          <CardDescription>{t("searchCityOrUseLocation")}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 mb-4">
            <Input
              placeholder={t("searchLocation")}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleLocationSearch()}
            />
            <Button onClick={handleLocationSearch} disabled={!location.trim()}>
              <Search className="h-4 w-4" />
            </Button>
          </div>
          <Button onClick={handleCurrentLocation} disabled={isDetectingLocation} variant="outline" className="w-full">
            <Navigation className="h-4 w-4 mr-2" />
            {isDetectingLocation ? t("detectingLocation") : t("useCurrentLocation")}
          </Button>
        </CardContent>
      </Card>

      {/* Current Weather */}
      {currentWeather && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Thermometer className="h-5 w-5" />
              {t("currentWeather")}
            </CardTitle>
            <CardDescription>
              {currentWeather.location} • {t("lastUpdated")}: {new Date(currentWeather.timestamp).toLocaleTimeString()}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Main Weather Info */}
              <div className="text-center">
                <div className="flex justify-center mb-4">{getWeatherIcon(currentWeather.condition)}</div>
                <h3 className="text-4xl font-bold mb-2">{Math.round(currentWeather.temperature)}°C</h3>
                <p className="text-lg text-gray-600 mb-2">{getWeatherConditionText(currentWeather.condition)}</p>
                <p className="text-sm text-gray-500">
                  {t("feelsLike")}: {Math.round(currentWeather.feelsLike)}°C
                </p>
              </div>

              {/* Weather Details */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Droplets className="h-4 w-4 text-blue-500" />
                  <div>
                    <p className="text-sm text-gray-500">{t("humidity")}</p>
                    <p className="font-semibold">{currentWeather.humidity}%</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Wind className="h-4 w-4 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">{t("windSpeed")}</p>
                    <p className="font-semibold">{currentWeather.windSpeed} km/h</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Gauge className="h-4 w-4 text-purple-500" />
                  <div>
                    <p className="text-sm text-gray-500">{t("pressure")}</p>
                    <p className="font-semibold">{currentWeather.pressure} hPa</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4 text-green-500" />
                  <div>
                    <p className="text-sm text-gray-500">{t("visibility")}</p>
                    <p className="font-semibold">{currentWeather.visibility} km</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sun Times */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Sunrise className="h-4 w-4 text-orange-500" />
                  <div>
                    <p className="text-sm text-gray-500">{t("sunrise")}</p>
                    <p className="font-semibold">{currentWeather.sunrise}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Sunset className="h-4 w-4 text-orange-600" />
                  <div>
                    <p className="text-sm text-gray-500">{t("sunset")}</p>
                    <p className="font-semibold">{currentWeather.sunset}</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Forecast */}
      {forecast && forecast.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              {t("forecastDays")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
              {forecast.slice(0, 7).map((day, index) => (
                <div key={index} className="text-center p-3 rounded-lg bg-gray-50">
                  <p className="text-sm font-medium mb-2">
                    {index === 0 ? t("today") : new Date(day.date).toLocaleDateString("pt-AO", { weekday: "short" })}
                  </p>
                  <div className="flex justify-center mb-2">{getWeatherIcon(day.condition)}</div>
                  <p className="text-lg font-bold">{Math.round(day.maxTemp)}°</p>
                  <p className="text-sm text-gray-500">{Math.round(day.minTemp)}°</p>
                  <p className="text-xs text-blue-600 mt-1">
                    {t("precipitation")}: {day.precipitation}%
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Agricultural Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Thermometer className="h-5 w-5" />
            {t("agriculturalRecommendations")}
          </CardTitle>
          <CardDescription>{t("agriculturalRecommendationsDescription")}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {getAgriculturalRecommendations().map((recommendation, index) => (
              <Alert
                key={index}
                className={
                  recommendation.type === "warning"
                    ? "border-orange-200 bg-orange-50"
                    : recommendation.type === "info"
                      ? "border-blue-200 bg-blue-50"
                      : "border-green-200 bg-green-50"
                }
              >
                <AlertTriangle
                  className={`h-4 w-4 ${
                    recommendation.type === "warning"
                      ? "text-orange-600"
                      : recommendation.type === "info"
                        ? "text-blue-600"
                        : "text-green-600"
                  }`}
                />
                <AlertDescription>
                  <strong>{recommendation.title}</strong>
                  <br />
                  {recommendation.description}
                </AlertDescription>
              </Alert>
            ))}
          </div>
        </CardContent>
      </Card>

      {!currentWeather && !isLoading && (
        <Card>
          <CardContent className="text-center py-8">
            <Cloud className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">{t("noWeatherDataAvailable")}</h3>
            <p className="text-gray-600">{t("searchCityOrUseLocation")}</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
