import type { ComponentDocMeta } from "./types";

function doc(
  partial: ComponentDocMeta & { usage: string; props: ComponentDocMeta["props"] },
): ComponentDocMeta {
  return partial;
}

export const componentDocs: Record<string, ComponentDocMeta> = {
  button: doc({
    slug: "button",
    tier: "atoms",
    title: "Button",
    description: "shadcn/ui button primitive themed for Navigato.",
    usage: `import { Button } from '@navigato/react'\n\n<Button>Search</Button>\n<Button variant="outline">Filters</Button>`,
    examples: [
      { id: "variants", title: "Variants" },
      { id: "sizes", title: "Sizes" },
      { id: "states", title: "States" },
    ],
    props: [
      { name: "variant", type: "string", default: "default", description: "Visual variant." },
      { name: "size", type: "string", default: "default", description: "Button size." },
      { name: "className", type: "string", description: "Additional classes." },
    ],
  }),
  badge: doc({
    slug: "badge",
    tier: "atoms",
    title: "Badge",
    description: "Compact label for counts and filter states.",
    usage: `import { Badge } from '@navigato/react'\n\n<Badge>Guest favorite</Badge>`,
    props: [{ name: "variant", type: "string", default: "default", description: "Badge style." }],
  }),
  input: doc({
    slug: "input",
    tier: "atoms",
    title: "Input",
    description: "Text input primitive for forms and search fields.",
    usage: `import { Input } from '@navigato/react'\n\n<Input placeholder="Email" />`,
    props: [{ name: "type", type: "string", default: "text", description: "HTML input type." }],
  }),
  skeleton: doc({
    slug: "skeleton",
    tier: "atoms",
    title: "Skeleton",
    description: "Loading placeholder for cards and content.",
    usage: `import { Skeleton } from '@navigato/react'\n\n<Skeleton className="h-4 w-full" />`,
    props: [{ name: "className", type: "string", description: "Size via Tailwind classes." }],
  }),
  "date-range-picker": doc({
    slug: "date-range-picker",
    tier: "molecules",
    title: "DateRangePicker",
    description: "Check-in / check-out picker with calendar popover.",
    usage: `import { DateRangePicker } from '@navigato/react'\n\n<DateRangePicker value={range} onChange={setRange} />`,
    props: [
      { name: "value", type: "DateRange", description: "Selected range." },
      { name: "onChange", type: "(range?) => void", description: "Change handler." },
    ],
  }),
  "guest-selector": doc({
    slug: "guest-selector",
    tier: "molecules",
    title: "GuestSelector",
    description: "Adults, children, and rooms stepper.",
    usage: `import { GuestSelector } from '@navigato/react'\n\n<GuestSelector onChange={setGuests} />`,
    props: [{ name: "value", type: "GuestCounts", description: "Guest counts." }],
  }),
  "destination-input": doc({
    slug: "destination-input",
    tier: "molecules",
    title: "DestinationInput",
    description: "Searchable destination combobox.",
    usage: `import { DestinationInput } from '@navigato/react'\n\n<DestinationInput onChange={setDest} />`,
    props: [{ name: "options", type: "DestinationOption[]", description: "Autocomplete options." }],
  }),
  "star-rating": doc({
    slug: "star-rating",
    tier: "molecules",
    title: "StarRating",
    description: "Display or filter by star rating.",
    usage: `import { StarRating } from '@navigato/react'\n\n<StarRating value={4.5} showValue reviewCount={128} readOnly />`,
    props: [{ name: "value", type: "number", description: "Star value 0–5." }],
  }),
  "price-range-slider": doc({
    slug: "price-range-slider",
    tier: "molecules",
    title: "PriceRangeSlider",
    description: "Dual-thumb nightly price filter.",
    usage: `import { PriceRangeSlider } from '@navigato/react'\n\n<PriceRangeSlider min={50} max={800} />`,
    props: [{ name: "min", type: "number", default: "0", description: "Minimum price." }],
  }),
  "map-price-marker": doc({
    slug: "map-price-marker",
    tier: "molecules",
    title: "MapPriceMarker",
    description: "Map pin showing nightly price.",
    usage: `import { MapPriceMarker } from '@navigato/react'\n\n<MapPriceMarker price="$189" saved />`,
    props: [{ name: "price", type: "string", required: true, description: "Formatted price label." }],
  }),
  "sort-select": doc({
    slug: "sort-select",
    tier: "molecules",
    title: "SortSelect",
    description: "SERP sort dropdown.",
    usage: `import { SortSelect } from '@navigato/react'\n\n<SortSelect value="price-asc" onChange={setSort} />`,
    props: [{ name: "value", type: "string", description: "Selected sort key." }],
  }),
  "booking-search-bar": doc({
    slug: "booking-search-bar",
    tier: "organisms",
    title: "BookingSearchBar",
    description: "Hero search: destination, dates, guests, CTA.",
    usage: `import { BookingSearchBar } from '@navigato/react'\n\n<BookingSearchBar onSearch={handleSearch} />`,
    props: [{ name: "onSearch", type: "function", description: "Search callback." }],
  }),
  "listing-card": doc({
    slug: "listing-card",
    tier: "organisms",
    title: "ListingCard",
    description: "Property card for search results.",
    usage: `import { ListingCard } from '@navigato/react'\n\n<ListingCard title="Loft" pricePerNight={189} imageUrl="..." />`,
    props: [
      { name: "title", type: "string", required: true, description: "Property name." },
      { name: "pricePerNight", type: "number", required: true, description: "Nightly rate." },
    ],
  }),
  "search-header": doc({
    slug: "search-header",
    tier: "organisms",
    title: "SearchHeader",
    description: "SERP sticky header with trip summary and filters.",
    usage: `import { SearchHeader } from '@navigato/react'\n\n<SearchHeader destination="Austin, TX" tripSummary="2 adults" />`,
    props: [{ name: "destination", type: "string", required: true, description: "Trip destination." }],
  }),
  "filter-bar": doc({
    slug: "filter-bar",
    tier: "organisms",
    title: "FilterBar",
    description: "Horizontal filter chips and sort control.",
    usage: `import { FilterBar } from '@navigato/react'\n\n<FilterBar resultCount={248} filters={filters} />`,
    props: [{ name: "filters", type: "Filter[]", description: "Filter chip data." }],
  }),
  "filter-sheet": doc({
    slug: "filter-sheet",
    tier: "organisms",
    title: "FilterSheet",
    description: "Mobile filter sheet with amenities and price.",
    usage: `import { FilterSheet } from '@navigato/react'\n\n<FilterSheet />`,
    props: [{ name: "amenities", type: "string[]", description: "Amenity checklist." }],
  }),
  "booking-widget": doc({
    slug: "booking-widget",
    tier: "organisms",
    title: "BookingWidget",
    description: "PDP sticky reservation widget.",
    usage: `import { BookingWidget } from '@navigato/react'\n\n<BookingWidget pricePerNight={220} />`,
    props: [{ name: "pricePerNight", type: "number", required: true, description: "Nightly rate." }],
  }),
  "price-breakdown": doc({
    slug: "price-breakdown",
    tier: "organisms",
    title: "PriceBreakdown",
    description: "Line items, taxes, and total.",
    usage: `import { PriceBreakdown } from '@navigato/react'\n\n<PriceBreakdown lineItems={items} taxes={98} />`,
    props: [{ name: "lineItems", type: "PriceLineItem[]", required: true, description: "Fee rows." }],
  }),
  "rate-comparison": doc({
    slug: "rate-comparison",
    tier: "organisms",
    title: "RateComparison",
    description: "Compare OTA / provider rates.",
    usage: `import { RateComparison } from '@navigato/react'\n\n<RateComparison items={rates} />`,
    props: [{ name: "items", type: "RateComparisonItem[]", required: true, description: "Provider rows." }],
  }),
  "photo-gallery": doc({
    slug: "photo-gallery",
    tier: "organisms",
    title: "PhotoGallery",
    description: "PDP photo grid with lightbox.",
    usage: `import { PhotoGallery } from '@navigato/react'\n\n<PhotoGallery images={urls} />`,
    props: [{ name: "images", type: "string[]", required: true, description: "Image URLs." }],
  }),
  "amenity-grid": doc({
    slug: "amenity-grid",
    tier: "organisms",
    title: "AmenityGrid",
    description: "Icon grid of property amenities.",
    usage: `import { AmenityGrid } from '@navigato/react'\n\n<AmenityGrid columns={2} />`,
    props: [{ name: "amenities", type: "Amenity[]", description: "Amenity list." }],
  }),
  "review-summary": doc({
    slug: "review-summary",
    tier: "organisms",
    title: "ReviewSummary",
    description: "Average rating, distribution bars, sample reviews.",
    usage: `import { ReviewSummary } from '@navigato/react'\n\n<ReviewSummary average={4.8} totalReviews={268} />`,
    props: [{ name: "average", type: "number", required: true, description: "Average score." }],
  }),
};

export function getDocsByTier(tier: ComponentDocMeta["tier"]) {
  return Object.values(componentDocs).filter((d) => d.tier === tier);
}

export function getSlugsByTier(tier: ComponentDocMeta["tier"]) {
  return getDocsByTier(tier).map((d) => d.slug);
}
