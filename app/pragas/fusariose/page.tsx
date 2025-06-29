// app/pragas/fusariose/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Zap, Calendar, MapPin, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Fusariose - Controle e Prevenção | Digitalzango',
  description: 'Guia completo sobre fusariose em Angola: identificação, controle e prevenção de Fusarium spp. em culturas.',
  keywords: 'fusariose, Fusarium, murcha vascular, tomate, banana, Angola, Digitalzango'
}

export default function FusariosePage() {
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
              <h1 className="text-3xl font-bold text-gray-900">Fusariose</h1>
              <p className="text-gray-600 mt-1">Fusarium spp.</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Solo úmido</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Todas as províncias</span>
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
                <h3 className="font-medium text-gray-800 mb-2">Sintomas Iniciais:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Amarelecimento das folhas inferiores</li>
                  <li>• Murcha durante o dia</li>
                  <li>• Escurecimento vascular</li>
                  <li>• Crescimento unilateral</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Sintomas Avançados:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Murcha irreversível</li>
                  <li>• Morte da planta</li>
                  <li>• Escurecimento do caule</li>
                  <li>• Apodrecimento das raízes</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Condições Favoráveis</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Fatores Climáticos:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Temperatura entre 25-30°C</li>
                  <li>• Solo encharcado</li>
                  <li>• Umidade elevada</li>
                  <li>• Má drenagem</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Fatores Agravantes:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Ferimentos nas raízes</li>
                  <li>• Solo ácido</li>
                  <li>• Estresse da planta</li>
                  <li>• Monocultura prolongada</li>
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
                <li>• Tomate</li>
                <li>• Pimentão</li>
                <li>• Berinjela</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Frutíferas</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Banana</li>
                <li>• Abacaxi</li>
                <li>• Melão</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Cereais</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Milho</li>
                <li>• Sorgo</li>
                <li>• Arroz</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Danos e Perdas</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Danos Diretos:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Obstrução do sistema vascular</li>
                <li>• Morte prematura das plantas</li>
                <li>• Redução da produtividade</li>
                <li>• Perda total da cultura</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Perdas Econômicas:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Redução de 50-100% na produção</li>
                <li>• Contaminação do solo</li>
                <li>• Necessidade de replantio</li>
                <li>• Aumento dos custos de controle</li>
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
                <li>• Variedades resistentes</li>
                <li>• Rotação de culturas</li>
                <li>• Drenagem adequada</li>
                <li>• Desinfecção do solo</li>
                <li>• Sementes sadias</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-orange-700 mb-3">Controle Químico:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Fungicidas sistêmicos</li>
                <li>• Tratamento de sementes</li>
                <li>• Aplicação no solo</li>
                <li>• Fumigação do solo</li>
                <li>• Fungicidas preventivos</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recomendações para Angola</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Manejo do Solo:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Melhorar drenagem</li>
                <li>• Correção do pH</li>
                <li>• Matéria orgânica</li>
                <li>• Evitar compactação</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Práticas Culturais:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Plantio em época seca</li>
                <li>• Irrigação controlada</li>
                <li>• Eliminação de restos culturais</li>
                <li>• Quarentena de mudas</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Doenças Relacionadas</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link 
              href="/pragas/antracnose" 
              className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
            >
              <h3 className="font-medium text-gray-900">Antracnose</h3>
              <p className="text-sm text-gray-600 mt-1">Colletotrichum spp.</p>
            </Link>
            <Link 
              href="/pragas/mildio" 
              className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
            >
              <h3 className="font-medium text-gray-900">Míldio</h3>
              <p className="text-sm text-gray-600 mt-1">Peronospora spp.</p>
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
