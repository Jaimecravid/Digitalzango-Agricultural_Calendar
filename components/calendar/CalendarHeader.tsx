'use client';

import React from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';
import { Button } from '../../app/components/ui/button';

interface CalendarHeaderProps {
  currentDate: Date;
  onDateChange: (date: Date) => void;
  onViewChange: (view: 'month' | 'week' | 'day') => void;
  currentView: 'month' | 'week' | 'day';
}

export const CalendarHeader = React.memo(({ 
  currentDate, 
  onDateChange, 
  onViewChange, 
  currentView 
}: CalendarHeaderProps) => {
  const navigatePrevious = () => {
    const newDate = new Date(currentDate);
    if (currentView === 'month') {
      newDate.setMonth(currentDate.getMonth() - 1);
    } else if (currentView === 'week') {
      newDate.setDate(currentDate.getDate() - 7);
    } else {
      newDate.setDate(currentDate.getDate() - 1);
    }
    onDateChange(newDate);
  };

  const navigateNext = () => {
    const newDate = new Date(currentDate);
    if (currentView === 'month') {
      newDate.setMonth(currentDate.getMonth() + 1);
    } else if (currentView === 'week') {
      newDate.setDate(currentDate.getDate() + 7);
    } else {
      newDate.setDate(currentDate.getDate() + 1);
    }
    onDateChange(newDate);
  };

  const goToToday = () => {
    onDateChange(new Date());
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center p-4 bg-white border-b border-gray-200 gap-4">
      {/* Navigation Controls */}
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={navigatePrevious}
          className="p-2 hover:bg-gray-100 rounded touch-manipulation min-h-[44px]"
          aria-label="Mês anterior"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <h2 className="text-xl font-semibold text-gray-900 min-w-[200px] text-center">
          {currentDate.toLocaleDateString('pt-AO', { 
            month: 'long', 
            year: 'numeric' 
          })}
        </h2>
        
        <Button
          variant="outline"
          size="sm"
          onClick={navigateNext}
          className="p-2 hover:bg-gray-100 rounded touch-manipulation min-h-[44px]"
          aria-label="Próximo mês"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* View Controls */}
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={goToToday}
          className="px-4 py-2 text-sm font-medium touch-manipulation min-h-[44px]"
        >
          <CalendarIcon className="h-4 w-4 mr-2" />
          Hoje
        </Button>
        
        <div className="flex border border-gray-300 rounded-lg overflow-hidden">
          {(['month', 'week', 'day'] as const).map((view) => (
            <Button
              key={view}
              variant={currentView === view ? "default" : "ghost"}
              size="sm"
              onClick={() => onViewChange(view)}
              className={`px-3 py-2 text-sm font-medium rounded-none touch-manipulation min-h-[44px] ${
                currentView === view 
                  ? 'bg-green-600 text-white' 
                  : 'hover:bg-gray-100'
              }`}
            >
              {view === 'month' ? 'Mês' : view === 'week' ? 'Semana' : 'Dia'}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
});

CalendarHeader.displayName = 'CalendarHeader';
