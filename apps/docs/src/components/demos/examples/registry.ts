import type { ComponentType } from "react";
import {
  BadgeDefaultDemo,
  BadgeUsageDemo,
  BadgeVariantsDemo,
} from "./atoms/badge";
import {
  ButtonDefaultDemo,
  ButtonSizesDemo,
  ButtonStatesDemo,
  ButtonVariantsDemo,
} from "./atoms/button";
import {
  InputDefaultDemo,
  InputStatesDemo,
  InputTypesDemo,
} from "./atoms/input";
import {
  CardDefaultDemo,
  DialogDefaultDemo,
  SelectDefaultDemo,
  SheetDefaultDemo,
  TabsDefaultDemo,
} from "./atoms/primitives";
import {
  SkeletonCardDemo,
  SkeletonDefaultDemo,
  SkeletonShapesDemo,
} from "./atoms/skeleton";
import {
  DateRangePickerDefaultDemo,
  DateRangePickerWidthDemo,
  DestinationInputDefaultDemo,
  FilterChipDefaultDemo,
  GuestSelectorCompactDemo,
  GuestSelectorDefaultDemo,
  MapPriceMarkerDefaultDemo,
  PriceRangeSliderDefaultDemo,
  SortSelectDefaultDemo,
  StarRatingDefaultDemo,
  StarRatingInteractiveDemo,
} from "./molecules";
import {
  AmenityGridDefaultDemo,
  BookingSearchBarDefaultDemo,
  BookingStepsDefaultDemo,
  BookingWidgetDefaultDemo,
  BookingWidgetReadyDemo,
  BookingWidgetSoldOutDemo,
  EmptyStateDefaultDemo,
  FilterBarDefaultDemo,
  FilterSheetDefaultDemo,
  ListingCardDefaultDemo,
  ListingCardSkeletonDefaultDemo,
  ListingCardSoldOutDemo,
  ListingCardVariantsDemo,
  PhotoGalleryDefaultDemo,
  PriceBreakdownDefaultDemo,
  RateComparisonDefaultDemo,
  ReviewSummaryDefaultDemo,
  SearchHeaderDefaultDemo,
} from "./organisms";
import {
  CartDrawerDefaultDemo,
  CartDrawerEmptyDemo,
  CartLineDefaultDemo,
  ColorSwatchDefaultDemo,
  LookbookRowDefaultDemo,
  ProductBadgeDefaultDemo,
  ProductCardDefaultDemo,
  ProductCardSoldOutDemo,
  ProductGalleryDefaultDemo,
  ProductGridDefaultDemo,
  ProductGridEmptyDemo,
  ProductGridLoadingDemo,
  ProductPriceDefaultDemo,
  QuantityStepperDefaultDemo,
  SizeSelectorDefaultDemo,
  WishlistButtonDefaultDemo,
} from "./shopping";

export interface ExampleEntry {
  id: string;
  title: string;
  description?: string;
  Demo: ComponentType;
}

export const previewDemos: Record<string, ComponentType> = {
  button: ButtonDefaultDemo,
  badge: BadgeDefaultDemo,
  input: InputDefaultDemo,
  skeleton: SkeletonDefaultDemo,
  card: CardDefaultDemo,
  tabs: TabsDefaultDemo,
  select: SelectDefaultDemo,
  sheet: SheetDefaultDemo,
  dialog: DialogDefaultDemo,
  "date-range-picker": DateRangePickerDefaultDemo,
  "guest-selector": GuestSelectorDefaultDemo,
  "destination-input": DestinationInputDefaultDemo,
  "star-rating": StarRatingDefaultDemo,
  "price-range-slider": PriceRangeSliderDefaultDemo,
  "map-price-marker": MapPriceMarkerDefaultDemo,
  "sort-select": SortSelectDefaultDemo,
  "filter-chip": FilterChipDefaultDemo,
  "listing-card": ListingCardDefaultDemo,
  "booking-search-bar": BookingSearchBarDefaultDemo,
  "booking-widget": BookingWidgetDefaultDemo,
  "filter-bar": FilterBarDefaultDemo,
  "search-header": SearchHeaderDefaultDemo,
  "photo-gallery": PhotoGalleryDefaultDemo,
  "review-summary": ReviewSummaryDefaultDemo,
  "amenity-grid": AmenityGridDefaultDemo,
  "rate-comparison": RateComparisonDefaultDemo,
  "price-breakdown": PriceBreakdownDefaultDemo,
  "filter-sheet": FilterSheetDefaultDemo,
  "booking-steps": BookingStepsDefaultDemo,
  "empty-state": EmptyStateDefaultDemo,
  "listing-card-skeleton": ListingCardSkeletonDefaultDemo,
  "size-selector": SizeSelectorDefaultDemo,
  "color-swatch": ColorSwatchDefaultDemo,
  "quantity-stepper": QuantityStepperDefaultDemo,
  "product-price": ProductPriceDefaultDemo,
  "wishlist-button": WishlistButtonDefaultDemo,
  "product-badge": ProductBadgeDefaultDemo,
  "product-card": ProductCardDefaultDemo,
  "product-gallery": ProductGalleryDefaultDemo,
  "cart-line": CartLineDefaultDemo,
  "cart-drawer": CartDrawerDefaultDemo,
  "lookbook-row": LookbookRowDefaultDemo,
  "product-grid": ProductGridDefaultDemo,
};

export const componentExamples: Record<string, ExampleEntry[]> = {
  button: [
    { id: "variants", title: "Variants", description: "Visual styles for hierarchy and emphasis.", Demo: ButtonVariantsDemo },
    { id: "sizes", title: "Sizes", description: "Scale from xs to lg, plus icon-only.", Demo: ButtonSizesDemo },
    { id: "states", title: "States", description: "Disabled, with icon, and full-width.", Demo: ButtonStatesDemo },
  ],
  badge: [
    { id: "variants", title: "Variants", Demo: BadgeVariantsDemo },
    { id: "usage", title: "Booking labels", description: "Common SERP and PDP badges.", Demo: BadgeUsageDemo },
  ],
  input: [
    { id: "types", title: "Input types", Demo: InputTypesDemo },
    { id: "states", title: "States", description: "With label, disabled, and invalid.", Demo: InputStatesDemo },
  ],
  skeleton: [
    { id: "shapes", title: "Shapes", Demo: SkeletonShapesDemo },
    { id: "card", title: "Listing card loading", Demo: SkeletonCardDemo },
  ],
  "date-range-picker": [
    { id: "width", title: "Layout", description: "Single vs dual month in constrained width.", Demo: DateRangePickerWidthDemo },
  ],
  "guest-selector": [
    { id: "compact", title: "Compact width", Demo: GuestSelectorCompactDemo },
  ],
  "star-rating": [
    { id: "interactive", title: "Interactive filter", Demo: StarRatingInteractiveDemo },
  ],
  "listing-card": [
    { id: "variants", title: "Variants", description: "Default tile vs saved with badge.", Demo: ListingCardVariantsDemo },
    { id: "sold-out", title: "Sold out", description: "Unavailable for the searched dates — not a Guest favorite badge.", Demo: ListingCardSoldOutDemo },
  ],
  "booking-widget": [
    { id: "ready", title: "Dates selected", description: "A real range. Total and nights follow the calendar, not a default of 3.", Demo: BookingWidgetReadyDemo },
    { id: "sold-out", title: "Sold out", description: "Reserve stays enabled and explains why it cannot run.", Demo: BookingWidgetSoldOutDemo },
  ],
  "product-card": [
    { id: "sold-out", title: "Sold out", description: "Unavailable SKU — save still works; click is suppressed.", Demo: ProductCardSoldOutDemo },
  ],
  "cart-drawer": [
    { id: "empty", title: "Empty bag", description: "Shopping empty, not “No stays found”.", Demo: CartDrawerEmptyDemo },
  ],
  "product-grid": [
    { id: "empty", title: "Empty", Demo: ProductGridEmptyDemo },
    { id: "loading", title: "Loading", Demo: ProductGridLoadingDemo },
  ],
};
