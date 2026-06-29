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
  SkeletonCardDemo,
  SkeletonDefaultDemo,
  SkeletonShapesDemo,
} from "./atoms/skeleton";
import {
  DateRangePickerDefaultDemo,
  DateRangePickerWidthDemo,
  DestinationInputDefaultDemo,
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
  BookingWidgetDefaultDemo,
  FilterBarDefaultDemo,
  FilterSheetDefaultDemo,
  ListingCardDefaultDemo,
  ListingCardVariantsDemo,
  PhotoGalleryDefaultDemo,
  PriceBreakdownDefaultDemo,
  RateComparisonDefaultDemo,
  ReviewSummaryDefaultDemo,
  SearchHeaderDefaultDemo,
} from "./organisms";

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
  "date-range-picker": DateRangePickerDefaultDemo,
  "guest-selector": GuestSelectorDefaultDemo,
  "destination-input": DestinationInputDefaultDemo,
  "star-rating": StarRatingDefaultDemo,
  "price-range-slider": PriceRangeSliderDefaultDemo,
  "map-price-marker": MapPriceMarkerDefaultDemo,
  "sort-select": SortSelectDefaultDemo,
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
  ],
};
