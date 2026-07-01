import type { NavItem } from "./nav-types";

export type { NavItem };

/** Atomic Design navigation — paths are relative to site base */
export const componentsNav: NavItem = {
  label: "Components",
  href: "/components/",
  children: [
    {
      label: "Atoms",
      href: "/components/atoms/",
      description: "shadcn/ui primitives — Button, Badge, Label, Input, Skeleton.",
      children: [
        { label: "Button", href: "/components/atoms/button/" },
        { label: "Badge", href: "/components/atoms/badge/" },
        { label: "Input", href: "/components/atoms/input/" },
        { label: "Skeleton", href: "/components/atoms/skeleton/" },
        { label: "Card", href: "/components/atoms/card/" },
        { label: "Tabs", href: "/components/atoms/tabs/" },
        { label: "Select", href: "/components/atoms/select/" },
        { label: "Sheet", href: "/components/atoms/sheet/" },
        { label: "Dialog", href: "/components/atoms/dialog/" },
      ],
    },
    {
      label: "Molecules",
      href: "/components/molecules/",
      description: "Booking controls — dates, guests, destination, filters.",
      children: [
        { label: "Date range picker", href: "/components/molecules/date-range-picker/" },
        { label: "Guest selector", href: "/components/molecules/guest-selector/" },
        { label: "Destination input", href: "/components/molecules/destination-input/" },
        { label: "Star rating", href: "/components/molecules/star-rating/" },
        { label: "Price range slider", href: "/components/molecules/price-range-slider/" },
        { label: "Map price marker", href: "/components/molecules/map-price-marker/" },
        { label: "Sort select", href: "/components/molecules/sort-select/" },
        { label: "Filter chip", href: "/components/molecules/filter-chip/" },
      ],
    },
    {
      label: "Organisms",
      href: "/components/organisms/",
      description: "Full UI sections — search bar, listing cards, booking widget.",
      children: [
        { label: "Booking search bar", href: "/components/organisms/booking-search-bar/" },
        { label: "Listing card", href: "/components/organisms/listing-card/" },
        { label: "Search header", href: "/components/organisms/search-header/" },
        { label: "Filter bar", href: "/components/organisms/filter-bar/" },
        { label: "Filter sheet", href: "/components/organisms/filter-sheet/" },
        { label: "Booking widget", href: "/components/organisms/booking-widget/" },
        { label: "Price breakdown", href: "/components/organisms/price-breakdown/" },
        { label: "Rate comparison", href: "/components/organisms/rate-comparison/" },
        { label: "Photo gallery", href: "/components/organisms/photo-gallery/" },
        { label: "Amenity grid", href: "/components/organisms/amenity-grid/" },
        { label: "Review summary", href: "/components/organisms/review-summary/" },
        { label: "Booking steps", href: "/components/organisms/booking-steps/" },
        { label: "Empty state", href: "/components/organisms/empty-state/" },
        { label: "Listing card skeleton", href: "/components/organisms/listing-card-skeleton/" },
      ],
    },
    {
      label: "Pages",
      href: "/components/pages/",
      description: "Demoable SERP, PDP, and checkout compositions.",
      children: [
        { label: "SERP", href: "/components/pages/serp/" },
        { label: "PDP", href: "/components/pages/pdp/" },
        { label: "Checkout", href: "/components/pages/checkout/" },
      ],
    },
  ],
};

export const siteNav: NavItem[] = [
  { label: "Overview", href: "/" },
  { label: "Getting started", href: "/getting-started/" },
  {
    label: "Tokens",
    children: [
      { label: "Colors", href: "/tokens/colors/" },
      { label: "Typography", href: "/tokens/typography/" },
      { label: "Spacing & shadows", href: "/tokens/spacing/" },
      { label: "Motion", href: "/tokens/motion/" },
    ],
  },
  componentsNav,
];

export function withBase(base: string, href: string) {
  const normalized = href.startsWith("/") ? href.slice(1) : href;
  return `${base}${normalized}`;
}

export function isActive(currentPath: string, href: string, base: string) {
  const full = withBase(base, href);
  const normalizedCurrent = currentPath.endsWith("/") ? currentPath : `${currentPath}/`;
  const normalizedHref = full.endsWith("/") ? full : `${full}/`;
  return normalizedCurrent === normalizedHref || normalizedCurrent.startsWith(normalizedHref);
}
