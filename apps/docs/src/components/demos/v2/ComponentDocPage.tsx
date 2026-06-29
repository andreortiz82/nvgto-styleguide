import { ComponentDoc } from "../../docs/ComponentDoc";
import { componentDocs } from "../../../content/components/registry";
import { componentExamples, previewDemos } from "../examples/registry";
import {
  BookingSearchBarDefaultDemo,
  FilterBarDefaultDemo,
  ListingCardDefaultDemo,
  BookingWidgetDefaultDemo,
  RateComparisonDefaultDemo,
} from "../examples/organisms";
import {
  DateRangePickerDefaultDemo,
  DestinationInputDefaultDemo,
  GuestSelectorDefaultDemo,
  MapPriceMarkerDefaultDemo,
  PriceRangeSliderDefaultDemo,
} from "../examples/molecules";
import { ButtonVariantsDemo } from "../examples/atoms/button";
import { BadgeDefaultDemo } from "../examples/atoms/badge";

export function ComponentDocPage({ slug }: { slug: string }) {
  const meta = componentDocs[slug];
  const Preview = previewDemos[slug];
  const examples = componentExamples[slug] ?? [];

  if (!meta) return <p>Documentation not found.</p>;

  return (
    <ComponentDoc
      meta={meta}
      preview={Preview ? <Preview /> : null}
      examples={examples}
    />
  );
}

export function AtomsShowcaseV2() {
  return (
    <div className="space-y-8">
      <section className="space-y-3">
        <h3 className="text-sm font-semibold m-0">Button</h3>
        <ButtonVariantsDemo />
      </section>
      <section className="space-y-3">
        <h3 className="text-sm font-semibold m-0">Badge</h3>
        <BadgeDefaultDemo />
      </section>
      <section className="space-y-3">
        <h3 className="text-sm font-semibold m-0">Map marker</h3>
        <MapPriceMarkerDefaultDemo />
      </section>
    </div>
  );
}

export function MoleculesShowcaseV2() {
  return (
    <div className="space-y-8">
      <DestinationInputDefaultDemo />
      <DateRangePickerDefaultDemo />
      <GuestSelectorDefaultDemo />
      <PriceRangeSliderDefaultDemo />
    </div>
  );
}

export function OrganismsShowcaseV2() {
  return (
    <div className="space-y-8">
      <BookingSearchBarDefaultDemo />
      <ListingCardDefaultDemo />
      <FilterBarDefaultDemo />
      <BookingWidgetDefaultDemo />
      <RateComparisonDefaultDemo />
    </div>
  );
}
