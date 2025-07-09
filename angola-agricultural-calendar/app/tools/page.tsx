'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// Comprehensive agricultural tools database for Angola
const toolCategories = [
  {
    id: 'manual',
    name: 'Ferramentas Manuais',
    icon: '🛠️',
    description: 'Ferramentas básicas essenciais para agricultura familiar',
    color: 'from-green-500 to-emerald-600',
    tools: [
      {
        name: 'Enxada',
        icon: '⚒️',
        price: '2.500 - 4.000 AOA',
        description: 'Ferramenta básica para preparação do solo e cultivo',
        uses: ['Preparação do solo', 'Remoção de ervas daninhas', 'Cultivo superficial'],
        maintenance: 'Limpar após uso, afiar regularmente'
      },
      {
        name: 'Facão',
        icon: '🔪',
        price: '1.800 - 3.500 AOA',
        description: 'Ferramenta versátil para corte e limpeza',
        uses: ['Limpeza de terreno', 'Corte de galhos', 'Colheita'],
        maintenance: 'Manter afiado, proteger da umidade'
      },
      {
        name: 'Pá',
        icon: '🪣',
        price: '3.000 - 5.000 AOA',
        description: 'Essencial para escavação e movimentação de terra',
        uses: ['Escavação', 'Plantio', 'Movimentação de terra'],
        maintenance: 'Limpar após uso, verificar cabo'
      },
      {
        name: 'Rastelo',
        icon: '🧹',
        price: '2.000 - 3.500 AOA',
        description: 'Para limpeza e preparação final do solo',
        uses: ['Limpeza do terreno', 'Nivelamento', 'Coleta de detritos'],
        maintenance: 'Verificar dentes, substituir se necessário'
      },
      {
        name: 'Foice',
        icon: '🌾',
        price: '1.500 - 2.800 AOA',
        description: 'Tradicional para corte de cereais e capim',
        uses: ['Colheita de cereais', 'Corte de capim', 'Limpeza'],
        maintenance: 'Afiar regularmente, proteger lâmina'
      },
      {
        name: 'Regador',
        icon: '🚿',
        price: '1.200 - 2.500 AOA',
        description: 'Para irrigação de pequenas áreas',
        uses: ['Irrigação manual', 'Aplicação de fertilizantes líquidos'],
        maintenance: 'Limpar após uso, verificar furos'
      }
    ]
  },
  {
    id: 'mechanized',
    name: 'Equipamentos Mecanizados',
    icon: '🚜',
    description: 'Máquinas para agricultura de média e grande escala',
    color: 'from-blue-500 to-indigo-600',
    tools: [
      {
        name: 'Trator',
        icon: '🚜',
        price: '15.000.000 - 50.000.000 AOA',
        description: 'Equipamento principal para mecanização agrícola',
        uses: ['Aração', 'Plantio', 'Colheita', 'Transporte'],
        maintenance: 'Manutenção regular do motor, verificar fluidos'
      },
      {
        name: 'Arado',
        icon: '🔧',
        price: '800.000 - 2.500.000 AOA',
        description: 'Para preparação primária do solo',
        uses: ['Reviramento do solo', 'Incorporação de restos culturais'],
        maintenance: 'Verificar lâminas, lubrificar pontos de articulação'
      },
      {
        name: 'Grade',
        icon: '⚙️',
        price: '600.000 - 1.800.000 AOA',
        description: 'Para preparação secundária e nivelamento',
        uses: ['Destorroamento', 'Nivelamento', 'Incorporação'],
        maintenance: 'Verificar discos, substituir se desgastados'
      },
      {
        name: 'Plantadeira',
        icon: '🌱',
        price: '2.000.000 - 8.000.000 AOA',
        description: 'Para plantio mecanizado com precisão',
        uses: ['Plantio de sementes', 'Aplicação de fertilizantes'],
        maintenance: 'Calibrar regularmente, limpar após uso'
      },
      {
        name: 'Pulverizador',
        icon: '💨',
        price: '500.000 - 3.000.000 AOA',
        description: 'Para aplicação de defensivos e fertilizantes',
        uses: ['Controle de pragas', 'Aplicação foliar', 'Herbicidas'],
        maintenance: 'Limpar tanque após uso, verificar bicos'
      }
    ]
  },
  {
    id: 'irrigation',
    name: 'Sistemas de Irrigação',
    icon: '💧',
    description: 'Equipamentos para manejo eficiente da água',
    color: 'from-cyan-500 to-blue-600',
    tools: [
      {
        name: 'Aspersores',
        icon: '🌊',
        price: '15.000 - 80.000 AOA/unidade',
        description: 'Para irrigação por aspersão',
        uses: ['Irrigação uniforme', 'Culturas sensíveis'],
        maintenance: 'Limpar bicos, verificar pressão'
      },
      {
        name: 'Gotejadores',
        icon: '💧',
        price: '5.000 - 25.000 AOA/metro',
        description: 'Sistema de irrigação localizada',
        uses: ['Economia de água', 'Irrigação precisa'],
        maintenance: 'Verificar entupimentos, limpar filtros'
      },
      {
        name: 'Bombas d\'água',
        icon: '⚡',
        price: '80.000 - 500.000 AOA',
        description: 'Para captação e distribuição de água',
        uses: ['Bombeamento', 'Pressurização do sistema'],
        maintenance: 'Verificar motor, trocar óleo regularmente'
      }
    ]
  },
  {
    id: 'processing',
    name: 'Processamento',
    icon: '⚙️',
    description: 'Equipamentos para beneficiamento de produtos',
    color: 'from-orange-500 to-red-600',
    tools: [
      {
        name: 'Debulhador',
        icon: '🌾',
        price: '150.000 - 800.000 AOA',
        description: 'Para separação de grãos',
        uses: ['Debulha de milho', 'Separação de feijão'],
        maintenance: 'Lubrificar rolamentos, verificar peneiras'
      },
      {
        name: 'Moinho',
        icon: '⚙️',
        price: '200.000 - 1.200.000 AOA',
        description: 'Para moagem de grãos',
        uses: ['Produção de farinha', 'Ração animal'],
        maintenance: 'Verificar mós, limpar após uso'
      },
      {
        name: 'Prensa',
        icon: '🗜️',
        price: '300.000 - 2.000.000 AOA',
        description: 'Para extração de óleos',
        uses: ['Óleo de amendoim', 'Óleo de girassol'],
        maintenance: 'Limpar câmara, verificar pressão'
      }
    ]
  }
];

// Affiliate products for DigitalZango
const featuredProducts = [
  {
    name: 'Kit Ferramentas Básicas',
    price: '12.500 AOA',
    description: 'Enxada + Facão + Pá + Rastelo',
    image: '🎁',
    discount: '15% OFF'
  },
  {
    name: 'Sistema Irrigação Gotejamento',
    price: '45.000 AOA',
    description: 'Kit completo para 100m²',
    image: '💧',
    discount: '20% OFF'
  },
  {
    name: 'Pulverizador Manual 20L',
    price: '35.000 AOA',
    description: 'Ideal para pequenas propriedades',
    image: '💨',
    discount: '10% OFF'
  }
];

export default function ToolsPage() {
  const [selectedCategory, setSelectedCategory] = useState('manual');
  const [searchTerm, setSearchTerm] = useState('');

  const currentCategory = toolCategories.find(cat => cat.id === selectedCategory);
  
  const filteredTools = currentCategory?.tools.filter(tool =>
    tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-green-600">Início</Link>
          <span>→</span>
          <span className="text-gray-800 font-semibold">Ferramentas Agrícolas</span>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-xl mb-8">
        <div className="flex items-center gap-6">
          <span className="text-6xl">🔧</span>
          <div>
            <h1 className="text-4xl font-bold mb-2">Ferramentas Agrícolas</h1>
            <p className="text-xl opacity-90">Equipamentos essenciais para agricultura em Angola</p>
            <p className="text-lg opacity-80">Guia completo com preços e dicas de manutenção</p>
          </div>
        </div>
      </div>

      {/* Search and Category Selection */}
      <div className="mb-8 bg-white p-6 rounded-xl shadow-lg">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Pesquisar ferramentas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2">
          {toolCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                selectedCategory === category.id
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-green-100'
              }`}
            >
              {category.icon} {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Current Category Header */}
      {currentCategory && (
        <div className={`bg-gradient-to-r ${currentCategory.color} text-white p-6 rounded-xl mb-8`}>
          <div className="flex items-center gap-4">
            <span className="text-4xl">{currentCategory.icon}</span>
            <div>
              <h2 className="text-2xl font-bold">{currentCategory.name}</h2>
              <p className="text-lg opacity-90">{currentCategory.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredTools.map((tool, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{tool.icon}</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{tool.name}</h3>
                  <p className="text-green-600 font-semibold">{tool.price}</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">{tool.description}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Usos Principais:</h4>
                <ul className="space-y-1">
                  {tool.uses.map((use, useIndex) => (
                    <li key={useIndex} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-green-500 mt-1">•</span>
                      {use}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Manutenção:</h4>
                <p className="text-sm text-gray-600">{tool.maintenance}</p>
              </div>
              
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors">
                Ver Ofertas
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Products Section */}
      <div className="bg-gradient-to-r from-orange-100 to-red-100 p-8 rounded-xl mb-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-orange-800">
          🛒 Ofertas Especiais - DigitalZango
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProducts.map((product, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-3">{product.image}</div>
              <div className="bg-red-500 text-white px-2 py-1 rounded text-sm font-bold mb-2 inline-block">
                {product.discount}
              </div>
              <h3 className="font-bold mb-2 text-gray-800">{product.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{product.description}</p>
              <p className="text-xl font-bold text-orange-600 mb-4">{product.price}</p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors w-full">
                Comprar Agora
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Tips Section */}
      <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">💡 Dicas para Agricultores Angolanos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-green-700">🛠️ Manutenção de Ferramentas</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Limpe sempre após o uso</li>
              <li>• Mantenha lâminas afiadas</li>
              <li>• Armazene em local seco</li>
              <li>• Verifique cabos regularmente</li>
              <li>• Use óleo para prevenir ferrugem</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-blue-700">💰 Economia e Investimento</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Compre ferramentas de qualidade</li>
              <li>• Considere cooperativas para equipamentos caros</li>
              <li>• Aproveite épocas de desconto</li>
              <li>• Invista em manutenção preventiva</li>
              <li>• Compare preços antes de comprar</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Related Links */}
      <div className="text-center space-y-4">
        <h3 className="text-xl font-semibold text-gray-800">Explore Mais Recursos DigitalZango</h3>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/guias">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              📚 Guias de Cultivo
            </button>
          </Link>
          <Link href="/calendario">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              📅 Calendário Agrícola
            </button>
          </Link>
          <Link href="/produtos">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              🛒 Todos os Produtos
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
