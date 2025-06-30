'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Calendar as CalendarIcon, Cloud, Sprout } from 'lucide-react';
import { PestAlertCard } from '@/components/ui/pest-alert-card';
import { angolaRegions, cropCalendar, currentPestAlerts } from '@/lib/calendar-data';
import { PestAlert, CalendarEvent } from '@/types/calendar';
import dynamic from 'next/dynamic';

// Dynamically import the heavy calendar component to improve initial load time
const BigCalendar = dynamic(() => import('react-big-calendar').then(mod => ({ default: mod.Calendar })), {
  loading: () => <div className="h-96 flex items-center justify-center">Carregando calendário...</div>,
  ssr: false
});

import { dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import 'react-big-calendar/lib/css/react-big-calendar.css';


const locales = {
  'pt-BR': ptBR,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export default function CalendarioPage() {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [activeAlerts, setActiveAlerts] = useState<PestAlert[]>(currentPestAlerts);
  const [selectedRegion, setSelectedRegion] = useState('luanda');

  // Generate sample calendar events
  useEffect(() => {
    const sampleEvents: CalendarEvent[] = [
      {
        id: 'event-1',
        title: 'Plantio de Milho',
        date: new Date(2025, 6, 5), // Note: Month is 0-indexed, so 6 is July
        type: 'plantio',
        description: 'Início do plantio de milho na época seca',
        completed: false,
        priority: 'alta'
      },
      {
        id: 'event-2',
        title: 'Colheita de Feijão',
        date: new Date(2025, 6, 15),
        type: 'colheita',
        description: 'Colheita prevista para feijão plantado em abril',
        completed: false,
        priority: 'alta'
      },
      {
        id: 'event-3',
        title: 'Tratamento Preventivo',
        date: new Date(2025, 6, 10),
        type: 'tratamento',
        description: 'Aplicação preventiva contra pragas',
        completed: false,
        priority: 'media'
      }
    ];
    setEvents(sampleEvents);
  }, []);

  const handleAlertResolved = (alertId: string) => {
    setActiveAlerts(prev => prev.map(alert =>
      alert.id === alertId ? { ...alert, isActive: false } : alert
    ));
  };

  const seasonInfo = useMemo(() => {
    const currentMonth = new Date().getMonth() + 1; // 1-12
    const region = angolaRegions.find(r => r.id === selectedRegion);

    if (!region) return { season: 'desconhecida', description: '' };

    const isRainySeason = currentMonth >= region.rainySeasonStart || currentMonth <= region.rainySeasonEnd;

    return {
      season: isRainySeason ? 'chuvas' : 'seca',
      description: isRainySeason
        ? 'Época ideal para culturas que necessitam de muita água.'
        : 'Época para culturas resistentes à seca e irrigação.'
    };
  }, [selectedRegion]);


  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Calendário Agrícola de Angola
        </h1>
        <p className="text-gray-600">
          Planeje suas atividades agrícolas com base no clima e época do ano para o DigitalZango.
        </p>
      </div>

      <Tabs defaultValue="calendario" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="calendario"><CalendarIcon className="w-4 h-4 mr-2" />Calendário</TabsTrigger>
          <TabsTrigger value="alertas">
            <AlertTriangle className="w-4 h-4 mr-2" />Alertas ({activeAlerts.filter(a => a.isActive).length})
          </TabsTrigger>
          <TabsTrigger value="culturas"><Sprout className="w-4 h-4 mr-2" />Culturas</TabsTrigger>
          <TabsTrigger value="clima"><Cloud className="w-4 h-4 mr-2" />Clima</TabsTrigger>
        </TabsList>

        <TabsContent value="calendario" className="mt-6">
           <Card>
              <CardHeader>
                <CardTitle>Calendário de Atividades</CardTitle>
                <CardDescription>
                  Visualize e gerencie suas atividades agrícolas.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div style={{ height: 500 }}>
                  <BigCalendar
                    localizer={localizer}
                    events={events.map(event => ({
                      ...event,
                      start: event.date,
                      end: event.date,
                    }))}
                    startAccessor="start"
                    endAccessor="end"
                    culture="pt-BR"
                    messages={{
                      next: 'Próximo',
                      previous: 'Anterior',
                      today: 'Hoje',
                      month: 'Mês',
                      week: 'Semana',
                      day: 'Dia',
                      agenda: 'Agenda',
                      date: 'Data',
                      time: 'Hora',
                      event: 'Evento',
                      noEventsInRange: 'Não há eventos neste período.',
                    }}
                  />
                </div>
              </CardContent>
            </Card>
        </TabsContent>

        <TabsContent value="alertas" className="mt-6 grid gap-4">
          {activeAlerts.filter(alert => alert.isActive).length > 0 ? (
            activeAlerts.filter(alert => alert.isActive).map(alert => (
              <PestAlertCard
                key={alert.id}
                alert={alert}
                onMarkResolved={handleAlertResolved}
              />
            ))
          ) : (
            <Card>
              <CardContent className="text-center py-12">
                <p className="text-muted-foreground">Nenhum alerta ativo no momento.</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="culturas" className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(cropCalendar).map(([key, crop]) => (
              <Card key={key}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Sprout className="h-5 w-5" />{crop.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div>
                    <h4 className="font-medium text-sm">Épocas de Plantio:</h4>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {crop.plantingSeasons.map((s, i) => <Badge key={i} variant="secondary">{s.season}: Mês {s.start}-{s.end}</Badge>)}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Pragas Comuns:</h4>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {crop.commonPests.map(pest => <Badge key={pest} variant="destructive">{pest}</Badge>)}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </TabsContent>

        <TabsContent value="clima" className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {angolaRegions.map(region => (
            <Card key={region.id}>
              <CardHeader>
                <CardTitle>{region.name}</CardTitle>
                <CardDescription>{region.province}</CardDescription>
              </CardHeader>
              <CardContent className="text-sm space-y-2">
                <div className="flex justify-between"><span>Clima:</span> <Badge variant="outline">{region.climate}</Badge></div>
                <div className="flex justify-between"><span>Chuvas:</span> <span>{region.averageRainfall}mm/ano</span></div>
                <div className="flex justify-between"><span>Temperatura:</span> <span>{region.averageTemperature}°C Média</span></div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
