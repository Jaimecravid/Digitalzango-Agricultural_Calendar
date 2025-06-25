"use client"

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar as CalendarComponent } from '@/components/ui/calendar'
import { Droplets, Leaf, Sun, Trash2, Pencil } from "lucide-react"

interface Region {
  id: string
  name: string
  capital: string
}

interface Events {
  irrigation: Date[]
  planting: Date[]
  harvest: Date[]
}

interface EditingEvent {
  type: string
  oldDate: Date
  newDate: string
}

interface CalendarViewProps {
  region: Region
  events: Events
  selectedDate: Date | undefined
  setSelectedDate: (date: Date | undefined) => void
  userProvinceEvents: Events
  onDelete: (date: Date, type: string) => void
  onEditStart: (date: Date, type: string) => void
  editingEvent: EditingEvent | null
  onEditChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
  onEditSave: () => void
  onEditCancel: () => void
}

export default function CalendarView({
  region,
  events,
  selectedDate,
  setSelectedDate,
  onDelete,
  onEditStart,
  editingEvent,
  onEditChange,
  onEditSave,
  onEditCancel
}: CalendarViewProps) {
  const irrigationDays = events.irrigation
  const plantingDays = events.planting
  const harvestDays = events.harvest

  const isSameDay = (a: Date, b: Date) =>
    a.getDate() === b.getDate() && a.getMonth() === b.getMonth() && a.getFullYear() === b.getFullYear()

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Próximas Atividades - {region.name}</CardTitle>
          <p className="text-sm text-gray-500">Capital: {region.capital}</p>
        </CardHeader>
        <CardContent>
          <CalendarComponent
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            numberOfMonths={2}
            showWeekNumber
            fixedWeeks
            modifiers={{
              irrigation: irrigationDays,
              planting: plantingDays,
              harvest: harvestDays,
            }}
            modifiersClassNames={{
              irrigation: "bg-blue-100 text-blue-900 font-bold",
              planting: "bg-green-100 text-green-900 font-bold",
              harvest: "bg-yellow-100 text-yellow-900 font-bold",
            }}
            components={{
              DayContent: ({ date }) => (
                <div className="flex items-center justify-center">
                  {irrigationDays.some(d => isSameDay(d, date)) && <Droplets className="h-3 w-3 text-blue-500 mr-1" />}
                  {plantingDays.some(d => isSameDay(d, date)) && <Leaf className="h-3 w-3 text-green-600 mr-1" />}
                  {harvestDays.some(d => isSameDay(d, date)) && <Sun className="h-3 w-3 text-yellow-500 mr-1" />}
                  <span>{date.getDate()}</span>
                </div>
              ),
            }}
            className="w-full"
          />

          {/* Details panel for selected day */}
          {selectedDate && (
            <div className="mt-6 p-4 bg-gray-50 rounded border border-gray-200">
              <div className="font-semibold text-green-800 mb-2">
                Adicionar/Editar Atividade em {selectedDate.toLocaleDateString("pt-AO")}
              </div>
              <ul className="space-y-2">
                {irrigationDays.some(d => isSameDay(d, selectedDate)) && (
                  <li className="flex items-center space-x-2">
                    <Droplets className="h-4 w-4 text-blue-500" />
                    <span>Irrigação</span>
                    <button
                      title="Excluir"
                      onClick={() => onDelete(selectedDate, "Irrigação")}
                      className="ml-2 text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <button
                      title="Editar"
                      onClick={() => onEditStart(selectedDate, "Irrigação")}
                      className="ml-1 text-blue-500 hover:text-blue-700"
                    >
                      <Pencil className="w-4 h-4" />
                    </button>
                  </li>
                )}
                {plantingDays.some(d => isSameDay(d, selectedDate)) && (
                  <li className="flex items-center space-x-2">
                    <Leaf className="h-4 w-4 text-green-600" />
                    <span>Plantio</span>
                    <button
                      title="Excluir"
                      onClick={() => onDelete(selectedDate, "Plantio")}
                      className="ml-2 text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <button
                      title="Editar"
                      onClick={() => onEditStart(selectedDate, "Plantio")}
                      className="ml-1 text-blue-500 hover:text-blue-700"
                    >
                      <Pencil className="w-4 h-4" />
                    </button>
                  </li>
                )}
                {harvestDays.some(d => isSameDay(d, selectedDate)) && (
                  <li className="flex items-center space-x-2">
                    <Sun className="h-4 w-4 text-yellow-500" />
                    <span>Colheita</span>
                    <button
                      title="Excluir"
                      onClick={() => onDelete(selectedDate, "Colheita")}
                      className="ml-2 text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <button
                      title="Editar"
                      onClick={() => onEditStart(selectedDate, "Colheita")}
                      className="ml-1 text-blue-500 hover:text-blue-700"
                    >
                      <Pencil className="w-4 h-4" />
                    </button>
                  </li>
                )}
                {/* If no events */}
                {!(
                  irrigationDays.some(d => isSameDay(d, selectedDate)) ||
                  plantingDays.some(d => isSameDay(d, selectedDate)) ||
                  harvestDays.some(d => isSameDay(d, selectedDate))
                ) && (
                  <li className="text-gray-500">Nenhum evento para este dia.</li>
                )}
              </ul>
              {/* Edit form (in details panel) */}
              {editingEvent && (
                <div className="mt-4 p-2 bg-yellow-100 rounded border border-yellow-300">
                  <div className="mb-2 font-semibold">Adicionar/Editar Atividade</div>
                  <input
                    type="date"
                    className="border rounded px-2 py-1 mr-2"
                    value={editingEvent.newDate}
                    onChange={onEditChange}
                  />
                  <button onClick={onEditSave} className="bg-green-600 text-white px-2 py-1 rounded mr-2 hover:bg-green-700">Salvar</button>
                  <button onClick={onEditCancel} className="bg-gray-300 px-2 py-1 rounded hover:bg-gray-400">Cancelar</button>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
