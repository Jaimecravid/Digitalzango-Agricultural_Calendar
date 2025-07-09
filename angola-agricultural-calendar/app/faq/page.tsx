"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import { RegionProvider } from "../contexts/region-context"
import { useLanguage } from "../contexts/language-context"
import Header from "../components/header"

function FAQContent() {
  const { t } = useLanguage()

  // Define FAQ structure as data, not translations
  const faqCategories = [
    {
      title: t("faq.categories.general.title"),
      questions: [
        {
          question: t("faq.categories.general.questions.whatIs.question"),
          answer: t("faq.categories.general.questions.whatIs.answer")
        },
        {
          question: t("faq.categories.general.questions.howToUse.question"),
          answer: t("faq.categories.general.questions.howToUse.answer")
        }
      ]
    },
    {
      title: t("faq.categories.crops.title"),
      questions: [
        {
          question: t("faq.categories.crops.questions.bestTime.question"),
          answer: t("faq.categories.crops.questions.bestTime.answer")
        },
        {
          question: t("faq.categories.crops.questions.soilPrep.question"),
          answer: t("faq.categories.crops.questions.soilPrep.answer")
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t("faq.title")}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("faq.subtitle")}
          </p>
        </div>

        {/* FAQ Categories */}
        {faqCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.title}</h2>
            <div className="space-y-4">
              {category.questions.map((faq, faqIndex) => (
                <Card key={faqIndex} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-4">{t("faq.notFound")}</h3>
          <p className="text-gray-600 mb-6">{t("faq.contactMessage")}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQPage() {
  return (
    <RegionProvider>
      <FAQContent />
    </RegionProvider>
  )
}
