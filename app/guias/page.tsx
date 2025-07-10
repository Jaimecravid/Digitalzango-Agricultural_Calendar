"use client";

import React, { useState } from "react";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { WeatherProvider } from "../contexts/weather-context";
import { LanguageProvider } from "../contexts/language-context";
import { RegionProvider } from "../contexts/region-context";
import WeatherWidget from "../components/weather-widget";

// Import the scalable database system
import { ANGOLA_CROPS, getCropsByCategory } from '@/lib/data/crops-database';
import { Crop } from '@/lib/types/agriculture';

// Enhanced affiliate products for DigitalZango
const affiliateProducts = [
  {
    id: "sementes",
    name: "Sementes Certificadas",
    icon: "🌱",
    description: "Sementes de alta qualidade para máxima produção",
    price: "Desde 2.500 Kz",
    link: "sementes",
    category: "seeds"
  },
  {
    id: "fertilizantes",
    name: "Fertilizantes NPK",
    icon: "🧪",
    description: "Nutrição completa para suas culturas",
    price: "Desde 4.800 Kz",
    link: "fertilizantes",
    category: "fertilizers"
  },
  {
    id: "ferramentas",
    name: "Ferramentas Agrícolas",
    icon: "🔧",
    description: "Equipamentos essenciais para agricultura",
    price: "Desde 1.200 Kz",
    link: "ferramentas",
    category: "tools"
  }
];

// Memoized guides content with enhanced design and database integration
const CropGuidesContent = React.memo(() => {
  const [selectedCrop, setSelectedCrop] = useState<Crop | null>(null);
  const router = useRouter();

  // Get crops from scalable database (currently showing first 4, expandable to 50+)
  const cropGuides = ANGOLA_CROPS.slice(0, 4);
  
  // Get different categories for variety
  const cerealCrops = getCropsByCategory('cereal');
  const legumeCrops = getCropsByCategory('legume');
  const tuberCrops = getCropsByCategory('tuber');

  // Handler for affiliate product clicks
  const handleProductClick = (productType: string) => {
    console.log(`DigitalZango affiliate click: ${productType}`);
    // Add affiliate tracking analytics here
  };

  // Handler for crop detail navigation
  const handleCropClick = (cropId: string) => {
    router.push(`/cultivos/${cropId}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Enhanced Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-xl mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2">Guias de Cultivo</h1>
            <p className="text-xl opacity-90">Maximize sua produção agrícola em Angola</p>
            <p className="text-lg opacity-80">Guias especializados para o clima angolano</p>
            <p className="text-sm opacity-70 mt-2">Base de dados com {ANGOLA_CROPS.length} culturas principais</p>
          </div>
          <div className="text-6xl">🌾</div>
        </div>
      </div>

      {/* Weather Section */}
      <div className="mb-8 bg-blue-50 p-6 rounded-xl">
        <h2 className="text-xl font-semibold mb-4 text-blue-800 flex items-center gap-2">
          🌤️ Condições Meteorológicas
        </h2>
        <WeatherWidget />
      </div>

      {/* Enhanced Crop Guides Grid using Scalable Database */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Culturas Principais de Angola</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cropGuides.map((crop, index) => (
            <div key={crop.id} className="group hover:scale-105 transition-all duration-300">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-green-500">
                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${crop.color} p-6 text-white`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold flex items-center gap-3">
                        <span className="text-3xl">{crop.icon}</span>
                        {crop.name}
                      </h3>
                      <p className="opacity-90">{crop.description}</p>
                      <p className="text-sm opacity-75 italic">{crop.scientificName}</p>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Content with Database Fields */}
                <div className="p-6">
                  {/* Quick Stats from Database */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-600">Época</div>
                      <div className="font-semibold text-green-600">{crop.season}</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-600">Dificuldade</div>
                      <div className="font-semibold text-blue-600">{crop.difficulty}</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-600">Produção</div>
                      <div className="font-semibold text-orange-600">{crop.yield}</div>
                    </div>
                  </div>

                  {/* Market Price from Database */}
                  <div className="mb-4 p-3 bg-green-50 rounded-lg">
                    <div className="text-sm text-gray-600">Preço de Mercado</div>
                    <div className="font-bold text-green-700">
                      {crop.marketPrice.min}-{crop.marketPrice.max} {crop.marketPrice.currency}/{crop.marketPrice.unit}
                    </div>
                  </div>
                  
                  {/* Tips from Database */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Dicas Essenciais:</h4>
                    <ul className="space-y-1">
                      {crop.tips.slice(0, 3).map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-green-500 mt-1">✓</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Provinces from Database */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Províncias Ideais:</h4>
                    <div className="flex flex-wrap gap-2">
                      {crop.provinces.slice(0, 4).map((province, pIndex) => (
                        <span key={pIndex} className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                          {province}
                        </span>
                      ))}
                      {crop.provinces.length > 4 && (
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          +{crop.provinces.length - 4} mais
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Sustainability Score */}
                  <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Sustentabilidade</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-green-500 h-2 rounded-full" 
                            style={{ width: `${crop.sustainabilityScore * 10}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-semibold text-green-600">{crop.sustainabilityScore}/10</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced Action Button with Dynamic Navigation */}
                  <Link href={`/cultivos/${crop.id}`}>
                    <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2">
                      Ver Guia Completo
                      <span className="text-lg">→</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Crops Button */}
        <div className="text-center mt-8">
          <Link href="/cultivos">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Ver Todas as {ANGOLA_CROPS.length} Culturas
            </button>
          </Link>
        </div>
      </div>

      {/* Enhanced Calendar Integration with Working Links */}
      <div className="mb-12 bg-blue-50 p-8 rounded-xl">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-800">
          📅 Calendário Agrícola Integrado
        </h2>
        <div className="text-center">
          <p className="text-gray-700 mb-4">
            Sincronize seus cultivos com nosso calendário agrícola especializado para Angola
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/calendario">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Acessar Calendário
              </button>
            </Link>
            <Link href="/pragas">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Alertas de Pragas
              </button>
            </Link>
            <Link href="/provincias">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Guias por Província
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Enhanced DigitalZango Affiliate Products with Working Links */}
      <div className="bg-gradient-to-r from-orange-100 to-red-100 p-8 rounded-xl">
        <h2 className="text-2xl font-bold text-center mb-6 text-orange-800">
          🛒 Produtos Recomendados - DigitalZango
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {affiliateProducts.map((product, index) => (
            <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-3">{product.icon}</div>
              <h3 className="font-bold mb-2 text-gray-800">{product.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{product.description}</p>
              <p className="text-lg font-bold text-orange-600 mb-4">{product.price}</p>
              <Link href={`/produtos/${product.category}`}>
                <button 
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors w-full"
                  onClick={() => handleProductClick(product.name)}
                >
                  Ver Ofertas
                </button>
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            💡 Produtos selecionados pela equipe DigitalZango para agricultura em Angola
          </p>
          <Link href="/produtos">
            <button className="mt-4 bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
              Ver Todos os Produtos
            </button>
          </Link>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="mt-12 bg-gray-50 p-8 rounded-xl">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          📊 DigitalZango em Números
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-green-600">{ANGOLA_CROPS.length}</div>
            <div className="text-sm text-gray-600">Culturas</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600">18</div>
            <div className="text-sm text-gray-600">Províncias</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600">{affiliateProducts.length}+</div>
            <div className="text-sm text-gray-600">Produtos</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600">365</div>
            <div className="text-sm text-gray-600">Dias/Ano</div>
          </div>
        </div>
      </div>
    </div>
  );
});

// Add display name for better debugging
CropGuidesContent.displayName = 'CropGuidesContent';

export default function GuiasPage() {
  return (
    <WeatherProvider>
      <LanguageProvider>
        <RegionProvider>
          <CropGuidesContent />
        </RegionProvider>
      </LanguageProvider>
    </WeatherProvider>
  );
}
