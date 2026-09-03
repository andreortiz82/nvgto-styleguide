# AGENTS.md

Navigato is a small MIT travel-booking library that also hosts Nox & Vale on the same primitives. `@navigato/react` is the system. Unconstrained generation is vibe coding.

Read `DESIGN.md` (quality bar + How AI changes this) before writing UI. Query this file, `DESIGN.md`, and `apps/docs/src/content/components/registry.ts` before any prop. Human Cursor skill routing lives in `CLAUDE.md` — do not duplicate it here.

## Never invent

- Do not invent component names, props, tokens, utility classes, or Phosphor icon names.
- Use `@navigato/react` or copied files from `packages/navigato/src`. Never emit `@/components/ui` from memory — that is default shadcn, not Navigato. This library looks like shadcn; v0 is trained on the default.
- Restyle via tokens (`primary`, `muted`, `destructive`, `data-brand`). Do not fork Button or Dialog because the brand changed.
- Phosphor names only from existing imports under `packages/navigato/src/components/booking/`. Lucide stays inside `ui/` internals.
- If a name, prop, token, or pattern is unverifiable here, flag the gap. Do not invent a fare calendar or itinerary stepper.

## Plan against the system API

1. Public exports: `packages/navigato/src/index.ts`
2. Props and when/when-not: `apps/docs/src/content/components/registry.ts` (booking-domain parts have the DESIGN.md skeleton; shadcn atoms stay thin)
3. Page instances: SERP, PDP, and checkout at `apps/docs/src/components/demos/v2/PageDemos.tsx`; Nox & Vale gallery at `apps/docs/src/components/demos/v2/NoxValeDemo.tsx`
4. Index: `llms.txt` (repo) and `/nvgto-styleguide/llms.txt` (docs site). Index, not a teacher.

Prefer existing primitives. New primitive only if composition fails. New pattern if it appears twice in the booking flow.

**Copy-in vs package:** app teams import `@navigato/react`. Override tokens before forking. Copy `packages/navigato/src` when the consumer must edit the file. Don’t do neither (black-box npm with no tokens and no fork path).

Patterns that matter: ListingCard (including `soldOut`), BookingSearchBar, FilterBar, DateRangePicker, GuestSelector, ListingCardSkeleton, EmptyState, BookingWidget (empty dates / sold-out — never invent 3 nights or silent-disable Reserve), PriceBreakdown, PhotoGallery, BookingSteps, AmenityGrid, ReviewSummary. Buttons don’t differentiate this library.
