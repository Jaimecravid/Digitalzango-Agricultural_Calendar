// app/pragas/podridao-radicular/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Zap, Calendar, MapPin, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Podridão-radicular - Controle e Prevenção | Digitalzango',
  description: 'Guia completo sobre podridão-radicular em Angola: identificação, controle e prevenção de Pythium spp. em culturas.',
  keywords: 'podridão-radicular, Pythium, doença fúngica, hortaliças, feijão, milho, Angola, Digitalzango'
}

export default function PodridaoRadicularPage() {
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
              <Zap className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Podridão-radicular</h1>
              <p className="text-gray-600 mt-1">Pythium spp.</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Solo encharcado</span>
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
                <h3 className="font-medium text-gray-800 mb-2">Sintomas Iniciais:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Murcha e amarelecimento das folhas inferiores</li>
                  <li>• Apodrecimento das raízes</li>
                  <li>• Presença de micélio branco</li>
                  <li>• Crescimento reduzido</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Sintomas Avançados:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Morte das plantas</li>
                  <li>• Raízes moles e escuras</li>
                  <li>• Redução da produtividade</li>
                  <li>• Apodrecimento do colo</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Condições Favoráveis</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Fatores Ambientais:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Solo encharcado e mal drenado</li>
                  <li>• Temperaturas amenas</li>
                  <li>• Alta umidade</li>
                  <li>• Presença de matéria orgânica em decomposição</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Fatores Agravantes:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Plantio em solo compactado</li>
                  <li>• Excesso de irrigação</li>
                  <li>• Uso de sementes contaminadas</li>
                  <li>• Falta de rotação de culturas</li>
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
                <li>• Alface</li>
                <li>• Feijão</li>
                <li>• Milho</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Frutíferas</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Banana</li>
                <li>• Abacaxi</li>
                <li>• Mamão</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Cereais</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Arroz</li>
                <li>• Milho</li>
                <li>• Sorgo</li>
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
                <li>• Drenagem adequada do solo</li>
                <li>• Uso de sementes sadias</li>
                <li>• Rotação de culturas</li>
                <li>• Evitar plantio em solo encharcado</li>
                <li>• Desinfecção do solo</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-orange-700 mb-3">Controle Químico:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Fungicidas específicos</li>
                <li>• Aplicações preventivas</li>
                <li>• Tratamento de sementes</li>
                <li>• Fumigação do solo</li>
                <li>• Monitoramento da resistência</li>
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
                <li>• Melhorar drenagem</li>
                <li>• Correção do pH</li>
                <li>• Evitar compactação</li>
                <li>• Uso de matéria orgânica</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Práticas Culturais:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Plantio em época adequada</li>
                <li>• Eliminação de restos culturais</li>
                <li>• Quarentena de mudas</li>
                <li>• Monitoramento constante</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Doenças Relacionadas</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link 
              href="/pragas/fusariose" 
              className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
            >
              <h3 className="font-medium text-gray-900">Fusariose</h3>
              <p className="text-sm text-gray-600 mt-1">Fusarium spp.</p>
            </Link>
            <Link 
              href="/pragas/antracnose" 
              className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
            >
              <h3 className="font-medium text-gray-900">Antracnose</h3>
              <p className="text-sm text-gray-600 mt-1">Colletotrichum spp.</p>
            </Link>
            <Link 
              href="/pragas/doencas" 
              className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
            >
              <h3 className="font-medium text-gray-900">Outras Doenças</h3>
              <p className="text-sm text-gray-600 mt-1">Ver categoria completa</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
