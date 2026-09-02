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
- `RateComparison` no longer defaults `href` to `#`. Missing `href` renders a non-link row.

### Agent surface

- `llms.txt` (repo and docs) indexes the booking parts that now have the skeleton.
- `AGENTS.md` points at the registry for props. Standing rules are unchanged.

### Package surface (already in 0.2.0)

- Name: `@navigato/react`
- Exports: `.` (JS + types), `./styles.css` → `dist/navigato.css`, `./theme.css` → `src/styles/global.css`
- Peer: `react` and `react-dom` `>=18`
- Files published (when the time comes): `dist` only
