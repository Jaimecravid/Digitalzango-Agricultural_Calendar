"use client"

import Link from "next/link"
import { MapPin, Clock, Users, Briefcase, Heart, Target, Award } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { LanguageProvider, useLanguage } from "../contexts/language-context"
import { RegionProvider } from "../contexts/region-context"
import Header from "../components/header"

function CareersContent() {
  const { t } = useLanguage()

  const jobOpenings = [
    {
      id: 1,
      title: "Engenheiro Agrónomo",
      department: "Agricultura",
      location: "Luanda",
      type: "Tempo Integral",
      level: "Sénior",
      description:
        "Procuramos um engenheiro agrónomo experiente para liderar o desenvolvimento de conteúdo técnico e apoiar agricultores em todo o país.",
      requirements: [
        "Licenciatura em Engenharia Agronómica",
        "Mínimo 5 anos de experiência",
        "Conhecimento das condições agrícolas de Angola",
        "Fluência em Português e Inglês",
      ],
    },
    {
      id: 2,
      title: "Desenvolvedor Frontend",
      department: "Tecnologia",
      location: "Luanda / Remoto",
      type: "Tempo Integral",
      level: "Júnior",
      description:
        "Junte-se à nossa equipa de desenvolvimento para criar interfaces intuitivas e responsivas para agricultores angolanos.",
      requirements: [
        "Experiência com React e TypeScript",
        "Conhecimento de Tailwind CSS",
        "Portfolio de projectos web",
        "Paixão por UX/UI",
      ],
    },
    {
      id: 3,
      title: "Especialista em Meteorologia",
      department: "Dados",
      location: "Benguela",
      type: "Tempo Integral",
      level: "Sénior",
      description:
        "Responsável por analisar dados meteorológicos e desenvolver previsões precisas para apoio à agricultura.",
      requirements: [
        "Licenciatura em Meteorologia ou área relacionada",
        "Experiência com análise de dados meteorológicos",
        "Conhecimento de Python/R",
        "Experiência em agricultura é uma vantagem",
      ],
    },
    {
      id: 4,
      title: "Coordenador de Comunidade",
      department: "Comunidade",
      location: "Huambo",
      type: "Tempo Integral",
      level: "Médio",
      description:
        "Gerir e expandir a nossa comunidade de agricultores, organizando eventos e facilitando a partilha de conhecimentos.",
      requirements: [
        "Experiência em gestão de comunidades",
        "Excelentes habilidades de comunicação",
        "Conhecimento do sector agrícola",
        "Capacidade de viajar dentro da província",
      ],
    },
  ]

  const benefits = [
    {
      icon: Heart,
      title: "Saúde e Bem-estar",
      description: "Seguro de saúde completo para si e família",
    },
    {
      icon: Target,
      title: "Desenvolvimento Profissional",
      description: "Formação contínua e oportunidades de crescimento",
    },
    {
      icon: Users,
      title: "Ambiente Colaborativo",
      description: "Equipa diversa e inclusiva com foco no impacto social",
    },
    {
      icon: Award,
      title: "Reconhecimento",
      description: "Programas de reconhecimento e bonificações por desempenho",
    },
  ]

  const values = [
    {
      title: "Impacto Social",
      description: "Trabalhamos para melhorar a vida dos agricultores angolanos",
    },
    {
      title: "Inovação",
      description: "Usamos tecnologia para resolver problemas reais",
    },
    {
      title: "Colaboração",
      description: "Acreditamos no poder do trabalho em equipa",
    },
    {
      title: "Sustentabilidade",
      description: "Promovemos práticas agrícolas sustentáveis",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t("careers")}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Junte-se à nossa missão de transformar a agricultura em Angola. Construa uma carreira com propósito e
            impacto real.
          </p>
        </div>

        {/* Company Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Os Nossos Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Benefícios e Vantagens</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Job Openings */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Oportunidades Actuais</h2>
          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-green-100 text-green-800">{job.department}</Badge>
                        <Badge variant="outline">{job.level}</Badge>
                        <Badge variant="secondary">{job.type}</Badge>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {job.type}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{job.description}</p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Requisitos:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="text-sm">
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="bg-green-600 hover:bg-green-700">
                      <Briefcase className="h-4 w-4 mr-2" />
                      Candidatar-se
                    </Button>
                    <Button variant="outline">Saber Mais</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <Card className="bg-green-50 border-green-200">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Não Encontrou a Posição Ideal?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Estamos sempre à procura de talentos excepcionais. Envie-nos o seu CV e entraremos em contacto quando
              surgir uma oportunidade adequada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-green-600 hover:bg-green-700">Enviar CV Espontâneo</Button>
              <Link href="/contact">
                <Button variant="outline">{t("contactUs")}</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default function CareersPage() {
  return (
    <LanguageProvider>
      <RegionProvider>
        <CareersContent />
      </RegionProvider>
    </LanguageProvider>
  )
}
