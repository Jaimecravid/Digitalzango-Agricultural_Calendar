"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, type LucideIcon } from "lucide-react";
import { DayPicker, type DayPickerSingleProps, type DayProps, type DayContentProps } from "react-day-picker";
import { pt } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

/**
 * Extends DayPickerSingleProps to include custom modifiers for agricultural activities.
 */
export interface CalendarProps extends DayPickerSingleProps {
  irrigationDays?: Date[];
  plantingDays?: Date[];
  harvestDays?: Date[];
  locale?: Locale;
}

type DayEvent = {
  type: "irrigation" | "planting" | "harvest";
  label: string;
  Icon: LucideIcon;
}

/**
 * An accessible and customizable calendar component for agricultural activities,
 * built on top of `react-day-picker`.
 * - Accessible (ARIA, keyboard, focus)
 * - Mobile responsive
 * - Localized (pt-AO)
 * - Custom modifiers for agricultural activities
 */
export const Calendar: React.FC<CalendarProps> = React.memo(
  ({
    className,
    classNames,
    irrigationDays = [],
    plantingDays = [],
    harvestDays = [],
    locale = pt,
    ...props
  }) => {
    const numberOfMonths = 2;

    // Merge agricultural modifiers
    const modifiers = {
      ...props.modifiers,
      irrigation: irrigationDays,
      planting: plantingDays,
      harvest: harvestDays,
    };

    // Custom class names for modifiers
    const modifiersClassNames = {
      ...props.modifiersClassNames,
      irrigation: "bg-blue-100 dark:bg-blue-900/50 text-blue-900 dark:text-blue-100 font-bold",
      planting: "bg-green-100 dark:bg-green-900/50 text-green-900 dark:text-green-100 font-bold",
      harvest: "bg-yellow-100 dark:bg-yellow-900/50 text-yellow-900 dark:text-yellow-100 font-bold",
    };

    // Custom DayContent to add screen-reader-only text for events
    const DayContent = (dayProps: DayContentProps) => {
      const { date, activeModifiers } = dayProps;
      let eventText = "";
      if (activeModifiers.irrigation) {
        eventText = "Evento de Irrigação";
      } else if (activeModifiers.planting) {
        eventText = "Evento de Plantio";
      } else if (activeModifiers.harvest) {
        eventText = "Evento de Colheita";
      }

      return (
        <>
          {date.getDate()}
          {eventText && <span className="sr-only">, {eventText}</span>}
        </>
      );
    };


    return (
      <DayPicker
        locale={locale}
        numberOfMonths={numberOfMonths}
        showOutsideDays
        className={cn("p-3", className)}
        classNames={{
          months:
            "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
          month: "space-y-4",
          caption: "flex justify-center pt-1 relative items-center",
          caption_label: "text-sm font-medium",
          nav: "space-x-1 flex items-center",
          nav_button: cn(
            buttonVariants({ variant: "outline" }),
            "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
          ),
          nav_button_previous: "absolute left-1", // ARIA label is added by DayPicker
          nav_button_next: "absolute right-1", // ARIA label is added by DayPicker
          table: "w-full border-collapse space-y-1",
          head_row: "flex",
          head_cell:
            "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
          row: "flex w-full mt-2",
          cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
          day: cn(
            buttonVariants({ variant: "ghost" }),
            "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
          ),
          day_range_end: "day-range-end",
          day_selected:
            "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
          day_today: "bg-accent text-accent-foreground",
          day_outside:
            "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
          day_disabled: "text-muted-foreground opacity-50",
          day_range_middle:
            "aria-selected:bg-accent aria-selected:text-accent-foreground",
          day_hidden: "invisible",
          ...classNames,
        }}
        modifiers={modifiers}
        modifiersClassNames={modifiersClassNames}
        components={{
          IconLeft: () => <ChevronLeft className="h-4 w-4" aria-hidden="true" />,
          IconRight: () => <ChevronRight className="h-4 w-4" aria-hidden="true" />,
          // Use the custom DayContent component
          DayContent,
          // Add explicit ARIA labels for navigation buttons
          ...props.components,
          ...props.components,
        }}
        {...props}
      />
    );
  }
);

Calendar.displayName = "Calendar";
