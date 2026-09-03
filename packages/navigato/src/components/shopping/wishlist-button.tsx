"use client";

import { Heart } from "@phosphor-icons/react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export interface WishlistButtonProps {
  saved?: boolean;
  onChange?: (saved: boolean) => void;
  className?: string;
  label?: string;
}

export function WishlistButton({
  saved: savedProp,
  onChange,
  className,
  label,
}: WishlistButtonProps) {
  const [saved, setSaved] = useState(savedProp ?? false);
  const nextLabel = saved ? "Remove from wishlist" : "Save to wishlist";

  return (
    <Button
      type="button"
      variant="secondary"
      size="icon-sm"
      className={cn("rounded-full bg-background/90", className)}
      onClick={(event) => {
        event.stopPropagation();
        const next = !saved;
        setSaved(next);
        onChange?.(next);
      }}
      aria-label={label ?? nextLabel}
      aria-pressed={saved}
    >
      <Heart size={16} weight={saved ? "fill" : "regular"} className={saved ? "text-primary" : ""} />
    </Button>
  );
}
