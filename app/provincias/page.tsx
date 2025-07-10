'use client';
import { useState } from 'react';
import Link from 'next/link';

// Complete Angola provinces data with all 18 provinces
const ANGOLA_PROVINCES = [
  {
    id: 'luanda',
    name: 'Luanda',
    capital: 'Luanda',
    area: '18,283 km²',
    population: '6.9 milhões',
    climate: 'Tropical seco',
    mainCrops: ['Mandioca', 'Batata-doce', 'Hortícolas'],
    agriculturalPotential: 'Médio',
    challenges: ['Urbanização', 'Solo degradado', 'Água limitada'],
    opportunities: ['Agricultura urbana', 'Horticultura', 'Mercado próximo'],
    recommendedProducts: ['sistema-irrigacao-gotejamento', 'fertilizante-organico-compostado'],
    color: 'from-blue-500 to-blue-700',
    featured: true
  },
  {
    id: 'huambo',
    name: 'Huambo',
    capital: 'Huambo',
    area: '34,274 km²',
    population: '2.0 milhões',
    climate: 'Tropical de altitude',
    mainCrops: ['Milho', 'Feijão', 'Batata', 'Trigo'],
    agriculturalPotential: 'Muito Alto',
    challenges: ['Mecanização', 'Armazenamento', 'Processamento'],
    opportunities: ['Celeiro de Angola', 'Indústria alimentar', 'Cooperativas'],
    recommendedProducts: ['sementes-milho-hibrido-premium', 'enxada-profissional-cabo-madeira'],
    color: 'from-red-500 to-red-700',
    featured: true
  },
  {
    id: 'malanje',
    name: 'Malanje',
    capital: 'Malanje',
    area: '97,602 km²',
    population: '986 mil',
    climate: 'Tropical húmido',
    mainCrops: ['Milho', 'Arroz', 'Feijão', 'Mandioca'],
    agriculturalPotential: 'Muito Alto',
    challenges: ['Infraestrutura rural', 'Mecanização', 'Crédito agrícola'],
    opportunities: ['Grande potencial', 'Solos férteis', 'Água abundante'],
    recommendedProducts: ['sementes-milho-hibrido-premium', 'sistema-irrigacao-gotejamento'],
    color: 'from-emerald-500 to-emerald-700',
    featured: true
  },
  {
    id: 'benguela',
    name: 'Benguela',
    capital: 'Benguela',
    area: '31,788 km²',
    population: '2.2 milhões',
    climate: 'Tropical seco',
    mainCrops: ['Milho', 'Feijão', 'Batata-doce', 'Hortícolas'],
    agriculturalPotential: 'Alto',
    challenges: ['Seca', 'Salinização', 'Irrigação'],
    opportunities: ['Porto exportação', 'Indústria', 'Horticultura'],
    recommendedProducts: ['sistema-irrigacao-gotejamento', 'fertilizante-organico-compostado'],
    color: 'from-cyan-500 to-cyan-700',
    featured: true
  },
  // All other provinces (non-featured)
  {
    id: 'bengo',
    name: 'Bengo',
    capital: 'Caxito',
    area: '31,371 km²',
    population: '356 mil',
    climate: 'Tropical húmido',
    mainCrops: ['Arroz', 'Milho', 'Feijão', 'Mandioca'],
    agriculturalPotential: 'Alto',
    challenges: ['Infraestrutura', 'Tecnologia', 'Financiamento'],
    opportunities: ['Irrigação', 'Arroz de várzea', 'Proximidade Luanda'],
    recommendedProducts: ['sementes-arroz-irrigado', 'fertilizante-npk-20-10-10'],
    color: 'from-green-500 to-green-700',
    featured: false
  },
  {
    id: 'kwanza-norte',
    name: 'Kwanza Norte',
    capital: 'Ndalatando',
    area: '24,190 km²',
    population: '443 mil',
    climate: 'Tropical húmido',
    mainCrops: ['Café', 'Milho', 'Feijão', 'Mandioca'],
    agriculturalPotential: 'Alto',
    challenges: ['Vias de acesso', 'Processamento', 'Armazenamento'],
    opportunities: ['Café de qualidade', 'Agrofloresta', 'Turismo rural'],
    recommendedProducts: ['sementes-milho-hibrido-premium', 'enxada-profissional-cabo-madeira'],
    color: 'from-amber-500 to-amber-700',
    featured: false
  },
  {
    id: 'kwanza-sul',
    name: 'Kwanza Sul',
    capital: 'Sumbe',
    area: '55,660 km²',
    population: '1.9 milhões',
    climate: 'Tropical seco',
    mainCrops: ['Milho', 'Feijão', 'Mandioca', 'Café'],
    agriculturalPotential: 'Alto',
    challenges: ['Seca sazonal', 'Irrigação', 'Sementes melhoradas'],
    opportunities: ['Diversificação', 'Cooperativas', 'Mercado interno'],
    recommendedProducts: ['sementes-feijao-vermelho', 'fertilizante-organico-compostado'],
    color: 'from-orange-500 to-orange-700',
    featured: false
  },
  {
    id: 'uige',
    name: 'Uíge',
    capital: 'Uíge',
    area: '58,698 km²',
    population: '1.4 milhões',
    climate: 'Tropical húmido',
    mainCrops: ['Café', 'Milho', 'Feijão', 'Mandioca'],
    agriculturalPotential: 'Muito Alto',
    challenges: ['Processamento café', 'Vias acesso', 'Tecnologia'],
    opportunities: ['Café premium', 'Agricultura familiar', 'Exportação'],
    recommendedProducts: ['sementes-feijao-vermelho', 'fertilizante-npk-20-10-10'],
    color: 'from-teal-500 to-teal-700',
    featured: false
  },
  {
    id: 'zaire',
    name: 'Zaire',
    capital: 'Mbanza-Kongo',
    area: '40,130 km²',
    population: '594 mil',
    climate: 'Tropical húmido',
    mainCrops: ['Café', 'Banana', 'Mandioca', 'Milho'],
    agriculturalPotential: 'Alto',
    challenges: ['Fronteira', 'Infraestrutura', 'Mercados'],
    opportunities: ['Café especial', 'Banana exportação', 'Comércio fronteiriço'],
    recommendedProducts: ['sementes-milho-hibrido-premium', 'fertilizante-organico-compostado'],
    color: 'from-indigo-500 to-indigo-700',
    featured: false
  },
  {
    id: 'cabinda',
    name: 'Cabinda',
    capital: 'Cabinda',
    area: '7,270 km²',
    population: '716 mil',
    climate: 'Tropical húmido',
    mainCrops: ['Café', 'Cacau', 'Banana', 'Mandioca'],
    agriculturalPotential: 'Alto',
    challenges: ['Área pequena', 'Petróleo vs agricultura', 'Mão de obra'],
    opportunities: ['Cacau premium', 'Agricultura intensiva', 'Mercado especializado'],
    recommendedProducts: ['fertilizante-organico-compostado', 'sistema-irrigacao-gotejamento'],
    color: 'from-purple-500 to-purple-700',
    featured: false
  },
  {
    id: 'bie',
    name: 'Bié',
    capital: 'Cuíto',
    area: '70,314 km²',
    population: '1.5 milhões',
    climate: 'Tropical de altitude',
    mainCrops: ['Milho', 'Feijão', 'Batata-doce', 'Mandioca'],
    agriculturalPotential: 'Muito Alto',
    challenges: ['Transporte', 'Armazenamento', 'Tecnologia'],
    opportunities: ['Produção cereais', 'Pecuária', 'Agropecuária'],
    recommendedProducts: ['sementes-feijao-vermelho', 'fertilizante-npk-20-10-10'],
    color: 'from-yellow-500 to-yellow-700',
    featured: false
  },
  {
    id: 'huila',
    name: 'Huíla',
    capital: 'Lubango',
    area: '75,002 km²',
    population: '2.5 milhões',
    climate: 'Tropical de altitude',
    mainCrops: ['Milho', 'Feijão', 'Trigo', 'Frutas'],
    agriculturalPotential: 'Muito Alto',
    challenges: ['Seca sazonal', 'Irrigação', 'Mercados'],
    opportunities: ['Fruticultura', 'Cereais', 'Pecuária'],
    recommendedProducts: ['sementes-milho-hibrido-premium', 'sistema-irrigacao-gotejamento'],
    color: 'from-pink-500 to-pink-700',
    featured: false
  },
  {
    id: 'namibe',
    name: 'Namibe',
    capital: 'Moçâmedes',
    area: '58,137 km²',
    population: '495 mil',
    climate: 'Árido',
    mainCrops: ['Milho', 'Feijão', 'Hortícolas irrigadas'],
    agriculturalPotential: 'Baixo',
    challenges: ['Seca extrema', 'Solo pobre', 'Água escassa'],
    opportunities: ['Irrigação localizada', 'Pesca', 'Turismo'],
    recommendedProducts: ['sistema-irrigacao-gotejamento', 'fertilizante-organico-compostado'],
    color: 'from-stone-500 to-stone-700',
    featured: false
  },
  {
    id: 'cunene',
    name: 'Cunene',
    capital: 'Ondjiva',
    area: '89,342 km²',
    population: '990 mil',
    climate: 'Semi-árido',
    mainCrops: ['Milho', 'Sorgo', 'Milheto', 'Feijão'],
    agriculturalPotential: 'Médio',
    challenges: ['Seca recorrente', 'Pastoreio', 'Conflitos'],
    opportunities: ['Pecuária', 'Culturas resistentes', 'Irrigação'],
    recommendedProducts: ['sementes-milho-hibrido-premium', 'fertilizante-npk-20-10-10'],
    color: 'from-orange-600 to-red-600',
    featured: false
  },
  {
    id: 'cuando-cubango',
    name: 'Cuando Cubango',
    capital: 'Menongue',
    area: '199,049 km²',
    population: '534 mil',
    climate: 'Semi-árido',
    mainCrops: ['Milho', 'Sorgo', 'Mandioca', 'Amendoim'],
    agriculturalPotential: 'Baixo',
    challenges: ['Seca extrema', 'Isolamento', 'Infraestrutura'],
    opportunities: ['Pecuária extensiva', 'Turismo', 'Culturas adaptadas'],
    recommendedProducts: ['sementes-feijao-vermelho', 'enxada-profissional-cabo-madeira'],
    color: 'from-amber-600 to-orange-700',
    featured: false
  },
  {
    id: 'moxico',
    name: 'Moxico',
    capital: 'Luena',
    area: '223,023 km²',
    population: '759 mil',
    climate: 'Tropical húmido',
    mainCrops: ['Milho', 'Mandioca', 'Arroz', 'Feijão'],
    agriculturalPotential: 'Alto',
    challenges: ['Isolamento', 'Infraestrutura', 'Mercados'],
    opportunities: ['Solos férteis', 'Água abundante', 'Biodiversidade'],
    recommendedProducts: ['sementes-arroz-irrigado', 'fertilizante-organico-compostado'],
    color: 'from-emerald-600 to-green-700',
    featured: false
  },
  {
    id: 'lunda-norte',
    name: 'Lunda Norte',
    capital: 'Dundo',
    area: '102,783 km²',
    population: '863 mil',
    climate: 'Tropical húmido',
    mainCrops: ['Mandioca', 'Milho', 'Banana', 'Amendoim'],
    agriculturalPotential: 'Alto',
    challenges: ['Mineração vs agricultura', 'Tecnologia', 'Mercados'],
    opportunities: ['Diversificação econômica', 'Agricultura familiar', 'Processamento'],
    recommendedProducts: ['sementes-milho-hibrido-premium', 'fertilizante-npk-20-10-10'],
    color: 'from-violet-500 to-violet-700',
    featured: false
  },
  {
    id: 'lunda-sul',
    name: 'Lunda Sul',
    capital: 'Saurimo',
    area: '45,649 km²',
    population: '538 mil',
    climate: 'Tropical húmido',
    mainCrops: ['Mandioca', 'Milho', 'Feijão', 'Banana'],
    agriculturalPotential: 'Alto',
    challenges: ['Mineração', 'Infraestrutura', 'Assistência técnica'],
    opportunities: ['Agricultura sustentável', 'Cooperativas', 'Mercado regional'],
    recommendedProducts: ['sementes-feijao-vermelho', 'enxada-profissional-cabo-madeira'],
    color: 'from-fuchsia-500 to-fuchsia-700',
    featured: false
  }
];

const potentialColors = {
  'Baixo': 'bg-red-100 text-red-800',
  'Médio': 'bg-yellow-100 text-yellow-800',
  'Alto': 'bg-green-100 text-green-800',
  'Muito Alto': 'bg-emerald-100 text-emerald-800'
};

export default function ProvinciasPage() {
  const [selectedProvince, setSelectedProvince] = useState('');
  const [showAllProvinces, setShowAllProvinces] = useState(false);

  const featuredProvinces = ANGOLA_PROVINCES.filter(p => p.featured);
  const otherProvinces = ANGOLA_PROVINCES.filter(p => !p.featured);
  
  const selectedProvinceData = selectedProvince 
    ? ANGOLA_PROVINCES.find(p => p.id === selectedProvince)
    : null;

  const displayedProvinces = showAllProvinces 
    ? ANGOLA_PROVINCES 
    : featuredProvinces;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-4xl font-bold mb-4">Províncias de Angola - DigitalZango</h1>
        <p className="text-xl">Descubra o potencial agrícola de cada província angolana</p>
        <div className="mt-4 text-sm opacity-90">
          18 províncias com dados agrícolas detalhados
        </div>
      </div>

      {/* Province Selector Dropdown */}
      <div className="mb-8 bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Pesquisar Província Específica</h3>
        <div className="flex gap-4 items-center">
          <select
            value={selectedProvince}
            onChange={(e) => setSelectedProvince(e.target.value)}
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="">Selecione uma província...</option>
            {ANGOLA_PROVINCES.map((province) => (
              <option key={province.id} value={province.id}>
                {province.name} - {province.capital}
              </option>
            ))}
          </select>
          <button
            onClick={() => setShowAllProvinces(!showAllProvinces)}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            {showAllProvinces ? 'Mostrar Principais' : 'Ver Todas'}
          </button>
        </div>
      </div>

      {/* Selected Province Details */}
      {selectedProvinceData && (
        <div className="mb-8 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className={`bg-gradient-to-r ${selectedProvinceData.color} text-white p-6`}>
            <h2 className="text-2xl font-bold">{selectedProvinceData.name}</h2>
            <p className="opacity-90">Capital: {selectedProvinceData.capital}</p>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Informações Gerais</h4>
                <div className="space-y-2 text-sm">
                  <div><strong>Área:</strong> {selectedProvinceData.area}</div>
                  <div><strong>População:</strong> {selectedProvinceData.population}</div>
                  <div><strong>Clima:</strong> {selectedProvinceData.climate}</div>
                  <div>
                    <strong>Potencial:</strong> 
                    <span className={`ml-2 px-2 py-1 rounded text-xs ${potentialColors[selectedProvinceData.agriculturalPotential as keyof typeof potentialColors]}`}>
                      {selectedProvinceData.agriculturalPotential}
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Principais Culturas</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProvinceData.mainCrops.map((crop) => (
                    <span key={crop} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                      {crop}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Featured/All Provinces Grid */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">
          {showAllProvinces ? 'Todas as Províncias' : 'Principais Províncias Agrícolas'}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedProvinces.map((province) => (
            <div key={province.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className={`bg-gradient-to-r ${province.color} text-white p-4`}>
                <h3 className="text-lg font-bold">{province.name}</h3>
                <p className="text-sm opacity-90">{province.capital}</p>
              </div>
              
              <div className="p-4">
                <div className="mb-3">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${potentialColors[province.agriculturalPotential as keyof typeof potentialColors]}`}>
                    {province.agriculturalPotential}
                  </span>
                </div>

                <div className="mb-3">
                  <div className="text-xs text-gray-600 mb-1">Principais Culturas:</div>
                  <div className="flex flex-wrap gap-1">
                    {province.mainCrops.slice(0, 2).map((crop) => (
                      <span key={crop} className="bg-green-100 text-green-800 text-xs px-1 py-0.5 rounded">
                        {crop}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedProvince(province.id)}
                  className="w-full text-xs bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition-colors"
                >
                  Ver Detalhes
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-bold text-gray-800 mb-2">Sobre as Províncias de Angola</h3>
        <p className="text-gray-600 text-sm">
          Angola possui 18 províncias com diferentes potenciais agrícolas. A plataforma DigitalZango 
          fornece informações específicas para cada região, ajudando agricultores a tomar decisões 
          informadas sobre cultivos e produtos adequados para sua localização.
        </p>
      </div>
    </div>
  );
}
