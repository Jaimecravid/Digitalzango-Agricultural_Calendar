"use client";

import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { Download, Smartphone, Tablet, Monitor, Star } from "lucide-react";
import Link from "next/link";

export default function BaixarAppPage() {
  const platforms = [
    {
      name: "Android",
      icon: "📱",
      size: "25 MB",
      version: "2.1.0",
      downloadUrl: "#",
    },
    {
      name: "iOS",
      icon: "🍎",
      size: "28 MB",
      version: "2.1.0",
      downloadUrl: "#",
    },
    {
      name: "Web App",
      icon: "🌐",
      size: "N/A",
      version: "2.1.0",
      downloadUrl: "/",
    },
  ];

  const features = [
    "📅 Calendário offline",
    "🌤️ Previsão do tempo",
    "🌱 Gestão de recursos",
    "🐛 Alertas de pragas"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <Download className="h-12 w-12 text-green-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Baixar App</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Baixe nosso aplicativo móvel para acesso offline ao calendário agrícola
            </p>
          </div>

          {/* App Rating */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="flex items-center space-x-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-600">4.8 (1.200+ avaliações)</span>
            </div>
            <div className="text-gray-600">
              <span className="font-semibold">10.000+</span> downloads
            </div>
            <Badge className="bg-green-100 text-green-800">Grátis</Badge>
          </div>
        </div>
      </section>

      {/* Download Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-6xl mb-4">{platform.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">{platform.name}</h3>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>
                      Tamanho: {platform.size}
                    </div>
                    <div>
                      Versão: {platform.version}
                    </div>
                  </div>
                  <Link href={platform.downloadUrl}>
                    <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
                      Baixar para {platform.name}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Principais Funcionalidades</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <span className="text-2xl">{feature.split(' ')[0]}</span>
                <span className="text-gray-700">{feature.split(' ').slice(1).join(' ')}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compatibility Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Compatibilidade</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Smartphone className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Dispositivos Móveis</h3>
              <p className="text-gray-600">
                Android 6.0+ e iOS 12.0+
              </p>
            </div>
            <div className="text-center">
              <Tablet className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Tablets</h3>
              <p className="text-gray-600">
                Interface otimizada para tablets
              </p>
            </div>
            <div className="text-center">
              <Monitor className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Computadores</h3>
              <p className="text-gray-600">
                Aplicação web responsiva
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Comece Hoje Mesmo</h2>
          <p className="text-xl mb-8">
            Baixe o aplicativo e transforme sua agricultura com tecnologia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
              📱 Baixar para Android
            </Button>
            <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
              🍎 Baixar para iOS
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
