"use client";

import Header from "../../components/header"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, ArrowLeft, MapPin } from "lucide-react"

function LagarteContent() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-green-600">
              Início
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/pragas" className="text-gray-500 hover:text-green-600">
              Pragas & Doenças
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">Lagarta-do-cartucho</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <Link href="/pragas" className="mr-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <div>
              <div className="flex items-center mb-2">
                <span className="text-4xl mr-4">🐛</span>
                <Badge className="bg-red-800 text-white">{t("highThreat")}</Badge>
              </div>
              <h1 className="text-3xl font-bold mb-2">{t("fallArmyworm")}</h1>
              <p className="text-red-100 italic">Spodoptera frugiperda</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="h-5 w-5 text-red-600 mr-2" />
                  {t("overview")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{t("fallArmywormDescription")}</p>
                <p className="text-gray-700">{t("fallArmywormImpact")}</p>
              </CardContent>
            </Card>

            {/* Identification */}
            <Card>
              <CardHeader>
                <CardTitle>{t("identification")}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{t("larvae")}:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>{t("fallArmywormLarvae1")}</li>
                      <li>{t("fallArmywormLarvae2")}</li>
                      <li>{t("fallArmywormLarvae3")}</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{t("adults")}:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>{t("fallArmywormAdults1")}</li>
                      <li>{t("fallArmywormAdults2")}</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{t("damage")}:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>{t("fallArmywormDamage1")}</li>
                      <li>{t("fallArmywormDamage2")}</li>
                      <li>{t("fallArmywormDamage3")}</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Control Methods */}
            <Card>
              <CardHeader>
                <CardTitle>{t("controlMethods")}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-3 flex items-center">🌱 {t("biologicalControl")}</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>{t("fallArmywormBio1")}</li>
                      <li>{t("fallArmywormBio2")}</li>
                      <li>{t("fallArmywormBio3")}</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-700 mb-3 flex items-center">🛡️ {t("culturalControl")}</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>{t("fallArmywormCultural1")}</li>
                      <li>{t("fallArmywormCultural2")}</li>
                      <li>{t("fallArmywormCultural3")}</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-700 mb-3 flex items-center">🧪 {t("chemicalControl")}</h4>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-3">
                      <p className="text-yellow-800 text-sm">
                        <strong>{t("warning")}:</strong> {t("chemicalWarning")}
                      </p>
                    </div>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>{t("fallArmywormChemical1")}</li>
                      <li>{t("fallArmywormChemical2")}</li>
                      <li>{t("fallArmywormChemical3")}</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Facts */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t("quickFacts")}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">{t("threatLevel")}:</span>
                  <Badge className="bg-red-100 text-red-800">{t("high")}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">{t("affectedCrops")}:</span>
                  <span className="text-sm font-medium">
                    {t("corn")}, {t("sorghum")}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">{t("activeSeason")}:</span>
                  <span className="text-sm font-medium">{t("rainySeasonShort")}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">{t("lifespan")}:</span>
                  <span className="text-sm font-medium">30-40 {t("days")}</span>
                </div>
              </CardContent>
            </Card>

            {/* Regional Alert */}
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-lg text-red-800 flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  {t("regionalAlert")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-700 text-sm mb-3">{t("fallArmywormAlert")}</p>
                <Link
                  href="/contact"
                  className="bg-red-600 text-white px-4 py-2 rounded-md text-sm hover:bg-red-700 transition-colors inline-block"
                >
                  {t("reportSighting")}
                </Link>
              </CardContent>
            </Card>

            {/* Related Links */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t("relatedLinks")}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/guias/milho" className="block text-green-600 hover:text-green-700 text-sm">
                  🌽 {t("cornGuide")}
                </Link>
                <Link href="/pragas/mosca-branca" className="block text-green-600 hover:text-green-700 text-sm">
                  🦟 {t("whitefly")}
                </Link>
                <Link href="/ferramentas" className="block text-green-600 hover:text-green-700 text-sm">
                  🔧 {t("pestMonitoringTools")}
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function LagarteDoCartuchoPage() {
  return <LagarteContent />
}
