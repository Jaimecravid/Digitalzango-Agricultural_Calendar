"use client";

import React from "react";
import { WeatherProvider } from "../contexts/weather-context";
import { LanguageProvider } from "../contexts/language-context";
import { RegionProvider } from "../contexts/region-context";
import Header from "../components/header";

// Simple guides content for now
const CropGuidesContent = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Guias de Cultivo</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Milho</h2>
          <p>Guia completo para o cultivo de milho em Angola.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Feijão</h2>
          <p>Guia completo para o cultivo de feijão em Angola.</p>
        </div>
      </div>
    </div>
  );
};

export default function GuiasPage() {
  return (
    <LanguageProvider>
      <RegionProvider>
        <WeatherProvider>
          <Header />
          <CropGuidesContent />
        </WeatherProvider>
      </RegionProvider>
    </LanguageProvider>
  );
}