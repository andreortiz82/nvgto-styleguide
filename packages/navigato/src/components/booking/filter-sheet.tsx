"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { PriceRangeSlider, type PriceRangeSliderProps } from "./price-range-slider";

export interface FilterSheetProps extends Pick<
  PriceRangeSliderProps,
  "min" | "max" | "value" | "onChange"
> {
  trigger?: React.ReactNode;
  /** Controlled open. Pair with onOpenChange. FilterBar.onOpenSheet should set this true. */
  open?: boolean;
  /** Uncontrolled initial open. Ignored when `open` is passed. */
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  amenities?: string[];
  selectedAmenities?: string[];
  onAmenityChange?: (amenity: string, checked: boolean) => void;
  onApply?: () => void;
  onClear?: () => void;
  className?: string;
}

const defaultAmenities = [
  "Free WiFi",
  "Pool",
  "Parking",
  "Breakfast included",
  "Pet friendly",
  "Air conditioning",
];

export function FilterSheet({
  trigger,
  open,
  defaultOpen,
  onOpenChange,
  amenities = defaultAmenities,
  selectedAmenities = [],
  onAmenityChange,
  onApply,
  onClear,
  min = 50,
  max = 800,
  value,
  onChange,
  className,
}: FilterSheetProps) {
  const triggerNode = trigger === undefined ? <Button variant="outline">Filters</Button> : trigger;

  return (
    <Sheet
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
    >
      {triggerNode ? <SheetTrigger>{triggerNode}</SheetTrigger> : null}
      <SheetContent className={cn("overflow-y-auto", className)}>
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
        </SheetHeader>
        <div className="space-y-6 px-4">
          <PriceRangeSlider min={min} max={max} value={value} onChange={onChange} />
          <div className="space-y-3">
            <Label className="normal-case font-semibold">Amenities</Label>
            {amenities.map((amenity) => (
              <label key={amenity} className="flex items-center gap-2 text-sm">
                <Checkbox
                  checked={selectedAmenities.includes(amenity)}
                  onCheckedChange={(checked) =>
                    onAmenityChange?.(amenity, checked === true)
                  }
                />
                {amenity}
              </label>
            ))}
          </div>
        </div>
        <SheetFooter className="flex-row gap-2">
          <Button variant="outline" className="flex-1" onClick={onClear}>
            Clear
          </Button>
          <Button className="flex-1" onClick={onApply}>
            Show results
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
