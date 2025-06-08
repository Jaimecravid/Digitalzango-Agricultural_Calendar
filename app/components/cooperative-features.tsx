"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Users, MessageSquare, Share2, Calendar, Plus, Send } from "lucide-react"
import { useLanguage } from "../contexts/language-context"

interface CooperativeMember {
  id: string
  name: string
  role: "admin" | "member"
  farm: string
  location: string
  joinDate: string
  avatar?: string
}

interface SharedResource {
  id: string
  name: string
  type: "equipment" | "knowledge" | "labor" | "transport"
  owner: string
  available: boolean
  cost: number
  description: string
  contact: string
}

interface GroupPlan {
  id: string
  title: string
  description: string
  crop: string
  startDate: string
  endDate: string
  participants: string[]
  coordinator: string
  status: "planning" | "active" | "completed"
}

interface Message {
  id: string
  sender: string
  content: string
  timestamp: string
  type: "general" | "alert" | "resource" | "planning"
}

export default function CooperativeFeatures() {
  const { t } = useLanguage()
  const [members, setMembers] = useState<CooperativeMember[]>([])
  const [sharedResources, setSharedResources] = useState<SharedResource[]>([])
  const [groupPlans, setGroupPlans] = useState<GroupPlan[]>([])
  const [messages, setMessages] = useState<Message[]>([])
  const [newMessage, setNewMessage] = useState("")

  useEffect(() => {
    // Initialize with sample data
    const sampleMembers: CooperativeMember[] = [
      {
        id: "1",
        name: "João Silva",
        role: "admin",
        farm: "Quinta São João",
        location: "Luanda",
        joinDate: "2023-01-15",
      },
      {
        id: "2",
        name: "Maria Santos",
        role: "member",
        farm: "Fazenda Maria",
        location: "Benguela",
        joinDate: "2023-03-20",
      },
      {
        id: "3",
        name: "António Costa",
        role: "member",
        farm: "Quinta do Vale",
        location: "Huambo",
        joinDate: "2023-06-10",
      },
      {
        id: "4",
        name: "Ana Ferreira",
        role: "member",
        farm: "Fazenda Ana",
        location: "Malanje",
        joinDate: "2023-08-05",
      },
    ]

    const sampleResources: SharedResource[] = [
      {
        id: "1",
        name: "Tractor John Deere",
        type: "equipment",
        owner: "João Silva",
        available: true,
        cost: 50000,
        description: "Tractor para preparação do solo e plantio",
        contact: "+244 923 456 789",
      },
      {
        id: "2",
        name: "Técnicas de Irrigação por Gotejamento",
        type: "knowledge",
        owner: "Maria Santos",
        available: true,
        cost: 0,
        description: "Formação sobre sistemas de irrigação eficientes",
        contact: "+244 924 567 890",
      },
      {
        id: "3",
        name: "Equipa de Colheita",
        type: "labor",
        owner: "António Costa",
        available: true,
        cost: 15000,
        description: "5 trabalhadores especializados em colheita",
        contact: "+244 925 678 901",
      },
      {
        id: "4",
        name: "Camião de Transporte",
        type: "transport",
        owner: "Ana Ferreira",
        available: false,
        cost: 25000,
        description: "Transporte de produtos para o mercado",
        contact: "+244 926 789 012",
      },
    ]

    const samplePlans: GroupPlan[] = [
      {
        id: "1",
        title: "Plantio Conjunto de Milho",
        description: "Coordenação do plantio de milho entre os membros para otimizar recursos",
        crop: "Milho",
        startDate: "2024-02-01",
        endDate: "2024-06-30",
        participants: ["1", "2", "3"],
        coordinator: "1",
        status: "planning",
      },
      {
        id: "2",
        title: "Compra Conjunta de Fertilizantes",
        description: "Compra em grupo para obter melhores preços",
        crop: "Várias",
        startDate: "2024-01-15",
        endDate: "2024-01-31",
        participants: ["1", "2", "3", "4"],
        coordinator: "2",
        status: "active",
      },
    ]

    const sampleMessages: Message[] = [
      {
        id: "1",
        sender: "João Silva",
        content: "Bom dia pessoal! Alguém precisa do tractor esta semana?",
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        type: "resource",
      },
      {
        id: "2",
        sender: "Maria Santos",
        content: "Atenção: previsão de chuva forte para os próximos 3 dias. Protejam as culturas!",
        timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
        type: "alert",
      },
      {
        id: "3",
        sender: "António Costa",
        content: "A reunião sobre o plantio conjunto está marcada para sexta-feira às 14h.",
        timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
        type: "planning",
      },
    ]

    setMembers(sampleMembers)
    setSharedResources(sampleResources)
    setGroupPlans(samplePlans)
    setMessages(sampleMessages)
  }, [])

  const sendMessage = () => {
    if (!newMessage.trim()) return

    const message: Message = {
      id: Date.now().toString(),
      sender: "Você",
      content: newMessage,
      timestamp: new Date().toISOString(),
      type: "general",
    }

    setMessages([message, ...messages])
    setNewMessage("")
  }

  const getResourceTypeIcon = (type: SharedResource["type"]) => {
    switch (type) {
      case "equipment":
        return "🚜"
      case "knowledge":
        return "📚"
      case "labor":
        return "👥"
      case "transport":
        return "🚛"
      default:
        return "📦"
    }
  }

  const getResourceTypeLabel = (type: SharedResource["type"]) => {
    switch (type) {
      case "equipment":
        return "Equipamento"
      case "knowledge":
        return "Conhecimento"
      case "labor":
        return "Mão-de-obra"
      case "transport":
        return "Transporte"
      default:
        return type
    }
  }

  const getStatusColor = (status: GroupPlan["status"]) => {
    switch (status) {
      case "planning":
        return "bg-blue-100 text-blue-800"
      case "active":
        return "bg-green-100 text-green-800"
      case "completed":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusLabel = (status: GroupPlan["status"]) => {
    switch (status) {
      case "planning":
        return "Planeamento"
      case "active":
        return "Activo"
      case "completed":
        return "Concluído"
      default:
        return status
    }
  }

  const getMessageTypeColor = (type: Message["type"]) => {
    switch (type) {
      case "alert":
        return "border-l-red-500 bg-red-50"
      case "resource":
        return "border-l-blue-500 bg-blue-50"
      case "planning":
        return "border-l-green-500 bg-green-50"
      default:
        return "border-l-gray-500 bg-gray-50"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">{t("cooperativeFeatures")}</h2>
          <p className="text-gray-600">Colabore com outros agricultores da sua região</p>
        </div>
        <Badge variant="secondary" className="flex items-center gap-2">
          <Users className="h-4 w-4" />
          {members.length} membros
        </Badge>
      </div>

      {/* Main Tabs */}
      <Tabs defaultValue="communication" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="communication" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            <span className="hidden sm:inline">Comunicação</span>
          </TabsTrigger>
          <TabsTrigger value="resources" className="flex items-center gap-2">
            <Share2 className="h-4 w-4" />
            <span className="hidden sm:inline">Recursos</span>
          </TabsTrigger>
          <TabsTrigger value="planning" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span className="hidden sm:inline">Planeamento</span>
          </TabsTrigger>
          <TabsTrigger value="members" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span className="hidden sm:inline">Membros</span>
          </TabsTrigger>
        </TabsList>

        {/* Communication Tab */}
        <TabsContent value="communication" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Chat da Cooperativa</CardTitle>
              <CardDescription>Comunique com outros membros em tempo real</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Message Input */}
              <div className="flex space-x-2">
                <Input
                  placeholder="Digite sua mensagem..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                />
                <Button onClick={sendMessage}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>

              {/* Messages */}
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {messages.map((message) => (
                  <div key={message.id} className={`p-3 rounded-lg border-l-4 ${getMessageTypeColor(message.type)}`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-sm">{message.sender}</span>
                      <span className="text-xs text-gray-500">
                        {new Date(message.timestamp).toLocaleTimeString("pt-AO")}
                      </span>
                    </div>
                    <p className="text-sm">{message.content}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Resources Tab */}
        <TabsContent value="resources" className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Recursos Partilhados</h3>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Partilhar Recurso
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sharedResources.map((resource) => (
              <Card key={resource.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <span className="text-2xl">{getResourceTypeIcon(resource.type)}</span>
                      {resource.name}
                    </CardTitle>
                    <Badge variant={resource.available ? "default" : "secondary"}>
                      {resource.available ? "Disponível" : "Ocupado"}
                    </Badge>
                  </div>
                  <CardDescription>{getResourceTypeLabel(resource.type)}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-gray-600">{resource.description}</p>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Proprietário:</span>
                      <span className="font-medium">{resource.owner}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Custo:</span>
                      <span className="font-medium">
                        {resource.cost === 0 ? "Gratuito" : `${resource.cost.toLocaleString()} Kz`}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Contacto:</span>
                      <span className="font-medium text-blue-600">{resource.contact}</span>
                    </div>
                  </div>

                  <Button
                    className="w-full"
                    disabled={!resource.available}
                    variant={resource.available ? "default" : "secondary"}
                  >
                    {resource.available ? "Solicitar" : "Indisponível"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Planning Tab */}
        <TabsContent value="planning" className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Planos de Grupo</h3>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Criar Plano
            </Button>
          </div>

          <div className="space-y-4">
            {groupPlans.map((plan) => (
              <Card key={plan.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{plan.title}</CardTitle>
                    <Badge className={getStatusColor(plan.status)}>{getStatusLabel(plan.status)}</Badge>
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Cultura:</span>
                      <div className="font-medium">{plan.crop}</div>
                    </div>
                    <div>
                      <span className="text-gray-600">Início:</span>
                      <div className="font-medium">{new Date(plan.startDate).toLocaleDateString("pt-AO")}</div>
                    </div>
                    <div>
                      <span className="text-gray-600">Fim:</span>
                      <div className="font-medium">{new Date(plan.endDate).toLocaleDateString("pt-AO")}</div>
                    </div>
                  </div>

                  <div>
                    <span className="text-gray-600 text-sm">Coordenador:</span>
                    <div className="font-medium">{members.find((m) => m.id === plan.coordinator)?.name}</div>
                  </div>

                  <div>
                    <span className="text-gray-600 text-sm">Participantes ({plan.participants.length}):</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {plan.participants.map((participantId) => {
                        const participant = members.find((m) => m.id === participantId)
                        return participant ? (
                          <Badge key={participantId} variant="secondary" className="text-xs">
                            {participant.name}
                          </Badge>
                        ) : null
                      })}
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      Ver Detalhes
                    </Button>
                    <Button size="sm">Participar</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Members Tab */}
        <TabsContent value="members" className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Membros da Cooperativa</h3>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Convidar Membro
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {members.map((member) => (
              <Card key={member.id}>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={member.avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium">{member.name}</h4>
                        {member.role === "admin" && (
                          <Badge variant="destructive" className="text-xs">
                            Admin
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{member.farm}</p>
                      <p className="text-xs text-gray-500">{member.location}</p>
                    </div>
                  </div>
                  <div className="mt-4 text-xs text-gray-500">
                    Membro desde {new Date(member.joinDate).toLocaleDateString("pt-AO")}
                  </div>
                  <div className="mt-3 flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <MessageSquare className="h-3 w-3 mr-1" />
                      Mensagem
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      Ver Perfil
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
