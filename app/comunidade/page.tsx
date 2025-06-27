"use client"

import Link from "next/link"
import { Users, MessageSquare, Share2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

function ComunidadeContent() {
  const communityFeatures = [
    {
      title: "Junte-se aos Grupos",
      description: "Conecte-se com outros agricultores da sua região e partilhe experiências",
      icon: Users,
      href: "/comunidade/groups",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      title: "Entrar no Fórum",
      description: "Participe em discussões sobre técnicas agrícolas e resolução de problemas",
      icon: MessageSquare,
      href: "/comunidade/forum",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Compartilhe Recursos",
      description: "Partilhe equipamentos, conhecimentos e recursos com outros membros",
      icon: Share2,
      href: "/comunidade/sharing",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Comunidade de Agricultores</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Participe da nossa comunidade para compartilhar experiências e aprender com outros agricultores.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communityFeatures.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div
                  className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={feature.href} onClick={(e) => !feature.href.startsWith('#') || e.preventDefault()}>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Acessar
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Community Stats */}
        <div className="mt-16 bg-green-50 rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Nossa Comunidade</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">1,200+</div>
              <div className="text-gray-600">Agricultores Registados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">18</div>
              <div className="text-gray-600">Províncias Cobertas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">Discussões Ativas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-gray-600">Satisfação dos Usuários</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ComunidadePage() {
  return <ComunidadeContent />
}
