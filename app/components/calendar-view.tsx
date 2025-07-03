"use client";

import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Droplets, Sprout, Scissors } from "lucide-react";

interface CalendarViewProps {
  activities?: {
    irrigation: Date[];
    planting: Date[];
    harvesting: Date[];
  };
}

const CalendarView = ({ activities }: CalendarViewProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const handleSelect = (date: Date | undefined) => {
    setSelectedDate(date);
  };

  const getActivitiesForDate = (date: Date) => {
    if (!activities) return [];
    
    const dateStr = date.toDateString();
    const dayActivities = [];
    
    if (activities.irrigation.some(d => d.toDateString() === dateStr)) {
      dayActivities.push({ type: 'irrigation', label: 'Irrigação', icon: Droplets, color: 'bg-blue-100 text-blue-800' });
    }
    if (activities.planting.some(d => d.toDateString() === dateStr)) {
      dayActivities.push({ type: 'planting', label: 'Plantio', icon: Sprout, color: 'bg-green-100 text-green-800' });
    }
    if (activities.harvesting.some(d => d.toDateString() === dateStr)) {
      dayActivities.push({ type: 'harvesting', label: 'Colheita', icon: Scissors, color: 'bg-yellow-100 text-yellow-800' });
    }
    
    return dayActivities;
  };

  const selectedDateActivities = selectedDate ? getActivitiesForDate(selectedDate) : [];

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>
            <CalendarIcon />
            Calendário Agrícola
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={handleSelect}
            />
            
            {/* Legend */}
            <div>
              <div>
                <div></div>
                <span>Irrigação</span>
              </div>
              <div>
                <div></div>
                <span>Plantio</span>
              </div>
              <div>
                <div></div>
                <span>Colheita</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Selected Date Activities */}
      {selectedDate && (
        <Card>
          <CardHeader>
            <CardTitle>
              Atividades para {selectedDate.toLocaleDateString('pt-PT', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {selectedDateActivities.length > 0 ? (
              <div>
                {selectedDateActivities.map((activity, idx) => (
                  <div key={idx}>
                    <activity.icon />
                    <Badge className={activity.color}>
                      {activity.label}
                    </Badge>
                  </div>
                ))}
              </div>
            ) : (
              <p>Nenhuma atividade programada para este dia</p>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default CalendarView;

