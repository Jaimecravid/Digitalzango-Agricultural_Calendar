// app/pragas/amendoim-bravo/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Leaf, Calendar, MapPin, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Amendoim-bravo - Controle e Prevenção | Digitalzango',
  description: 'Guia completo sobre amendoim-bravo em Angola: identificação, controle e prevenção de Euphorbia heterophylla em culturas.',
  keywords: 'amendoim-bravo, Euphorbia heterophylla, erva daninha, soja, milho, algodão, Angola, Digitalzango'
}

export default function AmendoimBravoPage() {
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
              <Leaf className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Amendoim-bravo</h1>
              <p className="text-gray-600 mt-1">Euphorbia heterophylla</p>
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
                <h3 className="font-medium text-gray-800 mb-2">Características:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Planta anual de 30-120cm</li>
                  <li>• Folhas variáveis em forma</li>
                  <li>• Látex branco irritante</li>
                  <li>• Inflorescência terminal</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Resistência:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Resistente a herbicidas</li>
                  <li>• Tolerante à seca</li>
                  <li>• Adaptação a diferentes solos</li>
                  <li>• Crescimento rápido</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Competição e Danos</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Competição Agressiva:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Competição intensa por luz</li>
                  <li>• Absorção eficiente de nutrientes</li>
                  <li>• Competição por água</li>
                  <li>• Alelopatia</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Perdas Econômicas:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Redução de 30-80% na produção</li>
                  <li>• Dificuldade na colheita</li>
                  <li>• Aumento dos custos de controle</li>
                  <li>• Resistência crescente</li>
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
              <h3 className="font-medium text-gray-900 mb-2">Outras Culturas</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Algodão</li>
                <li>• Café</li>
                <li>• Cana-de-açúcar</li>
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
                <li>• Rotação de culturas</li>
                <li>• Sementes certificadas</li>
                <li>• Limpeza de equipamentos</li>
                <li>• Manejo integrado</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-orange-700 mb-3">Controle Mecânico:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Capina antes da floração</li>
                <li>• Arranquio cuidadoso</li>
                <li>• Cultivo superficial</li>
                <li>• Cobertura do solo</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recomendações para Angola</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Manejo da Resistência:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Rotação de herbicidas</li>
                <li>• Controle integrado</li>
                <li>• Monitoramento da resistência</li>
                <li>• Controle precoce</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Segurança:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Cuidado com o látex</li>
                <li>• Uso de equipamentos de proteção</li>
                <li>• Evitar contato com pele</li>
                <li>• Lavagem após manuseio</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Ervas Daninhas Relacionadas</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link 
              href="/pragas/trapoeraba" 
              className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
            >
              <h3 className="font-medium text-gray-900">Trapoeraba</h3>
              <p className="text-sm text-gray-600 mt-1">Commelina benghalensis</p>
            </Link>
            <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
              <h3 className="font-medium text-gray-500">Capim-pé-de-galinha</h3>
              <p className="text-sm text-gray-400 mt-1">Em breve</p>
            </div>
            <Link 
              href="/pragas/ervas-daninhas" 
              className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
            >
              <h3 className="font-medium text-gray-900">Outras Ervas Daninhas</h3>
              <p className="text-sm text-gray-600 mt-1">Ver categoria completa</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
