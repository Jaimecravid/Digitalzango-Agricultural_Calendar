// app/pragas/insetos/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Bug, AlertTriangle, TrendingUp, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Insetos - Pragas Agrícolas | Digitalzango Angola',
  description: 'Guia completo sobre insetos-praga em Angola: identificação, controle e prevenção para agricultura sustentável.',
  keywords: 'insetos praga, agricultura Angola, controle pragas, Digitalzango, lagarta cartucho, mosca branca'
}

export default function InsetosPage() {
  const commonInsects = [
    {
      name: 'Lagarta-do-cartucho',
      scientificName: 'Spodoptera frugiperda',
      slug: 'lagarta-do-cartucho',
      riskLevel: 'Alto',
      crops: ['Milho', 'Sorgo', 'Arroz'],
      season: 'Outubro - Março',
      description: 'Principal praga do milho em Angola',
      status: 'available'
    },
    {
      name: 'Broca-do-café',
      scientificName: 'Hypothenemus hampei',
      slug: 'broca-do-cafe',
      riskLevel: 'Alto',
      crops: ['Café'],
      season: 'Todo o ano',
      description: 'Principal praga do café em Angola',
      status: 'available'
    },
    {
      name: 'Mosca-Branca',
      scientificName: 'Bemisia tabaci',
      slug: 'mosca-branca',
      riskLevel: 'Alto',
      crops: ['Tomate', 'Feijão', 'Algodão'],
      season: 'Todo o ano',
      description: 'Transmite vírus e causa danos diretos',
      status: 'available'
    },
    {
      name: 'Pulgão',
      scientificName: 'Aphididae',
      slug: 'pulgao',
      riskLevel: 'Médio',
      crops: ['Milho', 'Sorgo', 'Hortaliças'],
      season: 'Época seca',
      description: 'Suga seiva e transmite vírus',
      status: 'available'
    },
    {
      name: 'Trips',
      scientificName: 'Thysanoptera',
      slug: 'trips',
      riskLevel: 'Médio',
      crops: ['Cebola', 'Tomate', 'Feijão'],
      season: 'Época seca',
      description: 'Causa prateamento das folhas',
      status: 'available' // Changed from 'coming'
    },
    {
      name: 'Cochonilha',
      scientificName: 'Coccoidea',
      slug: 'cochonilha',
      riskLevel: 'Médio',
      crops: ['Café', 'Citros', 'Mandioca'],
      season: 'Todo o ano',
      description: 'Inseto sugador de seiva',
      status: 'available' // Changed from 'coming'
    },
    {
      name: 'Ácaro-rajado',
      scientificName: 'Tetranychus urticae',
      slug: 'acaro-rajado',
      riskLevel: 'Alto',
      crops: ['Tomate', 'Feijão', 'Algodão'],
      season: 'Época seca',
      description: 'Causa bronzeamento das folhas',
      status: 'available' // Changed from 'coming'
    },
    {
      name: 'Curuquerê',
      scientificName: 'Alabama argillacea',
      slug: 'curuquere',
      riskLevel: 'Alto',
      crops: ['Algodão'],
      season: 'Dezembro - Abril',
      description: 'Principal praga do algodão',
      status: 'available' // Changed from 'coming'
    },
    {
      name: 'Lagarta-rosca',
      scientificName: 'Agrotis ipsilon',
      slug: 'lagarta-rosca',
      riskLevel: 'Médio',
      crops: ['Milho', 'Feijão', 'Hortaliças'],
      season: 'Início das chuvas',
      description: 'Corta plantas jovens na base',
      status: 'available' // Changed from 'coming'
    },
    {
      name: 'Percevejo',
      scientificName: 'Nezara viridula',
      slug: 'percevejo',
      riskLevel: 'Médio',
      crops: ['Soja', 'Feijão', 'Milho'],
      season: 'Época chuvosa',
      description: 'Suga grãos em formação',
      status: 'available' // Changed from 'coming'
    },
    {
      name: 'Cigarrinha',
      scientificName: 'Cicadellidae',
      slug: 'cigarrinha',
      riskLevel: 'Médio',
      crops: ['Milho', 'Sorgo', 'Cana'],
      season: 'Época seca',
      description: 'Transmite vírus e toxinas',
      status: 'available' // Changed from 'coming'
    },
    {
      name: 'Gafanhoto',
      scientificName: 'Schistocerca gregaria',
      slug: 'gafanhoto',
      riskLevel: 'Alto',
      crops: ['Milho', 'Sorgo', 'Pastagens'],
      season: 'Época seca',
      description: 'Forma enxames devastadores',
      status: 'available' // Changed from 'coming'
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
        {/* Navigation */}
        <div className="mb-6">
          <Link 
            href="/pragas" 
            className="inline-flex items-center text-green-600 hover:text-green-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para Pragas
          </Link>
        </div>

        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mr-6">
              <Bug className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Insetos-Praga</h1>
              <p className="text-gray-600 mt-2 text-lg">Pragas que atacam folhas, caules e frutos</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4 mt-6 p-4 bg-red-50 rounded-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">12</div>
              <div className="text-sm text-gray-600">Espécies Comuns</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">Alto</div>
              <div className="text-sm text-gray-600">Nível de Risco</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">8</div>
              <div className="text-sm text-gray-600">Culturas Afetadas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">Todo Ano</div>
              <div className="text-sm text-gray-600">Período Ativo</div>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2 text-red-600" />
              Principais Ameaças
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li>• Danos diretos às culturas</li>
              <li>• Transmissão de vírus</li>
              <li>• Redução da produtividade</li>
              <li>• Perdas econômicas significativas</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
              Estratégias de Controle
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li>• Monitoramento regular</li>
              <li>• Controle biológico</li>
              <li>• Manejo integrado</li>
              <li>• Rotação de culturas</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-blue-600" />
              Épocas Críticas
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li>• Início das chuvas</li>
              <li>• Período de plantio</li>
              <li>• Desenvolvimento vegetativo</li>
              <li>• Formação de frutos</li>
            </ul>
          </div>
        </div>

        {/* Insects Grid */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Insetos Mais Comuns em Angola</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonInsects.map((insect, index) => (
              <div key={index}>
                {insect.status === 'available' ? (
                  <Link 
                    href={`/pragas/${insect.slug}`}
                    className="block p-6 border border-gray-200 rounded-lg hover:border-green-300 hover:shadow-md transition-all duration-200 h-full"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-gray-900 text-lg">{insect.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskColor(insect.riskLevel)}`}>
                        {insect.riskLevel}
                      </span>
                    </div>
                    
                    <p className="text-sm text-gray-600 italic mb-3">{insect.scientificName}</p>
                    <p className="text-sm text-gray-700 mb-4 flex-grow">{insect.description}</p>
                    
                    <div className="space-y-2">
                      <div>
                        <span className="text-xs font-medium text-gray-500">Culturas:</span>
                        <p className="text-sm text-gray-700">{insect.crops.join(', ')}</p>
                      </div>
                      <div>
                        <span className="text-xs font-medium text-gray-500">Época ativa:</span>
                        <p className="text-sm text-gray-700">{insect.season}</p>
                      </div>
                    </div>
                    
                    <div className="mt-4 text-green-600 text-sm font-medium">
                      Ver detalhes →
                    </div>
                  </Link>
                ) : (
                  <div className="block p-6 border border-gray-200 rounded-lg bg-gray-50 h-full">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-gray-500 text-lg">{insect.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskColor(insect.riskLevel)}`}>
                        {insect.riskLevel}
                      </span>
                    </div>
                    
                    <p className="text-sm text-gray-500 italic mb-3">{insect.scientificName}</p>
                    <p className="text-sm text-gray-600 mb-4 flex-grow">{insect.description}</p>
                    
                    <div className="space-y-2">
                      <div>
                        <span className="text-xs font-medium text-gray-400">Culturas:</span>
                        <p className="text-sm text-gray-600">{insect.crops.join(', ')}</p>
                      </div>
                      <div>
                        <span className="text-xs font-medium text-gray-400">Época ativa:</span>
                        <p className="text-sm text-gray-600">{insect.season}</p>
                      </div>
                    </div>
                    
                    <div className="mt-4 text-gray-400 text-sm font-medium">
                      Em breve...
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Related Categories */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Outras Categorias de Pragas</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link 
              href="/pragas/doencas" 
              className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
            >
              <h3 className="font-medium text-gray-900">Doenças</h3>
              <p className="text-sm text-gray-600 mt-1">Fungos, bactérias e vírus</p>
            </Link>
            <Link 
              href="/pragas/ervas-daninhas" 
              className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
            >
              <h3 className="font-medium text-gray-900">Ervas Daninhas</h3>
              <p className="text-sm text-gray-600 mt-1">Plantas invasoras</p>
            </Link>
            <Link 
              href="/pragas/roedores" 
              className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
            >
              <h3 className="font-medium text-gray-900">Roedores</h3>
              <p className="text-sm text-gray-600 mt-1">Animais que danificam culturas</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
