"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@navigato/react";

const radiusTokens = [
  { name: "sm", calc: "0 — sharp", sample: "rounded-sm" },
  { name: "md", calc: "0 — sharp", sample: "rounded-md" },
  { name: "lg", calc: "0 — sharp", sample: "rounded-lg" },
  { name: "xl", calc: "0 — sharp", sample: "rounded-xl" },
  { name: "2xl", calc: "0 — sharp", sample: "rounded-2xl" },
];

const shadowTokens = [
  { name: "shadow-2xs", token: "--shadow-2xs", use: "Hairline lift" },
  { name: "shadow-xs", token: "--shadow-xs", use: "Subtle rest" },
  { name: "shadow-sm", token: "--shadow-sm", use: "Cards at rest" },
  { name: "shadow-md", token: "--shadow-md", use: "Popovers, dropdowns" },
  { name: "shadow-lg", token: "--shadow-lg", use: "Hover emphasis" },
  { name: "shadow-xl", token: "--shadow-xl", use: "Dialogs, modals" },
  { name: "shadow-2xl", token: "--shadow-2xl", use: "Hero overlay" },
];

export function SpacingPage() {
  return (
    <div className="not-prose mt-8 space-y-8">
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">Base unit</CardTitle>
          <CardDescription>
            4px Tailwind grid. Common gaps: <code className="text-xs">gap-2</code> (8px),{" "}
            <code className="text-xs">gap-4</code> (16px). Card padding:{" "}
            <code className="text-xs">p-5</code> / <code className="text-xs">p-6</code>.
          </CardDescription>
        </CardHeader>
      </Card>

      <section>
        <h3 className="text-lg font-semibold mb-3">Radius scale</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Base <code className="text-xs">--radius: 0px</code> — sharp corners on every surface.
          Circles stay <code className="text-xs">rounded-full</code> (switch, swatch, disc).
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {radiusTokens.map((r) => (
            <div key={r.name} className="flex items-center gap-4">
              <div className={`size-16 shrink-0 border-2 border-primary bg-accent ${r.sample}`} />
              <div>
                <p className="font-mono text-sm font-semibold m-0">{r.name}</p>
                <p className="text-xs text-muted-foreground m-0">{r.calc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold mb-3">Elevation scale</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Soft, cool, low-spread shadows plus a hairline ring. Quiet luxury / gallery — not Material
          blobs, not an orange or cobalt glow. Cards use <code className="text-xs">shadow-sm</code>,
          popovers <code className="text-xs">shadow-md</code>, sheets{" "}
          <code className="text-xs">shadow-lg</code>, dialogs{" "}
          <code className="text-xs">shadow-xl</code>.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {shadowTokens.map((s) => (
            <div key={s.name} className="border border-border bg-card p-4">
              <p className="font-mono text-sm font-semibold mb-1 m-0">{s.name}</p>
              <p className="text-xs text-muted-foreground mb-3 m-0">{s.use}</p>
              <div className={`h-16 bg-card ${s.name}`} aria-hidden />
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Utilities: <code className="text-xs">.nvg-shadow-sm</code>,{" "}
          <code className="text-xs">.nvg-shadow-md</code>,{" "}
          <code className="text-xs">.nvg-shadow-lg</code>,{" "}
          <code className="text-xs">.nvg-shadow-xl</code>
        </p>
        <Card className="mt-6 shadow-sm">
          <CardHeader>
            <CardTitle className="text-base">Card at rest</CardTitle>
            <CardDescription>shadow-sm — the default on Card, ProductCard, ListingCard.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="border border-border bg-background p-4 shadow-md">
                <p className="text-sm font-medium m-0">Popover</p>
                <p className="text-xs text-muted-foreground m-0 mt-1">shadow-md</p>
              </div>
              <div className="border border-border bg-background p-4 shadow-xl">
                <p className="text-sm font-medium m-0">Dialog</p>
                <p className="text-xs text-muted-foreground m-0 mt-1">shadow-xl</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
