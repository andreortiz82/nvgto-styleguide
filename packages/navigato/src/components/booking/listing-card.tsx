"use client";

import { Heart } from "@phosphor-icons/react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { StarRating } from "./star-rating";

export interface ListingCardProps {
  title: string;
  location?: string;
  pricePerNight: number;
  currency?: string;
  rating?: number;
  reviewCount?: number;
  imageUrl: string;
  images?: string[];
  badge?: string;
  saved?: boolean;
  /** Unavailable for the searched dates. Not expressible as a Badge alone. */
  soldOut?: boolean;
  onSave?: (saved: boolean) => void;
  onClick?: () => void;
  className?: string;
}

export function ListingCard({
  title,
  location,
  pricePerNight,
  currency = "$",
  rating = 4.8,
  reviewCount = 120,
  imageUrl,
  images = [],
  badge,
  saved: savedProp,
  soldOut = false,
  onSave,
  onClick,
  className,
}: ListingCardProps) {
  const [saved, setSaved] = useState(savedProp ?? false);
  const gallery = images.length ? images : [imageUrl];
  const [activeImage, setActiveImage] = useState(0);
  const statusLabel = soldOut ? "Sold out" : badge;

  return (
    <Card
      className={cn(
        "group overflow-hidden p-0 ring-0 transition-[box-shadow,transform] duration-200 ease-out",
        soldOut ? "cursor-default" : "cursor-pointer hover:shadow-lg",
        className,
      )}
      onClick={soldOut ? undefined : onClick}
      aria-disabled={soldOut || undefined}
      data-sold-out={soldOut || undefined}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={gallery[activeImage]}
          alt={title}
          className={cn(
            "h-full w-full object-cover transition-transform duration-200 ease-out",
            soldOut ? "opacity-60" : "group-hover:scale-[1.02]",
          )}
        />
        {statusLabel ? (
          <Badge
            variant={soldOut ? "secondary" : "default"}
            className="absolute left-3 top-3"
          >
            {statusLabel}
          </Badge>
        ) : null}
        <Button
          type="button"
          variant="secondary"
          size="icon-sm"
          className="absolute right-3 top-3 rounded-full bg-background/90"
          onClick={(e) => {
            e.stopPropagation();
            const next = !saved;
            setSaved(next);
            onSave?.(next);
          }}
          aria-label={saved ? "Remove from saved" : "Save listing"}
          aria-pressed={saved}
        >
          <Heart size={16} weight={saved ? "fill" : "regular"} className={saved ? "text-primary" : ""} />
        </Button>
        {gallery.length > 1 ? (
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1">
            {gallery.map((_, i) => (
              <button
                key={i}
                type="button"
                className={cn(
                  "h-1.5 w-1.5 rounded-full bg-primary-foreground/70 transition-all",
                  i === activeImage && "w-3 bg-primary-foreground",
                )}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImage(i);
                }}
                aria-label={`Photo ${i + 1}`}
              />
            ))}
          </div>
        ) : null}
      </div>
      <div className="space-y-1 p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-semibold leading-snug">{title}</h3>
            {location ? (
              <p className="text-sm text-muted-foreground">{location}</p>
            ) : null}
          </div>
          <StarRating value={rating} readOnly size="sm" showValue reviewCount={reviewCount} />
        </div>
        {soldOut ? (
          <p className="pt-1 text-sm font-medium text-muted-foreground">Sold out</p>
        ) : (
          <p className="pt-1">
            <span className="font-bold tabular-nums">
              {currency}
              {pricePerNight}
            </span>
            <span className="text-muted-foreground"> / night</span>
          </p>
        )}
      </div>
    </Card>
  );
}
