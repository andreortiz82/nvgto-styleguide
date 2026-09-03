"use client";

import { Moon, Sun } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
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

export function BrandSwitch() {
  const [brand, setBrand] = useState<BrandId>("navigato");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setBrand(readBrand());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    applyBrand(brand);
  }, [brand, mounted]);

  return (
    <div
      className="inline-flex border border-border"
      role="group"
      aria-label="Brand"
    >
      {BRANDS.map((option) => (
        <button
          key={option.id}
          type="button"
          className={`px-2 py-1 text-[0.625rem] uppercase tracking-[0.14em] transition-colors ${
            brand === option.id
              ? "bg-primary text-primary-foreground"
              : "bg-background text-muted-foreground hover:text-foreground"
          }`}
          aria-pressed={brand === option.id}
          onClick={() => setBrand(option.id)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export function DocsThemeControls({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "flex items-center gap-2" : "flex flex-col items-end gap-2"}>
      <BrandSwitch />
      <ThemeToggle />
    </div>
  );
}
