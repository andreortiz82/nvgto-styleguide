"use client";

import { ArrowSquareOut, Heart, MagnifyingGlass } from "@phosphor-icons/react";
import { BrushNMark, Button, DiscMark } from "@navigato/react";
import { useState } from "react";

const HOOP =
  "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=900&h=1100&fit=crop";
const BELT =
  "https://images.unsplash.com/photo-1664286074176-5206ee5dc878?w=900&h=1100&fit=crop";

type Product = {
  id: "hoop" | "belt";
  name: string;
  price: string;
  image: string;
  alt: string;
};

const PRODUCTS: Product[] = [
  {
    id: "hoop",
    name: "The Vale Hoop",
    price: "$680",
    image: HOOP,
    alt: "Silver hoop earrings on a plaster pedestal",
  },
  {
    id: "belt",
    name: "The Column Belt",
    price: "$920",
    image: BELT,
    alt: "Black leather belt with a silver buckle",
  },
];

export function NoxValeGalleryDemo() {
  const [product, setProduct] = useState<Product>(PRODUCTS[0]);
  const [note, setNote] = useState<string | null>(null);

  return (
    <div className="border border-border bg-background text-foreground">
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
      </header>

      <div className="flex flex-wrap gap-1 border-b border-border px-5 py-2" role="group" aria-label="Product">
        {PRODUCTS.map((item) => (
          <Button
            key={item.id}
            type="button"
            size="sm"
            variant={product.id === item.id ? "default" : "outline"}
            onClick={() => {
              setProduct(item);
              setNote(null);
            }}
          >
            {item.name}
          </Button>
        ))}
      </div>

      <div className="mx-auto flex max-w-md flex-col items-center px-6 py-10 text-center">
        <BrushNMark className="mb-8 size-16" title="Nox & Vale" />
        <h2 className="nvg-wordmark m-0 text-xl">{product.name}</h2>
        <div className="mt-8 w-full border border-border bg-card">
          <img src={product.image} alt={product.alt} className="aspect-[4/5] w-full object-cover" />
        </div>
        <p className="mt-6 m-0 text-sm tabular-nums tracking-widest">{product.price}</p>
        <Button
          type="button"
          variant="outline"
          className="mt-8 w-full uppercase tracking-[0.18em]"
          onClick={() => setNote(`${product.name} added to bag. Demo does not check out.`)}
        >
          Add to bag
        </Button>
        {note ? (
          <p className="mt-3 mb-0 text-sm text-muted-foreground" aria-live="polite">
            {note}
          </p>
        ) : null}
      </div>

      <footer className="flex items-center justify-center gap-8 border-t border-border px-5 py-4 text-foreground">
        <MagnifyingGlass size={18} aria-hidden />
        <Heart size={18} aria-hidden />
        <ArrowSquareOut size={18} aria-hidden />
      </footer>
    </div>
  );
}
