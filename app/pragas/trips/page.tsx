"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, ArrowLeft, MapPin, Bug, Leaf, SprayCan } from "lucide-react";

export default function TripesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-yellow-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white py-12">
        <div className="container mx-auto px-4">
          <Link 
            href="/pragas/insetos" 
            className="inline-flex items-center text-yellow-100 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para Insetos
          </Link>
          
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">🦗</span>
            <div>
              <h1 className="text-4xl font-bold mb-2">Tripes</h1>
              <p className="text-xl text-yellow-100 italic">Thysanoptera</p>
            </div>
          </div>
          
          <Badge variant="destructive" className="bg-yellow-800 text-white">
            <AlertTriangle className="w-4 h-4 mr-1" />
            Ameaça Média
          </Badge>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bug className="w-5 h-5 text-yellow-600" />
                  Visão Geral
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Os tripes são pequenos insetos alongados que causam danos significativos às 
                  culturas angolanas através da alimentação raspadora nas folhas e flores. 
                  Estes insetos microscópicos são particularmente problemáticos em culturas 
                  hortícolas e ornamentais, causando danos estéticos e redução da produtividade.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Em Angola, os tripes são mais ativos durante a estação seca, quando as 
                  condições quentes e secas favorecem sua reprodução. São vetores de vírus 
                  importantes, especialmente o vírus do bronzeado do tomateiro.
                </p>
              </CardContent>
            </Card>

            {/* Identification */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-green-600" />
                  Identificação
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Características Físicas:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Tamanho: 1-3mm de comprimento</li>
                      <li>Corpo alongado e estreito</li>
                      <li>Cores: amarelo, marrom, preto ou listrado</li>
                      <li>Asas franjadas características</li>
                      <li>Movimentação rápida quando perturbados</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Sinais de Infestação:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Manchas prateadas ou bronzeadas nas folhas</li>
                      <li>Pontos pretos (excrementos) na superfície das folhas</li>
                      <li>Folhas com aspecto raspado ou cicatrizado</li>
                      <li>Flores deformadas ou com manchas</li>
                      <li>Frutos com cicatrizes superficiais</li>
                      <li>Sintomas virais em plantas suscetíveis</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Control Methods */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <SprayCan className="w-5 h-5 text-blue-600" />
                  Métodos de Controle
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Biological Control */}
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-green-700 mb-2">Controle Biológico</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Orius insidiosus (percevejo predador)</li>
                      <li>• Amblyseius cucumeris (ácaro predador)</li>
                      <li>• Chrysoperla carnea (bicho-lixeiro)</li>
                      <li>• Fungos entomopatogênicos (Metarhizium anisopliae)</li>
                      <li>• Nematóides entomopatogênicos</li>
                    </ul>
                  </div>

                  {/* Cultural Control */}
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-blue-700 mb-2">Controle Cultural</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Armadilhas adesivas azuis (atraem tripes)</li>
                      <li>• Eliminação de plantas daninhas hospedeiras</li>
                      <li>• Irrigação adequada (evitar stress hídrico)</li>
                      <li>• Mulching para reduzir populações no solo</li>
                      <li>• Rotação de culturas</li>
                    </ul>
                  </div>

                  {/* Chemical Control */}
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold text-orange-700 mb-2">Controle Químico</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Spinosad (origem biológica)</li>
                      <li>• Imidacloprid (sistêmico)</li>
                      <li>• Óleo de neem</li>
                      <li>• Sabão inseticida</li>
                      <li>• Abamectina (acaricida-inseticida)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Facts */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Factos Rápidos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <span className="font-semibold text-gray-800">Nível de Ameaça:</span>
                  <Badge variant="secondary" className="ml-2 bg-yellow-100 text-yellow-800">Médio</Badge>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">Culturas Afetadas:</span>
                  <p className="text-sm text-gray-600 mt-1">Tomate, pimentão, cebola, alho, flores ornamentais</p>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">Época Crítica:</span>
                  <p className="text-sm text-gray-600 mt-1">Estação seca (Maio-Setembro)</p>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">Ciclo de Vida:</span>
                  <p className="text-sm text-gray-600 mt-1">15-30 dias (dependente da temperatura)</p>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">Habitat:</span>
                  <p className="text-sm text-gray-600 mt-1">Flores, folhas jovens, frutos em desenvolvimento</p>
                </div>
              </CardContent>
            </Card>

            {/* Regional Alert */}
            <Card className="border-yellow-200 bg-yellow-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-yellow-800">
                  <MapPin className="w-5 h-5" />
                  Alerta Regional - Angola
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-yellow-700 leading-relaxed">
                  <strong>Atenção especial nas regiões de Luanda e Benguela</strong> 
                  em cultivos protegidos e horticultura. Tripes podem causar danos 
                  severos em tomateiros e flores ornamentais durante a estação seca.
                </p>
              </CardContent>
            </Card>

            {/* Related Links */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Pragas Relacionadas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Link 
                    href="/pragas/mosca-branca" 
                    className="block text-blue-600 hover:text-blue-800 text-sm transition-colors"
                  >
                    → Mosca-branca (Bemisia tabaci)
                  </Link>
                  <Link 
                    href="/pragas/pulgao" 
                    className="block text-blue-600 hover:text-blue-800 text-sm transition-colors"
                  >
                    → Pulgão (Aphididae)
                  </Link>
                  <Link 
                    href="/pragas/minador-foliar" 
                    className="block text-blue-600 hover:text-blue-800 text-sm transition-colors"
                  >
                    → Minador-foliar (Liriomyza)
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
