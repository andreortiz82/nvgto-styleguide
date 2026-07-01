"use client";

import { List } from "@phosphor-icons/react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@navigato/react";
import { siteNav, type NavItem } from "../lib/nav";

interface MobileNavProps {
  base: string;
  currentPath: string;
}

function withBase(base: string, href: string) {
  const normalized = href.startsWith("/") ? href.slice(1) : href;
  return `${base}${normalized}`;
}

function isActive(currentPath: string, href: string, base: string) {
  const full = withBase(base, href);
  const normalizedCurrent = currentPath.endsWith("/") ? currentPath : `${currentPath}/`;
  const normalizedHref = full.endsWith("/") ? full : `${full}/`;
  return normalizedCurrent === normalizedHref || normalizedCurrent.startsWith(normalizedHref);
}

function NavLinks({
  base,
  currentPath,
  onNavigate,
}: {
  base: string;
  currentPath: string;
  onNavigate: () => void;
}) {
  function renderItem(item: NavItem, depth = 0) {
    if (item.children) {
      return (
        <div key={item.label} className={depth > 0 ? "mt-3" : "mt-4 first:mt-0"}>
          {item.href ? (
            <a
              href={withBase(base, item.href)}
              onClick={onNavigate}
              className={`block nvg-uppercase mb-2 no-underline ${
                isActive(currentPath, item.href, base) ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </a>
          ) : (
            <p className="nvg-uppercase text-muted-foreground mb-2">{item.label}</p>
          )}
          <ul className="space-y-2 list-none p-0 m-0">
            {item.children.map((child) => (
              <li key={child.label}>{renderItem(child, depth + 1)}</li>
            ))}
          </ul>
        </div>
      );
    }

    if (!item.href) return null;

    const active = isActive(currentPath, item.href, base);
    return (
      <a
        key={item.href}
        href={withBase(base, item.href)}
        onClick={onNavigate}
        className={`block py-1 no-underline text-sm transition-colors ${
          depth > 0 ? "pl-2 border-l border-border" : ""
        } ${active ? "text-primary font-semibold" : "text-foreground hover:text-primary"}`}
      >
        {item.label}
      </a>
    );
  }

  return <nav className="space-y-1">{siteNav.map((item) => renderItem(item))}</nav>;
}

export function MobileNav({ base, currentPath }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className="inline-flex lg:hidden h-9 w-9 items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground"
        aria-label="Open navigation menu"
      >
        <List size={20} />
      </SheetTrigger>
      <SheetContent side="left" className="w-72 overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-left font-bold tracking-tight">Navigato</SheetTitle>
        </SheetHeader>
        <div className="mt-6">
          <NavLinks base={base} currentPath={currentPath} onNavigate={() => setOpen(false)} />
        </div>
      </SheetContent>
    </Sheet>
  );
}
