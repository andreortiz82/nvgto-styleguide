import { useState } from "react";
import {
  BookingSearchBar,
  BookingSteps,
  Button,
  defaultBookingSteps,
  EmptyState,
  FilterBar,
  ListingCard,
  ListingCardSkeleton,
  MapPriceMarker,
  PriceBreakdown,
  SearchHeader,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@navigato/react";
import {
  AmenityGridDefaultDemo,
  BookingWidgetDefaultDemo,
  PhotoGalleryDefaultDemo,
  ReviewSummaryDefaultDemo,
  GALLERY,
  IMG,
} from "../examples/organisms";

type SerpListing = {
  title: string;
  location: string;
  pricePerNight: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  images?: string[];
  badge?: string;
  saved?: boolean;
  soldOut?: boolean;
  mapPrice?: string;
};

const SERP_LISTINGS: SerpListing[] = [
  {
    title: "Navigato Loft",
    location: "South Congress, Austin",
    pricePerNight: 189,
    rating: 4.9,
    reviewCount: 128,
    imageUrl: IMG,
    images: GALLERY,
    badge: "Guest favorite",
    mapPrice: "$189",
  },
  {
    title: "East Side Bungalow",
    location: "East Austin",
    pricePerNight: 142,
    rating: 4.6,
    reviewCount: 87,
    imageUrl: GALLERY[1],
    mapPrice: "$142",
  },
  {
    title: "Hill Country Cabin",
    location: "Dripping Springs",
    pricePerNight: 320,
    rating: 5,
    reviewCount: 18,
    imageUrl: GALLERY[2],
    saved: true,
    mapPrice: "$320",
  },
  {
    title: "Rainey Street Studio",
    location: "Rainey Street, Austin",
    pricePerNight: 210,
    rating: 4.4,
    reviewCount: 61,
    imageUrl: GALLERY[3],
    soldOut: true,
  },
];

const SERP_FILTERS = [
  { id: "wifi", label: "WiFi" },
  { id: "pool", label: "Pool" },
  { id: "breakfast", label: "Breakfast" },
  { id: "parking", label: "Parking" },
];

const SERP_VIEWS = [
  { id: "results", label: "Results" },
  { id: "loading", label: "Loading" },
  { id: "empty", label: "Empty" },
] as const;

type SerpView = (typeof SERP_VIEWS)[number]["id"];

export function SerpPageDemo() {
  const [view, setView] = useState<SerpView>("results");
  const [activeFilters, setActiveFilters] = useState<string[]>(["wifi"]);

  const filters = SERP_FILTERS.map((filter) => ({
    ...filter,
    active: activeFilters.includes(filter.id),
  }));

  const resultCount = view === "empty" ? 0 : view === "loading" ? undefined : SERP_LISTINGS.length;
  const mapMarkers = SERP_LISTINGS.filter((listing) => listing.mapPrice && !listing.soldOut);

  return (
    <div className="space-y-6">
      <SearchHeader
        logo={<span className="nvg-font-heading text-lg font-bold tracking-tight">Navigato</span>}
        destination="Austin, TX"
        tripSummary="Mar 12–15 · 2 adults · 1 room"
        rating={4}
      />
      <BookingSearchBar />
      <FilterBar
        resultCount={resultCount}
        filters={filters}
        onFilterToggle={(id) =>
          setActiveFilters((current) =>
            current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
          )
        }
        onOpenSheet={() => {}}
      />

      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground m-0">
          SERP states — mixed results, skeleton loading, and empty. Not four identical cards.
        </p>
        <div className="flex flex-wrap gap-1" role="group" aria-label="SERP demo state">
          {SERP_VIEWS.map((option) => (
            <Button
              key={option.id}
              type="button"
              size="sm"
              variant={view === option.id ? "default" : "outline"}
              onClick={() => setView(option.id)}
            >
              {option.label}
            </Button>
          ))}
        </div>
      </div>

      {view === "empty" ? (
        <EmptyState
          title="No stays in Austin for these dates"
          description="Try different dates, drop a filter, or widen the map."
          actionLabel="Clear filters"
          onAction={() => {
            setActiveFilters([]);
            setView("results");
          }}
        />
      ) : (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {view === "loading"
              ? Array.from({ length: 4 }, (_, i) => <ListingCardSkeleton key={i} />)
              : SERP_LISTINGS.map((listing) => (
                  <ListingCard
                    key={listing.title}
                    title={listing.title}
                    location={listing.location}
                    pricePerNight={listing.pricePerNight}
                    rating={listing.rating}
                    reviewCount={listing.reviewCount}
                    imageUrl={listing.imageUrl}
                    images={listing.images}
                    badge={listing.badge}
                    saved={listing.saved}
                    soldOut={listing.soldOut}
                  />
                ))}
          </div>
          <div className="rounded-xl border bg-muted/30 p-6 min-h-[320px] flex flex-col items-center justify-center gap-4">
            <p className="text-sm text-muted-foreground m-0">Map panel</p>
            <div className="flex flex-wrap justify-center gap-3">
              {mapMarkers.map((listing) => (
                <MapPriceMarker
                  key={listing.title}
                  price={listing.mapPrice!}
                  saved={listing.saved}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function PdpPageDemo() {
  return (
    <div className="space-y-8">
      <PhotoGalleryDefaultDemo />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h2 className="text-2xl font-bold m-0">Navigato Loft</h2>
            <p className="text-muted-foreground m-0">Entire rental · South Congress, Austin</p>
          </div>
          <Tabs defaultValue="amenities">
            <TabsList>
              <TabsTrigger value="amenities">Amenities</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="amenities" className="pt-4">
              <AmenityGridDefaultDemo />
            </TabsContent>
            <TabsContent value="reviews" className="pt-4">
              <ReviewSummaryDefaultDemo />
            </TabsContent>
          </Tabs>
        </div>
        <BookingWidgetDefaultDemo />
      </div>
    </div>
  );
}

export function CheckoutPageDemo() {
  return (
    <div className="space-y-8 max-w-2xl">
      <BookingSteps steps={defaultBookingSteps} currentStep="payment" />
      <div className="rounded-xl border p-6 space-y-4">
        <h2 className="text-lg font-semibold m-0">Payment details</h2>
        <p className="text-sm text-muted-foreground m-0">Payment form placeholder</p>
        <PriceBreakdown
          lineItems={[
            { label: "$220 × 3 nights", amount: 660 },
            { label: "Cleaning fee", amount: 75 },
            { label: "Service fee", amount: 120 },
          ]}
          taxes={98}
        />
        <BookingWidgetDefaultDemo />
      </div>
    </div>
  );
}
