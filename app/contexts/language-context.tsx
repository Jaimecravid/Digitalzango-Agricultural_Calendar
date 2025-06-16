"use client"

import React, { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface Language {
  code: string
  name: string
  nativeName: string
  flag: string
}

interface LanguageContextType {
  currentLanguage: string
  setLanguage: (lang: string) => void
  languages: Language[]
  t: (key: string) => string
  isLoading: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const languages: Language[] = [
  { code: "pt", name: "Portuguese", nativeName: "Português", flag: "🇵🇹" },
  { code: "en", name: "English", nativeName: "English", flag: "🇺🇸" },
  { code: "fr", name: "French", nativeName: "Français", flag: "🇫🇷" },
  { code: "ki", name: "Kimbundu", nativeName: "Kimbundu", flag: "🇦🇴" },
  { code: "um", name: "Umbundu", nativeName: "Umbundu", flag: "🇦🇴" },
]

export const translations = {
  en: {
    appTitle: "Agricultural Calendar for Angola",
    welcomeDescription: "Plan, organize and optimize your agricultural activities based on local conditions in Angola.",
    currentRegion: "Current Region",
    climate: "Climate",
    rainySeason: "Rainy Season",
    month: "Month",
    viewCalendar: "View Calendar",
    downloadApp: "Download App",
    communityHighlightsTitle: "Community Highlights",
    communityHighlightsDescription: "Join the Digitalzango community! See farmer stories, share tips, and be part of agricultural innovation in Angola.",
    communityJoinButton: "Join the Community",
    educationalContentTitle: "Educational Content",
    educationalContentDescription: "Learn from our agricultural guides, cultivation tips and blog articles. Knowledge to boost your production!",
    plantingGuideTitle: "Planting Guide",
    plantingGuideDescription: "Step by step to plant successfully.",
    blogArticlesTitle: "Blog Articles",
    blogArticlesDescription: "Tips, news and agricultural trends.",
    recommendedToolsTitle: "Recommended Tools",
    recommendedToolsDescription: "Digital products and useful tools.",
    seeMoreContentButton: "See More Content",
    featuresGridTitle: "Digitalzango Tools",
    featuresGridDescription: "Explore all the features of your agricultural assistant",
    startPlanningTitle: "Start Planning Your Farm Today",
    startPlanningDescription: "Join thousands of Angolan farmers using Digitalzango to boost productivity and sustainability.",
    loading: "Loading...",
    calendar: "Calendar",
    calendarDescription: "Agricultural planning calendar",
    weather: "Weather",
    weatherDescription: "Real-time weather information",
    pests: "Pests & Diseases",
    pestsDescription: "Identification and control guide",
    resources: "Resources",
    resourcesDescription: "Agricultural tools and guides",
    community: "Community",
    communityDescription: "Connect with other farmers",
    downloadAppPageDescription: "Download our mobile app",
    accessTool: "Access Tool",
    viewInformation: "View Information",
    participate: "Participate",
    provincesLabel: "Provinces",
    languagesLabel: "Languages",
    monthsLabel: "Months",
    weatherLabel: "Weather",
    language: "Language",
    selectLanguage: "Select Language",
    adsenseTopBanner: "AdSense Top Banner Ad",
    adsenseMiddleBanner: "AdSense Middle Banner Ad",
    adsenseBottomBanner: "AdSense Bottom Banner Ad",
    analytics: "Analytics",
    communityImageAlt: "Community Image",
    sunsetImageAlt: "Sunset"
  },
  pt: {
    appTitle: "Calendário Agrícola de Angola",
    welcomeDescription: "Planeje, organize e otimize suas atividades agrícolas com base nas condições locais em Angola.",
    currentRegion: "Região Atual",
    climate: "Clima",
    rainySeason: "Estação Chuvosa",
    month: "Mês",
    viewCalendar: "Ver Calendário",
    downloadApp: "Baixar App",
    communityHighlightsTitle: "Destaques da Comunidade",
    communityHighlightsDescription: "Junte-se à comunidade Digitalzango! Veja histórias de agricultores, compartilhe dicas e faça parte da inovação agrícola em Angola.",
    communityJoinButton: "Participe da Comunidade",
    educationalContentTitle: "Conteúdo Educativo",
    educationalContentDescription: "Aprenda com nossos guias agrícolas, dicas de cultivo e artigos do blog. Conhecimento para impulsionar sua produção!",
    plantingGuideTitle: "Guia de Plantio",
    plantingGuideDescription: "Passo a passo para plantar com sucesso.",
    blogArticlesTitle: "Artigos do Blog",
    blogArticlesDescription: "Dicas, novidades e tendências agrícolas.",
    recommendedToolsTitle: "Ferramentas Recomendadas",
    recommendedToolsDescription: "Produtos digitais e ferramentas úteis.",
    seeMoreContentButton: "Ver Mais Conteúdo",
    featuresGridTitle: "Ferramentas Digitalzango",
    featuresGridDescription: "Explore todas as funcionalidades do seu assistente agrícola",
    startPlanningTitle: "Comece a Planejar Sua Fazenda Hoje",
    startPlanningDescription: "Junte-se a milhares de agricultores angolanos usando o Digitalzango para aumentar a produtividade e a sustentabilidade.",
    loading: "Carregando...",
    calendar: "Calendário",
    calendarDescription: "Calendário de planejamento agrícola",
    weather: "Tempo",
    weatherDescription: "Informações meteorológicas em tempo real",
    pests: "Pragas e Doenças",
    pestsDescription: "Guia de identificação e controle",
    resources: "Recursos",
    resourcesDescription: "Ferramentas e guias agrícolas",
    community: "Comunidade",
    communityDescription: "Conecte-se com outros agricultores",
    downloadAppPageDescription: "Baixe nosso aplicativo móvel",
    accessTool: "Acessar Ferramenta",
    viewInformation: "Ver Informações",
    participate: "Participar",
    provincesLabel: "Províncias",
    languagesLabel: "Idiomas",
    monthsLabel: "Meses",
    weatherLabel: "Tempo",
    language: "Idioma",
    selectLanguage: "Selecionar Idioma",
    adsenseTopBanner: "Banner Superior AdSense",
    adsenseMiddleBanner: "Banner Meio AdSense",
    adsenseBottomBanner: "Banner Inferior AdSense",
    analytics: "Análises",
    communityImageAlt: "Imagem da Comunidade",
    sunsetImageAlt: "Pôr do Sol"
  },
  fr: {
    appTitle: "Calendrier Agricole pour l'Angola",
    welcomeDescription: "Planifiez, organisez et optimisez vos activités agricoles selon les conditions locales en Angola.",
    currentRegion: "Région Actuelle",
    climate: "Climat",
    rainySeason: "Saison des Pluies",
    month: "Mois",
    viewCalendar: "Voir le Calendrier",
    downloadApp: "Télécharger l'App",
    communityHighlightsTitle: "Temps forts de la communauté",
    communityHighlightsDescription: "Rejoignez la communauté Digitalzango ! Découvrez des témoignages d'agriculteurs, partagez des astuces et participez à l'innovation agricole en Angola.",
    communityJoinButton: "Rejoindre la communauté",
    educationalContentTitle: "Contenu Éducatif",
    educationalContentDescription: "Apprenez avec nos guides agricoles, conseils de culture et articles de blog. Des connaissances pour stimuler votre production !",
    plantingGuideTitle: "Guide de Plantation",
    plantingGuideDescription: "Étape par étape pour planter avec succès.",
    blogArticlesTitle: "Articles de Blog",
    blogArticlesDescription: "Conseils, actualités et tendances agricoles.",
    recommendedToolsTitle: "Outils Recommandés",
    recommendedToolsDescription: "Produits numériques et outils utiles.",
    seeMoreContentButton: "Voir Plus de Contenu",
    featuresGridTitle: "Outils Digitalzango",
    featuresGridDescription: "Explorez toutes les fonctionnalités de votre assistant agricole",
    startPlanningTitle: "Commencez à Planifier Votre Ferme Aujourd'hui",
    startPlanningDescription: "Rejoignez des milliers d'agriculteurs angolais qui utilisent Digitalzango pour augmenter leur productivité et leur durabilité.",
    loading: "Chargement...",
    calendar: "Calendrier",
    calendarDescription: "Calendrier de planification agricole",
    weather: "Météo",
    weatherDescription: "Informations météorologiques en temps réel",
    pests: "Ravageurs et Maladies",
    pestsDescription: "Guide d'identification et de contrôle",
    resources: "Ressources",
    resourcesDescription: "Outils et guides agricoles",
    community: "Communauté",
    communityDescription: "Connectez-vous avec d'autres agriculteurs",
    downloadAppPageDescription: "Téléchargez notre application mobile",
    accessTool: "Accéder à l'Outil",
    viewInformation: "Voir les Informations",
    participate: "Participer",
    provincesLabel: "Provinces",
    languagesLabel: "Langues",
    monthsLabel: "Mois",
    weatherLabel: "Météo",
    language: "Langue",
    selectLanguage: "Sélectionner la Langue",
    adsenseTopBanner: "Bannière Supérieure AdSense",
    adsenseMiddleBanner: "Bannière Milieu AdSense",
    adsenseBottomBanner: "Bannière Inférieure AdSense",
    analytics: "Analyses",
    communityImageAlt: "Image de la Communauté",
    sunsetImageAlt: "Coucher de Soleil"
  },
  ki: {
    appTitle: "Kalendário ya Kilimi ku Angola",
    welcomeDescription: "Longa, lombolola, udi utonda misangu ya kilimi ku Angola.",
    currentRegion: "Dikanda ya Sona",
    climate: "Meso",
    rainySeason: "Mvula",
    month: "Mwezi",
    viewCalendar: "Tala Kalendário",
    downloadApp: "Dawniloda App",
    communityHighlightsTitle: "Mbandu ya Dikanda",
    communityHighlightsDescription: "Kakula mu dikanda Digitalzango! Tala misangu ya balimi, yambula dikanda, udi mu nsonge ya dikuma mu Angola.",
    communityJoinButton: "Kakula mu Dikanda",
    educationalContentTitle: "Misangu ya Kilongololo",
    educationalContentDescription: "Longola misangu ya kilimi, dikanda ya kilongololo. Misangu ya kutonda kilimi!",
    plantingGuideTitle: "Kilongololo ya Kilimi",
    plantingGuideDescription: "Misangu ya kulima kwa mbote.",
    blogArticlesTitle: "Misangu ya Blog",
    blogArticlesDescription: "Dikanda, misangu ya kilimi.",
    recommendedToolsTitle: "Misangu ya Mbote",
    recommendedToolsDescription: "Misangu ya digital na mbote.",
    seeMoreContentButton: "Tala Misangu Mingi",
    featuresGridTitle: "Misangu Digitalzango",
    featuresGridDescription: "Tala misangu yoso ya kilimi wako",
    startPlanningTitle: "Tumbula Kulonga Kilimi Wako Lelo",
    startPlanningDescription: "Kakula na balimi ba Angola bafwila Digitalzango kutonda kilimi.",
    loading: "Kusoma...",
    calendar: "Kalendário",
    calendarDescription: "Kalendário ya kilimi",
    weather: "Meso",
    weatherDescription: "Misangu ya meso",
    pests: "Bibulu",
    pestsDescription: "Kutala bibulu",
    resources: "Misangu",
    resourcesDescription: "Misangu ya kilimi",
    community: "Dikanda",
    communityDescription: "Kakula na balimi",
    downloadAppPageDescription: "Dawniloda app yetu",
    accessTool: "Kota Misangu",
    viewInformation: "Tala Misangu",
    participate: "Kakula",
    provincesLabel: "Mikanda",
    languagesLabel: "Ndinga",
    monthsLabel: "Mizezi",
    weatherLabel: "Meso",
    language: "Ndinga",
    selectLanguage: "Sobola Ndinga",
    adsenseTopBanner: "Banner ya Likolo AdSense",
    adsenseMiddleBanner: "Banner ya Kati AdSense",
    adsenseBottomBanner: "Banner ya Nsi AdSense",
    analytics: "Misangu",
    communityImageAlt: "Foto ya Dikanda",
    sunsetImageAlt: "Mwinda wa Buelo"
  },
  um: {
    appTitle: "Kalendário wa Olongela vyokulima ku Angola",
    welcomeDescription: "Lombolola, longa, utwale vyakukanda vyokulima ku Angola.",
    currentRegion: "Olukanda",
    climate: "Oluvyo",
    rainySeason: "Epunda lyomvula",
    month: "Okwesi",
    viewCalendar: "Twala Kalendário",
    downloadApp: "Download App",
    communityHighlightsTitle: "Olongela vyakukanda",
    communityHighlightsDescription: "Jovokele k'ukanda Digitalzango! Tala vyakukanda vyavakalimi, longa vyakukanda, utya k'ukwavo vyokulima mu Angola.",
    communityJoinButton: "Jovokele k'ukanda",
    educationalContentTitle: "Vyakukanda vyolongelo",
    educationalContentDescription: "Longela vyakukanda vyokulima, olongelo vyokulima. Vyakukanda vyokuholela okulima!",
    plantingGuideTitle: "Olongelo wokulima",
    plantingGuideDescription: "Vyakukanda vyokulima kwa mbote.",
    blogArticlesTitle: "Vyakukanda vya Blog",
    blogArticlesDescription: "Olongelo, vyakukanda vyokulima.",
    recommendedToolsTitle: "Vyakukanda vyambote",
    recommendedToolsDescription: "Vyakukanda vya digital vyambote.",
    seeMoreContentButton: "Twala Vyakukanda Vingi",
    featuresGridTitle: "Vyakukanda Digitalzango",
    featuresGridDescription: "Twala vyakukanda vyosi vyokulima vyako",
    startPlanningTitle: "Tundula Okulonga Olongela Vyokulima",
    startPlanningDescription: "Jovokele valimi vyosi vy'Angola vyatwala Digitalzango okuholela vyakukanda vyavo.",
    loading: "Okutwala...",
    calendar: "Kalendário",
    calendarDescription: "Kalendário wokulima",
    weather: "Oluvyo",
    weatherDescription: "Vyakukanda vyoluvyo",
    pests: "Ovihulu",
    pestsDescription: "Okulonga ovihulu",
    resources: "Vyakukanda",
    resourcesDescription: "Vyakukanda vyokulima",
    community: "Olukanda",
    communityDescription: "Jovokele valimi",
    downloadAppPageDescription: "Download app yetu",
    accessTool: "Twala Vyakukanda",
    viewInformation: "Twala Vyakukanda",
    participate: "Jovokele",
    provincesLabel: "Ovikanda",
    languagesLabel: "Olongede",
    monthsLabel: "Okwesi",
    weatherLabel: "Oluvyo",
    language: "Olongede",
    selectLanguage: "Hola Olongede",
    adsenseTopBanner: "Banner ya Likolo AdSense",
    adsenseMiddleBanner: "Banner ya Kati AdSense",
    adsenseBottomBanner: "Banner ya Nsi AdSense",
    analytics: "Vyakukanda",
    communityImageAlt: "Foto ya Olukanda",
    sunsetImageAlt: "Oluvemba"
  },
}

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [currentLanguage, setCurrentLanguage] = useState<string>("pt")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem("digitalzango-language")
    if (savedLanguage && languages.some(lang => lang.code === savedLanguage)) {
      setCurrentLanguage(savedLanguage)
    }
    setIsLoading(false)
  }, [])

  const setLanguage = (langCode: string) => {
    if (languages.some(lang => lang.code === langCode)) {
      setCurrentLanguage(langCode)
      localStorage.setItem("digitalzango-language", langCode)
    }
  }

  const t = (key: string): string => {
    const translation = translations[currentLanguage as keyof typeof translations]?.[key as keyof typeof translation]
    return translation || key
  }

  const value: LanguageContextType = {
    currentLanguage,
    setLanguage,
    languages,
    t,
    isLoading,
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
