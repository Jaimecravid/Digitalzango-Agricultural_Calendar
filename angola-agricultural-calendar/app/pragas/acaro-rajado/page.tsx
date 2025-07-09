// app/pragas/acaro-rajado/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Bug, Calendar, MapPin, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ácaro-rajado - Controle e Prevenção | Digitalzango',
  description: 'Guia completo sobre ácaro-rajado em Angola: identificação, controle e prevenção de Tetranychus urticae em culturas.',
  keywords: 'ácaro-rajado, Tetranychus urticae, ácaro, tomate, feijão, Angola, Digitalzango'
}

export default function AcaroRajadoPage() {
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
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
              <Bug className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Ácaro-rajado</h1>
              <p className="text-gray-600 mt-1">Tetranychus urticae</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Época seca</span>
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
                <h3 className="font-medium text-gray-800 mb-2">Características:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Ácaros microscópicos (0,5mm)</li>
                  <li>• Cor verde-amarelada com manchas</li>
                  <li>• Oito patas (adultos)</li>
                  <li>• Movimentação rápida</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Sinais de Ataque:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Pontos amarelos nas folhas</li>
                  <li>• Bronzeamento das folhas</li>
                  <li>• Teias finas na planta</li>
                  <li>• Queda prematura das folhas</li>
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
                  <li>• Perfuração das células foliares</li>
                  <li>• Sucção do conteúdo celular</li>
                  <li>• Redução da fotossíntese</li>
                  <li>• Desfolha severa</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Impacto Econômico:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Perdas de 20-60% na produção</li>
                  <li>• Redução da qualidade dos frutos</li>
                  <li>• Aumento dos custos de controle</li>
                  <li>• Morte de plantas jovens</li>
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
                <li>• Pepino</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Leguminosas</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Feijão</li>
                <li>• Soja</li>
                <li>• Amendoim</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Outras Culturas</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Algodão</li>
                <li>• Milho</li>
                <li>• Ornamentais</li>
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
              <p className="text-sm text-gray-600">2-3 dias</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-xs font-semibold text-blue-600">2</span>
              </div>
              <h4 className="font-medium text-gray-800">Larva</h4>
              <p className="text-sm text-gray-600">2-3 dias</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-xs font-semibold text-blue-600">3</span>
              </div>
              <h4 className="font-medium text-gray-800">Ninfas</h4>
              <p className="text-sm text-gray-600">4-5 dias</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-xs font-semibold text-blue-600">4</span>
              </div>
              <h4 className="font-medium text-gray-800">Adulto</h4>
              <p className="text-sm text-gray-600">14-21 dias</p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Métodos de Controle</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-blue-700 mb-3">Controle Biológico:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Ácaros predadores (Phytoseiulus)</li>
                <li>• Joaninhas</li>
                <li>• Crisopídeos</li>
                <li>• Fungos entomopatogênicos</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-green-700 mb-3">Controle Cultural:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Irrigação adequada</li>
                <li>• Eliminação de plantas daninhas</li>
                <li>• Rotação de culturas</li>
                <li>• Adubação equilibrada</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recomendações para Angola</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Época Seca (Crítica):</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Monitoramento intensivo</li>
                <li>• Manter umidade adequada</li>
                <li>• Irrigação por aspersão</li>
                <li>• Evitar estresse hídrico</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Prevenção:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Inspeção da face inferior das folhas</li>
                <li>• Quarentena de mudas</li>
                <li>• Limpeza de estufas</li>
                <li>• Controle de poeira</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Pragas Relacionadas</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link 
              href="/pragas/trips" 
              className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
            >
              <h3 className="font-medium text-gray-900">Trips</h3>
              <p className="text-sm text-gray-600 mt-1">Thysanoptera</p>
            </Link>
            <Link 
              href="/pragas/pulgao" 
              className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
            >
              <h3 className="font-medium text-gray-900">Pulgão</h3>
              <p className="text-sm text-gray-600 mt-1">Aphididae</p>
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
