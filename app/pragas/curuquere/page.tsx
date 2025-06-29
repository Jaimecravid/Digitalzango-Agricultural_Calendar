// app/pragas/curuquere/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Bug, Calendar, MapPin, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Curuquerê - Controle e Prevenção | Digitalzango',
  description: 'Guia completo sobre curuquerê em Angola: identificação, controle e prevenção da principal praga do algodão.',
  keywords: 'curuquerê, Alabama argillacea, praga algodão, lagarta, Angola, Digitalzango'
}

export default function CuruquerePage() {
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
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
              <Bug className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Curuquerê</h1>
              <p className="text-gray-600 mt-1">Alabama argillacea</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Dezembro - Abril</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Regiões algodoeiras</span>
            </div>
            <div className="flex items-center text-sm text-red-600">
              <AlertTriangle className="w-4 h-4 mr-2" />
              <span>Risco: Alto</span>
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
                  <li>• Lagarta verde com listras longitudinais</li>
                  <li>• Tamanho de 25-35mm quando adulta</li>
                  <li>• Cabeça amarelada</li>
                  <li>• Movimentação rápida quando perturbada</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Adulto (Mariposa):</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Cor parda-acinzentada</li>
                  <li>• Envergadura de 30-35mm</li>
                  <li>• Manchas escuras nas asas</li>
                  <li>• Ativa durante a noite</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Danos Causados</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Danos no Algodão:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Desfolha completa das plantas</li>
                  <li>• Redução da área fotossintética</li>
                  <li>• Atraso no desenvolvimento</li>
                  <li>• Redução na produção de fibra</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Impacto Econômico:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Perdas de 30-100% na produção</li>
                  <li>• Redução da qualidade da fibra</li>
                  <li>• Aumento dos custos de controle</li>
                  <li>• Necessidade de replantio</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Métodos de Controle</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-blue-700 mb-3">Controle Biológico:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Trichogramma pretiosum</li>
                <li>• Bacillus thuringiensis</li>
                <li>• Vírus da poliedrose nuclear</li>
                <li>• Predadores naturais</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-green-700 mb-3">Controle Cultural:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Monitoramento com armadilhas</li>
                <li>• Destruição de restos culturais</li>
                <li>• Plantio na época adequada</li>
                <li>• Rotação de culturas</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recomendações para Angola</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Época Crítica (Dez-Abr):</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Monitoramento semanal</li>
                <li>• Controle no início da infestação</li>
                <li>• Uso de armadilhas luminosas</li>
                <li>• Aplicações noturnas</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Manejo Integrado:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Preservar inimigos naturais</li>
                <li>• Adubação equilibrada</li>
                <li>• Variedades resistentes</li>
                <li>• Controle químico seletivo</li>
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
            <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
              <h3 className="font-medium text-gray-500">Lagarta-rosca</h3>
              <p className="text-sm text-gray-400 mt-1">Em breve</p>
            </div>
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
