"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, ArrowLeft, MapPin, Bug, Leaf, SprayCan } from "lucide-react";

export default function CochonilhaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-12">
        <div className="container mx-auto px-4">
          <Link 
            href="/pragas/insetos" 
            className="inline-flex items-center text-purple-100 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para Insetos
          </Link>
          
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">🐞</span>
            <div>
              <h1 className="text-4xl font-bold mb-2">Cochonilha</h1>
              <p className="text-xl text-purple-100 italic">Coccoidea</p>
            </div>
          </div>
          
          <Badge variant="destructive" className="bg-purple-800 text-white">
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
                  <Bug className="w-5 h-5 text-purple-600" />
                  Visão Geral
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  As cochonilhas são pequenos insetos sugadores que se fixam nas plantas, 
                  formando colônias protegidas por carapachas cerosas ou escudos. Em Angola, 
                  são pragas ocasionais que afetam principalmente culturas perenes como 
                  citros, café e plantas ornamentais.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Embora sejam consideradas uma ameaça de baixa intensidade, as cochonilhas 
                  podem causar danos significativos quando não controladas, especialmente 
                  em plantações de citros e cultivos em estufa.
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
                      <li>Tamanho: 1-5mm de diâmetro</li>
                      <li>Corpo protegido por escudo ceroso ou carapaça</li>
                      <li>Cores: branco, marrom, cinza ou amarelado</li>
                      <li>Fixas nas folhas, caules ou frutos</li>
                      <li>Fêmeas sem asas, machos alados (raros)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Sinais de Infestação:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Pequenos escudos ou carapachas fixas na planta</li>
                      <li>Folhas amareladas e enfraquecidas</li>
                      <li>Presença de melada (substância pegajosa)</li>
                      <li>Desenvolvimento de fumagina (fungo preto)</li>
                      <li>Crescimento atrofiado da planta</li>
                      <li>Queda prematura de folhas</li>
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
                      <li>• Joaninhas especializadas (Chilocorus spp.)</li>
                      <li>• Vespas parasitóides (Aphytis spp.)</li>
                      <li>• Fungos entomopatogênicos</li>
                      <li>• Predadores generalistas</li>
                      <li>• Ácaros predadores</li>
                    </ul>
                  </div>

                  {/* Cultural Control */}
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-blue-700 mb-2">Controle Cultural</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Remoção manual de escudos (infestações pequenas)</li>
                      <li>• Poda de ramos muito infestados</li>
                      <li>• Limpeza com escova macia e água</li>
                      <li>• Manutenção de plantas saudáveis</li>
                      <li>• Quarentena de plantas novas</li>
                    </ul>
                  </div>

                  {/* Chemical Control */}
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-purple-700 mb-2">Controle Químico</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Óleo mineral ou vegetal (sufoca os insetos)</li>
                      <li>• Sabão inseticida</li>
                      <li>• Álcool isopropílico (aplicação localizada)</li>
                      <li>• Imidacloprid (sistêmico)</li>
                      <li>• Óleo de neem</li>
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
                  <Badge variant="secondary" className="ml-2 bg-purple-100 text-purple-800">Baixo</Badge>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">Culturas Afetadas:</span>
                  <p className="text-sm text-gray-600 mt-1">Citros, café, plantas ornamentais, ficus</p>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">Época Crítica:</span>
                  <p className="text-sm text-gray-600 mt-1">Todo o ano (maior atividade no calor)</p>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">Ciclo de Vida:</span>
                  <p className="text-sm text-gray-600 mt-1">30-60 dias (dependente da espécie)</p>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">Reprodução:</span>
                  <p className="text-sm text-gray-600 mt-1">50-200 ovos por fêmea</p>
                </div>
              </CardContent>
            </Card>

            {/* Regional Alert */}
            <Card className="border-purple-200 bg-purple-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-purple-800">
                  <MapPin className="w-5 h-5" />
                  Alerta Regional - Angola
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-purple-700 leading-relaxed">
                  <strong>Monitoramento recomendado nas regiões de Kwanza Sul e Uíge</strong> 
                  em plantações de citros e café. Cochonilhas podem proliferar em 
                  condições de alta umidade e temperatura.
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
                    href="/pragas/mosca-branca" 
                    className="block text-blue-600 hover:text-blue-800 text-sm transition-colors"
                  >
                    → Mosca-branca (Bemisia tabaci)
                  </Link>
                  <Link 
                    href="/pragas/trips" 
                    className="block text-blue-600 hover:text-blue-800 text-sm transition-colors"
                  >
                    → Tripes (Thysanoptera)
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
