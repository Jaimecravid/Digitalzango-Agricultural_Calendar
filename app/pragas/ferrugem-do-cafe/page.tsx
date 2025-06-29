// app/pragas/ferrugem-do-cafe/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Zap, Calendar, MapPin, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ferrugem-do-café - Controle e Prevenção | Digitalzango',
  description: 'Guia completo sobre ferrugem-do-café em Angola: identificação, prevenção e controle da principal doença do café.',
  keywords: 'ferrugem café, Hemileia vastatrix, doença café, controle doenças, Angola, Digitalzango'
}

export default function FerrugemDoCafePage() {
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
              <Zap className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Ferrugem-do-café</h1>
              <p className="text-gray-600 mt-1">Hemileia vastatrix</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Época chuvosa</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Todas as regiões cafeeiras</span>
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
                <h3 className="font-medium text-gray-800 mb-2">Sintomas nas Folhas:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Manchas amareladas na face superior</li>
                  <li>• Pó alaranjado na face inferior</li>
                  <li>• Formato circular das lesões</li>
                  <li>• Queda prematura das folhas</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Condições Favoráveis:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Temperatura entre 21-25°C</li>
                  <li>• Umidade relativa alta (>80%)</li>
                  <li>• Períodos chuvosos prolongados</li>
                  <li>• Má ventilação na lavoura</li>
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
                  <li>• Desfolha severa das plantas</li>
                  <li>• Redução da área fotossintética</li>
                  <li>• Enfraquecimento das plantas</li>
                  <li>• Morte de ramos produtivos</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Perdas Econômicas:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Redução de 30-70% na produção</li>
                  <li>• Diminuição da qualidade dos grãos</li>
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
              <h3 className="font-medium text-green-700 mb-3">Controle Preventivo:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Uso de variedades resistentes</li>
                <li>• Espaçamento adequado</li>
                <li>• Poda para melhorar ventilação</li>
                <li>• Adubação equilibrada</li>
                <li>• Monitoramento regular</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-orange-700 mb-3">Controle Químico:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Fungicidas cúpricos</li>
                <li>• Fungicidas sistêmicos</li>
                <li>• Aplicações preventivas</li>
                <li>• Rotação de princípios ativos</li>
                <li>• Pulverizações dirigidas</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recomendações para Angola</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Época Chuvosa:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Intensificar monitoramento</li>
                <li>• Aplicações preventivas</li>
                <li>• Melhorar drenagem</li>
                <li>• Evitar irrigação excessiva</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Manejo da Lavoura:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Plantar variedades adaptadas</li>
                <li>• Manter registros de aplicações</li>
                <li>• Capacitar trabalhadores</li>
                <li>• Integrar com outros controles</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Pragas Relacionadas</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link 
              href="/pragas/broca-do-cafe" 
              className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
            >
              <h3 className="font-medium text-gray-900">Broca-do-café</h3>
              <p className="text-sm text-gray-600 mt-1">Hypothenemus hampei</p>
            </Link>
            <Link 
              href="/pragas/doencas" 
              className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
            >
              <h3 className="font-medium text-gray-900">Outras Doenças</h3>
              <p className="text-sm text-gray-600 mt-1">Ver categoria completa</p>
            </Link>
            <Link 
              href="/pragas/antracnose" 
              className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
            >
              <h3 className="font-medium text-gray-900">Antracnose</h3>
              <p className="text-sm text-gray-600 mt-1">Colletotrichum spp.</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
