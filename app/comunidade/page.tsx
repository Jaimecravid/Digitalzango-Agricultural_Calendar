"use client"

import Link from "next/link"
import { Users, MessageSquare, Share2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LanguageProvider } from "../contexts/language-context"
import { RegionProvider } from "../contexts/region-context"
import Header from "../components/header"
import { useLanguage } from "../contexts/language-context"

function ComunidadeContent() {
  const { t } = useLanguage()

  const communityFeatures = [
    {
      title: t("farmerGroups"),
      description: "Conecte-se com outros agricultores da sua região e partilhe experiências",
      icon: Users,
      href: "/groups",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      title: t("discussionForum"),
      description: "Participe em discussões sobre técnicas agrícolas e resolução de problemas",
      icon: MessageSquare,
      href: "/forum",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: t("resourceSharing"),
      description: "Partilhe equipamentos, conhecimentos e recursos com outros membros",
      icon: Share2,
      href: "/sharing",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t("communityPageTitle")}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("communityPageDescription")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communityFeatures.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div
                  className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={feature.href}>
                  <Button className="w-full bg-green-600 hover:bg-green-700">{t("participate")}</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Community Stats */}
        <div className="mt-16 bg-green-50 rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("ourCommunity")}</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">1,200+</div>
              <div className="text-gray-600">{t("registeredFarmers")}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">18</div>
              <div className="text-gray-600">{t("provincesCovered")}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">{t("activeDiscussions")}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-gray-600">{t("userSatisfaction")}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ComunidadePage() {
  return (
    <LanguageProvider>
      <RegionProvider>
        <ComunidadeContent />
      </RegionProvider>
    </LanguageProvider>
  )
}
