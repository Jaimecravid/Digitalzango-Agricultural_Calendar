"use client"

import Link from "next/link"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"

import { RegionProvider } from "../contexts/region-context"
import Header from "../components/header"

function FAQContent() {
  
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqCategories = [
    {
      title: "Geral",
      questions: [
        {
          question: "O que Ã© o CalendÃ¡rio AgrÃ­cola para Angola?",
          answer:
            "Ã‰ uma plataforma digital que ajuda agricultores angolanos a planear as suas actividades agrÃ­colas com base nas condiÃ§Ãµes climÃ¡ticas e prÃ¡ticas locais de cada regiÃ£o de Angola.",
        },
        {
          question: "O serviÃ§o Ã© gratuito?",
          answer:
            "Sim, o CalendÃ¡rio AgrÃ­cola para Angola Ã© completamente gratuito para todos os agricultores. Queremos apoiar o desenvolvimento da agricultura em Angola.",
        },
        {
          question: "Preciso de criar uma conta?",
          answer:
            "NÃ£o Ã© obrigatÃ³rio criar uma conta para usar as funcionalidades bÃ¡sicas, mas recomendamos criar uma para guardar as suas preferÃªncias e dados.",
        },
        {
          question: "Em que idiomas estÃ¡ disponÃ­vel?",
          answer:
            "A plataforma estÃ¡ disponÃ­vel em PortuguÃªs, InglÃªs, Kimbundo e Umbundo, cobrindo as principais lÃ­nguas faladas em Angola.",
        },
      ],
    },
    {
      title: "Funcionalidades",
      questions: [
        {
          question: "Como funciona o calendÃ¡rio agrÃ­cola?",
          answer:
            "O calendÃ¡rio mostra as melhores Ã©pocas para plantar, irrigar, fertilizar e colher diferentes culturas, baseado na sua regiÃ£o e nas condiÃ§Ãµes climÃ¡ticas locais.",
        },
        {
          question: "As previsÃµes meteorolÃ³gicas sÃ£o precisas?",
          answer:
            "Usamos dados de serviÃ§os meteorolÃ³gicos confiÃ¡veis, mas recomendamos sempre consultar mÃºltiplas fontes e observar as condiÃ§Ãµes locais.",
        },
        {
          question: "Posso adicionar as minhas prÃ³prias culturas?",
          answer:
            "Sim, pode personalizar o seu plano agrÃ­cola adicionando as culturas que cultiva e as suas variedades especÃ­ficas.",
        },
        {
          question: "Como funciona a gestÃ£o de recursos?",
          answer:
            "Pode registar os seus recursos (sementes, fertilizantes, equipamentos) e receber alertas quando estiverem a acabar ou prÃ³ximos do prazo de validade.",
        },
      ],
    },
    {
      title: "Suporte TÃ©cnico",
      questions: [
        {
          question: "A aplicaÃ§Ã£o funciona offline?",
          answer:
            "Algumas funcionalidades funcionam offline apÃ³s o primeiro carregamento, mas recomendamos ligaÃ§Ã£o Ã  internet para dados meteorolÃ³gicos actualizados.",
        },
        {
          question: "Posso usar no meu telemÃ³vel?",
          answer:
            "Sim, a plataforma Ã© totalmente responsiva e funciona bem em telemÃ³veis, tablets e computadores. TambÃ©m temos aplicaÃ§Ãµes mÃ³veis disponÃ­veis.",
        },
        {
          question: "Como reportar um problema?",
          answer:
            "Pode contactar-nos atravÃ©s do email support@calendarioagricola.ao ou usar o formulÃ¡rio de contacto no site.",
        },
        {
          question: "Com que frequÃªncia sÃ£o actualizados os dados?",
          answer:
            "Os dados meteorolÃ³gicos sÃ£o actualizados vÃ¡rias vezes por dia. As informaÃ§Ãµes sobre culturas e pragas sÃ£o actualizadas regularmente pela nossa equipa.",
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Perguntas Frequentes</h1>
          <p className="text-xl text-gray-600">
            Respostas Ã s perguntas mais frequentes sobre o CalendÃ¡rio AgrÃ­cola para Angola
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">NÃ£o encontrou a resposta?</h2>
          <p className="text-gray-600 mb-6">A nossa equipa estÃ¡ pronta para ajudar com qualquer questÃ£o adicional.</p>
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
  return <RegionProvider>
        <FAQContent />
      </RegionProvider>
}

