"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, ArrowLeft, MapPin, Bug, Leaf, SprayCan } from "lucide-react";

export default function BrocaDoCafePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-12">
        <div className="container mx-auto px-4">
          <Link 
            href="/pragas/insetos" 
            className="inline-flex items-center text-red-100 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para Insetos
          </Link>
          
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">☕</span>
            <div>
              <h1 className="text-4xl font-bold mb-2">Broca-do-café</h1>
              <p className="text-xl text-red-100 italic">Hypothenemus hampei</p>
            </div>
          </div>
          
          <Badge variant="destructive" className="bg-red-800 text-white">
            <AlertTriangle className="w-4 h-4 mr-1" />
            Ameaça Alta
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
                  <Bug className="w-5 h-5 text-red-600" />
                  Visão Geral
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A broca-do-café é considerada a principal praga da cafeicultura em Angola 
                  e no mundo. Este pequeno besouro perfura os frutos de café, causando danos 
                  diretos aos grãos e reduzindo drasticamente a qualidade e produtividade 
                  das plantações. Originária da África Equatorial, representa uma ameaça 
                  crítica para a economia cafeeira angolana.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Em Angola, a broca-do-café pode causar perdas de até 80% da produção 
                  quando não controlada adequadamente, afetando especialmente as regiões 
                  produtoras de Uíge, Kwanza Sul e Cuanza Norte.
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
                      <li>Adulto: besouro preto de 1,5-2mm de comprimento</li>
                      <li>Corpo cilíndrico, ligeiramente recurvado</li>
                      <li>Fêmea maior que o macho</li>
                      <li>Larva: branca, sem pernas, até 2mm</li>
                      <li>Ciclo: 21-63 dias (dependente da temperatura)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Sinais de Infestação:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Pequeno furo (1mm) na coroa do fruto</li>
                      <li>Resíduos semelhantes a serradura no furo</li>
                      <li>Grãos perfurados e danificados</li>
                      <li>Queda prematura de frutos jovens</li>
                      <li>Redução da qualidade dos grãos</li>
                      <li>Presença de galerias no interior dos grãos</li>
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
                      <li>• Cephalonomia stephanoderis (vespa parasitóide)</li>
                      <li>• Prorops nasuta (parasitóide)</li>
                      <li>• Phymastichus coffea (parasitóide de adultos)</li>
                      <li>• Beauveria bassiana (fungo entomopatogênico)</li>
                      <li>• Predadores naturais (formigas, aranhas)</li>
                    </ul>
                  </div>

                  {/* Cultural Control */}
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-blue-700 mb-2">Controle Cultural</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Colheita completa e frequente (repasse)</li>
                      <li>• Catação de frutos secos e brocados</li>
                      <li>• Armadilhas com álcool etílico + metanol</li>
                      <li>• Destruição de frutos remanescentes</li>
                      <li>• Manutenção de cafezais limpos</li>
                    </ul>
                  </div>

                  {/* Chemical Control */}
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold text-red-700 mb-2">Controle Químico</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Endosulfan (pulverização dirigida)</li>
                      <li>• Chlorpyrifos (aplicação nos frutos)</li>
                      <li>• Cyfluthrin (inseticida piretróide)</li>
                      <li>• Aplicação 8 semanas após floração</li>
                      <li>• Rotação de princípios ativos</li>
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
                  <Badge variant="secondary" className="ml-2 bg-red-100 text-red-800">Alto</Badge>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">Culturas Afetadas:</span>
                  <p className="text-sm text-gray-600 mt-1">Café arábica, café robusta</p>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">Época Crítica:</span>
                  <p className="text-sm text-gray-600 mt-1">Outubro-Dezembro (frutificação)</p>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">Ciclo de Vida:</span>
                  <p className="text-sm text-gray-600 mt-1">21-63 dias (temperatura dependente)</p>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">Perdas Potenciais:</span>
                  <p className="text-sm text-gray-600 mt-1">Até 80% da produção</p>
                </div>
              </CardContent>
            </Card>

            {/* Regional Alert */}
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-800">
                  <MapPin className="w-5 h-5" />
                  Alerta Regional - Angola
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-red-700 leading-relaxed">
                  <strong>ALERTA CRÍTICO nas províncias de Uíge, Kwanza Sul e Cuanza Norte</strong> 
                  durante a época de frutificação. Broca-do-café pode devastar plantações. 
                  Monitoramento diário obrigatório em cafezais comerciais.
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
                    href="/pragas/cochonilha" 
                    className="block text-blue-600 hover:text-blue-800 text-sm transition-colors"
                  >
                    → Cochonilha (Coccoidea)
                  </Link>
                  <Link 
                    href="/pragas/minador-foliar" 
                    className="block text-blue-600 hover:text-blue-800 text-sm transition-colors"
                  >
                    → Minador-foliar (Liriomyza)
                  </Link>
                  <Link 
                    href="/pragas/lagarta-do-cartucho" 
                    className="block text-blue-600 hover:text-blue-800 text-sm transition-colors"
                  >
                    → Lagarta-do-cartucho (Spodoptera)
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
