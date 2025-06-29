// app/pragas/murcha-bacteriana/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Zap, Calendar, MapPin, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Murcha-bacteriana - Controle e Prevenção | Digitalzango',
  description: 'Guia completo sobre murcha-bacteriana em Angola: identificação, controle e prevenção de Ralstonia solanacearum em culturas.',
  keywords: 'murcha-bacteriana, Ralstonia solanacearum, doença bacteriana, tomate, batata, pimentão, Angola, Digitalzango'
}

export default function MurchaBacterianaPage() {
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
              <h1 className="text-3xl font-bold text-gray-900">Murcha-bacteriana</h1>
              <p className="text-gray-600 mt-1">Ralstonia solanacearum</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Temperaturas altas</span>
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
                <h3 className="font-medium text-gray-800 mb-2">Sintomas Característicos:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Murcha súbita das plantas</li>
                  <li>• Amarelecimento das folhas inferiores</li>
                  <li>• Escurecimento vascular</li>
                  <li>• Exsudato bacteriano viscoso</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Teste de Campo:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Cortar caule transversalmente</li>
                  <li>• Observar escurecimento dos vasos</li>
                  <li>• Colocar em água limpa</li>
                  <li>• Verificar exsudato leitoso</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Condições Favoráveis</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Fatores Climáticos:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Temperaturas entre 25-35°C</li>
                  <li>• Umidade elevada</li>
                  <li>• Solo úmido</li>
                  <li>• pH neutro a alcalino</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Fatores Agravantes:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Ferimentos nas raízes</li>
                  <li>• Solo contaminado</li>
                  <li>• Água de irrigação infectada</li>
                  <li>• Ferramentas contaminadas</li>
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
              <h3 className="font-medium text-gray-900 mb-2">Outras Hortaliças</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Berinjela</li>
                <li>• Quiabo</li>
                <li>• Tabaco</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Frutíferas</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Banana</li>
                <li>• Gengibre</li>
                <li>• Ornamentais</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Danos e Perdas</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Danos Diretos:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Morte rápida das plantas</li>
                <li>• Obstrução do sistema vascular</li>
                <li>• Perda total da produção</li>
                <li>• Contaminação do solo</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Perdas Econômicas:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Redução de 50-100% na produção</li>
                <li>• Abandono de áreas contaminadas</li>
                <li>• Aumento dos custos de controle</li>
                <li>• Necessidade de desinfecção</li>
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
                <li>• Uso de variedades resistentes</li>
                <li>• Rotação com gramíneas</li>
                <li>• Desinfecção de ferramentas</li>
                <li>• Quarentena de mudas</li>
                <li>• Drenagem adequada</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-red-700 mb-3">Controle de Emergência:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Remoção imediata de plantas doentes</li>
                <li>• Desinfecção do solo</li>
                <li>• Controle de acesso à área</li>
                <li>• Tratamento da água de irrigação</li>
                <li>• Pousio prolongado</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recomendações para Angola</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Temperaturas Altas (Crítico):</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Monitoramento intensivo</li>
                <li>• Controle da irrigação</li>
                <li>• Sombreamento das culturas</li>
                <li>• Ventilação adequada</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Manejo Sanitário:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Desinfecção rigorosa</li>
                <li>• Controle de visitantes</li>
                <li>• Eliminação de restos culturais</li>
                <li>• Certificação de mudas</li>
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
              href="/pragas/podridao-radicular" 
              className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
            >
              <h3 className="font-medium text-gray-900">Podridão-radicular</h3>
              <p className="text-sm text-gray-600 mt-1">Pythium spp.</p>
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
