"use client";

import { format } from "date-fns";
import { CalendarBlank } from "@phosphor-icons/react";
import { useState } from "react";
import type { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export interface DateRangePickerProps {
  value?: DateRange;
  onChange?: (range: DateRange | undefined) => void;
  placeholder?: string;
  className?: string;
  numberOfMonths?: number;
}

export function DateRangePicker({
  value,
  onChange,
  placeholder = "Check in — Check out",
  className,
  numberOfMonths = 2,
}: DateRangePickerProps) {
  const [open, setOpen] = useState(false);
  const label =
    value?.from && value?.to
      ? `${format(value.from, "MMM d")} — ${format(value.to, "MMM d")}`
      : value?.from
        ? format(value.from, "MMM d")
        : placeholder;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        render={
          <Button
            variant="outline"
            className={cn("w-full justify-start font-normal", className)}
          />
        }
      >
        <CalendarBlank size={16} className="mr-2 shrink-0" />
        {label}
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="range"
          selected={value}
          onSelect={(range) => {
            onChange?.(range);
            if (range?.from && range?.to) setOpen(false);
          }}
          numberOfMonths={numberOfMonths}
        />
      </PopoverContent>
    </Popover>
  );
}
