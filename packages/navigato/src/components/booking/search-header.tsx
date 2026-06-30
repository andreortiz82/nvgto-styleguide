"use client";

import { PencilSimple } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { PriceRangeSlider } from "./price-range-slider";
import { StarRating } from "./star-rating";

export interface SearchHeaderProps {
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
  className,
}: SearchHeaderProps) {
  return (
    <header className={cn("border-b bg-background shadow-sm", className)}>
      <div className="flex flex-wrap items-center gap-4 px-4 py-3">
        <div className="flex items-center gap-2 shrink-0">
          {typeof logo === "string" ? (
            <>
              <span
                className="inline-flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground"
                aria-hidden
              >
                <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                </svg>
              </span>
              <span className="nvg-font-heading text-lg font-bold tracking-tight text-foreground">
                {logo}
              </span>
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
        <div className="hidden min-w-[12rem] flex-1 md:block">
          <PriceRangeSlider min={50} max={800} />
        </div>
        <div className="hidden flex-col md:flex">
          <span className="text-xs text-muted-foreground">Min rating</span>
          <StarRating value={rating} onChange={onRatingChange} size="sm" />
        </div>
        <Button variant="outline" size="sm" className="ml-auto md:hidden">
          Filters
        </Button>
      </div>
    </header>
  );
}
