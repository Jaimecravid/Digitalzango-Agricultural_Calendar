// app/pragas/rato-do-campo/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Zap, Calendar, MapPin, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rato-do-campo - Controle e Prevenção | Digitalzango',
  description: 'Guia completo sobre rato-do-campo em Angola: identificação, controle e prevenção de roedores em culturas agrícolas.',
  keywords: 'rato-do-campo, roedor, praga agrícola, milho, cereais, Angola, Digitalzango'
}

export default function RatoDoCampoPage() {
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
            <div className="w-12 h-12 bg-brown-100 rounded-lg flex items-center justify-center mr-4">
              <Zap className="w-6 h-6 text-brown-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Rato-do-campo</h1>
              <p className="text-gray-600 mt-1">Roedores silvestres</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Todo o ano</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Áreas rurais</span>
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
                  <li>• Tamanho de 8-12cm (corpo)</li>
                  <li>• Cauda longa e peluda</li>
                  <li>• Pelagem marrom-acinzentada</li>
                  <li>• Orelhas grandes e proeminentes</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Comportamento:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Ativo principalmente à noite</li>
                  <li>• Constrói ninhos no solo</li>
                  <li>• Forma colônias</li>
                  <li>• Reprodução rápida</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Danos Causados</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Danos Diretos:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Consumo de sementes</li>
                  <li>• Roer grãos armazenados</li>
                  <li>• Danos a mudas jovens</li>
                  <li>• Escavação de túneis</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Perdas Econômicas:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Redução de 5-20% na produção</li>
                  <li>• Contaminação de grãos</li>
                  <li>• Danos em armazéns</li>
                  <li>• Custos de controle</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Culturas Mais Afetadas em Angola</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Cereais</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Milho</li>
                <li>• Sorgo</li>
                <li>• Arroz</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Leguminosas</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Feijão</li>
                <li>• Amendoim</li>
                <li>• Soja</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Outras Culturas</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Mandioca</li>
                <li>• Batata-doce</li>
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
                <li>• Limpeza de áreas de cultivo</li>
                <li>• Eliminação de abrigos</li>
                <li>• Armazenamento adequado</li>
                <li>• Barreiras físicas</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-orange-700 mb-3">Controle Direto:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Armadilhas mecânicas</li>
                <li>• Iscas rodenticidas</li>
                <li>• Controle biológico</li>
                <li>• Manejo integrado</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recomendações para Angola</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Época de Plantio:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Monitoramento intensivo</li>
                <li>• Proteção de sementes</li>
                <li>• Controle preventivo</li>
                <li>• Eliminação de abrigos</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Manejo Integrado:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Preservar predadores naturais</li>
                <li>• Rotação de iscas</li>
                <li>• Controle de população</li>
                <li>• Monitoramento constante</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Roedores Relacionados</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
              <h3 className="font-medium text-gray-500">Rato-doméstico</h3>
              <p className="text-sm text-gray-400 mt-1">Em breve</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
              <h3 className="font-medium text-gray-500">Ratazana</h3>
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
