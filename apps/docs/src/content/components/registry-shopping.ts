import type { ComponentDocMeta } from "./types";

function doc(
  partial: ComponentDocMeta & { usage: string; props: ComponentDocMeta["props"] },
): ComponentDocMeta {
  return partial;
}

export const shoppingDocs: Record<string, ComponentDocMeta> = {
  "size-selector": doc({
    slug: "size-selector",
    tier: "molecules",
    title: "SizeSelector",
    description: "Apparel size radios for a Nox & Vale product. Not a guest stepper.",
    status: "preview",
    usage: `import { SizeSelector } from "@navigato/react"

const [size, setSize] = useState("M")

<SizeSelector value={size} onChange={setSize} unavailable={["XS"]} />`,
    whenToUse: [
      "Fashion PDP where the SKU has a size run (XS–XL or numeric).",
      "Inside the gallery product column, next to ColorSwatch and QuantityStepper.",
    ],
    whenNot: [
      "Hotel occupancy — that’s GuestSelector. Do not reuse size chips as amenity facets.",
      "A single one-size object. Hide the control; don’t disable every size.",
    ],
    anatomy: [
      { name: "Label", description: "Uppercase Size." },
      { name: "Radios", description: "Outline Button per size; selected uses default variant." },
    ],
    variants: "Unavailable sizes are disabled. No brand chrome variants — tokens carry identity.",
    states: [
      { name: "default", description: "No size selected." },
      { name: "selected", description: "One size, aria-checked true." },
      { name: "disabled", description: "Unavailable SKU — still visible, not selectable." },
      { name: "focus-visible", description: "Button focus ring." },
    ],
    content: "Use the product’s real size run. Don’t invent XXL if the look doesn’t carry it.",
    a11y: "radiogroup + radio. Disabled sizes stay in the tab order as disabled buttons. Pair with a visible size guide if the product needs one — this control is not that guide.",
    doDont: {
      do: "Mark sold-out sizes as unavailable and keep the rest selectable.",
      dont: "Put WiFi or Pool on these chips. FilterChip stays on booking SERP.",
    },
    related: [
      { title: "ColorSwatch", href: "/components/molecules/color-swatch/" },
      { title: "QuantityStepper", href: "/components/molecules/quantity-stepper/" },
      { title: "Gallery", href: "/components/pages/gallery/" },
    ],
    props: [
      { name: "sizes", type: "string[]", default: '["XS","S","M","L","XL"]', description: "Size run." },
      { name: "value", type: "string", description: "Selected size id." },
      { name: "onChange", type: "(size: string) => void", description: "Fires on select." },
      { name: "unavailable", type: "string[]", description: "Disabled sizes." },
      { name: "name", type: "string", default: '"size"', description: "Label id prefix." },
      { name: "className", type: "string", description: "Layout classes." },
    ],
  }),
  "color-swatch": doc({
    slug: "color-swatch",
    tier: "molecules",
    title: "ColorSwatch",
    description: "Color radios as filled discs. Circle geometry is allowed.",
    status: "preview",
    usage: `import { ColorSwatch } from "@navigato/react"

<ColorSwatch
  colors={[
    { id: "night", label: "Night", value: "#111318" },
    { id: "plaster", label: "Plaster", value: "#F4F2EF" },
  ]}
  value={color}
  onChange={setColor}
/>`,
    whenToUse: ["Product colorways on a fashion PDP.", "A short set of named colors with a visible fill."],
    whenNot: [
      "Brand switching — that’s the docs Brand control, not a swatch.",
      "Amenity filters. Do not invent color facets on FilterChip.",
    ],
    anatomy: [
      { name: "Label", description: "Uppercase Color." },
      { name: "Disc", description: "rounded-full button; selected gets ring + shadow-md." },
    ],
    variants: "Fill is the colorway hex. Selected is a ring, not a second component.",
    states: [
      { name: "default", description: "Unselected disc." },
      { name: "selected", description: "aria-checked, ring-2 ring-ring." },
      { name: "focus-visible", description: "Focus ring on the disc." },
    ],
    content: "aria-label is the color name. Don’t rely on hue alone in copy.",
    a11y: "radiogroup. Each radio has an accessible name. Don’t use color as the only selected cue — the ring stays.",
    doDont: {
      do: "Name the colorway (Night, Plaster) and show the fill.",
      dont: "Use cobalt glow as a drop shadow. Cobalt is the fill, not elevation.",
    },
    related: [
      { title: "SizeSelector", href: "/components/molecules/size-selector/" },
      { title: "ProductCard", href: "/components/organisms/product-card/" },
      { title: "Gallery", href: "/components/pages/gallery/" },
    ],
    props: [
      { name: "colors", type: "ColorOption[]", required: true, description: "id, label, CSS value." },
      { name: "value", type: "string", description: "Selected color id." },
      { name: "onChange", type: "(id: string) => void", description: "Fires on select." },
      { name: "name", type: "string", default: '"color"', description: "Label id prefix." },
      { name: "className", type: "string", description: "Layout classes." },
    ],
  }),
  "quantity-stepper": doc({
    slug: "quantity-stepper",
    tier: "molecules",
    title: "QuantityStepper",
    description: "Plus/minus quantity for a bag line. Not adults/children/rooms.",
    status: "preview",
    usage: `import { QuantityStepper } from "@navigato/react"

<QuantityStepper value={qty} onChange={setQty} min={1} max={9} />`,
    whenToUse: ["CartLine quantity.", "PDP before Add to bag."],
    whenNot: [
      "Stay guests — that’s GuestSelector.",
      "A size run. Quantity is count, not XS–XL.",
    ],
    anatomy: [
      { name: "Label", description: "Default Quantity; CartLine passes Qty." },
      { name: "Minus / Plus", description: "Phosphor, outline icon buttons." },
      { name: "Value", description: "tabular-nums, aria-live polite." },
    ],
    variants: "min/max only. No branded chrome.",
    states: [
      { name: "default", description: "Value at min or current." },
      { name: "disabled minus", description: "At min." },
      { name: "disabled plus", description: "At max." },
    ],
    content: "Label Quantity on PDP, Qty on a dense cart line.",
    a11y: "Buttons named Decrease/Increase {label}. Live region on the number. Don’t silently clamp without the disabled state.",
    doDont: {
      do: "Keep minus disabled at 1 on a cart line; offer Remove separately.",
      dont: "Reuse GuestSelector’s Adults row for unit count.",
    },
    related: [
      { title: "CartLine", href: "/components/organisms/cart-line/" },
      { title: "GuestSelector", href: "/components/molecules/guest-selector/" },
    ],
    props: [
      { name: "value", type: "number", description: "Controlled quantity." },
      { name: "onChange", type: "(value: number) => void", description: "Clamped to min/max." },
      { name: "min", type: "number", default: "1", description: "Lower bound." },
      { name: "max", type: "number", default: "9", description: "Upper bound." },
      { name: "label", type: "string", default: '"Quantity"', description: "Visible label." },
      { name: "className", type: "string", description: "Layout classes." },
    ],
  }),
  "product-price": doc({
    slug: "product-price",
    tier: "molecules",
    title: "ProductPrice",
    description: "tabular-nums price, optional compare-at strike.",
    status: "preview",
    usage: `import { ProductPrice } from "@navigato/react"

<ProductPrice amount={680} compareAt={820} />`,
    whenToUse: ["ProductCard, CartLine, PDP column.", "A compare-at when the piece is on sale."],
    whenNot: [
      "Stay nightly + fees — that’s PriceBreakdown / BookingWidget.",
      "Inventing a sale. Omit compareAt when there isn’t one.",
    ],
    anatomy: [
      { name: "Amount", description: "Currency + tabular-nums." },
      { name: "Compare-at", description: "Muted strike when higher than amount." },
    ],
    variants: "On sale only when compareAt > amount.",
    states: [{ name: "default", description: "Single amount." }, { name: "sale", description: "Amount + strike." }],
    content: "Use the listed currency. Don’t say / night on a garment.",
    a11y: "Strike is visual; the current amount is first in the DOM. Don’t rely on red for sale — destructive is errors.",
    doDont: {
      do: "Strike the compare-at and keep the current price in the same tabular row.",
      dont: "Color the price champagne/cobalt as a fake discount badge.",
    },
    related: [
      { title: "ProductCard", href: "/components/organisms/product-card/" },
      { title: "PriceBreakdown", href: "/components/organisms/price-breakdown/" },
    ],
    props: [
      { name: "amount", type: "number", required: true, description: "Current price." },
      { name: "currency", type: "string", default: '"$"', description: "Prefix." },
      { name: "compareAt", type: "number", description: "Original price; shown when higher." },
      { name: "className", type: "string", description: "Layout classes." },
    ],
  }),
  "wishlist-button": doc({
    slug: "wishlist-button",
    tier: "molecules",
    title: "WishlistButton",
    description: "Heart icon button to save a piece. Same pattern as ListingCard save.",
    status: "preview",
    usage: `import { WishlistButton } from "@navigato/react"

<WishlistButton saved={saved} onChange={setSaved} />`,
    whenToUse: ["ProductCard overlay.", "PDP next to Add to bag."],
    whenNot: ["Stay saves — ListingCard already has Heart. Don’t nest both on a hotel tile."],
    anatomy: [
      { name: "Button", description: "icon-sm, rounded-full, secondary." },
      { name: "Heart", description: "Phosphor regular / fill when saved." },
    ],
    variants: "saved is fill weight, not a second icon.",
    states: [
      { name: "default", description: "regular Heart." },
      { name: "saved", description: "fill + aria-pressed." },
      { name: "focus-visible", description: "Button ring." },
    ],
    content: "aria-label Save to wishlist / Remove from wishlist.",
    a11y: "aria-pressed. Click stops bubbling so a card onClick doesn’t open the PDP twice.",
    doDont: {
      do: "Keep save available on a sold-out card, like ListingCard.",
      dont: "Silent-disable the heart when the SKU is sold out.",
    },
    related: [
      { title: "ProductCard", href: "/components/organisms/product-card/" },
      { title: "ListingCard", href: "/components/organisms/listing-card/" },
    ],
    props: [
      { name: "saved", type: "boolean", description: "Controlled saved state." },
      { name: "onChange", type: "(saved: boolean) => void", description: "Fires after toggle." },
      { name: "label", type: "string", description: "Override aria-label." },
      { name: "className", type: "string", description: "Positioning classes." },
    ],
  }),
  "product-badge": doc({
    slug: "product-badge",
    tier: "molecules",
    title: "ProductBadge",
    description: "New / sale / sold-out label on a product tile. Composes Badge.",
    status: "preview",
    usage: `import { ProductBadge } from "@navigato/react"

<ProductBadge tone="new">New</ProductBadge>
<ProductBadge tone="sold-out">Sold out</ProductBadge>`,
    whenToUse: ["ProductCard overlay.", "A short merchandising flag."],
    whenNot: [
      "Stay badges (Members, Guest favorite) — those stay on ListingCard/Badge.",
      "Error text. Destructive is not a sale color.",
    ],
    anatomy: [{ name: "Badge", description: "Existing Badge primitive; tone maps variant." }],
    variants: "default, new (secondary), sale (outline), sold-out (secondary).",
    states: [{ name: "default", description: "Visible label." }],
    content: "Sold out, New, or a short season flag. Don’t write paragraphs.",
    a11y: "Text is the name. Don’t use color alone for sold-out — the words stay.",
    doDont: {
      do: "Use sold-out tone with the words Sold out.",
      dont: "Fork Badge because the brand changed.",
    },
    related: [
      { title: "Badge", href: "/components/atoms/badge/" },
      { title: "ProductCard", href: "/components/organisms/product-card/" },
    ],
    props: [
      { name: "tone", type: '"default" | "new" | "sale" | "sold-out"', default: '"default"', description: "Maps to Badge variant." },
      { name: "children", type: "ReactNode", required: true, description: "Label." },
      { name: "className", type: "string", description: "Positioning classes." },
    ],
  }),
  "product-card": doc({
    slug: "product-card",
    tier: "organisms",
    title: "ProductCard",
    description: "Lookbook tile — photo, badge, wishlist, price. Not a hotel ListingCard.",
    status: "preview",
    usage: `import { ProductCard } from "@navigato/react"

<ProductCard
  title="The Vale Hoop"
  imageUrl="/photos/hoop-earrings.jpg"
  price={680}
  badge="New"
/>`,
    whenToUse: ["ProductGrid / LookbookRow.", "A fashion/object catalog, not stays."],
    whenNot: [
      "Hotel SERP — that’s ListingCard (location, rating, / night, soldOut stay).",
      "A fake hotel SERP for Nox & Vale.",
    ],
    anatomy: [
      { name: "Photo", description: "4:5 object-cover." },
      { name: "ProductBadge", description: "Optional; Sold out wins." },
      { name: "WishlistButton", description: "Top-right overlay." },
      { name: "Title + ProductPrice", description: "Sold-out hides price as bookable." },
    ],
    variants: "soldOut dims the photo and keeps wishlist. hover:shadow-lg when available.",
    states: [
      { name: "default", description: "Clickable tile." },
      { name: "sold-out", description: "Not clickable; save still works." },
      { name: "saved", description: "Heart fill." },
    ],
    content: "Title is the piece name. Price is not / night.",
    a11y: "Image alt is the title. soldOut sets aria-disabled. Wishlist click does not open the PDP.",
    doDont: {
      do: "Show a real product photo. Empty boxes are not a lookbook.",
      dont: "Copy ListingCard’s location + star row onto a coat.",
    },
    related: [
      { title: "ProductGrid", href: "/components/organisms/product-grid/" },
      { title: "ListingCard", href: "/components/organisms/listing-card/" },
      { title: "Gallery", href: "/components/pages/gallery/" },
    ],
    examples: [
      { id: "sold-out", title: "Sold out" },
    ],
    props: [
      { name: "title", type: "string", required: true, description: "Piece name." },
      { name: "imageUrl", type: "string", required: true, description: "Photo." },
      { name: "price", type: "number", required: true, description: "Unit price." },
      { name: "currency", type: "string", default: '"$"', description: "Prefix." },
      { name: "compareAt", type: "number", description: "Sale compare-at." },
      { name: "badge", type: "string", description: "Merch flag." },
      { name: "badgeTone", type: "ProductBadgeTone", description: "Badge tone." },
      { name: "saved", type: "boolean", description: "Wishlist." },
      { name: "soldOut", type: "boolean", description: "Unavailable SKU." },
      { name: "onSave", type: "(saved: boolean) => void", description: "Wishlist handler." },
      { name: "onClick", type: "() => void", description: "Open PDP. Ignored when soldOut." },
      { name: "className", type: "string", description: "Layout classes." },
    ],
  }),
  "product-gallery": doc({
    slug: "product-gallery",
    tier: "organisms",
    title: "ProductGallery",
    description: "Fashion PDP views — main photo, thumbs, dialog. Sister to PhotoGallery, not a fork of it.",
    status: "preview",
    usage: `import { ProductGallery } from "@navigato/react"

<ProductGallery images={views} title="The Vale Hoop" />`,
    whenToUse: ["Gallery PDP column.", "Multiple views of one object."],
    whenNot: ["Stay PDP — that’s PhotoGallery (“Show all N photos”)."],
    anatomy: [
      { name: "Main", description: "4:5 button opens dialog." },
      { name: "Thumbs", description: "Selects active view." },
      { name: "Dialog", description: "Existing Dialog primitive." },
    ],
    variants: "One image hides thumbs and the show-all cue.",
    states: [{ name: "default", description: "First view." }, { name: "expanded", description: "Dialog open." }],
    content: "Alt is “{title}, view n of m”.",
    a11y: "DialogTitle is sr-only. Thumbs have alt. Don’t leave an empty frame.",
    doDont: {
      do: "Pass real product photography.",
      dont: "Reuse PhotoGallery’s stay copy on a hoop.",
    },
    related: [
      { title: "PhotoGallery", href: "/components/organisms/photo-gallery/" },
      { title: "Gallery", href: "/components/pages/gallery/" },
    ],
    props: [
      { name: "images", type: "string[]", required: true, description: "View URLs." },
      { name: "title", type: "string", default: '"Product"', description: "Alt prefix." },
      { name: "className", type: "string", description: "Layout classes." },
    ],
  }),
  "cart-line": doc({
    slug: "cart-line",
    tier: "organisms",
    title: "CartLine",
    description: "One bag row — thumb, size/color, quantity, line price, remove.",
    status: "preview",
    usage: `import { CartLine } from "@navigato/react"

<CartLine
  id="hoop"
  title="The Vale Hoop"
  imageUrl={hoop}
  price={680}
  size="—"
  quantity={1}
  onQuantityChange={setQty}
  onRemove={remove}
/>`,
    whenToUse: ["Inside CartDrawer.", "A mini-cart list."],
    whenNot: ["Stay rate rows — that’s RateComparison / PriceBreakdown."],
    anatomy: [
      { name: "Thumb", description: "Decorative; title is next to it." },
      { name: "Meta", description: "Size · color." },
      { name: "QuantityStepper", description: "Qty." },
      { name: "Remove", description: "Ghost icon, Phosphor X." },
    ],
    variants: "Remove and quantity are optional handlers.",
    states: [{ name: "default", description: "Editable line." }],
    content: "Title is the piece. Meta is size and colorway, not a stay location.",
    a11y: "Remove is named Remove {title}. Quantity has its own labels. Thumb alt is empty when the title is beside it.",
    doDont: {
      do: "Let quantity and remove be explicit actions.",
      dont: "Drop the line at quantity 0 without a remove control.",
    },
    related: [
      { title: "CartDrawer", href: "/components/organisms/cart-drawer/" },
      { title: "QuantityStepper", href: "/components/molecules/quantity-stepper/" },
    ],
    props: [
      { name: "id", type: "string", required: true, description: "Line id." },
      { name: "title", type: "string", required: true, description: "Piece name." },
      { name: "imageUrl", type: "string", required: true, description: "Thumb." },
      { name: "price", type: "number", required: true, description: "Unit price." },
      { name: "quantity", type: "number", required: true, description: "Count." },
      { name: "size", type: "string", description: "Selected size." },
      { name: "color", type: "string", description: "Colorway name." },
      { name: "onQuantityChange", type: "(quantity: number) => void", description: "Stepper." },
      { name: "onRemove", type: "() => void", description: "Remove line." },
      { name: "className", type: "string", description: "Layout classes." },
    ],
  }),
  "cart-drawer": doc({
    slug: "cart-drawer",
    tier: "organisms",
    title: "CartDrawer",
    description: "Mini-cart in the existing Sheet. Empty, loading, and lines.",
    status: "preview",
    usage: `import { CartDrawer } from "@navigato/react"

<CartDrawer
  items={lines}
  onQuantityChange={update}
  onRemove={remove}
  onCheckout={() => {}}
/>`,
    whenToUse: ["Gallery header bag.", "A shopping sheet — not FilterSheet."],
    whenNot: ["Stay filters. FilterSheet stays on SERP."],
    anatomy: [
      { name: "Sheet", description: "Existing Sheet primitive." },
      { name: "Lines", description: "CartLine list." },
      { name: "Empty", description: "ShoppingBag + copy when items is []." },
      { name: "Loading", description: "Skeletons when loading." },
      { name: "Footer", description: "Subtotal + Checkout." },
    ],
    variants: "trigger={null} when the host owns the bag button, same idea as FilterSheet.",
    states: [
      { name: "empty", description: "Your bag is empty." },
      { name: "loading", description: "aria-busy skeletons." },
      { name: "filled", description: "Lines + checkout." },
    ],
    content: "Checkout is a demo action unless the consumer wires it. Don’t pretend it’s Stripe.",
    a11y: "SheetTitle Bag. Empty state is text + icon, not a spinner. Loading sets aria-busy.",
    doDont: {
      do: "Show empty copy when the bag has no lines.",
      dont: "Reuse EmptyState’s “No stays found” in a fashion bag.",
    },
    related: [
      { title: "Sheet", href: "/components/atoms/sheet/" },
      { title: "CartLine", href: "/components/organisms/cart-line/" },
      { title: "FilterSheet", href: "/components/organisms/filter-sheet/" },
    ],
    examples: [{ id: "empty", title: "Empty bag" }],
    props: [
      { name: "open", type: "boolean", description: "Controlled open." },
      { name: "onOpenChange", type: "(open: boolean) => void", description: "Sheet handler." },
      { name: "trigger", type: "ReactNode", description: "Pass null when the host owns the button." },
      { name: "items", type: "CartLineItem[]", description: "Lines." },
      { name: "loading", type: "boolean", description: "Skeleton rows." },
      { name: "onQuantityChange", type: "(id, quantity) => void", description: "Line qty." },
      { name: "onRemove", type: "(id: string) => void", description: "Remove line." },
      { name: "onCheckout", type: "() => void", description: "Footer action." },
      { name: "className", type: "string", description: "Sheet content classes." },
    ],
  }),
  "lookbook-row": doc({
    slug: "lookbook-row",
    tier: "organisms",
    title: "LookbookRow",
    description: "Horizontal row of ProductCards. Empty copy when the look has no pieces.",
    status: "preview",
    usage: `import { LookbookRow } from "@navigato/react"

<LookbookRow products={pieces} />`,
    whenToUse: ["A styled look (menswear, evening) as a horizontal strip."],
    whenNot: ["A two-dimensional catalog — that’s ProductGrid.", "Stay results — ListingCard grid."],
    anatomy: [{ name: "Scroller", description: "flex overflow-x-auto of ProductCards." }],
    variants: "Empty string when products is [].",
    states: [{ name: "default", description: "One or more cards." }, { name: "empty", description: "No pieces in this look." }],
    content: "Each card is a piece, not a stay.",
    a11y: "Horizontal scroll is mouse/trackpad; cards remain focusable. Don’t trap focus in the row.",
    doDont: {
      do: "Pass photographed pieces.",
      dont: "Turn this into a hotel carousel.",
    },
    related: [
      { title: "ProductGrid", href: "/components/organisms/product-grid/" },
      { title: "ProductCard", href: "/components/organisms/product-card/" },
    ],
    props: [
      { name: "products", type: "ProductCardProps[]", required: true, description: "Tiles." },
      { name: "className", type: "string", description: "Layout classes." },
    ],
  }),
  "product-grid": doc({
    slug: "product-grid",
    tier: "organisms",
    title: "ProductGrid",
    description: "Catalog grid with loading skeletons and an empty panel.",
    status: "preview",
    usage: `import { ProductGrid } from "@navigato/react"

<ProductGrid products={pieces} />
<ProductGrid products={[]} loading />`,
    whenToUse: ["Lookbook / shop grid.", "Loading and empty catalog states."],
    whenNot: ["Stay SERP grid — ListingCard + ListingCardSkeleton + EmptyState."],
    anatomy: [
      { name: "Grid", description: "2 / 3 columns of ProductCard." },
      { name: "Skeletons", description: "ProductCardSkeleton when loading." },
      { name: "Empty", description: "Dashed panel, not stay EmptyState." },
    ],
    variants: "loading vs empty vs filled.",
    states: [
      { name: "loading", description: "aria-busy skeletons." },
      { name: "empty", description: "No pieces here." },
      { name: "filled", description: "ProductCards." },
    ],
    content: "Empty title/description are overridable. Default is fashion, not stays.",
    a11y: "loading sets aria-busy. Don’t keep skeletons after an empty response.",
    doDont: {
      do: "Swap skeletons for cards or the empty panel.",
      dont: "Show ListingCardSkeleton in a lookbook.",
    },
    related: [
      { title: "LookbookRow", href: "/components/organisms/lookbook-row/" },
      { title: "ListingCardSkeleton", href: "/components/organisms/listing-card-skeleton/" },
      { title: "Gallery", href: "/components/pages/gallery/" },
    ],
    examples: [{ id: "empty", title: "Empty" }, { id: "loading", title: "Loading" }],
    props: [
      { name: "products", type: "ProductCardProps[]", required: true, description: "Tiles." },
      { name: "loading", type: "boolean", description: "Skeleton grid." },
      { name: "emptyTitle", type: "string", description: "Empty heading." },
      { name: "emptyDescription", type: "string", description: "Empty help." },
      { name: "className", type: "string", description: "Layout classes." },
    ],
  }),
};
