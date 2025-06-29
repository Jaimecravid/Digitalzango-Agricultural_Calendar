// app/pragas/lagarta-rosca/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Bug, Calendar, MapPin, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Lagarta-rosca - Controle e Prevenção | Digitalzango',
  description: 'Guia completo sobre lagarta-rosca em Angola: identificação, controle e prevenção de Agrotis ipsilon em culturas.',
  keywords: 'lagarta-rosca, Agrotis ipsilon, praga solo, corta plantas, Angola, Digitalzango'
}

export default function LagartaRoscaPage() {
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
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
              <Bug className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Lagarta-rosca</h1>
              <p className="text-gray-600 mt-1">Agrotis ipsilon</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Início das chuvas</span>
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
                <h3 className="font-medium text-gray-800 mb-2">Características da Lagarta:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Lagarta robusta de 35-50mm</li>
                  <li>• Cor cinza-escura a preta</li>
                  <li>• Enrola-se quando perturbada</li>
                  <li>• Ativa durante a noite</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Comportamento:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Esconde-se no solo durante o dia</li>
                  <li>• Corta plantas na base do caule</li>
                  <li>• Alimenta-se à noite</li>
                  <li>• Migra entre plantas</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Danos Causados</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Danos Típicos:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Corte de plantas jovens na base</li>
                  <li>• Morte de mudas recém-transplantadas</li>
                  <li>• Falhas no estande da cultura</li>
                  <li>• Necessidade de replantio</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Impacto Econômico:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Perdas de 10-50% no estande</li>
                  <li>• Atraso no desenvolvimento</li>
                  <li>• Custos de replantio</li>
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
              <h3 className="font-medium text-gray-900 mb-2">Hortaliças</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Tomate</li>
                <li>• Repolho</li>
                <li>• Alface</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Leguminosas</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Feijão</li>
                <li>• Soja</li>
                <li>• Amendoim</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Ciclo de Vida</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-xs font-semibold text-blue-600">1</span>
              </div>
              <h4 className="font-medium text-gray-800">Ovo</h4>
              <p className="text-sm text-gray-600">3-7 dias</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-xs font-semibold text-blue-600">2</span>
              </div>
              <h4 className="font-medium text-gray-800">Lagarta</h4>
              <p className="text-sm text-gray-600">25-40 dias</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-xs font-semibold text-blue-600">3</span>
              </div>
              <h4 className="font-medium text-gray-800">Pupa</h4>
              <p className="text-sm text-gray-600">10-25 dias</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-xs font-semibold text-blue-600">4</span>
              </div>
              <h4 className="font-medium text-gray-800">Adulto</h4>
              <p className="text-sm text-gray-600">10-15 dias</p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Métodos de Controle</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-green-700 mb-3">Controle Cultural:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Preparo adequado do solo</li>
                <li>• Eliminação de plantas daninhas</li>
                <li>• Irrigação após o plantio</li>
                <li>• Rotação de culturas</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-blue-700 mb-3">Controle Biológico:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Bacillus thuringiensis</li>
                <li>• Vírus da poliedrose nuclear</li>
                <li>• Predadores naturais</li>
                <li>• Parasitoides</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recomendações para Angola</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Início das Chuvas (Crítico):</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Monitoramento intensivo</li>
                <li>• Inspeção noturna com lanterna</li>
                <li>• Controle preventivo</li>
                <li>• Plantio em época adequada</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Manejo Preventivo:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Preparo antecipado do solo</li>
                <li>• Eliminação de hospedeiros</li>
                <li>• Irrigação adequada</li>
                <li>• Proteção física de mudas</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Pragas Relacionadas</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link 
              href="/pragas/lagarta-do-cartucho" 
              className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
            >
              <h3 className="font-medium text-gray-900">Lagarta-do-cartucho</h3>
              <p className="text-sm text-gray-600 mt-1">Spodoptera frugiperda</p>
            </Link>
            <Link 
              href="/pragas/curuquere" 
              className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
            >
              <h3 className="font-medium text-gray-900">Curuquerê</h3>
              <p className="text-sm text-gray-600 mt-1">Alabama argillacea</p>
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
