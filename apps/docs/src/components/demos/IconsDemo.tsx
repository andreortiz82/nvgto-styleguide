"use client";

import {
  Airplane,
  ArrowSquareOut,
  Bed,
  Boat,
  Buildings,
  CalendarBlank,
  Check,
  CoatHanger,
  Compass,
  Coffee,
  CookingPot,
  Dress,
  Drop,
  Handbag,
  Heart,
  HighHeel,
  List,
  MagnifyingGlass,
  MapPin,
  Minus,
  Moon,
  Package,
  Pants,
  Park,
  PencilSimple,
  Plus,
  ShoppingBag,
  ShoppingCart,
  SlidersHorizontal,
  Sneaker,
  Snowflake,
  Star,
  Suitcase,
  Sun,
  Sunglasses,
  Tag,
  Tote,
  TreePalm,
  TShirt,
  Umbrella,
  Users,
  Watch,
  WifiHigh,
  X,
  type Icon,
} from "@phosphor-icons/react";
import { BrushNMark, DiscMark, GlobeMark, Card, CardContent } from "@navigato/react";

type IconEntry = { name: string; Icon: Icon };

const KIT_ICONS: IconEntry[] = [
  { name: "Heart", Icon: Heart },
  { name: "Minus", Icon: Minus },
  { name: "Plus", Icon: Plus },
  { name: "Users", Icon: Users },
  { name: "MapPin", Icon: MapPin },
  { name: "CalendarBlank", Icon: CalendarBlank },
  { name: "X", Icon: X },
  { name: "SlidersHorizontal", Icon: SlidersHorizontal },
  { name: "Check", Icon: Check },
  { name: "MagnifyingGlass", Icon: MagnifyingGlass },
  { name: "Star", Icon: Star },
  { name: "PencilSimple", Icon: PencilSimple },
  { name: "ArrowSquareOut", Icon: ArrowSquareOut },
  { name: "Coffee", Icon: Coffee },
  { name: "CookingPot", Icon: CookingPot },
  { name: "Park", Icon: Park },
  { name: "Snowflake", Icon: Snowflake },
  { name: "WifiHigh", Icon: WifiHigh },
  { name: "Moon", Icon: Moon },
  { name: "Sun", Icon: Sun },
  { name: "List", Icon: List },
];

const TRAVEL_ICONS: IconEntry[] = [
  { name: "Airplane", Icon: Airplane },
  { name: "Suitcase", Icon: Suitcase },
  { name: "Bed", Icon: Bed },
  { name: "Boat", Icon: Boat },
  { name: "TreePalm", Icon: TreePalm },
  { name: "Umbrella", Icon: Umbrella },
  { name: "Buildings", Icon: Buildings },
  { name: "Compass", Icon: Compass },
];

const SHOPPING_ICONS: IconEntry[] = [
  { name: "ShoppingBag", Icon: ShoppingBag },
  { name: "ShoppingCart", Icon: ShoppingCart },
  { name: "Tote", Icon: Tote },
  { name: "Handbag", Icon: Handbag },
  { name: "TShirt", Icon: TShirt },
  { name: "Pants", Icon: Pants },
  { name: "Dress", Icon: Dress },
  { name: "Sneaker", Icon: Sneaker },
  { name: "HighHeel", Icon: HighHeel },
  { name: "Watch", Icon: Watch },
  { name: "Sunglasses", Icon: Sunglasses },
  { name: "CoatHanger", Icon: CoatHanger },
  { name: "Tag", Icon: Tag },
  { name: "Drop", Icon: Drop },
  { name: "Package", Icon: Package },
];

function IconGrid({ icons }: { icons: IconEntry[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      {icons.map(({ name, Icon }) => (
        <div key={name} className="border border-border bg-card p-3 shadow-sm">
          <div className="flex items-center gap-4">
            <Icon size={24} weight="regular" aria-hidden />
            <Icon size={24} weight="bold" aria-hidden />
          </div>
          <p className="m-0 mt-2 font-mono text-xs">{name}</p>
          <p className="m-0 mt-0.5 text-[0.65rem] text-muted-foreground">regular / bold</p>
        </div>
      ))}
    </div>
  );
}

export function IconsPage() {
  return (
    <div className="not-prose mt-8 space-y-10">
      <Card className="shadow-sm">
        <CardContent className="pt-6 text-sm text-muted-foreground">
          Phosphor is the documented UI icon set. Weights in this kit: regular and bold (fill only
          for saved hearts). Lucide stays inside <code className="text-xs">ui/</code> internals
          (dialog close, calendar chevrons) — do not document it as the kit set. Brand marks are
          original SVG, not Phosphor.
        </CardContent>
      </Card>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold m-0">Used in the kit</h2>
        <p className="text-sm text-muted-foreground m-0">
          Imports from <code className="text-xs">packages/navigato/src/components/booking/</code> and{" "}
          <code className="text-xs">shopping/</code>, plus docs chrome.
        </p>
        <IconGrid icons={KIT_ICONS} />
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold m-0">Travel catalog</h2>
        <IconGrid icons={TRAVEL_ICONS} />
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold m-0">Shopping catalog</h2>
        <IconGrid icons={SHOPPING_ICONS} />
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold m-0">Brand marks — SVG, not Phosphor</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="border border-border bg-card p-5 text-center shadow-sm">
            <GlobeMark className="mx-auto size-12 text-foreground" title="Globe" />
            <p className="m-0 mt-3 font-medium text-sm">GlobeMark</p>
            <p className="m-0 mt-1 text-xs text-muted-foreground">Navigato</p>
          </div>
          <div className="border border-border bg-card p-5 text-center shadow-sm">
            <DiscMark className="mx-auto size-10" title="Disc" />
            <p className="m-0 mt-3 font-medium text-sm">DiscMark</p>
            <p className="m-0 mt-1 text-xs text-muted-foreground">Nox &amp; Vale header</p>
          </div>
          <div className="border border-border bg-card p-5 text-center shadow-sm">
            <BrushNMark className="mx-auto size-12" title="Brush N" />
            <p className="m-0 mt-3 font-medium text-sm">BrushNMark</p>
            <p className="m-0 mt-1 text-xs text-muted-foreground">Nox &amp; Vale signature</p>
          </div>
        </div>
      </section>
    </div>
  );
}
