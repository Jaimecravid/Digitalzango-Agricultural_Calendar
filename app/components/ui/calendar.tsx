"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker, type DayPickerSingleProps } from "react-day-picker";
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
    // Show 1 month on mobile, 2 on desktop. This avoids layout shifts on hydration.
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth < 640);
      let timeoutId: NodeJS.Timeout;
      const handleResize = () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(checkMobile, 150);
      };
      checkMobile(); // Initial check
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    const numberOfMonths = isMobile ? 1 : 2;

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
          nav_button_previous: "absolute left-1",
          nav_button_next: "absolute right-1",
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
          IconLeft: () => <ChevronLeft className="h-4 w-4" />,
          IconRight: () => <ChevronRight className="h-4 w-4" />,
          ...props.components,
        }}
        {...props}
      />
    );
  }
);

Calendar.displayName = "Calendar";
