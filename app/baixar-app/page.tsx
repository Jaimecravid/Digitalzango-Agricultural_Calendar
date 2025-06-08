"use client"

import Link from "next/link"
import { Download, Smartphone, Tablet, Monitor, Check, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LanguageProvider } from "../contexts/language-context"
import { RegionProvider } from "../contexts/region-context"
import Header from "../components/header"
import { useLanguage } from "../contexts/language-context"

function BaixarAppContent() {
  const { t } = useLanguage()

  const features = [
    `📅 ${t("calendar")} offline`,
    `🌤️ ${t("weatherForecast")}`,
    `🌱 ${t("resourceManagement")}`,
    `🐛 ${t("pestAlerts")}`,
    `👥 ${t("community")} de agricultores`,
    `📊 Relatórios de actividades`,
  ]

  const platforms = [
    {
      name: "Android",
      icon: "🤖",
      description: "Compatível com Android 6.0+",
      size: "25 MB",
      version: "1.0.0",
      downloadUrl: "#",
    },
    {
      name: "iOS",
      icon: "🍎",
      description: "Compatível com iOS 12.0+",
      size: "28 MB",
      version: "1.0.0",
      downloadUrl: "#",
    },
    {
      name: "Web App",
      icon: "🌐",
      description: "Acesse pelo navegador",
      size: "Instalação instantânea",
      version: "1.0.0",
      downloadUrl: "/",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6">
              <Download className="h-12 w-12 text-green-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t("downloadAppPageTitle")}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("downloadAppPageDescription")}</p>
          </div>

          {/* Rating and Stats */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <span className="text-gray-600">4.8 (1,200+ {t("ratings")})</span>
            </div>
            <div className="text-gray-600">
              <span className="font-semibold">10,000+</span> {t("downloads")}
            </div>
            <Badge className="bg-green-100 text-green-800">{t("free")}</Badge>
          </div>
        </div>

        {/* Platform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {platforms.map((platform, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-6xl mb-4">{platform.icon}</div>
                <CardTitle className="text-xl">{platform.name}</CardTitle>
                <CardDescription>{platform.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-sm text-gray-600 space-y-1">
                  <div>
                    {t("size")}: {platform.size}
                  </div>
                  <div>
                    {t("version")}: {platform.version}
                  </div>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                  <a href={platform.downloadUrl}>
                    <Download className="h-4 w-4 mr-2" />
                    {t("downloadFor")} {platform.name}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t("mainFeatures")}</h2>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t("compatibility")}</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Smartphone className="h-8 w-8 text-blue-600" />
                <div>
                  <h3 className="font-semibold">{t("mobileDevices")}</h3>
                  <p className="text-gray-600 text-sm">Android 6.0+ e iOS 12.0+</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Tablet className="h-8 w-8 text-purple-600" />
                <div>
                  <h3 className="font-semibold">{t("tablets")}</h3>
                  <p className="text-gray-600 text-sm">{t("optimizedInterface")}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Monitor className="h-8 w-8 text-green-600" />
                <div>
                  <h3 className="font-semibold">{t("computers")}</h3>
                  <p className="text-gray-600 text-sm">{t("responsiveWebApp")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Installation Instructions */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle>{t("howToInstall")}</CardTitle>
            <CardDescription>{t("simpleInstructions")}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 font-bold">1</span>
                </div>
                <h3 className="font-semibold mb-2">{t("download")}</h3>
                <p className="text-gray-600 text-sm">{t("downloadStep")}</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 font-bold">2</span>
                </div>
                <h3 className="font-semibold mb-2">{t("install")}</h3>
                <p className="text-gray-600 text-sm">{t("installStep")}</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 font-bold">3</span>
                </div>
                <h3 className="font-semibold mb-2">{t("start")}</h3>
                <p className="text-gray-600 text-sm">{t("startStep")}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Support Section */}
        <div className="text-center bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("needHelp")}</h2>
          <p className="text-gray-600 mb-6">{t("supportTeamReady")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/help">
              <Button variant="outline">{t("helpCenter")}</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline">{t("contactSupport")}</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function BaixarAppPage() {
  return (
    <LanguageProvider>
      <RegionProvider>
        <BaixarAppContent />
      </RegionProvider>
    </LanguageProvider>
  )
}
