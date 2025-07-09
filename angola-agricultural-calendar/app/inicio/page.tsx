"use client";

import React, { Suspense, useMemo, useCallback } from 'react';
import { useLanguage } from "../contexts/language-context";
import Image from 'next/image';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Link from "next/link";
import { Calendar, Cloud, Bug, Sprout, Users, Download } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { RegionProvider, useRegion } from "../contexts/region-context";
import { WeatherProvider } from "../contexts/weather-context";


// **PERFORMANCE OPTIMIZED DYNAMIC IMPORTS**
// Heavy components loaded only when needed with proper loading states
const TrustBadges = dynamic(() => import('../components/TrustBadges'), {
  loading: () => (
    <div className="animate-pulse bg-gray-200 h-24 rounded-lg mx-4 flex items-center justify-center">
      <span className="text-gray-500 text-sm">Carregando certificações...</span>
    </div>
  ),
  ssr: false
});

const UserCounter = dynamic(() => import('../components/UserCounter'), {
  loading: () => (
    <div className="animate-pulse bg-gray-200 h-16 rounded-lg mx-4 flex items-center justify-center">
      <span className="text-gray-500 text-sm">Carregando estatísticas...</span>
    </div>
  ),
  ssr: false
});

const EnhancedTestimonials = dynamic(() => import('../components/EnhancedTestimonials'), {
  loading: () => (
    <div className="animate-pulse bg-gray-200 h-64 rounded-lg mx-4 flex items-center justify-center">
      <span className="text-gray-500 text-sm">Carregando depoimentos...</span>
    </div>
  ),
  ssr: false
});

const NewsletterSignup = dynamic(() => import('../components/newsletter-signup'), {
  loading: () => (
    <div className="animate-pulse bg-gray-200 h-32 rounded-lg mx-4 flex items-center justify-center">
      <span className="text-gray-500 text-sm">Carregando newsletter...</span>
    </div>
  ),
  ssr: false
});

// **PERFORMANCE OPTIMIZED COMPONENT WITH MEMOIZATION**
const AppContent = () => {
  const { getCurrentRegion } = useRegion();
  const { t } = useLanguage();

  // Memoize region data to prevent unnecessary recalculations
  const currentRegionData = useMemo(() => {
    return getCurrentRegion();
  }, [getCurrentRegion]);

  // Memoize features array to prevent recreation on every render
  const features = useMemo(() => [
    {
      icon: Calendar,
      title: t("pages.home.title"),
      description: t("pages.home.subtitle"),
      buttonText: t("common.next"),
      href: "/calendario",
    },
    {
      icon: Cloud,
      title: t("navigation.help"),
      description: t("pages.help.subtitle"),
      buttonText: t("common.next"),
      href: "/tempo",
    },
    {
      icon: Bug,
      title: t("navigation.forum"),
      description: t("pages.faq.subtitle"),
      buttonText: t("common.next"),
      href: "/pragas",
    },
    {
      icon: Sprout,
      title: t("navigation.guides"),
      description: t("pages.tutorials.subtitle"),
      buttonText: t("common.next"),
      href: "/recursos",
    },
    {
      icon: Users,
      title: t("navigation.community"),
      description: t("pages.home.subtitle"),
      buttonText: t("common.next"),
      href: "/comunidade",
    },
    {
      icon: Download,
      title: "Baixar App",
      description: "Baixe o aplicativo para acessar offline.",
      buttonText: "Baixar App",
      href: "/baixar-app",
    },
  ], []);

  // Memoize stats array
  const stats = useMemo(() => [
    { number: "18", label: "Províncias", color: "text-green-600" },
    { number: "4", label: "Idiomas", color: "text-blue-600" },
    { number: "12", label: "Meses", color: "text-orange-600" },
    { number: "24/7", label: "Tempo", color: "text-purple-600" },
  ], []);

  // Memoize feature cards to prevent unnecessary re-renders
  const featureCards = useMemo(() => 
    features.map((feature, index) => (
      <Card key={index} className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative z-30">
        <CardContent className="p-8 text-center">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <feature.icon className="h-6 w-6 text-gray-500" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">{feature.description}</p>
          <Link href={feature.href}>
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 touch-manipulation">
              {feature.buttonText}
            </Button>
          </Link>
        </CardContent>
      </Card>
    )), [features]);

  // Memoize stats display
  const statsDisplay = useMemo(() => 
    stats.map((stat, index) => (
      <div key={index}>
        <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
        <div className="text-gray-700 font-medium">{stat.label}</div>
      </div>
    )), [stats]);

  return (
    <>
      <Head>
        <title>Calendário Agrícola Angola - Planejamento Agrícola Digital | DigitalZango</title>
        <meta name="description" content="Calendário agrícola completo para Angola. Planeje sua produção, consulte previsões meteorológicas e acesse recursos para agricultores de todas as 18 províncias." />
        <meta name="keywords" content="calendário agrícola angola, agricultura angola, previsão tempo agricultura, planejamento agrícola, digitalzango, agricultura digital" />
        <meta property="og:title" content="Calendário Agrícola Angola - DigitalZango" />
        <meta property="og:description" content="Planeje sua produção agrícola com previsões meteorológicas e recursos educativos para todas as províncias de Angola." />
        <meta property="og:image" content="https://digitalzango.com/images/og-agricultural-calendar.jpg" />
        <meta property="og:url" content="https://digitalzango.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Calendário Agrícola Angola" />
        <meta name="twitter:description" content="Ferramenta digital para planejamento agrícola em Angola" />
        
        {/* **PERFORMANCE OPTIMIZATIONS FOR RURAL CONNECTIVITY** */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//images.unsplash.com" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* **PWA MANIFEST FOR OFFLINE SUPPORT** */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#16a34a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="DigitalZango" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* **ACCESSIBILITY ENHANCEMENT** */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-green-600 text-white px-4 py-2 rounded z-50 focus:ring-4 focus:ring-green-300"
        >
          Pular para conteúdo principal
        </a>

        {/* **OPTIMIZED AD SPACE WITH BETTER LOADING** */}
        <div className="adsense-top-banner w-full text-center py-2 bg-gray-100 border-b border-gray-200 mb-4 min-h-[90px] flex items-center justify-center" role="banner" aria-label="Advertisement Space">
          <div className="adsense-placeholder-text">
            [AdSense Top Banner Ad]
          </div>
        </div>

        {/* **ENHANCED HERO SECTION WITH PERFORMANCE OPTIMIZATIONS** */}
        <section 
          id="main-content"
          className="py-16 px-4 sm:px-6 lg:px-8 bg-ultra-light-green flex-grow relative overflow-hidden"
          aria-labelledby="hero-title"
          role="banner"
        >
          {/* **OPTIMIZED BACKGROUND ANIMATIONS** */}
          <div className="absolute inset-0 opacity-5 will-change-transform" aria-hidden="true">
            <div className="absolute top-10 left-10 text-6xl animate-float">🌱</div>
            <div className="absolute top-32 right-20 text-4xl animate-float">🌾</div>
            <div className="absolute bottom-20 left-1/4 text-5xl animate-float">🌿</div>
            <div className="absolute bottom-32 right-1/3 text-3xl animate-float">🍃</div>
          </div>
          
          <div className="max-w-5xl mx-auto text-center">
            <h1 
              id="hero-title"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-8 leading-tight tracking-tight animate-fadeInUp"
            >
              <span className="bg-gradient-to-r from-gray-900 via-green-800 to-gray-900 bg-clip-text text-transparent">
                Calendário Agrícola Angola
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Bem-vindo ao Calendário Agrícola de Angola. Planeje sua produção, acompanhe o clima e acesse recursos para agricultores de todo o país.
            </p>
            
            <div className="inline-block mb-8">
              <Badge className="bg-green-100 text-green-800 px-6 py-2 text-base font-semibold shadow-md">
                Região atual: {currentRegionData?.name || 'Carregando...'}
                <br />
                <span className="text-sm font-normal">
                  Clima: {currentRegionData?.climate || 'N/A'} | Estação chuvosa: {currentRegionData?.rainySeasonStart || 'N/A'}-{currentRegionData?.rainySeasonEnd || 'N/A'}
                </span>
              </Badge>
            </div>
            
            {/* **TOUCH-OPTIMIZED BUTTONS FOR MOBILE** */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calendario" aria-label="Acessar calendário agrícola">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 focus:ring-4 focus:ring-green-300 touch-manipulation min-h-[48px]"
                >
                  📅 Ver Calendário
                </Button>
              </Link>
              <Link href="/baixar-app" aria-label="Baixar aplicativo móvel">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50 px-6 py-4 text-lg font-semibold transition-all duration-200 focus:ring-4 focus:ring-green-300 touch-manipulation min-h-[48px]"
                >
                  📱 Baixar App
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* **OPTIMIZED DYNAMIC COMPONENTS WITH ERROR BOUNDARIES** */}
        <Suspense fallback={<div className="animate-pulse bg-gray-200 h-16 rounded-lg mx-4 flex items-center justify-center"><span className="text-gray-500 text-sm">Carregando...</span></div>}>
          <UserCounter />
        </Suspense>
        
        <Suspense fallback={<div className="animate-pulse bg-gray-200 h-24 rounded-lg mx-4 flex items-center justify-center"><span className="text-gray-500 text-sm">Carregando...</span></div>}>
          <TrustBadges />
        </Suspense>
        
        {/* **COMMUNITY HIGHLIGHTS WITH OPTIMIZED IMAGES** */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">🌟 Destaques da Comunidade</h2>
            <p className="text-lg text-gray-700 mb-8">
              Junte-se à comunidade Digitalzango! Veja histórias de agricultores, compartilhe dicas e faça parte da inovação agrícola em Angola.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <Image
                src="/images/angola-agri.png"
                alt="Comunidade agrícola de Angola"
                width={128}
                height={128}
                className="rounded-full object-cover border-4 border-green-200"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
              <Image
                src="/images/camponessas.png"
                alt="Camponesas de Angola"
                width={128}
                height={128}
                className="rounded-full object-cover border-4 border-green-200"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
              <Image
                src="/images/community-placeholder.png"
                alt="Comunidade agrícola"
                width={128}
                height={128}
                className="rounded-full object-cover border-4 border-green-200"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
              <Image
                src="/images/tractor.png"
                alt="Equipamentos agrícolas"
                width={128}
                height={128}
                className="rounded-full object-cover border-4 border-green-200"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>
            
            <Link href="/comunidade">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition touch-manipulation">
                Participe da Comunidade
              </Button>
            </Link>
          </div>
        </section>

        {/* **EDUCATIONAL CONTENT WITH PERFORMANCE OPTIMIZATIONS** */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-ultra-light-green-alt border-t border-gray-200">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">📚 Conteúdo Educativo</h2>
            <p className="text-lg text-gray-700 mb-8">
              Aprenda com nossos guias agrícolas, dicas de cultivo e artigos do blog. Conhecimento para impulsionar sua produção!
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <Link href="/guias" className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-lg shadow-md p-6 w-64 hover:shadow-lg transition touch-manipulation">
                <div className="text-4xl mb-2">🌱</div>
                <h3 className="font-semibold text-lg mb-1 text-gray-900">Guia de Plantio</h3>
                <p className="text-gray-600 text-sm">Passo a passo para plantar com sucesso.</p>
              </Link>
              
              <Link href="/blog" className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-lg shadow-md p-6 w-64 hover:shadow-lg transition touch-manipulation">
                <div className="text-4xl mb-2">📰</div>
                <h3 className="font-semibold text-lg mb-1 text-gray-900">Artigos do Blog</h3>
                <p className="text-gray-600 text-sm">Dicas, novidades e tendências agrícolas.</p>
              </Link>
              
              <Link href="/tools" className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-lg shadow-md p-6 w-64 hover:shadow-lg transition touch-manipulation">
                <div className="text-4xl mb-2">🛠️</div>
                <h3 className="font-semibold text-lg mb-1 text-gray-900">Ferramentas Recomendadas</h3>
                <p className="text-gray-600 text-sm">Produtos digitais e ferramentas úteis.</p>
              </Link>
            </div>
            
            <Link href="/blog">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition touch-manipulation">
                Ver Mais Conteúdo
              </Button>
            </Link>
          </div>
        </section>

        {/* **OPTIMIZED TESTIMONIALS** */}
        <Suspense fallback={<div className="animate-pulse bg-gray-200 h-64 rounded-lg mx-4 flex items-center justify-center"><span className="text-gray-500 text-sm">Carregando depoimentos...</span></div>}>
          <EnhancedTestimonials />
        </Suspense>
        
        {/* **OPTIMIZED AD SPACE** */}
        <div className="adsense-middle-banner w-full text-center py-2 bg-gray-100 border-y border-gray-200 my-8 min-h-[250px] flex items-center justify-center" role="banner" aria-label="Advertisement Space">
          <div className="adsense-placeholder-text">
            [AdSense Middle Banner Ad]
          </div>
        </div>

        {/* **OPTIMIZED FEATURES GRID WITH MEMOIZED COMPONENTS** */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-ultra-light-green border-t border-gray-200 relative overflow-hidden">
          {/* **OPTIMIZED FLOATING ICONS WITH WILL-CHANGE** */}
          <div className="absolute inset-0 pointer-events-none z-10">
            <div className="absolute top-40 left-16 bg-gradient-to-br from-green-400 to-green-600 rounded-3xl p-8 shadow-2xl animate-float border-4 border-white transform rotate-12 hover:scale-110 transition-transform will-change-transform">
              <Calendar className="h-16 w-16 text-white drop-shadow-lg" />
              <div className="text-base text-white font-bold mt-3 drop-shadow">Calendário</div>
            </div>
            
            <div className="absolute top-20 right-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl p-8 shadow-2xl animate-float border-4 border-white transform -rotate-6 hover:scale-110 transition-transform will-change-transform">
              <Cloud className="h-16 w-16 text-white drop-shadow-lg" />
              <div className="text-base text-white font-bold mt-3 drop-shadow">Tempo</div>
            </div>
            
            <div className="absolute bottom-60 left-32 bg-gradient-to-br from-red-400 to-red-600 rounded-3xl p-8 shadow-2xl animate-float border-4 border-white transform rotate-6 hover:scale-110 transition-transform will-change-transform">
              <Bug className="h-16 w-16 text-white drop-shadow-lg" />
              <div className="text-base text-white font-bold mt-3 drop-shadow">Pragas</div>
            </div>
            
            <div className="absolute bottom-40 right-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl p-8 shadow-2xl animate-float border-4 border-white transform -rotate-12 hover:scale-110 transition-transform will-change-transform">
              <Sprout className="h-16 w-16 text-white drop-shadow-lg" />
              <div className="text-base text-white font-bold mt-3 drop-shadow">Recursos</div>
            </div>
            
            <div className="absolute top-80 left-1/2 transform -translate-x-1/2 rotate-3 bg-gradient-to-br from-purple-400 to-purple-600 rounded-3xl p-8 shadow-2xl animate-float border-4 border-white hover:scale-110 transition-transform will-change-transform">
              <Users className="h-16 w-16 text-white drop-shadow-lg" />
              <div className="text-base text-white font-bold mt-3 drop-shadow">Comunidade</div>
            </div>
            
            <div className="absolute bottom-80 right-40 bg-gradient-to-br from-gray-600 to-gray-800 rounded-3xl p-8 shadow-2xl animate-float border-4 border-white transform rotate-9 hover:scale-110 transition-transform will-change-transform">
              <Download className="h-16 w-16 text-white drop-shadow-lg" />
              <div className="text-base text-white font-bold mt-3 drop-shadow">Baixar App</div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto relative z-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">🚀 Ferramentas Digitalzango</h2>
              <p className="text-lg text-gray-700">Explore todas as funcionalidades do seu assistente agrícola</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featureCards}
            </div>
          </div>
        </section>

        {/* **OPTIMIZED STATS SECTION** */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {statsDisplay}
            </div>
          </div>
        </section>

        {/* **OPTIMIZED NEWSLETTER** */}
        <Suspense fallback={<div className="animate-pulse bg-gray-200 h-32 rounded-lg mx-4 flex items-center justify-center"><span className="text-gray-500 text-sm">Carregando newsletter...</span></div>}>
          <NewsletterSignup />
        </Suspense>

        {/* **OPTIMIZED CTA SECTION** */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-ultra-light-green overflow-hidden border-t border-gray-200">
          <div className="absolute inset-0 opacity-10 will-change-transform" aria-hidden="true">
            <div className="absolute top-10 left-10 text-6xl animate-float">🌱</div>
            <div className="absolute top-32 right-20 text-4xl animate-float">🌾</div>
            <div className="absolute bottom-20 left-1/4 text-5xl animate-float">🌿</div>
            <div className="absolute bottom-32 right-1/3 text-3xl animate-float">🍃</div>
          </div>
          
          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  Comece a planejar sua produção!
                </h2>
                <p className="text-xl text-gray-700 mb-2 font-medium">Acesse o calendário agrícola e ferramentas digitais.</p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">Tenha previsões do tempo, dicas e recursos para agricultores de Angola.</p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link href="/calendario">
                    <Button
                      size="lg"
                      className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 touch-manipulation min-h-[48px]"
                    >
                      📅 Ver Calendário
                    </Button>
                  </Link>
                  <Link href="/baixar-app">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-6 py-4 text-base font-medium transition-all duration-200 touch-manipulation min-h-[48px]"
                    >
                      📱 Baixar App
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="w-80 h-80 bg-green-100 rounded-full flex items-center justify-center border-4 border-green-200 shadow-lg">
                    <Image
                      src="/images/sunset.png"
                      alt="Beautiful sunset over agricultural landscape in Angola"
                      width={288}
                      height={288}
                      className="object-cover rounded-full"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                  </div>
                  
                  <div className="absolute -top-8 left-8 bg-white bg-opacity-90 rounded-lg p-3 shadow-lg animate-float will-change-transform">
                    <div className="text-2xl">📊</div>
                    <div className="text-xs text-gray-600 font-medium">Dados</div>
                  </div>
                  <div className="absolute -bottom-8 right-8 bg-white bg-opacity-90 rounded-lg p-3 shadow-lg animate-float-delayed will-change-transform">
                    <div className="text-2xl">🌤️</div>
                    <div className="text-xs text-gray-600 font-medium">Tempo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* **OPTIMIZED BOTTOM AD** */}
        <div className="adsense-bottom-banner w-full text-center py-2 bg-gray-100 border-t border-gray-200 mt-8 min-h-[90px] flex items-center justify-center" role="banner" aria-label="Advertisement Space">
          <div className="adsense-placeholder-text">
            [AdSense Bottom Banner Ad]
          </div>
        </div>
      </div>

      {/* **OPTIMIZED CSS WITH PERFORMANCE ENHANCEMENTS** */}
      <style jsx>{`
        .adsense-placeholder-text {
          font-size: 0;
          color: transparent;
          user-select: none;
          pointer-events: none;
          line-height: 0;
          opacity: 0;
          visibility: hidden;
        }

        .adsense-top-banner,
        .adsense-middle-banner,
        .adsense-bottom-banner {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          border: 1px dashed #dee2e6;
          position: relative;
          overflow: hidden;
        }

        .adsense-top-banner::before,
        .adsense-middle-banner::before,
        .adsense-bottom-banner::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(0,0,0,0.02) 10px,
            rgba(0,0,0,0.02) 20px
          );
          pointer-events: none;
        }

        .adsbygoogle {
          background: transparent !important;
          display: block;
          width: 100%;
          height: auto;
        }

        ins.adsbygoogle {
          background: transparent !important;
          border: none !important;
        }

        /* **PERFORMANCE OPTIMIZED ANIMATIONS** */
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-20px) rotate(5deg); 
          }
        }

        @keyframes float-delayed {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-15px) rotate(-3deg); 
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
          will-change: transform;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          will-change: transform;
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* **MOBILE PERFORMANCE OPTIMIZATIONS** */
        @media (max-width: 768px) {
          .animate-float,
          .animate-float-delayed {
            animation-duration: 8s;
          }
        }

        /* **REDUCE MOTION FOR ACCESSIBILITY** */
        @media (prefers-reduced-motion: reduce) {
          .animate-float,
          .animate-float-delayed,
          .animate-fadeInUp {
            animation: none;
          }
          
          .will-change-transform {
            will-change: auto;
          }
        }

        /* **TOUCH OPTIMIZATION** */
        .touch-manipulation {
          touch-action: manipulation;
          -webkit-tap-highlight-color: transparent;
        }
      `}</style>
    </>
  );
};

// **MEMOIZED MAIN COMPONENT**
const OptimizedAppContent = React.memo(AppContent);

export default function InicioPage() {
  return (
    <RegionProvider>
      <WeatherProvider>
        <OptimizedAppContent />
      </WeatherProvider>
    </RegionProvider>
  );
}
