// app/pragas/rato-domestico/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Zap, Calendar, MapPin, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rato-doméstico - Controle e Prevenção | Digitalzango',
  description: 'Guia completo sobre rato-doméstico em Angola: identificação, controle e prevenção de roedores em armazéns e residências.',
  keywords: 'rato-doméstico, roedor, armazém, grãos armazenados, Angola, Digitalzango'
}

export default function RatoDomesticoPage() {
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
              <Zap className="w-6 h-6 text-gray-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Rato-doméstico</h1>
              <p className="text-gray-600 mt-1">Mus musculus</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Todo o ano</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Armazéns e residências</span>
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
                  <li>• Tamanho de 6-10cm (corpo)</li>
                  <li>• Cauda longa e fina</li>
                  <li>• Pelagem cinza-escura</li>
                  <li>• Orelhas grandes e arredondadas</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Comportamento:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Ativo durante a noite</li>
                  <li>• Excelente escalador</li>
                  <li>• Reprodução rápida</li>
                  <li>• Vive próximo ao homem</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Danos Causados</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Danos em Armazéns:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Consumo de grãos armazenados</li>
                  <li>• Contaminação com urina e fezes</li>
                  <li>• Roer embalagens</li>
                  <li>• Danos a equipamentos</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Problemas Sanitários:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Transmissão de doenças</li>
                  <li>• Contaminação de alimentos</li>
                  <li>• Odores desagradáveis</li>
                  <li>• Problemas de higiene</li>
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
                <li>• Grãos de milho</li>
                <li>• Arroz armazenado</li>
                <li>• Feijão ensacado</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Residências</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Cozinhas</li>
                <li>• Despensas</li>
                <li>• Sótãos</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Estabelecimentos</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Mercados</li>
                <li>• Padarias</li>
                <li>• Restaurantes</li>
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
                <li>• Vedação de aberturas</li>
                <li>• Armazenamento em recipientes fechados</li>
                <li>• Limpeza constante</li>
                <li>• Eliminação de abrigos</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-orange-700 mb-3">Controle Direto:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Armadilhas adesivas</li>
                <li>• Ratoeiras mecânicas</li>
                <li>• Iscas rodenticidas</li>
                <li>• Controle profissional</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recomendações para Angola</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Armazenamento Seguro:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Silos metálicos</li>
                <li>• Recipientes herméticos</li>
                <li>• Elevação do piso</li>
                <li>• Inspeção regular</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Manejo Sanitário:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Limpeza diária</li>
                <li>• Remoção de restos alimentares</li>
                <li>• Desinfecção periódica</li>
                <li>• Controle de acesso</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Roedores Relacionados</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link 
              href="/pragas/rato-do-campo" 
              className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
            >
              <h3 className="font-medium text-gray-900">Rato-do-campo</h3>
              <p className="text-sm text-gray-600 mt-1">Roedores silvestres</p>
            </Link>
            <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
              <h3 className="font-medium text-gray-500">Ratazana</h3>
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
