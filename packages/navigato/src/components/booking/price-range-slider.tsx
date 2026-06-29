"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export interface PriceRangeSliderProps {
  min?: number;
  max?: number;
  value?: [number, number];
  onChange?: (value: [number, number]) => void;
  formatValue?: (value: number) => string;
  label?: string;
  className?: string;
}

export function PriceRangeSlider({
  min = 0,
  max = 1000,
  value: controlled,
  onChange,
  formatValue = (v) => `$${v}`,
  label = "Price range",
  className,
}: PriceRangeSliderProps) {
  const [internal, setInternal] = useState<[number, number]>([min, Math.round(max * 0.5)]);
  const value = controlled ?? internal;

  return (
    <div className={cn("space-y-3", className)}>
      <div className="flex items-center justify-between">
        <Label className="normal-case">{label}</Label>
        <span className="text-sm font-semibold tabular-nums">
          {formatValue(value[0])} – {formatValue(value[1])}
        </span>
      </div>
      <Slider
        min={min}
        max={max}
        step={10}
        value={value}
        onValueChange={(next) => {
          const range = next as [number, number];
          setInternal(range);
          onChange?.(range);
        }}
      />
    </div>
  );
}
