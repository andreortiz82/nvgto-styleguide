import { Heart } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

export interface MapPriceMarkerProps {
  price: string;
  saved?: boolean;
  selected?: boolean;
  onClick?: () => void;
  className?: string;
}

export function MapPriceMarker({
  price,
  saved = false,
  selected = false,
  onClick,
  className,
}: MapPriceMarkerProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "relative inline-flex items-center gap-1 rounded-lg px-2 py-1 text-sm font-bold text-primary-foreground shadow-md transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        selected ? "bg-foreground" : "bg-primary",
        "after:absolute after:bottom-[-6px] after:left-1/2 after:-translate-x-1/2 after:border-[6px] after:border-x-transparent after:border-b-transparent",
        selected ? "after:border-t-foreground" : "after:border-t-primary",
        className,
      )}
    >
      {saved ? <Heart size={12} weight="fill" aria-hidden /> : null}
      {price}
    </button>
  );
}
