// app/pragas/percevejo/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Bug, Calendar, MapPin, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Percevejo - Controle e Prevenção | Digitalzango',
  description: 'Guia completo sobre percevejo em Angola: identificação, controle e prevenção de Nezara viridula em culturas.',
  keywords: 'percevejo, Nezara viridula, percevejo verde, soja, feijão, Angola, Digitalzango'
}

export default function PercevejoPage() {
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
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
              <Bug className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Percevejo</h1>
              <p className="text-gray-600 mt-1">Nezara viridula</p>
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
                <h3 className="font-medium text-gray-800 mb-2">Características do Adulto:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Inseto de 12-17mm de comprimento</li>
                  <li>• Cor verde-clara a escura</li>
                  <li>• Formato pentagonal (escudo)</li>
                  <li>• Antenas com 5 segmentos</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Ninfas:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Menores que os adultos</li>
                  <li>• Coloração variável</li>
                  <li>• Sem asas desenvolvidas</li>
                  <li>• Agrupam-se nas vagens</li>
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
                  <li>• Sucção de grãos em formação</li>
                  <li>• Perfuração de vagens</li>
                  <li>• Redução do peso dos grãos</li>
                  <li>• Grãos chochos e deformados</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Danos Indiretos:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Entrada para fungos</li>
                  <li>• Transmissão de doenças</li>
                  <li>• Redução da qualidade</li>
                  <li>• Depreciação comercial</li>
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
                <li>• Soja</li>
                <li>• Feijão</li>
                <li>• Amendoim</li>
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
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Hortaliças</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Tomate</li>
                <li>• Pimentão</li>
                <li>• Quiabo</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Ciclo de Vida</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-xs font-semibold text-blue-600">1</span>
              </div>
              <h4 className="font-medium text-gray-800">Ovo</h4>
              <p className="text-sm text-gray-600">3-5 dias</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-xs font-semibold text-blue-600">2</span>
              </div>
              <h4 className="font-medium text-gray-800">Ninfa</h4>
              <p className="text-sm text-gray-600">15-20 dias</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-xs font-semibold text-blue-600">3</span>
              </div>
              <h4 className="font-medium text-gray-800">Adulto</h4>
              <p className="text-sm text-gray-600">30-45 dias</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-xs font-semibold text-blue-600">4</span>
              </div>
              <h4 className="font-medium text-gray-800">Ciclo Total</h4>
              <p className="text-sm text-gray-600">50-70 dias</p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Métodos de Controle</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-blue-700 mb-3">Controle Biológico:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Trissolcus basalis (parasitoide)</li>
                <li>• Telenomus podisi</li>
                <li>• Predadores naturais</li>
                <li>• Fungos entomopatogênicos</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-green-700 mb-3">Controle Cultural:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Monitoramento com armadilhas</li>
                <li>• Eliminação de plantas daninhas</li>
                <li>• Colheita no ponto adequado</li>
                <li>• Rotação de culturas</li>
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
                <li>• Monitoramento semanal</li>
                <li>• Inspeção das vagens</li>
                <li>• Controle no início da infestação</li>
                <li>• Preservar inimigos naturais</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Manejo Integrado:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Plantio em época adequada</li>
                <li>• Adubação equilibrada</li>
                <li>• Controle seletivo</li>
                <li>• Colheita antecipada</li>
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
              href="/pragas/trips" 
              className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
            >
              <h3 className="font-medium text-gray-900">Trips</h3>
              <p className="text-sm text-gray-600 mt-1">Thysanoptera</p>
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
