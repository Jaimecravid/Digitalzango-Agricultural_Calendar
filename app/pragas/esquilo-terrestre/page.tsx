// app/pragas/esquilo-terrestre/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Zap, Calendar, MapPin, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Esquilo-terrestre - Controle e Prevenção | Digitalzango',
  description: 'Guia completo sobre esquilo-terrestre em Angola: identificação, controle e prevenção de roedores em culturas agrícolas.',
  keywords: 'esquilo-terrestre, roedor silvestre, amendoim, milho, Angola, Digitalzango'
}

export default function EsquiloTerrestrePage() {
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
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
              <Zap className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Esquilo-terrestre</h1>
              <p className="text-gray-600 mt-1">Xerus spp.</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Época seca</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Regiões áridas</span>
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
                  <li>• Tamanho de 20-30cm (corpo)</li>
                  <li>• Cauda peluda e longa</li>
                  <li>• Pelagem marrom-avermelhada</li>
                  <li>• Patas traseiras desenvolvidas</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Comportamento:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Ativo durante o dia</li>
                  <li>• Vive em colônias</li>
                  <li>• Escava tocas profundas</li>
                  <li>• Armazena alimentos</li>
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
                  <li>• Escavação de sementes</li>
                  <li>• Consumo de grãos</li>
                  <li>• Danos a raízes</li>
                  <li>• Destruição de mudas</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Danos Estruturais:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Túneis no solo</li>
                  <li>• Erosão localizada</li>
                  <li>• Danos a irrigação</li>
                  <li>• Problemas de drenagem</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Culturas Mais Afetadas em Angola</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Leguminosas</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Amendoim</li>
                <li>• Feijão</li>
                <li>• Soja</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Cereais</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Milho</li>
                <li>• Sorgo</li>
                <li>• Milheto</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Tubérculos</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Batata-doce</li>
                <li>• Mandioca</li>
                <li>• Inhame</li>
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
                <li>• Barreiras físicas</li>
                <li>• Plantio em época adequada</li>
                <li>• Eliminação de abrigos</li>
                <li>• Monitoramento de colônias</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-orange-700 mb-3">Controle Direto:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Armadilhas de captura</li>
                <li>• Fumigação de tocas</li>
                <li>• Controle populacional</li>
                <li>• Manejo de habitat</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recomendações para Angola</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Época Seca (Crítica):</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Monitoramento intensivo</li>
                <li>• Proteção de sementes</li>
                <li>• Controle de população</li>
                <li>• Manejo de colônias</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Manejo Sustentável:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Preservar predadores naturais</li>
                <li>• Controle seletivo</li>
                <li>• Manejo de habitat</li>
                <li>• Educação ambiental</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Roedores Relacionados</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link 
              href="/pragas/rato-do-campo" 
              className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
            >
              <h3 className="font-medium text-gray-900">Rato-do-campo</h3>
              <p className="text-sm text-gray-600 mt-1">Roedores silvestres</p>
            </Link>
            <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
              <h3 className="font-medium text-gray-500">Porco-espinho</h3>
              <p className="text-sm text-gray-400 mt-1">Em breve</p>
            </div>
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
