"use client"
import { Calendar, MapPin, Users, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"


import Header from "../components/header"

function EventsContent() {
  

  const upcomingEvents = [
    {
      id: 1,
      title: "Workshop: TÃ©cnicas Modernas de IrrigaÃ§Ã£o",
      description:
        "Aprenda sobre sistemas de irrigaÃ§Ã£o eficientes e sustentÃ¡veis para maximizar a produÃ§Ã£o com menos Ã¡gua.",
      date: "2024-02-15",
      time: "09:00 - 17:00",
      location: "Centro de FormaÃ§Ã£o AgrÃ­cola, Luanda",
      organizer: "MinistÃ©rio da Agricultura",
      attendees: 45,
      maxAttendees: 60,
      type: "Workshop",
      category: "Tecnologia",
      price: "Gratuito",
      featured: true,
    },
    {
      id: 2,
      title: "Feira AgrÃ­cola de Benguela 2024",
      description: "A maior feira agrÃ­cola da regiÃ£o com exposiÃ§Ãµes, demonstraÃ§Ãµes e networking entre agricultores.",
      date: "2024-02-20",
      time: "08:00 - 18:00",
      location: "PavilhÃ£o de ExposiÃ§Ãµes, Benguela",
      organizer: "Governo Provincial de Benguela",
      attendees: 234,
      maxAttendees: 500,
      type: "Feira",
      category: "Networking",
      price: "2.000 Kz",
      featured: false,
    },
    {
      id: 3,
      title: "SeminÃ¡rio: Controlo BiolÃ³gico de Pragas",
      description: "MÃ©todos naturais e sustentÃ¡veis para controlar pragas sem prejudicar o meio ambiente.",
      date: "2024-02-25",
      time: "14:00 - 16:00",
      location: "Universidade Agostinho Neto, Luanda",
      organizer: "Faculdade de CiÃªncias AgrÃ¡rias",
      attendees: 28,
      maxAttendees: 40,
      type: "SeminÃ¡rio",
      category: "Sustentabilidade",
      price: "Gratuito",
      featured: false,
    },
    {
      id: 4,
      title: "Encontro de Cooperativas do Huambo",
      description:
        "ReuniÃ£o mensal das cooperativas agrÃ­colas da provÃ­ncia para partilha de experiÃªncias e planeamento conjunto.",
      date: "2024-03-01",
      time: "10:00 - 15:00",
      location: "Casa da Cultura, Huambo",
      organizer: "FederaÃ§Ã£o de Cooperativas do Huambo",
      attendees: 67,
      maxAttendees: 80,
      type: "Encontro",
      category: "Cooperativas",
      price: "Gratuito",
      featured: false,
    },
    {
      id: 5,
      title: "Curso: Agricultura Digital e Apps MÃ³veis",
      description: "Como usar tecnologia e aplicaÃ§Ãµes mÃ³veis para melhorar a gestÃ£o da sua quinta.",
      date: "2024-03-05",
      time: "09:00 - 12:00",
      location: "Centro de InovaÃ§Ã£o, Luanda",
      organizer: "TechFarm Angola",
      attendees: 15,
      maxAttendees: 25,
      type: "Curso",
      category: "Tecnologia",
      price: "5.000 Kz",
      featured: false,
    },
  ]

  const pastEvents = [
    {
      id: 6,
      title: "Workshop: PreparaÃ§Ã£o de Solo para Ã‰poca Chuvosa",
      date: "2024-01-20",
      location: "Malanje",
      attendees: 55,
      rating: 4.8,
    },
    {
      id: 7,
      title: "ConferÃªncia Nacional de Agricultura SustentÃ¡vel",
      date: "2024-01-15",
      location: "Luanda",
      attendees: 320,
      rating: 4.9,
    },
    {
      id: 8,
      title: "Feira de Sementes e Mudas",
      date: "2024-01-10",
      location: "UÃ­ge",
      attendees: 180,
      rating: 4.7,
    },
  ]

  const eventCategories = [
    { name: "Todos", count: upcomingEvents.length, active: true },
    { name: "Workshops", count: upcomingEvents.filter((e) => e.type === "Workshop").length, active: false },
    { name: "Feiras", count: upcomingEvents.filter((e) => e.type === "Feira").length, active: false },
    { name: "SeminÃ¡rios", count: upcomingEvents.filter((e) => e.type === "SeminÃ¡rio").length, active: false },
    { name: "Cursos", count: upcomingEvents.filter((e) => e.type === "Curso").length, active: false },
  ]

  const featuredEvent = upcomingEvents.find((event) => event.featured)
  const regularEvents = upcomingEvents.filter((event) => !event.featured)

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Eventos</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Participe em eventos agrÃ­colas em todo o paÃ­s. Aprenda, conecte-se e cresÃ§a com a comunidade agrÃ­cola
            angolana.
          </p>
        </div>

        {/* Event Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {eventCategories.map((category, index) => (
            <Badge
              key={index}
              variant={category.active ? "default" : "secondary"}
              className="cursor-pointer hover:bg-green-100 hover:text-green-800 transition-colors"
            >
              {category.name} ({category.count})
            </Badge>
          ))}
        </div>

        {/* Featured Event */}
        {featuredEvent && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Evento em Destaque</h2>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow border-green-200">
              <div className="bg-green-50 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Badge className="bg-green-600 text-white">Destaque</Badge>
                  <Badge variant="outline">{featuredEvent.type}</Badge>
                  <Badge className="bg-blue-100 text-blue-800">{featuredEvent.category}</Badge>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{featuredEvent.title}</h3>
                <p className="text-gray-700 mb-6">{featuredEvent.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{new Date(featuredEvent.date).toLocaleDateString("pt-AO")}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{featuredEvent.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{featuredEvent.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">
                      {featuredEvent.attendees}/{featuredEvent.maxAttendees} inscritos
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-gray-600">
                      Organizado por: <span className="font-medium">{featuredEvent.organizer}</span>
                    </p>
                    <p className="text-lg font-bold text-green-600">{featuredEvent.price}</p>
                  </div>
                  <div className="flex gap-3">
                    <Button className="bg-green-600 hover:bg-green-700">Inscrever-se</Button>
                    <Button variant="outline">Saber Mais</Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Events List */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">PrÃ³ximos Eventos</h2>
            <div className="space-y-6">
              {regularEvents.map((event) => (
                <Card key={event.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline">{event.type}</Badge>
                          <Badge className="bg-blue-100 text-blue-800">{event.category}</Badge>
                        </div>
                        <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                        <CardDescription className="text-base">{event.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm">{new Date(event.date).toLocaleDateString("pt-AO")}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Clock className="h-4 w-4" />
                          <span className="text-sm">{event.time}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Users className="h-4 w-4" />
                          <span className="text-sm">
                            {event.attendees}/{event.maxAttendees} inscritos
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Por: {event.organizer}</p>
                        <p className="font-bold text-green-600">{event.price}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          Inscrever-se
                        </Button>
                        <Button size="sm" variant="outline">
                          Detalhes
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Create Event */}
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Organize um Evento</h3>
                <p className="text-gray-600 text-sm mb-4">Partilhe o seu conhecimento com a comunidade</p>
                <Button className="w-full bg-green-600 hover:bg-green-700">Criar Evento</Button>
              </CardContent>
            </Card>

            {/* Past Events */}
            <Card>
              <CardHeader>
                <CardTitle>Eventos Passados</CardTitle>
                <CardDescription>Eventos recentes com sucesso</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pastEvents.map((event) => (
                    <div key={event.id} className="border-b border-gray-100 pb-3 last:border-b-0">
                      <h4 className="font-medium text-sm mb-1">{event.title}</h4>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{new Date(event.date).toLocaleDateString("pt-AO")}</span>
                        <span>{event.attendees} participantes</span>
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <span className="text-xs text-gray-500">AvaliaÃ§Ã£o:</span>
                        <span className="text-xs font-medium text-yellow-600">â­ {event.rating}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Event Calendar */}
            <Card>
              <CardHeader>
                <CardTitle>CalendÃ¡rio de Eventos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center text-gray-500 py-8">
                  <Calendar className="h-12 w-12 mx-auto mb-3 text-gray-300" />
                  <p className="text-sm">CalendÃ¡rio interactivo em breve</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function EventsPage() {
  return <RegionProvider>
        <EventsContent />
      </RegionProvider>
}

