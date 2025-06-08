"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "../contexts/language-context"
import { useRegion } from "../contexts/region-context"

interface CalendarActivity {
  id: string
  type: "planting" | "irrigation" | "fertilization" | "pest-control" | "harvesting" | "land-prep"
  crop: string
  title: string
  description: string
  priority: "low" | "medium" | "high"
  icon: string
}

const activityIcons = {
  planting: "🌱",
  irrigation: "💧",
  fertilization: "🌿",
  "pest-control": "🐛",
  harvesting: "🌾",
  "land-prep": "🚜",
}

export default function CalendarView() {
  const { t } = useLanguage()
  const { getCurrentRegion } = useRegion()
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [activities, setActivities] = useState<CalendarActivity[]>([])

  // Generate activities based on region and season
  useEffect(() => {
    const region = getCurrentRegion()
    if (!region) return

    const currentMonth = currentDate.getMonth() + 1
    const isRainySeason = currentMonth >= region.rainySeasonStart || currentMonth <= region.rainySeasonEnd

    const mockActivities: CalendarActivity[] = []

    // Generate activities for the current month
    for (let day = 1; day <= 30; day++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
      const dayOfWeek = date.getDay()

      // Planting activities during rainy season
      if (isRainySeason && dayOfWeek === 1 && day <= 15) {
        mockActivities.push({
          id: `plant-${day}`,
          type: "planting",
          crop: region.mainCrops[Math.floor(Math.random() * region.mainCrops.length)],
          title: "Plantio recomendado",
          description: "Condições ideais para plantio",
          priority: "high",
          icon: activityIcons.planting,
        })
      }

      // Irrigation during dry season
      if (!isRainySeason && dayOfWeek % 2 === 0) {
        mockActivities.push({
          id: `irrigate-${day}`,
          type: "irrigation",
          crop: "Geral",
          title: "Irrigação necessária",
          description: "Manter humidade do solo",
          priority: "high",
          icon: activityIcons.irrigation,
        })
      }

      // Fertilization
      if (day === 10 || day === 25) {
        mockActivities.push({
          id: `fertilize-${day}`,
          type: "fertilization",
          crop: "Todas as culturas",
          title: "Aplicação de fertilizante",
          description: "Nutrição das plantas",
          priority: "medium",
          icon: activityIcons.fertilization,
        })
      }

      // Pest control
      if (isRainySeason && day === 20) {
        mockActivities.push({
          id: `pest-${day}`,
          type: "pest-control",
          crop: "Milho, Feijão",
          title: "Controlo de pragas",
          description: "Verificar e tratar pragas",
          priority: "medium",
          icon: activityIcons["pest-control"],
        })
      }
    }

    setActivities(mockActivities)
  }, [currentDate, getCurrentRegion])

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const getActivitiesForDate = (date: Date) => {
    return activities.filter((activity) => {
      // Simple matching by day for demo
      return date.getDate() % 7 === 0 || date.getDate() % 10 === 0
    })
  }

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev)
      if (direction === "prev") {
        newDate.setMonth(prev.getMonth() - 1)
      } else {
        newDate.setMonth(prev.getMonth() + 1)
      }
      return newDate
    })
  }

  const monthNames = [
    t("january"),
    t("february"),
    t("march"),
    t("april"),
    t("may"),
    t("june"),
    t("july"),
    t("august"),
    t("september"),
    t("october"),
    t("november"),
    t("december"),
  ]

  const daysInMonth = getDaysInMonth(currentDate)
  const firstDay = getFirstDayOfMonth(currentDate)
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
  const emptyDays = Array.from({ length: firstDay }, (_, i) => i)

  return (
    <div className="space-y-6">
      {/* Calendar Header */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </CardTitle>
              <CardDescription>
                {getCurrentRegion()?.name} - {getCurrentRegion()?.climate}
              </CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="icon" onClick={() => navigateMonth("prev")}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={() => navigateMonth("next")}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar Grid */}
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-6">
              {/* Days of week header */}
              <div className="grid grid-cols-7 gap-2 mb-4">
                {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map((day) => (
                  <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar days */}
              <div className="grid grid-cols-7 gap-2">
                {/* Empty days */}
                {emptyDays.map((day) => (
                  <div key={`empty-${day}`} className="h-20"></div>
                ))}

                {/* Month days */}
                {days.map((day) => {
                  const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
                  const dayActivities = getActivitiesForDate(date)
                  const isSelected = selectedDate.toDateString() === date.toDateString()
                  const isToday = new Date().toDateString() === date.toDateString()

                  return (
                    <div
                      key={day}
                      className={`h-20 border rounded-lg p-2 cursor-pointer transition-colors ${
                        isSelected
                          ? "bg-green-100 border-green-500"
                          : isToday
                            ? "bg-blue-50 border-blue-300"
                            : "hover:bg-gray-50"
                      }`}
                      onClick={() => setSelectedDate(date)}
                    >
                      <div className="text-sm font-medium">{day}</div>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {dayActivities.slice(0, 2).map((activity, idx) => (
                          <div key={idx} className="text-xs bg-green-200 text-green-800 px-1 rounded">
                            {activity.icon}
                          </div>
                        ))}
                        {dayActivities.length > 2 && (
                          <div className="text-xs text-gray-500">+{dayActivities.length - 2}</div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Activities Panel */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>{t("todaysActivities")}</CardTitle>
              <CardDescription>{selectedDate.toLocaleDateString("pt-AO")}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {getActivitiesForDate(selectedDate).length > 0 ? (
                  getActivitiesForDate(selectedDate).map((activity, idx) => (
                    <div key={idx} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl">{activity.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{activity.title}</h4>
                        <p className="text-xs text-gray-600 mt-1">{activity.description}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="secondary" className="text-xs">
                            {activity.crop}
                          </Badge>
                          <Badge
                            variant={
                              activity.priority === "high"
                                ? "destructive"
                                : activity.priority === "medium"
                                  ? "default"
                                  : "secondary"
                            }
                            className="text-xs"
                          >
                            {activity.priority}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-sm text-center py-4">Nenhuma actividade programada para este dia</p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Tasks */}
          <Card>
            <CardHeader>
              <CardTitle>{t("upcomingTasks")}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {activities.slice(0, 5).map((activity, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-sm">
                    <div>{activity.icon}</div>
                    <div className="flex-1">
                      <div className="font-medium">{activity.title}</div>
                      <div className="text-gray-500 text-xs">{activity.crop}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
