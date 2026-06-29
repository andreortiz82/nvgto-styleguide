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
  onSave,
  onClick,
  className,
}: ListingCardProps) {
  const [saved, setSaved] = useState(savedProp ?? false);
  const gallery = images.length ? images : [imageUrl];
  const [activeImage, setActiveImage] = useState(0);

  return (
    <Card
      className={cn(
        "group cursor-pointer overflow-hidden p-0 ring-0 transition-shadow hover:shadow-lg",
        className,
      )}
      onClick={onClick}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={gallery[activeImage]}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {badge ? (
          <Badge className="absolute left-3 top-3">{badge}</Badge>
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
                  "h-1.5 w-1.5 rounded-full bg-white/60 transition-all",
                  i === activeImage && "w-3 bg-white",
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
        <p className="pt-1">
          <span className="font-bold">
            {currency}
            {pricePerNight}
          </span>
          <span className="text-muted-foreground"> / night</span>
        </p>
      </div>
    </Card>
  );
}
