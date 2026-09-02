# Changelog

All notable changes to `@navigato/react` are documented here.

The library is **0.x**. Breaking changes are allowed in a minor; deprecations are preferred before a removal. Public booking parts are documented as `preview`, not `stable`. Nothing here is 1.0.

**Publish status:** `@navigato/react@0.2.0` is the workspace version in `packages/navigato/package.json`. It is **not on the public npm registry**. Do not run `npm install @navigato/react` expecting a live package. When Andre publishes, use `npm run build:lib` then `npm publish --workspace=@navigato/react` (`publishConfig.access` is `public`).

## [0.2.0] — unpublished

Workspace version. Named here so the SERP / PDP floor and the remaining booking docs have a place to land before the first npm release.

### SERP floor

- `ListingCard` `soldOut` — unavailable stays stay in the grid; save still works; click-to-open is suppressed; price is not shown as bookable.
- `BookingSearchBar` wired on the SERP page demo — Search is not a silent no-op.
- Docs skeleton (`status: "preview"`) for ListingCard, BookingSearchBar, FilterBar, DateRangePicker, GuestSelector, and the SERP page.

### PDP / checkout floor

- `BookingWidget` contract: empty dates are valid; nights follow the calendar; do not invent a 3-night stay; Reserve stays enabled and explains why it cannot run; `soldOut` is consumer-owned.
- Docs skeleton for BookingWidget, PriceBreakdown, PhotoGallery, AmenityGrid, ReviewSummary, BookingSteps, and the PDP / checkout pages.

### Remaining booking-domain docs

Docs skeleton (when / when-not, anatomy, states, a11y, do/don’t, props matching TypeScript) for:

- Molecules: DestinationInput, StarRating, PriceRangeSlider, MapPriceMarker, SortSelect, FilterChip
- Organisms: SearchHeader, FilterSheet, RateComparison, EmptyState, ListingCardSkeleton

shadcn atoms (Button, Badge, Input, Card, …) stay thin.

### API gaps closed (still unpublished)

- `FilterSheet` `open` / `defaultOpen` / `onOpenChange` — FilterBar `onOpenSheet` can drive the sheet. Pass `trigger={null}` when the bar owns the Filters button. SERP demo Filters opens FilterSheet; Escape / close use the Sheet primitive.
- `FilterSheet` and `SearchHeader` compose public `PriceRangeSlider` props: `min` / `max` / `value` / `onChange`. Host default remains 50–800. Not a second slider.
- `SearchHeader` desktop refine row no longer uses `hidden` (docs `.hidden` was winning over package `md:block`). Slider uses `max-md:hidden`; min-rating uses `max-md:!hidden`; the stub Filters button uses `md:!hidden`.
- `RateComparison` no longer defaults `href` to `#`. Missing `href` renders a non-link row.

### Polish (still unpublished)

- Dark `--chart-3` / `--chart-4` use the light chart hues (blue 240, gold 85) instead of leftover shadcn purple/gold.
- `FilterBar` `resultCount` copy: 0 stays / 1 stay / N stays.

### SERP demo consumes the filter APIs (still unpublished)

- SERP page demo filters the mixed fixture by price range and min rating, sorts with SortSelect’s public keys, keeps FilterBar’s stay count in sync, and shows EmptyState at zero matches. Header and FilterSheet share one `priceRange`. Fixture-only — not a stay API.

### Agent surface

- `llms.txt` (repo and docs) indexes the booking parts that now have the skeleton.
- `AGENTS.md` points at the registry for props. Standing rules are unchanged.

### Package surface (already in 0.2.0)

- Name: `@navigato/react`
- Exports: `.` (JS + types), `./styles.css` → `dist/navigato.css`, `./theme.css` → `src/styles/global.css`
- Peer: `react` and `react-dom` `>=18`
- Files published (when the time comes): `dist` only
