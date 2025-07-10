// app/pragas/picao-preto/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Leaf, Calendar, MapPin, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Picão-preto - Controle e Prevenção | Digitalzango',
  description: 'Guia completo sobre picão-preto em Angola: identificação, controle e prevenção de Bidens pilosa em culturas.',
  keywords: 'picão-preto, Bidens pilosa, erva daninha, hortaliças, feijão, Angola, Digitalzango'
}

export default function PicaoPretoPage() {
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
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
              <Leaf className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Picão-preto</h1>
              <p className="text-gray-600 mt-1">Bidens pilosa</p>
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
                  <li>• Planta anual de 30-150cm</li>
                  <li>• Folhas compostas trifoliadas</li>
                  <li>• Flores pequenas amarelas</li>
                  <li>• Sementes com ganchos aderentes</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Dispersão:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Sementes aderem a animais</li>
                  <li>• Dispersão por roupas e equipamentos</li>
                  <li>• Transporte por água</li>
                  <li>• Germinação rápida</li>
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
                  <li>• Competição por luz</li>
                  <li>• Absorção de nutrientes</li>
                  <li>• Competição por espaço</li>
                  <li>• Crescimento rápido inicial</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Problemas Adicionais:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Hospedeira de pragas</li>
                  <li>• Dificulta operações agrícolas</li>
                  <li>• Redução da qualidade do produto</li>
                  <li>• Aumento dos custos de produção</li>
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
                <li>• Alface</li>
                <li>• Repolho</li>
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
                <li>• Cobertura do solo</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-orange-700 mb-3">Controle Mecânico:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Capina antes da floração</li>
                <li>• Roçagem frequente</li>
                <li>• Cultivo superficial</li>
                <li>• Mulching</li>
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
                <li>• Controle antes da floração</li>
                <li>• Evitar dispersão de sementes</li>
                <li>• Capinas frequentes</li>
                <li>• Monitoramento constante</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Manejo Integrado:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Plantio em época adequada</li>
                <li>• Adensamento da cultura</li>
                <li>• Adubação localizada</li>
                <li>• Controle de pragas hospedeiras</li>
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
              <h3 className="font-medium text-gray-500">Maria-pretinha</h3>
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
