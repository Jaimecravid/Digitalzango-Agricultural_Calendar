"use client"

import { LanguageProvider } from "../contexts/language-context"
import { RegionProvider } from "../contexts/region-context"
import { WeatherProvider } from "../contexts/weather-context"
import Header from "../components/header"
import ResourceManager from "../components/resource-manager"

function RecursosContent() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ResourceManager />
      </div>
    </div>
  )
}

export default function RecursosPage() {
  return (
    <LanguageProvider>
      <RegionProvider>
        <WeatherProvider>
          <RecursosContent />
        </WeatherProvider>
      </RegionProvider>
    </LanguageProvider>
  )
}
