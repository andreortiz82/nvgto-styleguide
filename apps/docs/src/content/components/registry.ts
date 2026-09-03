import type { ComponentDocMeta } from "./types";

function doc(
  partial: ComponentDocMeta & { usage: string; props: ComponentDocMeta["props"] },
): ComponentDocMeta {
  return partial;
}

export const componentDocs: Record<string, ComponentDocMeta> = {
  button: doc({
    slug: "button",
    tier: "atoms",
    title: "Button",
    description: "shadcn/ui button primitive themed for Navigato.",
    usage: `import { Button } from '@navigato/react'\n\n<Button>Search</Button>\n<Button variant="outline">Filters</Button>`,
    examples: [
      { id: "variants", title: "Variants" },
      { id: "sizes", title: "Sizes" },
      { id: "states", title: "States" },
    ],
    props: [
      { name: "variant", type: "string", default: "default", description: "Visual variant." },
      { name: "size", type: "string", default: "default", description: "Button size." },
      { name: "className", type: "string", description: "Additional classes." },
    ],
  }),
  badge: doc({
    slug: "badge",
    tier: "atoms",
    title: "Badge",
    description: "Compact label for counts and filter states.",
    usage: `import { Badge } from '@navigato/react'\n\n<Badge>Guest favorite</Badge>`,
    props: [{ name: "variant", type: "string", default: "default", description: "Badge style." }],
  }),
  input: doc({
    slug: "input",
    tier: "atoms",
    title: "Input",
    description: "Text input primitive for forms and search fields.",
    usage: `import { Input } from '@navigato/react'\n\n<Input placeholder="Email" />`,
    props: [{ name: "type", type: "string", default: "text", description: "HTML input type." }],
  }),
  skeleton: doc({
    slug: "skeleton",
    tier: "atoms",
    title: "Skeleton",
    description: "Loading placeholder for cards and content.",
    usage: `import { Skeleton } from '@navigato/react'\n\n<Skeleton className="h-4 w-full" />`,
    props: [{ name: "className", type: "string", description: "Size via Tailwind classes." }],
  }),
  card: doc({
    slug: "card",
    tier: "atoms",
    title: "Card",
    description: "Surface container for listing summaries and widgets.",
    usage: `import { Card, CardHeader, CardTitle, CardContent } from '@navigato/react'\n\n<Card><CardHeader><CardTitle>Title</CardTitle></CardHeader></Card>`,
    props: [{ name: "className", type: "string", description: "Additional classes." }],
  }),
  tabs: doc({
    slug: "tabs",
    tier: "atoms",
    title: "Tabs",
    description: "Tabbed content for PDP sections.",
    usage: `import { Tabs, TabsList, TabsTrigger, TabsContent } from '@navigato/react'`,
    props: [{ name: "defaultValue", type: "string", description: "Initial tab id." }],
  }),
  select: doc({
    slug: "select",
    tier: "atoms",
    title: "Select",
    description: "Dropdown select for sort and filter options.",
    usage: `import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@navigato/react'`,
    props: [{ name: "value", type: "string", description: "Controlled value." }],
  }),
  sheet: doc({
    slug: "sheet",
    tier: "atoms",
    title: "Sheet",
    description: "Slide-over panel for mobile filters and nav.",
    usage: `import { Sheet, SheetTrigger, SheetContent, SheetTitle } from '@navigato/react'`,
    props: [{ name: "side", type: "string", default: "right", description: "Edge to slide from." }],
  }),
  dialog: doc({
    slug: "dialog",
    tier: "atoms",
    title: "Dialog",
    description: "Modal dialog for policies and confirmations.",
    usage: `import { Dialog, DialogTrigger, DialogContent, DialogTitle } from '@navigato/react'`,
    props: [{ name: "open", type: "boolean", description: "Controlled open state." }],
  }),
  "date-range-picker": doc({
    slug: "date-range-picker",
    tier: "molecules",
    title: "DateRangePicker",
    description: "Check-in and check-out range for a stay search.",
    status: "preview",
    usage: `import { DateRangePicker } from "@navigato/react"
import type { DateRange } from "react-day-picker"

const [range, setRange] = useState<DateRange>()

<DateRangePicker value={range} onChange={setRange} />`,
    whenToUse: [
      "Stay search where the product is a night range, not a one-way fare.",
      "Inside BookingSearchBar or a SERP header, next to destination and guests.",
    ],
    whenNot: [
      "Single-date events, check-in-only day use, or a fare calendar. Do not invent a stepper of flight legs.",
      "A full booking widget on PDP — use BookingWidget, which composes this picker.",
    ],
    anatomy: [
      { name: "Trigger", description: "Outline button showing placeholder or formatted range." },
      { name: "Calendar icon", description: "Phosphor CalendarBlank. Not Lucide in booking UI." },
      { name: "Popover", description: "Range calendar; closes when from and to are set." },
    ],
    variants: "Layout only: one month vs two (`numberOfMonths`). No branded chrome variants — tokens carry identity, not the calendar.",
    states: [
      { name: "default", description: "Placeholder “Check in — Check out”." },
      { name: "selected", description: "From-only shows one date; from+to shows “MMM d — MMM d”." },
      { name: "expanded", description: "Popover open; DayPicker keyboard applies." },
      { name: "focus-visible", description: "Trigger uses the Button focus ring." },
    ],
    content: "Use an en dash in the placeholder. Don’t say “Start / End” on a stay product. Empty range is valid — never invent dates.",
    a11y: "Keyboard and focus come from Popover + DayPicker. The consumer must still put this control in a labeled search form (BookingSearchBar does). Do not disable the trigger without explaining why dates can’t be edited. Arrow keys move between days once the calendar is focused.",
    doDont: {
      do: "Keep check-in and check-out as one range control on SERP search.",
      dont: "Drop in a stock shadcn Calendar from memory, or two separate date inputs that don’t share a range.",
    },
    related: [
      { title: "BookingSearchBar", href: "/components/organisms/booking-search-bar/" },
      { title: "GuestSelector", href: "/components/molecules/guest-selector/" },
      { title: "BookingWidget", href: "/components/organisms/booking-widget/" },
      { title: "SERP", href: "/components/pages/serp/" },
      { title: "PDP", href: "/components/pages/pdp/" },
    ],
    examples: [{ id: "width", title: "Layout" }],
    props: [
      { name: "value", type: "DateRange", description: "Selected range from react-day-picker." },
      { name: "onChange", type: "(range?: DateRange) => void", description: "Fires on select. Popover closes when both ends exist." },
      { name: "placeholder", type: "string", default: '"Check in — Check out"', description: "Trigger label when empty." },
      { name: "numberOfMonths", type: "number", default: "2", description: "Calendar months shown." },
      { name: "className", type: "string", description: "Classes on the trigger button." },
    ],
  }),
  "guest-selector": doc({
    slug: "guest-selector",
    tier: "molecules",
    title: "GuestSelector",
    description: "Adults, children, and rooms for a stay search.",
    status: "preview",
    usage: `import { GuestSelector } from "@navigato/react"
import type { GuestCounts } from "@navigato/react"

const [guests, setGuests] = useState<GuestCounts>({ adults: 2, children: 0, rooms: 1 })

<GuestSelector value={guests} onChange={setGuests} />`,
    whenToUse: [
      "Hotel / STR search and booking bars that need occupancy, not passenger type.",
      "Paired with DateRangePicker and DestinationInput.",
    ],
    whenNot: [
      "Airline passenger pickers (adult/child/infant + cabin). Don’t invent that here.",
      "A party-size slider. Occupancy is stepped counts with minima.",
    ],
    anatomy: [
      { name: "Trigger", description: "Summary string: “2 adults, 1 room”." },
      { name: "Users icon", description: "Phosphor Users." },
      { name: "Stepper rows", description: "Adults (min 1), children (min 0), rooms (min 1), each with ±." },
    ],
    variants: "No visual variants. Compact vs full width is layout (`className`), not a new component.",
    states: [
      { name: "default", description: "2 adults, 0 children, 1 room until controlled." },
      { name: "expanded", description: "Popover open with three steppers." },
      { name: "disabled", description: "Minus disabled at min; plus disabled at maxAdults / maxChildren / maxRooms." },
      { name: "focus-visible", description: "Trigger and stepper buttons use Button rings." },
    ],
    content: "Adults = ages 13+. Children = ages 0–12. Don’t hide rooms on an STR SERP if the inventory is room-based; don’t show rooms if your product is entire-place only — then set maxRooms={1} and leave the row, or flag a gap. Don’t write “guests” as a single ambiguous number.",
    a11y: "Each stepper has aria-label Increase/Decrease {row}. The trigger exposes the summary. Consumer must keep this inside a search form and not disable Search when counts are valid. Don’t remove the min-1 adult guard.",
    doDont: {
      do: "Start at 2 adults, 1 room — the booking default — and let the steppers speak.",
      dont: "Use a free-text “number of guests” input, or emit a shadcn Select of 1–16 from memory.",
    },
    related: [
      { title: "BookingSearchBar", href: "/components/organisms/booking-search-bar/" },
      { title: "DateRangePicker", href: "/components/molecules/date-range-picker/" },
      { title: "BookingWidget", href: "/components/organisms/booking-widget/" },
      { title: "SERP", href: "/components/pages/serp/" },
      { title: "PDP", href: "/components/pages/pdp/" },
    ],
    examples: [{ id: "compact", title: "Compact width" }],
    props: [
      { name: "value", type: "GuestCounts", description: "{ adults, children, rooms }. Uncontrolled if omitted." },
      { name: "onChange", type: "(value: GuestCounts) => void", description: "Fires on every stepper change." },
      { name: "maxAdults", type: "number", default: "16", description: "Upper bound for adults." },
      { name: "maxChildren", type: "number", default: "10", description: "Upper bound for children." },
      { name: "maxRooms", type: "number", default: "8", description: "Upper bound for rooms." },
      { name: "className", type: "string", description: "Classes on the trigger button." },
    ],
  }),
  "destination-input": doc({
    slug: "destination-input",
    tier: "molecules",
    title: "DestinationInput",
    description: "Where-to combobox for a stay search.",
    status: "preview",
    usage: `import { DestinationInput } from "@navigato/react"
import type { DestinationOption } from "@navigato/react"

const [dest, setDest] = useState<string>()

<DestinationInput
  value={dest}
  onChange={(value) => setDest(value)}
/>`,
    whenToUse: [
      "Stay search for a city or neighborhood — inside BookingSearchBar or a SERP header.",
      "A single destination, paired with DateRangePicker and GuestSelector.",
    ],
    whenNot: [
      "Airport / IATA pickers or a multi-city itinerary. Don’t invent flight legs.",
      "A free-text Input that doesn’t resolve to an option. This is a combobox, not a geocoder.",
    ],
    anatomy: [
      { name: "Trigger", description: "Shows placeholder or the selected label. Phosphor MapPin — not Lucide." },
      { name: "Search", description: "Command input inside the popover (“Search destinations…”)." },
      { name: "Option", description: "label + optional subtitle. Selecting fires onChange and closes." },
    ],
    variants: "No visual variants. Width is layout (`className`). Default options are a demo list, not a geo API.",
    states: [
      { name: "default", description: "Placeholder “Where to?” until a value matches an option." },
      { name: "selected", description: "Trigger shows the option label." },
      { name: "expanded", description: "Popover open; typeahead filters labels." },
      { name: "empty", description: "“No destination found.” when the query matches nothing." },
      { name: "focus-visible", description: "Trigger uses the ring token." },
    ],
    content: "Placeholder is “Where to?”, not “Location” or “City”. Option labels are places (“Austin, TX”), values are slugs (`austin-tx`). Don’t ship the four demo cities as production inventory.",
    a11y: "Combobox behavior comes from Command + Popover. Consumer must keep this in a labeled search form (BookingSearchBar does). Don’t disable the trigger without saying why destination can’t change. Command is internal — don’t import `@/components/ui/command`.",
    doDont: {
      do: "Pass options from your destination list and let BookingSearchBar submit the selected value.",
      dont: "Emit a shadcn Input + Command from `@/components/ui` and call it a search field.",
    },
    related: [
      { title: "BookingSearchBar", href: "/components/organisms/booking-search-bar/" },
      { title: "DateRangePicker", href: "/components/molecules/date-range-picker/" },
      { title: "GuestSelector", href: "/components/molecules/guest-selector/" },
      { title: "SERP", href: "/components/pages/serp/" },
    ],
    props: [
      { name: "options", type: "DestinationOption[]", description: "{ label, value, subtitle? }. Defaults to Austin, Barcelona, Tokyo, Paris." },
      { name: "value", type: "string", description: "Selected option value. Uncontrolled if omitted." },
      { name: "onChange", type: "(value: string, option?: DestinationOption) => void", description: "Fires with the option value and the option object." },
      { name: "placeholder", type: "string", default: '"Where to?"', description: "Trigger label when nothing is selected." },
      { name: "className", type: "string", description: "Classes on the trigger button." },
    ],
  }),
  "star-rating": doc({
    slug: "star-rating",
    tier: "molecules",
    title: "StarRating",
    description: "Stay rating stars — display on a card, or a min-rating filter.",
    status: "preview",
    usage: `import { StarRating } from "@navigato/react"

<StarRating value={4.5} showValue reviewCount={128} readOnly />`,
    whenToUse: [
      "Read-only score on ListingCard, PDP header, or ReviewSummary.",
      "A min-rating control (SearchHeader) — omit readOnly and handle onChange.",
    ],
    whenNot: [
      "A 10-point hotel scale or Airbnb category scores. This is 0–max stars.",
      "The full PDP reviews block — that’s ReviewSummary, which composes this.",
    ],
    anatomy: [
      { name: "Stars", description: "Phosphor Star, fill vs regular. Fill is Math.round(value), not half-star clicks." },
      { name: "Value", description: "Optional one-decimal number when showValue." },
      { name: "Count", description: "Optional “({reviewCount})” in muted text." },
    ],
    variants: "Size only: sm / md / lg (14 / 18 / 24). readOnly vs interactive is a mode, not chrome. Orange is the filled star token — don’t fork Star.",
    states: [
      { name: "default", description: "value={0} — all regular (empty) stars." },
      { name: "selected", description: "Stars up to Math.round(value) are filled primary." },
      { name: "disabled", description: "readOnly disables each star button; cursor stays default." },
      { name: "focus-visible", description: "Interactive stars are buttons; keep a visible focus ring from the page." },
    ],
    content: "showValue prints one decimal (4.5). Review count is the integer in parens, not “128 reviews” — ListingCard and ReviewSummary add that noun. Don’t write ASCII stars.",
    a11y: "readOnly uses role=\"img\"; interactive uses role=\"group\". The group label is “{value} out of {max} stars”. Each star has aria-label “{n} stars”. Prefer readOnly on SERP/PDP display. onChange fires the integer 1…max, not a half.",
    doDont: {
      do: "Pass the stay’s average with readOnly + showValue + reviewCount on a tile or PDP.",
      dont: "Drop Lucide stars from memory, or invent clickable half-stars this API does not have.",
    },
    related: [
      { title: "ListingCard", href: "/components/organisms/listing-card/" },
      { title: "ReviewSummary", href: "/components/organisms/review-summary/" },
      { title: "SearchHeader", href: "/components/organisms/search-header/" },
      { title: "PDP", href: "/components/pages/pdp/" },
    ],
    examples: [{ id: "interactive", title: "Interactive filter" }],
    props: [
      { name: "value", type: "number", default: "0", description: "Score. Display fill uses Math.round(value)." },
      { name: "max", type: "number", default: "5", description: "Star count." },
      { name: "onChange", type: "(value: number) => void", description: "Fires the clicked integer 1…max. Ignored when readOnly." },
      { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Icon size." },
      { name: "showValue", type: "boolean", default: "false", description: "Print value.toFixed(1) next to the stars." },
      { name: "reviewCount", type: "number", description: "Muted count in parentheses. Hidden if omitted." },
      { name: "readOnly", type: "boolean", default: "false", description: "Display mode. Disables star buttons." },
      { name: "className", type: "string", description: "Classes on the row." },
    ],
  }),
  "price-range-slider": doc({
    slug: "price-range-slider",
    tier: "molecules",
    title: "PriceRangeSlider",
    description: "Dual-thumb nightly price filter.",
    status: "preview",
    usage: `import { PriceRangeSlider } from "@navigato/react"

const [range, setRange] = useState<[number, number]>([50, 400])

<PriceRangeSlider min={50} max={800} value={range} onChange={setRange} />`,
    whenToUse: [
      "A SERP price facet you actually filter with — controlled value + onChange.",
      "Inside FilterSheet or SearchHeader via their composed min / max / value / onChange (those hosts default to 50–800).",
    ],
    whenNot: [
      "A stay total — that’s PriceBreakdown after dates exist.",
      "A fare calendar or price histogram. Don’t invent one.",
    ],
    anatomy: [
      { name: "Label", description: "Default “Price range”." },
      { name: "Range text", description: "formatValue(min) – formatValue(max), tabular-nums, en dash." },
      { name: "Slider", description: "shadcn Slider, two thumbs, step 10 (not a prop)." },
    ],
    variants: "No branded chrome variants. Currency is formatValue, not a locale prop. SearchHeader and FilterSheet compose min / max / value / onChange — don’t invent a second slider.",
    states: [
      { name: "default", description: "Uncontrolled starts at [min, round(max × 0.5)]." },
      { name: "selected", description: "Thumbs sit on the current pair." },
      { name: "focus-visible", description: "Thumb focus comes from Slider." },
    ],
    content: "Label is “Price range”, not “Budget”. Nightly unless you say otherwise in formatValue. Don’t print a made-up “median $210”.",
    a11y: "The Label primitive marks the group. Consumer must still update FilterBar’s stay count when the range changes. Don’t hide the numeric range. Step is fixed at 10.",
    doDont: {
      do: "Control value and onChange when this slider filters the SERP.",
      dont: "Drop a raw Slider from `@/components/ui` and call it a price filter, or invent a distribution chart.",
    },
    related: [
      { title: "FilterSheet", href: "/components/organisms/filter-sheet/" },
      { title: "SearchHeader", href: "/components/organisms/search-header/" },
      { title: "FilterBar", href: "/components/organisms/filter-bar/" },
      { title: "SERP", href: "/components/pages/serp/" },
    ],
    props: [
      { name: "min", type: "number", default: "0", description: "Lower bound." },
      { name: "max", type: "number", default: "1000", description: "Upper bound." },
      { name: "value", type: "[number, number]", description: "Controlled pair. Uncontrolled default is [min, round(max × 0.5)]." },
      { name: "onChange", type: "(value: [number, number]) => void", description: "Fires on thumb move." },
      { name: "formatValue", type: "(value: number) => string", default: '(v) => `$${v}`', description: "How each end is printed." },
      { name: "label", type: "string", default: '"Price range"', description: "Visible label." },
      { name: "className", type: "string", description: "Classes on the stack." },
    ],
  }),
  "map-price-marker": doc({
    slug: "map-price-marker",
    tier: "molecules",
    title: "MapPriceMarker",
    description: "Map pin with a formatted nightly price.",
    status: "preview",
    usage: `import { MapPriceMarker } from "@navigato/react"

<MapPriceMarker price="$189" saved={false} onClick={selectStay} />`,
    whenToUse: [
      "SERP map panel for bookable stays — price as a string, not a number.",
      "A selected pin (`selected`) that matches the highlighted card.",
    ],
    whenNot: [
      "Sold-out inventory. The SERP demo omits sold-out stays from the map — don’t pin a live price on an unavailable stay.",
      "The listing tile itself — that’s ListingCard.",
    ],
    anatomy: [
      { name: "Price", description: "Formatted label (`\"$189\"`). Not formatted inside the component." },
      { name: "Heart", description: "Phosphor Heart fill when saved. aria-hidden." },
      { name: "Caret", description: "CSS triangle in primary, or foreground when selected." },
    ],
    variants: "Content states, not style variants: default (primary), selected (foreground + pulse), saved (heart). Orange is the default pin — don’t fork a second marker.",
    states: [
      { name: "default", description: "Primary fill, nightly price." },
      { name: "hover", description: "Slight scale + shadow." },
      { name: "selected", description: "Foreground fill and `.nvg-animate-pulse`. Reduced motion disables the pulse." },
      { name: "saved", description: "Filled heart before the price." },
      { name: "focus-visible", description: "Button ring." },
    ],
    content: "Pass a formatted string (“$189”), not `189`. Don’t invent a crossed-out compare-at — the API has no originalPrice.",
    a11y: "Rendered as a button. Consumer must wire onClick to the listing and keep keyboard access. selected is visual only — add aria-pressed if this is a toggle. Heart is decorative. Don’t put this inside another button.",
    doDont: {
      do: "Show formatted nightly prices for stays that can still be booked.",
      dont: "Pin a sold-out stay with a live rate, or emit a Google Maps InfoWindow from memory.",
    },
    related: [
      { title: "ListingCard", href: "/components/organisms/listing-card/" },
      { title: "SERP", href: "/components/pages/serp/" },
    ],
    props: [
      { name: "price", type: "string", required: true, description: "Formatted price label shown on the pin." },
      { name: "saved", type: "boolean", default: "false", description: "Shows a filled heart." },
      { name: "selected", type: "boolean", default: "false", description: "Foreground treatment and pulse." },
      { name: "onClick", type: "() => void", description: "Pin click. Consumer routes or highlights the card." },
      { name: "className", type: "string", description: "Classes on the button." },
    ],
  }),
  "sort-select": doc({
    slug: "sort-select",
    tier: "molecules",
    title: "SortSelect",
    description: "SERP sort for stays: recommended, price, rating, distance.",
    status: "preview",
    usage: `import { SortSelect } from "@navigato/react"

<SortSelect value="recommended" onChange={setSort} />`,
    whenToUse: [
      "SERP sort, usually composed by FilterBar (`sortValue` / `onSortChange`).",
      "A short list of stay-search sorts — not a generic form Select.",
    ],
    whenNot: [
      "Amenity or type filters — those are FilterChip.",
      "Flight sorts (duration, layover). Don’t invent those keys here.",
    ],
    anatomy: [
      { name: "Trigger", description: "shadcn SelectTrigger; placeholder “Sort by”." },
      { name: "Items", description: "label + value. Defaults: recommended, price-asc, price-desc, rating, distance." },
    ],
    variants: "No visual variants. Pass `options` to relabel. Width is `className`.",
    states: [
      { name: "default", description: "value defaults to \"recommended\"." },
      { name: "selected", description: "Trigger shows the matching label." },
      { name: "expanded", description: "List open. Keyboard from Select." },
      { name: "focus-visible", description: "Trigger ring from Select." },
    ],
    content: "Labels stay human (“Price: low to high”), not raw keys. Don’t print “sort_price_asc”.",
    a11y: "Keyboard and focus come from Select. Consumer owns the sort and must update the stay list. FilterBar is the usual host. Don’t disable the trigger with no explanation.",
    doDont: {
      do: "Keep the five stay-search sorts unless the product truly has another.",
      dont: "Fork Select because the brand changed, or drop a native <select> next to FilterChips from memory.",
    },
    related: [
      { title: "FilterBar", href: "/components/organisms/filter-bar/" },
      { title: "FilterChip", href: "/components/molecules/filter-chip/" },
      { title: "SERP", href: "/components/pages/serp/" },
    ],
    props: [
      { name: "value", type: "string", default: '"recommended"', description: "Selected sort key." },
      { name: "onChange", type: "(value: string) => void", description: "Fires the next key." },
      { name: "options", type: "SortOption[]", description: "{ label, value }[]. Default recommended / price / rating / distance." },
      { name: "className", type: "string", description: "Classes on the trigger." },
    ],
  }),
  "filter-chip": doc({
    slug: "filter-chip",
    tier: "molecules",
    title: "FilterChip",
    description: "Toggleable amenity or trip-fact chip, with optional remove.",
    status: "preview",
    usage: `import { FilterChip } from "@navigato/react"

<FilterChip label="Pool" active onToggle={togglePool} onRemove={clearPool} />`,
    whenToUse: [
      "SERP refine chips on FilterBar (amenities, free cancellation, pets).",
      "An active chip that can clear itself (`onRemove` only renders when active).",
    ],
    whenNot: [
      "PDP amenity facts — that’s AmenityGrid.",
      "A tag input or a 40-item facet encyclopedia. Don’t invent one.",
    ],
    anatomy: [
      { name: "Badge", description: "outline when inactive; default (primary) when active." },
      { name: "Remove", description: "Phosphor X. Only if active and onRemove is passed." },
    ],
    variants: "Active vs inactive is state, not a named variant. No size prop — layout is `className`.",
    states: [
      { name: "default", description: "Outline badge, not selected." },
      { name: "selected", description: "Primary badge. Remove appears only with onRemove." },
      { name: "hover", description: "Cursor pointer; remove has a light wash." },
      { name: "focus-visible", description: "The outer control is a button." },
    ],
    content: "Labels are guest-facing (“Pool”, “Free cancellation”), not ids (`pool_outdoor`). Don’t use this as a “Sold out” badge on ListingCard.",
    a11y: "The chip is a button that calls onToggle. Remove is a nested control with aria-label “Remove {label}” (Enter). Don’t nest FilterChip inside another button. Consumer updates FilterBar’s live stay count.",
    doDont: {
      do: "Toggle the chip and keep the FilterBar stay count in sync.",
      dont: "Use a lone Badge as a fake chip, or dump twenty ungrouped checkboxes into the bar.",
    },
    related: [
      { title: "FilterBar", href: "/components/organisms/filter-bar/" },
      { title: "FilterSheet", href: "/components/organisms/filter-sheet/" },
      { title: "AmenityGrid", href: "/components/organisms/amenity-grid/" },
      { title: "SERP", href: "/components/pages/serp/" },
    ],
    props: [
      { name: "label", type: "string", required: true, description: "Chip text." },
      { name: "active", type: "boolean", default: "false", description: "Selected. Switches Badge to default." },
      { name: "onToggle", type: "() => void", description: "Click on the chip (not the X)." },
      { name: "onRemove", type: "() => void", description: "X click when active. Hidden if omitted." },
      { name: "className", type: "string", description: "Classes on the outer button." },
    ],
  }),
  "booking-search-bar": doc({
    slug: "booking-search-bar",
    tier: "organisms",
    title: "BookingSearchBar",
    description: "Destination, dates, guests, and Search as one stay-search form.",
    status: "preview",
    usage: `import { BookingSearchBar } from "@navigato/react"

<BookingSearchBar
  onSearch={({ destination, dateRange, guests }) => {
    // route to SERP with these params
  }}
/>`,
    whenToUse: [
      "Hero or SERP search for stays: where, when, who, then Search.",
      "As the editable trip query above FilterBar on results.",
    ],
    whenNot: [
      "PDP reserve — that’s BookingWidget.",
      "A navbar of links. Don’t fork this into a generic shadcn Input group from memory.",
    ],
    anatomy: [
      { name: "DestinationInput", description: "Where to." },
      { name: "DateRangePicker", description: "Check-in — check-out." },
      { name: "GuestSelector", description: "Adults, children, rooms." },
      { name: "Search", description: "Primary button. Chroma belongs here." },
    ],
    variants: "One composition. Responsive grid (stacked, then four columns). No “minimal” fork — hide fields with composition, not a second bar.",
    states: [
      { name: "default", description: "Empty destination and dates; guests 2 adults / 1 room." },
      { name: "hover / focus-visible", description: "Children own their trigger rings; Search uses primary Button." },
      { name: "loading", description: "Not built in. Consumer disables Search and explains, or shows ListingCardSkeleton on the SERP — never a silent disable." },
    ],
    content: "Button label is “Search”, not “Submit”. Placeholder copy lives on the children. Don’t prefill fake cities.",
    a11y: "Rendered as role=\"search\" with submit. Consumer must handle onSearch (routing). If Search cannot run (invalid range), explain why — don’t disable Pay/Search with no message. Live-update the SERP result count in FilterBar, not inside this bar.",
    doDont: {
      do: "Keep destination, dates, guests, and Search on one bar, then show results below.",
      dont: "Emit `@/components/ui` Input + Calendar + a purple Button from memory and call it a search hero.",
    },
    related: [
      { title: "DateRangePicker", href: "/components/molecules/date-range-picker/" },
      { title: "GuestSelector", href: "/components/molecules/guest-selector/" },
      { title: "FilterBar", href: "/components/organisms/filter-bar/" },
      { title: "SERP", href: "/components/pages/serp/" },
    ],
    props: [
      {
        name: "onSearch",
        type: "(params: { destination?: string; dateRange?: DateRange; guests?: GuestCounts }) => void",
        description: "Fires on submit with current field values.",
      },
      { name: "className", type: "string", description: "Classes on the search form." },
    ],
  }),
  "listing-card": doc({
    slug: "listing-card",
    tier: "organisms",
    title: "ListingCard",
    description: "One stay in a SERP grid: photo, title, location, rating, nightly price.",
    status: "preview",
    usage: `import { ListingCard } from "@navigato/react"

<ListingCard
  title="Navigato Loft"
  location="South Congress, Austin"
  pricePerNight={189}
  rating={4.9}
  reviewCount={128}
  imageUrl="/hotel.jpg"
  badge="Guest favorite"
  saved={false}
  onSave={setSaved}
/>`,
    whenToUse: [
      "SERP result tiles and similar stay grids.",
      "Sold-out inventory in that same grid (`soldOut`), not a different card.",
    ],
    whenNot: [
      "PDP hero — use PhotoGallery + BookingWidget.",
      "A generic shadcn Card with an img. Don’t restyle Button into a listing.",
    ],
    anatomy: [
      { name: "Photo", description: "4:3 crop; optional gallery dots if `images` has more than one URL." },
      { name: "Badge", description: "Promo or status. Sold-out replaces it with “Sold out” (secondary, not primary chroma)." },
      { name: "Save", description: "Heart; works even when sold out." },
      { name: "Title + location", description: "Name and neighborhood." },
      { name: "Rating", description: "StarRating read-only with review count." },
      { name: "Price", description: "Nightly rate, or “Sold out” when unavailable." },
    ],
    variants: "Content variants, not style variants: badge, saved, gallery, soldOut. Loading is ListingCardSkeleton — don’t add a `loading` prop that paints a second card.",
    states: [
      { name: "default", description: "Available stay with nightly price." },
      { name: "hover", description: "Image scale + shadow when not sold out." },
      { name: "saved", description: "Filled primary heart; `aria-pressed`." },
      { name: "sold-out", description: "Muted photo, secondary badge, price replaced, click to open suppressed. Save still works." },
      { name: "loading", description: "Use ListingCardSkeleton in the same grid." },
    ],
    content: "Titles are property names, not “Listing 1”. Badges are short (“Guest favorite”, “Rare find”). Sold-out copy is “Sold out”, not “N/A”. Prices use tabular-nums; don’t invent crossed-out compare-at unless the API has it (it doesn’t).",
    a11y: "The card is not a link. Consumer must wrap it in an <a> or handle routing in onClick and keep keyboard access. Image alt is the title — pass a real title, not “photo”. Save is a labeled toggle. Don’t disable the whole card without soldOut; don’t use a Badge that still shows a bookable price.",
    doDont: {
      do: "Pass soldOut for dates that cannot be booked, and keep the tile in the grid.",
      dont: "Slap a “Sold out” Badge on a clickable card that still shows $210 / night.",
    },
    related: [
      { title: "ListingCardSkeleton", href: "/components/organisms/listing-card-skeleton/" },
      { title: "EmptyState", href: "/components/organisms/empty-state/" },
      { title: "FilterBar", href: "/components/organisms/filter-bar/" },
      { title: "SERP", href: "/components/pages/serp/" },
    ],
    examples: [
      { id: "variants", title: "Variants" },
      { id: "sold-out", title: "Sold out" },
    ],
    props: [
      { name: "title", type: "string", required: true, description: "Property name. Also used as image alt." },
      { name: "location", type: "string", description: "Neighborhood or city line." },
      { name: "pricePerNight", type: "number", required: true, description: "Nightly rate. Hidden in the UI when soldOut." },
      { name: "currency", type: "string", default: '"$"', description: "Prefix before the nightly rate." },
      { name: "rating", type: "number", default: "4.8", description: "Star value 0–5." },
      { name: "reviewCount", type: "number", default: "120", description: "Review count next to stars." },
      { name: "imageUrl", type: "string", required: true, description: "Primary photo. Required even if `images` is set." },
      { name: "images", type: "string[]", description: "Optional gallery; falls back to `[imageUrl]`." },
      { name: "badge", type: "string", description: "Promo label. Ignored when soldOut (shows “Sold out” instead)." },
      { name: "saved", type: "boolean", description: "Controlled saved/heart state." },
      { name: "soldOut", type: "boolean", default: "false", description: "Unavailable for the searched dates." },
      { name: "onSave", type: "(saved: boolean) => void", description: "Heart toggle. Fires even when soldOut." },
      { name: "onClick", type: "() => void", description: "Card click. Not called when soldOut." },
      { name: "className", type: "string", description: "Layout classes on the card." },
    ],
  }),
  "filter-bar": doc({
    slug: "filter-bar",
    tier: "organisms",
    title: "FilterBar",
    description: "Result count, amenity chips, sort, and an optional Filters sheet trigger.",
    status: "preview",
    usage: `import { FilterBar } from "@navigato/react"

<FilterBar
  resultCount={248}
  filters={[
    { id: "wifi", label: "WiFi", active: true },
    { id: "pool", label: "Pool" },
  ]}
  onFilterToggle={toggle}
  sortValue="recommended"
  onSortChange={setSort}
  onOpenSheet={openSheet}
/>`,
    whenToUse: [
      "SERP, under the search bar, to refine stays already returned.",
      "With FilterSheet on small screens (`onOpenSheet`).",
    ],
    whenNot: [
      "The search query itself (destination/dates/guests) — that’s BookingSearchBar.",
      "A vertical facet list on PDP. Don’t invent a Carbon-style filter tree.",
    ],
    anatomy: [
      { name: "Result count", description: "“0 stays” / “1 stay” / “N stays”; polite live region." },
      { name: "Filter chips", description: "Toggle amenity/type filters; active chips can remove." },
      { name: "SortSelect", description: "Recommended, price, rating, distance." },
      { name: "Filters button", description: "Only if `onOpenSheet` is passed." },
    ],
    variants: "Presence of count, chips, sort, and sheet button are composition, not named variants.",
    states: [
      { name: "default", description: "Chips inactive except those you mark `active`." },
      { name: "selected", description: "Active chip uses the default Badge (primary)." },
      { name: "empty", description: "Pass resultCount={0} and pair with EmptyState on the page — this bar does not render the empty illustration." },
    ],
    content: "Count noun is “stay” / “stays” (1 stay, otherwise stays), not “results” or “hits”. Chip labels are amenities or trip facts (“WiFi”, “Free cancellation”), not CSS class names. Sort labels stay human (“Price: low to high”).",
    a11y: "Result count is aria-live polite — keep it in sync when filters change. Consumer owns the filter logic. Pair onOpenSheet with FilterSheet `open` / `onOpenChange` (pass `trigger={null}`). Don’t disable chips with no explanation. Keyboard on chips and sort comes from FilterChip + Select.",
    doDont: {
      do: "Update the live stay count when a chip toggles, and show EmptyState when it hits zero.",
      dont: "Hide zero results behind a spinner, or dump twenty ungrouped checkboxes into this bar.",
    },
    related: [
      { title: "FilterChip", href: "/components/molecules/filter-chip/" },
      { title: "SortSelect", href: "/components/molecules/sort-select/" },
      { title: "FilterSheet", href: "/components/organisms/filter-sheet/" },
      { title: "EmptyState", href: "/components/organisms/empty-state/" },
      { title: "SERP", href: "/components/pages/serp/" },
    ],
    props: [
      { name: "filters", type: "{ id: string; label: string; active?: boolean }[]", default: "[]", description: "Chip data." },
      { name: "onFilterToggle", type: "(id: string) => void", description: "Chip toggle/remove. Same handler for both." },
      { name: "sortValue", type: "string", description: "Controlled sort key for SortSelect." },
      { name: "onSortChange", type: "(value: string) => void", description: "Sort change." },
      { name: "onOpenSheet", type: "() => void", description: "If passed, shows the Filters button. Set FilterSheet `open` from this handler." },
      { name: "resultCount", type: "number", description: "Stay count. Live region when set." },
      { name: "className", type: "string", description: "Layout classes on the row." },
    ],
  }),
  "search-header": doc({
    slug: "search-header",
    tier: "organisms",
    title: "SearchHeader",
    description: "SERP chrome: brand, trip summary, and a few refine controls.",
    status: "preview",
    usage: `import { SearchHeader } from "@navigato/react"

<SearchHeader
  destination="Austin, TX"
  tripSummary="Mar 12–15 · 2 adults · 1 room"
  onEditTrip={focusSearch}
  rating={4}
  onRatingChange={setMinRating}
  min={50}
  max={800}
  value={priceRange}
  onChange={setPriceRange}
/>`,
    whenToUse: [
      "SERP top chrome above BookingSearchBar — destination + trip summary from the last search.",
      "A min-rating filter you actually handle (`rating` / `onRatingChange`).",
      "A nightly price refine you actually handle (`min` / `max` / `value` / `onChange` — same names as PriceRangeSlider).",
    ],
    whenNot: [
      "The search form itself — that’s BookingSearchBar (destination, dates, guests, Search).",
      "A complete filter system. The small-screen “Filters” button is still a visual stub — it does not open FilterSheet. Use FilterBar.onOpenSheet.",
    ],
    anatomy: [
      { name: "Logo", description: "String default “Navigato” plus a pin mark, or a custom node (SERP demo passes a wordmark)." },
      { name: "Trip", description: "destination + Phosphor PencilSimple; tripSummary on the second line. Clicks call onEditTrip." },
      { name: "PriceRangeSlider", description: "md+ only. Composes PriceRangeSlider min / max / value / onChange. Host default 50–800." },
      { name: "Min rating", description: "md+ StarRating. rating / onRatingChange." },
      { name: "Filters", description: "outline Button, md:hidden. No onClick. Use FilterBar.onOpenSheet for a real sheet." },
    ],
    variants: "logo string vs React node. No compact fork — hide pieces with composition, not a second header.",
    states: [
      { name: "default", description: "Shows destination and tripSummary. rating defaults to 0. Price thumbs start at [min, round(max × 0.5)] unless value is passed." },
      { name: "focus-visible", description: "Edit-trip is a button; rating stars are buttons when not read-only." },
    ],
    content: "tripSummary is “Mar 12–15 · 2 adults · 1 room”, not a JSON blob. destination is a place name. Default logo mark is a pin, not the astronaut cat — pass `logo` if you need the brand mark.",
    a11y: "onEditTrip must do something (focus BookingSearchBar or reopen it). Price and min-rating announce when you pass onChange / onRatingChange. The Filters button cannot be the a11y path to FilterSheet — it has no handler.",
    doDont: {
      do: "Keep destination and tripSummary in sync with the last BookingSearchBar submit, and control the price slider when it filters results.",
      dont: "Invent `openFilters` or a second slider component, or fork this into a generic shadcn navbar from memory.",
    },
    related: [
      { title: "BookingSearchBar", href: "/components/organisms/booking-search-bar/" },
      { title: "FilterBar", href: "/components/organisms/filter-bar/" },
      { title: "FilterSheet", href: "/components/organisms/filter-sheet/" },
      { title: "StarRating", href: "/components/molecules/star-rating/" },
      { title: "SERP", href: "/components/pages/serp/" },
    ],
    props: [
      { name: "logo", type: "React.ReactNode", default: '"Navigato"', description: "Wordmark string (built-in pin) or a custom node." },
      { name: "destination", type: "string", required: true, description: "Place name on the trip button." },
      { name: "tripSummary", type: "string", required: true, description: "Dates and occupancy line under destination." },
      { name: "onEditTrip", type: "() => void", description: "Trip button click. Consumer focuses or opens search." },
      { name: "rating", type: "number", default: "0", description: "Min-rating StarRating value." },
      { name: "onRatingChange", type: "(value: number) => void", description: "Min-rating change." },
      { name: "min", type: "number", default: "50", description: "PriceRangeSlider lower bound." },
      { name: "max", type: "number", default: "800", description: "PriceRangeSlider upper bound." },
      { name: "value", type: "[number, number]", description: "Controlled price pair. Uncontrolled if omitted." },
      { name: "onChange", type: "(value: [number, number]) => void", description: "Price thumb move. Same contract as PriceRangeSlider." },
      { name: "className", type: "string", description: "Classes on the header." },
    ],
  }),
  "filter-sheet": doc({
    slug: "filter-sheet",
    tier: "organisms",
    title: "FilterSheet",
    description: "Slide-over filters: nightly price and amenity checkboxes.",
    status: "preview",
    usage: `import { FilterSheet } from "@navigato/react"

const [open, setOpen] = useState(false)

<FilterBar onOpenSheet={() => setOpen(true)} />
<FilterSheet
  open={open}
  onOpenChange={setOpen}
  trigger={null}
  min={50}
  max={800}
  value={priceRange}
  onChange={setPriceRange}
  amenities={["Free WiFi", "Pool", "Parking"]}
  selectedAmenities={selected}
  onAmenityChange={(amenity, checked) => toggle(amenity, checked)}
  onApply={() => setOpen(false)}
  onClear={clear}
/>`,
    whenToUse: [
      "A full filter surface with its own trigger — mobile or “all filters”.",
      "A sheet driven by FilterBar.onOpenSheet (`open` / `onOpenChange`, `trigger={null}`).",
      "Amenity checkboxes you actually store in `selectedAmenities`.",
    ],
    whenNot: [
      "The desktop chip row — that’s FilterBar + FilterChip.",
      "A second price slider. Compose PriceRangeSlider via min / max / value / onChange.",
    ],
    anatomy: [
      { name: "Trigger", description: "Default outline “Filters” Button when `trigger` is omitted. Pass `trigger={null}` when FilterBar opens the sheet." },
      { name: "Title", description: "“Filters”." },
      { name: "Price", description: "PriceRangeSlider. Host default min={50} max={800}. Controlled via value / onChange." },
      { name: "Amenities", description: "Checkbox + label rows from `amenities`." },
      { name: "Footer", description: "Clear (outline) and Show results (primary)." },
    ],
    variants: "Own trigger vs FilterBar-driven (`trigger={null}` + open). No named visual variants.",
    states: [
      { name: "default", description: "Closed. Uncontrolled shows the default trigger." },
      { name: "expanded", description: "Sheet open; focus trapped. Escape and the close control call onOpenChange(false)." },
      { name: "selected", description: "Checkboxes match selectedAmenities. Price thumbs match value." },
      { name: "focus-visible", description: "Trigger, checkboxes, and footer buttons use their primitive rings." },
    ],
    content: "Footer primary is “Show results”, not “Apply”. Amenity labels are guest-facing. Default list (WiFi, pool, parking, breakfast, pets, AC) is a demo fallback — pass your own.",
    a11y: "Sheet from shadcn traps focus and closes on Escape. Consumer must handle onAmenityChange, onApply, onClear, and price onChange — the sheet does not filter a SERP by itself. Don’t disable Show results with no message. FilterBar.onOpenSheet should set `open`.",
    doDont: {
      do: "Drive `open` from FilterBar.onOpenSheet, and pass PriceRangeSlider min / max / value / onChange.",
      dont: "Leave onOpenSheet as a no-op, or invent a second slider / Carbon facet tree.",
    },
    related: [
      { title: "FilterBar", href: "/components/organisms/filter-bar/" },
      { title: "FilterChip", href: "/components/molecules/filter-chip/" },
      { title: "PriceRangeSlider", href: "/components/molecules/price-range-slider/" },
      { title: "Sheet", href: "/components/atoms/sheet/" },
      { title: "SERP", href: "/components/pages/serp/" },
    ],
    props: [
      { name: "trigger", type: "React.ReactNode", description: "Replaces the default Filters button. Pass null when FilterBar drives open." },
      { name: "open", type: "boolean", description: "Controlled open. Pair with onOpenChange." },
      { name: "defaultOpen", type: "boolean", description: "Uncontrolled initial open. Ignored when open is passed." },
      { name: "onOpenChange", type: "(open: boolean) => void", description: "Fires on Escape, overlay, close control, and trigger." },
      { name: "min", type: "number", default: "50", description: "PriceRangeSlider lower bound." },
      { name: "max", type: "number", default: "800", description: "PriceRangeSlider upper bound." },
      { name: "value", type: "[number, number]", description: "Controlled price pair. Uncontrolled if omitted." },
      { name: "onChange", type: "(value: [number, number]) => void", description: "Price thumb move. Same contract as PriceRangeSlider." },
      { name: "amenities", type: "string[]", description: "Checkbox labels. Default demo list if omitted." },
      { name: "selectedAmenities", type: "string[]", default: "[]", description: "Checked labels. Compare by string." },
      { name: "onAmenityChange", type: "(amenity: string, checked: boolean) => void", description: "Checkbox change." },
      { name: "onApply", type: "() => void", description: "Show results. Consumer applies and typically closes." },
      { name: "onClear", type: "() => void", description: "Clear. Consumer empties selectedAmenities." },
      { name: "className", type: "string", description: "Classes on SheetContent." },
    ],
  }),
  "booking-widget": doc({
    slug: "booking-widget",
    tier: "organisms",
    title: "BookingWidget",
    description: "PDP sticky reserve: dates, guests, price with fees, and a Reserve action that does not invent a stay.",
    status: "preview",
    usage: `import { BookingWidget } from "@navigato/react"

<BookingWidget
  pricePerNight={189}
  onReserve={(stay) => {
    // stay.nights, stay.from, stay.to, stay.guests — only fires for a real range
  }}
/>`,
    whenToUse: [
      "PDP sidebar reserve for a stay. Composes DateRangePicker, GuestSelector, and PriceBreakdown.",
      "Sold-out for the selected dates (`soldOut`) — same widget, not a different card.",
    ],
    whenNot: [
      "SERP search — that’s BookingSearchBar.",
      "Checkout payment — that’s BookingSteps + PriceBreakdown + guest/payment fields. Don’t nest this widget on checkout.",
    ],
    anatomy: [
      { name: "Nightly rate", description: "Header. Always the listed rate, even with no dates." },
      { name: "DateRangePicker", description: "Check-in — check-out. One month in this widget." },
      { name: "GuestSelector", description: "Adults, children, rooms." },
      { name: "PriceBreakdown", description: "Only when from and to make at least one night. Empty copy otherwise." },
      { name: "Reserve", description: "Primary CTA. Chroma belongs here. Helper text explains why it cannot run." },
    ],
    variants: "Content variants, not style variants: empty dates, valid range, soldOut. No “compact” fork — width is layout (`className`).",
    states: [
      { name: "default", description: "No dates. Total is an empty state. Reserve stays enabled and says to select dates." },
      { name: "selected", description: "A real range. Nights = calendar difference. Breakdown and total follow that range." },
      { name: "invalid", description: "From without a later to, or a zero-night range. Helper explains; onReserve does not fire." },
      { name: "sold-out", description: "Consumer sets soldOut. Helper explains; onReserve does not fire." },
      { name: "focus-visible", description: "Reserve uses the primary Button ring." },
    ],
    content: "Empty copy is “Select check-in and check-out to see the total.” Do not default nights to 3. Reserve label stays “Reserve”, not “Unavailable”. Charged-yet line: “You won’t be charged yet.” when the action can run.",
    a11y: "Reserve is not disabled — GOV.UK: don’t disable Pay without an explanation; this widget explains next to the button and keeps it focusable. aria-describedby points at the helper (polite live region). onReserve only fires with a real stay. Consumer owns routing and soldOut. Price updates live in PriceBreakdown.",
    doDont: {
      do: "Leave dates empty until the guest picks them, and explain why Reserve cannot run.",
      dont: "Invent a 3-night stay when the range is empty, or silently disable Reserve.",
    },
    related: [
      { title: "DateRangePicker", href: "/components/molecules/date-range-picker/" },
      { title: "GuestSelector", href: "/components/molecules/guest-selector/" },
      { title: "PriceBreakdown", href: "/components/organisms/price-breakdown/" },
      { title: "PDP", href: "/components/pages/pdp/" },
    ],
    examples: [
      { id: "ready", title: "Dates selected" },
      { id: "sold-out", title: "Sold out" },
    ],
    props: [
      { name: "pricePerNight", type: "number", required: true, description: "Nightly rate shown in the header and used in the breakdown." },
      { name: "currency", type: "string", default: '"$"', description: "Prefix for rate and totals." },
      { name: "cleaningFee", type: "number", default: "75", description: "Cleaning line. Shown only when nights exist." },
      { name: "serviceFee", type: "number", default: "120", description: "Service line. Shown only when nights exist." },
      { name: "taxes", type: "number", default: "98", description: "Tax line passed to PriceBreakdown when nights exist." },
      { name: "dateRange", type: "DateRange", description: "Controlled range. Empty is valid. Pair with onDateRangeChange." },
      { name: "defaultDateRange", type: "DateRange", description: "Uncontrolled initial range. Do not pass a fake 3-night stay unless the demo has dates." },
      { name: "onDateRangeChange", type: "(range?: DateRange) => void", description: "Fires when the picker changes. Makes the range controlled if dateRange is also used." },
      { name: "guests", type: "GuestCounts", description: "Controlled occupancy. Uncontrolled default is 2 adults, 0 children, 1 room." },
      { name: "onGuestsChange", type: "(value: GuestCounts) => void", description: "Fires on stepper change." },
      { name: "soldOut", type: "boolean", default: "false", description: "Consumer-owned availability. Widget does not infer sold-out from the calendar." },
      { name: "onReserve", type: "(stay: BookingStay) => void", description: "Fires only for a valid range that is not sold out. stay: { nights, from, to, guests }." },
      { name: "className", type: "string", description: "Layout classes on the card. Sticky top is built in." },
    ],
  }),
  "price-breakdown": doc({
    slug: "price-breakdown",
    tier: "organisms",
    title: "PriceBreakdown",
    description: "Stay charges: line items, optional taxes, and a total in tabular-nums.",
    status: "preview",
    usage: `import { PriceBreakdown } from "@navigato/react"

<PriceBreakdown
  lineItems={[
    { label: "$189 × 3 nights", amount: 567 },
    { label: "Cleaning fee", amount: 75 },
    { label: "Service fee", amount: 120 },
  ]}
  taxes={98}
/>`,
    whenToUse: [
      "PDP BookingWidget and checkout summary when the stay range is known.",
      "Any price-with-fees stack that must show how the total was built.",
    ],
    whenNot: [
      "A nightly rate on a SERP tile — ListingCard shows / night, not this stack.",
      "An empty range. Don’t pass a made-up “× 3 nights” row. BookingWidget omits this until dates exist.",
    ],
    anatomy: [
      { name: "Line items", description: "Label + amount. Labels use a dotted underline as “what is this fee” affordance." },
      { name: "Taxes", description: "Optional row. Hidden when taxes is 0." },
      { name: "Total", description: "Subtotal of lines plus taxes. tabular-nums." },
    ],
    variants: "No visual variants. Currency is a prefix string, not a formatter.",
    states: [
      { name: "default", description: "One or more line items; optional taxes." },
      { name: "empty taxes", description: "taxes={0} (default) hides the tax row. Total is still the line subtotal." },
    ],
    content: "Night labels are “$189 × 3 nights”, not “Subtotal”. Fee names are human (“Cleaning fee”). Don’t invent a compare-at or strikethrough — the API has no originalPrice.",
    a11y: "The stack is a polite live region so night changes announce a new total. Consumer must still not pass invented nights. Currency is a prefix; don’t assume a screen reader will expand “$”.",
    doDont: {
      do: "Pass line items that match an actual date range and the fees you will charge.",
      dont: "Hard-code “× 3 nights” when the guest has not picked dates.",
    },
    related: [
      { title: "BookingWidget", href: "/components/organisms/booking-widget/" },
      { title: "BookingSteps", href: "/components/organisms/booking-steps/" },
      { title: "PDP", href: "/components/pages/pdp/" },
      { title: "Checkout", href: "/components/pages/checkout/" },
    ],
    props: [
      { name: "lineItems", type: "PriceLineItem[]", required: true, description: "{ label, amount } rows. Summed into the total." },
      { name: "taxes", type: "number", default: "0", description: "Added after line items. Row hidden when 0." },
      { name: "currency", type: "string", default: '"$"', description: "Prefix before every amount." },
      { name: "className", type: "string", description: "Layout classes on the stack." },
    ],
  }),
  "rate-comparison": doc({
    slug: "rate-comparison",
    tier: "organisms",
    title: "RateComparison",
    description: "Other-site nightly rates for one stay.",
    status: "preview",
    usage: `import { RateComparison } from "@navigato/react"

<RateComparison
  items={[
    { provider: "Navigato Direct", price: 220, description: "Free cancellation", href: "/book" },
    { provider: "Booking.com", price: 235, description: "Pay at property", href: "https://example.com" },
  ]}
/>`,
    whenToUse: [
      "PDP “compare rates” under one stay — provider, nightly price, optional policy line.",
      "Rows that are real outbound links (`href`). Omit href when the row is display-only.",
    ],
    whenNot: [
      "Your own fee stack — that’s PriceBreakdown (nights × rate + fees + tax).",
      "A fare calendar or “we have the lowest” winner state. There is no highlight prop.",
    ],
    anatomy: [
      { name: "Row", description: "An <a> when href is set; otherwise a <div>. Currency + price / night, provider, optional description." },
      { name: "View", description: "“View” + Phosphor ArrowSquareOut. Only when href is set. Visible on hover." },
    ],
    variants: "Link vs not a link (`href` present or omitted). currency is a prefix string per item (default \"$\"). No “best rate” chrome.",
    states: [
      { name: "default", description: "Stacked bordered rows. No href → not a link, no View affordance." },
      { name: "hover", description: "Linked rows: muted wash; View fades in." },
      { name: "focus-visible", description: "Link focus — keep a visible ring from the page." },
    ],
    content: "Providers are names (“Navigato Direct”, “Booking.com”). Descriptions are policy crumbs (“Free cancellation”), not legalese. Price is nightly. Don’t invent a crossed-out compare-at. Don’t pass href=\"#\".",
    a11y: "A row is a link only when href is a real URL. Missing href renders a div — not a button, not #. The arrow is decorative. This organism is not composed on the PDP page demo today; add it when you have real provider rows.",
    doDont: {
      do: "Pass real hrefs for bookable providers, and omit href when the row is comparison-only.",
      dont: "Ship href=\"#\", or invent a winner badge this API does not have.",
    },
    related: [
      { title: "PriceBreakdown", href: "/components/organisms/price-breakdown/" },
      { title: "BookingWidget", href: "/components/organisms/booking-widget/" },
      { title: "PDP", href: "/components/pages/pdp/" },
    ],
    props: [
      { name: "items", type: "RateComparisonItem[]", required: true, description: "{ provider, price, currency?, description?, href? }. No href → not a link. Never defaults to “#”." },
      { name: "className", type: "string", description: "Classes on the stack." },
    ],
  }),
  "photo-gallery": doc({
    slug: "photo-gallery",
    tier: "organisms",
    title: "PhotoGallery",
    description: "PDP photo mosaic with a lightbox. Thumbnails open the same dialog; they are not dead buttons.",
    status: "preview",
    usage: `import { PhotoGallery } from "@navigato/react"

<PhotoGallery
  images={["/loft-1.jpg", "/loft-2.jpg", "/loft-3.jpg"]}
  title="Navigato Loft"
/>`,
    whenToUse: [
      "PDP hero photos for one stay.",
      "A mosaic that must open a lightbox from the primary or a secondary tile.",
    ],
    whenNot: [
      "SERP tiles — ListingCard owns the 4:3 crop and dots.",
      "An empty array. The component renders nothing; don’t invent stock photos.",
    ],
    anatomy: [
      { name: "Primary", description: "Large tile. Overlay “Show all N photos”. Opens the lightbox at index 0." },
      { name: "Secondary", description: "Up to four more tiles from index 1–4. Hidden below md. Each opens the lightbox at that index." },
      { name: "Lightbox", description: "Dialog with the active image and a thumbnail strip for the full `images` list." },
    ],
    variants: "Layout only: mosaic vs stacked on small screens. No branded chrome — the active thumbnail ring uses primary.",
    states: [
      { name: "default", description: "Primary plus up to four secondaries." },
      { name: "empty", description: "No first image → render null." },
      { name: "expanded", description: "Dialog open; thumbnail strip marks the active photo." },
      { name: "focus-visible", description: "Tiles are buttons; use the browser/Button focus treatment on the trigger." },
    ],
    content: "`title` is the property name and seeds alt text (“{title}, photo 2 of 6”). Don’t pass “Gallery” on a named stay. Don’t use empty alt on visible photos.",
    a11y: "Each tile and lightbox thumb has a real alt. DialogTitle is visually hidden but present. Consumer must pass a meaningful title. Keyboard: buttons + Base UI dialog (Escape closes). Don’t nest this in another button or link.",
    doDont: {
      do: "Pass the stay’s real photos and title, and let any tile open the lightbox.",
      dont: "Wire secondary tiles to setActive without opening the dialog, or dump a shadcn Carousel from memory.",
    },
    related: [
      { title: "ListingCard", href: "/components/organisms/listing-card/" },
      { title: "PDP", href: "/components/pages/pdp/" },
    ],
    props: [
      { name: "images", type: "string[]", required: true, description: "Photo URLs. First is primary; next four are mosaic tiles; all appear in the lightbox." },
      { name: "title", type: "string", default: '"Gallery"', description: "Property name. Used in alts and the dialog title." },
      { name: "className", type: "string", description: "Layout classes on the wrapper." },
    ],
  }),
  "amenity-grid": doc({
    slug: "amenity-grid",
    tier: "organisms",
    title: "AmenityGrid",
    description: "Icon + label grid of stay amenities on PDP.",
    status: "preview",
    usage: `import { AmenityGrid } from "@navigato/react"
import { WifiHigh } from "@phosphor-icons/react"

<AmenityGrid
  columns={2}
  amenities={[{ id: "wifi", label: "Fast WiFi", icon: WifiHigh }]}
/>`,
    whenToUse: [
      "PDP amenity section for one stay.",
      "A short list of facts the guest will use (WiFi, kitchen, parking).",
    ],
    whenNot: [
      "SERP chips — that’s FilterBar / FilterChip.",
      "A 40-item hotel fact sheet. Don’t invent a searchable amenity encyclopedia.",
    ],
    anatomy: [
      { name: "Item", description: "Optional Phosphor icon + label in a list item." },
      { name: "Grid", description: "2, 3, or 4 columns (`columns={4}` is 2 on small screens)." },
    ],
    variants: "Column count only. Default amenities (WiFi, kitchen, AC, coffee, parking) are a demo fallback, not a product taxonomy.",
    states: [
      { name: "default", description: "Renders the passed list, or the five defaults if omitted." },
    ],
    content: "Labels are guest-facing (“Full kitchen”), not keys (`kitchen_full`). Phosphor names must already exist in booking/ — don’t invent icons. Omit the icon rather than using Lucide here.",
    a11y: "A list (`ul`/`li`). Icons are decorative beside text; the label is the name. Don’t rely on color or icon alone. Consumer must pass unique `id`s.",
    doDont: {
      do: "Pass the stay’s amenities with Phosphor icons already used in booking/.",
      dont: "Drop a Lucide icon grid from memory, or show FilterChips and call them amenities.",
    },
    related: [
      { title: "FilterChip", href: "/components/molecules/filter-chip/" },
      { title: "PDP", href: "/components/pages/pdp/" },
    ],
    props: [
      { name: "amenities", type: "Amenity[]", description: "{ id, label, icon? }. Defaults to WiFi, kitchen, AC, coffee, parking." },
      { name: "columns", type: "2 | 3 | 4", default: "2", description: "Grid columns. 4 becomes 2 on small screens." },
      { name: "className", type: "string", description: "Layout classes on the list." },
    ],
  }),
  "review-summary": doc({
    slug: "review-summary",
    tier: "organisms",
    title: "ReviewSummary",
    description: "PDP reviews: average, distribution bars, and optional quotes.",
    status: "preview",
    usage: `import { ReviewSummary } from "@navigato/react"

<ReviewSummary
  average={4.9}
  totalReviews={128}
  reviews={[
    { author: "Jordan", date: "Feb 2026", rating: 5, text: "Quiet for SoCo." },
  ]}
/>`,
    whenToUse: [
      "PDP review section under amenities.",
      "A snapshot of rating plus a few quotes — not a full reviews product.",
    ],
    whenNot: [
      "The rating on a SERP tile — ListingCard uses StarRating.",
      "A paginated reviews feed. Don’t invent infinite scroll here.",
    ],
    anatomy: [
      { name: "Average", description: "Large tabular number, StarRating, and “N reviews”." },
      { name: "Distribution", description: "5→1 bars. Width is relative to the max count." },
      { name: "Quotes", description: "Optional review articles: author, date, stars, text." },
    ],
    variants: "With or without `reviews`. Distribution has a built-in demo fallback if omitted — pass real counts when you have them.",
    states: [
      { name: "default", description: "Average + distribution." },
      { name: "with quotes", description: "Reviews list under a divider." },
    ],
    content: "Authors are names, not “User1”. Dates are “Feb 2026”, not ISO. Don’t leave the default 180/62/18/6/2 distribution on a stay that has 128 reviews — pass matching counts.",
    a11y: "StarRating is read-only with an accessible label. Bars are visual; the count text is the data. Consumer should keep `totalReviews` consistent with distribution + quotes. Don’t put this inside a decorative Card you then hide from AT.",
    doDont: {
      do: "Pass an average, a real review count, and a few quotes for the stay on the page.",
      dont: "Show only a 4.8 with empty quotes, or copy Airbnb’s category scores this component doesn’t have.",
    },
    related: [
      { title: "StarRating", href: "/components/molecules/star-rating/" },
      { title: "PDP", href: "/components/pages/pdp/" },
    ],
    props: [
      { name: "average", type: "number", required: true, description: "Mean score. Displayed to one decimal." },
      { name: "totalReviews", type: "number", required: true, description: "Count next to the stars." },
      { name: "distribution", type: "ReviewDistribution[]", description: "{ stars, count } for 5→1. Default demo distribution if omitted." },
      { name: "reviews", type: "Review[]", default: "[]", description: "{ author, date, rating, text }. Hidden when empty." },
      { name: "className", type: "string", description: "Layout classes on the card." },
    ],
  }),
  "booking-steps": doc({
    slug: "booking-steps",
    tier: "organisms",
    title: "BookingSteps",
    description: "Checkout progress: details, payment, confirmation.",
    status: "preview",
    usage: `import { BookingSteps, defaultBookingSteps } from "@navigato/react"

<BookingSteps steps={defaultBookingSteps} currentStep="payment" />`,
    whenToUse: [
      "Checkout for a stay that already has dates. Pair with PriceBreakdown and guest/payment fields.",
      "A three-step stay booking (details → payment → confirmation).",
    ],
    whenNot: [
      "PDP reserve — that’s BookingWidget.",
      "A flight itinerary stepper. Don’t invent extra legs or a fare calendar.",
    ],
    anatomy: [
      { name: "Steps", description: "Ordered list. Numbered circle, or a Phosphor Check when done." },
      { name: "Current", description: "Primary fill + `aria-current=\"step\"`." },
      { name: "Upcoming", description: "Muted label and empty circle." },
    ],
    variants: "Pass `steps` for labels. `defaultBookingSteps` is Details / Payment / Confirmation. Don’t add a visual “compact” variant — wrap on small screens.",
    states: [
      { name: "default", description: "One current step; previous are done." },
      { name: "selected / current", description: "Matches `currentStep` id." },
    ],
    content: "Labels are “Payment”, not “Step 2”. Keep three stay-booking steps unless the product truly has another. Don’t name a step “Pay now” if Confirm is the CTA on the page.",
    a11y: "An `ol` labelled “Booking progress”. Current item has aria-current=\"step\". This is an indicator, not a router — consumer must still move `currentStep` and not disable Confirm without a reason (see checkout demo).",
    doDont: {
      do: "Show Details → Payment → Confirmation on checkout, and move currentStep when the guest actually advances.",
      dont: "Drop a shadcn Stepper from memory, or nest BookingWidget under the payment step.",
    },
    related: [
      { title: "PriceBreakdown", href: "/components/organisms/price-breakdown/" },
      { title: "Checkout", href: "/components/pages/checkout/" },
      { title: "PDP", href: "/components/pages/pdp/" },
    ],
    props: [
      { name: "steps", type: "BookingStep[]", required: true, description: "{ id, label }[]. Use defaultBookingSteps for the stay-booking three." },
      { name: "currentStep", type: "string", required: true, description: "id of the active step." },
      { name: "className", type: "string", description: "Layout classes on the list." },
    ],
  }),
  "empty-state": doc({
    slug: "empty-state",
    tier: "organisms",
    title: "EmptyState",
    description: "Zero stays after a search or filter — heading, help, optional clear.",
    status: "preview",
    usage: `import { EmptyState } from "@navigato/react"

<EmptyState
  title="No stays in Austin for these dates"
  description="Try different dates, drop a filter, or widen the map."
  actionLabel="Clear filters"
  onAction={clearFilters}
/>`,
    whenToUse: [
      "SERP when the filtered list is empty. Pair with FilterBar resultCount={0}.",
      "A clear action the guest can take (`onAction`). The button renders only if that handler exists.",
    ],
    whenNot: [
      "Loading — that’s ListingCardSkeleton in the same grid.",
      "PDP sold-out — that’s BookingWidget `soldOut`, not this illustration.",
    ],
    anatomy: [
      { name: "Icon", description: "Phosphor MagnifyingGlass. Decorative." },
      { name: "Title", description: "Default “No stays found”." },
      { name: "Description", description: "Default “Try adjusting your dates, destination, or filters.”" },
      { name: "Action", description: "Outline Button. Hidden unless onAction is passed." },
    ],
    variants: "With or without action. No illustration variants — don’t fork a second empty for “no map results”.",
    states: [
      { name: "default", description: "Title + description; no button." },
      { name: "with action", description: "Outline button labeled actionLabel." },
    ],
    content: "Title names the miss (“No stays in Austin for these dates”). Action is “Clear filters”, not “Reset” or “Submit”. Noun is stays, not “hits”.",
    a11y: "Heading + supporting text. Consumer should keep FilterBar’s live count at 0 and move focus here or to the clear control. Icon is not the name. Don’t replace this with a spinner.",
    doDont: {
      do: "Show this when the stay list is empty, and let Clear filters bring results back.",
      dont: "Hide zero results behind ListingCardSkeleton, or reuse this for a sold-out card.",
    },
    related: [
      { title: "FilterBar", href: "/components/organisms/filter-bar/" },
      { title: "ListingCardSkeleton", href: "/components/organisms/listing-card-skeleton/" },
      { title: "ListingCard", href: "/components/organisms/listing-card/" },
      { title: "SERP", href: "/components/pages/serp/" },
    ],
    props: [
      { name: "title", type: "string", default: '"No stays found"', description: "Heading." },
      { name: "description", type: "string", default: '"Try adjusting your dates, destination, or filters."', description: "Help line under the heading." },
      { name: "actionLabel", type: "string", default: '"Clear filters"', description: "Button label when onAction is set." },
      { name: "onAction", type: "() => void", description: "If passed, renders the outline button." },
      { name: "className", type: "string", description: "Classes on the dashed panel." },
    ],
  }),
  "listing-card-skeleton": doc({
    slug: "listing-card-skeleton",
    tier: "organisms",
    title: "ListingCardSkeleton",
    description: "Loading tile that matches ListingCard’s 4:3 photo + text block.",
    status: "preview",
    usage: `import { ListingCardSkeleton } from "@navigato/react"

<div className="grid grid-cols-2 gap-4">
  <ListingCardSkeleton />
  <ListingCardSkeleton />
</div>`,
    whenToUse: [
      "SERP grid while results are in flight. Same columns as ListingCard.",
      "A known loading state — swap these out when cards arrive.",
    ],
    whenNot: [
      "A `loading` prop on ListingCard. That prop does not exist; don’t add a second card.",
      "Zero results — that’s EmptyState. Failed search is not a forever skeleton.",
    ],
    anatomy: [
      { name: "Photo", description: "Skeleton at aspect 4:3, flush to the Card." },
      { name: "Lines", description: "Three text Skeletons (title, location, price widths)." },
    ],
    variants: "None. Pulse comes from Skeleton. Width is layout (`className`).",
    states: [
      { name: "loading", description: "The whole component. Respects prefers-reduced-motion via Skeleton." },
    ],
    content: "No copy. Don’t print “Loading…” on the tile. Don’t put real titles under a pulsing photo.",
    a11y: "Visual only. Consumer should set aria-busy on the results grid and replace skeletons when data arrives. Don’t leave these up for an empty or error response.",
    doDont: {
      do: "Render a grid of these while the stay request is in flight, then ListingCards or EmptyState.",
      dont: "Add a loading prop to ListingCard, or keep skeletons on screen after the list is empty.",
    },
    related: [
      { title: "ListingCard", href: "/components/organisms/listing-card/" },
      { title: "EmptyState", href: "/components/organisms/empty-state/" },
      { title: "Skeleton", href: "/components/atoms/skeleton/" },
      { title: "SERP", href: "/components/pages/serp/" },
    ],
    props: [
      { name: "className", type: "string", description: "Layout classes on the Card." },
    ],
  }),
};

export function getDocsByTier(tier: ComponentDocMeta["tier"]) {
  return Object.values(componentDocs).filter((d) => d.tier === tier);
}

export function getSlugsByTier(tier: ComponentDocMeta["tier"]) {
  return getDocsByTier(tier).map((d) => d.slug);
}
