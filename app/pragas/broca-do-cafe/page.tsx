// app/pragas/broca-do-cafe/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Bug } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Broca-do-café - Controle e Prevenção | Digitalzango',
  description: 'Guia completo sobre broca-do-café em Angola.',
  keywords: 'broca café, Hypothenemus hampei, praga café, Angola, Digitalzango'
}

export default function BrocaDoCafePage() {
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
              <h1 className="text-3xl font-bold text-gray-900">Broca-do-café</h1>
              <p className="text-gray-600 mt-1">Hypothenemus hampei</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Sobre a Broca-do-café</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              A broca-do-café (Hypothenemus hampei) é considerada a principal praga do café em Angola e no mundo.
            </p>
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Características:</h3>
              <ul className="space-y-1 text-gray-600">
                <li>• Besouro pequeno de 1,5-2mm</li>
                <li>• Cor marrom-escura a preta</li>
                <li>• Perfura os grãos de café</li>
                <li>• Ativa durante todo o ano</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Danos:</h3>
              <ul className="space-y-1 text-gray-600">
                <li>• Redução da qualidade do café</li>
                <li>• Perdas de até 80% da produção</li>
                <li>• Depreciação do valor comercial</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Pragas Relacionadas</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link 
              href="/pragas/insetos" 
              className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
            >
              <h3 className="font-medium text-gray-900">Ver Outros Insetos</h3>
              <p className="text-sm text-gray-600 mt-1">Categoria completa</p>
            </Link>
            <Link 
              href="/pragas/lagarta-do-cartucho" 
              className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
            >
              <h3 className="font-medium text-gray-900">Lagarta-do-cartucho</h3>
              <p className="text-sm text-gray-600 mt-1">Outra praga importante</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
