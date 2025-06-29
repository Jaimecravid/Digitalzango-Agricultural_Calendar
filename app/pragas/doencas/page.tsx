// app/pragas/doencas/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Zap, AlertTriangle, TrendingUp, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Doenças - Pragas Agrícolas | Digitalzango Angola',
  description: 'Guia completo sobre doenças de plantas em Angola: fungos, bactérias e vírus que afetam culturas agrícolas.',
  keywords: 'doenças plantas, fungos, bactérias, vírus, agricultura Angola, Digitalzango, ferrugem café'
}

export default function DoencasPage() {
  const commonDiseases = [
    {
      name: 'Ferrugem-do-café',
      scientificName: 'Hemileia vastatrix',
      slug: 'ferrugem-do-cafe',
      riskLevel: 'Alto',
      crops: ['Café'],
      season: 'Época chuvosa',
      description: 'Principal doença do café em Angola',
      status: 'available'
    },
    {
      name: 'Antracnose',
      scientificName: 'Colletotrichum spp.',
      slug: 'antracnose',
      riskLevel: 'Alto',
      crops: ['Feijão', 'Tomate', 'Manga'],
      season: 'Época chuvosa',
      description: 'Causa manchas escuras em frutos',
      status: 'available' // Changed from 'coming'
    },
    {
      name: 'Míldio',
      scientificName: 'Peronospora spp.',
      slug: 'mildio',
      riskLevel: 'Alto',
      crops: ['Cebola', 'Alface', 'Uva'],
      season: 'Alta umidade',
      description: 'Fungo que ataca folhas jovens',
      status: 'available' // Changed from 'coming'
    },
    {
      name: 'Fusariose',
      scientificName: 'Fusarium spp.',
      slug: 'fusariose',
      riskLevel: 'Alto',
      crops: ['Tomate', 'Banana', 'Milho'],
      season: 'Solo úmido',
      description: 'Murcha vascular das plantas',
      status: 'available' // Changed from 'coming'
    },
    {
      name: 'Mancha-parda',
      scientificName: 'Bipolaris oryzae',
      slug: 'mancha-parda',
      riskLevel: 'Alto',
      crops: ['Arroz'],
      season: 'Época chuvosa',
      description: 'Manchas ovais nas folhas do arroz',
      status: 'available' // Changed from 'coming'
    },
    {
      name: 'Oidiopsis',
      scientificName: 'Oidiopsis taurica',
      slug: 'oidiopsis',
      riskLevel: 'Médio',
      crops: ['Tomate', 'Pimentão', 'Berinjela'],
      season: 'Época seca',
      description: 'Pó branco nas folhas',
      status: 'available' // Changed from 'coming'
    },
    {
      name: 'Podridão-radicular',
      scientificName: 'Pythium spp.',
      slug: 'podridao-radicular',
      riskLevel: 'Alto',
      crops: ['Hortaliças', 'Feijão', 'Milho'],
      season: 'Solo encharcado',
      description: 'Apodrecimento das raízes',
      status: 'available' // Changed from 'coming'
    },
    {
      name: 'Murcha-bacteriana',
      scientificName: 'Ralstonia solanacearum',
      slug: 'murcha-bacteriana',
      riskLevel: 'Alto',
      crops: ['Tomate', 'Batata', 'Pimentão'],
      season: 'Temperaturas altas',
      description: 'Murcha súbita das plantas',
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
            <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mr-6">
              <Zap className="w-8 h-8 text-purple-600" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Doenças de Plantas</h1>
              <p className="text-gray-600 mt-2 text-lg">Fungos, bactérias e vírus que afetam as plantas</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4 mt-6 p-4 bg-purple-50 rounded-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">8</div>
              <div className="text-sm text-gray-600">Doenças Comuns</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">Alto</div>
              <div className="text-sm text-gray-600">Nível de Risco</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">10+</div>
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
              Principais Ameaças
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li>• Morte de plantas</li>
              <li>• Redução da qualidade</li>
              <li>• Perdas na colheita</li>
              <li>• Contaminação do solo</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
              Estratégias de Controle
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li>• Variedades resistentes</li>
              <li>• Fungicidas preventivos</li>
              <li>• Manejo cultural</li>
              <li>• Controle biológico</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-blue-600" />
              Condições Favoráveis
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li>• Alta umidade</li>
              <li>• Temperaturas amenas</li>
              <li>• Chuvas frequentes</li>
              <li>• Má ventilação</li>
            </ul>
          </div>
        </div>
        
        {/* Diseases Grid */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Doenças Mais Comuns em Angola</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonDiseases.map((disease, index) => (
              <div key={index}>
                {disease.status === 'available' ? (
                  <Link 
                    href={`/pragas/${disease.slug}`}
                    className="block p-6 border border-gray-200 rounded-lg hover:border-green-300 hover:shadow-md transition-all duration-200 h-full"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-gray-900 text-lg">{disease.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskColor(disease.riskLevel)}`}>
                        {disease.riskLevel}
                      </span>
                    </div>
                    
                    <p className="text-sm text-gray-600 italic mb-3">{disease.scientificName}</p>
                    <p className="text-sm text-gray-700 mb-4 flex-grow">{disease.description}</p>
                    
                    <div className="space-y-2">
                      <div>
                        <span className="text-xs font-medium text-gray-500">Culturas:</span>
                        <p className="text-sm text-gray-700">{disease.crops.join(', ')}</p>
                      </div>
                      <div>
                        <span className="text-xs font-medium text-gray-500">Condições:</span>
                        <p className="text-sm text-gray-700">{disease.season}</p>
                      </div>
                    </div>
                    
                    <div className="mt-4 text-green-600 text-sm font-medium">
                      Ver detalhes →
                    </div>
                  </Link>
                ) : (
                  <div className="block p-6 border border-gray-200 rounded-lg bg-gray-50 h-full">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-gray-500 text-lg">{disease.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskColor(disease.riskLevel)}`}>
                        {disease.riskLevel}
                      </span>
                    </div>
                    
                    <p className="text-sm text-gray-500 italic mb-3">{disease.scientificName}</p>
                    <p className="text-sm text-gray-600 mb-4 flex-grow">{disease.description}</p>
                    
                    <div className="space-y-2">
                      <div>
                        <span className="text-xs font-medium text-gray-400">Culturas:</span>
                        <p className="text-sm text-gray-600">{disease.crops.join(', ')}</p>
                      </div>
                      <div>
                        <span className="text-xs font-medium text-gray-400">Condições:</span>
                        <p className="text-sm text-gray-600">{disease.season}</p>
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
