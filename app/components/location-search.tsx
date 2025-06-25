"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Search, Loader2, Navigation } from "lucide-react"
import { weatherService, type LocationData } from "../services/weather-service"
import { useLanguage } from "../contexts/language-context"

interface LocationSearchProps {
  onLocationSelect: (location: { lat: number; lon: number; name: string }) => void
  currentLocation?: string
}

export default function LocationSearch({ onLocationSelect, currentLocation }: LocationSearchProps) {

  const [query, setQuery] = useState("")
  const [results, setResults] = useState<LocationData[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [isGettingLocation, setIsGettingLocation] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const searchTimeoutRef = useRef<NodeJS.Timeout>()
  const resultsRef = useRef<HTMLDivElement>(null)

  // Handle search with debouncing
  useEffect(() => {
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current)
    }

    if (query.trim().length < 2) {
      setResults([])
      setShowResults(false)
      return
    }

    searchTimeoutRef.current = setTimeout(async () => {
      setIsSearching(true)
      setError(null)

      try {
        const locations = await weatherService.searchLocations(query)
        setResults(locations)
        setShowResults(true)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Search failed")
        setResults([])
      } finally {
        setIsSearching(false)
      }
    }, 500)

    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current)
      }
    }
  }, [query])

  // Handle clicking outside to close results
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (resultsRef.current && !resultsRef.current.contains(event.target as Node)) {
        setShowResults(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleLocationSelect = (location: LocationData) => {
    onLocationSelect({
      lat: location.lat,
      lon: location.lon,
      name: `${location.name}, ${location.country}`,
    })
    setQuery(`${location.name}, ${location.country}`)
    setShowResults(false)
  }

  const handleCurrentLocation = async () => {
    setIsGettingLocation(true)
    setError(null)

    try {
      const coords = await weatherService.getCurrentLocation()
      onLocationSelect({
        lat: coords.lat,
        lon: coords.lon,
        name: "Current Location",
      })
      setQuery("Current Location")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to get current location")
    } finally {
      setIsGettingLocation(false)
    }
  }

  return (
    <div className="relative w-full max-w-md">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder={t("searchLocation") || "Search for a city..."}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => results.length > 0 && setShowResults(true)}
            className="pl-10 pr-4"
            aria-label="Search for location"
            aria-expanded={showResults}
            aria-haspopup="listbox"
          />
          {isSearching && (
            <Loader2 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 animate-spin" />
          )}
        </div>

        <Button
          onClick={handleCurrentLocation}
          disabled={isGettingLocation}
          variant="outline"
          size="icon"
          aria-label="Use current location"
          title="Use current location"
        >
          {isGettingLocation ? <Loader2 className="h-4 w-4 animate-spin" /> : <Navigation className="h-4 w-4" />}
        </Button>
      </div>

      {/* Search Results */}
      {showResults && (
        <Card className="absolute top-full left-0 right-0 mt-1 z-50 shadow-lg" ref={resultsRef}>
          <CardContent className="p-0">
            {results.length > 0 ? (
              <ul role="listbox" className="max-h-60 overflow-y-auto">
                {results.map((location, index) => (
                  <li key={`${location.lat}-${location.lon}`} role="option">
                    <button
                      onClick={() => handleLocationSelect(location)}
                      className="w-full text-left px-4 py-3 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none border-b border-gray-100 last:border-b-0 transition-colors"
                      tabIndex={0}
                    >
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-gray-400 flex-shrink-0" />
                        <div>
                          <div className="font-medium text-gray-900">{location.name}</div>
                          <div className="text-sm text-gray-500">
                            {location.state && `${location.state}, `}
                            {location.country}
                          </div>
                        </div>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            ) : query.trim().length >= 2 && !isSearching ? (
              <div className="px-4 py-3 text-gray-500 text-center">No locations found for "{query}"</div>
            ) : null}
          </CardContent>
        </Card>
      )}

      {/* Error Message */}
      {error && (
        <div className="mt-2 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-3 py-2">{error}</div>
      )}

      {/* Current Location Display */}
      {currentLocation && (
        <div className="mt-2 text-sm text-gray-600 flex items-center gap-1">
          <MapPin className="h-3 w-3" />
          Current: {currentLocation}
        </div>
      )}
    </div>
  )
}
