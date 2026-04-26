'use client';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';
import { MapPin } from 'lucide-react';
import { completeAngolaProvinces } from '@/lib/data/calendar';

interface ProvinceSelectorProps {
  selectedProvince: string;
  onProvinceChange: (province: string) => void;
}

const climateZones: Record<string, string> = {
  tropical: 'Zona Tropical',
  subtropical: 'Zona Subtropical',
  semiArid: 'Zona Semi-Árida',
  arid: 'Zona Árida',
};

const provincesByClimate: Record<string, typeof completeAngolaProvinces> = {
  tropical: [],
  subtropical: [],
  semiArid: [],
  arid: [],
};

completeAngolaProvinces.forEach((province) => {
  const climateKey = province.climate.replace('-', '') as keyof typeof climateZones;
  if (climateKey === 'semiarid') {
    provincesByClimate.semiArid.push(province);
  } else if (climateKey === 'arid') {
    provincesByClimate.arid.push(province);
  } else if (climateKey === 'subtropical') {
    provincesByClimate.subtropical.push(province);
  } else {
    provincesByClimate.tropical.push(province);
  }
});

export default function ProvinceSelector({
  selectedProvince,
  onProvinceChange,
}: ProvinceSelectorProps) {
  return (
    <div className="relative">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground z-10">
        <MapPin className="h-4 w-4" />
      </div>
      <Select value={selectedProvince} onValueChange={onProvinceChange}>
        <SelectTrigger className="pl-10 w-full sm:w-[280px] bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-2 hover:border-primary/50 focus:border-primary transition-colors">
          <SelectValue placeholder="Selecione uma província..." />
        </SelectTrigger>
        <SelectContent>
          {Object.entries(climateZones).map(([key, label]) => {
            const provinces = provincesByClimate[key];
            if (provinces.length === 0) return null;
            return (
              <SelectGroup key={key}>
                <SelectLabel className="text-primary font-semibold">
                  {label}
                </SelectLabel>
                {provinces.map((province) => (
                  <SelectItem
                    key={province.id}
                    value={province.province}
                    className="cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">
                        {province.averageRainfall}mm
                      </span>
                      <span>{province.province}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectGroup>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
}