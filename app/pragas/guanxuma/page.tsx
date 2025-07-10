// app/pragas/guanxuma/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Leaf, Calendar, MapPin, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Guanxuma - Controle e Prevenção | Digitalzango',
  description: 'Guia completo sobre guanxuma em Angola: identificação, controle e prevenção de Sida rhombifolia em culturas.',
  keywords: 'guanxuma, Sida rhombifolia, erva daninha, algodão, soja, Angola, Digitalzango'
}

export default function GuanxumaPage() {
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
              <Leaf className="w-6 h-6 text-brown-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Guanxuma</h1>
              <p className="text-gray-600 mt-1">Sida rhombifolia</p>
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
                <h3 className="font-medium text-gray-800 mb-2">Características:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Planta perene de 50-150cm</li>
                  <li>• Folhas romboidais serrilhadas</li>
                  <li>• Caule lenhoso na base</li>
                  <li>• Flores amarelas pequenas</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Sistema Radicular:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Raiz pivotante profunda</li>
                  <li>• Sistema radicular resistente</li>
                  <li>• Rebrota após corte</li>
                  <li>• Tolerante à seca</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Competição e Danos</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Competição:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Competição por nutrientes</li>
                  <li>• Absorção profunda de água</li>
                  <li>• Sombreamento das culturas</li>
                  <li>• Persistência no campo</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Problemas Específicos:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Dificuldade na colheita mecânica</li>
                  <li>• Hospedeira de pragas</li>
                  <li>• Redução da qualidade da fibra</li>
                  <li>• Resistente ao controle</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Culturas Mais Afetadas em Angola</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Fibras</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Algodão</li>
                <li>• Juta</li>
                <li>• Sisal</li>
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
              <h3 className="font-medium text-gray-900 mb-2">Cereais</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Milho</li>
                <li>• Sorgo</li>
                <li>• Arroz</li>
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
                <li>• Limpeza de equipamentos</li>
                <li>• Sementes certificadas</li>
                <li>• Rotação de culturas</li>
                <li>• Competição com culturas</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-orange-700 mb-3">Controle Mecânico:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Arranquio com raiz</li>
                <li>• Corte repetido</li>
                <li>• Aração profunda</li>
                <li>• Capina frequente</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recomendações para Angola</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Controle Persistente:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Controle antes da floração</li>
                <li>• Remoção completa da raiz</li>
                <li>• Monitoramento de rebrotas</li>
                <li>• Controle repetido</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Manejo Integrado:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Culturas competitivas</li>
                <li>• Adensamento do plantio</li>
                <li>• Cobertura do solo</li>
                <li>• Controle químico seletivo</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Ervas Daninhas Relacionadas</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link 
              href="/pragas/caruru" 
              className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
            >
              <h3 className="font-medium text-gray-900">Caruru</h3>
              <p className="text-sm text-gray-600 mt-1">Amaranthus viridis</p>
            </Link>
            <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
              <h3 className="font-medium text-gray-500">Trapoeraba</h3>
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
