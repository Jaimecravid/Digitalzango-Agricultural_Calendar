// Translation infrastructure removed. File intentionally left blank.
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
  t: (key: string) => string
  languages: Language[]
  isLoading: boolean
}

const languages: Language[] = [
  { code: "pt", name: "Portuguese", nativeName: "Português", flag: "🇵🇹" },
  { code: "umb", name: "Umbundo", nativeName: "Umbundo", flag: "🇦🇴" },
  { code: "kmb", name: "Kimbundo", nativeName: "Kimbundo", flag: "🇦🇴" },
  { code: "en", name: "English", nativeName: "English", flag: "🇺🇸" },
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
  kmb: {
    // Navigation
    home: "Mukanda",
    tools: "Makolo ma Kusonga",
    information: "Makolo",
    community: "Kimbanda",
    about: "Kima",
    downloadApp: "Kukonga App",

    // Weather Page
    weatherInformation: "Makolo ma Tempo",
    weatherPageDescription: "Kumona tempo ya agora ni kima kya tempo ya kusadisa kilima.",
    loadingWeatherData: "Kusolola makolo ma tempo...",
    weatherDataUnavailable: "Makolo ma Tempo Kala",
    tryAgain: "Kusolola Kima",
    noWeatherDataAvailable: "Kala makolo ma tempo",

    // API Status
    demonstrationData: "Makolo ma Kusonga",
    demonstrationDataDescription:
      "Agora tukusonga makolo ma tempo ma kusonga. Kubikila API key ya OpenWeatherMap ya makolo ma muxima.",
    apiKeyNotConfigured: "API Key Kala Kubikila",
    apiKeyInstructions:
      "Ya makolo ma tempo ma muxima, kubikila API key ya OpenWeatherMap. Kumona WEATHER_API_SETUP.md ya makolo ma kusadisa.",

    // Location
    weatherLocation: "Kimbanda ya Tempo",
    searchCityOrUseLocation: "Kusolola mbanza kima kimbanda yenu ya agora",
    searchLocation: "Kusolola kimbanda...",
    useCurrentLocation: "Kusonga Kimbanda ya Agora",
    detectingLocation: "Kusolola kimbanda...",
    locationNotFound: "Kimbanda kala kumona",

    // Current Weather
    currentWeather: "Tempo ya Agora",
    temperature: "Muxima",
    feelsLike: "Kumona",
    humidity: "Manji",
    windSpeed: "Mpepo",
    pressure: "Kubanga",
    visibility: "Kumona",
    sunrise: "Kuzuwa kya Ntangu",
    sunset: "Kuteleka kya Ntangu",

    // Forecast
    forecast: "Kima kya Tempo",
    forecastDays: "Kima kya Tempo ya Misambu 7",
    today: "Lelu",
    precipitation: "Chuva",

    // Weather Alerts
    weatherAlerts: "Alerta ya Tempo",
    high: "Kinene",
    medium: "Kati",
    low: "Kifioti",
    from: "Kuma",
    until: "Teka",

    // Agricultural Recommendations
    agriculturalRecommendations: "Makolo ma Kilima",
    agriculturalRecommendationsDescription: "Kuma tempo ya agora",
    highTemperatureAlert: "Alerta ya Muxima Kinene",
    increaseIrrigationFrequency: "Kubikila manji mengi ni kusadisa makolo ma kilima ma kifioti",
    lowHumidity: "Manji Kifioti",
    monitorPlantsClosely: "Kumona makolo ma kilima ni kubikila manji mengi",
    strongWinds: "Mpepo Kinene",
    protectYoungPlants: "Kusadisa makolo ma kilima ma kifioti ni kumona makolo ma kusadisa",
    highPrecipitationExpected: "Chuva Kinene Kima",
    reduceIrrigation: "Kuteleka manji ni kusadisa makolo ma kilima ma kala kusadisa manji mengi",
    favorableConditions: "Tempo ya Muxima",
    currentWeatherConditionsAreFavorable: "Tempo ya agora ya muxima ya makolo ma kilima mengi",

    // Weather Conditions
    clear: "Ntangu ya muxima",
    cloudy: "Mabingu",
    partlyCloudy: "Mabingu kifioti",
    rainy: "Chuva",
    thunderstorm: "Mpepo ya kinene",
    snow: "Neve",
    fog: "Mabingu ma kifioti",
    windy: "Mpepo",

    // Time
    lastUpdated: "Kubanga kya kima",
    updatedAt: "Kubanga mu",

    // Common UI
    loading: "Kusolola...",
    error: "Kima",
    success: "Muxima",
    cancel: "Kuteleka",
    save: "Kubikila",
    edit: "Kubanga",
    delete: "Kuteleka",
    add: "Kubikila",
    search: "Kusolola",
    filter: "Kusolola",
    sort: "Kubanga",
    next: "Kima",
    previous: "Kima kya Kwanza",
    close: "Kuteleka",
    open: "Kusolola",
    yes: "Eyo",
    no: "Kala",

    // Rest of existing translations...
    appTitle: "Kalenda ya Kilima kya Angola",
    appSubtitle: "Kubanga kilima mu ndenge ya muxima",
    welcome: "Tubakukuluhela mu kilima kyenu",
    welcomeDescription: "Kubanga, kutambula ni kubikila makolo ma kilima mu Angola.",
    calendar: "Kalenda",
    weather: "Tempo",
    crops: "Makolo",
    resources: "Makolo",
    pests: "Tuxinji",
    activities: "Makolo",
    cooperative: "Koperativa",
    agriculturalCalendar: "Kalenda ya Kilima",
    weatherForecast: "Kima kya Tempo",
    resourceManagement: "Kubanga Makolo",
    pestAlerts: "Alerta ya Tuxinji",
    cropPlanning: "Kubanga Makolo ma Kilima",
    activityLog: "Kubanga Makolo ma Kusonga",
    cooperativeFeatures: "Makolo ma Koperativa",
    calendarDescription: "Kubanga makolo ma kilima mu kizuwa kimosi-kimosi",
    weatherDescription: "Kukonga makolo ma tempo ma kimbanda yenu",
    resourcesDescription: "Kubanga masemente, fertilizante ni makolo ma kilima",
    pestsDescription: "Makolo moso ma tuxinji ni maladi ya makolo ma kilima mu Angola",
    communityDescription: "Kusolola ni kimbanda ya alima ya Angola. Kusolola makolo, makolo ni makolo.",
    accessTool: "Kusolola Makolo",
    viewInformation: "Kumona Makolo",
    participate: "Kusolola",
    contactUs: "Tusolole",
    addCrop: "Kubikila Kilima",
    addResource: "Kubikila Makolo",
    addActivity: "Kubikila Kusonga",
    provincesLabel: "Kimbanda za Kutelela",
    languagesLabel: "Ndinga za Kusolola",
    monthsLabel: "Miezi ya Kubanga",
    weatherLabel: "Makolo ma Tempo",
    startPlanningTitle: "Kubanga Kilima Kyenu Lelu",
    startPlanningDescription: "Kusolola ni alima ya Angola ya kusadisa kalenda ya kilima",
    viewCalendar: "Kumona Kalenda",
    companyName: "Kalenda ya Kilima",
    companyTagline: "kya Angola",
    companyDescription: "Kusadisa alima ya Angola ni makolo ma kilima ma muxima ni tempo ya agora.",
    allRightsReserved: "Makolo moso makutelela.",
    currentRegion: "Kimbanda ya Agora",
    climate: "Tempo",
    rainySeason: "Tempo ya Chuva",
    month: "Kizuwa",
    communityTitle: "Kimbanda ya Kilima",
    farmerGroups: "Makolo ma Alima",
    discussionForum: "Kusolola Makolo",
    resourceSharing: "Kusolola Makolo",
    aboutTitle: "Kima kya Kalenda ya Kilima kya Angola",
    aboutDescription:
      "Tukusolola alima ya Angola ni makolo ma teknologia, makolo ma muxima ni kimbanda ya kusadisa kilima mu Angola moso.",
    ourHistory: "Kima Kyetu",
    whatWeOffer: "Kima Tukusolola",
    mission: "Kima",
    excellence: "Muxima",
    selectLanguage: "Kusolola ndinga",
    selectRegion: "Kusolola kimbanda",
    language: "Ndinga",
    region: "Kimbanda",
    todaysActivities: "Makolo ma Lelu",
    upcomingTasks: "Makolo ma Kima",
    january: "Kizuwa kya Kwanza",
    february: "Kizuwa kya Kabiri",
    march: "Kizuwa kya Katatu",
    april: "Kizuwa kya Kana",
    may: "Kizuwa kya Katanu",
    june: "Kizuwa kya Kasamanu",
    july: "Kizuwa kya Kasambwadi",
    august: "Kizuwa kya Kanana",
    september: "Kizuwa kya Kivua",
    october: "Kizuwa kya Kumi",
    november: "Kizuwa kya Kumi na Mosi",
    december: "Kizuwa kya Kumi na Kabiri",
    cropGuides: "Makolo ma Kilima",
    cornGuide: "Makolo ma Milho",
    beanGuide: "Makolo ma Feijão",
    cassavaGuide: "Makolo ma Mandioca",
    sweetPotatoGuide: "Makolo ma Batata-doce",
    tomatoGuide: "Makolo ma Tomate",
    onionGuide: "Makolo ma Cebola",
    coffeeGuide: "Makolo ma Café",
    bananaGuide: "Makolo ma Banana",
    helpCenter: "Kimbanda ya Kusadisa",
    faq: "Makolo ma Kusolola",
    blog: "Makolo ma Kusonga",
    careers: "Makolo ma Kusonga",
    forum: "Kimbanda ya Kusolola",
    events: "Makolo ma Kima",
    team: "Kimbanda",
    tutorials: "Makolo ma Kusadisa",

    // Tools Page
    toolsPageTitle: "Makolo ma Kusonga",
    toolsPageDescription: "Kusolola makolo moso ya kusadisa kilima mu ndenge ya muxima.",

    // Information Page
    informationPageTitle: "Makolo ma Kilima",
    informationPageDescription: "Kusolola makolo moso ya kilima, tuxinji, maladi ni makolo ma kusadisa mu Angola.",

    // Community Page
    communityPageTitle: "Kimbanda ya Kilima",
    communityPageDescription: "Kusolola ni kimbanda ya alima ya Angola. Kusolola makolo, makolo ni makolo.",
    registeredFarmers: "Alima ya Kusolola",
    provincesCovered: "Kimbanda za Kutelela",
    activeDiscussions: "Makolo ma Kusolola",
    userSatisfaction: "Kutambula kwa Alima",
    ourCommunity: "Kimbanda Yetu",

    // About Page
    aboutPageTitle: "Kima kya Kalenda ya Kilima kya Angola",
    aboutPageDescription:
      "Tukusolola alima ya Angola ni makolo ma teknologia, makolo ma muxima ni kimbanda ya kusadisa kilima mu Angola moso.",
    ourStory: "Kima Kyetu",
    whatWeOffer: "Kima Tukusolola",
    getInTouch: "Tusolole",
    questionsOrSuggestions: "Kuli makolo kima tusolola? Tuli apa ya kusadisa!",
    email: "Email",
    phone: "Telefone",
    location: "Kimbanda",
    headquarters: "Kimbanda ya Kinene",
    workingHours: "Tempo ya Kusonga",
    mondayToFriday: "Kizuwa kya Kwanza teka Kizuwa kya Katanu",
    saturday: "Kizuwa kya Kasamanu",
    sunday: "Kizuwa kya Lumingu",
    closed: "Kufunga",

    // Download App Page
    downloadAppPageTitle: "Kukonga Kalenda ya Kilima",
    downloadAppPageDescription:
      "Kukwata makolo moso ma kilima mu kimoko kyenu. Kusolola ya Android, iOS ni kima kya web.",
    ratings: "makolo",
    downloads: "kukonga",
    free: "Mahala",
    mainFeatures: "Makolo ma Kinene",
    compatibility: "Kusolola",
    mobileDevices: "Makolo ma Mobile",
    tablets: "Tablets",
    computers: "Computadores",
    optimizedInterface: "Interface ya kusadisa ya tablets",
    responsiveWebApp: "Application ya web ya kusadisa",
    howToInstall: "Ndenge ya Kubikila",
    simpleInstructions: "Makolo ma kusadisa ya kubanga",
    download: "Kukonga",
    install: "Kubikila",
    start: "Kubanga",
    downloadStep: "Kubanga mu button ya kukonga ya kimbanda yenu",
    installStep: "Kubanga makolo ma kimbanda yenu ya kubikila",
    startStep: "Kubanga app ni kubanga kilima kyenu",
    needHelp: "Mukwa Kusadisa?",
    supportTeamReady: "Kimbanda yetu ya kusadisa ili apa ya kusadisa ni makolo moso ma kubikila ni kusadisa app.",
    contactSupport: "Kusolola Kusadisa",

    // Common UI Elements
    size: "Kinene",
    version: "Version",
    downloadFor: "Kukonga ya",
    organizedBy: "Kubanga mu",
    by: "Mu",
    readingTime: "ya kutanga",
  },
  umb: {
    // Navigation
    home: "Omukanda",
    tools: "Omakolo ma Okusonga",
    information: "Omakolo",
    community: "Okimbanda",
    about: "Okima",
    downloadApp: "Okukonga App",

    // Weather Page
    weatherInformation: "Omakolo ma Tempo",
    weatherPageDescription: "Okumona tempo ya agora ni okima kya tempo ya okusadisa ulima.",
    loadingWeatherData: "Okusolola omakolo ma tempo...",
    weatherDataUnavailable: "Omakolo ma Tempo Kala",
    tryAgain: "Okusolola Okima",
    noWeatherDataAvailable: "Kala omakolo ma tempo",

    // API Status
    demonstrationData: "Omakolo ma Okusonga",
    demonstrationDataDescription:
      "Agora tukusonga omakolo ma tempo ma okusonga. Okubikila API key ya OpenWeatherMap ya omakolo ma omuxima.",
    apiKeyNotConfigured: "API Key Kala Okubikila",
    apiKeyInstructions:
      "Ya omakolo ma tempo ma omuxima, okubikila API key ya OpenWeatherMap. Okumona WEATHER_API_SETUP.md ya omakolo ma okusadisa.",

    // Location
    weatherLocation: "Okimbanda ya Tempo",
    searchCityOrUseLocation: "Okusolola mbanza kima okimbanda yenu ya agora",
    searchLocation: "Okusolola okimbanda...",
    useCurrentLocation: "Okusonga Okimbanda ya Agora",
    detectingLocation: "Okusolola okimbanda...",
    locationNotFound: "Okimbanda kala okumona",

    // Current Weather
    currentWeather: "Tempo ya Agora",
    temperature: "Omuxima",
    feelsLike: "Okumona",
    humidity: "Omanji",
    windSpeed: "Ompepo",
    pressure: "Okubanga",
    visibility: "Okumona",
    sunrise: "Okuzuwa kya Ontangu",
    sunset: "Okuteleka kya Ontangu",

    // Forecast
    forecast: "Okima kya Tempo",
    forecastDays: "Okima kya Tempo ya Omisambu 7",
    today: "Lelu",
    precipitation: "Chuva",

    // Weather Alerts
    weatherAlerts: "Alerta ya Tempo",
    high: "Okinene",
    medium: "Okati",
    low: "Okifioti",
    from: "Okuma",
    until: "Oteka",

    // Agricultural Recommendations
    agriculturalRecommendations: "Omakolo ma Ulima",
    agriculturalRecommendationsDescription: "Okuma tempo ya agora",
    highTemperatureAlert: "Alerta ya Omuxima Okinene",
    increaseIrrigationFrequency: "Okubikila omanji mengi ni okusadisa omakolo ma ulima ma okifioti",
    lowHumidity: "Omanji Okifioti",
    monitorPlantsClosely: "Okumona omakolo ma ulima ni okubikila omanji mengi",
    strongWinds: "Ompepo Okinene",
    protectYoungPlants: "Okusadisa omakolo ma ulima ma okifioti ni okumona omakolo ma okusadisa",
    highPrecipitationExpected: "Chuva Okinene Okima",
    reduceIrrigation: "Okuteleka omanji ni okusadisa omakolo ma ulima ma kala okusadisa omanji mengi",
    favorableConditions: "Tempo ya Omuxima",
    currentWeatherConditionsAreFavorable: "Tempo ya agora ya omuxima ya omakolo ma ulima mengi",

    // Weather Conditions
    clear: "Ontangu ya omuxima",
    cloudy: "Omabingu",
    partlyCloudy: "Omabingu okifioti",
    rainy: "Chuva",
    thunderstorm: "Ompepo ya okinene",
    snow: "Neve",
    fog: "Omabingu ma okifioti",
    windy: "Ompepo",

    // Time
    lastUpdated: "Okubanga kya okima",
    updatedAt: "Okubanga mu",

    // Common UI
    loading: "Okusolola...",
    error: "Okima",
    success: "Omuxima",
    cancel: "Okuteleka",
    save: "Okubikila",
    edit: "Okubanga",
    delete: "Okuteleka",
    add: "Okubikila",
    search: "Okusolola",
    filter: "Okusolola",
    sort: "Okubanga",
    next: "Okima",
    previous: "Okima kya Kwanza",
    close: "Okuteleka",
    open: "Okusolola",
    yes: "Eyo",
    no: "Kala",

    // Rest of existing translations...
    appTitle: "Kalenda ya Ulima wa Angola",
    appSubtitle: "Okubanga ulima mu ndenge ya muxima",
    welcome: "Tubakukuluhela mu ulima wenu",
    welcomeDescription: "Okubanga, okutambula ni okubikila makolo ma ulima mu Angola.",
    calendar: "Kalenda",
    weather: "Tempo",
    crops: "Omakolo",
    resources: "Omakolo",
    pests: "Otuxinji",
    activities: "Omakolo",
    cooperative: "Okoperativa",
    agriculturalCalendar: "Kalenda ya Ulima",
    weatherForecast: "Okima kya Tempo",
    resourceManagement: "Okubanga Omakolo",
    pestAlerts: "Alerta ya Otuxinji",
    cropPlanning: "Okubanga Omakolo ma Ulima",
    activityLog: "Okubanga Omakolo ma Okusonga",
    cooperativeFeatures: "Omakolo ma Okoperativa",
    calendarDescription: "Okubanga makolo ma ulima mu kizuwa kimosi-kimosi",
    weatherDescription: "Okukonga makolo ma tempo ma kimbanda yenu",
    resourcesDescription: "Okubanga masemente, fertilizante ni makolo ma ulima",
    pestsDescription: "Omakolo moso ma otuxinji ni maladi ya makolo ma ulima mu Angola",
    communityDescription: "Okusolola ni kimbanda ya alima ya Angola. Okusolola makolo, makolo ni makolo.",
    accessTool: "Okusolola Omakolo",
    viewInformation: "Okumona Omakolo",
    participate: "Okusolola",
    contactUs: "Tusolole",
    addCrop: "Okubikila Ulima",
    addResource: "Okubikila Omakolo",
    addActivity: "Okubikila Okusonga",
    provincesLabel: "Okimbanda za Okutelela",
    languagesLabel: "Ondinga za Okusolola",
    monthsLabel: "Omiezi ya Okubanga",
    weatherLabel: "Omakolo ma Tempo",
    startPlanningTitle: "Okubanga Ulima Wenu Lelu",
    startPlanningDescription: "Okusolola ni alima ya Angola ya okusadisa kalenda ya ulima",
    viewCalendar: "Okumona Kalenda",
    companyName: "Kalenda ya Ulima",
    companyTagline: "wa Angola",
    companyDescription: "Okusadisa alima ya Angola ni makolo ma ulima ma muxima ni tempo ya agora.",
    allRightsReserved: "Omakolo moso makutelela.",
    currentRegion: "Okimbanda ya Agora",
    climate: "Tempo",
    rainySeason: "Tempo ya Chuva",
    month: "Okizuwa",
    communityTitle: "Okimbanda ya Ulima",
    farmerGroups: "Omakolo ma Alima",
    discussionForum: "Okusolola Omakolo",
    resourceSharing: "Okusolola Omakolo",
    aboutTitle: "Okima kya Kalenda ya Ulima wa Angola",
    aboutDescription:
      "Tukusolola alima ya Angola ni makolo ma teknologia, makolo ma muxima ni kimbanda ya okusadisa ulima mu Angola moso.",
    ourHistory: "Okima Kyetu",
    whatWeOffer: "Okima Tukusolola",
    mission: "Okima",
    excellence: "Omuxima",
    selectLanguage: "Okusolola ndinga",
    selectRegion: "Okusolola kimbanda",
    language: "Ondinga",
    region: "Okimbanda",
    todaysActivities: "Omakolo ma Lelu",
    upcomingTasks: "Omakolo ma Okima",
    january: "Okizuwa kya Kwanza",
    february: "Okizuwa kya Kabiri",
    march: "Okizuwa kya Katatu",
    april: "Okizuwa kya Kana",
    may: "Okizuwa kya Katanu",
    june: "Okizuwa kya Kasamanu",
    july: "Okizuwa kya Kasambwadi",
    august: "Okizuwa kya Kanana",
    september: "Okizuwa kya Kivua",
    october: "Okizuwa kya Kumi",
    november: "Okizuwa kya Kumi na Mosi",
    december: "Okizuwa kya Kumi na Kabiri",
    cropGuides: "Omakolo ma Ulima",
    cornGuide: "Omakolo ma Milho",
    beanGuide: "Omakolo ma Feijão",
    cassavaGuide: "Omakolo ma Mandioca",
    sweetPotatoGuide: "Omakolo ma Batata-doce",
    tomatoGuide: "Omakolo ma Tomate",
    onionGuide: "Omakolo ma Cebola",
    coffeeGuide: "Omakolo ma Café",
    bananaGuide: "Omakolo ma Banana",
    helpCenter: "Okimbanda ya Okusadisa",
    faq: "Omakolo ma Okusolola",
    blog: "Omakolo ma Okusonga",
    careers: "Omakolo ma Okusonga",
    forum: "Okimbanda ya Okusolola",
    events: "Omakolo ma Okima",
    team: "Okimbanda",
    tutorials: "Omakolo ma Okusadisa",

    // Tools Page
    toolsPageTitle: "Omakolo ma Okusonga",
    toolsPageDescription: "Okusolola makolo moso ya okusadisa ulima mu ndenge ya muxima.",

    // Information Page
    informationPageTitle: "Omakolo ma Ulima",
    informationPageDescription: "Okusolola makolo moso ya ulima, otuxinji, maladi ni makolo ma okusadisa mu Angola.",

    // Community Page
    communityPageTitle: "Okimbanda ya Ulima",
    communityPageDescription: "Okusolola ni kimbanda ya alima ya Angola. Okusolola makolo, makolo ni makolo.",
    registeredFarmers: "Alima ya Okusolola",
    provincesCovered: "Okimbanda za Okutelela",
    activeDiscussions: "Omakolo ma Okusolola",
    userSatisfaction: "Okutambula kwa Alima",
    ourCommunity: "Okimbanda Yetu",

    // About Page
    aboutPageTitle: "Okima kya Kalenda ya Ulima wa Angola",
    aboutPageDescription:
      "Tukusolola alima ya Angola ni makolo ma teknologia, makolo ma muxima ni kimbanda ya okusadisa ulima mu Angola moso.",
    ourStory: "Okima Kyetu",
    whatWeOffer: "Okima Tukusolola",
    getInTouch: "Tusolole",
    questionsOrSuggestions: "Kuli makolo kima tusolola? Tuli apa ya okusadisa!",
    email: "Email",
    phone: "Telefone",
    location: "Okimbanda",
    headquarters: "Okimbanda ya Kinene",
    workingHours: "Tempo ya Okusonga",
    mondayToFriday: "Kizuwa kya Kwanza teka Kizuwa kya Katanu",
    saturday: "Kizuwa kya Kasamanu",
    sunday: "Kizuwa kya Lumingu",
    closed: "Okufunga",

    // Download App Page
    downloadAppPageTitle: "Okukonga Kalenda ya Ulima",
    downloadAppPageDescription:
      "Okukwata makolo moso ma ulima mu kimoko kyenu. Okusolola ya Android, iOS ni okima kya web.",
    ratings: "makolo",
    downloads: "okukonga",
    free: "Mahala",
    mainFeatures: "Omakolo ma Kinene",
    compatibility: "Okusolola",
    mobileDevices: "Omakolo ma Mobile",
    tablets: "Tablets",
    computers: "Computadores",
    optimizedInterface: "Interface ya okusadisa ya tablets",
    responsiveWebApp: "Application ya web ya okusadisa",
    howToInstall: "Ndenge ya Okubikila",
    simpleInstructions: "Omakolo ma okusadisa ya okubanga",
    download: "Okukonga",
    install: "Okubikila",
    start: "Okubanga",
    downloadStep: "Okubanga mu button ya okukonga ya kimbanda yenu",
    installStep: "Okubanga makolo ma kimbanda yenu ya okubikila",
    startStep: "Okubanga app ni okubanga ulima wenu",
    needHelp: "Mukwa Okusadisa?",
    supportTeamReady: "Kimbanda yetu ya okusadisa ili apa ya okusadisa ni makolo moso ma okubikila ni okusadisa app.",
    contactSupport: "Okusolola Okusadisa",

    // Common UI Elements
    size: "Kinene",
    version: "Version",
    downloadFor: "Okukonga ya",
    organizedBy: "Kubanga mu",
    by: "Mu",
    readingTime: "ya kutanga",
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
      document.documentElement.lang = lang

      // Dispatch custom event for any components that need to react to language changes
      window.dispatchEvent(new CustomEvent("languageChanged", { detail: { language: lang } }))
    }
  }

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
