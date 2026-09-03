"use client";

import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { ProductBadge, type ProductBadgeTone } from "./product-badge";
import { ProductPrice } from "./product-price";
import { WishlistButton } from "./wishlist-button";

export interface ProductCardProps {
  title: string;
  imageUrl: string;
  price: number;
  currency?: string;
  compareAt?: number;
  badge?: string;
  badgeTone?: ProductBadgeTone;
  saved?: boolean;
  soldOut?: boolean;
  onSave?: (saved: boolean) => void;
  onClick?: () => void;
  className?: string;
}

export function ProductCard({
  title,
  imageUrl,
  price,
  currency = "$",
  compareAt,
  badge,
  badgeTone,
  saved,
  soldOut = false,
  onSave,
  onClick,
  className,
}: ProductCardProps) {
  const status = soldOut ? "Sold out" : badge;
  const tone: ProductBadgeTone = soldOut ? "sold-out" : (badgeTone ?? "default");

  return (
    <Card
      className={cn(
        "group overflow-hidden p-0 ring-0 shadow-sm transition-[box-shadow,transform] duration-200 ease-out",
        soldOut ? "cursor-default" : "cursor-pointer hover:shadow-lg",
        className,
      )}
      onClick={soldOut ? undefined : onClick}
      aria-disabled={soldOut || undefined}
      data-sold-out={soldOut || undefined}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className={cn(
            "h-full w-full object-cover transition-transform duration-200 ease-out",
            soldOut ? "opacity-60" : "group-hover:scale-[1.02]",
          )}
        />
        {status ? (
          <ProductBadge tone={tone} className="absolute left-3 top-3">
            {status}
          </ProductBadge>
        ) : null}
        <WishlistButton
          saved={saved}
          onChange={onSave}
          className="absolute right-3 top-3"
        />
      </div>
      <div className="space-y-1 p-4">
        <h3 className="font-semibold leading-snug m-0">{title}</h3>
        {soldOut ? (
          <p className="pt-1 text-sm font-medium text-muted-foreground m-0">Sold out</p>
        ) : (
          <ProductPrice amount={price} currency={currency} compareAt={compareAt} className="pt-1" />
        )}
      </div>
    </Card>
  );
}
