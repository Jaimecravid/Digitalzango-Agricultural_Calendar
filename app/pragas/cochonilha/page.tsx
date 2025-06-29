// app/pragas/cochonilha/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Bug, Calendar, MapPin, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cochonilha - Controle e Prevenção | Digitalzango',
  description: 'Guia completo sobre cochonilha em Angola: identificação, controle e prevenção de insetos sugadores de seiva.',
  keywords: 'cochonilha, Coccoidea, inseto sugador, café, citros, Angola, Digitalzango'
}

export default function CochonilhaPage() {
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
              <Bug className="w-6 h-6 text-brown-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Cochonilha</h1>
              <p className="text-gray-600 mt-1">Coccoidea</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Todo o ano</span>
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
                  <li>• Insetos pequenos (1-5mm)</li>
                  <li>• Corpo oval coberto por cera</li>
                  <li>• Cor branca, marrom ou preta</li>
                  <li>• Fixos em folhas e ramos</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Sinais de Infestação:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Manchas brancas nas plantas</li>
                  <li>• Melada (substância pegajosa)</li>
                  <li>• Amarelecimento das folhas</li>
                  <li>• Presença de formigas</li>
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
                  <li>• Enfraquecimento da planta</li>
                  <li>• Deformação de folhas e frutos</li>
                  <li>• Redução da produtividade</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Danos Indiretos:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Desenvolvimento de fumagina</li>
                  <li>• Transmissão de vírus</li>
                  <li>• Atração de formigas</li>
                  <li>• Redução da qualidade</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Culturas Mais Afetadas em Angola</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Café</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Cochonilha-da-raiz</li>
                <li>• Cochonilha-do-caule</li>
                <li>• Reduz qualidade dos grãos</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Citros</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Cochonilha-branca</li>
                <li>• Cochonilha-parda</li>
                <li>• Afeta frutos e folhas</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Mandioca</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Cochonilha-farinhenta</li>
                <li>• Ataca folhas jovens</li>
                <li>• Reduz produção de raízes</li>
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
                <li>• Joaninhas predadoras</li>
                <li>• Vespas parasitoides</li>
                <li>• Fungos entomopatogênicos</li>
                <li>• Crisopídeos (bicho-lixeiro)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-green-700 mb-3">Controle Cultural:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Poda de ramos infestados</li>
                <li>• Limpeza de plantas daninhas</li>
                <li>• Adubação equilibrada</li>
                <li>• Controle de formigas</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recomendações para Angola</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Monitoramento:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Inspeção regular das plantas</li>
                <li>• Verificar presença de formigas</li>
                <li>• Observar melada nas folhas</li>
                <li>• Examinar ramos e troncos</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Prevenção:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Quarentena de mudas</li>
                <li>• Limpeza de ferramentas</li>
                <li>• Evitar excesso de nitrogênio</li>
                <li>• Manter plantas saudáveis</li>
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
