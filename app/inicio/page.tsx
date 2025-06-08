"use client"

import { LanguageProvider } from "../contexts/language-context"
import { RegionProvider } from "../contexts/region-context"
import { WeatherProvider } from "../contexts/weather-context"
import HomePage from "../page"

export default function InicioPage() {
  return (
    <LanguageProvider>
      <RegionProvider>
        <WeatherProvider>
          <HomePage />
        </WeatherProvider>
      </RegionProvider>
    </LanguageProvider>
  )
}
