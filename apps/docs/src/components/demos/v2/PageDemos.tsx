import {
  BookingSteps,
  defaultBookingSteps,
  PriceBreakdown,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@navigato/react";
import { MapPriceMarkerDefaultDemo } from "../examples/molecules";
import {
  AmenityGridDefaultDemo,
  BookingWidgetDefaultDemo,
  FilterBarDefaultDemo,
  ListingCardDefaultDemo,
  PhotoGalleryDefaultDemo,
  ReviewSummaryDefaultDemo,
  SearchHeaderDefaultDemo,
} from "../examples/organisms";

export function SerpPageDemo() {
  return (
    <div className="space-y-6">
      <SearchHeaderDefaultDemo />
      <FilterBarDefaultDemo />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ListingCardDefaultDemo />
          <ListingCardDefaultDemo />
          <ListingCardDefaultDemo />
          <ListingCardDefaultDemo />
        </div>
        <div className="rounded-xl border bg-muted/30 p-6 min-h-[320px] flex flex-col items-center justify-center gap-4">
          <p className="text-sm text-muted-foreground m-0">Map panel</p>
          <MapPriceMarkerDefaultDemo />
        </div>
      </div>
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
