"use client";

import { Minus, Plus, Users } from "@phosphor-icons/react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";

export interface GuestCounts {
  adults: number;
  children: number;
  rooms: number;
}

export interface GuestSelectorProps {
  value?: GuestCounts;
  onChange?: (value: GuestCounts) => void;
  className?: string;
  maxAdults?: number;
  maxChildren?: number;
  maxRooms?: number;
}

const defaultCounts: GuestCounts = { adults: 2, children: 0, rooms: 1 };

function StepperRow({
  label,
  description,
  value,
  onDecrement,
  onIncrement,
  min = 0,
  max = 16,
}: {
  label: string;
  description?: string;
  value: number;
  onDecrement: () => void;
  onIncrement: () => void;
  min?: number;
  max?: number;
}) {
  return (
    <div className="flex items-center justify-between gap-4 py-2">
      <div>
        <Label className="text-sm font-medium normal-case">{label}</Label>
        {description ? (
          <p className="text-xs text-muted-foreground">{description}</p>
        ) : null}
      </div>
      <div className="flex items-center gap-2">
        <Button
          type="button"
          variant="outline"
          size="icon-sm"
          disabled={value <= min}
          onClick={onDecrement}
          aria-label={`Decrease ${label}`}
        >
          <Minus size={14} />
        </Button>
        <span className="w-6 text-center text-sm tabular-nums">{value}</span>
        <Button
          type="button"
          variant="outline"
          size="icon-sm"
          disabled={value >= max}
          onClick={onIncrement}
          aria-label={`Increase ${label}`}
        >
          <Plus size={14} />
        </Button>
      </div>
    </div>
  );
}

export function GuestSelector({
  value: controlled,
  onChange,
  className,
  maxAdults = 16,
  maxChildren = 10,
  maxRooms = 8,
}: GuestSelectorProps) {
  const [internal, setInternal] = useState(defaultCounts);
  const value = controlled ?? internal;

  const update = (next: GuestCounts) => {
    setInternal(next);
    onChange?.(next);
  };

  const summary = `${value.adults} adult${value.adults !== 1 ? "s" : ""}${
    value.children ? `, ${value.children} child${value.children !== 1 ? "ren" : ""}` : ""
  }, ${value.rooms} room${value.rooms !== 1 ? "s" : ""}`;

  return (
    <Popover>
      <PopoverTrigger
        render={
          <Button
            variant="outline"
            className={cn("w-full justify-start font-normal", className)}
          />
        }
      >
        <Users size={16} className="mr-2 shrink-0" />
        {summary}
      </PopoverTrigger>
      <PopoverContent className="w-80" align="start">
        <StepperRow
          label="Adults"
          description="Ages 13+"
          value={value.adults}
          min={1}
          max={maxAdults}
          onDecrement={() => update({ ...value, adults: value.adults - 1 })}
          onIncrement={() => update({ ...value, adults: value.adults + 1 })}
        />
        <Separator />
        <StepperRow
          label="Children"
          description="Ages 0–12"
          value={value.children}
          max={maxChildren}
          onDecrement={() => update({ ...value, children: value.children - 1 })}
          onIncrement={() => update({ ...value, children: value.children + 1 })}
        />
        <Separator />
        <StepperRow
          label="Rooms"
          value={value.rooms}
          min={1}
          max={maxRooms}
          onDecrement={() => update({ ...value, rooms: value.rooms - 1 })}
          onIncrement={() => update({ ...value, rooms: value.rooms + 1 })}
        />
      </PopoverContent>
    </Popover>
  );
}
