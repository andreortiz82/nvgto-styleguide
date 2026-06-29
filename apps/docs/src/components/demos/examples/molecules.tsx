import {
  DateRangePicker,
  DestinationInput,
  GuestSelector,
  MapPriceMarker,
  PriceRangeSlider,
  SortSelect,
  StarRating,
} from "@navigato/react";

export function DateRangePickerDefaultDemo() {
  return <DateRangePicker className="max-w-sm" />;
}

export function DateRangePickerWidthDemo() {
  return (
    <div className="grid gap-4 w-full max-w-md">
      <DateRangePicker className="w-full" numberOfMonths={1} />
      <DateRangePicker className="w-full" />
    </div>
  );
}

export function GuestSelectorDefaultDemo() {
  return <GuestSelector className="max-w-sm" />;
}

export function GuestSelectorCompactDemo() {
  return (
    <div className="max-w-xs">
      <GuestSelector />
    </div>
  );
}

export function DestinationInputDefaultDemo() {
  return <DestinationInput className="max-w-sm" />;
}

export function StarRatingDefaultDemo() {
  return <StarRating value={4.5} showValue reviewCount={128} readOnly />;
}

export function StarRatingInteractiveDemo() {
  return <StarRating value={3} />;
}

export function PriceRangeSliderDefaultDemo() {
  return <PriceRangeSlider min={50} max={800} className="max-w-md w-full" />;
}

export function MapPriceMarkerDefaultDemo() {
  return (
    <div className="flex flex-wrap gap-3">
      <MapPriceMarker price="$189" />
      <MapPriceMarker price="$245" saved />
      <MapPriceMarker price="$312" />
    </div>
  );
}

export function SortSelectDefaultDemo() {
  return <SortSelect className="w-44" />;
}
