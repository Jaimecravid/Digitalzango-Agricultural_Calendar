// app/pragas/gafanhoto/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Bug, Calendar, MapPin, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Gafanhoto - Controle e Prevenção | Digitalzango',
  description: 'Guia completo sobre gafanhoto em Angola: identificação, controle e prevenção de Schistocerca gregaria e outras espécies.',
  keywords: 'gafanhoto, Schistocerca gregaria, enxames, milho, sorgo, Angola, Digitalzango'
}

export default function GafanhotoPage() {
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
              <h1 className="text-3xl font-bold text-gray-900">Gafanhoto</h1>
              <p className="text-gray-600 mt-1">Schistocerca gregaria</p>
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
                <h3 className="font-medium text-gray-800 mb-2">Características do Adulto:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Inseto grande de 35-75mm</li>
                  <li>• Cor amarela a marrom-avermelhada</li>
                  <li>• Pernas traseiras desenvolvidas</li>
                  <li>• Asas longas e transparentes</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Fases Gregárias:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Fase solitária (dispersos)</li>
                  <li>• Fase gregária (enxames)</li>
                  <li>• Mudança de comportamento</li>
                  <li>• Migração em massa</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Danos Causados</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Danos Devastadores:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Consumo total da vegetação</li>
                  <li>• Desfolha completa das culturas</li>
                  <li>• Destruição de pastagens</li>
                  <li>• Perda total da produção</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Impacto Socioeconômico:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Insegurança alimentar</li>
                  <li>• Perdas econômicas massivas</li>
                  <li>• Migração de populações</li>
                  <li>• Emergência nacional</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Culturas e Vegetação Afetadas</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Cereais</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Milho</li>
                <li>• Sorgo</li>
                <li>• Milheto</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Pastagens</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Capins nativos</li>
                <li>• Pastagens cultivadas</li>
                <li>• Vegetação natural</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Outras Culturas</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Algodão</li>
                <li>• Hortaliças</li>
                <li>• Árvores jovens</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Condições Favoráveis</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Fatores Climáticos:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Períodos secos prolongados</li>
                <li>• Chuvas esporádicas</li>
                <li>• Temperaturas elevadas</li>
                <li>• Ventos favoráveis à migração</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Fatores Ambientais:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Disponibilidade de alimento</li>
                <li>• Locais de reprodução adequados</li>
                <li>• Ausência de inimigos naturais</li>
                <li>• Condições de agregação</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Métodos de Controle</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-red-700 mb-3">Controle de Emergência:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Pulverizações aéreas</li>
                <li>• Inseticidas de contato</li>
                <li>• Ação coordenada regional</li>
                <li>• Monitoramento por satélite</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-green-700 mb-3">Controle Preventivo:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Monitoramento contínuo</li>
                <li>• Controle de focos iniciais</li>
                <li>• Manejo de habitat</li>
                <li>• Sistemas de alerta precoce</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Estratégias para Angola</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Monitoramento Regional:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Cooperação internacional</li>
                <li>• Sistemas de alerta</li>
                <li>• Monitoramento de migrações</li>
                <li>• Capacitação técnica</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Preparação de Emergência:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Estoques de inseticidas</li>
                <li>• Equipamentos de aplicação</li>
                <li>• Planos de contingência</li>
                <li>• Treinamento de equipes</li>
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
