// app/pragas/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { Bug, Zap, Leaf, Mouse, ArrowRight, TrendingUp, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pragas Agrícolas - Guia Completo | Digitalzango Angola',
  description: 'Guia completo sobre pragas agrícolas em Angola: insetos, doenças, ervas daninhas e roedores. Identificação e controle para agricultura sustentável.',
  keywords: 'pragas agrícolas, insetos, doenças plantas, ervas daninhas, roedores, agricultura Angola, Digitalzango'
}

export default function PragasPage() {
  const categories = [
    {
      name: 'Insetos',
      slug: 'insetos',
      icon: Bug,
      count: 12,
      risk: 'Alto',
      description: 'Pragas que atacam folhas, caules e frutos',
      color: 'red',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    },
    {
      name: 'Doenças',
      slug: 'doencas',
      icon: Zap,
      count: 8,
      risk: 'Alto',
      description: 'Fungos, bactérias e vírus que afetam as plantas',
      color: 'purple',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      name: 'Ervas Daninhas',
      slug: 'ervas-daninhas',
      icon: Leaf,
      count: 10,
      risk: 'Médio',
      description: 'Plantas invasoras que competem por nutrientes',
      color: 'green',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      name: 'Roedores',
      slug: 'roedores',
      icon: Mouse,
      count: 5,
      risk: 'Médio',
      description: 'Animais que danificam culturas e armazenamento',
      color: 'gray',
      bgColor: 'bg-gray-50',
      iconColor: 'text-gray-600'
    }
  ]

  const featuredPests = [
    {
      name: 'Lagarta-do-cartucho',
      scientificName: 'Spodoptera frugiperda',
      slug: 'lagarta-do-cartucho',
      category: 'Insetos',
      risk: 'Alto',
      crops: ['Milho', 'Sorgo', 'Arroz'],
      season: 'Outubro - Março',
      description: 'Principal praga do milho em Angola'
    },
    {
      name: 'Broca-do-café',
      scientificName: 'Hypothenemus hampei',
      slug: 'broca-do-cafe',
      category: 'Insetos',
      risk: 'Alto',
      crops: ['Café'],
      season: 'Todo o ano',
      description: 'Principal praga do café em Angola'
    },
    {
      name: 'Ferrugem-do-café',
      scientificName: 'Hemileia vastatrix',
      slug: 'ferrugem-do-cafe',
      category: 'Doenças',
      risk: 'Alto',
      crops: ['Café'],
      season: 'Época chuvosa',
      description: 'Principal doença do café em Angola'
    },
    {
      name: 'Mosca-Branca',
      scientificName: 'Bemisia tabaci',
      slug: 'mosca-branca',
      category: 'Insetos',
      risk: 'Alto',
      crops: ['Tomate', 'Feijão', 'Algodão'],
      season: 'Todo o ano',
      description: 'Transmite vírus e causa danos diretos'
    },
    {
      name: 'Tiririca',
      scientificName: 'Cyperus rotundus',
      slug: 'tiririca',
      category: 'Ervas Daninhas',
      risk: 'Alto',
      crops: ['Milho', 'Arroz', 'Hortaliças'],
      season: 'Todo o ano',
      description: 'Erva daninha mais agressiva do mundo'
    },
    {
      name: 'Pulgão',
      scientificName: 'Aphididae',
      slug: 'pulgao',
      category: 'Insetos',
      risk: 'Médio',
      crops: ['Milho', 'Sorgo', 'Hortaliças'],
      season: 'Época seca',
      description: 'Suga seiva e transmite vírus'
    }
  ]

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Alto': return 'text-red-600 bg-red-100'
      case 'Médio': return 'text-orange-600 bg-orange-100'
      default: return 'text-green-600 bg-green-100'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Pragas Agrícolas em Angola</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Guia completo para identificação, prevenção e controle de pragas que afetam a agricultura angolana
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Link
                key={index}
                href={`/pragas/${category.slug}`}
                className={`${category.bgColor} rounded-lg p-6 hover:shadow-lg transition-all duration-200 border border-gray-200 hover:border-${category.color}-300`}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center mr-4`}>
                    <IconComponent className={`w-6 h-6 ${category.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
                    <p className="text-sm text-gray-600">{category.count} espécies</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-3">{category.description}</p>
                <div className="flex justify-between items-center">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskColor(category.risk)}`}>
                    {category.risk} Risco
                  </span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </div>
              </Link>
            )
          })}
        </div>

        {/* Featured Pests */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Pragas Mais Comuns</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPests.map((pest, index) => (
              <Link
                key={index}
                href={`/pragas/${pest.slug}`}
                className="block p-6 border border-gray-200 rounded-lg hover:border-green-300 hover:shadow-md transition-all duration-200"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-gray-900 text-lg">{pest.name}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskColor(pest.risk)}`}>
                    {pest.risk}
                  </span>
                </div>
                
                <p className="text-sm text-gray-600 italic mb-3">{pest.scientificName}</p>
                <p className="text-sm text-gray-700 mb-4">{pest.description}</p>
                
                <div className="space-y-2">
                  <div>
                    <span className="text-xs font-medium text-gray-500">Culturas afetadas:</span>
                    <p className="text-sm text-gray-700">{pest.crops.join(', ')}</p>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-gray-500">Época ativa:</span>
                    <p className="text-sm text-gray-700">{pest.season}</p>
                  </div>
                </div>
                
                <div className="mt-4 text-green-600 text-sm font-medium">
                  Ver detalhes →
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">35 Pragas</h3>
            <p className="text-gray-600">Catalogadas para Angola</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Controle Integrado</h3>
            <p className="text-gray-600">Métodos sustentáveis</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Bug className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Monitoramento</h3>
            <p className="text-gray-600">Prevenção eficaz</p>
          </div>
        </div>
      </div>
    </div>
  )
}
