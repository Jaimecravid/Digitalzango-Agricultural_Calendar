// app/pragas/mildio/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Zap, Calendar, MapPin, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Míldio - Controle e Prevenção | Digitalzango',
  description: 'Guia completo sobre míldio em Angola: identificação, controle e prevenção de Peronospora spp. em culturas.',
  keywords: 'míldio, Peronospora, doença fúngica, cebola, alface, Angola, Digitalzango'
}

export default function MildioPage() {
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
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <Zap className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Míldio</h1>
              <p className="text-gray-600 mt-1">Peronospora spp.</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Alta umidade</span>
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
                  <li>• Manchas amareladas na face superior</li>
                  <li>• Penugem branca na face inferior</li>
                  <li>• Formato angular das lesões</li>
                  <li>• Necrose e murcha das folhas</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Progressão da Doença:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Inicia nas folhas mais velhas</li>
                  <li>• Espalha-se rapidamente</li>
                  <li>• Pode afetar caules e frutos</li>
                  <li>• Morte da planta em casos severos</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Condições Favoráveis</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Clima Ideal para o Fungo:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Temperatura entre 15-20°C</li>
                  <li>• Umidade relativa acima de 85%</li>
                  <li>• Molhamento foliar prolongado</li>
                  <li>• Ventos fracos</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Fatores Agravantes:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Plantio muito adensado</li>
                  <li>• Irrigação por aspersão</li>
                  <li>• Má ventilação</li>
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
              <h3 className="font-medium text-gray-900 mb-2">Hortaliças Folhosas</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Alface</li>
                <li>• Espinafre</li>
                <li>• Couve</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Bulbosas</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Cebola</li>
                <li>• Alho</li>
                <li>• Cebolinha</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Frutíferas</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Uva</li>
                <li>• Melão</li>
                <li>• Pepino</li>
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
                <li>• Destruição do tecido foliar</li>
                <li>• Redução da área fotossintética</li>
                <li>• Enfraquecimento das plantas</li>
                <li>• Morte de mudas jovens</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Perdas Econômicas:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Redução de 40-100% na produção</li>
                <li>• Perda total em condições favoráveis</li>
                <li>• Depreciação da qualidade</li>
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
                <li>• Espaçamento adequado</li>
                <li>• Rotação de culturas</li>
                <li>• Eliminação de restos culturais</li>
                <li>• Drenagem eficiente</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-orange-700 mb-3">Controle Químico:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Fungicidas sistêmicos</li>
                <li>• Fungicidas cúpricos</li>
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
                <li>• Evitar irrigação noturna</li>
                <li>• Melhorar ventilação</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Manejo Cultural:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Plantio em época seca</li>
                <li>• Irrigação localizada</li>
                <li>• Poda para ventilação</li>
                <li>• Adubação equilibrada</li>
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
              href="/pragas/ferrugem-do-cafe" 
              className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
            >
              <h3 className="font-medium text-gray-900">Ferrugem-do-café</h3>
              <p className="text-sm text-gray-600 mt-1">Hemileia vastatrix</p>
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
