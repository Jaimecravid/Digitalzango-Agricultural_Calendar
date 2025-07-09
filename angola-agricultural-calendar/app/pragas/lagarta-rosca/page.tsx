"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, ArrowLeft, MapPin, Bug, Leaf, SprayCan } from "lucide-react";

export default function LagartaRoscaPage() {
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
            <span className="text-6xl">🐛</span>
            <div>
              <h1 className="text-4xl font-bold mb-2">Lagarta-rosca</h1>
              <p className="text-xl text-orange-100 italic">Agrotis spp.</p>
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
                  A lagarta-rosca é uma praga polífaga que ataca diversas culturas em Angola, 
                  sendo especialmente problemática em hortaliças e culturas anuais. As larvas 
                  cortam as plantas jovens ao nível do solo durante a noite, causando danos 
                  significativos em plantios recém-estabelecidos.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Esta praga é particularmente ativa durante os meses mais frescos e húmidos, 
                  representando uma ameaça média mas constante para a agricultura angolana, 
                  especialmente em cultivos de sequeiro e horticultura.
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
                      <li>Adulto: mariposa cinza-acastanhada, 35-40mm de envergadura</li>
                      <li>Larva: cinza-escura, lisa, até 45mm de comprimento</li>
                      <li>Comportamento: enrola-se quando perturbada (daí o nome "rosca")</li>
                      <li>Pupa: marrom, encontrada no solo</li>
                      <li>Ovos: depositados no solo ou em detritos vegetais</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Sinais de Infestação:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Plantas jovens cortadas ao nível do solo</li>
                      <li>Folhas com bordas mastigadas</li>
                      <li>Presença de lagartas no solo durante o dia</li>
                      <li>Danos noturnos em mudas e plântulas</li>
                      <li>Falhas no stand de plantas</li>
                      <li>Excrementos escuros próximos às plantas</li>
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
                      <li>• Bacillus thuringiensis (bactéria entomopatogênica)</li>
                      <li>• Vírus da poliedrose nuclear (NPV)</li>
                      <li>• Trichogramma spp. (parasitóide de ovos)</li>
                      <li>• Predadores naturais (carabídeos, aranhas)</li>
                      <li>• Nematóides entomopatogênicos</li>
                    </ul>
                  </div>

                  {/* Cultural Control */}
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-blue-700 mb-2">Controle Cultural</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Preparo do solo para expor pupas</li>
                      <li>• Eliminação de plantas daninhas hospedeiras</li>
                      <li>• Irrigação adequada (evitar encharcamento)</li>
                      <li>• Coleta manual noturna das lagartas</li>
                      <li>• Rotação com culturas não hospedeiras</li>
                    </ul>
                  </div>

                  {/* Chemical Control */}
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold text-orange-700 mb-2">Controle Químico</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Chlorpyrifos (aplicação no solo)</li>
                      <li>• Carbaryl (pulverização dirigida)</li>
                      <li>• Deltamethrin (aplicação noturna)</li>
                      <li>• Iscas tóxicas (farelo + inseticida)</li>
                      <li>• Tratamento preventivo do solo</li>
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
                  <p className="text-sm text-gray-600 mt-1">Tomate, repolho, alface, feijão, milho</p>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">Época Crítica:</span>
                  <p className="text-sm text-gray-600 mt-1">Estação fresca (Maio-Agosto)</p>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">Ciclo de Vida:</span>
                  <p className="text-sm text-gray-600 mt-1">30-50 dias (dependente da temperatura)</p>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">Atividade:</span>
                  <p className="text-sm text-gray-600 mt-1">Noturna (esconde-se no solo durante o dia)</p>
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
                  <strong>Atenção especial no Planalto Central (Huambo, Bié)</strong> 
                  durante os meses mais frescos. Lagarta-rosca pode causar perdas 
                  significativas em hortaliças e culturas de sequeiro.
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
                    href="/pragas/lagarta-do-cartucho" 
                    className="block text-blue-600 hover:text-blue-800 text-sm transition-colors"
                  >
                    → Lagarta-do-cartucho (Spodoptera frugiperda)
                  </Link>
                  <Link 
                    href="/pragas/broca-do-cafe" 
                    className="block text-blue-600 hover:text-blue-800 text-sm transition-colors"
                  >
                    → Broca-do-café (Hypothenemus hampei)
                  </Link>
                  <Link 
                    href="/pragas/gafanhoto" 
                    className="block text-blue-600 hover:text-blue-800 text-sm transition-colors"
                  >
                    → Gafanhoto (Locusta spp.)
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
