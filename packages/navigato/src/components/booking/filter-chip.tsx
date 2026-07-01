import { X } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export interface FilterChipProps {
  label: string;
  active?: boolean;
  onToggle?: () => void;
  onRemove?: () => void;
  className?: string;
}

export function FilterChip({
  label,
  active = false,
  onToggle,
  onRemove,
  className,
}: FilterChipProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={cn("inline-flex", className)}
    >
      <Badge
        variant={active ? "default" : "outline"}
        className="cursor-pointer gap-1 pr-1.5 transition-colors duration-150"
      >
        {label}
        {active && onRemove ? (
          <span
            role="button"
            tabIndex={0}
            className="rounded-full p-0.5 hover:bg-primary-foreground/20"
            onClick={(e) => {
              e.stopPropagation();
              onRemove();
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.stopPropagation();
                onRemove();
              }
            }}
            aria-label={`Remove ${label}`}
          >
            <X size={12} />
          </span>
        ) : null}
      </Badge>
    </button>
  );
}
