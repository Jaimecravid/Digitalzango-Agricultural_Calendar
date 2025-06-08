"use client"

import Link from "next/link"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import { LanguageProvider, useLanguage } from "../contexts/language-context"
import { RegionProvider } from "../contexts/region-context"
import Header from "../components/header"

function FAQContent() {
  const { t } = useLanguage()
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqCategories = [
    {
      title: "Geral",
      questions: [
        {
          question: "O que é o Calendário Agrícola para Angola?",
          answer:
            "É uma plataforma digital que ajuda agricultores angolanos a planear as suas actividades agrícolas com base nas condições climáticas e práticas locais de cada região de Angola.",
        },
        {
          question: "O serviço é gratuito?",
          answer:
            "Sim, o Calendário Agrícola para Angola é completamente gratuito para todos os agricultores. Queremos apoiar o desenvolvimento da agricultura em Angola.",
        },
        {
          question: "Preciso de criar uma conta?",
          answer:
            "Não é obrigatório criar uma conta para usar as funcionalidades básicas, mas recomendamos criar uma para guardar as suas preferências e dados.",
        },
        {
          question: "Em que idiomas está disponível?",
          answer:
            "A plataforma está disponível em Português, Inglês, Kimbundo e Umbundo, cobrindo as principais línguas faladas em Angola.",
        },
      ],
    },
    {
      title: "Funcionalidades",
      questions: [
        {
          question: "Como funciona o calendário agrícola?",
          answer:
            "O calendário mostra as melhores épocas para plantar, irrigar, fertilizar e colher diferentes culturas, baseado na sua região e nas condições climáticas locais.",
        },
        {
          question: "As previsões meteorológicas são precisas?",
          answer:
            "Usamos dados de serviços meteorológicos confiáveis, mas recomendamos sempre consultar múltiplas fontes e observar as condições locais.",
        },
        {
          question: "Posso adicionar as minhas próprias culturas?",
          answer:
            "Sim, pode personalizar o seu plano agrícola adicionando as culturas que cultiva e as suas variedades específicas.",
        },
        {
          question: "Como funciona a gestão de recursos?",
          answer:
            "Pode registar os seus recursos (sementes, fertilizantes, equipamentos) e receber alertas quando estiverem a acabar ou próximos do prazo de validade.",
        },
      ],
    },
    {
      title: "Suporte Técnico",
      questions: [
        {
          question: "A aplicação funciona offline?",
          answer:
            "Algumas funcionalidades funcionam offline após o primeiro carregamento, mas recomendamos ligação à internet para dados meteorológicos actualizados.",
        },
        {
          question: "Posso usar no meu telemóvel?",
          answer:
            "Sim, a plataforma é totalmente responsiva e funciona bem em telemóveis, tablets e computadores. Também temos aplicações móveis disponíveis.",
        },
        {
          question: "Como reportar um problema?",
          answer:
            "Pode contactar-nos através do email support@calendarioagricola.ao ou usar o formulário de contacto no site.",
        },
        {
          question: "Com que frequência são actualizados os dados?",
          answer:
            "Os dados meteorológicos são actualizados várias vezes por dia. As informações sobre culturas e pragas são actualizadas regularmente pela nossa equipa.",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t("faq")}</h1>
          <p className="text-xl text-gray-600">
            Respostas às perguntas mais frequentes sobre o Calendário Agrícola para Angola
          </p>
        </div>

        {/* FAQ Categories */}
        {faqCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.title}</h2>
            <div className="space-y-4">
              {category.questions.map((item, itemIndex) => {
                const globalIndex = categoryIndex * 100 + itemIndex
                const isOpen = openItems.includes(globalIndex)

                return (
                  <Card key={itemIndex} className="border border-gray-200">
                    <CardHeader
                      className="cursor-pointer hover:bg-gray-50 transition-colors"
                      onClick={() => toggleItem(globalIndex)}
                    >
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg text-left">{item.question}</CardTitle>
                        {isOpen ? (
                          <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                        )}
                      </div>
                    </CardHeader>
                    {isOpen && (
                      <CardContent className="pt-0">
                        <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                      </CardContent>
                    )}
                  </Card>
                )
              })}
            </div>
          </div>
        ))}

        {/* Contact Section */}
        <div className="mt-12 text-center bg-green-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Não encontrou a resposta?</h2>
          <p className="text-gray-600 mb-6">A nossa equipa está pronta para ajudar com qualquer questão adicional.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
                {t("contactUs")}
              </button>
            </Link>
            <Link href="/help">
              <button className="border border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-md font-medium transition-colors">
                {t("helpCenter")}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function FAQPage() {
  return (
    <LanguageProvider>
      <RegionProvider>
        <FAQContent />
      </RegionProvider>
    </LanguageProvider>
  )
}
