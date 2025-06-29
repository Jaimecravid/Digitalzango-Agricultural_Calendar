// app/pragas/trips/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Bug, Calendar, MapPin, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Trips - Controle e Prevenção | Digitalzango',
  description: 'Guia completo sobre trips em Angola: identificação, controle e prevenção de tisanópteros em culturas agrícolas.',
  keywords: 'trips, tisanópteros, Thysanoptera, praga agrícola, Angola, Digitalzango, controle pragas'
}

export default function TripsPage() {
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
              <Bug className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Trips</h1>
              <p className="text-gray-600 mt-1">Thysanoptera</p>
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
                <h3 className="font-medium text-gray-800 mb-2">Características:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Insetos muito pequenos (0,5-2mm)</li>
                  <li>• Cor amarela, marrom ou preta</li>
                  <li>• Asas estreitas com franjas</li>
                  <li>• Movimentação rápida</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Sinais de Ataque:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Prateamento das folhas</li>
                  <li>• Pontos pretos (fezes)</li>
                  <li>• Deformação de folhas jovens</li>
                  <li>• Manchas esbranquiçadas</li>
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
                  <li>• Raspagem da superfície foliar</li>
                  <li>• Redução da fotossíntese</li>
                  <li>• Deformação de frutos</li>
                  <li>• Queda de flores</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Danos Indiretos:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Transmissão de vírus</li>
                  <li>• Entrada para fungos</li>
                  <li>• Redução da qualidade</li>
                  <li>• Perdas na comercialização</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Culturas Mais Afetadas em Angola</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Hortaliças</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Cebola</li>
                <li>• Tomate</li>
                <li>• Pimentão</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Leguminosas</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Feijão</li>
                <li>• Ervilha</li>
                <li>• Amendoim</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Frutíferas</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Manga</li>
                <li>• Citros</li>
                <li>• Uva</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Métodos de Controle</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-blue-700 mb-3">Controle Biológico:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Ácaros predadores</li>
                <li>• Percevejos predadores</li>
                <li>• Fungos entomopatogênicos</li>
                <li>• Armadilhas adesivas azuis</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-green-700 mb-3">Controle Cultural:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Eliminação de plantas daninhas</li>
                <li>• Irrigação adequada</li>
                <li>• Mulching (cobertura do solo)</li>
                <li>• Rotação de culturas</li>
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
                <li>• Manter umidade adequada</li>
                <li>• Usar armadilhas adesivas</li>
                <li>• Evitar estresse hídrico</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Prevenção:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Inspeção regular das culturas</li>
                <li>• Controle de ervas daninhas</li>
                <li>• Plantio em épocas adequadas</li>
                <li>• Adubação equilibrada</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Pragas Relacionadas</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link 
              href="/pragas/pulgao" 
              className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
            >
              <h3 className="font-medium text-gray-900">Pulgão</h3>
              <p className="text-sm text-gray-600 mt-1">Aphididae</p>
            </Link>
            <Link 
              href="/pragas/mosca-branca" 
              className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
            >
              <h3 className="font-medium text-gray-900">Mosca-Branca</h3>
              <p className="text-sm text-gray-600 mt-1">Bemisia tabaci</p>
            </Link>
            <Link 
              href="/pragas/insetos" 
              className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
            >
              <h3 className="font-medium text-gray-900">Outros Insetos</h3>
              <p className="text-sm text-gray-600 mt-1">Ver categoria completa</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
