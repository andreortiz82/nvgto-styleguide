"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export interface PhotoGalleryProps {
  images: string[];
  title?: string;
  className?: string;
}

export function PhotoGallery({ images, title = "Gallery", className }: PhotoGalleryProps) {
  const [active, setActive] = useState(0);
  const primary = images[0];
  const secondary = images.slice(1, 5);

  if (!primary) return null;

  return (
    <div className={cn("grid gap-2 md:grid-cols-4 md:grid-rows-2 md:h-80", className)}>
      <Dialog>
        <DialogTrigger
          render={
            <button
              type="button"
              className="relative overflow-hidden rounded-xl md:col-span-2 md:row-span-2"
            />
          }
        >
          <img src={primary} alt={title} className="h-full w-full object-cover" />
        </DialogTrigger>
        <DialogContent className="max-w-4xl p-2">
          <DialogTitle className="sr-only">{title}</DialogTitle>
          <img src={images[active]} alt="" className="max-h-[70vh] w-full rounded-lg object-contain" />
          <div className="flex gap-2 overflow-x-auto pt-2">
            {images.map((img, i) => (
              <button key={img} type="button" onClick={() => setActive(i)}>
                <img
                  src={img}
                  alt=""
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
      {secondary.map((img, i) => (
        <button
          key={img}
          type="button"
          className="hidden overflow-hidden rounded-xl md:block"
          onClick={() => setActive(i + 1)}
        >
          <img src={img} alt="" className="h-full w-full object-cover" />
        </button>
      ))}
    </div>
  );
}
