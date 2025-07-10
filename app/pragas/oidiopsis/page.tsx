// app/pragas/oidiopsis/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Zap, Calendar, MapPin, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Oidiopsis - Controle e Prevenção | Digitalzango',
  description: 'Guia completo sobre oidiopsis em Angola: identificação, controle e prevenção de Oidiopsis taurica em culturas.',
  keywords: 'oidiopsis, Oidiopsis taurica, doença fúngica, tomate, pimentão, Angola, Digitalzango'
}

export default function OidiopsisPage() {
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
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4 border-2 border-gray-200">
              <Zap className="w-6 h-6 text-gray-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Oidiopsis</h1>
              <p className="text-gray-600 mt-1">Oidiopsis taurica</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Época seca</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Todas as províncias</span>
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
                <h3 className="font-medium text-gray-800 mb-2">Sintomas nas Folhas:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Pó branco nas folhas</li>
                  <li>• Manchas cloróticas amareladas</li>
                  <li>• Folhas enroladas para baixo</li>
                  <li>• Queda prematura das folhas</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Condições Favoráveis:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Temperaturas entre 20-25°C</li>
                  <li>• Baixa umidade relativa</li>
                  <li>• Ventilação deficiente</li>
                  <li>• Plantio muito adensado</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Danos e Impacto</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Danos Diretos:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Redução da fotossíntese</li>
                  <li>• Necrose das folhas</li>
                  <li>• Morte de brotos jovens</li>
                  <li>• Redução do crescimento</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Perdas Econômicas:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Redução de 20-40% na produtividade</li>
                  <li>• Perda de qualidade dos frutos</li>
                  <li>• Aumento dos custos de controle</li>
                  <li>• Depreciação comercial</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Culturas Mais Afetadas em Angola</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Solanáceas</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Tomate</li>
                <li>• Pimentão</li>
                <li>• Berinjela</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Cucurbitáceas</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Pepino</li>
                <li>• Melão</li>
                <li>• Abóbora</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Outras</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Quiabo</li>
                <li>• Feijão-vagem</li>
                <li>• Plantas ornamentais</li>
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
                <li>• Uso de variedades resistentes</li>
                <li>• Espaçamento adequado</li>
                <li>• Ventilação adequada</li>
                <li>• Controle de plantas daninhas</li>
                <li>• Monitoramento constante</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-orange-700 mb-3">Controle Químico:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Fungicidas específicos para oídio</li>
                <li>• Aplicações preventivas</li>
                <li>• Rotação de fungicidas</li>
                <li>• Óleos minerais</li>
                <li>• Bicarbonato de potássio</li>
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
                <li>• Aplicações preventivas</li>
                <li>• Melhorar ventilação</li>
                <li>• Controle da irrigação</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Manejo Integrado:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Plantio em época adequada</li>
                <li>• Nutrição equilibrada</li>
                <li>• Eliminação de restos culturais</li>
                <li>• Variedades adaptadas</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Doenças Relacionadas</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link 
              href="/pragas/mildio" 
              className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
            >
              <h3 className="font-medium text-gray-900">Míldio</h3>
              <p className="text-sm text-gray-600 mt-1">Peronospora spp.</p>
            </Link>
            <Link 
              href="/pragas/antracnose" 
              className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
            >
              <h3 className="font-medium text-gray-900">Antracnose</h3>
              <p className="text-sm text-gray-600 mt-1">Colletotrichum spp.</p>
            </Link>
            <Link 
              href="/pragas/doencas" 
              className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
            >
              <h3 className="font-medium text-gray-900">Outras Doenças</h3>
              <p className="text-sm text-gray-600 mt-1">Ver categoria completa</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
