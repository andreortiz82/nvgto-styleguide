# Navigato Design System

**Navigato** is a React component library for hotel and short-term rental booking UIs — search heroes, date pickers, listing cards, sticky booking widgets, and checkout flows in the style of Airbnb, Booking.com, and Vrbo.

Originally built as a [Middleman](https://middlemanapp.com) styleguide, this repo is now a modern npm monorepo: **`@navigato/react` v0.2** on **shadcn/ui + Tailwind CSS v4**, with live documentation.

- **Documentation:** [andreortiz82.github.io/nvgto-styleguide](https://andreortiz82.github.io/nvgto-styleguide/)
- **License:** [MIT](./LICENSE) — free to use with no limitations

## What's inside

| Package | Description |
|---------|-------------|
| [`@navigato/react`](./packages/navigato) | React 19 + TypeScript component library |
| [`@navigato/docs`](./apps/docs) | Astro documentation site with live demos, code examples, and props API tables |

### Components

Built on shadcn/ui primitives with Navigato brand tokens:

- **Atoms:** Button, Badge, Input, Skeleton
- **Molecules:** DateRangePicker, GuestSelector, DestinationInput, StarRating, PriceRangeSlider, MapPriceMarker, SortSelect
- **Organisms:** BookingSearchBar, ListingCard, SearchHeader, FilterBar, FilterSheet, BookingWidget, PriceBreakdown, RateComparison, PhotoGallery, AmenityGrid, ReviewSummary
- **Pages:** SERP, PDP, and Checkout demo compositions

### Design tokens

Brand orange `#FF4700`, Raleway headings, Open Sans body — applied via shadcn CSS variables in `global.css`.

## Quick start

```bash
npm install @navigato/react
```

```tsx
import "@navigato/react/styles.css";
import {
  BookingSearchBar,
  ListingCard,
  BookingWidget,
} from "@navigato/react";

export function App() {
  return (
    <div className="navigato-root">
      <BookingSearchBar />
      <ListingCard
        title="Navigato Loft"
        location="Austin, TX"
        pricePerNight={189}
        rating={4.9}
        reviewCount={128}
        imageUrl="/hotel.jpg"
      />
      <BookingWidget pricePerNight={220} />
    </div>
  );
}
```

## Development

```bash
git clone https://github.com/andreortiz82/nvgto-styleguide.git
cd nvgto-styleguide
npm install
npm run dev          # docs site at localhost:4321
npm run dev:lib      # watch library build
npm run build        # build library + docs
```

## Monorepo structure

```
nvgto-styleguide/
├── packages/navigato/   @navigato/react (shadcn ui/ + booking/)
├── apps/docs/           Astro documentation site
├── docs/                Legacy design reference screenshots
└── .github/workflows/   GitHub Pages deploy
```

## Migration story

| Before | After |
|--------|-------|
| Middleman + Ruby | npm workspaces + Vite |
| HAML partials | React + TypeScript |
| Custom SCSS components | shadcn/ui + booking domain layer |
| SCSS (Bourbon/Neat) | Tailwind CSS v4 + shadcn tokens |
| FontAwesome | Phosphor Icons |
| Static code snippets | Live demos + props API tables |

## Publishing

The package is configured for public npm publish:

```bash
npm run build:lib
npm publish --workspace=@navigato/react
```

## Author

Built by [Andre Ortiz](https://andreortiz.com) as a portfolio example of design system architecture — token migration, component API design, and engineer-facing documentation.
