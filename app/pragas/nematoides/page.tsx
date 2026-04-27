"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, ArrowLeft, MapPin, Bug, Leaf, SprayCan } from "lucide-react";



export default function NematoidesPage() {
  return (
    <div className="min-h-screen bg-[#0B1020]">
      {/* Hero Section */}
      <div className="bg-[#0B1020] border-b border-emerald-500/30 py-12">
        <div className="container mx-auto px-4">
          <Link 
            href="/pragas" 
            className="inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para Pragas
          </Link>
          
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">🪱</span>
            <div>
              <h1 className="text-4xl font-bold mb-2 text-[#F8FAFC]">Nematoides</h1>
              <p className="text-xl text-emerald-400 italic">Meloidogyne spp. e Pratylenchus spp.</p>
            </div>
          </div>
          
          <Badge className="bg-red-600 text-white border-0">
            <AlertTriangle className="w-4 h-4 mr-1" />
            Risco Alto
          </Badge>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Overview */}
            <Card className="bg-[#0B1020] border-emerald-500/30 rounded-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#F8FAFC]">
                  <Bug className="w-5 h-5 text-emerald-500" />
                  Visão Geral
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#F8FAFC]/80 leading-relaxed mb-4">
                  Microrganismos microscópicos que atacam as raízes, causando galhas e redução do crescimento.
                  Os nematoides são parasitas do solo invisíveis a olho nu, mas com potencial devastador 
                  para as culturas de Batata-doce e Amendoim em Angola.
                </p>
                <p className="text-[#F8FAFC]/80 leading-relaxed">
                  A infestação ocorre durante todo o ano, especialmente em solos húmidos. 
                  Sem controle adequado, podem reduzir a produção em mais de 50%, 
                  causando prejuízos significativos aos agricultores angolanos.
                </p>
              </CardContent>
            </Card>

            {/* Affected Crops */}
            <Card className="bg-[#0B1020] border-emerald-500/30 rounded-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#F8FAFC]">
                  <Leaf className="w-5 h-5 text-emerald-500" />
                  Culturas Afetadas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="border border-emerald-500/30 rounded-lg p-4">
                    <h4 className="font-semibold text-emerald-400 mb-2">Batata-doce</h4>
                    <p className="text-sm text-[#F8FAFC]/70">
                      Formação de galhas nas raízes tuberosas, reduzindo qualidade e rendimento.
                    </p>
                  </div>
                  <div className="border border-emerald-500/30 rounded-lg p-4">
                    <h4 className="font-semibold text-emerald-400 mb-2">Amendoim</h4>
                    <p className="text-sm text-[#F8FAFC]/70">
                      Danos nas raízes e grãos, causando podridão e perda de produção.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Control Methods */}
            <Card className="bg-[#0B1020] border-emerald-500/30 rounded-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#F8FAFC]">
                  <SprayCan className="w-5 h-5 text-emerald-500" />
                  Métodos de Controle
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Biological Control */}
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <h4 className="font-semibold text-emerald-400 mb-2">Controle Biológico</h4>
                    <ul className="text-[#F8FAFC]/80 space-y-1">
                      <li>• Paecilomyces lilacinus - fungo parasita de nematoides</li>
                      <li>• Pochonia chlamydosporia - controla ovos e juvenis</li>
                      <li>• Matéria orgânica no solo - promove micro-organismos benéficos</li>
                      <li>• Compostagem bem decomposta - aumenta supressividade do solo</li>
                    </ul>
                  </div>

                  {/* Cultural Control */}
                  <div className="border-l-4 border-emerald-500/70 pl-4">
                    <h4 className="font-semibold text-emerald-400 mb-2">Controle Cultural</h4>
                    <ul className="text-[#F8FAFC]/80 space-y-1">
                      <li>• Rotação de culturas com plantas não hospedeiras</li>
                      <li>• Solarização do solo (cobertura plástica no verão)</li>
                      <li>• Uso de variedades resistentes quando disponíveis</li>
                      <li>• Evitar monocultura prolongada</li>
                    </ul>
                  </div>

                  {/* Chemical Control */}
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold text-orange-400 mb-2">Controle Químico</h4>
                    <ul className="text-[#F8FAFC]/80 space-y-1">
                      <li>• Nematicidas registrados em Angola (consultar técnico agrícola)</li>
                      <li>• Aplicação no sulco de plantio para proteção das raízes</li>
                      <li>• Seguir rigorosamente a dose e intervalo de segurança</li>
                      <li>• Alternar produtos com mecanismos de ação diferentes</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Facts */}
            <Card className="bg-[#0B1020] border-emerald-500/30 rounded-xl">
              <CardHeader>
                <CardTitle className="text-lg text-[#F8FAFC]">Factos Rápidos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <span className="font-semibold text-[#F8FAFC]">Nível de Risco:</span>
                  <Badge className="ml-2 bg-red-600 text-white border-0">Alto</Badge>
                </div>
                <div>
                  <span className="font-semibold text-[#F8FAFC]">Culturas Afetadas:</span>
                  <p className="text-sm text-[#F8FAFC]/70 mt-1">Batata-doce, Amendoim</p>
                </div>
                <div>
                  <span className="font-semibold text-[#F8FAFC]">Época Crítica:</span>
                  <p className="text-sm text-[#F8FAFC]/70 mt-1">Todo o ano (solo húmido)</p>
                </div>
                <div>
                  <span className="font-semibold text-[#F8FAFC]">Categoria:</span>
                  <p className="text-sm text-[#F8FAFC]/70 mt-1">Solo</p>
                </div>
                <div>
                  <span className="font-semibold text-[#F8FAFC]">Nome Científico:</span>
                  <p className="text-sm text-[#F8FAFC]/70 mt-1">Meloidogyne spp. e Pratylenchus spp.</p>
                </div>
              </CardContent>
            </Card>

            {/* Regional Alert */}
            <Card className="bg-emerald-900/20 border-emerald-500/30 rounded-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-emerald-400">
                  <MapPin className="w-5 h-5" />
                  Alerta Regional - Angola
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#F8FAFC]/80 leading-relaxed">
                  <strong className="text-emerald-400">Prevalente em solos arenosos</strong> 
                  das províncias costeiras (Benguela, Luanda, Namibe). Monitoramento 
                  essencial antes do plantio de Batata-doce e Amendoim.
                </p>
              </CardContent>
            </Card>

            {/* Related Links */}
            <Card className="bg-[#0B1020] border-emerald-500/30 rounded-xl">
              <CardHeader>
                <CardTitle className="text-lg text-[#F8FAFC]">Pragas Relacionadas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Link 
                    href="/pragas/pulgao" 
                    className="block text-emerald-400 hover:text-emerald-300 text-sm transition-colors"
                  >
                    → Pulgão (Aphididae)
                  </Link>
                  <Link 
                    href="/pragas/mosca-branca" 
                    className="block text-emerald-400 hover:text-emerald-300 text-sm transition-colors"
                  >
                    → Mosca-branca (Bemisia tabaci)
                  </Link>
                  <Link 
                    href="/pragas/cochonilha" 
                    className="block text-emerald-400 hover:text-emerald-300 text-sm transition-colors"
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
