"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface Region {
  id: string
  name: string
  climate: string
  rainySeasonStart: number // month (1-12)
  rainySeasonEnd: number
  drySeasonStart: number
  drySeasonEnd: number
  mainCrops: string[]
  coordinates: { lat: number; lng: number }
}

interface RegionContextType {
  currentRegion: string
  setRegion: (regionId: string) => void
  regions: Region[]
  getCurrentRegion: () => Region | undefined
}

// All 18 provinces of Angola
const regions: Region[] = [
  {
    id: "luanda",
    name: "Luanda",
    climate: "Semi-árido",
    rainySeasonStart: 10,
    rainySeasonEnd: 4,
    drySeasonStart: 5,
    drySeasonEnd: 9,
    mainCrops: ["Milho", "Feijão", "Mandioca", "Batata-doce"],
    coordinates: { lat: -8.839, lng: 13.2894 },
  },
  {
    id: "benguela",
    name: "Benguela",
    climate: "Semi-árido",
    rainySeasonStart: 11,
    rainySeasonEnd: 3,
    drySeasonStart: 4,
    drySeasonEnd: 10,
    mainCrops: ["Milho", "Feijão", "Tomate", "Cebola"],
    coordinates: { lat: -12.5763, lng: 13.4055 },
  },
  {
    id: "huambo",
    name: "Huambo",
    climate: "Tropical de altitude",
    rainySeasonStart: 10,
    rainySeasonEnd: 4,
    drySeasonStart: 5,
    drySeasonEnd: 9,
    mainCrops: ["Milho", "Feijão", "Batata", "Trigo"],
    coordinates: { lat: -12.7756, lng: 15.7396 },
  },
  {
    id: "bie",
    name: "Bié",
    climate: "Tropical de altitude",
    rainySeasonStart: 10,
    rainySeasonEnd: 4,
    drySeasonStart: 5,
    drySeasonEnd: 9,
    mainCrops: ["Milho", "Feijão", "Mandioca", "Amendoim"],
    coordinates: { lat: -12.5, lng: 17.5 },
  },
  {
    id: "malanje",
    name: "Malanje",
    climate: "Tropical húmido",
    rainySeasonStart: 9,
    rainySeasonEnd: 5,
    drySeasonStart: 6,
    drySeasonEnd: 8,
    mainCrops: ["Café", "Milho", "Feijão", "Banana"],
    coordinates: { lat: -9.5402, lng: 16.341 },
  },
  {
    id: "uige",
    name: "Uíge",
    climate: "Tropical húmido",
    rainySeasonStart: 9,
    rainySeasonEnd: 5,
    drySeasonStart: 6,
    drySeasonEnd: 8,
    mainCrops: ["Café", "Cacau", "Banana", "Mandioca"],
    coordinates: { lat: -7.6086, lng: 15.0564 },
  },
  {
    id: "cabinda",
    name: "Cabinda",
    climate: "Tropical húmido",
    rainySeasonStart: 9,
    rainySeasonEnd: 5,
    drySeasonStart: 6,
    drySeasonEnd: 8,
    mainCrops: ["Cacau", "Café", "Banana", "Mandioca"],
    coordinates: { lat: -5.55, lng: 12.2 },
  },
  {
    id: "zaire",
    name: "Zaire",
    climate: "Tropical húmido",
    rainySeasonStart: 9,
    rainySeasonEnd: 5,
    drySeasonStart: 6,
    drySeasonEnd: 8,
    mainCrops: ["Café", "Banana", "Mandioca", "Milho"],
    coordinates: { lat: -6.45, lng: 14.2 },
  },
  {
    id: "cuanza-norte",
    name: "Cuanza Norte",
    climate: "Tropical",
    rainySeasonStart: 10,
    rainySeasonEnd: 4,
    drySeasonStart: 5,
    drySeasonEnd: 9,
    mainCrops: ["Café", "Milho", "Feijão", "Mandioca"],
    coordinates: { lat: -9.0, lng: 15.0 },
  },
  {
    id: "cuanza-sul",
    name: "Cuanza Sul",
    climate: "Tropical",
    rainySeasonStart: 10,
    rainySeasonEnd: 4,
    drySeasonStart: 5,
    drySeasonEnd: 9,
    mainCrops: ["Milho", "Feijão", "Café", "Algodão"],
    coordinates: { lat: -11.0, lng: 15.0 },
  },
  {
    id: "lunda-norte",
    name: "Lunda Norte",
    climate: "Tropical húmido",
    rainySeasonStart: 9,
    rainySeasonEnd: 5,
    drySeasonStart: 6,
    drySeasonEnd: 8,
    mainCrops: ["Mandioca", "Milho", "Feijão", "Banana"],
    coordinates: { lat: -8.5, lng: 20.0 },
  },
  {
    id: "lunda-sul",
    name: "Lunda Sul",
    climate: "Tropical húmido",
    rainySeasonStart: 9,
    rainySeasonEnd: 5,
    drySeasonStart: 6,
    drySeasonEnd: 8,
    mainCrops: ["Mandioca", "Milho", "Feijão", "Batata-doce"],
    coordinates: { lat: -9.5, lng: 20.5 },
  },
  {
    id: "moxico",
    name: "Moxico",
    climate: "Tropical",
    rainySeasonStart: 10,
    rainySeasonEnd: 4,
    drySeasonStart: 5,
    drySeasonEnd: 9,
    mainCrops: ["Milho", "Mandioca", "Feijão", "Amendoim"],
    coordinates: { lat: -13.0, lng: 19.0 },
  },
  {
    id: "cuando-cubango",
    name: "Cuando Cubango",
    climate: "Semi-árido",
    rainySeasonStart: 11,
    rainySeasonEnd: 3,
    drySeasonStart: 4,
    drySeasonEnd: 10,
    mainCrops: ["Milho", "Sorgo", "Feijão", "Mandioca"],
    coordinates: { lat: -17.0, lng: 18.0 },
  },
  {
    id: "cunene",
    name: "Cunene",
    climate: "Semi-árido",
    rainySeasonStart: 11,
    rainySeasonEnd: 3,
    drySeasonStart: 4,
    drySeasonEnd: 10,
    mainCrops: ["Milho", "Sorgo", "Feijão", "Amendoim"],
    coordinates: { lat: -16.0, lng: 15.5 },
  },
  {
    id: "huila",
    name: "Huíla",
    climate: "Tropical de altitude",
    rainySeasonStart: 10,
    rainySeasonEnd: 4,
    drySeasonStart: 5,
    drySeasonEnd: 9,
    mainCrops: ["Milho", "Feijão", "Café", "Batata"],
    coordinates: { lat: -15.0, lng: 14.0 },
  },
  {
    id: "namibe",
    name: "Namibe",
    climate: "Árido",
    rainySeasonStart: 12,
    rainySeasonEnd: 2,
    drySeasonStart: 3,
    drySeasonEnd: 11,
    mainCrops: ["Milho", "Feijão", "Tomate", "Cebola"],
    coordinates: { lat: -15.2, lng: 12.15 },
  },
  {
    id: "bengo",
    name: "Bengo",
    climate: "Semi-árido",
    rainySeasonStart: 10,
    rainySeasonEnd: 4,
    drySeasonStart: 5,
    drySeasonEnd: 9,
    mainCrops: ["Milho", "Feijão", "Mandioca", "Tomate"],
    coordinates: { lat: -8.5, lng: 13.5 },
  },
]

const RegionContext = createContext<RegionContextType | undefined>(undefined)

export function RegionProvider({ children }: { children: React.ReactNode }) {
  const [currentRegion, setCurrentRegion] = useState("luanda")

  useEffect(() => {
    const savedRegion = localStorage.getItem("agricultural-calendar-region")
    if (savedRegion && regions.find((r) => r.id === savedRegion)) {
      setCurrentRegion(savedRegion)
    }
  }, [])

  const setRegion = (regionId: string) => {
    setCurrentRegion(regionId)
    localStorage.setItem("agricultural-calendar-region", regionId)
  }

  const getCurrentRegion = () => {
    return regions.find((r) => r.id === currentRegion)
  }

  return (
    <RegionContext.Provider
      value={{
        currentRegion,
        setRegion,
        regions,
        getCurrentRegion,
      }}
    >
      {children}
    </RegionContext.Provider>
  )
}

export function useRegion() {
  const context = useContext(RegionContext)
  if (context === undefined) {
    throw new Error("useRegion must be used within a RegionProvider")
  }
  return context
}
