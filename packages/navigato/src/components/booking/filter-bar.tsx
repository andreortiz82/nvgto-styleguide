"use client";

import { SlidersHorizontal } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FilterChip } from "./filter-chip";
import { SortSelect } from "./sort-select";

export interface FilterBarProps {
  filters?: { id: string; label: string; active?: boolean }[];
  onFilterToggle?: (id: string) => void;
  sortValue?: string;
  onSortChange?: (value: string) => void;
  onOpenSheet?: () => void;
  resultCount?: number;
  className?: string;
}

export function FilterBar({
  filters = [],
  onFilterToggle,
  sortValue,
  onSortChange,
  onOpenSheet,
  resultCount,
  className,
}: FilterBarProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      {resultCount !== undefined ? (
        <p className="text-sm text-muted-foreground">{resultCount} stays</p>
      ) : null}
      <div className="flex flex-1 flex-wrap gap-2">
        {filters.map((filter) => (
          <FilterChip
            key={filter.id}
            label={filter.label}
            active={filter.active}
            onToggle={() => onFilterToggle?.(filter.id)}
            onRemove={() => onFilterToggle?.(filter.id)}
          />
        ))}
      </div>
      <SortSelect value={sortValue} onChange={onSortChange} className="w-44" />
      {onOpenSheet ? (
        <Button variant="outline" size="sm" onClick={onOpenSheet}>
          <SlidersHorizontal size={16} className="mr-1" />
          Filters
        </Button>
      ) : null}
    </div>
  );
}
