'use client';
import { useState } from 'react';
import { ANGOLA_CROPS } from '@/lib/data/crops-database'; // ✅ Correct absolute import
import { Crop } from '@/lib/types/agriculture'; // ✅ Add type import
import Link from 'next/link';

export default function CultivosPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Filter crops based on search and category
  const filteredCrops = ANGOLA_CROPS.filter(crop => {
    const matchesSearch = crop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         crop.scientificName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         crop.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || crop.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Get unique categories for filter
  const categories = ['all', ...Array.from(new Set(ANGOLA_CROPS.map(crop => crop.category)))];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-green-600">Início</Link>
          <span>→</span>
          <Link href="/guias" className="hover:text-green-600">Guias de Cultivo</Link>
          <span>→</span>
          <span className="text-gray-800 font-semibold">Todas as Culturas</span>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-xl mb-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Culturas de Angola</h1>
          <p className="text-xl opacity-90 mb-2">Guias completos para {ANGOLA_CROPS.length} culturas principais</p>
          <p className="text-lg opacity-80">Informações detalhadas para agricultores angolanos</p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="mb-8 bg-white p-6 rounded-xl shadow-lg">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search Input */}
          <div className="flex-1">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
              Pesquisar Culturas
            </label>
            <input
              type="text"
              id="search"
              placeholder="Digite o nome da cultura..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <div className="md:w-64">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
              Categoria
            </label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="all">Todas as Categorias</option>
              <option value="cereal">Cereais</option>
              <option value="legume">Leguminosas</option>
              <option value="tuber">Tubérculos</option>
              <option value="vegetable">Vegetais</option>
              <option value="fruit">Frutas</option>
              <option value="cash_crop">Culturas Comerciais</option>
            </select>
          </div>
        </div>

        {/* Results Counter */}
        <div className="mt-4 text-sm text-gray-600">
          Mostrando {filteredCrops.length} de {ANGOLA_CROPS.length} culturas
        </div>
      </div>

      {/* Crops Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCrops.map((crop) => (
          <Link key={crop.id} href={`/cultivos/${crop.id}`}>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group">
              {/* Header with gradient */}
              <div className={`bg-gradient-to-r ${crop.color} p-6 text-white`}>
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{crop.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold">{crop.name}</h3>
                    <p className="text-sm opacity-90 italic">{crop.scientificName}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-700 mb-4">{crop.description}</p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-2 bg-gray-50 rounded">
                    <div className="text-xs text-gray-600">Época</div>
                    <div className="font-semibold text-green-600 text-sm">{crop.season}</div>
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded">
                    <div className="text-xs text-gray-600">Dificuldade</div>
                    <div className="font-semibold text-blue-600 text-sm">{crop.difficulty}</div>
                  </div>
                </div>

                {/* Market Price */}
                <div className="mb-4 p-3 bg-green-50 rounded-lg">
                  <div className="text-xs text-gray-600">Preço de Mercado</div>
                  <div className="font-bold text-green-700">
                    {crop.marketPrice.min}-{crop.marketPrice.max} {crop.marketPrice.currency}/{crop.marketPrice.unit}
                  </div>
                </div>

                {/* Provinces */}
                <div className="mb-4">
                  <div className="text-sm font-semibold text-gray-800 mb-2">Províncias Ideais:</div>
                  <div className="flex flex-wrap gap-1">
                    {crop.provinces.slice(0, 3).map((province, index) => (
                      <span key={index} className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                        {province}
                      </span>
                    ))}
                    {crop.provinces.length > 3 && (
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                        +{crop.provinces.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Sustainability Score */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Sustentabilidade</span>
                  <div className="flex items-center gap-2">
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full" 
                        style={{ width: `${crop.sustainabilityScore * 10}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-semibold text-green-600">{crop.sustainabilityScore}/10</span>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="mt-4 text-center">
                  <span className="text-green-600 font-semibold group-hover:underline">
                    Ver Guia Completo →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* No Results */}
      {filteredCrops.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Nenhuma cultura encontrada</h3>
          <p className="text-gray-600 mb-4">Tente ajustar os filtros ou termo de pesquisa</p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
            }}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            Limpar Filtros
          </button>
        </div>
      )}

      {/* Back to Guides */}
      <div className="mt-12 text-center">
        <Link href="/guias">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            ← Voltar aos Guias de Cultivo
          </button>
        </Link>
      </div>

      {/* Statistics Section */}
      <div className="mt-12 bg-gray-50 p-8 rounded-xl">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          📊 Estatísticas das Culturas
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-green-600">{ANGOLA_CROPS.length}</div>
            <div className="text-sm text-gray-600">Culturas Totais</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600">
              {Array.from(new Set(ANGOLA_CROPS.map(crop => crop.category))).length}
            </div>
            <div className="text-sm text-gray-600">Categorias</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600">
              {Array.from(new Set(ANGOLA_CROPS.flatMap(crop => crop.provinces))).length}
            </div>
            <div className="text-sm text-gray-600">Províncias</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600">
              {Math.round(ANGOLA_CROPS.reduce((sum, crop) => sum + crop.sustainabilityScore, 0) / ANGOLA_CROPS.length * 10)}%
            </div>
            <div className="text-sm text-gray-600">Sustentabilidade Média</div>
          </div>
        </div>
      </div>
    </div>
  );
}
