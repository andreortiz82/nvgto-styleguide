"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Separator,
} from "@navigato/react";

interface TokenSwatch {
  name: string;
  cssVar: string;
  utility?: string;
  desc?: string;
  foreground?: string;
}

interface TokenSection {
  title: string;
  description?: string;
  tokens: TokenSwatch[];
}

const NAVIGATO_RAMP: { name: string; cssVar: string; hex: string; desc: string }[] = [
  { name: "mist", cssVar: "--mist", hex: "#F4F2EE", desc: "Light page" },
  { name: "graphite", cssVar: "--graphite", hex: "#44403C", desc: "Muted text" },
  { name: "ink", cssVar: "--ink", hex: "#1C1917", desc: "Light foreground / primary" },
  { name: "champagne", cssVar: "--champagne", hex: "#C4B59A", desc: "Metal / dark primary" },
  { name: "black / obsidian", cssVar: "--obsidian", hex: "#0C0A09", desc: "Dark page" },
  { name: "silver", cssVar: "--silver", hex: "#B8B4AE", desc: "Muted metal" },
];

const NOX_RAMP: { name: string; cssVar: string; hex: string; desc: string }[] = [
  { name: "plaster", cssVar: "--plaster", hex: "#F4F2EF", desc: "Light page / dark text" },
  { name: "night", cssVar: "--night", hex: "#111318", desc: "Light text / dark page" },
  { name: "cobalt", cssVar: "--cobalt", hex: "#1E4FD6", desc: "Only accent" },
  { name: "pewter", cssVar: "--pewter", hex: "#9A9AA3", desc: "Muted" },
  { name: "pearl", cssVar: "--pearl", hex: "#E7E4DE", desc: "Secondary fill" },
];

const semanticTokens: TokenSwatch[] = [
  { name: "background", cssVar: "--background", utility: "bg-background", desc: "Page surface" },
  { name: "foreground", cssVar: "--foreground", utility: "text-foreground", desc: "Body text" },
  { name: "primary", cssVar: "--primary", utility: "bg-primary", desc: "Buttons, links", foreground: "--primary-foreground" },
  { name: "muted", cssVar: "--muted", utility: "bg-muted", desc: "Subtle fills", foreground: "--muted-foreground" },
  { name: "accent", cssVar: "--accent", utility: "bg-accent", desc: "Accent", foreground: "--accent-foreground" },
  { name: "border", cssVar: "--border", utility: "border-border", desc: "Borders" },
  { name: "destructive", cssVar: "--destructive", utility: "bg-destructive", desc: "Errors" },
  { name: "chart-1", cssVar: "--chart-1", utility: "bg-chart-1", desc: "Lead series" },
  { name: "chart-2", cssVar: "--chart-2", utility: "bg-chart-2" },
  { name: "chart-3", cssVar: "--chart-3", utility: "bg-chart-3" },
  { name: "chart-4", cssVar: "--chart-4", utility: "bg-chart-4" },
  { name: "chart-5", cssVar: "--chart-5", utility: "bg-chart-5" },
];

const sections: TokenSection[] = [
  {
    title: "Semantic (live)",
    description: "Roles on the current html brand + mode. Boards below freeze light and dark.",
    tokens: [
      { name: "background", cssVar: "--background", utility: "bg-background", desc: "Page surface" },
      { name: "foreground", cssVar: "--foreground", utility: "text-foreground", desc: "Body text" },
      { name: "primary", cssVar: "--primary", utility: "bg-primary", desc: "Primary — buttons, links, CTAs", foreground: "--primary-foreground" },
      { name: "secondary", cssVar: "--secondary", utility: "bg-secondary", desc: "Secondary actions", foreground: "--secondary-foreground" },
      { name: "muted", cssVar: "--muted", utility: "bg-muted", desc: "Subtle fills", foreground: "--muted-foreground" },
      { name: "accent", cssVar: "--accent", utility: "bg-accent", desc: "Accent emphasis", foreground: "--accent-foreground" },
      { name: "destructive", cssVar: "--destructive", utility: "bg-destructive", desc: "Errors & danger" },
      { name: "border", cssVar: "--border", utility: "border-border", desc: "Borders" },
      { name: "input", cssVar: "--input", utility: "border-input", desc: "Input borders" },
      { name: "ring", cssVar: "--ring", utility: "ring-ring", desc: "Focus rings" },
    ],
  },
  {
    title: "Surfaces",
    tokens: [
      { name: "card", cssVar: "--card", utility: "bg-card", foreground: "--card-foreground" },
      { name: "popover", cssVar: "--popover", utility: "bg-popover", foreground: "--popover-foreground" },
    ],
  },
  {
    title: "Charts",
    tokens: [
      { name: "chart-1", cssVar: "--chart-1", utility: "bg-chart-1" },
      { name: "chart-2", cssVar: "--chart-2", utility: "bg-chart-2" },
      { name: "chart-3", cssVar: "--chart-3", utility: "bg-chart-3" },
      { name: "chart-4", cssVar: "--chart-4", utility: "bg-chart-4" },
      { name: "chart-5", cssVar: "--chart-5", utility: "bg-chart-5" },
    ],
  },
  {
    title: "Sidebar",
    tokens: [
      { name: "sidebar", cssVar: "--sidebar", utility: "bg-sidebar", foreground: "--sidebar-foreground" },
      { name: "sidebar-primary", cssVar: "--sidebar-primary", utility: "bg-sidebar-primary", foreground: "--sidebar-primary-foreground" },
      { name: "sidebar-accent", cssVar: "--sidebar-accent", utility: "bg-sidebar-accent", foreground: "--sidebar-accent-foreground" },
      { name: "sidebar-border", cssVar: "--sidebar-border", utility: "border-sidebar-border" },
      { name: "sidebar-ring", cssVar: "--sidebar-ring", utility: "ring-sidebar-ring" },
    ],
  },
];

function toHex(value: string): string {
  const rgb = value.match(/rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)/);
  if (rgb) {
    const h = (n: string) =>
      Math.round(Number(n)).toString(16).padStart(2, "0").toUpperCase();
    return `#${h(rgb[1])}${h(rgb[2])}${h(rgb[3])}`;
  }
  const srgb = value.match(/color\(srgb\s+([\d.]+)\s+([\d.]+)\s+([\d.]+)/);
  if (srgb) {
    const h = (n: string) =>
      Math.round(Number(n) * 255)
        .toString(16)
        .padStart(2, "0")
        .toUpperCase();
    return `#${h(srgb[1])}${h(srgb[2])}${h(srgb[3])}`;
  }
  if (value.startsWith("#")) return value.toUpperCase();
  return value;
}

function useCssVar(cssVar: string, root?: HTMLElement | null) {
  const [value, setValue] = useState("");

  useEffect(() => {
    const node = root ?? document.documentElement;
    const read = () => {
      const raw = getComputedStyle(node).getPropertyValue(cssVar).trim();
      setValue(raw ? toHex(raw) : "");
    };
    read();
    const obs = new MutationObserver(read);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class", "data-brand"] });
    return () => obs.disconnect();
  }, [cssVar, root]);

  return value;
}

function NamedChip({
  name,
  cssVar,
  hex,
  desc,
}: {
  name: string;
  cssVar: string;
  hex: string;
  desc: string;
}) {
  return (
    <Card className="overflow-hidden shadow-sm">
      <div className="h-20 border-b" style={{ backgroundColor: hex }} />
      <CardContent className="p-3 space-y-1">
        <p className="font-semibold text-sm m-0">{name}</p>
        <p className="text-xs font-mono text-muted-foreground m-0">{cssVar}</p>
        <p className="text-xs font-mono m-0">{hex}</p>
        <p className="text-xs text-muted-foreground m-0">{desc}</p>
      </CardContent>
    </Card>
  );
}

function Swatch({ token, probe }: { token: TokenSwatch; probe?: HTMLElement | null }) {
  const value = useCssVar(token.cssVar, probe);
  const fgValue = useCssVar(token.foreground ?? "", token.foreground ? probe : null);

  return (
    <Card className="overflow-hidden shadow-sm">
      <div
        className="h-20 border-b flex items-end p-3"
        style={{
          backgroundColor: `var(${token.cssVar})`,
          color: token.foreground ? `var(${token.foreground})` : undefined,
        }}
      >
        {token.foreground ? <span className="text-xs font-medium opacity-90">Aa</span> : null}
      </div>
      <CardContent className="p-3 space-y-1">
        <p className="font-semibold text-sm m-0">{token.name}</p>
        <p className="text-xs font-mono text-muted-foreground m-0">{token.cssVar}</p>
        {value ? (
          <p className="text-xs font-mono m-0 truncate" title={value}>
            {value}
          </p>
        ) : null}
        {token.foreground && fgValue ? (
          <p className="text-xs font-mono text-muted-foreground m-0 truncate">fg: {fgValue}</p>
        ) : null}
        {token.utility ? <p className="text-xs text-muted-foreground m-0">{token.utility}</p> : null}
        {token.desc ? <p className="text-xs text-muted-foreground m-0">{token.desc}</p> : null}
      </CardContent>
    </Card>
  );
}

function SemanticBoard({
  brand,
  dark,
  label,
}: {
  brand: "navigato" | "nox-vale";
  dark: boolean;
  label: string;
}) {
  const [root, setRoot] = useState<HTMLDivElement | null>(null);

  return (
    <div
      ref={setRoot}
      data-brand={brand}
      className={dark ? "dark border border-border bg-background p-4 shadow-sm" : "border border-border bg-background p-4 shadow-sm"}
    >
      <p className="nvg-uppercase text-muted-foreground m-0 mb-3">{label}</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {semanticTokens.map((token) => (
          <Swatch key={`${brand}-${dark}-${token.cssVar}`} token={token} probe={root} />
        ))}
      </div>
    </div>
  );
}

export function ThemeColorsPage() {
  return (
    <div className="space-y-10 mt-8">
      <Card className="border-dashed shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">Named palettes + semantic roles</CardTitle>
          <CardDescription>
            Palette steps are hex constants. Semantic roles remap per{" "}
            <code className="text-xs">data-brand</code> and <code className="text-xs">.dark</code>.
            Destructive is errors, not a brand color. Chart-1 is champagne (Navigato) or cobalt (Nox &amp; Vale).
          </CardDescription>
        </CardHeader>
      </Card>

      <section className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold m-0">Obsidian — Navigato</h2>
          <p className="text-sm text-muted-foreground mt-1 mb-0">
            mist / graphite / ink / champagne / black / silver
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {NAVIGATO_RAMP.map((token) => (
            <NamedChip key={token.name} {...token} />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold m-0">Gallery — Nox &amp; Vale</h2>
          <p className="text-sm text-muted-foreground mt-1 mb-0">
            plaster / night / cobalt / pewter / pearl
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {NOX_RAMP.map((token) => (
            <NamedChip key={token.name} {...token} />
          ))}
        </div>
      </section>

      <Separator />

      <section className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold m-0">Semantic roles — light and dark</h2>
          <p className="text-sm text-muted-foreground mt-1 mb-0">
            Boards set <code className="text-xs">data-brand</code> and <code className="text-xs">.dark</code>{" "}
            on a probe surface so both modes are visible without flipping the docs chrome.
          </p>
        </div>
        <SemanticBoard brand="navigato" dark={false} label="Navigato light — ink on mist" />
        <SemanticBoard brand="navigato" dark label="Navigato dark — champagne on obsidian" />
        <SemanticBoard brand="nox-vale" dark={false} label="Nox & Vale light — night on plaster" />
        <SemanticBoard brand="nox-vale" dark label="Nox & Vale dark — plaster on night" />
      </section>

      <Separator />

      {sections.map((section) => (
        <section key={section.title} className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold m-0">{section.title}</h2>
            {section.description ? (
              <p className="text-sm text-muted-foreground mt-1 mb-0">{section.description}</p>
            ) : null}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {section.tokens.map((token) => (
              <Swatch key={token.cssVar} token={token} />
            ))}
          </div>
          <Separator />
        </section>
      ))}
    </div>
  );
}
