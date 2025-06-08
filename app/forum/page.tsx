"use client"

import Link from "next/link"
import { MessageSquare, Users, Eye, Clock, Plus, Search } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LanguageProvider, useLanguage } from "../contexts/language-context"
import { RegionProvider } from "../contexts/region-context"
import Header from "../components/header"

function ForumContent() {
  const { t } = useLanguage()

  const forumCategories = [
    {
      id: 1,
      name: "Culturas e Plantio",
      description: "Discussões sobre diferentes culturas e técnicas de plantio",
      icon: "🌱",
      topics: 156,
      posts: 1243,
      lastActivity: "2 horas atrás",
    },
    {
      id: 2,
      name: "Meteorologia e Clima",
      description: "Previsões do tempo e impacto climático na agricultura",
      icon: "🌤️",
      topics: 89,
      posts: 567,
      lastActivity: "4 horas atrás",
    },
    {
      id: 3,
      name: "Pragas e Doenças",
      description: "Identificação e controlo de pragas e doenças",
      icon: "🐛",
      topics: 134,
      posts: 892,
      lastActivity: "1 hora atrás",
    },
    {
      id: 4,
      name: "Equipamentos e Tecnologia",
      description: "Ferramentas, máquinas e tecnologias agrícolas",
      icon: "🚜",
      topics: 67,
      posts: 345,
      lastActivity: "6 horas atrás",
    },
    {
      id: 5,
      name: "Mercado e Vendas",
      description: "Preços, mercados e estratégias de venda",
      icon: "💰",
      topics: 78,
      posts: 456,
      lastActivity: "3 horas atrás",
    },
    {
      id: 6,
      name: "Cooperativas",
      description: "Formação e gestão de cooperativas agrícolas",
      icon: "👥",
      topics: 45,
      posts: 234,
      lastActivity: "5 horas atrás",
    },
  ]

  const recentTopics = [
    {
      id: 1,
      title: "Melhor época para plantar milho em Luanda?",
      author: "João Silva",
      category: "Culturas e Plantio",
      replies: 12,
      views: 156,
      lastReply: "30 min atrás",
      isHot: true,
    },
    {
      id: 2,
      title: "Como controlar a lagarta-do-cartucho naturalmente",
      author: "Maria Santos",
      category: "Pragas e Doenças",
      replies: 8,
      views: 89,
      lastReply: "1 hora atrás",
      isHot: false,
    },
    {
      id: 3,
      title: "Preços do feijão no mercado de Benguela",
      author: "António Costa",
      category: "Mercado e Vendas",
      replies: 15,
      views: 234,
      lastReply: "2 horas atrás",
      isHot: true,
    },
    {
      id: 4,
      title: "Irrigação por gotejamento: vale a pena?",
      author: "Ana Ferreira",
      category: "Equipamentos e Tecnologia",
      replies: 6,
      views: 67,
      lastReply: "3 horas atrás",
      isHot: false,
    },
    {
      id: 5,
      title: "Formar cooperativa em Huambo - quem se junta?",
      author: "Carlos Mendes",
      category: "Cooperativas",
      replies: 9,
      views: 123,
      lastReply: "4 horas atrás",
      isHot: false,
    },
  ]

  const activeUsers = [
    { name: "João Silva", posts: 234, avatar: "/placeholder.svg?height=40&width=40" },
    { name: "Maria Santos", posts: 189, avatar: "/placeholder.svg?height=40&width=40" },
    { name: "António Costa", posts: 156, avatar: "/placeholder.svg?height=40&width=40" },
    { name: "Ana Ferreira", posts: 134, avatar: "/placeholder.svg?height=40&width=40" },
    { name: "Carlos Mendes", posts: 98, avatar: "/placeholder.svg?height=40&width=40" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t("forum")}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conecte-se com outros agricultores angolanos. Partilhe experiências, faça perguntas e aprenda com a
            comunidade.
          </p>
        </div>

        {/* Search and New Topic */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input placeholder="Pesquisar tópicos..." className="pl-10" />
          </div>
          <Button className="bg-green-600 hover:bg-green-700">
            <Plus className="h-4 w-4 mr-2" />
            Novo Tópico
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Forum Categories */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Categorias do Fórum</h2>
              <div className="space-y-4">
                {forumCategories.map((category) => (
                  <Card key={category.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4">
                          <div className="text-3xl">{category.icon}</div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-1">
                              <Link href={`/forum/category/${category.id}`} className="hover:text-green-600">
                                {category.name}
                              </Link>
                            </h3>
                            <p className="text-gray-600 text-sm mb-2">{category.description}</p>
                            <div className="flex items-center gap-4 text-xs text-gray-500">
                              <span>{category.topics} tópicos</span>
                              <span>{category.posts} posts</span>
                              <span>Última actividade: {category.lastActivity}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right text-sm text-gray-500">
                          <div className="flex items-center gap-1 mb-1">
                            <MessageSquare className="h-4 w-4" />
                            {category.topics}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {category.posts}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Recent Topics */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Tópicos Recentes</h2>
              <div className="space-y-4">
                {recentTopics.map((topic) => (
                  <Card key={topic.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">
                              <Link href={`/forum/topic/${topic.id}`} className="hover:text-green-600">
                                {topic.title}
                              </Link>
                            </h3>
                            {topic.isHot && <Badge className="bg-red-100 text-red-800 text-xs">🔥 Quente</Badge>}
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                            <span>Por {topic.author}</span>
                            <Badge variant="outline" className="text-xs">
                              {topic.category}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-xs text-gray-500">
                            <div className="flex items-center gap-1">
                              <MessageSquare className="h-3 w-3" />
                              {topic.replies} respostas
                            </div>
                            <div className="flex items-center gap-1">
                              <Eye className="h-3 w-3" />
                              {topic.views} visualizações
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {topic.lastReply}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Forum Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Estatísticas do Fórum</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">1,247</div>
                  <div className="text-sm text-gray-600">Membros Activos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">569</div>
                  <div className="text-sm text-gray-600">Tópicos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">3,737</div>
                  <div className="text-sm text-gray-600">Posts</div>
                </div>
              </CardContent>
            </Card>

            {/* Active Users */}
            <Card>
              <CardHeader>
                <CardTitle>Utilizadores Mais Activos</CardTitle>
                <CardDescription>Esta semana</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {activeUsers.map((user, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={user.avatar || "/placeholder.svg"} />
                          <AvatarFallback>
                            {user.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-medium">{user.name}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {user.posts} posts
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Forum Rules */}
            <Card>
              <CardHeader>
                <CardTitle>Regras do Fórum</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Seja respeitoso com outros membros</li>
                  <li>• Mantenha as discussões relevantes</li>
                  <li>• Não faça spam ou publicidade</li>
                  <li>• Use linguagem apropriada</li>
                  <li>• Partilhe conhecimento útil</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ForumPage() {
  return (
    <LanguageProvider>
      <RegionProvider>
        <ForumContent />
      </RegionProvider>
    </LanguageProvider>
  )
}
