"use client"

import Link from "next/link"
import { Sprout, Target, Users, Award, Mail, Phone, MapPin } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LanguageProvider } from "../contexts/language-context"
import { RegionProvider } from "../contexts/region-context"
import Header from "../components/header"
import { useLanguage } from "../contexts/language-context"

function SobreContent() {
  const { t } = useLanguage()

  const values = [
    {
      title: t("mission"),
      description:
        "Capacitar os agricultores angolanos com ferramentas tecnológicas para melhorar a produtividade agrícola",
      icon: Target,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: t("community"),
      description: "Criar uma rede forte de agricultores que partilham conhecimentos e recursos",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: t("excellence"),
      description: "Fornecer informações precisas e ferramentas de alta qualidade para o sector agrícola",
      icon: Award,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">{t("aboutPageTitle")}</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">{t("aboutPageDescription")}</p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div
                  className={`w-16 h-16 ${value.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <value.icon className={`h-8 w-8 ${value.color}`} />
                </div>
                <CardTitle className="text-xl">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{value.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t("ourStory")}</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                O Calendário Agrícola para Angola nasceu da necessidade de modernizar e digitalizar o sector agrícola
                angolano, fornecendo aos agricultores ferramentas tecnológicas que os ajudem a tomar decisões
                informadas.
              </p>
              <p>
                Desenvolvido por uma equipa de especialistas em agricultura e tecnologia, a nossa plataforma combina
                conhecimento local com tecnologia moderna para criar soluções práticas e eficazes.
              </p>
              <p>
                Desde o nosso lançamento, temos apoiado milhares de agricultores em todas as 18 províncias de Angola,
                contribuindo para o aumento da produtividade e sustentabilidade agrícola.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t("whatWeOffer")}</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Sprout className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Calendário Personalizado</h3>
                  <p className="text-gray-600">Planeamento agrícola adaptado às condições específicas de cada região</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Target className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Previsões Meteorológicas</h3>
                  <p className="text-gray-600">Dados meteorológicos precisos para melhor planeamento</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <Users className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Comunidade Activa</h3>
                  <p className="text-gray-600">Rede de agricultores para partilha de conhecimentos e recursos</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-50 rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("getInTouch")}</h2>
            <p className="text-gray-600">{t("questionsOrSuggestions")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t("email")}</h3>
              <p className="text-gray-600">info@calendarioagricola.ao</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t("phone")}</h3>
              <p className="text-gray-600">+244 923 456 789</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t("location")}</h3>
              <p className="text-gray-600">Luanda, Angola</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/contact">
              <Button className="bg-green-600 hover:bg-green-700 px-8">{t("contactUs")}</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SobrePage() {
  return (
    <LanguageProvider>
      <RegionProvider>
        <SobreContent />
      </RegionProvider>
    </LanguageProvider>
  )
}
