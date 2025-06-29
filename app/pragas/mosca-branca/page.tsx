"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, ArrowLeft, MapPin, Bug, Leaf, SprayCan } from "lucide-react";

export default function MoscaBrancaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-12">
        <div className="container mx-auto px-4">
          <Link 
            href="/pragas/insetos" 
            className="inline-flex items-center text-orange-100 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para Insetos
          </Link>
          
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">🦟</span>
            <div>
              <h1 className="text-4xl font-bold mb-2">Mosca-branca</h1>
              <p className="text-xl text-orange-100 italic">Bemisia tabaci</p>
            </div>
          </div>
          
          <Badge variant="destructive" className="bg-orange-800 text-white">
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
                  <Bug className="w-5 h-5 text-orange-600" />
                  Visão Geral
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A mosca-branca é uma das pragas mais significativas da agricultura angolana, 
                  afetando especialmente culturas como tomate, feijão, mandioca e algodão. 
                  Este pequeno inseto sugador causa danos diretos através da alimentação e 
                  indiretos pela transmissão de vírus devastadores.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Em Angola, a mosca-branca representa uma ameaça constante durante todo o ano, 
                  com picos populacionais durante a estação seca quando as condições são mais 
                  favoráveis à sua reprodução.
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
                      <li>Adultos: 1-2mm de comprimento, corpo amarelo pálido</li>
                      <li>Asas brancas cobertas por cera pulverulenta</li>
                      <li>Ninfas: translúcidas, achatadas, fixas na face inferior das folhas</li>
                      <li>Ovos: amarelados, depositados em círculos na parte inferior das folhas</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Sinais de Infestação:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Folhas amareladas e enroladas</li>
                      <li>Presença de melada (substância pegajosa)</li>
                      <li>Desenvolvimento de fumagina (fungo preto)</li>
                      <li>Nuvens de pequenos insetos brancos quando a planta é agitada</li>
                      <li>Sintomas virais: mosaico, nanismo, deformações</li>
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
                      <li>• Encarsia formosa (vespa parasitóide)</li>
                      <li>• Chrysoperla carnea (bicho-lixeiro)</li>
                      <li>• Joaninhas predadoras</li>
                      <li>• Fungos entomopatogênicos (Beauveria bassiana)</li>
                    </ul>
                  </div>

                  {/* Cultural Control */}
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-blue-700 mb-2">Controle Cultural</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Rotação de culturas com plantas não hospedeiras</li>
                      <li>• Eliminação de plantas daninhas hospedeiras</li>
                      <li>• Uso de armadilhas amarelas adesivas</li>
                      <li>• Plantio de barreiras com plantas repelentes</li>
                      <li>• Irrigação por aspersão para dificultar voo</li>
                    </ul>
                  </div>

                  {/* Chemical Control */}
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold text-orange-700 mb-2">Controle Químico</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Imidacloprid (sistêmico)</li>
                      <li>• Thiamethoxam (tratamento de sementes)</li>
                      <li>• Óleo de neem (orgânico)</li>
                      <li>• Sabão potássico (contato)</li>
                      <li>• Rotação de princípios ativos para evitar resistência</li>
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
                  <Badge variant="secondary" className="ml-2 bg-orange-100 text-orange-800">Médio</Badge>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">Culturas Afetadas:</span>
                  <p className="text-sm text-gray-600 mt-1">Tomate, feijão, mandioca, algodão, batata-doce</p>
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
                  <span className="font-semibold text-gray-800">Reprodução:</span>
                  <p className="text-sm text-gray-600 mt-1">100-300 ovos por fêmea</p>
                </div>
              </CardContent>
            </Card>

            {/* Regional Alert */}
            <Card className="border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-800">
                  <MapPin className="w-5 h-5" />
                  Alerta Regional - Angola
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-orange-700 leading-relaxed">
                  <strong>Atenção especial nas províncias de Benguela, Huíla e Cunene</strong> 
                  durante a estação seca. A mosca-branca tem causado perdas significativas 
                  em culturas de tomate e feijão. Monitoramento semanal recomendado.
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
                    href="/pragas/pulgao" 
                    className="block text-blue-600 hover:text-blue-800 text-sm transition-colors"
                  >
                    → Pulgão (Aphididae)
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
