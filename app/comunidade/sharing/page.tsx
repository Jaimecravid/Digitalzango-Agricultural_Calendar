"use client"

import { Search, Share2, Tractor, Wrench, BookOpen, Users, MapPin, Clock } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SharingPage() {
  const categories = [
    { id: 'all', label: 'Tudo', icon: Share2 },
    { id: 'equipment', label: 'Equipamentos', icon: Tractor },
    { id: 'tools', label: 'Ferramentas', icon: Wrench },
    { id: 'knowledge', label: 'Conhecimento', icon: BookOpen },
    { id: 'labor', label: 'Mão de Obra', icon: Users },
  ]

  const resources = [
    {
      id: 1,
      title: 'Trator Agrale 80HP',
      type: 'equipment',
      description: 'Trator em excelente estado, disponível para aluguel por dia ou semana. Inclui operador se necessário.',
      location: 'Huambo, Cidade do Huambo',
      owner: 'Carlos Mendes',
      rating: 4.8,
      price: '15.000 AOA/dia',
      available: true,
      image: '/equipment/trator.jpg'
    },
    {
      id: 2,
      title: 'Aula de Manejo de Irrigação',
      type: 'knowledge',
      description: 'Ofereço aulas práticas sobre sistemas de irrigação para pequenas propriedades. 10 anos de experiência.',
      location: 'Benguela, Lobito',
      owner: 'Ana Silva',
      rating: 4.9,
      price: '5.000 AOA/hora',
      available: true,
      image: '/knowledge/irrigacao.jpg'
    },
    {
      id: 3,
      title: 'Kit de Ferramentas Agrícolas',
      type: 'tools',
      description: 'Conjunto completo de ferramentas manuais para agricultura familiar. Inclui enxada, foice, pá, ancinho e mais.',
      location: 'Luanda, Cazenga',
      owner: 'Miguel Costa',
      rating: 4.5,
      price: '25.000 AOA/semana',
      available: true,
      image: '/tools/kit-ferramentas.jpg'
    },
    {
      id: 4,
      title: 'Colheita de Milho',
      type: 'labor',
      description: 'Equipe de 5 pessoas disponível para serviços de colheita em toda região. Experiência comprovada.',
      location: 'Huíla, Lubango',
      owner: 'Joaquim Santos',
      rating: 4.7,
      price: '8.000 AOA/dia por pessoa',
      available: true,
      image: '/labor/colheita.jpg'
    },
    {
      id: 5,
      title: 'Pulverizador Costal',
      type: 'equipment',
      description: 'Pulverizador costal 20L, praticamente novo. Uso em pequenas e médias plantações.',
      location: 'Kwanza Sul, Sumbe',
      owner: 'Eduardo Pereira',
      rating: 4.2,
      price: '3.000 AOA/dia',
      available: false,
      image: '/equipment/pulverizador.jpg'
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Compartilhamento de Recursos</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Partilhe equipamentos, conhecimentos e recursos com outros membros da comunidade
          </p>
          
          <div className="mt-8 max-w-3xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                className="w-full pl-10 py-6 text-base"
                placeholder="O que você está procurando?"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-600 hover:bg-green-700">
                Pesquisar
              </Button>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-between items-center mb-6">
              <TabsList className="bg-transparent p-0 h-auto">
                {categories.map((category) => {
                  const Icon = category.icon
                  return (
                    <TabsTrigger 
                      key={category.id} 
                      value={category.id}
                      className="flex flex-col items-center justify-center h-24 w-24 data-[state=active]:bg-green-50 data-[state=active]:text-green-600 rounded-lg mx-1"
                    >
                      <Icon className="h-6 w-6 mb-2" />
                      <span className="text-xs">{category.label}</span>
                    </TabsTrigger>
                  )
                })}
              </TabsList>
              <Button className="bg-green-600 hover:bg-green-700">
                <Share2 className="mr-2 h-4 w-4" />
                Oferecer Recurso
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource) => (
                <div key={resource.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-48 bg-gray-200 relative">
                    <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded-full text-xs font-medium">
                      {resource.type === 'equipment' && 'Equipamento'}
                      {resource.type === 'knowledge' && 'Conhecimento'}
                      {resource.type === 'tools' && 'Ferramentas'}
                      {resource.type === 'labor' && 'Mão de Obra'}
                    </div>
                    <div className="absolute bottom-2 left-2">
                      {!resource.available && (
                        <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Indisponível
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-medium text-gray-900">{resource.title}</h3>
                      <span className="text-green-600 font-bold">{resource.price}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{resource.description}</p>
                    
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{resource.location}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <div className="flex items-center text-yellow-400 mr-1">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className={`w-4 h-4 ${i < Math.floor(resource.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-gray-500">{resource.rating}</span>
                      </div>
                      <span className="text-gray-500">por {resource.owner}</span>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 border-t flex justify-end">
                    <Button 
                      variant="outline" 
                      className="border-green-600 text-green-600 hover:bg-green-50 hover:text-green-700"
                      disabled={!resource.available}
                    >
                      {resource.available ? 'Solicitar' : 'Indisponível'}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Tabs>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tem algo para compartilhar?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Faça parte da nossa comunidade de compartilhamento e ajude outros agricultores enquanto ganha uma renda extra com seus recursos ociosos.
          </p>
          <Button className="bg-green-600 hover:bg-green-700 px-8 py-6 text-base">
            <Share2 className="mr-2 h-5 w-5" />
            Oferecer Meu Recurso
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Tractor className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Equipamentos</h3>
            <p className="text-gray-600">Alugue ou empreste máquinas e equipamentos agrícolas</p>
          </div>
          <div className="text-center">
            <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Conhecimento</h3>
            <p className="text-gray-600">Compartilhe seu conhecimento ou contrate especialistas</p>
          </div>
          <div className="text-center">
            <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Mão de Obra</h3>
            <p className="text-gray-600">Ofereça ou encontre serviços agrícolas na sua região</p>
          </div>
        </div>
      </div>
    </div>
  )
}
