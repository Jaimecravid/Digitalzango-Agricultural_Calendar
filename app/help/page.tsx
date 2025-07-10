"use client"

import Link from "next/link"
import { Search, Book, MessageCircle, Phone, Mail } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { RegionProvider } from "../contexts/region-context"
import Header from "../components/header"

function useLanguage() {
  const translations: { [key: string]: string } = {
    helpCenter: "Centro de Ajuda",
    search: "Pesquisar",
    faq: "Perguntas Frequentes",
    tutorials: "Tutoriais",
    contactUs: "Contactar-nos",
    forum: "Fórum",
    gettingStarted: "Primeiros Passos",
    gettingStartedDesc: "Como começar a usar o Calendário Agrícola",
    tools: "Ferramentas",
    toolsDesc: "Guias para usar todas as funcionalidades",
    community: "Comunidade",
    communityDesc: "Participar na comunidade de agricultores",
    quickLinks: "Links Rápidos",
    stillNeedHelp: "Ainda Precisa de Ajuda?",
    supportTeamReady: "A nossa equipa de suporte está pronta para ajudar",
    email: "Email",
    phone: "Telefone",
    responseTime: "Resposta em até 24 horas",
    businessHours: "Segunda a Sexta, 8h-17h"
  }

  const t = (key: string): string => translations[key] || key
  return { t }
}

function HelpCenterContent() {
  const { t } = useLanguage()

  const helpCategories = [
    {
      title: t("gettingStarted"),
      description: t("gettingStartedDesc"),
      icon: Book,
      articles: [
        "Como criar a sua primeira conta",
        "Configurar a sua região",
        "Entender o calendário agrícola",
        "Adicionar as suas primeiras culturas",
      ],
    },
    {
      title: t("tools"),
      description: t("toolsDesc"),
      icon: Search,
      articles: [
        "Como usar o planeador de culturas",
        "Interpretar previsões meteorológicas",
        "Gerir recursos e inventário",
        "Configurar alertas de pragas",
      ],
    },
    {
      title: t("community"),
      description: t("communityDesc"),
      icon: MessageCircle,
      articles: [
        "Juntar-se a grupos locais",
        "Partilhar recursos com outros",
        "Participar em discussões",
        "Organizar eventos comunitários",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t("helpCenter")}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encontre respostas para as suas perguntas e aprenda a usar todas as funcionalidades do Calendário Agrícola
            para Angola.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input placeholder="Pesquisar artigos de ajuda..." className="pl-10 py-3 text-lg" />
            <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-600 hover:bg-green-700">
              {t("search")}
            </Button>
          </div>
        </div>

        {/* Help Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {helpCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <category.icon className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.articles.map((article, idx) => (
                    <li key={idx}>
                      <Link
                        href="#"
                        className="text-sm text-gray-600 hover:text-green-600 transition-colors block py-1"
                      >
                        • {article}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Links */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">{t("quickLinks")}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/faq" className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <div className="text-2xl mb-2">❓</div>
              <div className="text-sm font-medium">{t("faq")}</div>
            </Link>
            <Link href="/tutorials" className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <div className="text-2xl mb-2">🎹</div>
              <div className="text-sm font-medium">{t("tutorials")}</div>
            </Link>
            <Link href="/contact" className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <div className="text-2xl mb-2">📞</div>
              <div className="text-sm font-medium">{t("contactUs")}</div>
            </Link>
            <Link href="/forum" className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <div className="text-2xl mb-2">💬</div>
              <div className="text-sm font-medium">{t("forum")}</div>
            </Link>
          </div>
        </div>

        {/* Contact Support */}
        <Card>
          <CardHeader>
            <CardTitle className="text-center">{t("stillNeedHelp")}</CardTitle>
            <CardDescription className="text-center">{t("supportTeamReady")}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <Mail className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">{t("email")}</h3>
                <p className="text-gray-600 mb-4">{t("responseTime")}</p>
                <Button variant="outline">support@calendarioagricola.ao</Button>
              </div>
              <div className="text-center">
                <Phone className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">{t("phone")}</h3>
                <p className="text-gray-600 mb-4">{t("businessHours")}</p>
                <Button variant="outline">+244 923 456 789</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default function HelpPage() {
  return (
    <RegionProvider>
      <HelpCenterContent />
    </RegionProvider>
  )
}
