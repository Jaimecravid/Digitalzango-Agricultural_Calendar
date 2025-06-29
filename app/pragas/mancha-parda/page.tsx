// app/pragas/mancha-parda/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Zap, Calendar, MapPin, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mancha-parda - Controle e Prevenção | Digitalzango',
  description: 'Guia completo sobre mancha-parda em Angola: identificação, controle e prevenção de Bipolaris oryzae no arroz.',
  keywords: 'mancha-parda, Bipolaris oryzae, doença arroz, manchas foliares, Angola, Digitalzango'
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
              <span>Época chuvosa</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Regiões arrozeiras</span>
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
                  <li>• Manchas ovais de cor parda</li>
                  <li>• Centro acinzentado</li>
                  <li>• Halo amarelado ao redor</li>
                  <li>• Tamanho de 0,5-2cm</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Progressão da Doença:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Inicia nas folhas inferiores</li>
                  <li>• Coalescência das manchas</li>
                  <li>• Secamento das folhas</li>
                  <li>• Pode afetar panículas</li>
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
                  <li>• Umidade relativa alta (>80%)</li>
                  <li>• Molhamento foliar prolongado</li>
                  <li>• Chuvas frequentes</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Fatores Agravantes:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Deficiência nutricional</li>
                  <li>• Plantio adensado</li>
                  <li>• Variedades suscetíveis</li>
                  <li>• Estresse da planta</li>
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
                <li>• Redução da área fotossintética</li>
                <li>• Morte prematura das folhas</li>
                <li>• Redução do enchimento dos grãos</li>
                <li>• Quebra de colmos</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Perdas Econômicas:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Redução de 10-50% na produção</li>
                <li>• Diminuição da qualidade dos grãos</li>
                <li>• Aumento dos custos de controle</li>
                <li>• Redução do valor comercial</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Ciclo da Doença</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-xs font-semibold text-blue-600">1</span>
              </div>
              <h4 className="font-medium text-gray-800">Infecção</h4>
              <p className="text-sm text-gray-600">Esporos germinam</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-xs font-semibold text-blue-600">2</span>
              </div>
              <h4 className="font-medium text-gray-800">Incubação</h4>
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
              <h4 className="font-medium text-gray-800">Esporulação</h4>
              <p className="text-sm text-gray-600">Novos esporos</p>
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
                <li>• Sementes sadias</li>
                <li>• Rotação de culturas</li>
                <li>• Espaçamento adequado</li>
                <li>• Adubação equilibrada</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-orange-700 mb-3">Controle Químico:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Fungicidas preventivos</li>
                <li>• Tratamento de sementes</li>
                <li>• Aplicações foliares</li>
                <li>• Rotação de princípios ativos</li>
                <li>• Monitoramento da resistência</li>
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
                <li>• Drenagem adequada</li>
                <li>• Controle da irrigação</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Manejo Integrado:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Plantio em época adequada</li>
                <li>• Nutrição balanceada</li>
                <li>• Eliminação de restos culturais</li>
                <li>• Variedades adaptadas</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Doenças Relacionadas</h2>
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
              <h3 className="font-medium text-gray-900">Outras Doenças</h3>
              <p className="text-sm text-gray-600 mt-1">Ver categoria completa</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
