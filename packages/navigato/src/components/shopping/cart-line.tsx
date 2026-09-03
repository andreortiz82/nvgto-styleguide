"use client";

import { X } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ProductPrice } from "./product-price";
import { QuantityStepper } from "./quantity-stepper";

export interface CartLineItem {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
  currency?: string;
  size?: string;
  color?: string;
  quantity: number;
}

export interface CartLineProps extends CartLineItem {
  onQuantityChange?: (quantity: number) => void;
  onRemove?: () => void;
  className?: string;
}

export function CartLine({
  title,
  imageUrl,
  price,
  currency = "$",
  size,
  color,
  quantity,
  onQuantityChange,
  onRemove,
  className,
}: CartLineProps) {
  const meta = [size, color].filter(Boolean).join(" · ");

  return (
    <div className={cn("flex gap-3 border-b border-border py-4 last:border-b-0", className)}>
      <img src={imageUrl} alt="" className="size-20 shrink-0 object-cover" />
      <div className="min-w-0 flex-1 space-y-2">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="m-0 text-sm font-medium leading-snug">{title}</p>
            {meta ? <p className="m-0 mt-0.5 text-xs text-muted-foreground">{meta}</p> : null}
          </div>
          {onRemove ? (
            <Button type="button" variant="ghost" size="icon-sm" onClick={onRemove} aria-label={`Remove ${title}`}>
              <X size={14} />
            </Button>
          ) : null}
        </div>
        <div className="flex items-center justify-between gap-3">
          <QuantityStepper
            value={quantity}
            onChange={onQuantityChange}
            label="Qty"
            className="flex-1"
          />
          <ProductPrice amount={price * quantity} currency={currency} className="text-sm" />
        </div>
      </div>
    </div>
  );
}
