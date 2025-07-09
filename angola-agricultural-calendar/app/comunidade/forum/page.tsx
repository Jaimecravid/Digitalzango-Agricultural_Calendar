"use client"

import { Search, MessageSquare, User, Clock, ThumbsUp, MessageCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ForumPage() {
  const categories = [
    { id: 'all', label: 'Todos os Tópicos' },
    { id: 'techniques', label: 'Técnicas Agrícolas' },
    { id: 'problems', label: 'Problemas e Soluções' },
    { id: 'market', label: 'Mercado e Comercialização' },
    { id: 'equipment', label: 'Equipamentos' },
    { id: 'events', label: 'Eventos e Notícias' },
  ]

  const topics = [
    {
      id: 1,
      title: 'Melhor época para plantar milho na região do Huambo',
      author: 'João Silva',
      category: 'Técnicas Agrícolas',
      replies: 24,
      views: 156,
      lastActivity: '2 horas atrás',
      isPopular: true,
      isSolved: true
    },
    {
      id: 2,
      title: 'Como combater a praga da lagarta do cartucho?',
      author: 'Maria Fernandes',
      category: 'Problemas e Soluções',
      replies: 18,
      views: 203,
      lastActivity: '5 horas atrás',
      isPopular: true,
      isSolved: false
    },
    {
      id: 3,
      title: 'Preço justo para o quilo de feijão vermelho?',
      author: 'Carlos Mendes',
      category: 'Mercado e Comercialização',
      replies: 12,
      views: 98,
      lastActivity: '1 dia atrás',
      isPopular: false,
      isSolved: false
    },
    {
      id: 4,
      title: 'Recomendações de trator para pequenas propriedades',
      author: 'António Pereira',
      category: 'Equipamentos',
      replies: 7,
      views: 145,
      lastActivity: '1 dia atrás',
      isPopular: false,
      isSolved: true
    },
    {
      id: 5,
      title: 'Próximo workshop de agricultura sustentável em Benguela',
      author: 'Ana Santos',
      category: 'Eventos e Notícias',
      replies: 5,
      views: 76,
      lastActivity: '2 dias atrás',
      isPopular: false,
      isSolved: false
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Fórum de Discussão</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Participe em discussões sobre técnicas agrícolas e resolução de problemas
          </p>
          
          <div className="mt-8 max-w-3xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                className="w-full pl-10 py-6 text-base"
                placeholder="Pesquisar no fórum..."
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-600 hover:bg-green-700">
                Pesquisar
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-6 border-b">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Tópicos Recentes</h2>
              <Button className="bg-green-600 hover:bg-green-700">
                <MessageSquare className="mr-2 h-4 w-4" />
                Novo Tópico
              </Button>
            </div>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <div className="border-b px-6">
              <TabsList className="bg-transparent p-0 h-auto w-full justify-start overflow-x-auto">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="whitespace-nowrap py-4 px-3 data-[state=active]:text-green-600 data-[state=active]:border-b-2 data-[state=active]:border-green-600"
                  >
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <div className="divide-y">
              {topics.map((topic) => (
                <div key={topic.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                        <User className="h-5 w-5 text-green-600" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2">
                        <h3 className="text-base font-medium text-gray-900 truncate">
                          {topic.title}
                        </h3>
                        {topic.isSolved && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                            Resolvido
                          </span>
                        )}
                        {topic.isPopular && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                            Popular
                          </span>
                        )}
                      </div>
                      <div className="mt-1 flex items-center text-sm text-gray-500">
                        <span>Por {topic.author}</span>
                        <span className="mx-2">•</span>
                        <span>{topic.category}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-1">
                      <div className="flex items-center text-sm text-gray-500">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        <span>{topic.replies} respostas</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{topic.lastActivity}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Tabs>

          <div className="px-6 py-4 border-t flex justify-between items-center bg-gray-50">
            <div className="text-sm text-gray-500">
              Mostrando <span className="font-medium">1-{topics.length}</span> de <span className="font-medium">{topics.length}</span> tópicos
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" disabled>
                Anterior
              </Button>
              <Button variant="outline" size="sm" className="bg-green-50 border-green-200 text-green-700">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                Próximo
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6
">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-medium mb-4">Destaques da Semana</h3>
            <ul className="space-y-4">
              <li className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                <a href="#" className="text-green-600 hover:underline">Como aumentar a produtividade do milho em 30%</a>
                <div className="mt-1 flex items-center text-sm text-gray-500">
                  <span>Por Carlos M.</span>
                  <span className="mx-2">•</span>
                  <span>42 respostas</span>
                </div>
              </li>
              <li className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                <a href="#" className="text-green-600 hover:underline">Novas técnicas de irrigação para pequenos produtores</a>
                <div className="mt-1 flex items-center text-sm text-gray-500">
                  <span>Por Ana P.</span>
                  <span className="mx-2">•</span>
                  <span>28 respostas</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-medium mb-4">Tópicos sem Resposta</h3>
            <ul className="space-y-4">
              <li className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                <a href="#" className="text-green-600 hover:underline">Dúvida sobre adubação orgânica</a>
                <div className="mt-1 text-sm text-gray-500">
                  <span>Publicado há 2 dias</span>
                </div>
              </li>
              <li className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                <a href="#" className="text-green-600 hover:underline">Como controlar ervas daninhas sem herbicidas?</a>
                <div className="mt-1 text-sm text-gray-500">
                  <span>Publicado há 3 dias</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-medium mb-4">Regras do Fórum</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-green-500 mr-2">✓</div>
                <span>Seja respeitoso com todos os membros</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-green-500 mr-2">✓</div>
                <span>Mantenha as discussões relevantes à agricultura</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-green-500 mr-2">✓</div>
                <span>Compartilhe conhecimento e experiências de forma construtiva</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-green-500 mr-2">✓</div>
                <span>Evite autopromoção e spam</span>
              </li>
            </ul>
            <Button variant="outline" className="mt-4 w-full">
              Ver regras completas
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
