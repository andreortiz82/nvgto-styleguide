import { useId, useRef, useState } from "react";
import type { DateRange } from "react-day-picker";
import {
  AmenityGrid,
  Badge,
  BookingSteps,
  BookingSearchBar,
  BookingWidget,
  GlobeMark,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  defaultBookingSteps,
  EmptyState,
  FilterBar,
  FilterSheet,
  Input,
  Label,
  ListingCard,
  ListingCardSkeleton,
  MapPriceMarker,
  PhotoGallery,
  PriceBreakdown,
  ReviewSummary,
  SearchHeader,
  Separator,
  StarRating,
} from "@navigato/react";
import { Coffee, CookingPot, Park, Snowflake, WifiHigh } from "@phosphor-icons/react";
import { DEMO_STAY_RANGE, GALLERY, PDP_GALLERY } from "../examples/organisms";
import { STAY_PHOTOS } from "../../../lib/photos";

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
    title: "Villa Aurelia",
    location: "Pincio, Rome",
    pricePerNight: 2400,
    rating: 4.9,
    reviewCount: 128,
    imageUrl: STAY_PHOTOS.pool,
    images: GALLERY,
    badge: "Members",
    mapPrice: "$2,400",
  },
  {
    title: "Maison Solenne",
    location: "Saint-Germain, Paris",
    pricePerNight: 1850,
    rating: 4.6,
    reviewCount: 87,
    imageUrl: STAY_PHOTOS.suite,
    mapPrice: "$1,850",
  },
  {
    title: "Casa del Mare",
    location: "Positano",
    pricePerNight: 3200,
    rating: 5,
    reviewCount: 18,
    imageUrl: STAY_PHOTOS.beach,
    saved: true,
    mapPrice: "$3,200",
  },
  {
    title: "The Obsidian Suite",
    location: "Kyoto",
    pricePerNight: 2100,
    rating: 4.4,
    reviewCount: 61,
    imageUrl: STAY_PHOTOS.bedroom,
    soldOut: true,
  },
];

const DEST_LABELS: Record<string, string> = {
  "austin-tx": "Austin, TX",
  barcelona: "Barcelona, Spain",
  tokyo: "Tokyo, Japan",
  paris: "Paris, France",
};

function shortDate(value: Date) {
  return value.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function formatStayQuery(params: {
  destination?: string;
  dateRange?: { from?: Date; to?: Date };
  guests?: { adults: number; children: number; rooms: number };
}) {
  const destination = params.destination
    ? (DEST_LABELS[params.destination] ?? params.destination)
    : "Anywhere";
  const dates =
    params.dateRange?.from && params.dateRange?.to
      ? `${shortDate(params.dateRange.from)}–${shortDate(params.dateRange.to)}`
      : params.dateRange?.from
        ? `${shortDate(params.dateRange.from)}–?`
        : "add dates";
  const guests = params.guests ?? { adults: 2, children: 0, rooms: 1 };
  const occupancy = `${guests.adults} adult${guests.adults === 1 ? "" : "s"}${
    guests.children ? ` · ${guests.children} child${guests.children === 1 ? "" : "ren"}` : ""
  } · ${guests.rooms} room${guests.rooms === 1 ? "" : "s"}`;
  return { destination, tripSummary: `${dates} · ${occupancy}` };
}

const SERP_FILTERS = [
  { id: "wifi", label: "WiFi" },
  { id: "pool", label: "Pool" },
  { id: "breakfast", label: "Breakfast" },
  { id: "parking", label: "Parking" },
];

const SERP_PRICE_MIN = 200;
const SERP_PRICE_MAX = 5000;
const SERP_PRICE_DEFAULT: [number, number] = [200, 4000];

const SERP_VIEWS = [
  { id: "results", label: "Results" },
  { id: "loading", label: "Loading" },
  { id: "empty", label: "Empty" },
] as const;

type SerpView = (typeof SERP_VIEWS)[number]["id"];

/** Sort keys match SortSelect defaults. Distance has no fixture field — keep original order. */
function applySerpFilters(
  listings: SerpListing[],
  priceRange: [number, number],
  minRating: number,
  sortValue: string,
): SerpListing[] {
  const filtered = listings.filter((listing) => {
    const inPrice =
      listing.pricePerNight >= priceRange[0] && listing.pricePerNight <= priceRange[1];
    const meetsRating = minRating <= 0 || listing.rating >= minRating;
    return inPrice && meetsRating;
  });

  if (sortValue === "price-asc") {
    return [...filtered].sort((a, b) => a.pricePerNight - b.pricePerNight);
  }
  if (sortValue === "price-desc") {
    return [...filtered].sort((a, b) => b.pricePerNight - a.pricePerNight);
  }
  if (sortValue === "rating") {
    return [...filtered].sort((a, b) => b.rating - a.rating);
  }
  return filtered;
}

export function SerpPageDemo() {
  const searchRef = useRef<HTMLDivElement>(null);
  const [view, setView] = useState<SerpView>("results");
  const [activeFilters, setActiveFilters] = useState<string[]>(["wifi"]);
  const [destination, setDestination] = useState("Rome, Italy");
  const [tripSummary, setTripSummary] = useState("Mar 12–15 · 2 adults · 1 room");
  const [searchNote, setSearchNote] = useState<string | null>(null);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>(SERP_PRICE_DEFAULT);
  const [minRating, setMinRating] = useState(0);
  const [sortValue, setSortValue] = useState("recommended");

  const filters = SERP_FILTERS.map((filter) => ({
    ...filter,
    active: activeFilters.includes(filter.id),
  }));

  const visibleListings = applySerpFilters(SERP_LISTINGS, priceRange, minRating, sortValue);
  const resultCount = view === "empty" ? 0 : view === "loading" ? undefined : visibleListings.length;
  const showEmpty = view === "empty" || (view === "results" && visibleListings.length === 0);
  const mapMarkers = visibleListings.filter((listing) => listing.mapPrice && !listing.soldOut);

  const resetFilters = () => {
    setActiveFilters([]);
    setPriceRange(SERP_PRICE_DEFAULT);
    setMinRating(0);
    setSortValue("recommended");
    setView("results");
  };

  return (
    <div className="space-y-6">
      <SearchHeader
        logo={
          <span className="flex items-center gap-2">
            <GlobeMark className="size-7 text-foreground" />
            <span className="nvg-wordmark text-sm">Navigato</span>
          </span>
        }
        destination={destination}
        tripSummary={tripSummary}
        onEditTrip={() => {
          searchRef.current?.scrollIntoView({ block: "nearest" });
          searchRef.current?.querySelector<HTMLElement>("button, input")?.focus();
        }}
        rating={minRating}
        onRatingChange={setMinRating}
        min={SERP_PRICE_MIN}
        max={SERP_PRICE_MAX}
        value={priceRange}
        onChange={setPriceRange}
      />
      <div ref={searchRef}>
        <BookingSearchBar
          onSearch={(params) => {
            const next = formatStayQuery(params);
            setDestination(next.destination);
            setTripSummary(next.tripSummary);
            setSearchNote(`${next.destination} · ${next.tripSummary}`);
            setView("results");
          }}
        />
      </div>
      {searchNote ? (
        <p className="text-sm text-muted-foreground m-0" aria-live="polite">
          Search updated — {searchNote}. Demo does not route.
        </p>
      ) : null}
      <FilterBar
        resultCount={resultCount}
        filters={filters}
        onFilterToggle={(id) =>
          setActiveFilters((current) =>
            current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
          )
        }
        sortValue={sortValue}
        onSortChange={setSortValue}
        onOpenSheet={() => setFiltersOpen(true)}
      />
      <FilterSheet
        open={filtersOpen}
        onOpenChange={setFiltersOpen}
        trigger={null}
        min={SERP_PRICE_MIN}
        max={SERP_PRICE_MAX}
        value={priceRange}
        onChange={setPriceRange}
        onApply={() => setFiltersOpen(false)}
        onClear={() => setPriceRange(SERP_PRICE_DEFAULT)}
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

      {showEmpty ? (
        <EmptyState
          title={`No stays in ${destination} for these dates`}
          description="Try different dates, drop a filter, or widen the map."
          actionLabel="Clear filters"
          onAction={resetFilters}
        />
      ) : (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {view === "loading"
              ? Array.from({ length: 4 }, (_, i) => <ListingCardSkeleton key={i} />)
              : visibleListings.map((listing) => (
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
          <div className="border bg-muted/30 p-6 min-h-[320px] flex flex-col items-center justify-center gap-4">
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

const PDP_VIEWS = [
  { id: "empty", label: "No dates" },
  { id: "ready", label: "Ready to reserve" },
  { id: "sold-out", label: "Sold out" },
] as const;

type PdpView = (typeof PDP_VIEWS)[number]["id"];

const LOFT_AMENITIES = [
  { id: "wifi", label: "Fast WiFi", icon: WifiHigh },
  { id: "kitchen", label: "Full kitchen", icon: CookingPot },
  { id: "ac", label: "Air conditioning", icon: Snowflake },
  { id: "coffee", label: "Espresso machine", icon: Coffee },
  { id: "parking", label: "Free street parking", icon: Park },
];

export function PdpPageDemo() {
  const [view, setView] = useState<PdpView>("empty");
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [reserveNote, setReserveNote] = useState<string | null>(null);

  const applyView = (next: PdpView) => {
    setView(next);
    setReserveNote(null);
    setDateRange(next === "empty" ? undefined : DEMO_STAY_RANGE);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground m-0">
          PDP states — empty dates, a real range, and sold-out. Reserve never invents nights.
        </p>
        <div className="flex flex-wrap gap-1" role="group" aria-label="PDP demo state">
          {PDP_VIEWS.map((option) => (
            <Button
              key={option.id}
              type="button"
              size="sm"
              variant={view === option.id ? "default" : "outline"}
              onClick={() => applyView(option.id)}
            >
              {option.label}
            </Button>
          ))}
        </div>
      </div>

      <PhotoGallery images={PDP_GALLERY} title="Villa Aurelia" />

      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-8">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="nvg-wordmark text-2xl m-0">Villa Aurelia</h2>
              <Badge>Members</Badge>
            </div>
            <p className="text-muted-foreground m-0">Pincio, Rome</p>
            <div className="flex flex-wrap items-center gap-3">
              <StarRating value={4.9} readOnly showValue reviewCount={128} size="sm" />
              <span className="text-sm text-muted-foreground">Entire loft · 4 guests · 2 bedrooms</span>
            </div>
          </div>
          <p className="text-sm m-0 max-w-2xl">
            A private stay held above the Pincio. Morning light in the salone, a terrace over the
            gardens, and a kitchen that is actually used. This demo is one stay, not a tabbed
            collage of default widgets.
          </p>
          <section className="space-y-3">
            <h3 className="text-lg font-semibold m-0">Amenities</h3>
            <AmenityGrid amenities={LOFT_AMENITIES} columns={2} />
          </section>
          <section className="space-y-3">
            <h3 className="text-lg font-semibold m-0">Reviews</h3>
            <ReviewSummary
              average={4.9}
              totalReviews={128}
              distribution={[
                { stars: 5, count: 96 },
                { stars: 4, count: 22 },
                { stars: 3, count: 7 },
                { stars: 2, count: 2 },
                { stars: 1, count: 1 },
              ]}
              reviews={[
                {
                  author: "Jordan",
                  date: "Feb 2026",
                  rating: 5,
                  text: "Quiet for SoCo, and the kitchen is actually usable. Walked to breakfast both mornings.",
                },
                {
                  author: "Sam",
                  date: "Jan 2026",
                  rating: 4,
                  text: "Great value. Street parking was easy after 7pm. Would stay again for a long weekend.",
                },
              ]}
            />
          </section>
        </div>
        <BookingWidget
          pricePerNight={2400}
          dateRange={dateRange}
          onDateRangeChange={setDateRange}
          soldOut={view === "sold-out"}
          onReserve={(stay) =>
            setReserveNote(
              `Reserved ${stay.nights} night${stay.nights === 1 ? "" : "s"} for ${stay.guests.adults} adult${stay.guests.adults === 1 ? "" : "s"}. Demo does not charge.`,
            )
          }
        />
      </div>
      {reserveNote ? (
        <p className="text-sm text-muted-foreground m-0" aria-live="polite">
          {reserveNote}
        </p>
      ) : null}
    </div>
  );
}

const CHECKOUT_VIEWS = [
  { id: "incomplete", label: "Incomplete" },
  { id: "ready", label: "Ready to confirm" },
] as const;

type CheckoutView = (typeof CHECKOUT_VIEWS)[number]["id"];

const CHECKOUT_READY = {
  firstName: "Jordan",
  lastName: "Lee",
  email: "jordan.lee@example.com",
  card: "4242 4242 4242 4242",
  expiry: "12 / 28",
  cvc: "123",
};

const CHECKOUT_EMPTY = {
  firstName: "",
  lastName: "",
  email: "",
  card: "",
  expiry: "",
  cvc: "",
};

export function CheckoutPageDemo() {
  const hintId = useId();
  const [view, setView] = useState<CheckoutView>("incomplete");
  const [form, setForm] = useState(CHECKOUT_EMPTY);
  const [attempted, setAttempted] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const missing: string[] = [];
  if (!form.firstName.trim() || !form.lastName.trim()) missing.push("guest name");
  if (!form.email.includes("@")) missing.push("email");
  if (!form.card.trim() || !form.expiry.trim() || !form.cvc.trim()) missing.push("demo payment fields");
  const blocker = missing.length
    ? `Add ${missing.join(", ")} to confirm. Demo does not process payment.`
    : null;

  const applyView = (next: CheckoutView) => {
    setView(next);
    setAttempted(false);
    setConfirmed(false);
    setForm(next === "ready" ? CHECKOUT_READY : CHECKOUT_EMPTY);
  };

  const field = (key: keyof typeof form, value: string) => {
    setConfirmed(false);
    setForm((current) => ({ ...current, [key]: value }));
  };

  const handleConfirm = () => {
    if (blocker) {
      setAttempted(true);
      return;
    }
    setConfirmed(true);
  };

  const currentStep = confirmed ? "confirm" : "payment";

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground m-0">
          Checkout states — incomplete guest/payment vs ready to confirm. Not a payment processor.
        </p>
        <div className="flex flex-wrap gap-1" role="group" aria-label="Checkout demo state">
          {CHECKOUT_VIEWS.map((option) => (
            <Button
              key={option.id}
              type="button"
              size="sm"
              variant={view === option.id ? "default" : "outline"}
              onClick={() => applyView(option.id)}
            >
              {option.label}
            </Button>
          ))}
        </div>
      </div>

      <BookingSteps steps={defaultBookingSteps} currentStep={currentStep} />

      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
        <form
          className="lg:col-span-2 space-y-8"
          onSubmit={(event) => {
            event.preventDefault();
            handleConfirm();
          }}
        >
          <fieldset className="space-y-4 border p-5">
            <legend className="px-1 text-sm font-semibold">Guest details</legend>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="checkout-first">First name</Label>
                <Input
                  id="checkout-first"
                  autoComplete="given-name"
                  value={form.firstName}
                  onChange={(event) => field("firstName", event.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="checkout-last">Last name</Label>
                <Input
                  id="checkout-last"
                  autoComplete="family-name"
                  value={form.lastName}
                  onChange={(event) => field("lastName", event.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="checkout-email">Email</Label>
              <Input
                id="checkout-email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={(event) => field("email", event.target.value)}
              />
            </div>
          </fieldset>

          <fieldset className="space-y-4 border p-5">
            <legend className="px-1 text-sm font-semibold">Payment (demo)</legend>
            <p className="text-sm text-muted-foreground m-0">
              Demo fields only — not processed, no Stripe, no card is sent anywhere.
            </p>
            <div className="space-y-2">
              <Label htmlFor="checkout-card">Card number</Label>
              <Input
                id="checkout-card"
                inputMode="numeric"
                autoComplete="off"
                placeholder="ACCT-000015"
                value={form.card}
                onChange={(event) => field("card", event.target.value)}
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="checkout-expiry">Expiry</Label>
                <Input
                  id="checkout-expiry"
                  autoComplete="off"
                  placeholder="MM / YY"
                  value={form.expiry}
                  onChange={(event) => field("expiry", event.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="checkout-cvc">CVC</Label>
                <Input
                  id="checkout-cvc"
                  autoComplete="off"
                  placeholder="123"
                  value={form.cvc}
                  onChange={(event) => field("cvc", event.target.value)}
                />
              </div>
            </div>
          </fieldset>

          <div className="space-y-2">
            <p
              id={hintId}
              className={`text-sm m-0 ${blocker && attempted ? "text-destructive" : "text-muted-foreground"}`}
              aria-live="polite"
            >
              {confirmed
                ? "Demo booking confirmed. No payment was processed."
                : (blocker ?? "You won’t be charged. This demo does not process payment.")}
            </p>
            <Button type="submit" size="lg" className="w-full sm:w-auto" aria-describedby={hintId}>
              Confirm booking
            </Button>
          </div>
        </form>

        <Card className="sticky top-4">
          <CardHeader>
            <CardTitle className="nvg-wordmark text-sm">Villa Aurelia</CardTitle>
            <CardDescription>Pincio, Rome · Mar 12–15 · 2 adults · 1 room</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <img src={STAY_PHOTOS.pool} alt="" className="aspect-[16/9] w-full object-cover" />
            <Separator />
            <PriceBreakdown
              lineItems={[
                { label: "$2,400 × 3 nights", amount: 7200 },
                { label: "Cleaning fee", amount: 75 },
                { label: "Service fee", amount: 120 },
              ]}
              taxes={98}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
