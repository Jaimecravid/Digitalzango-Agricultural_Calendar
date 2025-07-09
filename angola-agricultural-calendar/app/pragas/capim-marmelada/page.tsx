// app/pragas/capim-marmelada/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Leaf, Calendar, MapPin, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Capim-marmelada - Controle e Prevenção | Digitalzango',
  description: 'Guia completo sobre capim-marmelada em Angola: identificação, controle e prevenção de Brachiaria plantaginea em culturas.',
  keywords: 'capim-marmelada, Brachiaria plantaginea, gramínea invasora, milho, soja, Angola, Digitalzango'
}

export default function CapimMarmeladaPage() {
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
              <Leaf className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Capim-marmelada</h1>
              <p className="text-gray-600 mt-1">Brachiaria plantaginea</p>
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
                  <li>• Gramínea anual de 30-80cm</li>
                  <li>• Folhas largas e planas</li>
                  <li>• Colmos decumbentes</li>
                  <li>• Inflorescência em panícula</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Propagação:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Sementes dispersas pelo vento</li>
                  <li>• Germinação rápida</li>
                  <li>• Crescimento agressivo</li>
                  <li>• Formação de touceiras</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Competição e Danos</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Competição Intensa:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Absorção eficiente de nutrientes</li>
                  <li>• Competição por água</li>
                  <li>• Sombreamento das culturas</li>
                  <li>• Alelopatia</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Perdas Econômicas:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Redução de 40-80% na produção</li>
                  <li>• Dificuldade na colheita mecânica</li>
                  <li>• Aumento dos custos de controle</li>
                  <li>• Contaminação de sementes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Culturas Mais Afetadas em Angola</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Cereais</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Milho</li>
                <li>• Sorgo</li>
                <li>• Arroz</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Leguminosas</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Soja</li>
                <li>• Feijão</li>
                <li>• Amendoim</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Outras Culturas</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Algodão</li>
                <li>• Cana-de-açúcar</li>
                <li>• Café</li>
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
                <li>• Sementes certificadas</li>
                <li>• Limpeza de equipamentos</li>
                <li>• Rotação de culturas</li>
                <li>• Plantio direto com cobertura</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-orange-700 mb-3">Controle Mecânico:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Capina antes da floração</li>
                <li>• Cultivo superficial</li>
                <li>• Roçagem frequente</li>
                <li>• Aração profunda</li>
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
                <li>• Controle precoce</li>
                <li>• Evitar formação de sementes</li>
                <li>• Capinas frequentes</li>
                <li>• Monitoramento intensivo</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Manejo Integrado:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Culturas competitivas</li>
                <li>• Adensamento do plantio</li>
                <li>• Adubação localizada</li>
                <li>• Cobertura do solo</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Ervas Daninhas Relacionadas</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link 
              href="/pragas/capim-coloniao" 
              className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
            >
              <h3 className="font-medium text-gray-900">Capim-colonião</h3>
              <p className="text-sm text-gray-600 mt-1">Panicum maximum</p>
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
