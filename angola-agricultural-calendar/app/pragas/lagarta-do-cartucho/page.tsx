"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, ArrowLeft, MapPin } from "lucide-react";

export default function LagartaDoCartuchoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-green-600">
              Início
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/pragas" className="text-gray-500 hover:text-green-600">
              Pragas & Doenças
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">Lagarta-do-cartucho</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <Link href="/pragas/insetos" className="mr-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <div>
              <div className="flex items-center mb-2">
                <span className="text-4xl mr-4">🐛</span>
                <Badge className="bg-red-900 text-white border border-red-500">Ameaça Alta</Badge>
              </div>
              <h1 className="text-4xl font-bold mb-2">Lagarta-do-cartucho</h1>
              <p className="text-red-200 italic">Spodoptera frugiperda</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <AlertTriangle className="h-6 w-6 text-red-600 mr-3" />
                  Visão Geral
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 space-y-4">
                <p>A Lagarta-do-cartucho (Spodoptera frugiperda) é uma das pragas mais destrutivas para a agricultura em Angola, especialmente para a cultura do milho. É uma espécie polífaga, o que significa que se alimenta de mais de 80 espécies de plantas, incluindo sorgo, arroz e algodão.</p>
                <p>Se não controlada, pode causar perdas de rendimento superiores a 50%. A sua alta capacidade de reprodução e migração torna-a uma ameaça constante durante todo o ciclo da cultura, desde a emergência até à formação das espigas.</p>
              </CardContent>
            </Card>

            {/* Identification */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Identificação</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-lg">Lagartas (Fase de Dano):</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Cabeça escura com uma marca clara em forma de 'Y' invertido na fronte.</li>
                      <li>Quatro pontos escuros formando um quadrado no penúltimo segmento do corpo.</li>
                      <li>Cor varia de pardo-escuro a quase preto, podendo atingir até 50mm de comprimento.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-lg">Adultos (Mariposas):</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>São mariposas de hábito noturno, com asas anteriores acinzentadas e posteriores claras.</li>
                      <li>A fêmea tem alta capacidade reprodutiva, podendo ovipositar mais de 1000 ovos durante a sua vida.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-lg">Danos Característicos:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Folhas raspadas com aspecto de 'janela', um dano típico de lagartas recém-eclodidas.</li>
                      <li>Cartucho da planta destruído, com perfurações e fezes granuladas com aparência de serragem.</li>
                      <li>Danos diretos às espigas, perfurando os grãos e facilitando a entrada de fungos que produzem aflatoxinas.</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Control Methods */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Métodos de Controle</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-3 flex items-center text-lg">🌱 Controle Biológico</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Uso de bioinseticidas à base de Bacillus thuringiensis (Bt).</li>
                      <li>Liberação de inimigos naturais como a vespa Trichogramma.</li>
                      <li>Aplicação de fungos entomopatogênicos que infectam a lagarta.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-700 mb-3 flex items-center text-lg">🛡️ Controle Cultural</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Plantio em época recomendada para evitar picos populacionais da praga.</li>
                      <li>Rotação de culturas com plantas não hospedeiras para quebrar o ciclo da praga.</li>
                      <li>Eliminação de plantas daninhas e restos culturais que servem de abrigo.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-700 mb-3 flex items-center text-lg">🧪 Controle Químico</h4>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                      <p className="text-yellow-800 text-sm">
                        <strong>Atenção:</strong> O uso de inseticidas deve ser criterioso. Consulte sempre um agrônomo e rotacione os ingredientes ativos para evitar o desenvolvimento de resistência.
                      </p>
                    </div>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Aplicação de inseticidas direcionada ao cartucho da planta.</li>
                      <li>Tratamento de sementes para proteger a cultura no estágio inicial.</li>
                      <li>Uso de produtos seletivos para preservar os inimigos naturais.</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Column */}
          <div className="space-y-8">
            {/* Quick Facts */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Factos Rápidos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div className="flex items-center justify-between border-b pb-2">
                  <span className="text-gray-600">Nível de Ameaça:</span>
                  <Badge className="bg-red-100 text-red-800 border border-red-200">Alto</Badge>
                </div>
                <div className="flex items-center justify-between border-b pb-2">
                  <span className="text-gray-600">Culturas Afetadas:</span>
                  <span className="font-medium text-right">Milho, Sorgo, Arroz</span>
                </div>
                <div className="flex items-center justify-between border-b pb-2">
                  <span className="text-gray-600">Época Ativa:</span>
                  <span className="font-medium">Época das Chuvas</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Ciclo de Vida:</span>
                  <span className="font-medium">30-40 dias</span>
                </div>
              </CardContent>
            </Card>

            {/* Regional Alert */}
            <Card className="border-red-300 bg-red-50">
              <CardHeader>
                <CardTitle className="text-xl text-red-800 flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  Alerta Regional
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-700 text-sm mb-4">Esta praga é altamente migratória, capaz de voar mais de 100km por noite. O monitoramento regional é crucial para o controle eficaz.</p>
                <Link
                  href="/contacto"
                  className="w-full text-center bg-red-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-red-700 transition-colors inline-block"
                >
                  Reportar Avistamento
                </Link>
              </CardContent>
            </Card>
            
            {/* Related Links */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Links Relacionados</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/pragas/mosca-branca" className="flex items-center text-green-700 hover:underline text-sm">
                  <span className="mr-2">🦟</span> Praga: Mosca-Branca
                </Link>
                <Link href="/pragas/insetos" className="flex items-center text-green-700 hover:underline text-sm">
                  <span className="mr-2">🐛</span> Outros Insetos
                </Link>
                <Link href="/pragas" className="flex items-center text-green-700 hover:underline text-sm">
                  <span className="mr-2">🔧</span> Todas as Pragas
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
