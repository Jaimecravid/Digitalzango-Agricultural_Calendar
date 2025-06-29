// app/pragas/maria-pretinha/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Leaf, Calendar, MapPin, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Maria-pretinha - Controle e Prevenção | Digitalzango',
  description: 'Guia completo sobre maria-pretinha em Angola: identificação, controle e prevenção de Solanum americanum em culturas.',
  keywords: 'maria-pretinha, Solanum americanum, erva daninha, tomate, batata, Angola, Digitalzango'
}

export default function MariaPretinhaPage() {
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
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
              <Leaf className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Maria-pretinha</h1>
              <p className="text-gray-600 mt-1">Solanum americanum</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Todo o ano</span>
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
                  <li>• Planta anual de 30-80cm</li>
                  <li>• Folhas ovais com bordas dentadas</li>
                  <li>• Flores brancas pequenas</li>
                  <li>• Frutos pequenos pretos brilhantes</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Habitat Preferido:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Solos ricos em matéria orgânica</li>
                  <li>• Áreas sombreadas</li>
                  <li>• Locais úmidos</li>
                  <li>• Bordas de cultivos</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Problemas Causados</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Hospedeira de Pragas:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Mosca-branca</li>
                  <li>• Pulgões</li>
                  <li>• Trips</li>
                  <li>• Vírus do mosaico</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Competição:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Competição por nutrientes</li>
                  <li>• Sombreamento de plantas jovens</li>
                  <li>• Alelopatia</li>
                  <li>• Redução da qualidade</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Culturas Mais Afetadas em Angola</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Solanáceas</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Tomate</li>
                <li>• Batata</li>
                <li>• Pimentão</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Hortaliças</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Alface</li>
                <li>• Repolho</li>
                <li>• Cenoura</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Outras Culturas</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Feijão</li>
                <li>• Milho</li>
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
                <li>• Eliminação antes da floração</li>
                <li>• Limpeza de bordas</li>
                <li>• Rotação de culturas</li>
                <li>• Cobertura do solo</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-orange-700 mb-3">Controle Mecânico:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Capina manual</li>
                <li>• Roçagem frequente</li>
                <li>• Arranquio com raiz</li>
                <li>• Cultivo superficial</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recomendações para Angola</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Controle de Pragas:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Eliminar antes de hospedar pragas</li>
                <li>• Monitorar vírus transmitidos</li>
                <li>• Controle integrado</li>
                <li>• Quarentena de áreas infestadas</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Manejo Sanitário:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Limpeza de ferramentas</li>
                <li>• Eliminação de restos</li>
                <li>• Controle em viveiros</li>
                <li>• Inspeção regular</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Ervas Daninhas Relacionadas</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link 
              href="/pragas/picao-preto" 
              className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
            >
              <h3 className="font-medium text-gray-900">Picão-preto</h3>
              <p className="text-sm text-gray-600 mt-1">Bidens pilosa</p>
            </Link>
            <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
              <h3 className="font-medium text-gray-500">Caruru</h3>
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
