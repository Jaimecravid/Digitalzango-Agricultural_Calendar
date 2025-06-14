"use client";
import TrustBadges from '../components/TrustBadges';
import UserCounter from '../components/UserCounter';
import EnhancedTestimonials from '../components/EnhancedTestimonials';
import { Calendar, Cloud, Bug, Sprout, Users, Download } from "lucide-react"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { LanguageProvider, useLanguage } from "../contexts/language-context"
import { RegionProvider, useRegion } from "../contexts/region-context"
import { WeatherProvider } from "../contexts/weather-context"
import NewsletterSignup from "../components/newsletter-signup"
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
      {/* Header removed - it's provided by the global layout */}

      {/* AdSense Optimization Zone: Top of page, ideal for a responsive ad unit */}
      <div className="adsense-top-banner w-full text-center py-2 bg-gray-100 text-gray-500 mb-4">
        [AdSense Top Banner Ad]
      </div>

      {/* Improved Hero Section (Phase 3) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-green-50 via-white to-gray-50 flex-grow relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 text-6xl">🌱</div>
          <div className="absolute top-32 right-20 text-4xl">🌾</div>
          <div className="absolute bottom-20 left-1/4 text-5xl">🌿</div>
          <div className="absolute bottom-32 right-1/3 text-3xl">🍃</div>
         </div>
        <div className="max-w-5xl mx-auto text-center">
         <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-8 leading-tight tracking-tight animate-fadeInUp">
             <span className="bg-gradient-to-r from-gray-900 via-green-800 to-gray-900 bg-clip-text text-transparent">
            {t("appTitle")}
      </span>
         </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            {t("welcomeDescription")}
          </p>
          {/* Region Badge - Prominently displayed */}
          <div className="inline-block mb-8">
            <Badge className="bg-green-100 text-green-800 px-6 py-2 text-base font-semibold shadow-md">
              {t("currentRegion")}: {getCurrentRegionData()?.name}
              <br />
              <span className="text-sm font-normal">
                {t("climate")}: {getCurrentRegionData()?.climate} | {t("rainySeason")}: {t("month")}{" "}
                {getCurrentRegionData()?.rainySeasonStart}-{getCurrentRegionData()?.rainySeasonEnd}
              </span>
            </Badge>
          </div>
          {/* Call to Action in Hero - Primary engagement point */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/calendario">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
              >
                📅 {t("viewCalendar")}
              </Button>
            </Link>
            <Link href="/baixar-app">
              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 px-6 py-4 text-lg font-semibold transition-all duration-200"
              >
                📱 {t("downloadApp")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* UserCounter Component - Added below hero section */}
      <UserCounter />
      <TrustBadges />
      {/* Community Highlights Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-green-700">🌟 Destaques da Comunidade</h2>
          <p className="text-lg text-gray-600 mb-8">
            Junte-se à comunidade Digitalzango! Veja histórias de agricultores, compartilhe dicas e faça parte da inovação agrícola em Angola.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <img
              src="/images/angola-agri.png"
              alt="Community Image 1"
              className="w-32 h-32 rounded-full object-cover border-4 border-green-200"
            />
            <img
              src="/images/camponessas.png"
              alt="Community Image 2"
              className="w-32 h-32 rounded-full object-cover border-4 border-green-200"
            />
            <img
              src="/images/community-placeholder.png"
              alt="Community Image 3"
              className="w-32 h-32 rounded-full object-cover border-4 border-green-200"
            />
            <img
              src="/images/tractor.png"
              alt="Community Image 4"
              className="w-32 h-32 rounded-full object-cover border-4 border-green-200"
            />
          </div>
          <a href="/comunidade">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition">
              Participe da Comunidade
            </button>
          </a>
        </div>
      </section>

      {/* Educational Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-blue-700">📚 Conteúdo Educativo</h2>
          <p className="text-lg text-gray-600 mb-8">
            Aprenda com nossos guias agrícolas, dicas de cultivo e artigos do blog. Conhecimento para impulsionar sua produção!
          </p>
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {/* Example educational content cards */}
            <a href="/guias" className="bg-white rounded-lg shadow-md p-6 w-64 hover:shadow-lg transition">
              <div className="text-4xl mb-2">🌱</div>
              <h3 className="font-semibold text-lg mb-1">Guia de Plantio</h3>
              <p className="text-gray-500 text-sm">Passo a passo para plantar com sucesso.</p>
            </a>
            <a href="/blog" className="bg-white rounded-lg shadow-md p-6 w-64 hover:shadow-lg transition">
              <div className="text-4xl mb-2">📰</div>
              <h3 className="font-semibold text-lg mb-1">Artigos do Blog</h3>
              <p className="text-gray-500 text-sm">Dicas, novidades e tendências agrícolas.</p>
            </a>
            <a href="/tools" className="bg-white rounded-lg shadow-md p-6 w-64 hover:shadow-lg transition">
              <div className="text-4xl mb-2">🛠️</div>
              <h3 className="font-semibold text-lg mb-1">Ferramentas Recomendadas</h3>
              <p className="text-gray-500 text-sm">Produtos digitais e ferramentas úteis.</p>
            </a>
          </div>
          <a href="/blog">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition">
              Ver Mais Conteúdo
            </button>
          </a>
        </div>
      </section>

      {/* Testimonials Section */}
      <EnhancedTestimonials />
      
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

      {/* AdSense Optimization Zone: Middle of page, after features */}
      <div className="adsense-middle-banner w-full text-center py-2 bg-gray-100 text-gray-500 my-4">
        [AdSense Middle Banner Ad]
      </div>

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

      {/* Newsletter Signup Section (NEW) */}
      <NewsletterSignup />

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 overflow-hidden">
        {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
             <div className="absolute top-10 left-10 text-6xl animate-float">🌱</div>
             <div className="absolute top-32 right-20 text-4xl animate-float">🌾</div>
             <div className="absolute bottom-20 left-1/4 text-5xl animate-float">🌿</div>
             <div className="absolute bottom-32 right-1/3 text-3xl animate-float">🍃</div>
             </div>
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
            {/* Right Column - Orange Circle with Sunset Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 bg-orange-200 rounded-full flex items-center justify-center border-4 border-orange-300 shadow-lg">
                  <img
                    src="/images/sunset.png"
                    alt="Sunset"
                    className="w-72 h-72 object-cover rounded-full"
                  />
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

      {/* AdSense Optimization Zone: Bottom of page, before footer */}
      <div className="adsense-bottom-banner w-full text-center py-2 bg-gray-100 text-gray-500 mt-4">
        [AdSense Bottom Banner Ad]
      </div>
    </div>
  )
}

export default function InicioPage() {
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
