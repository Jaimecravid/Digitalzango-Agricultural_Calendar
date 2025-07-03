// app/pragas/antracnose/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Zap, Calendar, MapPin, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Antracnose - Controle e PrevenÃ§Ã£o | Digitalzango',
  description: 'Guia completo sobre antracnose em Angola: identificaÃ§Ã£o, controle e prevenÃ§Ã£o de Colletotrichum spp. em culturas.',
  keywords: 'antracnose, Colletotrichum, doenÃ§a fÃºngica, feijÃ£o, tomate, Angola, Digitalzango'
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
              <span>Ã‰poca chuvosa</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Todas as provÃ­ncias</span>
            </div>
            <div className="flex items-center text-sm text-red-600">
              <AlertTriangle className="w-4 h-4 mr-2" />
              <span>Risco: Alto</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">IdentificaÃ§Ã£o</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Sintomas nas Folhas:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>â€¢ Manchas circulares escuras</li>
                  <li>â€¢ Centro acinzentado</li>
                  <li>â€¢ Bordas avermelhadas ou amareladas</li>
                  <li>â€¢ PerfuraÃ§Ãµes nas folhas</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Sintomas nos Frutos:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>â€¢ Manchas escuras deprimidas</li>
                  <li>â€¢ Massa rosada de esporos</li>
                  <li>â€¢ Apodrecimento dos frutos</li>
                  <li>â€¢ LesÃµes circulares profundas</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">CondiÃ§Ãµes FavorÃ¡veis</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Clima:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>â€¢ Temperatura entre 22-27Â°C</li>
                  <li>â€¢ Umidade relativa alta (&gt;80%)</li>
                  <li>â€¢ Chuvas frequentes</li>
                  <li>â€¢ PerÃ­odos de molhamento foliar</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Fatores Agravantes:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>â€¢ Plantio muito adensado</li>
                  <li>â€¢ MÃ¡ ventilaÃ§Ã£o</li>
                  <li>â€¢ Ferimentos nas plantas</li>
                  <li>â€¢ Excesso de nitrogÃªnio</li>
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
                <li>â€¢ FeijÃ£o</li>
                <li>â€¢ Soja</li>
                <li>â€¢ Amendoim</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">HortaliÃ§as</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>â€¢ Tomate</li>
                <li>â€¢ PimentÃ£o</li>
                <li>â€¢ Pepino</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">FrutÃ­feras</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>â€¢ Manga</li>
                <li>â€¢ Banana</li>
                <li>â€¢ MaracujÃ¡</li>
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
                <li>â€¢ Desfolha severa das plantas</li>
                <li>â€¢ Apodrecimento de frutos</li>
                <li>â€¢ ReduÃ§Ã£o da Ã¡rea fotossintÃ©tica</li>
                <li>â€¢ Morte de mudas jovens</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Perdas EconÃ´micas:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>â€¢ ReduÃ§Ã£o de 30-80% na produÃ§Ã£o</li>
                <li>â€¢ Perda de qualidade dos frutos</li>
                <li>â€¢ Aumento dos custos de controle</li>
                <li>â€¢ DepreciaÃ§Ã£o comercial</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">MÃ©todos de Controle</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-green-700 mb-3">Controle Preventivo:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>â€¢ Uso de variedades resistentes</li>
                <li>â€¢ Sementes sadias e tratadas</li>
                <li>â€¢ RotaÃ§Ã£o de culturas</li>
                <li>â€¢ EspaÃ§amento adequado</li>
                <li>â€¢ EliminaÃ§Ã£o de restos culturais</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-orange-700 mb-3">Controle QuÃ­mico:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>â€¢ Fungicidas cÃºpricos</li>
                <li>â€¢ Fungicidas sistÃªmicos</li>
                <li>â€¢ AplicaÃ§Ãµes preventivas</li>
                <li>â€¢ RotaÃ§Ã£o de princÃ­pios ativos</li>
                <li>â€¢ Tratamento de sementes</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">RecomendaÃ§Ãµes para Angola</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Ã‰poca Chuvosa (CrÃ­tica):</h3>
              <ul className="space-y-2 text-gray-600">
                <li>â€¢ Monitoramento intensivo</li>
                <li>â€¢ AplicaÃ§Ãµes preventivas</li>
                <li>â€¢ Melhorar drenagem</li>
                <li>â€¢ Evitar irrigaÃ§Ã£o por aspersÃ£o</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Manejo Integrado:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>â€¢ Plantar em Ã©poca adequada</li>
                <li>â€¢ AdubaÃ§Ã£o equilibrada</li>
                <li>â€¢ Poda para ventilaÃ§Ã£o</li>
                <li>â€¢ Controle de plantas daninhas</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">DoenÃ§as Relacionadas</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link 
              href="/pragas/ferrugem-do-cafe" 
              className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
            >
              <h3 className="font-medium text-gray-900">Ferrugem-do-cafÃ©</h3>
              <p className="text-sm text-gray-600 mt-1">Hemileia vastatrix</p>
            </Link>
            <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
              <h3 className="font-medium text-gray-500">MÃ­ldio</h3>
              <p className="text-sm text-gray-400 mt-1">Em breve</p>
            </div>
            <Link 
              href="/pragas/doencas" 
              className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
            >
              <h3 className="font-medium text-gray-900">Outras DoenÃ§as</h3>
              <p className="text-sm text-gray-600 mt-1">Ver categoria completa</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

