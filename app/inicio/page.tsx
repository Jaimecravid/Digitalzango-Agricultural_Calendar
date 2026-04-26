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
    <div className="animate-pulse surface-card h-24 mx-4 flex items-center justify-center">
      <span className="text-slate-400 text-sm">Carregando certificações...</span>
    </div>
  ),
  ssr: false
});

const UserCounter = dynamic(() => import('../components/UserCounter'), {
  loading: () => (
    <div className="animate-pulse surface-card h-16 mx-4 flex items-center justify-center">
      <span className="text-slate-400 text-sm">Carregando estatísticas...</span>
    </div>
  ),
  ssr: false
});

const EnhancedTestimonials = dynamic(() => import('../components/EnhancedTestimonials'), {
  loading: () => (
    <div className="animate-pulse surface-card h-64 mx-4 flex items-center justify-center">
      <span className="text-slate-400 text-sm">Carregando depoimentos...</span>
    </div>
  ),
  ssr: false
});

const NewsletterSignup = dynamic(() => import('../components/newsletter-signup'), {
  loading: () => (
    <div className="animate-pulse surface-card h-32 mx-4 flex items-center justify-center">
      <span className="text-slate-400 text-sm">Carregando newsletter...</span>
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
      title: t("tools.calendar.title"),
      description: t("tools.calendar.subtitle"),
      buttonText: t("common.next"),
      href: "/calendario",
    },
    {
      icon: Cloud,
      title: t("tools.help.title"),
      description: t("tools.help.subtitle"),
      buttonText: t("common.next"),
      href: "/help",
    },
    {
      icon: Bug,
      title: t("tools.forum.title"),
      description: t("tools.forum.subtitle"),
      buttonText: t("common.next"),
      href: "/forum",
    },
    {
      icon: Sprout,
      title: t("tools.guides.title"),
      description: t("tools.guides.subtitle"),
      buttonText: t("common.next"),
      href: "/guias",
    },
    {
      icon: Users,
      title: t("tools.community.title"),
      description: t("tools.community.subtitle"),
      buttonText: t("common.next"),
      href: "/comunidade",
    },
    {
      icon: Download,
      title: t("tools.download.title"),
      description: t("tools.download.subtitle"),
      buttonText: t("common.next"),
      href: "/baixar-app",
    },
  ], [t]);

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
      <Card key={index} className="surface-card hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative z-30">
        <CardContent className="p-8 text-center">
          <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
            <feature.icon className="h-6 w-6 text-[#22C55E]" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
          <p className="text-slate-300 mb-6 leading-relaxed">{feature.description}</p>
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
        <div className="text-slate-300 font-medium">{stat.label}</div>
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

      <div className="min-h-screen bg-transparent">
        {/* **ACCESSIBILITY ENHANCEMENT** */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-green-600 text-white px-4 py-2 rounded z-50 focus:ring-4 focus:ring-green-300"
        >
          Pular para conteúdo principal
        </a>

        {/* **OPTIMIZED AD SPACE WITH BETTER LOADING** */}
        

        {/* **ENHANCED HERO SECTION WITH PERFORMANCE OPTIMIZATIONS** */}
        <section 
          id="main-content"
          className="py-16 px-4 sm:px-6 lg:px-8 bg-transparent flex-grow relative overflow-hidden"
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
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-tight tracking-tight animate-fadeInUp"
            >
              <span className="bg-gradient-to-r from-white via-[#34D399] to-slate-200 bg-clip-text text-transparent">
                Calendário Agrícola Angola
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Bem-vindo ao Calendário Agrícola de Angola. Planeje sua produção, acompanhe o clima e acesse recursos para agricultores de todo o país.
            </p>
            
            <div className="inline-block mb-8">
              <Badge className="bg-[#22C55E]/20 text-[#22C55E] px-6 py-2 text-base font-semibold shadow-md border border-[#22C55E]/30">
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
                  className="border-white/20 text-white hover:bg-white/10 px-6 py-4 text-lg font-semibold transition-all duration-200 focus:ring-4 focus:ring-green-300 touch-manipulation min-h-[48px]"
                >
                  📱 Baixar App
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* **OPTIMIZED DYNAMIC COMPONENTS WITH ERROR BOUNDARIES** */}
        <Suspense fallback={<div className="animate-pulse surface-card h-16 mx-4 flex items-center justify-center"><span className="text-slate-400 text-sm">Carregando...</span></div>}>
          <UserCounter />
        </Suspense>
        
        <Suspense fallback={<div className="animate-pulse surface-card h-24 mx-4 flex items-center justify-center"><span className="text-slate-400 text-sm">Carregando...</span></div>}>
          <TrustBadges />
        </Suspense>
        
        {/* **COMMUNITY HIGHLIGHTS WITH OPTIMIZED IMAGES** */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-transparent border-t border-white/10">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">🌟 Destaques da Comunidade</h2>
            <p className="text-lg text-slate-300 mb-8">
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-transparent border-t border-white/10">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">📚 Conteúdo Educativo</h2>
            <p className="text-lg text-slate-300 mb-8">
              Aprenda com nossos guias agrícolas, dicas de cultivo e artigos do blog. Conhecimento para impulsionar sua produção!
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <Link href="/guias" className="surface-card w-64 transition touch-manipulation">
                <div className="text-4xl mb-2">🌱</div>
                <h3 className="font-semibold text-lg mb-1 text-white">Guia de Plantio</h3>
                <p className="text-slate-300 text-sm">Passo a passo para plantar com sucesso.</p>
              </Link>
              
              <Link href="/blog" className="surface-card w-64 transition touch-manipulation">
                <div className="text-4xl mb-2">📰</div>
                <h3 className="font-semibold text-lg mb-1 text-white">Artigos do Blog</h3>
                <p className="text-slate-300 text-sm">Dicas, novidades e tendências agrícolas.</p>
              </Link>
              
              <Link href="/tools" className="surface-card w-64 transition touch-manipulation">
                <div className="text-4xl mb-2">🛠️</div>
                <h3 className="font-semibold text-lg mb-1 text-white">Ferramentas Recomendadas</h3>
                <p className="text-slate-300 text-sm">Produtos digitais e ferramentas úteis.</p>
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
        <Suspense fallback={<div className="animate-pulse surface-card h-64 mx-4 flex items-center justify-center"><span className="text-slate-400 text-sm">Carregando depoimentos...</span></div>}>
          <EnhancedTestimonials />
        </Suspense>
        
        

        {/* **OPTIMIZED FEATURES GRID WITH MEMOIZED COMPONENTS** */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-transparent border-t border-white/10 relative overflow-hidden">
          

          <div className="max-w-6xl mx-auto relative z-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">🚀 Ferramentas Digitalzango</h2>
              <p className="text-lg text-slate-300">Explore todas as funcionalidades do seu assistente agrícola</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featureCards}
            </div>
          </div>
        </section>

        {/* **OPTIMIZED STATS SECTION** */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-transparent border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {statsDisplay}
            </div>
          </div>
        </section>

        {/* **OPTIMIZED NEWSLETTER** */}
        <Suspense fallback={<div className="animate-pulse surface-card h-32 mx-4 flex items-center justify-center"><span className="text-slate-400 text-sm">Carregando newsletter...</span></div>}>
          <NewsletterSignup />
        </Suspense>

        {/* **OPTIMIZED CTA SECTION** */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-transparent overflow-hidden border-t border-white/10">
          <div className="absolute inset-0 opacity-10 will-change-transform" aria-hidden="true">
            <div className="absolute top-10 left-10 text-6xl animate-float">🌱</div>
            <div className="absolute top-32 right-20 text-4xl animate-float">🌾</div>
            <div className="absolute bottom-20 left-1/4 text-5xl animate-float">🌿</div>
            <div className="absolute bottom-32 right-1/3 text-3xl animate-float">🍃</div>
          </div>
          
          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                  Comece a planejar sua produção!
                </h2>
                <p className="text-xl text-slate-200 mb-2 font-medium">Acesse o calendário agrícola e ferramentas digitais.</p>
                <p className="text-lg text-slate-300 mb-8 leading-relaxed">Tenha previsões do tempo, dicas e recursos para agricultores de Angola.</p>
                
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
                      className="border-2 border-white/20 text-white hover:bg-white/10 px-6 py-4 text-base font-medium transition-all duration-200 touch-manipulation min-h-[48px]"
                    >
                      📱 Baixar App
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="w-80 h-80 bg-white/5 rounded-full flex items-center justify-center border-4 border-white/10 shadow-lg">
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
                  
                  <div className="absolute -top-8 left-8 surface-elevated animate-float will-change-transform">
                    <div className="text-2xl">📊</div>
                    <div className="text-xs text-slate-300 font-medium">Dados</div>
                  </div>
                  <div className="absolute -bottom-8 right-8 surface-elevated animate-float-delayed will-change-transform">
                    <div className="text-2xl">🌤️</div>
                    <div className="text-xs text-slate-300 font-medium">Tempo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      <style jsx>{`
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

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-fadeInUp {
            animation: none;
          }
        }

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
