// app/pragas/roedores/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Mouse, AlertTriangle, TrendingUp, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Roedores - Controle de Pragas | Digitalzango Angola',
  description: 'Guia completo sobre roedores em Angola: identificação e controle de animais que danificam culturas e armazenamento.',
  keywords: 'roedores, ratos, controle pragas, agricultura Angola, Digitalzango, armazenamento grãos'
}

export default function RoedoresPage() {
  const commonRodents = [
    {
      name: 'Rato-do-campo',
      scientificName: 'Rattus rattus',
      slug: 'rato-do-campo',
      riskLevel: 'Alto',
      crops: ['Milho', 'Arroz', 'Sorgo'],
      season: 'Todo o ano',
      description: 'Ataca culturas no campo e armazenamento'
    },
    {
      name: 'Rato-doméstico',
      scientificName: 'Mus musculus',
      slug: 'rato-domestico',
      riskLevel: 'Médio',
      crops: ['Grãos armazenados', 'Sementes'],
      season: 'Todo o ano',
      description: 'Contamina alimentos armazenados'
    },
    {
      name: 'Ratazana',
      scientificName: 'Rattus norvegicus',
      slug: 'ratazana',
      riskLevel: 'Alto',
      crops: ['Milho', 'Arroz', 'Mandioca'],
      season: 'Época seca',
      description: 'Maior roedor, causa grandes danos'
    },
    {
      name: 'Esquilo-terrestre',
      scientificName: 'Xerus erythropus',
      slug: 'esquilo-terrestre',
      riskLevel: 'Médio',
      crops: ['Amendoim', 'Milho', 'Sorgo'],
      season: 'Época seca',
      description: 'Escava túneis e come sementes'
    },
    {
      name: 'Porco-espinho',
      scientificName: 'Hystrix cristata',
      slug: 'porco-espinho',
      riskLevel: 'Médio',
      crops: ['Mandioca', 'Batata-doce', 'Milho'],
      season: 'Noturno',
      description: 'Ataca raízes e tubérculos'
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
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mr-6">
              <Mouse className="w-8 h-8 text-gray-600" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Roedores</h1>
              <p className="text-gray-600 mt-2 text-lg">Animais que danificam culturas e armazenamento</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4 mt-6 p-4 bg-gray-50 rounded-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-600">5</div>
              <div className="text-sm text-gray-600">Espécies Comuns</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">Médio</div>
              <div className="text-sm text-gray-600">Nível de Risco</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">6</div>
              <div className="text-sm text-gray-600">Culturas Afetadas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">Noturno</div>
              <div className="text-sm text-gray-600">Atividade Principal</div>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2 text-red-600" />
              Principais Danos
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li>• Consumo direto de grãos</li>
              <li>• Contaminação de alimentos</li>
              <li>• Danos em armazenamento</li>
              <li>• Transmissão de doenças</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
              Estratégias de Controle
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li>• Armadilhas mecânicas</li>
              <li>• Iscas rodenticidas</li>
              <li>• Vedação de acessos</li>
              <li>• Limpeza e higiene</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-blue-600" />
              Épocas Críticas
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li>• Pós-colheita</li>
              <li>• Armazenamento</li>
              <li>• Época seca</li>
              <li>• Período noturno</li>
            </ul>
          </div>
        </div>

        {/* Rodents Grid */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Roedores Mais Comuns em Angola</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonRodents.map((rodent, index) => (
              <div 
                key={index}
                className="block p-6 border border-gray-200 rounded-lg hover:border-green-300 hover:shadow-md transition-all duration-200"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-gray-900 text-lg">{rodent.name}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskColor(rodent.riskLevel)}`}>
                    {rodent.riskLevel}
                  </span>
                </div>
                
                <p className="text-sm text-gray-600 italic mb-3">{rodent.scientificName}</p>
                <p className="text-sm text-gray-700 mb-4">{rodent.description}</p>
                
                <div className="space-y-2">
                  <div>
                    <span className="text-xs font-medium text-gray-500">Culturas afetadas:</span>
                    <p className="text-sm text-gray-700">{rodent.crops.join(', ')}</p>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-gray-500">Atividade:</span>
                    <p className="text-sm text-gray-700">{rodent.season}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Prevention Tips */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Dicas de Prevenção</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">No Campo:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Manter área limpa de restos vegetais</li>
                <li>• Eliminar abrigos próximos às culturas</li>
                <li>• Colheita no tempo adequado</li>
                <li>• Monitoramento regular</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">No Armazenamento:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Silos bem vedados</li>
                <li>• Limpeza regular dos armazéns</li>
                <li>• Controle de umidade</li>
                <li>• Inspeção periódica</li>
              </ul>
            </div>
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
              href="/pragas/ervas-daninhas" 
              className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
            >
              <h3 className="font-medium text-gray-900">Ervas Daninhas</h3>
              <p className="text-sm text-gray-600 mt-1">Plantas invasoras</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
