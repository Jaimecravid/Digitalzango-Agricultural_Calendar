"use client"

import Link from "next/link"
import { Calendar, Cloud, Package } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import { RegionProvider } from "../contexts/region-context"
import Header from "../components/header"


function FerramentasContent() {
  

  const tools = [
    {
      title: t("agriculturalCalendar"),
      description: t("calendarDescription"),
      icon: Calendar,
      href: "/calendar",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: t("weatherForecast"),
      description: t("weatherDescription"),
      icon: Cloud,
      href: "/weather",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: t("resourceManagement"),
      description: t("resourcesDescription"),
      icon: Package,
      href: "/resources",
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t("toolsPageTitle")}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("toolsPageDescription")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className={`w-16 h-16 ${tool.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <tool.icon className={`h-8 w-8 ${tool.color}`} />
                </div>
                <CardTitle className="text-xl">{tool.title}</CardTitle>
                <CardDescription>{tool.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={tool.href}>
                  <Button className="w-full bg-green-600 hover:bg-green-700">{t("accessTool")}</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function FerramentasPage() {
  return <RegionProvider>
        <FerramentasContent />
      </RegionProvider>
}

