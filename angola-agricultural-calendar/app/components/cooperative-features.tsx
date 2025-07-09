"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, MessageSquare, Share2, Calendar, Wrench } from "lucide-react";

const CooperativeFeatures = () => {
  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Funcionalidades Cooperativas</h2>
          <p className="text-gray-600">Colabore com outros agricultores da sua região</p>
        </div>
        <Badge variant="secondary" className="flex items-center gap-2">
          <Users className="h-4 w-4" />
          Novo
        </Badge>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Communication Feature */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-blue-600" />
              Comunicação
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Conecte-se com agricultores da sua região para trocar experiências e conhecimentos.
            </p>
            <Button variant="outline" className="w-full">
              Iniciar Conversa
            </Button>
          </CardContent>
        </Card>

        {/* Resource Sharing Feature */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Share2 className="h-5 w-5 text-green-600" />
              Partilha de Recursos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Compartilhe equipamentos, sementes e conhecimentos com outros produtores.
            </p>
            <Button variant="outline" className="w-full">
              Ver Recursos
            </Button>
          </CardContent>
        </Card>

        {/* Joint Planning Feature */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-purple-600" />
              Planejamento Conjunto
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Coordene atividades agrícolas com vizinhos para maximizar a eficiência.
            </p>
            <Button variant="outline" className="w-full">
              Criar Plano
            </Button>
          </CardContent>
        </Card>

        {/* Technical Support Feature */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wrench className="h-5 w-5 text-orange-600" />
              Suporte Técnico
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Acesse especialistas agrícolas e obtenha ajuda técnica quando necessário.
            </p>
            <Button variant="outline" className="w-full">
              Solicitar Ajuda
            </Button>
          </CardContent>
        </Card>

        {/* Community Events Feature */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-red-600" />
              Eventos Comunitários
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Participe em eventos, workshops e feiras agrícolas da sua região.
            </p>
            <Button variant="outline" className="w-full">
              Ver Eventos
            </Button>
          </CardContent>
        </Card>

        {/* Knowledge Base Feature */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-teal-600" />
              Base de Conhecimento
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Acesse artigos, guias e melhores práticas compartilhadas pela comunidade.
            </p>
            <Button variant="outline" className="w-full">
              Explorar
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Community Stats */}
      <Card>
        <CardHeader>
          <CardTitle>Estatísticas da Comunidade</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600">1,250</div>
              <div className="text-sm text-gray-600">Agricultores Ativos</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">340</div>
              <div className="text-sm text-gray-600">Recursos Partilhados</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">89</div>
              <div className="text-sm text-gray-600">Projetos Conjuntos</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600">156</div>
              <div className="text-sm text-gray-600">Consultas Técnicas</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CooperativeFeatures;
