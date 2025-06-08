"use client"

import { Suspense } from "react"
import WeatherWidget from "../components/weather-widget"
import { WeatherProvider } from "../contexts/weather-context"
import { LanguageProvider } from "../contexts/language-context"
import { RegionProvider } from "../contexts/region-context"
import { useLanguage } from "../contexts/language-context"
import Header from "../components/header"

function WeatherPageContent() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{t("weatherInformation")}</h1>
          <p className="text-gray-600">{t("weatherPageDescription")}</p>
        </div>

        <Suspense
          fallback={
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
              <span className="ml-2 text-gray-600">{t("loadingWeatherData")}</span>
            </div>
          }
        >
          <WeatherWidget />
        </Suspense>
      </div>
    </div>
  )
}

export default function WeatherPage() {
  return (
    <LanguageProvider>
      <RegionProvider>
        <WeatherProvider>
          <WeatherPageContent />
        </WeatherProvider>
      </RegionProvider>
    </LanguageProvider>
  )
}
