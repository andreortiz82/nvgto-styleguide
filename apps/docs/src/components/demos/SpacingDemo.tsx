"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@navigato/react";

const radiusTokens = [
  { name: "sm", calc: "×0.6", sample: "rounded-sm" },
  { name: "md", calc: "×0.8", sample: "rounded-md" },
  { name: "lg", calc: "1× base", sample: "rounded-lg" },
  { name: "xl", calc: "×1.4", sample: "rounded-xl" },
  { name: "2xl", calc: "×1.8", sample: "rounded-2xl" },
];

const shadowTokens = [
  { name: "shadow-2xs", use: "Hairline elevation" },
  { name: "shadow-xs", use: "Subtle lift" },
  { name: "shadow-sm", use: "Cards at rest, tier cards" },
  { name: "shadow-md", use: "Popovers, dropdowns" },
  { name: "shadow-lg", use: "Listing card hover" },
  { name: "shadow-xl", use: "Modals, overlays" },
  { name: "shadow-2xl", use: "Hero emphasis" },
];

export function SpacingPage() {
  return (
    <div className="not-prose mt-8 space-y-8">
      <Card>
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
          Base <code className="text-xs">--radius: 0.625rem</code> (10px)
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {radiusTokens.map((r) => (
            <div key={r.name} className="flex items-center gap-4">
              <div className={`size-16 shrink-0 border-2 border-primary bg-accent ${r.sample}`} />
              <div>
                <p className="font-mono text-sm font-semibold">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.calc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold mb-3">Shadow scale</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {shadowTokens.map((s) => (
            <div key={s.name} className="rounded-lg border border-border p-4">
              <p className="font-mono text-sm font-semibold mb-1">{s.name}</p>
              <p className="text-xs text-muted-foreground mb-3">{s.use}</p>
              <div className={`h-12 rounded-lg bg-card border border-border ${s.name}`} aria-hidden />
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Utilities: <code className="text-xs">.nvg-shadow-sm</code>,{" "}
          <code className="text-xs">.nvg-shadow-lg</code>
        </p>
      </section>
    </div>
  );
}
