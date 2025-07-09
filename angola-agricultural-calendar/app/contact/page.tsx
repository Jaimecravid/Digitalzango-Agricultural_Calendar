"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RegionProvider } from "../contexts/region-context"
import Header from "../components/header"

function ContactContent() {


  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contacte-nos</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entre em contacto connosco. Estamos aqui para ajudar com qualquer questÃ£o sobre o CalendÃ¡rio AgrÃ­cola para
            Angola.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Envie-nos uma Mensagem</CardTitle>
              <CardDescription>Preencha o formulÃ¡rio abaixo e responderemos o mais breve possÃ­vel</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome
                  </label>
                  <Input id="firstName" placeholder="Seu nome" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Apelido
                  </label>
                  <Input id="lastName" placeholder="Seu apelido" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <Input id="email" type="email" placeholder="seu.email@exemplo.com" />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone (opcional)
                </label>
                <Input id="phone" type="tel" placeholder="+244 923 456 789" />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Assunto
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccione o assunto" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="support">Suporte TÃ©cnico</SelectItem>
                    <SelectItem value="feedback">Feedback</SelectItem>
                    <SelectItem value="partnership">Parcerias</SelectItem>
                    <SelectItem value="general">QuestÃ£o Geral</SelectItem>
                    <SelectItem value="bug">Reportar Problema</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <Textarea id="message" placeholder="Descreva a sua questÃ£o ou comentÃ¡rio..." rows={5} />
              </div>

              <Button className="w-full bg-green-600 hover:bg-green-700">
                <Send className="h-4 w-4 mr-2" />
                Enviar Mensagem
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle>InformaÃ§Ãµes de Contacto</CardTitle>
                <CardDescription>Outras formas de entrar em contacto connosco</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">support@calendarioagricola.ao</p>
                    <p className="text-sm text-gray-500">Resposta em atÃ© 24 horas</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Telefone</h3>
                    <p className="text-gray-600">+244 923 456 789</p>
                    <p className="text-sm text-gray-500">Segunda a Sexta, 8h-17h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">LocalizaÃ§Ã£o</h3>
                    <p className="text-gray-600">Luanda, Angola</p>
                    <p className="text-sm text-gray-500">Sede principal</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">HorÃ¡rio de Funcionamento</h3>
                    <p className="text-gray-600">Segunda a Sexta: 8h-17h</p>
                    <p className="text-gray-600">SÃ¡bado: 8h-12h</p>
                    <p className="text-gray-600">Domingo: Fechado</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle>Links Ãšteis</CardTitle>
                <CardDescription>Recursos que podem ajudar a resolver a sua questÃ£o</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/help" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">ðŸ“š</span>
                    <div>
                      <h4 className="font-medium">Centro de Ajuda</h4>
                      <p className="text-sm text-gray-600">Artigos e guias detalhados</p>
                    </div>
                  </div>
                </Link>

                <Link href="/faq" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">â“</span>
                    <div>
                      <h4 className="font-medium">Perguntas Frequentes</h4>
                      <p className="text-sm text-gray-600">Respostas Ã s perguntas mais comuns</p>
                    </div>
                  </div>
                </Link>

                <Link href="/forum" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">ðŸ’¬</span>
                    <div>
                      <h4 className="font-medium">Fórum</h4>
                      <p className="text-sm text-gray-600">DiscussÃµes com outros agricultores</p>
                    </div>
                  </div>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ContactPage() {
  return <RegionProvider>
        <ContactContent />
      </RegionProvider>
}

