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
- **Logo:** Astronaut cat mark (`logo-mark.svg`) — orange suit, cream helmet, waving paw — paired with SN Pro wordmark.

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

## What good looks like

A good system is a product other products ship with, not a component catalog that launched. Navigato is a small MIT travel-booking library — optimize vertical reuse inside SERP, PDP, and checkout, not Carbon-scale coverage. Component count is a weak health signal.

### Quality bar

- **Tokens vs components is the split.** Behavior and a11y live in the primitive (Radix / shadcn). Orange vs stone vs dark live in tokens. Do not fork a Dialog because the brand is orange. Identity is tokens + the astronaut cat mark. Chroma on primary booking actions, not every chrome.
- **Accessibility is a foundation, not a page.** Inherit Radix keyboard and focus. Add travel-specific contracts: date-picker keyboard, live regions for price updates, never disable Pay without an explanation. Orange-on-stone contrast must meet WCAG 2.2 AA. Components are necessary but not sufficient for an accessible product.
- **Thin semantic token layer.** Two layers: private core/option (ramps) + public semantic/decision roles (`color.text.danger`, `color.action.primary`). Pick tokens by meaning, not by matching hex. No third (component-token) layer unless a travel control truly needs a unique contract. DTCG-shaped naming is welcome; a Style Dictionary pipeline is not required while the only consumer is Tailwind v4 CSS variables.
- **Patterns are the product.** Buttons don't differentiate this library. Date range, guest picker, price-with-fees, sold-out, layover, booking error, results skeleton do. Harvest patterns from a real booking flow, then extract. Show primitives inside page instances (SERP, PDP, checkout) with real-ish content, not only isolation.
- **Docs answer when / when not.** A component is not `stable` without the skeleton below. Kitchen-sink stories are not documentation. Model: GOV.UK button-page judgment + shadcn copy-paste.

| Required | What it covers |
|----------|----------------|
| One-line purpose | Why this exists |
| Status | `draft` / `preview` / `stable` / `deprecated` |
| Live example + copy-paste | Something a consumer can ship |
| When to use / when not | Judgment, not a prop dump |
| Anatomy | Named parts |
| Variants | The intended set, not every combination |
| States | default, hover, focus-visible, active, disabled, loading, invalid, selected, expanded — as relevant |
| Content / editorial | Labels, empty copy, error copy |
| A11y contract | What the consumer must still do |
| One do / don't pair | A real booking mistake, not a generic tip |
| Props API | Typed, copyable |
| Related patterns | Where this shows up in the flow |

- **Distribution is honest.** `@navigato/react` is a versioned npm package (changelog, semver, deprecations in a minor before a major). Internally, shadcn stays copy-in under `ui/` so the file is editable. Document the consumer boundary: import from the package vs override tokens vs fork. Don't do neither — black-box npm with no tokens and no fork path.
- **Governance is twenty lines, not a committee.** Bugs and a11y always in. New primitive only if composition fails. New pattern if it appears twice in the booking flow. Breaking changes = major, with a deprecated minor first. Andre is the enforcer. Status badges; don't mix experiments with the public API.

### Definition of done

A part is not done until these exist together (Curtis: Discover → Design → Build → Doc → Publish):

- **Design** — states in the skeleton above.
- **Build** — Radix + Tailwind; tokens, not a brand fork.
- **Doc** — the skeleton above.
- **Publish** — versioned `@navigato/react` path (changelog / status).

### What this repo is not

A 200-person federated system, a three-tier token thesaurus, or a mandate without support. First release shows value in a travel pattern, not completeness of the shadcn catalog.

Sources: Brad Frost (tokens vs components); Nathan Curtis (product serving products; doc is a step); NN/g maturity (library ≠ system); Sparkbox 2022 (onboarding, a11y guidelines, docs pain); GOV.UK (when / when not); Atlassian (tokens by meaning); Lightning (patterns layer); shadcn/ui (copy-in vs npm); DTCG 2025.10.

## Decisions Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-09-01 | Quality bar parked in DESIGN.md | Source of truth for what "good" means; vertical reuse over catalog coverage |
| 2026-06-29 | Orange primary + warm stone neutrals | Revived Navigato brand identity |
| 2026-06-29 | SN Pro single-family typography | Modern, cohesive travel product feel |
| 2026-06-29 | shadcn copy-in under `ui/` | Full control, no npm blob |
| 2026-06-29 | Phosphor for booking, Lucide for ui/ | Match Andre prefs without fighting shadcn upstream |
| 2026-06-29 | Light default, opt-in `.dark` | Docs and demos default to light; dark tokens ready |
| 2026-06-29 | SN Pro via `<link>` not CSS `@import` | Performance — consumers add font link explicitly |
