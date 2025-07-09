// app/pragas/porco-espinho/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Zap, Calendar, MapPin, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Porco-espinho - Controle e Prevenção | Digitalzango',
  description: 'Guia completo sobre porco-espinho em Angola: identificação, controle e prevenção de Hystrix spp. em culturas agrícolas.',
  keywords: 'porco-espinho, Hystrix, roedor silvestre, mandioca, batata-doce, Angola, Digitalzango'
}

export default function PorcoEspinhoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link 
            href="/pragas" 
            className="inline-flex items-center text-green-600 hover:text-green-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para Pragas
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
              <Zap className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Porco-espinho</h1>
              <p className="text-gray-600 mt-1">Hystrix spp.</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Época chuvosa</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Florestas e savanas</span>
            </div>
            <div className="flex items-center text-sm text-orange-600">
              <AlertTriangle className="w-4 h-4 mr-2" />
              <span>Risco: Médio</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Identificação</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Características:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Tamanho de 60-90cm (corpo)</li>
                  <li>• Espinhos longos e pontiagudos</li>
                  <li>• Corpo robusto e pesado</li>
                  <li>• Cor marrom-escura</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Comportamento:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Ativo principalmente à noite</li>
                  <li>• Escava tocas profundas</li>
                  <li>• Movimentação lenta</li>
                  <li>• Defesa com espinhos</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Danos Causados</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Danos às Culturas:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Escavação de tubérculos</li>
                  <li>• Consumo de raízes</li>
                  <li>• Danos a culturas de subsistência</li>
                  <li>• Destruição de plantações</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Impacto Socioeconômico:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Perdas na agricultura familiar</li>
                  <li>• Redução da segurança alimentar</li>
                  <li>• Conflito homem-fauna</li>
                  <li>• Necessidade de proteção</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Culturas Mais Afetadas em Angola</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Tubérculos</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Mandioca</li>
                <li>• Batata-doce</li>
                <li>• Inhame</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Raízes</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Cenoura</li>
                <li>• Beterraba</li>
                <li>• Rabanete</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Outras Culturas</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Amendoim</li>
                <li>• Milho jovem</li>
                <li>• Hortaliças</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Métodos de Controle</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-green-700 mb-3">Controle Preventivo:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Cercas de proteção</li>
                <li>• Plantio distante de florestas</li>
                <li>• Eliminação de abrigos</li>
                <li>• Monitoramento de trilhas</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-orange-700 mb-3">Controle Sustentável:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Manejo de habitat</li>
                <li>• Controle populacional</li>
                <li>• Educação ambiental</li>
                <li>• Compensação ecológica</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recomendações para Angola</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Conservação e Controle:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Equilíbrio ecológico</li>
                <li>• Proteção de espécies nativas</li>
                <li>• Manejo sustentável</li>
                <li>• Corredores ecológicos</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Agricultura Familiar:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Proteção física das culturas</li>
                <li>• Diversificação de cultivos</li>
                <li>• Técnicas de dissuasão</li>
                <li>• Apoio técnico</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Roedores Relacionados</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link 
              href="/pragas/esquilo-terrestre" 
              className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
            >
              <h3 className="font-medium text-gray-900">Esquilo-terrestre</h3>
              <p className="text-sm text-gray-600 mt-1">Xerus spp.</p>
            </Link>
            <Link 
              href="/pragas/rato-do-campo" 
              className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
            >
              <h3 className="font-medium text-gray-900">Rato-do-campo</h3>
              <p className="text-sm text-gray-600 mt-1">Roedores silvestres</p>
            </Link>
            <Link 
              href="/pragas/roedores" 
              className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
            >
              <h3 className="font-medium text-gray-900">Outros Roedores</h3>
              <p className="text-sm text-gray-600 mt-1">Ver categoria completa</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
