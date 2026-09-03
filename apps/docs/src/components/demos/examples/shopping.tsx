"use client";

import { useState } from "react";
import {
  CartDrawer,
  CartLine,
  ColorSwatch,
  LookbookRow,
  ProductBadge,
  ProductCard,
  ProductGallery,
  ProductGrid,
  ProductPrice,
  QuantityStepper,
  SizeSelector,
  WishlistButton,
} from "@navigato/react";
import { GALLERY_PHOTOS } from "../../../lib/photos";

const SWATCHES = [
  { id: "night", label: "Night", value: "#111318" },
  { id: "plaster", label: "Plaster", value: "#F4F2EF" },
  { id: "cobalt", label: "Cobalt", value: "#1E4FD6" },
  { id: "pewter", label: "Pewter", value: "#9A9AA3" },
];

export function SizeSelectorDefaultDemo() {
  const [size, setSize] = useState("M");
  return <SizeSelector value={size} onChange={setSize} unavailable={["XS"]} className="max-w-sm" />;
}

export function ColorSwatchDefaultDemo() {
  const [color, setColor] = useState("night");
  return <ColorSwatch colors={SWATCHES} value={color} onChange={setColor} />;
}

export function QuantityStepperDefaultDemo() {
  const [qty, setQty] = useState(1);
  return <QuantityStepper value={qty} onChange={setQty} className="max-w-xs" />;
}

export function ProductPriceDefaultDemo() {
  return (
    <div className="space-y-2">
      <ProductPrice amount={680} />
      <ProductPrice amount={1280} compareAt={1480} />
    </div>
  );
}

export function WishlistButtonDefaultDemo() {
  return <WishlistButton />;
}

export function ProductBadgeDefaultDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <ProductBadge>Limited</ProductBadge>
      <ProductBadge tone="new">New</ProductBadge>
      <ProductBadge tone="sale">Sale</ProductBadge>
      <ProductBadge tone="sold-out">Sold out</ProductBadge>
    </div>
  );
}

export function ProductCardDefaultDemo() {
  return (
    <div className="max-w-xs w-full">
      <ProductCard
        title="The Vale Hoop"
        imageUrl={GALLERY_PHOTOS.hoop}
        price={680}
        badge="New"
        badgeTone="new"
      />
    </div>
  );
}

export function ProductCardSoldOutDemo() {
  return (
    <div className="max-w-xs w-full">
      <ProductCard
        title="Night Overcoat"
        imageUrl={GALLERY_PHOTOS.coat}
        price={3100}
        soldOut
      />
    </div>
  );
}

export function ProductGalleryDefaultDemo() {
  return (
    <div className="max-w-sm w-full">
      <ProductGallery
        title="The Column Belt"
        images={[GALLERY_PHOTOS.belt, GALLERY_PHOTOS.handbag, GALLERY_PHOTOS.jewelry]}
      />
    </div>
  );
}

export function CartLineDefaultDemo() {
  const [qty, setQty] = useState(1);
  return (
    <div className="max-w-md w-full border border-border px-3">
      <CartLine
        id="hoop"
        title="The Vale Hoop"
        imageUrl={GALLERY_PHOTOS.hoop}
        price={680}
        size="—"
        color="Night"
        quantity={qty}
        onQuantityChange={setQty}
        onRemove={() => {}}
      />
    </div>
  );
}

export function CartDrawerDefaultDemo() {
  const [items, setItems] = useState([
    {
      id: "hoop",
      title: "The Vale Hoop",
      imageUrl: GALLERY_PHOTOS.hoop,
      price: 680,
      color: "Night",
      quantity: 1,
    },
  ]);
  return (
    <CartDrawer
      items={items}
      onQuantityChange={(id, quantity) =>
        setItems((current) => current.map((item) => (item.id === id ? { ...item, quantity } : item)))
      }
      onRemove={(id) => setItems((current) => current.filter((item) => item.id !== id))}
      onCheckout={() => {}}
    />
  );
}

export function CartDrawerEmptyDemo() {
  return <CartDrawer items={[]} onCheckout={() => {}} />;
}

export function LookbookRowDefaultDemo() {
  return (
    <LookbookRow
      products={[
        { title: "The Vale Hoop", imageUrl: GALLERY_PHOTOS.hoop, price: 680, badge: "New", badgeTone: "new" },
        { title: "The Column Belt", imageUrl: GALLERY_PHOTOS.belt, price: 920 },
        { title: "Gallery Oxford", imageUrl: GALLERY_PHOTOS.shoes, price: 620 },
      ]}
    />
  );
}

export function ProductGridDefaultDemo() {
  return (
    <ProductGrid
      products={[
        { title: "The Vale Hoop", imageUrl: GALLERY_PHOTOS.hoop, price: 680, badge: "New", badgeTone: "new" },
        { title: "Night Suit", imageUrl: GALLERY_PHOTOS.suit, price: 2400 },
        { title: "Plaster Dress", imageUrl: GALLERY_PHOTOS.womenswear, price: 1280 },
        { title: "The Vale Tote", imageUrl: GALLERY_PHOTOS.handbag, price: 1450 },
        { title: "Gallery Oxford", imageUrl: GALLERY_PHOTOS.shoes, price: 620 },
        { title: "Pearl Stud", imageUrl: GALLERY_PHOTOS.jewelry, price: 340 },
      ]}
    />
  );
}

export function ProductGridEmptyDemo() {
  return <ProductGrid products={[]} />;
}

export function ProductGridLoadingDemo() {
  return <ProductGrid products={[]} loading />;
}
