// app/pragas/ratazana/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Zap, Calendar, MapPin, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ratazana - Controle e Prevenção | Digitalzango',
  description: 'Guia completo sobre ratazana em Angola: identificação, controle e prevenção de Rattus norvegicus em culturas e armazéns.',
  keywords: 'ratazana, Rattus norvegicus, roedor, armazém, grãos, Angola, Digitalzango'
}

export default function RatazanaPage() {
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
              <Zap className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Ratazana</h1>
              <p className="text-gray-600 mt-1">Rattus norvegicus</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Todo o ano</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Áreas urbanas e rurais</span>
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
                  <li>• Tamanho de 18-25cm (corpo)</li>
                  <li>• Cauda mais curta que o corpo</li>
                  <li>• Pelagem marrom-acinzentada</li>
                  <li>• Corpo robusto e pesado</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Comportamento:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Ativa principalmente à noite</li>
                  <li>• Excelente nadadora</li>
                  <li>• Vive em colônias</li>
                  <li>• Constrói tocas no solo</li>
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
                  <li>• Consumo de grandes quantidades</li>
                  <li>• Contaminação de grãos</li>
                  <li>• Danos estruturais</li>
                  <li>• Roer materiais diversos</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Riscos Sanitários:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Transmissão de doenças graves</li>
                  <li>• Contaminação de alimentos</li>
                  <li>• Problemas de saúde pública</li>
                  <li>• Parasitas e pulgas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Locais de Infestação em Angola</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Armazéns</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Silos de grãos</li>
                <li>• Depósitos de cereais</li>
                <li>• Armazéns portuários</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Áreas Urbanas</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Esgotos</li>
                <li>• Lixões</li>
                <li>• Porões</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Áreas Rurais</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Currais</li>
                <li>• Galinheiros</li>
                <li>• Depósitos rurais</li>
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
                <li>• Vedação de aberturas grandes</li>
                <li>• Eliminação de fontes de água</li>
                <li>• Remoção de abrigos</li>
                <li>• Saneamento rigoroso</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-red-700 mb-3">Controle Intensivo:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Iscas rodenticidas potentes</li>
                <li>• Armadilhas de captura</li>
                <li>• Controle profissional</li>
                <li>• Monitoramento contínuo</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recomendações para Angola</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Controle Urbano:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Programa municipal</li>
                <li>• Controle de lixo</li>
                <li>• Manutenção de esgotos</li>
                <li>• Educação sanitária</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Segurança Alimentar:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Proteção de armazéns</li>
                <li>• Inspeção regular</li>
                <li>• Controle de qualidade</li>
                <li>• Descarte seguro</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Roedores Relacionados</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link 
              href="/pragas/rato-domestico" 
              className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
            >
              <h3 className="font-medium text-gray-900">Rato-doméstico</h3>
              <p className="text-sm text-gray-600 mt-1">Mus musculus</p>
            </Link>
            <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
              <h3 className="font-medium text-gray-500">Esquilo-terrestre</h3>
              <p className="text-sm text-gray-400 mt-1">Em breve</p>
            </div>
            <Link 
              href="/pragas/roedores" 
              className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
            >
              <h3 className="font-medium text-gray-900">Outros Roedores</h3>
              <p className="text-sm text-gray-600 mt-1">Ver categoria completa</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
