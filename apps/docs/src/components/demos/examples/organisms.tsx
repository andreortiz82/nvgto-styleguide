import { useState } from "react";
import {
  AmenityGrid,
  BookingSearchBar,
  BookingSteps,
  BookingWidget,
  defaultBookingSteps,
  EmptyState,
  FilterBar,
  FilterSheet,
  ListingCard,
  ListingCardSkeleton,
  PhotoGallery,
  PriceBreakdown,
  RateComparison,
  ReviewSummary,
  SearchHeader,
} from "@navigato/react";

const IMG = "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop";
const GALLERY = [
  IMG,
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1611892440504-42a792e284d7?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop",
];

const PDP_GALLERY = [
  ...GALLERY,
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop",
];

/** Mar 12–15 — same stay copy as the SERP header. Not invented by BookingWidget. */
const DEMO_STAY_RANGE = {
  from: new Date(2026, 2, 12),
  to: new Date(2026, 2, 15),
};

export function BookingSearchBarDefaultDemo() {
  return <BookingSearchBar />;
}

export function ListingCardDefaultDemo() {
  return (
    <div className="max-w-sm w-full">
      <ListingCard
        title="Navigato Loft"
        location="South Congress, Austin"
        pricePerNight={189}
        rating={4.9}
        reviewCount={128}
        imageUrl={IMG}
        images={GALLERY}
        badge="Guest favorite"
      />
    </div>
  );
}

export function ListingCardVariantsDemo() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 w-full">
      <ListingCard
        title="Compact Studio"
        location="Downtown"
        pricePerNight={99}
        rating={4.2}
        reviewCount={42}
        imageUrl={IMG}
      />
      <ListingCard
        title="Saved retreat"
        location="Hill Country"
        pricePerNight={320}
        rating={5}
        reviewCount={18}
        imageUrl={GALLERY[1]}
        badge="Rare find"
        saved
      />
    </div>
  );
}

export function ListingCardSoldOutDemo() {
  return (
    <div className="max-w-sm w-full">
      <ListingCard
        title="Rainey Street Studio"
        location="Rainey Street, Austin"
        pricePerNight={210}
        rating={4.4}
        reviewCount={61}
        imageUrl={GALLERY[3]}
        soldOut
      />
    </div>
  );
}

export function SearchHeaderDefaultDemo() {
  const [priceRange, setPriceRange] = useState<[number, number]>([50, 400]);
  return (
    <SearchHeader
      destination="Austin, TX"
      tripSummary="Mar 12–15 · 2 adults · 1 room"
      rating={4}
      min={50}
      max={800}
      value={priceRange}
      onChange={setPriceRange}
    />
  );
}

export function FilterBarDefaultDemo() {
  const [open, setOpen] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([50, 400]);
  return (
    <div className="w-full">
      <FilterBar
        resultCount={248}
        filters={[
          { id: "wifi", label: "WiFi", active: true },
          { id: "pool", label: "Pool" },
          { id: "breakfast", label: "Breakfast" },
        ]}
        onOpenSheet={() => setOpen(true)}
      />
      <FilterSheet
        open={open}
        onOpenChange={setOpen}
        trigger={null}
        min={50}
        max={800}
        value={priceRange}
        onChange={setPriceRange}
        onApply={() => setOpen(false)}
        onClear={() => setPriceRange([50, 400])}
      />
    </div>
  );
}

export function FilterSheetDefaultDemo() {
  const [priceRange, setPriceRange] = useState<[number, number]>([50, 400]);
  return (
    <FilterSheet
      min={50}
      max={800}
      value={priceRange}
      onChange={setPriceRange}
    />
  );
}

export function BookingWidgetDefaultDemo() {
  return (
    <div className="max-w-sm w-full">
      <BookingWidget pricePerNight={189} />
    </div>
  );
}

export function BookingWidgetReadyDemo() {
  return (
    <div className="max-w-sm w-full">
      <BookingWidget pricePerNight={189} defaultDateRange={DEMO_STAY_RANGE} />
    </div>
  );
}

export function BookingWidgetSoldOutDemo() {
  return (
    <div className="max-w-sm w-full">
      <BookingWidget pricePerNight={189} defaultDateRange={DEMO_STAY_RANGE} soldOut />
    </div>
  );
}

export function PriceBreakdownDefaultDemo() {
  return (
    <PriceBreakdown
      className="max-w-sm w-full"
      lineItems={[
        { label: "$189 × 3 nights", amount: 567 },
        { label: "Cleaning fee", amount: 75 },
        { label: "Service fee", amount: 120 },
      ]}
      taxes={98}
    />
  );
}

export function RateComparisonDefaultDemo() {
  return (
    <RateComparison
      className="max-w-md w-full"
      items={[
        { provider: "Navigato Direct", price: 220, description: "Free cancellation", href: "https://example.com/book" },
        { provider: "Booking.com", price: 235, description: "Pay at property" },
        { provider: "Expedia", price: 228, description: "Non-refundable" },
      ]}
    />
  );
}

export function PhotoGalleryDefaultDemo() {
  return <PhotoGallery images={GALLERY} title="Property gallery" />;
}

export function AmenityGridDefaultDemo() {
  return <AmenityGrid columns={2} className="max-w-md" />;
}

export function ReviewSummaryDefaultDemo() {
  return (
    <ReviewSummary
      className="max-w-lg w-full"
      average={4.8}
      totalReviews={268}
      reviews={[
        { author: "Jordan", date: "Feb 2026", rating: 5, text: "Perfect location and spotless room." },
        { author: "Sam", date: "Jan 2026", rating: 4, text: "Great value, would stay again." },
      ]}
    />
  );
}

export function BookingStepsDefaultDemo() {
  return <BookingSteps steps={defaultBookingSteps} currentStep="payment" className="max-w-md" />;
}

export function EmptyStateDefaultDemo() {
  return <EmptyState className="max-w-md w-full" onAction={() => {}} />;
}

export function ListingCardSkeletonDefaultDemo() {
  return (
    <div className="max-w-sm w-full">
      <ListingCardSkeleton />
    </div>
  );
}

export { IMG, GALLERY, PDP_GALLERY, DEMO_STAY_RANGE };
