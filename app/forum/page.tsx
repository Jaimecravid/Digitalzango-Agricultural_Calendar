"use client"

import Link from "next/link"
import { MessageSquare, Users, Eye, Clock, Plus, Search } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { RegionProvider } from "../contexts/region-context"
import Header from "../components/header"

function ForumContent() {


  const forumCategories = [
    {
      id: 1,
      name: "Culturas e Plantio",
      description: "DiscussÃµes sobre diferentes culturas e tÃ©cnicas de plantio",
      icon: "ðŸŒ±",
      topics: 156,
      posts: 1243,
      lastActivity: "2 horas atrÃ¡s",
    },
    {
      id: 2,
      name: "Meteorologia e Clima",
      description: "PrevisÃµes do tempo e impacto climÃ¡tico na agricultura",
      icon: "ðŸŒ¤ï¸",
      topics: 89,
      posts: 567,
      lastActivity: "4 horas atrÃ¡s",
    },
    {
      id: 3,
      name: "Pragas e DoenÃ§as",
      description: "IdentificaÃ§Ã£o e controlo de pragas e doenÃ§as",
      icon: "ðŸ›",
      topics: 134,
      posts: 892,
      lastActivity: "1 hora atrÃ¡s",
    },
    {
      id: 4,
      name: "Equipamentos e Tecnologia",
      description: "Ferramentas, mÃ¡quinas e tecnologias agrÃ­colas",
      icon: "ðŸšœ",
      topics: 67,
      posts: 345,
      lastActivity: "6 horas atrÃ¡s",
    },
    {
      id: 5,
      name: "Mercado e Vendas",
      description: "PreÃ§os, mercados e estratÃ©gias de venda",
      icon: "ðŸ’°",
      topics: 78,
      posts: 456,
      lastActivity: "3 horas atrÃ¡s",
    },
    {
      id: 6,
      name: "Cooperativas",
      description: "FormaÃ§Ã£o e gestÃ£o de cooperativas agrÃ­colas",
      icon: "ðŸ‘¥",
      topics: 45,
      posts: 234,
      lastActivity: "5 horas atrÃ¡s",
    },
  ]

  const recentTopics = [
    {
      id: 1,
      title: "Melhor Ã©poca para plantar milho em Luanda?",
      author: "JoÃ£o Silva",
      category: "Culturas e Plantio",
      replies: 12,
      views: 156,
      lastReply: "30 min atrÃ¡s",
      isHot: true,
    },
    {
      id: 2,
      title: "Como controlar a lagarta-do-cartucho naturalmente",
      author: "Maria Santos",
      category: "Pragas e DoenÃ§as",
      replies: 8,
      views: 89,
      lastReply: "1 hora atrÃ¡s",
      isHot: false,
    },
    {
      id: 3,
      title: "PreÃ§os do feijÃ£o no mercado de Benguela",
      author: "AntÃ³nio Costa",
      category: "Mercado e Vendas",
      replies: 15,
      views: 234,
      lastReply: "2 horas atrÃ¡s",
      isHot: true,
    },
    {
      id: 4,
      title: "IrrigaÃ§Ã£o por gotejamento: vale a pena?",
      author: "Ana Ferreira",
      category: "Equipamentos e Tecnologia",
      replies: 6,
      views: 67,
      lastReply: "3 horas atrÃ¡s",
      isHot: false,
    },
    {
      id: 5,
      title: "Formar cooperativa em Huambo - quem se junta?",
      author: "Carlos Mendes",
      category: "Cooperativas",
      replies: 9,
      views: 123,
      lastReply: "4 horas atrÃ¡s",
      isHot: false,
    },
  ]

  const activeUsers = [
    { name: "JoÃ£o Silva", posts: 234, avatar: "/placeholder.svg?height=40&width=40" },
    { name: "Maria Santos", posts: 189, avatar: "/placeholder.svg?height=40&width=40" },
    { name: "AntÃ³nio Costa", posts: 156, avatar: "/placeholder.svg?height=40&width=40" },
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
            Conecte-se com outros agricultores angolanos. Partilhe experiÃªncias, faÃ§a perguntas e aprenda com a
            comunidade.
          </p>
        </div>

        {/* Search and New Topic */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input placeholder="Pesquisar tÃ³picos..." className="pl-10" />
          </div>
          <Button className="bg-green-600 hover:bg-green-700">
            <Plus className="h-4 w-4 mr-2" />
            Novo TÃ³pico
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Forum Categories */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Categorias do FÃ³rum</h2>
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
                              <span>{category.topics} tÃ³picos</span>
                              <span>{category.posts} posts</span>
                              <span>Ãšltima actividade: {category.lastActivity}</span>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">TÃ³picos Recentes</h2>
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
                            {topic.isHot && <Badge className="bg-red-100 text-red-800 text-xs">ðŸ”¥ Quente</Badge>}
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
                              {topic.views} visualizaÃ§Ãµes
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
                <CardTitle>EstatÃ­sticas do FÃ³rum</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">1,247</div>
                  <div className="text-sm text-gray-600">Membros Activos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">569</div>
                  <div className="text-sm text-gray-600">TÃ³picos</div>
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
                <CardTitle>Regras do FÃ³rum</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>â€¢ Seja respeitoso com outros membros</li>
                  <li>â€¢ Mantenha as discussÃµes relevantes</li>
                  <li>â€¢ NÃ£o faÃ§a spam ou publicidade</li>
                  <li>â€¢ Use linguagem apropriada</li>
                  <li>â€¢ Partilhe conhecimento Ãºtil</li>
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
  return <RegionProvider>
        <ForumContent />
      </RegionProvider>
}

