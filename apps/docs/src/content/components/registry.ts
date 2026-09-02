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
    variants: "Layout only: one month vs two (`numberOfMonths`). No branded chrome variants — orange lives on Search, not on the calendar.",
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
    description: "Searchable destination combobox.",
    usage: `import { DestinationInput } from '@navigato/react'\n\n<DestinationInput onChange={setDest} />`,
    props: [{ name: "options", type: "DestinationOption[]", description: "Autocomplete options." }],
  }),
  "star-rating": doc({
    slug: "star-rating",
    tier: "molecules",
    title: "StarRating",
    description: "Display or filter by star rating.",
    usage: `import { StarRating } from '@navigato/react'\n\n<StarRating value={4.5} showValue reviewCount={128} readOnly />`,
    props: [{ name: "value", type: "number", description: "Star value 0–5." }],
  }),
  "price-range-slider": doc({
    slug: "price-range-slider",
    tier: "molecules",
    title: "PriceRangeSlider",
    description: "Dual-thumb nightly price filter.",
    usage: `import { PriceRangeSlider } from '@navigato/react'\n\n<PriceRangeSlider min={50} max={800} />`,
    props: [{ name: "min", type: "number", default: "0", description: "Minimum price." }],
  }),
  "map-price-marker": doc({
    slug: "map-price-marker",
    tier: "molecules",
    title: "MapPriceMarker",
    description: "Map pin showing nightly price.",
    usage: `import { MapPriceMarker } from '@navigato/react'\n\n<MapPriceMarker price="$189" saved />`,
    props: [{ name: "price", type: "string", required: true, description: "Formatted price label." }],
  }),
  "sort-select": doc({
    slug: "sort-select",
    tier: "molecules",
    title: "SortSelect",
    description: "SERP sort dropdown.",
    usage: `import { SortSelect } from '@navigato/react'\n\n<SortSelect value="price-asc" onChange={setSort} />`,
    props: [{ name: "value", type: "string", description: "Selected sort key." }],
  }),
  "filter-chip": doc({
    slug: "filter-chip",
    tier: "molecules",
    title: "FilterChip",
    description: "Toggleable filter badge with optional remove.",
    usage: `import { FilterChip } from '@navigato/react'\n\n<FilterChip label="Pool" active onToggle={() => {}} />`,
    props: [
      { name: "label", type: "string", required: true, description: "Chip label." },
      { name: "active", type: "boolean", description: "Selected state." },
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
      { name: "Result count", description: "“N stays”; polite live region." },
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
    content: "Count noun is “stays”, not “results” or “hits”. Chip labels are amenities or trip facts (“WiFi”, “Free cancellation”), not CSS class names. Sort labels stay human (“Price: low to high”).",
    a11y: "Result count is aria-live polite — keep it in sync when filters change. Consumer owns the filter logic and the FilterSheet contents. Don’t disable chips with no explanation. Keyboard on chips and sort comes from FilterChip + Select.",
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
      { name: "onOpenSheet", type: "() => void", description: "If passed, shows the Filters button." },
      { name: "resultCount", type: "number", description: "Stay count. Live region when set." },
      { name: "className", type: "string", description: "Layout classes on the row." },
    ],
  }),
  "search-header": doc({
    slug: "search-header",
    tier: "organisms",
    title: "SearchHeader",
    description: "SERP sticky header with trip summary and filters.",
    usage: `import { SearchHeader } from '@navigato/react'\n\n<SearchHeader destination="Austin, TX" tripSummary="2 adults" />`,
    props: [{ name: "destination", type: "string", required: true, description: "Trip destination." }],
  }),
  "filter-sheet": doc({
    slug: "filter-sheet",
    tier: "organisms",
    title: "FilterSheet",
    description: "Mobile filter sheet with amenities and price.",
    usage: `import { FilterSheet } from '@navigato/react'\n\n<FilterSheet />`,
    props: [{ name: "amenities", type: "string[]", description: "Amenity checklist." }],
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
    description: "Compare OTA / provider rates.",
    usage: `import { RateComparison } from '@navigato/react'\n\n<RateComparison items={rates} />`,
    props: [{ name: "items", type: "RateComparisonItem[]", required: true, description: "Provider rows." }],
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
    variants: "Layout only: mosaic vs stacked on small screens. No branded chrome — orange is the active thumbnail ring.",
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
    description: "Zero-results placeholder with optional action.",
    usage: `import { EmptyState } from '@navigato/react'\n\n<EmptyState onAction={clearFilters} />`,
    props: [{ name: "title", type: "string", default: "No stays found", description: "Heading." }],
  }),
  "listing-card-skeleton": doc({
    slug: "listing-card-skeleton",
    tier: "organisms",
    title: "ListingCardSkeleton",
    description: "Loading placeholder matching listing card layout.",
    usage: `import { ListingCardSkeleton } from '@navigato/react'\n\n<ListingCardSkeleton />`,
    props: [{ name: "className", type: "string", description: "Layout classes." }],
  }),
};

export function getDocsByTier(tier: ComponentDocMeta["tier"]) {
  return Object.values(componentDocs).filter((d) => d.tier === tier);
}

export function getSlugsByTier(tier: ComponentDocMeta["tier"]) {
  return getDocsByTier(tier).map((d) => d.slug);
}
