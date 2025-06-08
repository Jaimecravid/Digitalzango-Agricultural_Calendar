"use client"

import { Calendar, Cloud, Bug, Sprout, Users, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LanguageProvider, useLanguage } from "./contexts/language-context"
import { RegionProvider, useRegion } from "./contexts/region-context"
import { WeatherProvider } from "./contexts/weather-context"
import Header from "./components/header"
import Link from "next/link"

function AppContent() {
  const { t, isLoading } = useLanguage()
  const { getCurrentRegion } = useRegion()

  const getCurrentRegionData = () => {
    return getCurrentRegion()
  }

  const features = [
    {
      icon: Calendar,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      title: t("calendar"),
      description: t("calendarDescription"),
      buttonText: t("accessTool"),
      href: "/calendario",
    },
    {
      icon: Cloud,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      title: t("weather"),
      description: t("weatherDescription"),
      buttonText: t("accessTool"),
      href: "/tempo",
    },
    {
      icon: Bug,
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
      title: t("pests"),
      description: t("pestsDescription"),
      buttonText: t("viewInformation"),
      href: "/pragas",
    },
    {
      icon: Sprout,
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
      title: t("resources"),
      description: t("resourcesDescription"),
      buttonText: t("accessTool"),
      href: "/recursos",
    },
    {
      icon: Users,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      title: t("community"),
      description: t("communityDescription"),
      buttonText: t("participate"),
      href: "/comunidade",
    },
    {
      icon: Download,
      iconBg: "bg-gray-100",
      iconColor: "text-gray-600",
      title: t("downloadApp"),
      description: t("downloadAppPageDescription"),
      buttonText: t("downloadApp"),
      href: "/baixar-app",
    },
  ]

  const stats = [
    { number: "18", label: t("provincesLabel"), color: "text-green-600" },
    { number: "4", label: t("languagesLabel"), color: "text-blue-600" },
    { number: "12", label: t("monthsLabel"), color: "text-orange-600" },
    { number: "24/7", label: t("weatherLabel"), color: "text-purple-600" },
  ]

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">{t("loading")}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t("appTitle")}</h1>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">{t("welcomeDescription")}</p>

          {/* Region Badge */}
          <div className="inline-block">
            <Badge className="bg-green-100 text-green-800 px-6 py-2 text-base">
              {t("currentRegion")}: {getCurrentRegionData()?.name}
              <br />
              <span className="text-sm">
                {t("climate")}: {getCurrentRegionData()?.climate} | {t("rainySeason")}: {t("month")}{" "}
                {getCurrentRegionData()?.rainySeasonStart}-{getCurrentRegionData()?.rainySeasonEnd}
              </span>
            </Badge>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 ${feature.iconBg} rounded-full flex items-center justify-center mx-auto mb-6`}
                  >
                    <feature.icon className={`h-8 w-8 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <Link href={feature.href}>
                    <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                      {feature.buttonText}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-6xl">🌱</div>
          <div className="absolute top-20 right-20 text-4xl">🌾</div>
          <div className="absolute bottom-20 left-20 text-5xl">🚜</div>
          <div className="absolute bottom-10 right-10 text-4xl">🌽</div>
          <div className="absolute top-1/2 left-1/4 text-3xl">☀️</div>
          <div className="absolute top-1/3 right-1/3 text-4xl">💧</div>
        </div>
-
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                {t("startPlanningTitle")}
              </h2>
              <p className="text-xl text-orange-50 mb-2 font-medium">{t("startPlanningDescription")}</p>
              <p className="text-lg text-orange-100 mb-8 leading-relaxed">{t("startPlanningDescription")}</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/calendario">
                  <Button
                    size="lg"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                  >
                    📅 {t("viewCalendar")}
                  </Button>
                </Link>
                <Link href="/baixar-app">
                  <Button
                    size="lg"
                    variant="ghost"
                    className="bg-white bg-opacity-20 border border-white border-opacity-30 text-white hover:bg-white hover:bg-opacity-30 px-6 py-4 text-base font-medium transition-all duration-200 backdrop-blur-sm"
                  >
                    📱 {t("downloadApp")}
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column - Illustration */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Farmer Illustration Placeholder */}
                <div className="w-80 h-80 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white border-opacity-30">
                  <div className="text-center">
                    <div className="text-8xl mb-4">👨‍🌾</div>
                    <div className="text-6xl">📅</div>
                    <div className="absolute -top-4 -right-4 text-4xl animate-bounce">🌱</div>
                    <div className="absolute -bottom-4 -left-4 text-4xl animate-pulse">🌾</div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-8 left-8 bg-white bg-opacity-90 rounded-lg p-3 shadow-lg animate-float">
                  <div className="text-2xl">📊</div>
                  <div className="text-xs text-gray-600 font-medium">Analytics</div>
                </div>

                <div className="absolute -bottom-8 right-8 bg-white bg-opacity-90 rounded-lg p-3 shadow-lg animate-float-delayed">
                  <div className="text-2xl">🌤️</div>
                  <div className="text-xs text-gray-600 font-medium">{t("weather")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Keep existing footer code but update text to use translations */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Main Footer Content - Compact */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            {/* Legal Column */}
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-gray-900 flex items-center gap-1">
                <span className="text-base">⚖️</span>
                Legal
              </h4>
              <ul className="space-y-1 text-xs">
                <li>
                  <Link
                    href="/terms"
                    className="text-gray-600 hover:text-green-600 transition-colors focus:outline-none focus:ring-1 focus:ring-green-500 rounded"
                  >
                    Termos & Condições
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-gray-600 hover:text-green-600 transition-colors focus:outline-none focus:ring-1 focus:ring-green-500 rounded"
                  >
                    Política de Privacidade
                  </Link>
                </li>
                <li>
                  <Link
                    href="/affiliate-disclosure"
                    className="text-gray-600 hover:text-green-600 transition-colors focus:outline-none focus:ring-1 focus:ring-green-500 rounded"
                  >
                    Divulgação de Afiliados
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support Column */}
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-gray-900 flex items-center gap-1">
                <span className="text-base">❓</span>
                Suporte
              </h4>
              <ul className="space-y-1 text-xs">
                <li>
                  <Link
                    href="/help"
                    className="text-gray-600 hover:text-green-600 transition-colors focus:outline-none focus:ring-1 focus:ring-green-500 rounded"
                  >
                    {t("helpCenter")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-gray-600 hover:text-green-600 transition-colors focus:outline-none focus:ring-1 focus:ring-green-500 rounded"
                  >
                    {t("faq")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-600 hover:text-green-600 transition-colors focus:outline-none focus:ring-1 focus:ring-green-500 rounded"
                  >
                    {t("contactUs")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-gray-900 flex items-center gap-1">
                <span className="text-base">🌱</span>
                Empresa
              </h4>
              <ul className="space-y-1 text-xs">
                <li>
                  <Link
                    href="/sobre"
                    className="text-gray-600 hover:text-green-600 transition-colors focus:outline-none focus:ring-1 focus:ring-green-500 rounded"
                  >
                    {t("about")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-600 hover:text-green-600 transition-colors focus:outline-none focus:ring-1 focus:ring-green-500 rounded"
                  >
                    {t("blog")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-gray-600 hover:text-green-600 transition-colors focus:outline-none focus:ring-1 focus:ring-green-500 rounded"
                  >
                    {t("careers")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Community Column */}
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-gray-900 flex items-center gap-1">
                <span className="text-base">👥</span>
                {t("community")}
              </h4>
              <ul className="space-y-1 text-xs">
                <li>
                  <Link
                    href="/forum"
                    className="text-gray-600 hover:text-green-600 transition-colors focus:outline-none focus:ring-1 focus:ring-green-500 rounded"
                  >
                    {t("forum")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/events"
                    className="text-gray-600 hover:text-green-600 transition-colors focus:outline-none focus:ring-1 focus:ring-green-500 rounded"
                  >
                    {t("events")}
                  </Link>
                </li>
              </ul>

              {/* Social Media Icons - Compact */}
              <div className="pt-2">
                <div className="flex space-x-2">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-600 transition-colors focus:outline-none focus:ring-1 focus:ring-blue-500 rounded"
                    aria-label="Facebook"
                  >
                    <span className="text-sm">📘</span>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-pink-600 transition-colors focus:outline-none focus:ring-1 focus:ring-pink-500 rounded"
                    aria-label="Instagram"
                  >
                    <span className="text-sm">📷</span>
                  </a>
                  <a
                    href="https://whatsapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-green-600 transition-colors focus:outline-none focus:ring-1 focus:ring-green-500 rounded"
                    aria-label="WhatsApp"
                  >
                    <span className="text-sm">💬</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Company Info Section - Compact */}
          <div className="border-t border-gray-200 pt-4 mb-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
              <div className="flex items-center space-x-3">
                <div className="bg-green-600 p-2 rounded-lg">
                  <Sprout className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900">
                    {t("companyName")} {t("companyTagline")}
                  </h3>
                  <p className="text-xs text-gray-600 max-w-md">{t("companyDescription")}</p>
                </div>
              </div>

              <div className="text-xs text-gray-500">
                <p>
                  © 2024 {t("companyName")} {t("companyTagline")}
                </p>
                <p>{t("allRightsReserved")}</p>
              </div>
            </div>
          </div>

          {/* Collapsible Legal Section */}
          <details className="border-t border-gray-200 pt-3">
            <summary className="cursor-pointer text-xs font-medium text-gray-600 hover:text-green-600 transition-colors focus:outline-none focus:ring-1 focus:ring-green-500 rounded">
              📋 Informações Legais & Parcerias
            </summary>
            <div className="mt-2 text-xs text-gray-500 space-y-1">
              <p>
                <strong>Aviso:</strong> Informações para fins educacionais. Consulte especialistas locais para decisões
                agrícolas.
              </p>
              <p>
                <strong>Afiliados:</strong> Podemos receber comissões de compras através de links de afiliados.
              </p>
            </div>
          </details>
        </div>
      </footer>
    </div>
  )
}

export default function Home() {
  return (
    <LanguageProvider>
      <RegionProvider>
        <WeatherProvider>
          <AppContent />
        </WeatherProvider>
      </RegionProvider>
    </LanguageProvider>
  )
}
