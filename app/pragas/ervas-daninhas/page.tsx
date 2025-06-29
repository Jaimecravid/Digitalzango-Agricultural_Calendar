// app/pragas/ervas-daninhas/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Leaf, AlertTriangle, TrendingUp, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ervas Daninhas - Plantas Invasoras | Digitalzango Angola',
  description: 'Guia completo sobre ervas daninhas em Angola: identificação e controle de plantas invasoras que competem por nutrientes.',
  keywords: 'ervas daninhas, plantas invasoras, controle mato, agricultura Angola, Digitalzango, tiririca, capim'
}

export default function ErvasDaninhasPage() {
  const commonWeeds = [
    {
      name: 'Tiririca',
      scientificName: 'Cyperus rotundus',
      slug: 'tiririca',
      riskLevel: 'Alto',
      crops: ['Milho', 'Arroz', 'Hortaliças'],
      season: 'Todo o ano',
      description: 'Erva daninha mais agressiva do mundo',
      status: 'available' // Changed from 'coming'
    },
    {
      name: 'Capim-colonião',
      scientificName: 'Panicum maximum',
      slug: 'capim-coloniao',
      riskLevel: 'Alto',
      crops: ['Milho', 'Feijão', 'Sorgo'],
      season: 'Época chuvosa',
      description: 'Gramínea que compete por água e nutrientes',
      status: 'available' // Changed from 'coming'
    },
    {
      name: 'Picão-preto',
      scientificName: 'Bidens pilosa',
      slug: 'picao-preto',
      riskLevel: 'Médio',
      crops: ['Hortaliças', 'Feijão', 'Milho'],
      season: 'Época chuvosa',
      description: 'Sementes aderem aos animais',
      status: 'available' // Changed from 'coming'
    },
    {
      name: 'Maria-pretinha',
      scientificName: 'Solanum americanum',
      slug: 'maria-pretinha',
      riskLevel: 'Médio',
      crops: ['Tomate', 'Batata', 'Hortaliças'],
      season: 'Todo o ano',
      description: 'Hospedeira de pragas do tomate',
      status: 'available' // Changed from 'coming'
    },
    {
      name: 'Caruru',
      scientificName: 'Amaranthus viridis',
      slug: 'caruru',
      riskLevel: 'Médio',
      crops: ['Milho', 'Feijão', 'Hortaliças'],
      season: 'Época chuvosa',
      description: 'Compete por luz e nutrientes',
      status: 'available' // Changed from 'coming'
    },
    {
      name: 'Capim-marmelada',
      scientificName: 'Brachiaria plantaginea',
      slug: 'capim-marmelada',
      riskLevel: 'Alto',
      crops: ['Milho', 'Soja', 'Sorgo'],
      season: 'Época chuvosa',
      description: 'Gramínea de difícil controle',
      status: 'available' // Changed from 'coming'
    },
    {
      name: 'Guanxuma',
      scientificName: 'Sida rhombifolia',
      slug: 'guanxuma',
      riskLevel: 'Médio',
      crops: ['Algodão', 'Soja', 'Milho'],
      season: 'Época chuvosa',
      description: 'Planta lenhosa resistente',
      status: 'available' // Changed from 'coming'
    },
    {
      name: 'Trapoeraba',
      scientificName: 'Commelina benghalensis',
      slug: 'trapoeraba',
      riskLevel: 'Médio',
      crops: ['Milho', 'Feijão', 'Hortaliças'],
      season: 'Época chuvosa',
      description: 'Forma tapete denso no solo',
      status: 'available' // Changed from 'coming'
    },
    {
      name: 'Amendoim-bravo',
      scientificName: 'Euphorbia heterophylla',
      slug: 'amendoim-bravo',
      riskLevel: 'Alto',
      crops: ['Soja', 'Milho', 'Algodão'],
      season: 'Época chuvosa',
      description: 'Resistente a herbicidas',
      status: 'available' // Changed from 'coming'
    },
    {
      name: 'Capim-pé-de-galinha',
      scientificName: 'Eleusine indica',
      slug: 'capim-pe-de-galinha',
      riskLevel: 'Médio',
      crops: ['Milho', 'Arroz', 'Hortaliças'],
      season: 'Todo o ano',
      description: 'Gramínea anual agressiva',
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
            <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mr-6">
              <Leaf className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Ervas Daninhas</h1>
              <p className="text-gray-600 mt-2 text-lg">Plantas invasoras que competem por nutrientes</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4 mt-6 p-4 bg-green-50 rounded-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">10</div>
              <div className="text-sm text-gray-600">Espécies Comuns</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">Médio</div>
              <div className="text-sm text-gray-600">Nível de Risco</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">8</div>
              <div className="text-sm text-gray-600">Culturas Afetadas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">Chuvas</div>
              <div className="text-sm text-gray-600">Época Crítica</div>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2 text-red-600" />
              Principais Problemas
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li>• Competição por água</li>
              <li>• Competição por nutrientes</li>
              <li>• Redução da produtividade</li>
              <li>• Hospedeiras de pragas</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
              Estratégias de Controle
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li>• Prevenção e limpeza</li>
              <li>• Controle mecânico</li>
              <li>• Herbicidas seletivos</li>
              <li>• Cobertura do solo</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-blue-600" />
              Épocas de Controle
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li>• Antes do plantio</li>
              <li>• Início das chuvas</li>
              <li>• Desenvolvimento inicial</li>
              <li>• Pós-colheita</li>
            </ul>
          </div>
        </div>

        {/* Weeds Grid */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Ervas Daninhas Mais Comuns em Angola</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonWeeds.map((weed, index) => (
              <div key={index}>
                {weed.status === 'available' ? (
                  <Link 
                    href={`/pragas/${weed.slug}`}
                    className="block p-6 border border-gray-200 rounded-lg hover:border-green-300 hover:shadow-md transition-all duration-200 h-full"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-gray-900 text-lg">{weed.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskColor(weed.riskLevel)}`}>
                        {weed.riskLevel}
                      </span>
                    </div>
                    
                    <p className="text-sm text-gray-600 italic mb-3">{weed.scientificName}</p>
                    <p className="text-sm text-gray-700 mb-4 flex-grow">{weed.description}</p>
                    
                    <div className="space-y-2">
                      <div>
                        <span className="text-xs font-medium text-gray-500">Culturas afetadas:</span>
                        <p className="text-sm text-gray-700">{weed.crops.join(', ')}</p>
                      </div>
                      <div>
                        <span className="text-xs font-medium text-gray-500">Época ativa:</span>
                        <p className="text-sm text-gray-700">{weed.season}</p>
                      </div>
                    </div>
                    
                    <div className="mt-4 text-green-600 text-sm font-medium">
                      Ver detalhes →
                    </div>
                  </Link>
                ) : (
                  <div className="block p-6 border border-gray-200 rounded-lg bg-gray-50 h-full">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-gray-500 text-lg">{weed.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskColor(weed.riskLevel)}`}>
                        {weed.riskLevel}
                      </span>
                    </div>
                    
                    <p className="text-sm text-gray-500 italic mb-3">{weed.scientificName}</p>
                    <p className="text-sm text-gray-600 mb-4 flex-grow">{weed.description}</p>
                    
                    <div className="space-y-2">
                      <div>
                        <span className="text-xs font-medium text-gray-400">Culturas afetadas:</span>
                        <p className="text-sm text-gray-600">{weed.crops.join(', ')}</p>
                      </div>
                      <div>
                        <span className="text-xs font-medium text-gray-400">Época ativa:</span>
                        <p className="text-sm text-gray-600">{weed.season}</p>
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
              href="/pragas/insetos" 
              className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
            >
              <h3 className="font-medium text-gray-900">Insetos</h3>
              <p className="text-sm text-gray-600 mt-1">Pragas que atacam culturas</p>
            </Link>
            <Link 
              href="/pragas/doencas" 
              className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
            >
              <h3 className="font-medium text-gray-900">Doenças</h3>
              <p className="text-sm text-gray-600 mt-1">Fungos, bactérias e vírus</p>
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
