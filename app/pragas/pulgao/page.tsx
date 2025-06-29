"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, ArrowLeft, MapPin, Bug, Leaf, SprayCan } from "lucide-react";

export default function PulgaoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-12">
        <div className="container mx-auto px-4">
          <Link 
            href="/pragas/insetos" 
            className="inline-flex items-center text-green-100 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para Insetos
          </Link>
          
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">🐛</span>
            <div>
              <h1 className="text-4xl font-bold mb-2">Pulgão</h1>
              <p className="text-xl text-green-100 italic">Aphididae</p>
            </div>
          </div>
          
          <Badge variant="destructive" className="bg-green-800 text-white">
            <AlertTriangle className="w-4 h-4 mr-1" />
            Ameaça Baixa
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
                  <Bug className="w-5 h-5 text-green-600" />
                  Visão Geral
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Os pulgões são pequenos insetos sugadores que se alimentam da seiva das plantas, 
                  causando danos diretos e indiretos às culturas angolanas. Embora sejam considerados 
                  uma ameaça de baixa intensidade, podem causar problemas significativos quando as 
                  populações crescem rapidamente.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Em Angola, os pulgões são mais problemáticos durante a estação fresca e seca, 
                  afetando principalmente culturas como feijão, batata, repolho e outras hortaliças. 
                  Sua capacidade de reprodução rápida requer monitoramento constante.
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
                      <li>Tamanho: 1-4mm de comprimento</li>
                      <li>Cores: verde, preto, cinza, amarelo ou vermelho</li>
                      <li>Corpo mole, formato de pêra</li>
                      <li>Antenas longas e finas</li>
                      <li>Podem ter ou não asas (formas ápteras e aladas)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Sinais de Infestação:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Colônias agrupadas na face inferior das folhas</li>
                      <li>Folhas enroladas, amareladas ou deformadas</li>
                      <li>Presença de melada (substância pegajosa)</li>
                      <li>Desenvolvimento de fumagina (fungo preto)</li>
                      <li>Crescimento atrofiado das plantas</li>
                      <li>Transmissão de vírus (mosaico, nanismo)</li>
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
                      <li>• Joaninhas (Coccinellidae)</li>
                      <li>• Bicho-lixeiro (Chrysoperla carnea)</li>
                      <li>• Vespas parasitóides (Aphidius spp.)</li>
                      <li>• Sirfídeos (moscas predadoras)</li>
                      <li>• Fungos entomopatogênicos</li>
                    </ul>
                  </div>

                  {/* Cultural Control */}
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-blue-700 mb-2">Controle Cultural</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Eliminação de plantas daninhas hospedeiras</li>
                      <li>• Rotação de culturas</li>
                      <li>• Plantio de plantas repelentes (hortelã, alecrim)</li>
                      <li>• Irrigação por aspersão para derrubar pulgões</li>
                      <li>• Adubação equilibrada (evitar excesso de nitrogênio)</li>
                    </ul>
                  </div>

                  {/* Chemical Control */}
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold text-orange-700 mb-2">Controle Químico</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Sabão potássico (orgânico)</li>
                      <li>• Óleo de neem</li>
                      <li>• Imidacloprid (sistêmico)</li>
                      <li>• Pirimicarb (seletivo para pulgões)</li>
                      <li>• Extrato de alho e pimenta (caseiro)</li>
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
                  <Badge variant="secondary" className="ml-2 bg-green-100 text-green-800">Baixo</Badge>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">Culturas Afetadas:</span>
                  <p className="text-sm text-gray-600 mt-1">Feijão, batata, repolho, tomate, pimentão</p>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">Época Crítica:</span>
                  <p className="text-sm text-gray-600 mt-1">Estação seca e fresca (Junho-Agosto)</p>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">Ciclo de Vida:</span>
                  <p className="text-sm text-gray-600 mt-1">7-14 dias (reprodução muito rápida)</p>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">Reprodução:</span>
                  <p className="text-sm text-gray-600 mt-1">Partenogênese (sem acasalamento)</p>
                </div>
              </CardContent>
            </Card>

            {/* Regional Alert */}
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-800">
                  <MapPin className="w-5 h-5" />
                  Alerta Regional - Angola
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-green-700 leading-relaxed">
                  <strong>Monitoramento recomendado no Planalto Central</strong> 
                  (Huambo, Bié) durante os meses mais frescos. Pulgões podem 
                  multiplicar-se rapidamente em culturas de batata e hortaliças.
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
                    href="/pragas/tripes" 
                    className="block text-blue-600 hover:text-blue-800 text-sm transition-colors"
                  >
                    → Tripes (Thysanoptera)
                  </Link>
                  <Link 
                    href="/pragas/cochonilha" 
                    className="block text-blue-600 hover:text-blue-800 text-sm transition-colors"
                  >
                    → Cochonilha (Coccoidea)
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
