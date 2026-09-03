"use client";

import { Minus, Plus } from "@phosphor-icons/react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export interface QuantityStepperProps {
  value?: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
  label?: string;
  className?: string;
}

export function QuantityStepper({
  value: controlled,
  onChange,
  min = 1,
  max = 9,
  label = "Quantity",
  className,
}: QuantityStepperProps) {
  const [internal, setInternal] = useState(min);
  const value = controlled ?? internal;

  const update = (next: number) => {
    const clamped = Math.min(max, Math.max(min, next));
    setInternal(clamped);
    onChange?.(clamped);
  };

  return (
    <div className={cn("flex items-center justify-between gap-4", className)}>
      <Label className="text-sm font-medium normal-case">{label}</Label>
      <div className="flex items-center gap-2">
        <Button
          type="button"
          variant="outline"
          size="icon-sm"
          disabled={value <= min}
          onClick={() => update(value - 1)}
          aria-label={`Decrease ${label}`}
        >
          <Minus size={14} />
        </Button>
        <span className="w-6 text-center text-sm tabular-nums" aria-live="polite">
          {value}
        </span>
        <Button
          type="button"
          variant="outline"
          size="icon-sm"
          disabled={value >= max}
          onClick={() => update(value + 1)}
          aria-label={`Increase ${label}`}
        >
          <Plus size={14} />
        </Button>
      </div>
    </div>
  );
}
