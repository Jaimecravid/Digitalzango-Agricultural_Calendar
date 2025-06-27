"use client";

import { useState, useRef, useEffect } from "react";
import { Calendar } from "@/components/ui/calendar"; // <-- Use your enhanced Calendar!
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronDown, Trash2 } from "lucide-react";

// Lista completa das províncias de Angola
const angolaProvinces = [
  { id: "bengo", name: "Bengo", capital: "Caxito" },
  { id: "benguela", name: "Benguela", capital: "Benguela" },
  { id: "bie", name: "Bié", capital: "Cuíto" },
  { id: "cabinda", name: "Cabinda", capital: "Cabinda" },
  { id: "cuando-cubango", name: "Cuando Cubango", capital: "Menongue" },
  { id: "cuanza-norte", name: "Cuanza Norte", capital: "N'dalatando" },
  { id: "cuanza-sul", name: "Cuanza Sul", capital: "Sumbe" },
  { id: "cunene", name: "Cunene", capital: "Ondjiva" },
  { id: "huambo", name: "Huambo", capital: "Huambo" },
  { id: "huila", name: "Huíla", capital: "Lubango" },
  { id: "luanda", name: "Luanda", capital: "Luanda" },
  { id: "lunda-norte", name: "Lunda Norte", capital: "Dundo" },
  { id: "lunda-sul", name: "Lunda Sul", capital: "Saurimo" },
  { id: "malanje", name: "Malanje", capital: "Malanje" },
  { id: "moxico", name: "Moxico", capital: "Luena" },
  { id: "namibe", name: "Namibe", capital: "Moçâmedes" },
  { id: "uige", name: "Uíge", capital: "Uíge" },
  { id: "zaire", name: "Zaire", capital: "M'banza-Kongo" },
];

// Define types for province events
type EventType = { irrigation: Date[]; planting: Date[]; harvest: Date[] };

// Exemplo: eventos para cada província (expanda conforme necessário)
const provinceEvents: Record<string, EventType> = {
  luanda: {
    irrigation: [new Date(2025, 5, 7), new Date(2025, 5, 14), new Date(2025, 5, 21)],
    planting: [new Date(2025, 5, 10), new Date(2025, 5, 24)],
    harvest: [new Date(2025, 5, 20), new Date(2025, 5, 28)],
  },
  benguela: {
    irrigation: [new Date(2025, 5, 8), new Date(2025, 5, 15), new Date(2025, 5, 22)],
    planting: [new Date(2025, 5, 11), new Date(2025, 5, 25)],
    harvest: [new Date(2025, 5, 21), new Date(2025, 5, 29)],
  },
  huambo: {
    irrigation: [new Date(2025, 5, 9), new Date(2025, 5, 16)],
    planting: [new Date(2025, 5, 12)],
    harvest: [new Date(2025, 5, 22), new Date(2025, 5, 30)],
  },
  cabinda: {
    irrigation: [new Date(2025, 5, 10)],
    planting: [new Date(2025, 5, 13), new Date(2025, 5, 27)],
    harvest: [new Date(2025, 5, 23)],
  },
  malanje: {
    irrigation: [new Date(2025, 5, 11)],
    planting: [new Date(2025, 5, 14)],
    harvest: [new Date(2025, 5, 24)],
  },
  // Adicione mais províncias conforme necessário...
};

// --- WeatherDisplay com tipagem correta ---
function WeatherDisplay({ region }: { region: { name: string; capital: string } }) {
  const demoWeather: Record<string, { temp: string; desc: string }> = {
    "Luanda": { temp: "29", desc: "Ensolarado" },
    "Benguela": { temp: "27", desc: "Parcialmente nublado" },
    "Huambo": { temp: "22", desc: "Chuva leve" },
    "Cabinda": { temp: "28", desc: "Nublado" },
    "Malanje": { temp: "24", desc: "Sol e nuvens" },
  };
  const weather = demoWeather[region.name] || { temp: "--", desc: "Sem eventos" };
  return (
    <div className="mb-4 flex items-center gap-4 p-3 bg-blue-50 rounded border border-blue-200 text-blue-900">
      <span className="font-semibold">Tempo em {region.capital}:</span>
      <span>{weather.temp}°C</span>
      <span>{weather.desc}</span>
    </div>
  );
}

function RegionSelector({ selectedRegion, setSelectedRegion }: { selectedRegion: string, setSelectedRegion: (id: string) => void }) {
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Selecione a Província
      </label>
      <Select value={selectedRegion} onValueChange={setSelectedRegion}>
        <SelectTrigger className="w-full border-green-300 focus:border-green-500">
          <SelectValue placeholder="Escolha a província"/>
          <ChevronDown className="h-4 w-4 ml-2" />
        </SelectTrigger>
        <SelectContent className="max-h-64 overflow-y-auto">
          {angolaProvinces.map(region => (
            <SelectItem key={region.id} value={region.id}>
              {region.name} ({region.capital})
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

function AddEventForm({ onAdd }: { onAdd: (date: string, type: string) => void }) {
  const dateRef = useRef<HTMLInputElement>(null)
  const typeRef = useRef<HTMLSelectElement>(null)

  return (
    <form
      className="mb-6 flex flex-col md:flex-row items-start gap-4 bg-yellow-50 border border-yellow-200 rounded p-4"
      onSubmit={e => {
        e.preventDefault()
        const date = dateRef.current?.value
        const type = typeRef.current?.value
        if (date && type) {
          onAdd(date, type)
          if (dateRef.current) dateRef.current.value = ""
          if (typeRef.current) typeRef.current.value = "Irrigação"
        }
      }}
    >
      <label className="font-semibold">Adicionar atividade</label>
      <input
        ref={dateRef}
        type="date"
        className="border rounded px-2 py-1"
        required
      />
      <select ref={typeRef} className="border rounded px-2 py-1" defaultValue="Irrigação">
        <option value="Irrigação">Irrigação</option>
        <option value="Plantio">Plantio</option>
        <option value="Colheita">Colheita</option>
      </select>
      <button type="submit" className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700">
        Adicionar atividade
      </button>
    </form>
  )
}

function CalendarioContent() {
  const [selectedRegion, setSelectedRegion] = useState("luanda");
  const [provinceEventsState, setProvinceEventsState] = useState<Record<string, EventType>>(() => {
    const state: Record<string, EventType> = {};
    for (const key in provinceEvents) {
      state[key] = {
        irrigation: [...provinceEvents[key].irrigation],
        planting: [...provinceEvents[key].planting],
        harvest: [...provinceEvents[key].harvest],
      };
    }
    return state;
  });
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  useEffect(() => {
    if (selectedDate === undefined) setSelectedDate(new Date());
  }, [selectedDate]);

  const currentRegion = angolaProvinces.find(r => r.id === selectedRegion) || angolaProvinces[0];
  const events = provinceEventsState[selectedRegion] || { irrigation: [], planting: [], harvest: [] };

  function handleAddEvent(dateString: string, type: string) {
    const date = new Date(dateString);
    setProvinceEventsState(prev => {
      const current = prev[selectedRegion] || { irrigation: [], planting: [], harvest: [] };
      const updated = { ...current };
      if (type === "Irrigação") updated.irrigation = [...current.irrigation, date];
      if (type === "Plantio") updated.planting = [...current.planting, date];
      if (type === "Colheita") updated.harvest = [...current.harvest, date];
      return { ...prev, [selectedRegion]: updated };
    });
  }

  function handleDeleteEvent(date: Date, type: string) {
    setProvinceEventsState(prev => {
      const current = prev[selectedRegion] || { irrigation: [], planting: [], harvest: [] };
      const updated = { ...current };
      if (type === "Irrigação") {
        updated.irrigation = current.irrigation.filter(d => d.getTime() !== date.getTime());
      }
      if (type === "Plantio") {
        updated.planting = current.planting.filter(d => d.getTime() !== date.getTime());
      }
      if (type === "Colheita") {
        updated.harvest = current.harvest.filter(d => d.getTime() !== date.getTime());
      }
      return { ...prev, [selectedRegion]: updated };
    });
  }

  // Editing event state and handlers (not used in this version, but can be added if needed)
  // const [editingEvent, setEditingEvent] = useState<{type: string, oldDate: Date, newDate: string} | null>(null);

  const upcomingEvents = [
    ...events.irrigation.map(date => ({ date, type: "Irrigação" })),
    ...events.planting.map(date => ({ date, type: "Plantio" })),
    ...events.harvest.map(date => ({ date, type: "Colheita" })),
  ].sort((a, b) => a.date.getTime() - b.date.getTime());

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Calendário Agrícola
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Planeje suas atividades agrícolas com base no clima e região de Angola.
          </p>
        </div>
        <RegionSelector selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} />
        <div className="mb-4 p-4 bg-green-50 rounded border border-green-200 text-green-900 font-semibold">
          Província selecionada: {currentRegion.name} (Capital: {currentRegion.capital})
        </div>
        <WeatherDisplay region={currentRegion} />
        <AddEventForm onAdd={handleAddEvent} />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Calendário principal */}
          <div className="md:col-span-3">
            <Calendar
              irrigationDays={events.irrigation}
              plantingDays={events.planting}
              harvestDays={events.harvest}
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
            {selectedDate && (
              <div className="mt-4">
                <strong>Data selecionada:</strong> {selectedDate.toLocaleDateString("pt-AO")}
              </div>
            )}
          </div>
          {/* Barra lateral */}
          <div className="md:col-span-1">
            <div className="bg-gray-50 rounded-lg border border-gray-200 p-4">
              <h2 className="text-lg font-bold mb-4 text-green-800">Próximas Atividades</h2>
              <ul className="space-y-3">
                {upcomingEvents.length === 0 && (
                  <li className="text-gray-500">Sem eventos</li>
                )}
                {upcomingEvents.map((event, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    {event.type === "Irrigação" && <span className="text-blue-500">💧</span>}
                    {event.type === "Plantio" && <span className="text-green-600">🌱</span>}
                    {event.type === "Colheita" && <span className="text-yellow-500">☀️</span>}
                    <span>{event.type}</span>
                    <span className="text-xs text-gray-500 ml-2">{event.date.toLocaleDateString()}</span>
                    <button
                      title="Remover"
                      onClick={() => handleDeleteEvent(event.date, event.type)}
                      className="ml-2 text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CalendarioPage() {
  return <CalendarioContent />;
}
