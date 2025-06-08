"use client"

import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LanguageProvider, useLanguage } from "../contexts/language-context"
import { RegionProvider } from "../contexts/region-context"
import Header from "../components/header"

function BlogContent() {
  const { t } = useLanguage()

  const blogPosts = [
    {
      id: 1,
      title: "Melhores Práticas para o Cultivo de Milho em Angola",
      excerpt:
        "Descubra as técnicas mais eficazes para maximizar a produção de milho nas diferentes regiões de Angola.",
      author: "Dr. João Silva",
      date: "2024-01-15",
      category: "Culturas",
      readTime: "5 min",
      image: "/placeholder.svg?height=200&width=400",
      featured: true,
    },
    {
      id: 2,
      title: "Como Interpretar Previsões Meteorológicas para Agricultura",
      excerpt: "Guia completo para entender e usar previsões do tempo no planeamento agrícola.",
      author: "Maria Santos",
      date: "2024-01-10",
      category: "Meteorologia",
      readTime: "7 min",
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
    {
      id: 3,
      title: "Gestão Sustentável de Recursos Hídricos na Agricultura",
      excerpt: "Estratégias para conservar água e melhorar a eficiência da irrigação.",
      author: "Eng. António Costa",
      date: "2024-01-05",
      category: "Sustentabilidade",
      readTime: "6 min",
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
    {
      id: 4,
      title: "Controlo Biológico de Pragas: Alternativas Naturais",
      excerpt: "Métodos ecológicos para controlar pragas sem prejudicar o meio ambiente.",
      author: "Dra. Ana Ferreira",
      date: "2024-01-01",
      category: "Pragas",
      readTime: "8 min",
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
    {
      id: 5,
      title: "Tecnologia na Agricultura: Tendências para 2024",
      excerpt: "Como a tecnologia está a transformar a agricultura em Angola e no mundo.",
      author: "Prof. Carlos Mendes",
      date: "2023-12-28",
      category: "Tecnologia",
      readTime: "10 min",
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
    {
      id: 6,
      title: "Cooperativas Agrícolas: Força na União",
      excerpt: "Os benefícios de formar e participar em cooperativas agrícolas.",
      author: "Isabel Rodrigues",
      date: "2023-12-25",
      category: "Cooperativas",
      readTime: "4 min",
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
  ]

  const categories = ["Todas", "Culturas", "Meteorologia", "Sustentabilidade", "Pragas", "Tecnologia", "Cooperativas"]

  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t("blog")}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Artigos, dicas e insights sobre agricultura em Angola. Mantenha-se actualizado com as últimas tendências e
            melhores práticas.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category, index) => (
            <Badge
              key={index}
              variant={index === 0 ? "default" : "secondary"}
              className="cursor-pointer hover:bg-green-100 hover:text-green-800 transition-colors"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Artigo em Destaque</h2>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge className="bg-green-100 text-green-800">{featuredPost.category}</Badge>
                    <Badge variant="outline">Destaque</Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(featuredPost.date).toLocaleDateString("pt-AO")}
                      </div>
                      <span>{featuredPost.readTime} de leitura</span>
                    </div>
                    <Link href={`/blog/${featuredPost.id}`}>
                      <button className="flex items-center gap-2 text-green-600 hover:text-green-700 font-medium">
                        Ler Mais <ArrowRight className="h-4 w-4" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Artigos Recentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-green-100 text-green-800">{post.category}</Badge>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString("pt-AO")}</span>
                    <Link href={`/blog/${post.id}`}>
                      <button className="text-green-600 hover:text-green-700 font-medium text-sm">Ler Mais →</button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <Card className="bg-green-50 border-green-200">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Subscreva a Nossa Newsletter</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Receba os nossos artigos mais recentes, dicas agrícolas e actualizações directamente no seu email.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-medium transition-colors">
                Subscrever
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default function BlogPage() {
  return (
    <LanguageProvider>
      <RegionProvider>
        <BlogContent />
      </RegionProvider>
    </LanguageProvider>
  )
}
