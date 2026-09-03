"use client";

import { Moon, Sun } from "@phosphor-icons/react";
import { useEffect, useId, useState } from "react";
import { Button } from "@navigato/react";
import {
  applyBrand,
  applyDark,
  BRANDS,
  readBrand,
  readDark,
  type BrandId,
} from "../lib/brand";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setDark(readDark());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    applyDark(dark);
  }, [dark, mounted]);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" aria-label="Toggle theme" disabled>
        <Sun size={18} />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setDark((d) => !d)}
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </Button>
  );
}

export function BrandSwitch({ compact = false }: { compact?: boolean }) {
  const [brand, setBrand] = useState<BrandId>("navigato");
  const labelId = useId();

  useEffect(() => {
    setBrand(readBrand());
  }, []);

  const select = (id: BrandId) => {
    setBrand(id);
    applyBrand(id);
  };

  return (
    <div className={compact ? "flex flex-col gap-1" : "flex flex-col gap-1.5"}>
      <p
        id={labelId}
        className={compact ? "sr-only" : "nvg-uppercase text-muted-foreground m-0"}
      >
        Brand
      </p>
      <div
        className="inline-flex border border-border"
        role="radiogroup"
        aria-labelledby={labelId}
      >
        {BRANDS.map((option) => {
          const selected = brand === option.id;
          return (
            <button
              key={option.id}
              type="button"
              role="radio"
              aria-checked={selected}
              className={`px-2 py-1 text-[0.625rem] uppercase tracking-[0.14em] transition-colors ${
                selected
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => select(option.id)}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function DocsThemeControls({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <div className="flex items-center gap-2">
        <BrandSwitch compact />
        <ThemeToggle />
      </div>
    );
  }

  return <BrandSwitch />;
}
