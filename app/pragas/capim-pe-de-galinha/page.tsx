// app/pragas/capim-pe-de-galinha/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Leaf, Calendar, MapPin, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Capim-pé-de-galinha - Controle e Prevenção | Digitalzango',
  description: 'Guia completo sobre capim-pé-de-galinha em Angola: identificação, controle e prevenção de Eleusine indica em culturas.',
  keywords: 'capim-pé-de-galinha, Eleusine indica, gramínea invasora, milho, arroz, hortaliças, Angola, Digitalzango'
}

export default function CapimPeDeGalinhaPage() {
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
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
              <Leaf className="w-6 h-6 text-gray-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Capim-pé-de-galinha</h1>
              <p className="text-gray-600 mt-1">Eleusine indica</p>
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
                  <li>• Gramínea anual de 10-60cm</li>
                  <li>• Folhas lineares achatadas</li>
                  <li>• Inflorescência digitada</li>
                  <li>• Sistema radicular fibroso</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Habitat:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Solos compactados</li>
                  <li>• Áreas pisoteadas</li>
                  <li>• Bordas de cultivos</li>
                  <li>• Locais úmidos</li>
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
                  <li>• Absorção de água</li>
                  <li>• Ocupação de espaço</li>
                  <li>• Crescimento em touceiras</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Problemas:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Hospedeira de pragas</li>
                  <li>• Dificulta operações</li>
                  <li>• Redução da qualidade</li>
                  <li>• Persistência no campo</li>
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
                <li>• Arroz</li>
                <li>• Sorgo</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Hortaliças</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Tomate</li>
                <li>• Alface</li>
                <li>• Cebola</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Outras Culturas</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Feijão</li>
                <li>• Café</li>
                <li>• Algodão</li>
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
                <li>• Descompactação do solo</li>
                <li>• Drenagem adequada</li>
                <li>• Rotação de culturas</li>
                <li>• Cobertura do solo</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-orange-700 mb-3">Controle Mecânico:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Capina antes da floração</li>
                <li>• Cultivo superficial</li>
                <li>• Arranquio manual</li>
                <li>• Roçagem frequente</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recomendações para Angola</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Manejo do Solo:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Evitar compactação</li>
                <li>• Melhorar estrutura do solo</li>
                <li>• Controlar trânsito</li>
                <li>• Drenagem eficiente</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Manejo Integrado:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Plantio em época adequada</li>
                <li>• Adensamento da cultura</li>
                <li>• Adubação localizada</li>
                <li>• Monitoramento constante</li>
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
            <Link 
              href="/pragas/capim-marmelada" 
              className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
            >
              <h3 className="font-medium text-gray-900">Capim-marmelada</h3>
              <p className="text-sm text-gray-600 mt-1">Brachiaria plantaginea</p>
            </Link>
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
