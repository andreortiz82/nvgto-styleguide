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
import { PriceRangeSlider } from "./price-range-slider";

export interface FilterSheetProps {
  trigger?: React.ReactNode;
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
  amenities = defaultAmenities,
  selectedAmenities = [],
  onAmenityChange,
  onApply,
  onClear,
  className,
}: FilterSheetProps) {
  return (
    <Sheet>
      <SheetTrigger>{trigger ?? <Button variant="outline">Filters</Button>}</SheetTrigger>
      <SheetContent className={cn("overflow-y-auto", className)}>
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
        </SheetHeader>
        <div className="space-y-6 px-4">
          <PriceRangeSlider min={50} max={800} />
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
