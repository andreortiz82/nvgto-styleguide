import { Star } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

export interface StarRatingProps {
  value?: number;
  max?: number;
  onChange?: (value: number) => void;
  size?: "sm" | "md" | "lg";
  showValue?: boolean;
  reviewCount?: number;
  readOnly?: boolean;
  className?: string;
}

const sizes = { sm: 14, md: 18, lg: 24 };

export function StarRating({
  value = 0,
  max = 5,
  onChange,
  size = "md",
  showValue = false,
  reviewCount,
  readOnly = false,
  className,
}: StarRatingProps) {
  const iconSize = sizes[size];

  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      <div className="flex" role={readOnly ? "img" : "group"} aria-label={`${value} out of ${max} stars`}>
        {Array.from({ length: max }, (_, i) => {
          const star = i + 1;
          const filled = star <= Math.round(value);
          return (
            <button
              key={star}
              type="button"
              disabled={readOnly}
              aria-label={`${star} stars`}
              className={cn(
                "border-none bg-transparent p-0",
                readOnly ? "cursor-default" : "cursor-pointer",
              )}
              onClick={() => onChange?.(star)}
            >
              <Star
                size={iconSize}
                weight={filled ? "fill" : "regular"}
                className={filled ? "text-primary" : "text-muted-foreground/40"}
              />
            </button>
          );
        })}
      </div>
      {showValue ? (
        <span className="text-sm font-semibold tabular-nums">{value.toFixed(1)}</span>
      ) : null}
      {reviewCount !== undefined ? (
        <span className="text-sm text-muted-foreground">({reviewCount})</span>
      ) : null}
    </div>
  );
}
