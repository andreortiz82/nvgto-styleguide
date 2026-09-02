"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export interface PhotoGalleryProps {
  images: string[];
  title?: string;
  className?: string;
}

export function PhotoGallery({ images, title = "Gallery", className }: PhotoGalleryProps) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const primary = images[0];
  const secondary = images.slice(1, 5);

  if (!primary) return null;

  const openAt = (index: number) => {
    setActive(index);
    setOpen(true);
  };

  const altFor = (index: number) => `${title}, photo ${index + 1} of ${images.length}`;

  return (
    <div className={cn("space-y-2", className)}>
      <div className="grid gap-2 md:grid-cols-4 md:grid-rows-2 md:h-80">
        <button
          type="button"
          className="relative overflow-hidden rounded-xl md:col-span-2 md:row-span-2"
          onClick={() => openAt(0)}
        >
          <img src={primary} alt={altFor(0)} className="h-full w-full object-cover" />
          <span className="absolute bottom-3 left-3 rounded-lg bg-background/90 px-3 py-1.5 text-sm font-medium shadow-sm">
            Show all {images.length} photos
          </span>
        </button>
        {secondary.map((img, i) => (
          <button
            key={img}
            type="button"
            className="relative hidden overflow-hidden rounded-xl md:block"
            onClick={() => openAt(i + 1)}
          >
            <img src={img} alt={altFor(i + 1)} className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
      <Dialog open={open} onOpenChange={(next) => setOpen(next)}>
        <DialogContent className="max-w-4xl p-2">
          <DialogTitle className="sr-only">{title}</DialogTitle>
          <img
            src={images[active]}
            alt={altFor(active)}
            className="max-h-[70vh] w-full rounded-lg object-contain"
          />
          <div className="flex gap-2 overflow-x-auto pt-2">
            {images.map((img, i) => (
              <button key={img} type="button" onClick={() => setActive(i)}>
                <img
                  src={img}
                  alt={altFor(i)}
                  className={cn(
                    "h-16 w-20 rounded-md object-cover ring-2 ring-transparent",
                    i === active && "ring-primary",
                  )}
                />
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
