"use client"

import { LanguageProvider } from "../contexts/language-context"
import { RegionProvider } from "../contexts/region-context"
import { WeatherProvider } from "../contexts/weather-context"
import CalendarView from "../components/calendar-view"

function CalendarioContent() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header removed to prevent double navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <CalendarView />
      </div>
    </div>
  )
}

export default function CalendarioPage() {
  return (
    <LanguageProvider>
      <RegionProvider>
        <WeatherProvider>
          <CalendarioContent />
        </WeatherProvider>
      </RegionProvider>
    </LanguageProvider>
  )
}