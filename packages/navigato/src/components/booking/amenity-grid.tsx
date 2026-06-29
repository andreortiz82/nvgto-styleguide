import {
  Coffee,
  CookingPot,
  Park,
  Snowflake,
  WifiHigh,
  type Icon,
} from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

export interface Amenity {
  id: string;
  label: string;
  icon?: Icon;
}

export interface AmenityGridProps {
  amenities?: Amenity[];
  columns?: 2 | 3 | 4;
  className?: string;
}

const defaultAmenities: Amenity[] = [
  { id: "wifi", label: "WiFi", icon: WifiHigh },
  { id: "kitchen", label: "Kitchen", icon: CookingPot },
  { id: "ac", label: "Air conditioning", icon: Snowflake },
  { id: "coffee", label: "Coffee maker", icon: Coffee },
  { id: "parking", label: "Free parking", icon: Park },
];

export function AmenityGrid({
  amenities = defaultAmenities,
  columns = 2,
  className,
}: AmenityGridProps) {
  return (
    <ul
      className={cn(
        "grid gap-3",
        columns === 2 && "grid-cols-2",
        columns === 3 && "grid-cols-3",
        columns === 4 && "grid-cols-2 md:grid-cols-4",
        className,
      )}
    >
      {amenities.map(({ id, label, icon: IconComp }) => (
        <li key={id} className="flex items-center gap-2 text-sm">
          {IconComp ? <IconComp size={20} className="shrink-0 text-muted-foreground" /> : null}
          {label}
        </li>
      ))}
    </ul>
  );
}
