"use client"
import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface Language {
  code: string
  name: string
  nativeName: string
  flag: string
}

interface LanguageContextType {
  currentLanguage: string
  setLanguage: (lang: string) => void
  changeLanguage: (lang: string) => void  // Added this for compatibility
  t: (key: string) => string
  languages: Language[]
  isLoading: boolean
}

const languages: Language[] = [
  { code: "pt", name: "Portuguese", nativeName: "Português", flag: "🇦🇴" },
  { code: "umb", name: "Umbundo", nativeName: "Umbundo", flag: "🇦🇴" },
  { code: "kmb", name: "Kimbundo", nativeName: "Kimbundo", flag: "🇦🇴" },
  { code: "en", name: "English", nativeName: "English", flag: "🇺🇸" },
  { code: "fr", name: "French", nativeName: "Français", flag: "🇫🇷" },  // Added French
]

const translations = {
  pt: {
    // Navigation
    home: "Início",
    tools: "Ferramentas",
    information: "Informações",
    community: "Comunidade",
    about: "Sobre",
    downloadApp: "Baixar App",
    guides: "Guias",
    guidesDescription: "Guias completos de cultivo para Angola",

    // Weather Page
    weatherInformation: "Informações Meteorológicas",
    weatherPageDescription:
      "Acompanhe as condições meteorológicas atuais e previsões para planejar suas atividades agrícolas.",
    loadingWeatherData: "Carregando dados meteorológicos...",
    weatherDataUnavailable: "Dados Meteorológicos Indisponíveis",
    tryAgain: "Tentar Novamente",
    noWeatherDataAvailable: "Nenhum dado meteorológico disponível",

    // API Status
    demonstrationData: "Dados de Demonstração",
    demonstrationDataDescription:
      "Atualmente usando dados meteorológicos simulados. Configure sua chave da API OpenWeatherMap para dados reais.",
    apiKeyNotConfigured: "API Key Não Configurada",
    apiKeyInstructions:
      "Para obter dados meteorológicos reais, configure sua chave da API OpenWeatherMap. Consulte o arquivo WEATHER_API_SETUP.md para instruções detalhadas.",

    // Location
    weatherLocation: "Localização Meteorológica",
    searchCityOrUseLocation: "Pesquise por uma cidade ou use sua localização atual",
    searchLocation: "Pesquisar localização...",
    useCurrentLocation: "Usar Localização Atual",
    detectingLocation: "Detectando localização...",
    locationNotFound: "Localização não encontrada",

    // Current Weather
    currentWeather: "Tempo Atual",
    temperature: "Temperatura",
    feelsLike: "Sensação",
    humidity: "Humidade",
    windSpeed: "Vento",
    pressure: "Pressão",
    visibility: "Visibilidade",
    sunrise: "Nascer do Sol",
    sunset: "Pôr do Sol",

    // Forecast
    forecast: "Previsão",
    forecastDays: "Previsão de 7 Dias",
    today: "Hoje",
    precipitation: "Precipitação",

    // Weather Alerts
    weatherAlerts: "Alertas Meteorológicos",
    high: "Alto",
    medium: "Médio",
    low: "Baixo",
    from: "De",
    until: "Até",

    // Agricultural Recommendations
    agriculturalRecommendations: "Recomendações Agrícolas",
    agriculturalRecommendationsDescription: "Baseado nas condições meteorológicas atuais",
    highTemperatureAlert: "Alerta de Temperatura Alta",
    increaseIrrigationFrequency:
      "Aumente a frequência de irrigação e considere proteção com sombra para culturas sensíveis",
    lowHumidity: "Baixa Humidade",
    monitorPlantsClosely: "Monitore as plantas mais de perto e considere irrigação adicional",
    strongWinds: "Ventos Fortes",
    protectYoungPlants: "Proteja plantas jovens e verifique estruturas de suporte",
    highPrecipitationExpected: "Alta Precipitação Esperada",
    reduceIrrigation: "Reduza a irrigação e proteja culturas sensíveis ao excesso de água",
    favorableConditions: "Condições Favoráveis",
    currentWeatherConditionsAreFavorable:
      "As condições meteorológicas atuais são favoráveis para a maioria das atividades agrícolas",

    // Weather Conditions
    clear: "Céu limpo",
    cloudy: "Nublado",
    partlyCloudy: "Parcialmente nublado",
    rainy: "Chuvoso",
    thunderstorm: "Tempestade",
    snow: "Neve",
    fog: "Nevoeiro",
    windy: "Ventoso",

    // Time
    lastUpdated: "Última atualização",
    updatedAt: "Atualizado às",

    // Common UI
    loading: "Carregando...",
    error: "Erro",
    success: "Sucesso",
    cancel: "Cancelar",
    save: "Guardar",
    edit: "Editar",
    delete: "Eliminar",
    add: "Adicionar",
    search: "Pesquisar",
    filter: "Filtrar",
    sort: "Ordenar",
    next: "Próximo",
    previous: "Anterior",
    close: "Fechar",
    open: "Abrir",
    yes: "Sim",
    no: "Não",

    // Rest of existing translations...
    appTitle: "Calendário Agrícola para Angola",
    appSubtitle: "Planeamento agrícola inteligente",
    welcome: "Bem-vindo ao seu assistente agrícola",
    welcomeDescription:
      "Planeie, organize e optimize as suas actividades agrícolas com base nas condições locais de Angola.",
    calendar: "Calendário",
    weather: "Tempo",
    crops: "Culturas",
    resources: "Recursos",
    pests: "Pragas",
    activities: "Actividades",
    cooperative: "Cooperativa",
    agriculturalCalendar: "Calendário Agrícola",
    weatherForecast: "Previsão do Tempo",
    resourceManagement: "Gestão de Recursos",
    pestAlerts: "Alertas de Pragas",
    cropPlanning: "Planeamento de Culturas",
    activityLog: "Registo de Actividades",
    cooperativeFeatures: "Funcionalidades Cooperativas",
    calendarDescription: "Planeie as suas actividades agrícolas mês a mês com base na sua região",
    weatherDescription: "Obtenha previsões meteorológicas precisas para a sua região",
    resourcesDescription: "Gerir sementes, fertilizantes e equipamentos agrícolas",
    pestsDescription: "Base de dados completa sobre pragas e doenças que afectam as culturas em Angola",
    communityDescription:
      "Junte-se à nossa comunidade de agricultores angolanos. Partilhe conhecimentos, recursos e experiências.",
    accessTool: "Acessar Ferramenta",
    viewInformation: "Ver Informações",
    participate: "Participar",
    contactUs: "Contactar-nos",
    addCrop: "Adicionar Cultura",
    addResource: "Adicionar Recurso",
    addActivity: "Adicionar Actividade",
    provincesLabel: "Províncias Cobertas",
    languagesLabel: "Idiomas Suportados",
    monthsLabel: "Meses de Planeamento",
    weatherLabel: "Actualizações Meteorológicas",
    startPlanningTitle: "Comece a Planear a Sua Quinta Hoje",
    startPlanningDescription:
      "Junte-se a milhares de agricultores angolanos que usam o nosso calendário agrícola para melhorar as suas colheitas",
    viewCalendar: "Ver Calendário",
    companyName: "Calendário Agrícola",
    companyTagline: "para Angola",
    companyDescription:
      "Capacitando agricultores angolanos com ferramentas de planeamento agrícola inteligente e dados meteorológicos em tempo real.",
    allRightsReserved: "Todos os direitos reservados.",
    currentRegion: "Região Actual",
    climate: "Clima",
    rainySeason: "Época chuvosa",
    month: "Mês",
    communityTitle: "Comunidade Agrícola",
    farmerGroups: "Grupos de Agricultores",
    discussionForum: "Fórum de Discussão",
    resourceSharing: "Partilha de Recursos",
    aboutTitle: "Sobre o Calendário Agrícola para Angola",
    aboutDescription:
      "Somos uma plataforma dedicada a apoiar os agricultores angolanos com ferramentas tecnológicas avançadas, informações precisas e uma comunidade forte para melhorar a produtividade agrícola em todo o país.",
    ourHistory: "A Nossa História",
    whatWeOffer: "O Que Oferecemos",
    mission: "Missão",
    excellence: "Excelência",
    selectLanguage: "Seleccionar idioma",
    selectRegion: "Seleccionar região",
    language: "Idioma",
    region: "Região",
    todaysActivities: "Actividades de Hoje",
    upcomingTasks: "Tarefas Próximas",
    january: "Janeiro",
    february: "Fevereiro",
    march: "Março",
    april: "Abril",
    may: "Maio",
    june: "Junho",
    july: "Julho",
    august: "Agosto",
    september: "Setembro",
    october: "Outubro",
    november: "Novembro",
    december: "Dezembro",
    cropGuides: "Guias de Culturas",
    cornGuide: "Guia do Milho",
    beanGuide: "Guia do Feijão",
    cassavaGuide: "Guia da Mandioca",
    sweetPotatoGuide: "Guia da Batata-doce",
    tomatoGuide: "Guia do Tomate",
    onionGuide: "Guia da Cebola",
    coffeeGuide: "Guia do Café",
    bananaGuide: "Guia da Banana",
    helpCenter: "Central de Ajuda",
    faq: "Perguntas Frequentes",
    blog: "Blog",
    careers: "Carreiras",
    forum: "Fórum",
    events: "Eventos",
    team: "Equipa",
    tutorials: "Tutoriais",

    // Tools Page
    toolsPageTitle: "Ferramentas Agrícolas",
    toolsPageDescription:
      "Acesse todas as ferramentas necessárias para planear e gerir a sua actividade agrícola de forma eficiente.",

    // Information Page
    informationPageTitle: "Informações Agrícolas",
    informationPageDescription:
      "Acesse informações essenciais sobre agricultura, pragas, doenças e melhores práticas para Angola.",

    // Community Page
    communityPageTitle: "Comunidade Agrícola",
    communityPageDescription:
      "Junte-se à nossa comunidade de agricultores angolanos. Partilhe conhecimentos, recursos e experiências.",
    registeredFarmers: "Agricultores Registados",
    provincesCovered: "Províncias Cobertas",
    activeDiscussions: "Discussões Activas",
    userSatisfaction: "Satisfação dos Utilizadores",
    ourCommunity: "Nossa Comunidade",

    // About Page
    aboutPageTitle: "Sobre o Calendário Agrícola para Angola",
    aboutPageDescription:
      "Somos uma plataforma dedicada a apoiar os agricultores angolanos com ferramentas tecnológicas avançadas, informações precisas e uma comunidade forte para melhorar a produtividade agrícola em todo o país.",
    ourStory: "A Nossa História",
    whatWeOffer: "O Que Oferecemos",
    getInTouch: "Entre em Contacto",
    questionsOrSuggestions: "Tem dúvidas ou sugestões? Estamos aqui para ajudar!",
    email: "Email",
    phone: "Telefone",
    location: "Localização",
    headquarters: "Sede principal",
    workingHours: "Horário de Funcionamento",
    mondayToFriday: "Segunda a Sexta",
    saturday: "Sábado",
    sunday: "Domingo",
    closed: "Fechado",

    // Download App Page
    downloadAppPageTitle: "Baixar Calendário Agrícola",
    downloadAppPageDescription:
      "Tenha todas as ferramentas agrícolas na palma da sua mão. Disponível para Android, iOS e como aplicação web.",
    ratings: "avaliações",
    downloads: "downloads",
    free: "Gratuito",
    mainFeatures: "Funcionalidades Principais",
    compatibility: "Compatibilidade",
    mobileDevices: "Dispositivos Móveis",
    tablets: "Tablets",
    computers: "Computadores",
    optimizedInterface: "Interface optimizada para tablets",
    responsiveWebApp: "Aplicação web responsiva",
    howToInstall: "Como Instalar",
    simpleInstructions: "Instruções simples para começar a usar",
    download: "Baixar",
    install: "Instalar",
    start: "Começar",
    downloadStep: "Clique no botão de download da sua plataforma preferida",
    installStep: "Siga as instruções do seu dispositivo para instalar",
    startStep: "Abra a app e comece a planear a sua quinta",
    needHelp: "Precisa de Ajuda?",
    supportTeamReady:
      "A nossa equipa de suporte está pronta para ajudar com qualquer questão sobre a instalação ou uso da aplicação.",
    contactSupport: "Contactar Suporte",

    // Common UI Elements
    size: "Tamanho",
    version: "Versão",
    downloadFor: "Baixar para",
    organizedBy: "Organizado por",
    by: "Por",
    readingTime: "de leitura",
  },
  en: {
    // Navigation
    home: "Home",
    tools: "Tools",
    information: "Information",
    community: "Community",
    about: "About",
    downloadApp: "Download App",
    guides: "Guides",
    guidesDescription: "Complete cultivation guides for Angola",

    // Weather Page
    weatherInformation: "Weather Information",
    weatherPageDescription: "Track current weather conditions and forecasts to plan your agricultural activities.",
    loadingWeatherData: "Loading weather data...",
    weatherDataUnavailable: "Weather Data Unavailable",
    tryAgain: "Try Again",
    noWeatherDataAvailable: "No weather data available",

    // API Status
    demonstrationData: "Demonstration Data",
    demonstrationDataDescription:
      "Currently using simulated weather data. Configure your OpenWeatherMap API key for real data.",
    apiKeyNotConfigured: "API Key Not Configured",
    apiKeyInstructions:
      "To get real weather data, configure your OpenWeatherMap API key. See WEATHER_API_SETUP.md for detailed instructions.",

    // Location
    weatherLocation: "Weather Location",
    searchCityOrUseLocation: "Search for a city or use your current location",
    searchLocation: "Search location...",
    useCurrentLocation: "Use Current Location",
    detectingLocation: "Detecting location...",
    locationNotFound: "Location not found",

    // Current Weather
    currentWeather: "Current Weather",
    temperature: "Temperature",
    feelsLike: "Feels Like",
    humidity: "Humidity",
    windSpeed: "Wind",
    pressure: "Pressure",
    visibility: "Visibility",
    sunrise: "Sunrise",
    sunset: "Sunset",

    // Forecast
    forecast: "Forecast",
    forecastDays: "7-Day Forecast",
    today: "Today",
    precipitation: "Precipitation",

    // Weather Alerts
    weatherAlerts: "Weather Alerts",
    high: "High",
    medium: "Medium",
    low: "Low",
    from: "From",
    until: "Until",

    // Agricultural Recommendations
    agriculturalRecommendations: "Agricultural Recommendations",
    agriculturalRecommendationsDescription: "Based on current weather conditions",
    highTemperatureAlert: "High Temperature Alert",
    increaseIrrigationFrequency: "Increase irrigation frequency and consider shade protection for sensitive crops",
    lowHumidity: "Low Humidity",
    monitorPlantsClosely: "Monitor plants more closely and consider additional irrigation",
    strongWinds: "Strong Winds",
    protectYoungPlants: "Protect young plants and check support structures",
    highPrecipitationExpected: "High Precipitation Expected",
    reduceIrrigation: "Reduce irrigation and protect crops sensitive to excess water",
    favorableConditions: "Favorable Conditions",
    currentWeatherConditionsAreFavorable: "Current weather conditions are favorable for most agricultural activities",

    // Weather Conditions
    clear: "Clear sky",
    cloudy: "Cloudy",
    partlyCloudy: "Partly cloudy",
    rainy: "Rainy",
    thunderstorm: "Thunderstorm",
    snow: "Snow",
    fog: "Fog",
    windy: "Windy",

    // Time
    lastUpdated: "Last updated",
    updatedAt: "Updated at",

    // Common UI
    loading: "Loading...",
    error: "Error",
    success: "Success",
    cancel: "Cancel",
    save: "Save",
    edit: "Edit",
    delete: "Delete",
    add: "Add",
    search: "Search",
    filter: "Filter",
    sort: "Sort",
    next: "Next",
    previous: "Previous",
    close: "Close",
    open: "Open",
    yes: "Yes",
    no: "No",

    // Rest of existing translations...
    appTitle: "Agricultural Calendar for Angola",
    appSubtitle: "Smart agricultural planning",
    welcome: "Welcome to your agricultural assistant",
    welcomeDescription: "Plan, organize and optimize your agricultural activities based on local conditions in Angola.",
    calendar: "Calendar",
    weather: "Weather",
    crops: "Crops",
    resources: "Resources",
    pests: "Pests",
    activities: "Activities",
    cooperative: "Cooperative",
    agriculturalCalendar: "Agricultural Calendar",
    weatherForecast: "Weather Forecast",
    resourceManagement: "Resource Management",
    pestAlerts: "Pest Alerts",
    cropPlanning: "Crop Planning",
    activityLog: "Activity Log",
    cooperativeFeatures: "Cooperative Features",
    calendarDescription: "Plan your agricultural activities month by month based on your region",
    weatherDescription: "Get accurate weather forecasts for your region",
    resourcesDescription: "Manage seeds, fertilizers and agricultural equipment",
    pestsDescription: "Complete database of pests and diseases affecting crops in Angola",
    communityDescription: "Join our community of Angolan farmers. Share knowledge, resources and experiences.",
    accessTool: "Access Tool",
    viewInformation: "View Information",
    participate: "Participate",
    contactUs: "Contact Us",
    addCrop: "Add Crop",
    addResource: "Add Resource",
    addActivity: "Add Activity",
    provincesLabel: "Provinces Covered",
    languagesLabel: "Languages Supported",
    monthsLabel: "Months Planning",
    weatherLabel: "Weather Updates",
    startPlanningTitle: "Start Planning Your Farm Today",
    startPlanningDescription:
      "Join thousands of Angolan farmers using our agricultural calendar to improve their harvests",
    viewCalendar: "View Calendar",
    companyName: "Agricultural Calendar",
    companyTagline: "for Angola",
    companyDescription:
      "Empowering Angolan farmers with intelligent agricultural planning tools and real-time weather data.",
    allRightsReserved: "All rights reserved.",
    currentRegion: "Current Region",
    climate: "Climate",
    rainySeason: "Rainy season",
    month: "Month",
    communityTitle: "Agricultural Community",
    farmerGroups: "Farmer Groups",
    discussionForum: "Discussion Forum",
    resourceSharing: "Resource Sharing",
    aboutTitle: "About Agricultural Calendar for Angola",
    aboutDescription:
      "We are a platform dedicated to supporting Angolan farmers with advanced technological tools, accurate information and a strong community to improve agricultural productivity across the country.",
    ourHistory: "Our History",
    whatWeOffer: "What We Offer",
    mission: "Mission",
    excellence: "Excellence",
    selectLanguage: "Select language",
    selectRegion: "Select region",
    language: "Language",
    region: "Region",
    todaysActivities: "Today's Activities",
    upcomingTasks: "Upcoming Tasks",
    january: "January",
    february: "February",
    march: "March",
    april: "April",
    may: "May",
    june: "June",
    july: "July",
    august: "August",
    september: "September",
    october: "October",
    november: "November",
    december: "December",
    cropGuides: "Crop Guides",
    cornGuide: "Corn Guide",
    beanGuide: "Bean Guide",
    cassavaGuide: "Cassava Guide",
    sweetPotatoGuide: "Sweet Potato Guide",
    tomatoGuide: "Tomato Guide",
    onionGuide: "Onion Guide",
    coffeeGuide: "Coffee Guide",
    bananaGuide: "Banana Guide",
    helpCenter: "Help Center",
    faq: "Frequently Asked Questions",
    blog: "Blog",
    careers: "Careers",
    forum: "Forum",
    events: "Events",
    team: "Team",
    tutorials: "Tutorials",

    // Tools Page
    toolsPageTitle: "Agricultural Tools",
    toolsPageDescription: "Access all the tools needed to plan and manage your agricultural activity efficiently.",

    // Information Page
    informationPageTitle: "Agricultural Information",
    informationPageDescription:
      "Access essential information about agriculture, pests, diseases and best practices for Angola.",

    // Community Page
    communityPageTitle: "Agricultural Community",
    communityPageDescription: "Join our community of Angolan farmers. Share knowledge, resources and experiences.",
    registeredFarmers: "Registered Farmers",
    provincesCovered: "Provinces Covered",
    activeDiscussions: "Active Discussions",
    userSatisfaction: "User Satisfaction",
    ourCommunity: "Our Community",

    // About Page
    aboutPageTitle: "About Agricultural Calendar for Angola",
    aboutPageDescription:
      "We are a platform dedicated to supporting Angolan farmers with advanced technological tools, accurate information and a strong community to improve agricultural productivity across the country.",
    ourStory: "Our Story",
    whatWeOffer: "What We Offer",
    getInTouch: "Get in Touch",
    questionsOrSuggestions: "Have questions or suggestions? We're here to help!",
    email: "Email",
    phone: "Phone",
    location: "Location",
    headquarters: "Headquarters",
    workingHours: "Working Hours",
    mondayToFriday: "Monday to Friday",
    saturday: "Saturday",
    sunday: "Sunday",
    closed: "Closed",

    // Download App Page
    downloadAppPageTitle: "Download Agricultural Calendar",
    downloadAppPageDescription:
      "Have all agricultural tools in the palm of your hand. Available for Android, iOS and as a web application.",
    ratings: "ratings",
    downloads: "downloads",
    free: "Free",
    mainFeatures: "Main Features",
    compatibility: "Compatibility",
    mobileDevices: "Mobile Devices",
    tablets: "Tablets",
    computers: "Computers",
    optimizedInterface: "Optimized interface for tablets",
    responsiveWebApp: "Responsive web application",
    howToInstall: "How to Install",
    simpleInstructions: "Simple instructions to get started",
    download: "Download",
    install: "Install",
    start: "Start",
    downloadStep: "Click the download button for your preferred platform",
    installStep: "Follow your device's instructions to install",
    startStep: "Open the app and start planning your farm",
    needHelp: "Need Help?",
    supportTeamReady: "Our support team is ready to help with any questions about installation or app usage.",
    contactSupport: "Contact Support",

    // Common UI Elements
    size: "Size",
    version: "Version",
    downloadFor: "Download for",
    organizedBy: "Organized by",
    by: "By",
    readingTime: "read",
  },
  fr: {
    // Navigation
    home: "Accueil",
    tools: "Outils",
    information: "Informations",
    community: "Communauté",
    about: "À propos",
    downloadApp: "Télécharger l'App",
    guides: "Guides",
    guidesDescription: "Guides complets de culture pour l'Angola",

    // Weather Page
    weatherInformation: "Informations Météorologiques",
    weatherPageDescription: "Suivez les conditions météorologiques actuelles et les prévisions pour planifier vos activités agricoles.",
    loadingWeatherData: "Chargement des données météorologiques...",
    weatherDataUnavailable: "Données Météorologiques Indisponibles",
    tryAgain: "Réessayer",
    noWeatherDataAvailable: "Aucune donnée météorologique disponible",

    // API Status
    demonstrationData: "Données de Démonstration",
    demonstrationDataDescription:
      "Utilisation actuelle de données météorologiques simulées. Configurez votre clé API OpenWeatherMap pour des données réelles.",
    apiKeyNotConfigured: "Clé API Non Configurée",
    apiKeyInstructions:
      "Pour obtenir des données météorologiques réelles, configurez votre clé API OpenWeatherMap. Consultez WEATHER_API_SETUP.md pour des instructions détaillées.",

    // Location
    weatherLocation: "Localisation Météorologique",
    searchCityOrUseLocation: "Recherchez une ville ou utilisez votre localisation actuelle",
    searchLocation: "Rechercher une localisation...",
    useCurrentLocation: "Utiliser la Localisation Actuelle",
    detectingLocation: "Détection de la localisation...",
    locationNotFound: "Localisation non trouvée",

    // Current Weather
    currentWeather: "Météo Actuelle",
    temperature: "Température",
    feelsLike: "Ressenti",
    humidity: "Humidité",
    windSpeed: "Vent",
    pressure: "Pression",
    visibility: "Visibilité",
    sunrise: "Lever du Soleil",
    sunset: "Coucher du Soleil",

    // Forecast
    forecast: "Prévisions",
    forecastDays: "Prévisions 7 Jours",
    today: "Aujourd'hui",
    precipitation: "Précipitations",

    // Weather Alerts
    weatherAlerts: "Alertes Météorologiques",
    high: "Élevé",
    medium: "Moyen",
    low: "Faible",
    from: "De",
    until: "Jusqu'à",

    // Agricultural Recommendations
    agriculturalRecommendations: "Recommandations Agricoles",
    agriculturalRecommendationsDescription: "Basé sur les conditions météorologiques actuelles",
    highTemperatureAlert: "Alerte Température Élevée",
    increaseIrrigationFrequency: "Augmentez la fréquence d'irrigation et considérez une protection ombragée pour les cultures sensibles",
    lowHumidity: "Faible Humidité",
    monitorPlantsClosely: "Surveillez les plantes de plus près et considérez une irrigation supplémentaire",
    strongWinds: "Vents Forts",
    protectYoungPlants: "Protégez les jeunes plants et vérifiez les structures de support",
    highPrecipitationExpected: "Fortes Précipitations Attendues",
    reduceIrrigation: "Réduisez l'irrigation et protégez les cultures sensibles à l'excès d'eau",
    favorableConditions: "Conditions Favorables",
    currentWeatherConditionsAreFavorable: "Les conditions météorologiques actuelles sont favorables pour la plupart des activités agricoles",

    // Weather Conditions
    clear: "Ciel dégagé",
    cloudy: "Nuageux",
    partlyCloudy: "Partiellement nuageux",
    rainy: "Pluvieux",
    thunderstorm: "Orage",
    snow: "Neige",
    fog: "Brouillard",
    windy: "Venteux",

    // Time
    lastUpdated: "Dernière mise à jour",
    updatedAt: "Mis à jour à",

    // Common UI
    loading: "Chargement...",
    error: "Erreur",
    success: "Succès",
    cancel: "Annuler",
    save: "Sauvegarder",
    edit: "Modifier",
    delete: "Supprimer",
    add: "Ajouter",
    search: "Rechercher",
    filter: "Filtrer",
    sort: "Trier",
    next: "Suivant",
    previous: "Précédent",
    close: "Fermer",
    open: "Ouvrir",
    yes: "Oui",
    no: "Non",

    // Rest of translations...
    appTitle: "Calendrier Agricole pour l'Angola",
    appSubtitle: "Planification agricole intelligente",
    welcome: "Bienvenue dans votre assistant agricole",
    welcomeDescription: "Planifiez, organisez et optimisez vos activités agricoles basées sur les conditions locales en Angola.",
    calendar: "Calendrier",
    weather: "Météo",
    crops: "Cultures",
    resources: "Ressources",
    pests: "Parasites",
    activities: "Activités",
    cooperative: "Coopérative",
    agriculturalCalendar: "Calendrier Agricole",
    weatherForecast: "Prévisions Météorologiques",
    resourceManagement: "Gestion des Ressources",
    pestAlerts: "Alertes aux Parasites",
    cropPlanning: "Planification des Cultures",
    activityLog: "Journal d'Activités",
    cooperativeFeatures: "Fonctionnalités Coopératives",
    calendarDescription: "Planifiez vos activités agricoles mois par mois selon votre région",
    weatherDescription: "Obtenez des prévisions météorologiques précises pour votre région",
    resourcesDescription: "Gérez les semences, engrais et équipements agricoles",
    pestsDescription: "Base de données complète sur les parasites et maladies affectant les cultures en Angola",
    communityDescription: "Rejoignez notre communauté d'agriculteurs angolais. Partagez connaissances, ressources et expériences.",
    accessTool: "Accéder à l'Outil",
    viewInformation: "Voir les Informations",
    participate: "Participer",
    contactUs: "Nous Contacter",
    addCrop: "Ajouter une Culture",
    addResource: "Ajouter une Ressource",
    addActivity: "Ajouter une Activité",
    provincesLabel: "Provinces Couvertes",
    languagesLabel: "Langues Supportées",
    monthsLabel: "Mois de Planification",
    weatherLabel: "Mises à Jour Météorologiques",
    startPlanningTitle: "Commencez à Planifier Votre Ferme Aujourd'hui",
    startPlanningDescription: "Rejoignez des milliers d'agriculteurs angolais utilisant notre calendrier agricole pour améliorer leurs récoltes",
    viewCalendar: "Voir le Calendrier",
    companyName: "Calendrier Agricole",
    companyTagline: "pour l'Angola",
    companyDescription: "Autonomiser les agriculteurs angolais avec des outils de planification agricole intelligents et des données météorologiques en temps réel.",
    allRightsReserved: "Tous droits réservés.",
    currentRegion: "Région Actuelle",
    climate: "Climat",
    rainySeason: "Saison des pluies",
    month: "Mois",
    communityTitle: "Communauté Agricole",
    farmerGroups: "Groupes d'Agriculteurs",
    discussionForum: "Forum de Discussion",
    resourceSharing: "Partage de Ressources",
    aboutTitle: "À propos du Calendrier Agricole pour l'Angola",
    aboutDescription: "Nous sommes une plateforme dédiée à soutenir les agriculteurs angolais avec des outils technologiques avancés, des informations précises et une communauté forte pour améliorer la productivité agricole dans tout le pays.",
    ourHistory: "Notre Histoire",
    whatWeOffer: "Ce Que Nous Offrons",
    mission: "Mission",
    excellence: "Excellence",
    selectLanguage: "Sélectionner la langue",
    selectRegion: "Sélectionner la région",
    language: "Langue",
    region: "Région",
    todaysActivities: "Activités d'Aujourd'hui",
    upcomingTasks: "Tâches à Venir",
    january: "Janvier",
    february: "Février",
    march: "Mars",
    april: "Avril",
    may: "Mai",
    june: "Juin",
    july: "Juillet",
    august: "Août",
    september: "Septembre",
    october: "Octobre",
    november: "Novembre",
    december: "Décembre",
    cropGuides: "Guides de Culture",
    cornGuide: "Guide du Maïs",
    beanGuide: "Guide des Haricots",
    cassavaGuide: "Guide du Manioc",
    sweetPotatoGuide: "Guide de la Patate Douce",
    tomatoGuide: "Guide de la Tomate",
    onionGuide: "Guide de l'Oignon",
    coffeeGuide: "Guide du Café",
    bananaGuide: "Guide de la Banane",
    helpCenter: "Centre d'Aide",
    faq: "Questions Fréquemment Posées",
    blog: "Blog",
    careers: "Carrières",
    forum: "Forum",
    events: "Événements",
    team: "Équipe",
    tutorials: "Tutoriels",

    // Tools Page
    toolsPageTitle: "Outils Agricoles",
    toolsPageDescription: "Accédez à tous les outils nécessaires pour planifier et gérer votre activité agricole efficacement.",

    // Information Page
    informationPageTitle: "Informations Agricoles",
    informationPageDescription: "Accédez aux informations essentielles sur l'agriculture, les parasites, les maladies et les meilleures pratiques pour l'Angola.",

    // Community Page
    communityPageTitle: "Communauté Agricole",
    communityPageDescription: "Rejoignez notre communauté d'agriculteurs angolais. Partagez connaissances, ressources et expériences.",
    registeredFarmers: "Agriculteurs Enregistrés",
    provincesCovered: "Provinces Couvertes",
    activeDiscussions: "Discussions Actives",
    userSatisfaction: "Satisfaction des Utilisateurs",
    ourCommunity: "Notre Communauté",

    // About Page
    aboutPageTitle: "À propos du Calendrier Agricole pour l'Angola",
    aboutPageDescription: "Nous sommes une plateforme dédiée à soutenir les agriculteurs angolais avec des outils technologiques avancés, des informations précises et une communauté forte pour améliorer la productivité agricole dans tout le pays.",
    ourStory: "Notre Histoire",
    whatWeOffer: "Ce Que Nous Offrons",
    getInTouch: "Entrer en Contact",
    questionsOrSuggestions: "Avez-vous des questions ou des suggestions? Nous sommes là pour aider!",
    email: "Email",
    phone: "Téléphone",
    location: "Localisation",
    headquarters: "Siège social",
    workingHours: "Heures de Travail",
    mondayToFriday: "Lundi au Vendredi",
    saturday: "Samedi",
    sunday: "Dimanche",
    closed: "Fermé",

    // Download App Page
    downloadAppPageTitle: "Télécharger le Calendrier Agricole",
    downloadAppPageDescription: "Ayez tous les outils agricoles dans la paume de votre main. Disponible pour Android, iOS et comme application web.",
    ratings: "évaluations",
    downloads: "téléchargements",
    free: "Gratuit",
    mainFeatures: "Fonctionnalités Principales",
    compatibility: "Compatibilité",
    mobileDevices: "Appareils Mobiles",
    tablets: "Tablettes",
    computers: "Ordinateurs",
    optimizedInterface: "Interface optimisée pour tablettes",
    responsiveWebApp: "Application web responsive",
    howToInstall: "Comment Installer",
    simpleInstructions: "Instructions simples pour commencer",
    download: "Télécharger",
    install: "Installer",
    start: "Commencer",
    downloadStep: "Cliquez sur le bouton de téléchargement de votre plateforme préférée",
    installStep: "Suivez les instructions de votre appareil pour installer",
    startStep: "Ouvrez l'app et commencez à planifier votre ferme",
    needHelp: "Besoin d'Aide?",
    supportTeamReady: "Notre équipe de support est prête à aider avec toute question sur l'installation ou l'utilisation de l'application.",
    contactSupport: "Contacter le Support",

    // Common UI Elements
    size: "Taille",
    version: "Version",
    downloadFor: "Télécharger pour",
    organizedBy: "Organisé par",
    by: "Par",
    readingTime: "de lecture",
  },
  kmb: {
    // Keep your existing Kimbundo translations...
    home: "Mukanda",
    tools: "Makolo ma Kusonga",
    information: "Makolo",
    community: "Kimbanda",
    about: "Kima",
    downloadApp: "Kukonga App",
    guides: "Makolo ma Kilima",
    guidesDescription: "Makolo moso ma kilima kya Angola",
    // ... rest of your Kimbundo translations
  },
  umb: {
    // Keep your existing Umbundo translations...
    home: "Omukanda",
    tools: "Omakolo ma Okusonga",
    information: "Omakolo",
    community: "Okimbanda",
    about: "Okima",
    downloadApp: "Okukonga App",
    guides: "Omakolo ma Ulima",
    guidesDescription: "Omakolo moso ma ulima wa Angola",
    // ... rest of your Umbundo translations
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState("pt")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem("agricultural-calendar-language")
    if (savedLanguage && languages.find((l) => l.code === savedLanguage)) {
      setCurrentLanguage(savedLanguage)
    }
    setIsLoading(false)
  }, [])

  const setLanguage = (lang: string) => {
    if (languages.find((l) => l.code === lang)) {
      setCurrentLanguage(lang)
      localStorage.setItem("agricultural-calendar-language", lang)

      // Force re-render by updating document language
      if (typeof document !== 'undefined') {
        document.documentElement.lang = lang
      }

      // Dispatch custom event for any components that need to react to language changes
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent("languageChanged", { detail: { language: lang } }))
      }
    }
  }

  // Add changeLanguage as an alias for setLanguage for compatibility
  const changeLanguage = setLanguage

  const t = (key: string): string => {
    const currentTranslations = translations[currentLanguage as keyof typeof translations]
    if (!currentTranslations) {
      console.warn(`Translation not found for language: ${currentLanguage}`)
      return key
    }

    const translation = currentTranslations[key as keyof typeof currentTranslations]
    if (!translation) {
      console.warn(`Translation key not found: ${key} for language: ${currentLanguage}`)
      return key
    }

    return translation
  }

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        setLanguage,
        changeLanguage,  // Added for compatibility with header
        t,
        languages,
        isLoading,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
