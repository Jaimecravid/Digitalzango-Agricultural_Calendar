"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, ArrowLeft, MapPin, Bug, Leaf, SprayCan } from "lucide-react";

export default function MinadorFoliarPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-teal-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-12">
        <div className="container mx-auto px-4">
          <Link 
            href="/pragas/insetos" 
            className="inline-flex items-center text-teal-100 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para Insetos
          </Link>
          
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">🍃</span>
            <div>
              <h1 className="text-4xl font-bold mb-2">Minador-foliar</h1>
              <p className="text-xl text-teal-100 italic">Liriomyza spp.</p>
            </div>
          </div>
          
          <Badge variant="destructive" className="bg-teal-800 text-white">
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
                  <Bug className="w-5 h-5 text-teal-600" />
                  Visão Geral
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  O minador-foliar é uma pequena mosca cujas larvas criam túneis característicos 
                  nas folhas das plantas, causando danos estéticos e redução da capacidade 
                  fotossintética. Em Angola, é uma praga significativa em culturas hortícolas, 
                  especialmente em tomate, feijão e plantas ornamentais.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  As larvas alimentam-se do tecido foliar entre as superfícies superior e inferior 
                  da folha, criando minas ou túneis serpentinos visíveis que são o sinal mais 
                  característico desta praga.
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
                      <li>Adulto: mosca pequena (2-3mm), corpo amarelo-acinzentado</li>
                      <li>Larva: amarelada, sem pernas, 2-3mm de comprimento</li>
                      <li>Pupa: marrom, encontrada no solo ou na folha</li>
                      <li>Ovos: inseridos no tecido foliar, invisíveis a olho nu</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Sinais de Infestação:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Túneis serpentinos nas folhas (minas)</li>
                      <li>Pontos de punctura para alimentação e oviposição</li>
                      <li>Folhas com aspecto prateado ou esbranquiçado</li>
                      <li>Redução da área foliar fotossintética</li>
                      <li>Queda prematura de folhas severamente atacadas</li>
                      <li>Presença de pequenas moscas voando ao redor das plantas</li>
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
                      <li>• Diglyphus isaea (vespa parasitóide)</li>
                      <li>• Dacnusa sibirica (parasitóide de larvas)</li>
                      <li>• Chrysocharis parksi (parasitóide)</li>
                      <li>• Predadores generalistas (aranhas, percevejos)</li>
                      <li>• Nematóides entomopatogênicos no solo</li>
                    </ul>
                  </div>

                  {/* Cultural Control */}
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-blue-700 mb-2">Controle Cultural</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Remoção e destruição de folhas atacadas</li>
                      <li>• Armadilhas amarelas adesivas</li>
                      <li>• Rotação de culturas</li>
                      <li>• Eliminação de plantas daninhas hospedeiras</li>
                      <li>• Cultivo em ambiente protegido com telas</li>
                    </ul>
                  </div>

                  {/* Chemical Control */}
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h4 className="font-semibold text-teal-700 mb-2">Controle Químico</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Abamectina (penetra nas minas)</li>
                      <li>• Cyromazine (regulador de crescimento)</li>
                      <li>• Spinosad (origem biológica)</li>
                      <li>• Óleo de neem</li>
                      <li>• Aplicações dirigidas às folhas novas</li>
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
                  <Badge variant="secondary" className="ml-2 bg-teal-100 text-teal-800">Médio</Badge>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">Culturas Afetadas:</span>
                  <p className="text-sm text-gray-600 mt-1">Tomate, feijão, batata, plantas ornamentais</p>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">Época Crítica:</span>
                  <p className="text-sm text-gray-600 mt-1">Todo o ano (picos na estação quente)</p>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">Ciclo de Vida:</span>
                  <p className="text-sm text-gray-600 mt-1">15-25 dias (ovo a adulto)</p>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">Gerações/Ano:</span>
                  <p className="text-sm text-gray-600 mt-1">8-12 gerações anuais</p>
                </div>
              </CardContent>
            </Card>

            {/* Regional Alert */}
            <Card className="border-teal-200 bg-teal-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-teal-800">
                  <MapPin className="w-5 h-5" />
                  Alerta Regional - Angola
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-teal-700 leading-relaxed">
                  <strong>Atenção especial na região de Luanda e Benguela</strong> 
                  em cultivos protegidos de hortaliças. Minador-foliar prolifera 
                  rapidamente em estufas e pode causar danos severos em tomateiros.
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
                    href="/pragas/trips" 
                    className="block text-blue-600 hover:text-blue-800 text-sm transition-colors"
                  >
                    → Tripes (Thysanoptera)
                  </Link>
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
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
