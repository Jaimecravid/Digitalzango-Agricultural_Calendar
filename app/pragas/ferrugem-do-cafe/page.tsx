// app/pragas/ferrugem-do-cafe/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Zap, Calendar, MapPin, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ferrugem-do-cafÃ© - Controle e PrevenÃ§Ã£o | Digitalzango',
  description: 'Guia completo sobre ferrugem-do-cafÃ© em Angola: identificaÃ§Ã£o, prevenÃ§Ã£o e controle da principal doenÃ§a do cafÃ©.',
  keywords: 'ferrugem cafÃ©, Hemileia vastatrix, doenÃ§a cafÃ©, controle doenÃ§as, Angola, Digitalzango'
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
              <h1 className="text-3xl font-bold text-gray-900">Ferrugem-do-cafÃ©</h1>
              <p className="text-gray-600 mt-1">Hemileia vastatrix</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Ã‰poca chuvosa</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Todas as regiÃµes cafeeiras</span>
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
                  <li>â€¢ Manchas amareladas na face superior</li>
                  <li>â€¢ PÃ³ alaranjado na face inferior</li>
                  <li>â€¢ Formato circular das lesÃµes</li>
                  <li>â€¢ Queda prematura das folhas</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">CondiÃ§Ãµes FavorÃ¡veis:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>â€¢ Temperatura entre 21-25Â°C</li>
                  <li>â€¢ Umidade relativa alta (&gt;80%)</li>
                  <li>â€¢ PerÃ­odos chuvosos prolongados</li>
                  <li>â€¢ MÃ¡ ventilaÃ§Ã£o na lavoura</li>
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
                  <li>â€¢ Desfolha severa das plantas</li>
                  <li>â€¢ ReduÃ§Ã£o da Ã¡rea fotossintÃ©tica</li>
                  <li>â€¢ Enfraquecimento das plantas</li>
                  <li>â€¢ Morte de ramos produtivos</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Perdas EconÃ´micas:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>â€¢ ReduÃ§Ã£o de 30-70% na produÃ§Ã£o</li>
                  <li>â€¢ DiminuiÃ§Ã£o da qualidade dos grÃ£os</li>
                  <li>â€¢ Aumento dos custos de controle</li>
                  <li>â€¢ Necessidade de replantio</li>
                </ul>
              </div>
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
                <li>â€¢ EspaÃ§amento adequado</li>
                <li>â€¢ Poda para melhorar ventilaÃ§Ã£o</li>
                <li>â€¢ AdubaÃ§Ã£o equilibrada</li>
                <li>â€¢ Monitoramento regular</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-orange-700 mb-3">Controle QuÃ­mico:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>â€¢ Fungicidas cÃºpricos</li>
                <li>â€¢ Fungicidas sistÃªmicos</li>
                <li>â€¢ AplicaÃ§Ãµes preventivas</li>
                <li>â€¢ RotaÃ§Ã£o de princÃ­pios ativos</li>
                <li>â€¢ PulverizaÃ§Ãµes dirigidas</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">RecomendaÃ§Ãµes para Angola</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Ã‰poca Chuvosa:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>â€¢ Intensificar monitoramento</li>
                <li>â€¢ AplicaÃ§Ãµes preventivas</li>
                <li>â€¢ Melhorar drenagem</li>
                <li>â€¢ Evitar irrigaÃ§Ã£o excessiva</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Manejo da Lavoura:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>â€¢ Plantar variedades adaptadas</li>
                <li>â€¢ Manter registros de aplicaÃ§Ãµes</li>
                <li>â€¢ Capacitar trabalhadores</li>
                <li>â€¢ Integrar com outros controles</li>
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
              <h3 className="font-medium text-gray-900">Broca-do-cafÃ©</h3>
              <p className="text-sm text-gray-600 mt-1">Hypothenemus hampei</p>
            </Link>
            <Link 
              href="/pragas/doencas" 
              className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
            >
              <h3 className="font-medium text-gray-900">Outras DoenÃ§as</h3>
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

