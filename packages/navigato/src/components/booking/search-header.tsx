"use client";

import { PencilSimple } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { GlobeMark } from "@/components/marks";
import { PriceRangeSlider, type PriceRangeSliderProps } from "./price-range-slider";
import { StarRating } from "./star-rating";

export interface SearchHeaderProps extends Pick<
  PriceRangeSliderProps,
  "min" | "max" | "value" | "onChange"
> {
  logo?: React.ReactNode;
  destination: string;
  tripSummary: string;
  onEditTrip?: () => void;
  rating?: number;
  onRatingChange?: (value: number) => void;
  className?: string;
}

export function SearchHeader({
  logo = "Navigato",
  destination,
  tripSummary,
  onEditTrip,
  rating = 0,
  onRatingChange,
  min = 50,
  max = 800,
  value,
  onChange,
  className,
}: SearchHeaderProps) {
  return (
    <header className={cn("border-b bg-background shadow-sm", className)}>
      <div className="flex flex-wrap items-center gap-4 px-4 py-3">
        <div className="flex items-center gap-2 shrink-0">
          {typeof logo === "string" ? (
            <>
              <span className="inline-flex size-8 items-center justify-center text-foreground" aria-hidden>
                <GlobeMark />
              </span>
              <span className="nvg-wordmark text-sm text-foreground">{logo}</span>
            </>
          ) : (
            logo
          )}
        </div>
        <button
          type="button"
          onClick={onEditTrip}
          className="min-w-[10rem] text-left"
        >
          <span className="flex items-center gap-2 font-semibold">
            {destination}
            <PencilSimple size={14} className="text-primary" />
          </span>
          <span className="text-sm text-muted-foreground">{tripSummary}</span>
        </button>
        <div className="min-w-[12rem] flex-1 max-md:hidden">
          <PriceRangeSlider min={min} max={max} value={value} onChange={onChange} />
        </div>
        <div className="flex flex-col max-md:!hidden">
          <span className="text-xs text-muted-foreground">Min rating</span>
          <StarRating value={rating} onChange={onRatingChange} size="sm" />
        </div>
        <Button variant="outline" size="sm" className="ml-auto md:!hidden">
          Filters
        </Button>
      </div>
    </header>
  );
}
