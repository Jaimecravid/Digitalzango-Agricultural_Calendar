"use client";

import React, { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin, Search, X } from "lucide-react";

interface LocationResult {
  id: string;
  name: string;
  province: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

interface LocationSearchProps {
  onLocationSelect: (location: LocationResult) => void;
  placeholder?: string;
}

const LocationSearch = ({ onLocationSelect, placeholder = "Procurar localização..." }: LocationSearchProps) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<LocationResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Sample Angola locations for demonstration
  const angolaLocations: LocationResult[] = [
    { id: "1", name: "Luanda", province: "Luanda", coordinates: { lat: -8.8390, lng: 13.2894 } },
    { id: "2", name: "Benguela", province: "Benguela", coordinates: { lat: -12.5763, lng: 13.4055 } },
    { id: "3", name: "Huambo", province: "Huambo", coordinates: { lat: -12.7756, lng: 15.7394 } },
    { id: "4", name: "Lubango", province: "Huíla", coordinates: { lat: -14.9177, lng: 13.4925 } },
    { id: "5", name: "Cabinda", province: "Cabinda", coordinates: { lat: -5.5500, lng: 12.2000 } },
    { id: "6", name: "Kuito", province: "Bié", coordinates: { lat: -12.3848, lng: 16.9323 } },
    { id: "7", name: "Caxito", province: "Bengo", coordinates: { lat: -8.5783, lng: 13.6644 } },
    { id: "8", name: "Menongue", province: "Cuando Cubango", coordinates: { lat: -14.6586, lng: 17.6911 } },
    { id: "9", name: "Ondjiva", province: "Cunene", coordinates: { lat: -17.0667, lng: 15.7333 } },
    { id: "10", name: "N'dalatando", province: "Kwanza Norte", coordinates: { lat: -9.2968, lng: 14.9111 } }
  ];

  // Handle search with debouncing
  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    setError(null);

    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    if (searchQuery.trim().length < 2) {
      setResults([]);
      setShowResults(false);
      return;
    }

    setIsLoading(true);
    searchTimeoutRef.current = setTimeout(() => {
      performSearch(searchQuery);
    }, 300);
  };

  const performSearch = (searchQuery: string) => {
    try {
      const filteredResults = angolaLocations.filter(location =>
        location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        location.province.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setResults(filteredResults);
      setShowResults(true);
      setIsLoading(false);
    } catch (err) {
      setError("Erro ao procurar localização");
      setIsLoading(false);
    }
  };

  const handleLocationSelect = (location: LocationResult) => {
    setQuery(location.name);
    setShowResults(false);
    onLocationSelect(location);
  };

  const clearSearch = () => {
    setQuery("");
    setResults([]);
    setShowResults(false);
    setError(null);
  };

  // Close results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (resultsRef.current && !resultsRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="relative w-full" ref={resultsRef}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => query.length >= 2 && setShowResults(true)}
          className="pl-10 pr-10"
        />
        {query && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearSearch}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
          >
            <X className="h-3 w-3" />
          </Button>
        )}
      </div>

      {/* Loading indicator */}
      {isLoading && (
        <div className="absolute top-full left-0 right-0 z-10 mt-1">
          <Card>
            <CardContent className="p-3 text-center">
              <div className="text-sm text-gray-500">A procurar...</div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Error message */}
      {error && (
        <div className="absolute top-full left-0 right-0 z-10 mt-1">
          <Card>
            <CardContent className="p-3 text-center">
              <div className="text-sm text-red-500">{error}</div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Search results */}
      {showResults && results.length > 0 && !isLoading && (
        <div className="absolute top-full left-0 right-0 z-10 mt-1">
          <Card>
            <CardContent className="p-0">
              <div className="max-h-60 overflow-y-auto">
                {results.map((location) => (
                  <div
                    key={location.id}
                    onClick={() => handleLocationSelect(location)}
                    className="flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
                  >
                    <MapPin className="h-4 w-4 text-gray-400 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="font-medium">{location.name}</div>
                      <div className="text-sm text-gray-500">{location.province}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* No results message */}
      {showResults && results.length === 0 && !isLoading && query.length >= 2 && (
        <div className="absolute top-full left-0 right-0 z-10 mt-1">
          <Card>
            <CardContent className="p-3 text-center">
              <div className="text-sm text-gray-500">Nenhuma localização encontrada</div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default LocationSearch;
