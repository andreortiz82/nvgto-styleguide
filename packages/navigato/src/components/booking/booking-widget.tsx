"use client";

import { useEffect, useId, useState } from "react";
import { differenceInCalendarDays } from "date-fns";
import type { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { DateRangePicker } from "./date-range-picker";
import { GuestSelector, type GuestCounts } from "./guest-selector";
import { PriceBreakdown } from "./price-breakdown";

export interface BookingStay {
  nights: number;
  from: Date;
  to: Date;
  guests: GuestCounts;
}

export interface BookingWidgetProps {
  pricePerNight: number;
  currency?: string;
  cleaningFee?: number;
  serviceFee?: number;
  taxes?: number;
  /** Controlled stay dates. Empty or partial range is valid — nights are never invented. */
  dateRange?: DateRange;
  defaultDateRange?: DateRange;
  onDateRangeChange?: (range: DateRange | undefined) => void;
  guests?: GuestCounts;
  onGuestsChange?: (value: GuestCounts) => void;
  /** Consumer-owned availability. The widget does not invent sold-out from the calendar. */
  soldOut?: boolean;
  className?: string;
  onReserve?: (stay: BookingStay) => void;
}

const defaultGuests: GuestCounts = { adults: 2, children: 0, rooms: 1 };

function nightsFromRange(range?: DateRange): number | null {
  if (!range?.from || !range?.to) return null;
  const nights = differenceInCalendarDays(range.to, range.from);
  return nights >= 1 ? nights : null;
}

function reserveBlockReason(
  range: DateRange | undefined,
  nights: number | null,
  soldOut: boolean,
): string | null {
  if (soldOut) {
    return nights
      ? "These dates are sold out. Pick different dates or another stay."
      : "This stay is sold out.";
  }
  if (!range?.from && !range?.to) {
    return "Select check-in and check-out to reserve.";
  }
  if (!range?.from || !range?.to || nights === null) {
    return "Choose a check-out date after check-in to reserve.";
  }
  return null;
}

export function BookingWidget({
  pricePerNight,
  currency = "$",
  cleaningFee = 75,
  serviceFee = 120,
  taxes = 98,
  dateRange: dateRangeProp,
  defaultDateRange,
  onDateRangeChange,
  guests: guestsProp,
  onGuestsChange,
  soldOut = false,
  className,
  onReserve,
}: BookingWidgetProps) {
  const hintId = useId();
  const [uncontrolledRange, setUncontrolledRange] = useState<DateRange | undefined>(defaultDateRange);
  const [uncontrolledGuests, setUncontrolledGuests] = useState<GuestCounts>(defaultGuests);
  const [attempted, setAttempted] = useState(false);

  const isRangeControlled = dateRangeProp !== undefined || onDateRangeChange !== undefined;
  const dateRange = isRangeControlled ? dateRangeProp : uncontrolledRange;
  const guests = guestsProp ?? uncontrolledGuests;
  const nights = nightsFromRange(dateRange);
  const blocker = reserveBlockReason(dateRange, nights, soldOut);

  useEffect(() => {
    setAttempted(false);
  }, [dateRange?.from, dateRange?.to, soldOut]);

  const setDateRange = (next: DateRange | undefined) => {
    if (!isRangeControlled) setUncontrolledRange(next);
    onDateRangeChange?.(next);
  };

  const setGuests = (next: GuestCounts) => {
    if (guestsProp === undefined) setUncontrolledGuests(next);
    onGuestsChange?.(next);
  };

  const handleReserve = () => {
    if (blocker || !dateRange?.from || !dateRange?.to || nights === null) {
      setAttempted(true);
      return;
    }
    onReserve?.({ nights, from: dateRange.from, to: dateRange.to, guests });
  };

  return (
    <Card className={cn("sticky top-4 shadow-lg", className)}>
      <CardHeader>
        <CardTitle>
          {currency}
          {pricePerNight}
          <span className="text-base font-normal text-muted-foreground"> / night</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <DateRangePicker value={dateRange} onChange={setDateRange} numberOfMonths={1} />
        <GuestSelector value={guests} onChange={setGuests} />
        <Separator />
        {nights !== null ? (
          <PriceBreakdown
            lineItems={[
              {
                label: `${currency}${pricePerNight} × ${nights} night${nights === 1 ? "" : "s"}`,
                amount: pricePerNight * nights,
              },
              { label: "Cleaning fee", amount: cleaningFee },
              { label: "Service fee", amount: serviceFee },
            ]}
            taxes={taxes}
            currency={currency}
          />
        ) : (
          <p className="text-sm text-muted-foreground m-0" aria-live="polite">
            Select check-in and check-out to see the total.
          </p>
        )}
      </CardContent>
      <CardFooter className="flex-col items-stretch gap-2">
        <p
          id={hintId}
          className={cn(
            "text-sm m-0",
            blocker && attempted ? "text-destructive" : "text-muted-foreground",
          )}
          aria-live="polite"
        >
          {blocker ?? "You won’t be charged yet."}
        </p>
        <Button
          type="button"
          className="w-full"
          size="lg"
          aria-describedby={hintId}
          onClick={handleReserve}
        >
          Reserve
        </Button>
      </CardFooter>
    </Card>
  );
}
