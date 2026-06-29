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
        <div className="nvg-font-heading text-xl font-extrabold text-primary">{logo}</div>
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
