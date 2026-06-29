"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface SortOption {
  label: string;
  value: string;
}

export interface SortSelectProps {
  value?: string;
  onChange?: (value: string) => void;
  options?: SortOption[];
  className?: string;
}

const defaultOptions: SortOption[] = [
  { label: "Recommended", value: "recommended" },
  { label: "Price: low to high", value: "price-asc" },
  { label: "Price: high to low", value: "price-desc" },
  { label: "Guest rating", value: "rating" },
  { label: "Distance", value: "distance" },
];

export function SortSelect({
  value = "recommended",
  onChange,
  options = defaultOptions,
  className,
}: SortSelectProps) {
  return (
    <Select value={value} onValueChange={(v) => onChange?.(v ?? value)}>
      <SelectTrigger className={className}>
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
