"use client"

import Link from "next/link"
import { Bug, BookOpen, Wheat } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import { RegionProvider } from "../contexts/region-context"
import Header from "../components/header"



// Use centralized language context
import { useLanguage } from "../contexts/language-context";

function InformacoesContent() {
  const { t } = useLanguage();

  const infoSections = [
    {
      title: t("pages.informacoes.pestsAndDiseases"),
      description: t("pages.informacoes.pestsDescription"),
      icon: Bug,
      href: "/pests",
      color: "text-red-600",
      bgColor: "bg-red-100",
    },
    {
      title: t("pages.informacoes.crops"),
      description: t("pages.informacoes.informationPageDescription"),
      icon: Wheat,
      href: "/crops",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: t("pages.informacoes.cropGuides"),
      description: t("pages.informacoes.informationPageDescription"),
      icon: BookOpen,
      href: "/guides",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t("pages.informacoes.title")}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("pages.informacoes.informationPageDescription")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {infoSections.map((section, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div
                  className={`w-16 h-16 ${section.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <section.icon className={`h-8 w-8 ${section.color}`} />
                </div>
                <CardTitle className="text-xl">{section.title}</CardTitle>
                <CardDescription>{section.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={section.href}>
                  <Button className="w-full bg-green-600 hover:bg-green-700">{t("pages.informacoes.viewInformation")}</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function InformacoesPage() {
  return <RegionProvider>
        <InformacoesContent />
      </RegionProvider>
}

