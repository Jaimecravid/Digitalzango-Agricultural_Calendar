"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function GroupsPage() {
  const groups = [
    {
      id: 1,
      name: "Agricultores do Huambo",
      description: "Grupo para agricultores da província do Huambo partilharem experiências e dicas.",
      members: 245,
      location: "Huambo",
      category: "Geral"
    },
    {
      id: 2,
      name: "Cultivo de Milho em Angola",
      description: "Técnicas avançadas para cultivo de milho nas condições angolanas.",
      members: 189,
      location: "Nacional",
      category: "Milho"
    },
    {
      id: 3,
      name: "Agricultura Familiar - Bié",
      description: "Espaço para agricultores familiares do Bié trocarem conhecimentos.",
      members: 132,
      location: "Bié",
      category: "Familiar"
    },
    {
      id: 4,
      name: "Pequenos Produtores de Café",
      description: "Compartilhamento de técnicas de cultivo e comercialização de café.",
      members: 98,
      location: "Uíge",
      category: "Café"
    },
    {
      id: 5,
      name: "Associação de Mulheres Agricultoras",
      description: "Empoderamento feminino na agricultura angolana.",
      members: 312,
      location: "Nacional",
      category: "Feminino"
    },
    {
      id: 6,
      name: "Jovens Agricultores de Benguela",
      description: "Espaço para jovens agricultores inovarem na agricultura.",
      members: 176,
      location: "Benguela",
      category: "Jovens"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Grupos de Agricultores</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conecte-se com outros agricultores da sua região e partilhe experiências
          </p>
          
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                className="w-full pl-10 py-6 text-base"
                placeholder="Pesquisar grupos por nome, localização ou categoria..."
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-600 hover:bg-green-700">
                Pesquisar
              </Button>
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
              <Button variant="outline" className="rounded-full">Todos</Button>
              <Button variant="outline" className="rounded-full">Sua região</Button>
              <Button variant="outline" className="rounded-full">Populares</Button>
              <Button variant="outline" className="rounded-full">Novos</Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group) => (
            <Card key={group.id} className="hover:shadow-lg transition-shadow h-full flex flex-col">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{group.name}</CardTitle>
                    <div className="flex items-center mt-1 text-sm text-gray-500">
                      <span>{group.location}</span>
                      <span className="mx-2">•</span>
                      <span>{group.members} membros</span>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {group.category}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600">{group.description}</p>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Participar do Grupo
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button variant="outline" className="px-8">
            Carregar mais grupos
          </Button>
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-sm p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Não encontrou o grupo certo?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Crie seu próprio grupo e convide outros agricultores a participarem da sua comunidade.
          </p>
          <Button className="bg-green-600 hover:bg-green-700 px-8 py-6 text-base">
            Criar Novo Grupo
          </Button>
        </div>
      </div>
    </div>
  )
}
