// app/pragas/tiririca/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Leaf, Calendar, MapPin, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tiririca - Controle e Prevenção | Digitalzango',
  description: 'Guia completo sobre tiririca em Angola: identificação, controle e prevenção da erva daninha mais agressiva do mundo.',
  keywords: 'tiririca, Cyperus rotundus, erva daninha, controle mato, Angola, Digitalzango'
}

export default function TiriricaPage() {
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
              <Leaf className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Tiririca</h1>
              <p className="text-gray-600 mt-1">Cyperus rotundus</p>
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
                  <li>• Planta perene de 10-40cm</li>
                  <li>• Folhas estreitas em formato de V</li>
                  <li>• Caule triangular</li>
                  <li>• Sistema radicular com tubérculos</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Sistema Reprodutivo:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Tubérculos subterrâneos</li>
                  <li>• Rizomas horizontais</li>
                  <li>• Sementes viáveis</li>
                  <li>• Reprodução vegetativa intensa</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Por que é Tão Agressiva</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Adaptabilidade:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Resiste à seca e encharcamento</li>
                  <li>• Tolera diferentes tipos de solo</li>
                  <li>• Cresce em sol pleno ou sombra</li>
                  <li>• Suporta temperaturas extremas</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Propagação:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Um tubérculo gera 1.900 plantas/ano</li>
                  <li>• Fragmentos regeneram plantas</li>
                  <li>• Sementes dispersas pelo vento</li>
                  <li>• Resistente ao controle químico</li>
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
                <li>• Cebola</li>
                <li>• Alface</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Outras Culturas</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Feijão</li>
                <li>• Algodão</li>
                <li>• Cana-de-açúcar</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Danos e Competição</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Competição por Recursos:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Absorve água rapidamente</li>
                <li>• Compete por nutrientes do solo</li>
                <li>• Reduz disponibilidade de luz</li>
                <li>• Ocupa espaço físico</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Perdas Econômicas:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Redução de 25-90% na produção</li>
                <li>• Aumento dos custos de produção</li>
                <li>• Dificuldade na colheita</li>
                <li>• Depreciação da qualidade</li>
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
                <li>• Uso de sementes limpas</li>
                <li>• Quarentena de áreas infestadas</li>
                <li>• Rotação com culturas competitivas</li>
                <li>• Cobertura morta densa</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-orange-700 mb-3">Controle Mecânico:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Capina frequente (a cada 15 dias)</li>
                <li>• Remoção completa dos tubérculos</li>
                <li>• Aração profunda na seca</li>
                <li>• Exposição dos tubérculos ao sol</li>
                <li>• Solarização do solo</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Estratégias para Angola</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Época Seca (Melhor Controle):</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Aração profunda repetida</li>
                <li>• Exposição dos tubérculos</li>
                <li>• Queima controlada (onde permitido)</li>
                <li>• Preparo intensivo do solo</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Manejo Integrado:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Plantio direto com cobertura</li>
                <li>• Culturas de cobertura agressivas</li>
                <li>• Adubação localizada</li>
                <li>• Monitoramento constante</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Ervas Daninhas Relacionadas</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
              <h3 className="font-medium text-gray-500">Capim-colonião</h3>
              <p className="text-sm text-gray-400 mt-1">Em breve</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
              <h3 className="font-medium text-gray-500">Picão-preto</h3>
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
