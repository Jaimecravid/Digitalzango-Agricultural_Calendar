'use client';

import React, { useState, useEffect, useMemo } from 'react';
import MonthCard, { type MonthCrop, type Season } from '../../components/calendar/MonthCard';
import ProvinceSelector from '../../components/calendar/ProvinceSelector';
import { ANGOLA_CROPS } from '@/lib/data/crops-database';
import { useRegion } from '@/app/contexts/region-context';

const MONTH_NAMES =[
  'Janeiro', 'Fevereiro', 'Março', 'Abril',
  'Maio', 'Junho', 'Julho', 'Agosto',
  'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

function getSeasonForMonth(monthNumber: number): Season {
  if (monthNumber >= 10 || monthNumber <= 3) {
    return {
      label: 'Época Chuvosa',
      emoji: '🌧️',
      colorClass: 'bg-blue-500 text-white',
      borderClass: 'border-blue-300 dark:border-blue-700'
    };
  } else if (monthNumber >= 4 && monthNumber <= 9) {
    return {
      label: 'Época Seca',
      emoji: '☀️',
      colorClass: 'bg-amber-500 text-white',
      borderClass: 'border-amber-300 dark:border-amber-700'
    };
  } else {
    return {
      label: 'Transição',
      emoji: '🔄',
      colorClass: 'bg-purple-500 text-white',
      borderClass: 'border-purple-300 dark:border-purple-700'
    };
  }
}

export default function SimplifiedCalendar() {
  // 1. Pull in the context including 'regions' array to help us translate Name <-> ID
  const { currentRegion, setRegion, getCurrentRegion, regions } = useRegion();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  },[]);

  const currentMonth = useMemo(() => new Date().getMonth() + 1,[]);
  
  // 2. Get the clean Name for display and filtering (e.g., "Huambo")
  const activeRegionData = getCurrentRegion();
  const provinceName = activeRegionData?.name || '';

  // 3. Translator function: Safely pass the change back to Context as an ID
  const handleProvinceChange = (newValue: string) => {
    const matchedRegion = regions?.find(r => r.name === newValue || r.id === newValue);
    if (matchedRegion) {
      setRegion(matchedRegion.id);
    } else {
      // Fallback just in case
      setRegion(newValue);
    }
  };

  // 4. Filter logic based on the verified Province Name
  const { toPlantNow, toHarvestNow, filteredCalendarData } = useMemo(() => {
    const provinceCrops = provinceName 
      ? ANGOLA_CROPS.filter(crop => crop.provinces.includes(provinceName))
      : ANGOLA_CROPS;

    const toPlant = provinceCrops.filter(c => c.plantingMonths.includes(currentMonth));
    const toHarvest = provinceCrops.filter(c => c.harvestMonths.includes(currentMonth));

    const calendar = MONTH_NAMES.map((monthName, index) => {
      const monthNum = index + 1;
      const monthCrops: MonthCrop[] =[];
      
      provinceCrops.forEach(crop => {
        if (crop.plantingMonths.includes(monthNum)) {
          monthCrops.push({ name: crop.name, action: 'plantar', emoji: crop.icon });
        }
        if (crop.harvestMonths.includes(monthNum)) {
          monthCrops.push({ name: crop.name, action: 'colher', emoji: crop.icon });
        }
      });

      return {
        monthNumber: monthNum,
        monthName,
        season: getSeasonForMonth(monthNum),
        crops: monthCrops
      };
    });

    return { toPlantNow: toPlant, toHarvestNow: toHarvest, filteredCalendarData: calendar };
  }, [provinceName, currentMonth]);

  if (!isMounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0B1020]">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-emerald-500">Carregando Calendário Digitalzango...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B1020] text-[#F8FAFC]">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        
        {/* HEADER */}
        <header className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-3xl font-bold text-emerald-500 flex items-center gap-2">
                🌽 Calendário Agrícola
              </h1>
              <p className="text-slate-400 mt-1">Guia de cultivo personalizado para Angola</p>
            </div>
            <div className="w-full md:w-64">
              {/* Pass the NAME to the selector, pass the translator function to the handler */}
              <ProvinceSelector 
                selectedProvince={provinceName} 
                onProvinceChange={handleProvinceChange} 
              />
            </div>
          </div>
        </header>

        <main>
          {/* 🚀 ACTION CARD: WHAT TO DO RIGHT NOW */}
          {provinceName && (
            <div className="mb-10 bg-emerald-950/40 border border-emerald-500/30 rounded-2xl p-6 shadow-xl shadow-emerald-900/10">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-2">
                <h2 className="text-2xl font-bold text-white">
                  📍 {provinceName} — {MONTH_NAMES[currentMonth - 1]}
                </h2>
                <span className="px-3 py-1 bg-emerald-500 text-emerald-950 text-xs font-black uppercase rounded-full">
                  Ação Imediata
                </span>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-8">
                {/* PLANTING COLUMN */}
                <div className="space-y-4">
                  <h3 className="text-emerald-400 font-bold flex items-center gap-2">
                    🌱 Plantar agora:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {toPlantNow.length > 0 ? toPlantNow.map(crop => (
                      <span key={crop.id} className="bg-slate-900/80 border border-emerald-500/20 px-4 py-2 rounded-xl text-sm flex items-center gap-2">
                        <span className="text-lg">{crop.icon}</span> {crop.name}
                      </span>
                    )) : (
                      <p className="text-slate-500 italic text-sm">Nenhum plantio recomendado para este mês.</p>
                    )}
                  </div>
                </div>

                {/* HARVEST COLUMN */}
                <div className="space-y-4">
                  <h3 className="text-amber-400 font-bold flex items-center gap-2">
                    🌾 Colher agora:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {toHarvestNow.length > 0 ? toHarvestNow.map(crop => (
                      <span key={crop.id} className="bg-slate-900/80 border border-amber-500/20 px-4 py-2 rounded-xl text-sm flex items-center gap-2">
                        <span className="text-lg">{crop.icon}</span> {crop.name}
                      </span>
                    )) : (
                      <p className="text-slate-500 italic text-sm">Nenhuma colheita prevista para este mês.</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 📅 THE ANNUAL PLAN (Filtered by Province) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredCalendarData.map((month) => (
              <MonthCard
                key={month.monthNumber}
                monthNumber={month.monthNumber}
                monthName={month.monthName}
                isCurrentMonth={month.monthNumber === currentMonth}
                season={month.season}
                crops={month.crops}
              />
            ))}
          </div>
        </main>

        <footer className="mt-16 pt-8 border-t border-slate-800 text-center">
           <p className="text-slate-500 text-sm italic">
             Este calendário é ajustado automaticamente para o clima da província de {provinceName || 'Angola'}.
           </p>
        </footer>
      </div>
    </div>
  );
}