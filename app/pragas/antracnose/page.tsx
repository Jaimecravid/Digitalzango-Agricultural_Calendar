// app/pragas/antracnose/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Zap, Calendar, MapPin, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Antracnose - Controle e Prevenção | Digitalzango',
  description: 'Guia completo sobre antracnose em Angola: identificação, controle e prevenção de Colletotrichum spp. em culturas.',
  keywords: 'antracnose, Colletotrichum, doença fúngica, feijão, tomate, Angola, Digitalzango'
}

export default function AntracnosePage() {
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
              <h1 className="text-3xl font-bold text-gray-900">Antracnose</h1>
              <p className="text-gray-600 mt-1">Colletotrichum spp.</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Época chuvosa</span>
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
                <h3 className="font-medium text-gray-800 mb-2">Sintomas nas Folhas:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Manchas circulares escuras</li>
                  <li>• Centro acinzentado</li>
                  <li>• Bordas avermelhadas ou amareladas</li>
                  <li>• Perfurações nas folhas</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Sintomas nos Frutos:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Manchas escuras deprimidas</li>
                  <li>• Massa rosada de esporos</li>
                  <li>• Apodrecimento dos frutos</li>
                  <li>• Lesões circulares profundas</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Condições Favoráveis</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Clima:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Temperatura entre 22-27°C</li>
                  <li>• Umidade relativa alta (>80%)</li>
                  <li>• Chuvas frequentes</li>
                  <li>• Períodos de molhamento foliar</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Fatores Agravantes:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Plantio muito adensado</li>
                  <li>• Má ventilação</li>
                  <li>• Ferimentos nas plantas</li>
                  <li>• Excesso de nitrogênio</li>
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
                <li>• Feijão</li>
                <li>• Soja</li>
                <li>• Amendoim</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Hortaliças</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Tomate</li>
                <li>• Pimentão</li>
                <li>• Pepino</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Frutíferas</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Manga</li>
                <li>• Banana</li>
                <li>• Maracujá</li>
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
                <li>• Desfolha severa das plantas</li>
                <li>• Apodrecimento de frutos</li>
                <li>• Redução da área fotossintética</li>
                <li>• Morte de mudas jovens</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Perdas Econômicas:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Redução de 30-80% na produção</li>
                <li>• Perda de qualidade dos frutos</li>
                <li>• Aumento dos custos de controle</li>
                <li>• Depreciação comercial</li>
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
                <li>• Sementes sadias e tratadas</li>
                <li>• Rotação de culturas</li>
                <li>• Espaçamento adequado</li>
                <li>• Eliminação de restos culturais</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-orange-700 mb-3">Controle Químico:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Fungicidas cúpricos</li>
                <li>• Fungicidas sistêmicos</li>
                <li>• Aplicações preventivas</li>
                <li>• Rotação de princípios ativos</li>
                <li>• Tratamento de sementes</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recomendações para Angola</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Época Chuvosa (Crítica):</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Monitoramento intensivo</li>
                <li>• Aplicações preventivas</li>
                <li>• Melhorar drenagem</li>
                <li>• Evitar irrigação por aspersão</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Manejo Integrado:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Plantar em época adequada</li>
                <li>• Adubação equilibrada</li>
                <li>• Poda para ventilação</li>
                <li>• Controle de plantas daninhas</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Doenças Relacionadas</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link 
              href="/pragas/ferrugem-do-cafe" 
              className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
            >
              <h3 className="font-medium text-gray-900">Ferrugem-do-café</h3>
              <p className="text-sm text-gray-600 mt-1">Hemileia vastatrix</p>
            </Link>
            <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
              <h3 className="font-medium text-gray-500">Míldio</h3>
              <p className="text-sm text-gray-400 mt-1">Em breve</p>
            </div>
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
