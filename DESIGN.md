# Design System — Navigato

## Product Context

- **What this is:** MIT-licensed React component library and documentation site. The kit is multi-brand: **Navigato** (global luxury hotels and travel) and **Nox & Vale** (New York high-end fashion and accessories). Booking composites stay on the same stack.
- **Who it's for:** Product engineers building SERP, PDP, checkout, and (for Nox & Vale) product/object pages; portfolio viewers evaluating design-system craft.
- **Space/industry:** Travel / hospitality for Navigato; fashion / objects for Nox & Vale.
- **Project type:** Design system docs site + npm package (`@navigato/react`).

## Brands

Two brands, each with light and dark. Switch with `data-brand` on `<html>` (`navigato` | `nox-vale`) plus the existing `.dark` class. This is the same CSS-variable layer as `theme.css` / Tailwind v4 `@theme` — not a third theming library.

There is **no Navigato Black brand**. Dark Navigato is champagne on obsidian.

Orange, SN Pro, and the astronaut cat are out of the identity. They must not be the default look.

### Brand 1 — Navigato

Global luxury hotels and travel. Quiet luxury: hairline strokes, sharp corners, generous space.

- **Palette Obsidian**
  - mist `#F4F2EE`
  - graphite `#44403C`
  - ink `#1C1917`
  - champagne `#C4B59A`
  - black / obsidian `#0C0A09`
  - silver `#B8B4AE`
- **Light:** ink on mist.
- **Dark:** champagne on obsidian.
- **Type Inscribed:** Cinzel (Google Fonts, SIL OFL), all-caps, wide tracking — wordmark and display. **Neue Haas Grotesk is commercial; do not vendor it.** UI/body uses the **Helvetica Neue system stack** (`"Helvetica Neue", Helvetica, Arial, sans-serif`) as the licensed grotesk substitute.
- **Mark:** globe — perfect circle, horizontal equator, vertical meridian, two curved longitudes (one ellipse), eight-pointed compass star at center (four long cardinal, four short diagonal). Hairline stroke. Files: `packages/navigato/src/marks/globe.svg`, `GlobeMark`.

### Brand 2 — Nox & Vale

New York high-end fashion and accessories, men and women. White-cube gallery: cobalt as the only accent, geometric sans, sharp corners.

- **Palette Gallery**
  - plaster `#F4F2EF`
  - night `#111318`
  - cobalt `#1E4FD6`
  - pewter `#9A9AA3`
  - pearl `#E7E4DE`
- **Light:** night on plaster.
- **Dark:** plaster on night. Cobalt is the only accent — marks and small cues, not every chrome.
- **Type:** geometric sans, tracked, all-caps for the wordmark. No Didone. **Futura is commercial.** **Jost** (Google Fonts, SIL OFL) is the shippable Futura substitute.
- **Marks:** **Disc** — filled cobalt circle, quiet/header (`DiscMark`). **Brush N** — original calligraphic capital N in an open enso/brush circle, cobalt, hero/signature (`BrushNMark`). Redrawn as original SVG; do not embed or trace stock assets.

Phosphor is for UI icons. Phosphor is not the brand mark.

## Aesthetic Direction

- **Direction:** Quiet luxury (Navigato) and white-cube fashion (Nox & Vale). Identity is palettes + type roles + marks + **0px radius**.
- **Decoration level:** Restrained — hairline borders, almost no elevation. Shadows are 1px rings, not warm drop shadows.
- **Mood:** Inscribed travel vs gallery objects. Never approachable-orange utility.
- **Corners:** Sharp everywhere (`--radius: 0`). `rounded-full` stays only where geometry is a circle (switch, slider thumb, disc).

## Typography

- **Navigato display / wordmark:** Cinzel, all-caps, `--tracking-display: 0.22em`.
- **Navigato UI / body / data:** Helvetica Neue stack with `tabular-nums` where prices align.
- **Nox & Vale display / wordmark / UI:** Jost, all-caps on wordmark and display, `--tracking-display: 0.32em`.
- **Code:** System monospace stack (`ui-monospace`, Cascadia Code, Source Code Pro).
- **Loading:** Google Fonts CDN for Cinzel + Jost. Helvetica Neue is system — the package does not inject it. Consumers add the Cinzel/Jost `<link>` when they need those faces.
- **Scale (docs-prose):**
  - h1: 2.25rem / heading-weight / uppercase / `--tracking-display`
  - h2: 1.5rem / uppercase / 0.7× tracking
  - h3: 1.125rem / uppercase / 0.45× tracking
  - body: 0.9375rem / 1.65 line-height
  - lead (`.nvg-lead`): 1.125rem / muted-foreground
  - uppercase labels (`.nvg-uppercase`): 0.6875rem / 500 / 0.14em tracking
  - wordmark (`.nvg-wordmark`): display face, uppercase, `--tracking-display`

## Color

- **Approach:** Named palettes (Obsidian, Gallery) mapped onto the existing semantic shadcn roles (`background`, `foreground`, `primary`, `muted`, `accent`, …). Pick tokens by meaning.
- **Theming:** `:root` / `[data-brand="navigato"]` and `[data-brand="nox-vale"]`, each with a `.dark` override. Docs set `data-brand` and `.dark` on `<html>`.
- **Navigato primary:** ink (light) / champagne (dark). Champagne is `--brand` metal, not a loud CTA orange.
- **Nox & Vale primary:** night (light) / plaster (dark). `--accent` and `--brand` are cobalt only.
- **Destructive:** `#9F2D2D` — errors, not a brand color.
- **Semantic aliases:** `--color-brand`, `--color-silver` (muted-foreground), `--color-mid` (border).
- **Charts:** brand-led (champagne or cobalt), not orange.

## Spacing

- **Base unit:** 4px (Tailwind default).
- **Density:** Generous — luxury and gallery pages need breathing room.
- **Scale:** Tailwind spacing scale (1 = 4px). Common: `gap-2` (8px), `gap-4` (16px), `p-5`/`p-6` (20–24px) for cards and sidebar.

## Layout

- **Approach:** Grid-disciplined docs shell; flexible booking composites; a small fashion/object page for Nox & Vale (not a fake hotel SERP).
- **Docs grid:** 288px sticky sidebar + fluid main (max-w-5xl).
- **Max content width:** 64rem (5xl) for docs prose.
- **Border radius:** Base `--radius: 0px`. All `--radius-*` theme keys are 0.

## Shadows

Hairline rings, not warm elevation:

| Token | Use |
|-------|-----|
| `--shadow-2xs` / `--shadow-xs` | 1px foreground ring |
| `--shadow-sm` | Cards at rest |
| `--shadow-md` | Popovers, dropdowns |
| `--shadow-lg` | Hover emphasis |
| `--shadow-xl` / `--shadow-2xl` | Modals |

Utilities: `.nvg-shadow-sm`, `.nvg-shadow-lg`.

## Motion

- **Approach:** Intentional — micro-interactions on booking surfaces; respect reduced motion.
- **Easing:** `ease-out` for enter, `ease-in` for exit, `ease-in-out` for hover transforms.
- **Duration:**
  - micro: 100–150ms (color, opacity, border)
  - short: 200ms (opacity, hairline ring)
  - medium: 250–400ms (sheet/dialog via tw-animate-css)
- **Library utilities:** `.nvg-animate-pulse` (0.5s), `.nvg-animate-ping` (1.5s) — map markers, loading emphasis.
- **Reduced motion:** `@media (prefers-reduced-motion: reduce)` disables custom animations; prefer opacity/color-only transitions.

## Icons

- **Booking components:** Phosphor Icons (`@phosphor-icons/react`) — regular/bold/fill weights.
- **shadcn ui/ internals:** Lucide acceptable for upstream primitives (calendar chevrons, dialog close) — do not mass-migrate.
- **Brand marks:** globe, disc, brush N — SVG in `packages/navigato/src/marks/`. Not Phosphor.
- **Rule:** New booking-domain icons must use Phosphor. Do not use Phosphor as a logo.

## Internal-only components

Not exported from `@navigato/react` public API (used inside library only):

- `textarea`, `switch`, `avatar`, `command`, `input-group`

Public mark exports: `GlobeMark`, `DiscMark`, `BrushNMark`.

## What good looks like

A good system is a product other products ship with, not a component catalog that launched. Navigato is a small MIT travel-booking library that now hosts a second brand on the same primitives — optimize vertical reuse inside SERP, PDP, and checkout, plus one honest fashion/object page, not Carbon-scale coverage. Component count is a weak health signal.

### Quality bar

- **Tokens vs components is the split.** Behavior and a11y live in the primitive (Radix / shadcn). Obsidian vs Gallery vs dark live in tokens. Do not fork a Dialog because the brand changed. Identity is tokens + the globe / disc / brush-N marks. Chroma (champagne or cobalt) is spare, not every chrome.
- **Accessibility is a foundation, not a page.** Inherit Radix keyboard and focus. Add travel-specific contracts: date-picker keyboard, live regions for price updates, never disable Pay without an explanation. Ink-on-mist, champagne-on-obsidian, night-on-plaster, and plaster-on-night must meet WCAG 2.2 AA. Components are necessary but not sufficient for an accessible product.
- **Thin semantic token layer.** Two layers: private core/option (named palettes) + public semantic/decision roles (`background`, `primary`, `accent`). Pick tokens by meaning, not by matching hex. No third (component-token) layer unless a travel control truly needs a unique contract. DTCG-shaped naming is welcome; a Style Dictionary pipeline is not required while the only consumer is Tailwind v4 CSS variables. Fit `data-brand` + `.dark` — do not invent a theming library.
- **Patterns are the product.** Buttons don't differentiate this library. Date range, guest picker, price-with-fees, sold-out, layover, booking error, results skeleton do. Harvest patterns from a real booking flow, then extract. Show primitives inside page instances (SERP, PDP, checkout, Nox & Vale gallery) with real-ish content, not only isolation. Do not invent amenity facets; filter chips stay honest.
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
- **Governance is twenty lines, not a committee.** Bugs and a11y always in. New primitive only if composition fails. New pattern if it appears twice in the booking flow. Breaking changes = major, with a deprecated minor first. Andre is the enforcer. Status badges; don't mix experiments with the public API. Booking preview parts stay preview, not stable. Do not bump to 1.0 while they are preview.

### Definition of done

A part is not done until these exist together (Curtis: Discover → Design → Build → Doc → Publish):

- **Design** — states in the skeleton above.
- **Build** — Radix + Tailwind; tokens, not a brand fork.
- **Doc** — the skeleton above.
- **Publish** — versioned `@navigato/react` path (changelog / status).

### What this repo is not

A 200-person federated system, a three-tier token thesaurus, or a mandate without support. First release shows value in a travel pattern, not completeness of the shadcn catalog. It is not a greenfield rebuild, not an npm blob wrap, and not a second hotel SERP for Nox & Vale.

Sources: Brad Frost (tokens vs components); Nathan Curtis (product serving products; doc is a step); NN/g maturity (library ≠ system); Sparkbox 2022 (onboarding, a11y guidelines, docs pain); GOV.UK (when / when not); Atlassian (tokens by meaning); Lightning (patterns layer); shadcn/ui (copy-in vs npm); DTCG 2025.10.

## How AI changes this

AI does not replace the system. It turns it into a control plane. Unconstrained generation is vibe coding. DS+AI means models may only use production-grade Navigato materials. When those materials are incomplete or unreadable, agents invent lookalikes — stock shadcn, fabricated steppers, Inter/purple slop.

### Four axes

- **Made.** Humans set contracts; agents execute inside them. Skills, this file, and `AGENTS.md` are the system-for-agents. Figma↔code is an MCP loop when a Figma library exists (Code Connect = real imports vs invented UI). Coded first drafts are expected; review asks "did they use the right pattern?" (see Patterns are the product).
- **Distributed.** "Install" for an agent is connect + retrieve, not only npm. Copy-in registry + skill beat a sealed package for LLMs. On-demand beats dumping the whole system into context. `llms.txt` is an index, not a teacher. Human install path stays in Distribution is honest.
- **Documented.** Docs are an API. Anatomy, states, when/when-not, a11y, and real import paths must be fetchable as markdown/JSON — the skeleton in What good looks like. Pretty Astro HTML alone is invisible to agents. If the same generated mistake repeats, encode it as a generation rule.
- **Adopted.** Agents are a new adopter class, often the first reader. Measure whether generated UI stays on-system (real primitives, real tokens, documented props), not npm downloads. Types/lint are a zero-token enforcer.

### Navigato-specific risk

This library looks like shadcn. v0 and similar tools are trained on default shadcn. Standing rule: use `@navigato/react` or copied Navigato files — never emit `@/components/ui` from memory. Document gaps; if there is no match, flag it. Do not invent a fare calendar or itinerary stepper. Do not invent amenity facets.

### What lives where

Do not duplicate the full system in every layer.

| Layer | Job |
|-------|-----|
| DESIGN.md (this file) | Portable snapshot: brands, semantic tokens, density, marks, font substitutes, the quality bar. Not prop tables. Not how to rebuild Button (that causes forks). |
| Astro docs | Humans. Brand + mode switch. Add a markdown twin per page + `/llms.txt` so agents can parse. |
| Skill(s) | Highest leverage for cloud agents. Narrow: never invent props/tokens/icons; copy-in vs package; Phosphor names only from the catalog (see Icons); never emit `@/components/ui` from memory; booking a11y as in Accessibility is a foundation. `AGENTS.md` is two screens pointing at skills + "query docs/registry before any prop." |
| Registry | How copy-in consumers install (`registry.json`, model-written descriptions). |
| npm `@navigato/react` | Canonical runtime for teams that import. Types are the linter. |
| MCP / Code Connect / Storybook MCP | Later. Skills + registry + markdown first. |

### Standing agent rules

1. Never invent component names, props, tokens, utility classes, or Phosphor icon names.
2. Prefer existing primitives; new primitive only if composition fails (same as Governance).
3. Restyle via tokens, never fork Button/Dialog for a brand (same as Tokens vs components).
4. If unverifiable, do not use it; flag the gap.
5. Plan against the system API before generating.

Sources: parked 2026-09-01 from the DS+AI research (control plane; agent as adopter class; `llms.txt` as index).

## Decisions Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-09-03 | Multi-brand via `data-brand` + existing `.dark` CSS variables | Fit the kit; do not invent a third theming library |
| 2026-09-03 | Obsidian + Gallery palettes; sharp corners; Cinzel / Helvetica Neue stack / Jost | Lock Navigato luxury travel and Nox & Vale gallery fashion |
| 2026-09-03 | Globe, Disc, Brush N as original SVG marks | Identity is tokens + marks; Phosphor stays UI-only |
| 2026-09-01 | AI control-plane note parked next to the quality bar | Agents are an adopter class; unconstrained generation is vibe coding |
| 2026-09-01 | Quality bar parked in DESIGN.md | Source of truth for what "good" means; vertical reuse over catalog coverage |
| 2026-06-29 | shadcn copy-in under `ui/` | Full control, no npm blob |
| 2026-06-29 | Phosphor for booking, Lucide for ui/ | Match Andre prefs without fighting shadcn upstream |
| 2026-06-29 | Light default, opt-in `.dark` | Docs and demos default to light; dark tokens ready |
| 2026-06-29 | Display fonts via `<link>` not CSS `@import` | Performance — consumers add font link explicitly |
