"use client";

import { cn } from "@/lib/utils";

export interface ColorOption {
  id: string;
  label: string;
  /** CSS color for the swatch fill. */
  value: string;
}

export interface ColorSwatchProps {
  colors: ColorOption[];
  value?: string;
  onChange?: (id: string) => void;
  className?: string;
  name?: string;
}

export function ColorSwatch({
  colors,
  value,
  onChange,
  className,
  name = "color",
}: ColorSwatchProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <p className="nvg-uppercase text-muted-foreground m-0" id={`${name}-label`}>
        Color
      </p>
      <div
        role="radiogroup"
        aria-labelledby={`${name}-label`}
        className="flex flex-wrap gap-2"
      >
        {colors.map((color) => {
          const selected = value === color.id;
          return (
            <button
              key={color.id}
              type="button"
              role="radio"
              aria-checked={selected}
              aria-label={color.label}
              title={color.label}
              className={cn(
                "size-7 rounded-full border border-border transition-shadow duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                selected ? "shadow-md ring-2 ring-ring ring-offset-2 ring-offset-background" : "hover:shadow-sm",
              )}
              style={{ backgroundColor: color.value }}
              onClick={() => onChange?.(color.id)}
            />
          );
        })}
      </div>
    </div>
  );
}
