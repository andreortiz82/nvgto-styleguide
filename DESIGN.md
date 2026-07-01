# Design System — Navigato

## Product Context

- **What this is:** MIT-licensed React component library and documentation site for travel booking, trip planning, and short-term rental UIs.
- **Who it's for:** Product engineers building SERP, PDP, checkout, and map flows; portfolio viewers evaluating design-system craft.
- **Space/industry:** Travel / hospitality — peers include Airbnb, Booking.com, Google Hotels.
- **Project type:** Design system docs site + npm package (`@navigato/react`).

## Aesthetic Direction

- **Direction:** Warm travel utility — confident orange CTAs on stone-tinted neutrals.
- **Decoration level:** Intentional — subtle shadows, rounded corners, purposeful motion on interactive booking surfaces.
- **Mood:** Approachable, trustworthy, action-oriented. Orange signals primary actions; warm grays keep data-dense SERP layouts readable.
- **Logo:** Location-pin mark (`logo-mark.svg`) paired with SN Pro wordmark.

## Typography

- **Display / Hero / Body / UI:** SN Pro — single-family system for headings and body.
- **Data / Tables:** SN Pro with `tabular-nums` where prices align.
- **Code:** System monospace stack (`ui-monospace`, Cascadia Code, Source Code Pro).
- **Loading:** Google Fonts CDN — `https://fonts.googleapis.com/css2?family=SN+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap`
- **Scale (docs-prose):**
  - h1: 2.25rem / 700 / -0.03em tracking
  - h2: 1.5rem / 700 / -0.025em
  - h3: 1.125rem / 600 / -0.015em
  - body: 0.9375rem / 1.65 line-height
  - lead (`.nvg-lead`): 1.125rem / muted-foreground
  - uppercase labels (`.nvg-uppercase`): 0.6875rem / 600 / 0.06em tracking

## Color

- **Approach:** Expressive primary on restrained warm neutrals (oklch, stone hue ~50–85).
- **Primary / Brand:** `oklch(0.705 0.213 47.604)` — CTAs, links, focus rings, active nav.
- **Primary foreground:** `oklch(0.99 0.005 47)` — text on orange buttons.
- **Background:** `oklch(0.995 0.004 85)` — page canvas (light).
- **Foreground:** `oklch(0.20 0.022 50)` — primary text.
- **Muted / Secondary:** warm stone tints for chips, sidebar, secondary buttons.
- **Accent:** light orange wash for hover states and sidebar highlights.
- **Destructive:** `oklch(0.577 0.245 27.325)` — errors, destructive actions.
- **Semantic aliases:** `--color-brand`, `--color-silver` (muted-foreground), `--color-mid` (border).
- **Charts:** chart-1 through chart-5 — orange-led palette for analytics demos.
- **Dark mode:** Full `.dark` token override; primary lightens to `oklch(0.75 0.19 47.604)`; surfaces deepen; borders use white/10–15% alpha. Opt-in via `.dark` on `<html>`.

## Spacing

- **Base unit:** 4px (Tailwind default).
- **Density:** Comfortable — booking cards and filter bars need breathing room.
- **Scale:** Tailwind spacing scale (1 = 4px). Common: `gap-2` (8px), `gap-4` (16px), `p-5`/`p-6` (20–24px) for cards and sidebar.

## Layout

- **Approach:** Grid-disciplined docs shell; flexible booking composites.
- **Docs grid:** 288px sticky sidebar + fluid main (max-w-5xl).
- **Max content width:** 64rem (5xl) for docs prose.
- **Border radius:** Base `--radius: 0.625rem` (10px). Scale: sm (×0.6), md (×0.8), lg (1×), xl (×1.4), 2xl–4xl for larger surfaces.

## Shadows

Warm-tinted elevation scale (light mode uses stone-hued shadows):

| Token | Use |
|-------|-----|
| `--shadow-2xs` / `--shadow-xs` | Subtle borders-as-shadow |
| `--shadow-sm` | Cards at rest, tier cards |
| `--shadow-md` | Popovers, dropdowns |
| `--shadow-lg` | Hover elevation on listing cards |
| `--shadow-xl` / `--shadow-2xl` | Modals, hero overlays |

Utilities: `.nvg-shadow-sm`, `.nvg-shadow-lg`.

## Motion

- **Approach:** Intentional — micro-interactions on booking surfaces; respect reduced motion.
- **Easing:** `ease-out` for enter, `ease-in` for exit, `ease-in-out` for hover transforms.
- **Duration:**
  - micro: 100–150ms (color, opacity, border)
  - short: 200ms (scale, shadow on cards/chips)
  - medium: 250–400ms (sheet/dialog via tw-animate-css)
- **Library utilities:** `.nvg-animate-pulse` (0.5s), `.nvg-animate-ping` (1.5s) — map markers, loading emphasis.
- **Reduced motion:** `@media (prefers-reduced-motion: reduce)` disables custom animations; prefer opacity/color-only transitions.

## Icons

- **Booking components:** Phosphor Icons (`@phosphor-icons/react`) — regular/bold/fill weights.
- **shadcn ui/ internals:** Lucide acceptable for upstream primitives (calendar chevrons, dialog close) — do not mass-migrate.
- **Rule:** New booking-domain icons must use Phosphor.

## Internal-only components

Not exported from `@navigato/react` public API (used inside library only):

- `textarea`, `switch`, `avatar`, `command`, `input-group`

## Decisions Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-06-29 | Orange primary + warm stone neutrals | Revived Navigato brand identity |
| 2026-06-29 | SN Pro single-family typography | Modern, cohesive travel product feel |
| 2026-06-29 | shadcn copy-in under `ui/` | Full control, no npm blob |
| 2026-06-29 | Phosphor for booking, Lucide for ui/ | Match Andre prefs without fighting shadcn upstream |
| 2026-06-29 | Light default, opt-in `.dark` | Docs and demos default to light; dark tokens ready |
| 2026-06-29 | SN Pro via `<link>` not CSS `@import` | Performance — consumers add font link explicitly |
