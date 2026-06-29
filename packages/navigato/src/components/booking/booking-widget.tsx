"use client";

import { useState } from "react";
import type { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { DateRangePicker } from "./date-range-picker";
import { GuestSelector, type GuestCounts } from "./guest-selector";
import { PriceBreakdown } from "./price-breakdown";

export interface BookingWidgetProps {
  pricePerNight: number;
  currency?: string;
  cleaningFee?: number;
  serviceFee?: number;
  taxes?: number;
  className?: string;
  onReserve?: () => void;
}

export function BookingWidget({
  pricePerNight,
  currency = "$",
  cleaningFee = 75,
  serviceFee = 120,
  taxes = 98,
  className,
  onReserve,
}: BookingWidgetProps) {
  const [dateRange, setDateRange] = useState<DateRange>();
  const [guests, setGuests] = useState<GuestCounts>({ adults: 2, children: 0, rooms: 1 });
  const nights = dateRange?.from && dateRange?.to
    ? Math.max(1, Math.ceil((dateRange.to.getTime() - dateRange.from.getTime()) / 86400000))
    : 3;

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
        <PriceBreakdown
          lineItems={[
            { label: `${currency}${pricePerNight} × ${nights} nights`, amount: pricePerNight * nights },
            { label: "Cleaning fee", amount: cleaningFee },
            { label: "Service fee", amount: serviceFee },
          ]}
          taxes={taxes}
          currency={currency}
        />
      </CardContent>
      <CardFooter>
        <Button className="w-full" size="lg" onClick={onReserve}>
          Reserve
        </Button>
      </CardFooter>
    </Card>
  );
}
