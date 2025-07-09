// app/pragas/cigarrinha/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Bug, Calendar, MapPin, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cigarrinha - Controle e Prevenção | Digitalzango',
  description: 'Guia completo sobre cigarrinha em Angola: identificação, controle e prevenção de Cicadellidae em culturas.',
  keywords: 'cigarrinha, Cicadellidae, transmite vírus, milho, sorgo, Angola, Digitalzango'
}

export default function CigarrinhaPage() {
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
              <h1 className="text-3xl font-bold text-gray-900">Cigarrinha</h1>
              <p className="text-gray-600 mt-1">Cicadellidae</p>
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
                <h3 className="font-medium text-gray-800 mb-2">Características do Adulto:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Inseto pequeno de 3-8mm</li>
                  <li>• Cor verde, amarela ou marrom</li>
                  <li>• Cabeça triangular</li>
                  <li>• Salto característico quando perturbado</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Ninfas:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Menores que os adultos</li>
                  <li>• Sem asas desenvolvidas</li>
                  <li>• Movimentação lateral</li>
                  <li>• Coloração mais clara</li>
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
                  <li>• Sucção da seiva das plantas</li>
                  <li>• Amarelecimento das folhas</li>
                  <li>• Redução do vigor da planta</li>
                  <li>• Queima das bordas foliares</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Danos Indiretos:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Transmissão de vírus</li>
                  <li>• Transmissão de fitoplasmas</li>
                  <li>• Injeção de toxinas</li>
                  <li>• Redução da produtividade</li>
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
              <h3 className="font-medium text-gray-900 mb-2">Cana-de-açúcar</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Cana-de-açúcar</li>
                <li>• Capim-elefante</li>
                <li>• Pastagens</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Hortaliças</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Batata</li>
                <li>• Tomate</li>
                <li>• Feijão</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Vírus Transmitidos</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Principais Vírus:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Vírus do mosaico do milho</li>
                <li>• Vírus do enfezamento</li>
                <li>• Vírus da risca do milho</li>
                <li>• Fitoplasmas diversos</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Sintomas das Viroses:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Mosaico nas folhas</li>
                <li>• Enfezamento das plantas</li>
                <li>• Avermelhamento foliar</li>
                <li>• Redução do crescimento</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Métodos de Controle</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-green-700 mb-3">Controle Cultural:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Eliminação de plantas daninhas</li>
                <li>• Plantio em época adequada</li>
                <li>• Variedades resistentes</li>
                <li>• Rotação de culturas</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-blue-700 mb-3">Controle Biológico:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Parasitoides naturais</li>
                <li>• Predadores (aranhas, joaninhas)</li>
                <li>• Fungos entomopatogênicos</li>
                <li>• Preservação de inimigos naturais</li>
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
                <li>• Controle de plantas daninhas</li>
                <li>• Irrigação adequada</li>
                <li>• Evitar estresse hídrico</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Prevenção de Viroses:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Controle precoce da cigarrinha</li>
                <li>• Sementes sadias</li>
                <li>• Eliminação de hospedeiros</li>
                <li>• Plantio sincronizado</li>
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
              href="/pragas/trips" 
              className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
            >
              <h3 className="font-medium text-gray-900">Trips</h3>
              <p className="text-sm text-gray-600 mt-1">Thysanoptera</p>
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
