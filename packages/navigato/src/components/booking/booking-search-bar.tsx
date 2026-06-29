"use client";

import { useState } from "react";
import type { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { DateRangePicker } from "./date-range-picker";
import { DestinationInput } from "./destination-input";
import { GuestSelector, type GuestCounts } from "./guest-selector";

export interface BookingSearchBarProps {
  className?: string;
  onSearch?: (params: {
    destination?: string;
    dateRange?: DateRange;
    guests?: GuestCounts;
  }) => void;
}

export function BookingSearchBar({ className, onSearch }: BookingSearchBarProps) {
  const [destination, setDestination] = useState<string>();
  const [dateRange, setDateRange] = useState<DateRange>();
  const [guests, setGuests] = useState<GuestCounts>({ adults: 2, children: 0, rooms: 1 });

  return (
    <div
      className={cn(
        "grid gap-2 rounded-2xl border bg-card p-2 shadow-sm md:grid-cols-[1.4fr_1.2fr_1.2fr_auto] md:items-center",
        className,
      )}
    >
      <DestinationInput value={destination} onChange={(v) => setDestination(v)} />
      <DateRangePicker value={dateRange} onChange={setDateRange} />
      <GuestSelector value={guests} onChange={setGuests} />
      <Button
        className="h-9 md:px-8"
        onClick={() => onSearch?.({ destination, dateRange, guests })}
      >
        Search
      </Button>
    </div>
  );
}
