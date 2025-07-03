// app/pragas/mancha-parda/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Zap, Calendar, MapPin, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mancha-parda - Controle e PrevenÃ§Ã£o | Digitalzango',
  description: 'Guia completo sobre mancha-parda em Angola: identificaÃ§Ã£o, controle e prevenÃ§Ã£o de Bipolaris oryzae no arroz.',
  keywords: 'mancha-parda, Bipolaris oryzae, doenÃ§a arroz, manchas foliares, Angola, Digitalzango'
}

export default function ManchaPardaPage() {
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
              <Zap className="w-6 h-6 text-brown-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Mancha-parda</h1>
              <p className="text-gray-600 mt-1">Bipolaris oryzae</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Ã‰poca chuvosa</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="w-4 h-4 mr-2" />
              <span>RegiÃµes arrozeiras</span>
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
                  <li>â€¢ Manchas ovais de cor parda</li>
                  <li>â€¢ Centro acinzentado</li>
                  <li>â€¢ Halo amarelado ao redor</li>
                  <li>â€¢ Tamanho de 0,5-2cm</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">ProgressÃ£o da DoenÃ§a:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>â€¢ Inicia nas folhas inferiores</li>
                  <li>â€¢ CoalescÃªncia das manchas</li>
                  <li>â€¢ Secamento das folhas</li>
                  <li>â€¢ Pode afetar panÃ­culas</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">CondiÃ§Ãµes FavorÃ¡veis</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Fatores ClimÃ¡ticos:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>â€¢ Temperatura entre 25-30Â°C</li>
                  <li>â€¢ Umidade relativa alta (&gt;80%)</li>
                  <li>â€¢ Molhamento foliar prolongado</li>
                  <li>â€¢ Chuvas frequentes</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Fatores Agravantes:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>â€¢ DeficiÃªncia nutricional</li>
                  <li>â€¢ Plantio adensado</li>
                  <li>â€¢ Variedades suscetÃ­veis</li>
                  <li>â€¢ Estresse da planta</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Impacto na Cultura do Arroz</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Danos Diretos:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>â€¢ ReduÃ§Ã£o da Ã¡rea fotossintÃ©tica</li>
                <li>â€¢ Morte prematura das folhas</li>
                <li>â€¢ ReduÃ§Ã£o do enchimento dos grÃ£os</li>
                <li>â€¢ Quebra de colmos</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Perdas EconÃ´micas:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>â€¢ ReduÃ§Ã£o de 10-50% na produÃ§Ã£o</li>
                <li>â€¢ DiminuiÃ§Ã£o da qualidade dos grÃ£os</li>
                <li>â€¢ Aumento dos custos de controle</li>
                <li>â€¢ ReduÃ§Ã£o do valor comercial</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Ciclo da DoenÃ§a</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-xs font-semibold text-blue-600">1</span>
              </div>
              <h4 className="font-medium text-gray-800">InfecÃ§Ã£o</h4>
              <p className="text-sm text-gray-600">Esporos germinam</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-xs font-semibold text-blue-600">2</span>
              </div>
              <h4 className="font-medium text-gray-800">IncubaÃ§Ã£o</h4>
              <p className="text-sm text-gray-600">3-7 dias</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-xs font-semibold text-blue-600">3</span>
              </div>
              <h4 className="font-medium text-gray-800">Sintomas</h4>
              <p className="text-sm text-gray-600">Manchas aparecem</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-xs font-semibold text-blue-600">4</span>
              </div>
              <h4 className="font-medium text-gray-800">EsporulaÃ§Ã£o</h4>
              <p className="text-sm text-gray-600">Novos esporos</p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">MÃ©todos de Controle</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-green-700 mb-3">Controle Preventivo:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>â€¢ Variedades resistentes</li>
                <li>â€¢ Sementes sadias</li>
                <li>â€¢ RotaÃ§Ã£o de culturas</li>
                <li>â€¢ EspaÃ§amento adequado</li>
                <li>â€¢ AdubaÃ§Ã£o equilibrada</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-orange-700 mb-3">Controle QuÃ­mico:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>â€¢ Fungicidas preventivos</li>
                <li>â€¢ Tratamento de sementes</li>
                <li>â€¢ AplicaÃ§Ãµes foliares</li>
                <li>â€¢ RotaÃ§Ã£o de princÃ­pios ativos</li>
                <li>â€¢ Monitoramento da resistÃªncia</li>
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
                <li>â€¢ Drenagem adequada</li>
                <li>â€¢ Controle da irrigaÃ§Ã£o</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Manejo Integrado:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>â€¢ Plantio em Ã©poca adequada</li>
                <li>â€¢ NutriÃ§Ã£o balanceada</li>
                <li>â€¢ EliminaÃ§Ã£o de restos culturais</li>
                <li>â€¢ Variedades adaptadas</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">DoenÃ§as Relacionadas</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link 
              href="/pragas/fusariose" 
              className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
            >
              <h3 className="font-medium text-gray-900">Fusariose</h3>
              <p className="text-sm text-gray-600 mt-1">Fusarium spp.</p>
            </Link>
            <Link 
              href="/pragas/antracnose" 
              className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
            >
              <h3 className="font-medium text-gray-900">Antracnose</h3>
              <p className="text-sm text-gray-600 mt-1">Colletotrichum spp.</p>
            </Link>
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

