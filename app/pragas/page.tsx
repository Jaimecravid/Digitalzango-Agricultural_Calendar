"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  AlertTriangle,
  Shield,
  Bug,
  Citrus, // Changed from Virus to Citrus
  Sprout,
  Mouse,
  Phone,
  MapPin,
  Clock,
  Search,
} from "lucide-react";

// TypeScript types
type PestCategory = {
  id: string;
  name: string;
  icon: React.ElementType;
  description: string;
  count: number;
  severity: "high" | "medium" | "low";
  color: "red" | "orange" | "yellow" | "blue";
  href: string;
};

type Pest = {
  id: string;
  name: string;
  scientificName: string;
  icon: React.ElementType;
  crops: string[];
  severity: "high" | "medium" | "low";
  season: string;
  href: string;
};

// Data
const pestCategories: PestCategory[] = [
  {
    id: "insects",
    name: "Insetos",
    icon: Bug,
    description: "Pragas que atacam folhas, caules e frutos",
    count: 12,
    severity: "high",
    color: "red",
    href: "/pragas/insetos",
  },
  {
    id: "diseases",
    name: "Doenças",
    icon: Citrus, // Changed from Virus to Citrus
    description: "Fungos, bactérias e vírus que afetam as plantas",
    count: 8,
    severity: "high",
    color: "orange",
    href: "/pragas/doencas",
  },
  {
    id: "weeds",
    name: "Ervas Daninhas",
    icon: Sprout,
    description: "Plantas invasoras que competem por nutrientes",
    count: 10,
    severity: "medium",
    color: "yellow",
    href: "/pragas/ervas-daninhas",
  },
  {
    id: "rodents",
    name: "Roedores",
    icon: Mouse,
    description: "Animais que danificam culturas e armazenamento",
    count: 5,
    severity: "medium",
    color: "blue",
    href: "/pragas/roedores",
  },
];

const commonPests: Pest[] = [
  {
    id: "lagarta-cartucho",
    name: "Lagarta-do-cartucho",
    scientificName: "Spodoptera frugiperda",
    icon: Bug,
    crops: ["Milho", "Sorgo", "Arroz"],
    severity: "high",
    season: "Outubro - Março",
    href: "/pragas/lagarta-do-cartucho",
  },
  {
    id: "broca-cafe",
    name: "Broca-do-café",
    scientificName: "Hypothenemus hampei",
    icon: Bug,
    crops: ["Café"],
    severity: "high",
    season: "Todo o ano",
    href: "/pragas/broca-do-cafe",
  },
  {
    id: "ferrugem-cafe",
    name: "Ferrugem-do-café",
    scientificName: "Hemileia vastatrix",
    icon: Citrus, // Changed from Virus to Citrus
    crops: ["Café"],
    severity: "high",
    season: "Época chuvosa",
    href: "/pragas/ferrugem-do-cafe",
  },
  {
    id: "mosca-branca",
    name: "Mosca-branca",
    scientificName: "Bemisia tabaci",
    icon: Bug,
    crops: ["Tomate", "Feijão", "Algodão"],
    severity: "medium",
    season: "Época seca",
    href: "/pragas/mosca-branca",
  },
];

// Helper functions
const getSeverityColor = (severity: "high" | "medium" | "low") => {
  switch (severity) {
    case "high":
      return "bg-red-100 text-red-800 border-red-200";
    case "medium":
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case "low":
      return "bg-green-100 text-green-800 border-green-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

const getSeverityText = (severity: "high" | "medium" | "low") => {
  switch (severity) {
    case "high":
      return "Alto";
    case "medium":
      return "Médio";
    case "low":
      return "Baixo";
    default:
      return "Desconhecido";
  }
};

const getCategoryColor = (color: "red" | "orange" | "yellow" | "blue") => {
  switch (color) {
    case "red":
      return "from-red-500 to-red-600";
    case "orange":
      return "from-orange-500 to-orange-600";
    case "yellow":
      return "from-yellow-500 to-yellow-600";
    case "blue":
      return "from-blue-500 to-blue-600";
    default:
      return "from-gray-500 to-gray-600";
  }
};

export default function PragasPage() {
  return <PragasContent />;
}

function PragasContent() {
  // Search state
  const [search, setSearch] = useState("");

  // Filtered categories and pests
  const filteredCategories = pestCategories.filter((category) =>
    category.name.toLowerCase().includes(search.toLowerCase())
  );
  const filteredPests = commonPests.filter(
    (pest) =>
      pest.name.toLowerCase().includes(search.toLowerCase()) ||
      pest.scientificName.toLowerCase().includes(search.toLowerCase()) ||
      pest.crops.some((crop) => crop.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white py-16 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight drop-shadow-lg">
              Pragas e Doenças
            </h1>
            <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto leading-relaxed">
              Identifique e controle pragas e doenças que afetam suas culturas em Angola
            </p>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white shadow-sm py-6">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="relative w-full max-w-xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar pragas, doenças ou culturas..."
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-red-400 focus:ring-2 focus:ring-red-100 transition outline-none text-lg bg-gray-50"
            />
          </div>
        </div>
      </div>

      {/* Alert Banner */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <AlertTriangle className="h-5 w-5 text-yellow-400 mr-3" />
            <p className="text-yellow-800">
              <strong>Alerta Sazonal:</strong> Período de alta atividade de pragas em culturas de milho, feijão, soja, café e tomate.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Pest Categories */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Categorias de Pragas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(search ? filteredCategories : pestCategories).map((category) => {
              const IconComponent = category.icon;
              return (
                <a
                  key={category.id}
                  href={category.href}
                  className="block group"
                >
                  <Card className="hover:shadow-xl transition-all duration-200 cursor-pointer border-0">
                    <CardHeader
                      className={`bg-gradient-to-r ${getCategoryColor(
                        category.color
                      )} text-white rounded-t-lg group-hover:scale-105 transition-transform duration-200`}
                    >
                      <div className="flex items-center justify-between">
                        <IconComponent className="h-8 w-8" />
                        <Badge variant="secondary" className="bg-white/20 text-white">
                          {category.count}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg">{category.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                      <p className="text-gray-600 text-sm mb-3">{category.description}</p>
                      <Badge className={getSeverityColor(category.severity)}>
                        {getSeverityText(category.severity)} Risco
                      </Badge>
                    </CardContent>
                  </Card>
                </a>
              );
            })}
          </div>
        </section>

        {/* Common Pests */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Pragas Mais Comuns
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(search ? filteredPests : commonPests).map((pest) => {
              const IconComponent = pest.icon;
              return (
                <Card key={pest.id} className="hover:shadow-xl transition-all duration-200">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <IconComponent className="h-6 w-6 text-red-600" />
                        <div>
                          <CardTitle className="text-lg">{pest.name}</CardTitle>
                          <p className="text-sm text-gray-500 italic">{pest.scientificName}</p>
                        </div>
                      </div>
                      <Badge className={getSeverityColor(pest.severity)}>
                        {getSeverityText(pest.severity)}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium text-gray-700 mb-1">Culturas Afetadas:</p>
                        <div className="flex flex-wrap gap-1">
                          {pest.crops.map((crop) => (
                            <Badge key={crop} variant="outline" className="text-xs">
                              {crop}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>Época ativa: {pest.season}</span>
                      </div>
                      <a
                        href={pest.href}
                        className="inline-flex items-center text-red-600 hover:text-red-700 font-medium text-sm"
                      >
                        Ver detalhes →
                      </a>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Prevention Tips */}
        <section className="mb-12">
          <Card className="bg-green-50 border-green-200">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-green-600" />
                <CardTitle className="text-green-800">Dicas de Prevenção</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-green-700">
                <li>• Faça rotação de culturas para quebrar o ciclo de pragas</li>
                <li>• Mantenha o campo limpo, removendo restos de cultura</li>
                <li>• Use sementes certificadas e resistentes a pragas</li>
                <li>• Monitore regularmente suas plantações</li>
                <li>• Aplique controle biológico quando possível</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Emergency Contact */}
        <section>
          <Card className="bg-red-50 border-red-200">
            <CardHeader>
              <CardTitle className="text-red-800 flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                Contactar Especialista
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-red-700 mb-4">
                Precisa de ajuda urgente com pragas? Entre em contacto com nossos especialistas.
              </p>
              <div className="flex items-center space-x-4 text-sm text-red-600">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-1" />
                  <span>+244 923 456 789</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>Luanda, Angola</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
