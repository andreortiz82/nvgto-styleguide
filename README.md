# Navigato Design System

**Navigato** is a React component library for hotel and short-term rental booking UIs — search heroes, date pickers, listing cards, sticky booking widgets, and checkout flows in the style of Airbnb, Booking.com, and Vrbo.

Originally built as a [Middleman](https://middlemanapp.com) styleguide, this repo is now a modern npm monorepo: **`@navigato/react` 0.2.0** on **shadcn/ui + Tailwind CSS v4**, with live documentation.

- **Documentation:** [andreortiz82.github.io/nvgto-styleguide](https://andreortiz82.github.io/nvgto-styleguide/)
- **Changelog:** [CHANGELOG.md](./CHANGELOG.md)
- **License:** [MIT](./LICENSE) — free to use with no limitations

## Status

`@navigato/react@0.2.0` lives in this repo and is **not published to the public npm registry**. `npm install @navigato/react` will not resolve until Andre publishes.

Public booking parts are documented as **`preview`**, not `stable`. A part is not `stable` without the DESIGN.md docs skeleton (when / when-not, anatomy, states, a11y, do/don’t, typed props).

Peer dependencies: **React 18+** (`react` / `react-dom` `>=18`). The package is developed against React 19; that is a workspace pin, not the peer floor.

## Consume today

Use the workspace, or copy `packages/navigato/src` when the consumer must edit files. Override tokens before forking.

```bash
git clone https://github.com/andreortiz82/nvgto-styleguide.git
cd nvgto-styleguide
npm install
```

Import the built stylesheet and (if you need tokens without the bundle) the theme file:

```tsx
import "@navigato/react/styles.css";
// optional: tokens only — maps to src/styles/global.css
// import "@navigato/react/theme.css";

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

Package exports (see `packages/navigato/package.json`):

| Export | Resolves to |
|--------|-------------|
| `@navigato/react` | `dist/index.js` + `dist/index.d.ts` |
| `@navigato/react/styles.css` | `dist/navigato.css` |
| `@navigato/react/theme.css` | `src/styles/global.css` |

Add SN Pro yourself (the package does not inject the font):

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=SN+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap" rel="stylesheet" />
```

## What's inside

| Package | Description |
|---------|-------------|
| [`@navigato/react`](./packages/navigato) | React 18+ TypeScript library (workspace 0.2.0) |
| [`@navigato/docs`](./apps/docs) | Astro documentation site with live demos, code examples, and props API tables |

### Components

Built on shadcn/ui primitives with Navigato brand tokens:

- **Atoms:** Button, Badge, Input, Skeleton, Card, Tabs, Select, Sheet, Dialog (thin docs — themed shadcn)
- **Molecules:** DateRangePicker, GuestSelector, DestinationInput, StarRating, PriceRangeSlider, MapPriceMarker, SortSelect, FilterChip
- **Organisms:** BookingSearchBar, ListingCard, SearchHeader, FilterBar, FilterSheet, BookingWidget, PriceBreakdown, RateComparison, PhotoGallery, AmenityGrid, ReviewSummary, BookingSteps, EmptyState, ListingCardSkeleton
- **Pages:** SERP, PDP, and Checkout demo compositions

### Design tokens

Brand orange `oklch(0.705 0.213 47.604)`, SN Pro typography — applied via shadcn CSS variables in `global.css`.

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
├── CHANGELOG.md         0.2.x notes (unpublished)
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

The package is **configured** for a later public npm release. It has not been published. Do not bump to 1.0 while booking parts are `preview`.

```bash
npm run build:lib
npm publish --workspace=@navigato/react
```

`publishConfig.access` is `public`. `files` is `dist` only. After the first publish, consumers can `npm install @navigato/react` and the snippet above becomes the install path. Until then, consume from this repo.

See [CHANGELOG.md](./CHANGELOG.md) for what 0.2.x already contains (SERP `soldOut`, BookingWidget contract, agent surface, remaining booking docs).

## Author

Built by [Andre Ortiz](https://andreortiz.com) as a portfolio example of design system architecture — token migration, component API design, and engineer-facing documentation.
