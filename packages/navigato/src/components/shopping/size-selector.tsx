"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export interface SizeSelectorProps {
  sizes?: string[];
  value?: string;
  onChange?: (size: string) => void;
  unavailable?: string[];
  className?: string;
  name?: string;
}

const DEFAULT_SIZES = ["XS", "S", "M", "L", "XL"];

export function SizeSelector({
  sizes = DEFAULT_SIZES,
  value,
  onChange,
  unavailable = [],
  className,
  name = "size",
}: SizeSelectorProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <p className="nvg-uppercase text-muted-foreground m-0" id={`${name}-label`}>
        Size
      </p>
      <div
        role="radiogroup"
        aria-labelledby={`${name}-label`}
        className="flex flex-wrap gap-2"
      >
        {sizes.map((size) => {
          const disabled = unavailable.includes(size);
          const selected = value === size;
          return (
            <Button
              key={size}
              type="button"
              role="radio"
              aria-checked={selected}
              aria-disabled={disabled || undefined}
              disabled={disabled}
              size="sm"
              variant={selected ? "default" : "outline"}
              className="min-w-10"
              onClick={() => {
                if (disabled) return;
                onChange?.(size);
              }}
            >
              {size}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
