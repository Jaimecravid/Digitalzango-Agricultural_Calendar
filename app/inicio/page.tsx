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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-ultra-light-green flex-grow relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 text-6xl animate-float">🌱</div>
          <div className="absolute top-32 right-20 text-4xl animate-float">🌾</div>
          <div className="absolute bottom-20 left-1/4 text-5xl animate-float">🌿</div>
          <div className="absolute bottom-32 right-1/3 text-3xl animate-float">🍃</div>
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">🌟 Destaques da Comunidade</h2>
          <p className="text-lg text-gray-700 mb-8">
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-ultra-light-green-alt border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">📚 Conteúdo Educativo</h2>
          <p className="text-lg text-gray-700 mb-8">
            Aprenda com nossos guias agrícolas, dicas de cultivo e artigos do blog. Conhecimento para impulsionar sua produção!
          </p>
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {/* Example educational content cards */}
            <a href="/guias" className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-lg shadow-md p-6 w-64 hover:shadow-lg transition">
              <div className="text-4xl mb-2">🌱</div>
              <h3 className="font-semibold text-lg mb-1 text-gray-900">Guia de Plantio</h3>
              <p className="text-gray-600 text-sm">Passo a passo para plantar com sucesso.</p>
            </a>
            <a href="/blog" className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-lg shadow-md p-6 w-64 hover:shadow-lg transition">
              <div className="text-4xl mb-2">📰</div>
              <h3 className="font-semibold text-lg mb-1 text-gray-900">Artigos do Blog</h3>
              <p className="text-gray-600 text-sm">Dicas, novidades e tendências agrícolas.</p>
            </a>
            <a href="/tools" className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-lg shadow-md p-6 w-64 hover:shadow-lg transition">
              <div className="text-4xl mb-2">🛠️</div>
              <h3 className="font-semibold text-lg mb-1 text-gray-900">Ferramentas Recomendadas</h3>
              <p className="text-gray-600 text-sm">Produtos digitais e ferramentas úteis.</p>
            </a>
          </div>
          <a href="/blog">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition">
              Ver Mais Conteúdo
            </button>
          </a>
        </div>
      </section>

      {/* Testimonials Section */}
      <EnhancedTestimonials />
      
      {/* Features Grid - SUPER PROMINENT FLOATING ICONS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-ultra-light-green border-t border-gray-200 relative overflow-hidden">
        {/* SUPER PROMINENT Floating Feature Icons */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="absolute top-40 left-16 bg-gradient-to-br from-green-400 to-green-600 rounded-3xl p-8 shadow-2xl animate-float border-4 border-white transform rotate-12 hover:scale-110 transition-transform">
            <Calendar className="h-16 w-16 text-white drop-shadow-lg" />
            <div className="text-base text-white font-bold mt-3 drop-shadow">Calendar</div>
            <div className="absolute -top-3 -right-3 bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center">
              <span className="text-white text-sm font-bold">!</span>
            </div>
          </div>
          
          <div className="absolute top-20 right-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl p-8 shadow-2xl animate-float border-4 border-white transform -rotate-6 hover:scale-110 transition-transform">
            <Cloud className="h-16 w-16 text-white drop-shadow-lg" />
            <div className="text-base text-white font-bold mt-3 drop-shadow">Weather</div>
            <div className="absolute -top-3 -right-3 bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center">
              <span className="text-white text-sm font-bold">!</span>
            </div>
          </div>
          
          <div className="absolute bottom-60 left-32 bg-gradient-to-br from-red-400 to-red-600 rounded-3xl p-8 shadow-2xl animate-float border-4 border-white transform rotate-6 hover:scale-110 transition-transform">
            <Bug className="h-16 w-16 text-white drop-shadow-lg" />
            <div className="text-base text-white font-bold mt-3 drop-shadow">Pests</div>
            <div className="absolute -top-3 -right-3 bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center">
              <span className="text-white text-sm font-bold">!</span>
            </div>
          </div>
          
          <div className="absolute bottom-40 right-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl p-8 shadow-2xl animate-float border-4 border-white transform -rotate-12 hover:scale-110 transition-transform">
            <Sprout className="h-16 w-16 text-white drop-shadow-lg" />
            <div className="text-base text-white font-bold mt-3 drop-shadow">Resources</div>
            <div className="absolute -top-3 -right-3 bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center">
              <span className="text-white text-sm font-bold">!</span>
            </div>
          </div>
          
          <div className="absolute top-80 left-1/2 transform -translate-x-1/2 rotate-3 bg-gradient-to-br from-purple-400 to-purple-600 rounded-3xl p-8 shadow-2xl animate-float border-4 border-white hover:scale-110 transition-transform">
            <Users className="h-16 w-16 text-white drop-shadow-lg" />
            <div className="text-base text-white font-bold mt-3 drop-shadow">Community</div>
            <div className="absolute -top-3 -right-3 bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center">
              <span className="text-white text-sm font-bold">!</span>
            </div>
          </div>
          
          <div className="absolute bottom-80 right-40 bg-gradient-to-br from-gray-600 to-gray-800 rounded-3xl p-8 shadow-2xl animate-float border-4 border-white transform rotate-9 hover:scale-110 transition-transform">
            <Download className="h-16 w-16 text-white drop-shadow-lg" />
            <div className="text-base text-white font-bold mt-3 drop-shadow">Download</div>
            <div className="absolute -top-3 -right-3 bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center">
              <span className="text-white text-sm font-bold">!</span>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative z-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🚀 Ferramentas Digitalzango</h2>
            <p className="text-lg text-gray-700">Explore todas as funcionalidades do seu assistente agrícola</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative z-30">
                <CardContent className="p-8 text-center">
                  {/* Simplified card content without large icons */}
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-gray-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{feature.description}</p>
                  <Link href={feature.href}>
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section (NEW) */}
      <NewsletterSignup />

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-ultra-light-green overflow-hidden border-t border-gray-200">
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
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                {t("startPlanningTitle")}
              </h2>
              <p className="text-xl text-gray-700 mb-2 font-medium">{t("startPlanningDescription")}</p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">{t("startPlanningDescription")}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/calendario">
                  <Button
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                  >
                    📅 {t("viewCalendar")}
                  </Button>
                </Link>
                <Link href="/baixar-app">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-6 py-4 text-base font-medium transition-all duration-200"
                  >
                    📱 {t("downloadApp")}
                  </Button>
                </Link>
              </div>
            </div>
            {/* Right Column - Green Circle with Sunset Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 bg-green-100 rounded-full flex items-center justify-center border-4 border-green-200 shadow-lg">
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
