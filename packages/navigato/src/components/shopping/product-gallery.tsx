"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export interface ProductGalleryProps {
  images: string[];
  title?: string;
  className?: string;
}

export function ProductGallery({ images, title = "Product", className }: ProductGalleryProps) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const primary = images[0];

  if (!primary) return null;

  const altFor = (index: number) => `${title}, view ${index + 1} of ${images.length}`;

  return (
    <div className={cn("space-y-2", className)}>
      <button
        type="button"
        className="relative w-full overflow-hidden bg-muted shadow-sm"
        onClick={() => setOpen(true)}
      >
        <img src={images[active] ?? primary} alt={altFor(active)} className="aspect-[4/5] w-full object-cover" />
        {images.length > 1 ? (
          <span className="absolute bottom-3 left-3 bg-background/90 px-3 py-1.5 text-sm font-medium shadow-sm">
            Show all {images.length} views
          </span>
        ) : null}
      </button>
      {images.length > 1 ? (
        <div className="flex gap-2 overflow-x-auto">
          {images.map((img, i) => (
            <button key={img} type="button" onClick={() => setActive(i)} className="shrink-0">
              <img
                src={img}
                alt={altFor(i)}
                className={cn(
                  "h-16 w-14 object-cover ring-2 ring-transparent",
                  i === active && "ring-primary",
                )}
              />
            </button>
          ))}
        </div>
      ) : null}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl p-2">
          <DialogTitle className="sr-only">{title}</DialogTitle>
          <img
            src={images[active]}
            alt={altFor(active)}
            className="max-h-[70vh] w-full object-contain"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
