"use client";

import { ShoppingBag } from "@phosphor-icons/react";
import {
  BrushNMark,
  Button,
  CartDrawer,
  ColorSwatch,
  DiscMark,
  ProductGallery,
  ProductGrid,
  ProductPrice,
  QuantityStepper,
  SizeSelector,
  WishlistButton,
  type CartLineItem,
} from "@navigato/react";
import { useMemo, useState } from "react";
import { GALLERY_PHOTOS } from "../../../lib/photos";

const COLORS = [
  { id: "night", label: "Night", value: "#111318" },
  { id: "plaster", label: "Plaster", value: "#F4F2EF" },
  { id: "cobalt", label: "Cobalt", value: "#1E4FD6" },
];

type Piece = {
  id: string;
  title: string;
  price: number;
  compareAt?: number;
  imageUrl: string;
  images: string[];
  badge?: string;
  badgeTone?: "new" | "sale";
  soldOut?: boolean;
  sizes?: string[];
  unavailable?: string[];
};

const PIECES: Piece[] = [
  {
    id: "hoop",
    title: "The Vale Hoop",
    price: 680,
    imageUrl: GALLERY_PHOTOS.hoop,
    images: [GALLERY_PHOTOS.hoop, GALLERY_PHOTOS.jewelry],
    badge: "New",
    badgeTone: "new",
    sizes: ["—"],
  },
  {
    id: "belt",
    title: "The Column Belt",
    price: 920,
    imageUrl: GALLERY_PHOTOS.belt,
    images: [GALLERY_PHOTOS.belt, GALLERY_PHOTOS.handbag],
    sizes: ["S", "M", "L"],
  },
  {
    id: "suit",
    title: "Night Suit",
    price: 2400,
    imageUrl: GALLERY_PHOTOS.suit,
    images: [GALLERY_PHOTOS.suit, GALLERY_PHOTOS.coat],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "dress",
    title: "Plaster Column Dress",
    price: 1280,
    compareAt: 1480,
    imageUrl: GALLERY_PHOTOS.womenswear,
    images: [GALLERY_PHOTOS.womenswear],
    badge: "Sale",
    badgeTone: "sale",
    sizes: ["XS", "S", "M", "L"],
    unavailable: ["XS"],
  },
  {
    id: "tote",
    title: "The Vale Tote",
    price: 1450,
    imageUrl: GALLERY_PHOTOS.handbag,
    images: [GALLERY_PHOTOS.handbag, GALLERY_PHOTOS.belt],
    sizes: ["—"],
  },
  {
    id: "oxford",
    title: "Gallery Oxford",
    price: 620,
    imageUrl: GALLERY_PHOTOS.shoes,
    images: [GALLERY_PHOTOS.shoes],
    sizes: ["36", "37", "38", "39", "40", "41"],
  },
  {
    id: "coat",
    title: "Night Overcoat",
    price: 3100,
    imageUrl: GALLERY_PHOTOS.coat,
    images: [GALLERY_PHOTOS.coat, GALLERY_PHOTOS.suit],
    soldOut: true,
    sizes: ["S", "M", "L"],
  },
  {
    id: "stud",
    title: "Pearl Stud",
    price: 340,
    imageUrl: GALLERY_PHOTOS.jewelry,
    images: [GALLERY_PHOTOS.jewelry, GALLERY_PHOTOS.hoop],
    sizes: ["—"],
  },
];

const GRID_VIEWS = [
  { id: "lookbook", label: "Lookbook" },
  { id: "pdp", label: "PDP" },
  { id: "empty", label: "Empty" },
  { id: "loading", label: "Loading" },
] as const;

type GridView = (typeof GRID_VIEWS)[number]["id"];

export function NoxValeGalleryDemo() {
  const [view, setView] = useState<GridView>("pdp");
  const [product, setProduct] = useState<Piece>(PIECES[0]);
  const [size, setSize] = useState(PIECES[0].sizes?.[0] ?? "M");
  const [color, setColor] = useState("night");
  const [qty, setQty] = useState(1);
  const [bagOpen, setBagOpen] = useState(false);
  const [items, setItems] = useState<CartLineItem[]>([]);
  const [note, setNote] = useState<string | null>(null);

  const colorLabel = COLORS.find((c) => c.id === color)?.label ?? color;

  const gridProducts = useMemo(
    () =>
      PIECES.map((piece) => ({
        title: piece.title,
        imageUrl: piece.imageUrl,
        price: piece.price,
        compareAt: piece.compareAt,
        badge: piece.badge,
        badgeTone: piece.badgeTone,
        soldOut: piece.soldOut,
        onClick: () => {
          setProduct(piece);
          setSize(piece.sizes?.[0] ?? "M");
          setQty(1);
          setNote(null);
          setView("pdp");
        },
      })),
    [],
  );

  const selectPiece = (piece: Piece) => {
    setProduct(piece);
    setSize(piece.sizes?.[0] ?? "M");
    setQty(1);
    setNote(null);
  };

  const addToBag = () => {
    if (product.soldOut) {
      setNote(`${product.title} is sold out. Wishlist still works.`);
      return;
    }
    setItems((current) => {
      const id = `${product.id}-${size}-${color}`;
      const existing = current.find((item) => item.id === id);
      if (existing) {
        return current.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + qty } : item,
        );
      }
      return [
        ...current,
        {
          id,
          title: product.title,
          imageUrl: product.imageUrl,
          price: product.price,
          size,
          color: colorLabel,
          quantity: qty,
        },
      ];
    });
    setBagOpen(true);
    setNote(`${product.title} added to bag. Demo does not check out.`);
  };

  return (
    <div className="border border-border bg-background text-foreground shadow-sm">
      <header className="flex items-center justify-between gap-4 border-b border-border px-5 py-4">
        <span className="flex items-center gap-2.5">
          <DiscMark className="size-3.5 shrink-0" title="Nox & Vale" />
          <span className="nvg-wordmark text-[0.7rem]">Nox & Vale</span>
        </span>
        <nav className="flex gap-5 nvg-uppercase text-muted-foreground" aria-label="Gallery">
          <span>Men</span>
          <span>Women</span>
          <span>Objects</span>
        </nav>
        <CartDrawer
          open={bagOpen}
          onOpenChange={setBagOpen}
          items={items}
          trigger={
            <Button variant="outline" size="sm">
              <ShoppingBag size={16} />
              Bag{items.length ? ` (${items.length})` : ""}
            </Button>
          }
          onQuantityChange={(id, quantity) =>
            setItems((current) => current.map((item) => (item.id === id ? { ...item, quantity } : item)))
          }
          onRemove={(id) => setItems((current) => current.filter((item) => item.id !== id))}
          onCheckout={() => setNote("Demo does not check out.")}
        />
      </header>

      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-5 py-2">
        <p className="text-sm text-muted-foreground m-0">
          Gallery PDP — shopping composites, not a hotel SERP.
        </p>
        <div className="flex flex-wrap gap-1" role="group" aria-label="Gallery demo state">
          {GRID_VIEWS.map((option) => (
            <Button
              key={option.id}
              type="button"
              size="sm"
              variant={view === option.id ? "default" : "outline"}
              onClick={() => setView(option.id)}
            >
              {option.label}
            </Button>
          ))}
        </div>
      </div>

      {view === "lookbook" || view === "empty" || view === "loading" ? (
        <div className="px-5 py-8">
          <ProductGrid
            products={view === "lookbook" ? gridProducts : []}
            loading={view === "loading"}
            emptyTitle="No pieces in this drop"
            emptyDescription="The lookbook is empty. Try another season — this is example data."
          />
        </div>
      ) : (
        <div className="grid gap-8 px-5 py-8 lg:grid-cols-2">
          <ProductGallery images={product.images} title={product.title} />
          <div className="flex flex-col">
            <BrushNMark className="mb-6 size-12" title="Nox & Vale" />
            <h2 className="nvg-wordmark m-0 text-xl">{product.title}</h2>
            <ProductPrice
              amount={product.price}
              compareAt={product.compareAt}
              className="mt-4 text-sm"
            />
            {product.soldOut ? (
              <p className="mt-2 mb-0 text-sm text-muted-foreground">Sold out — save it for the next drop.</p>
            ) : null}
            <div className="mt-8 space-y-6">
              <SizeSelector
                sizes={product.sizes}
                value={size}
                onChange={setSize}
                unavailable={product.unavailable}
              />
              <ColorSwatch colors={COLORS} value={color} onChange={setColor} />
              <QuantityStepper value={qty} onChange={setQty} />
            </div>
            <div className="mt-8 flex items-center gap-2">
              <Button
                type="button"
                variant="outline"
                className="flex-1 uppercase tracking-[0.18em]"
                onClick={addToBag}
              >
                {product.soldOut ? "Sold out" : "Add to bag"}
              </Button>
              <WishlistButton />
            </div>
            {note ? (
              <p className="mt-3 mb-0 text-sm text-muted-foreground" aria-live="polite">
                {note}
              </p>
            ) : null}
            <div className="mt-8 flex flex-wrap gap-2">
              {PIECES.map((piece) => (
                <Button
                  key={piece.id}
                  type="button"
                  size="sm"
                  variant={product.id === piece.id ? "default" : "outline"}
                  onClick={() => selectPiece(piece)}
                >
                  {piece.title}
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
