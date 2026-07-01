"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Separator,
} from "@navigato/react";

const durations = [
  { name: "micro", range: "100–150ms", use: "Color, opacity, border on hover/focus" },
  { name: "short", range: "200ms", use: "Scale and shadow on cards, chips, markers" },
  { name: "medium", range: "250–400ms", use: "Sheet, dialog, popover (tw-animate-css)" },
];

const easings = [
  { name: "ease-out", use: "Enter — elements appearing" },
  { name: "ease-in", use: "Exit — elements leaving" },
  { name: "ease-in-out", use: "Hover transforms, continuous motion" },
];

export function MotionPage() {
  return (
    <div className="not-prose mt-8 space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Approach</CardTitle>
          <CardDescription>
            Intentional motion on booking surfaces. Respect{" "}
            <code className="text-xs">prefers-reduced-motion</code> — custom animations disable;
            prefer color-only transitions when reduced.
          </CardDescription>
        </CardHeader>
      </Card>

      <section>
        <h3 className="text-lg font-semibold mb-3">Duration scale</h3>
        <div className="grid gap-3 sm:grid-cols-3">
          {durations.map((d) => (
            <Card key={d.name}>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-mono">{d.name}</CardTitle>
                <CardDescription>{d.range}</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{d.use}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      <section>
        <h3 className="text-lg font-semibold mb-3">Easing</h3>
        <ul className="space-y-2 text-sm">
          {easings.map((e) => (
            <li key={e.name}>
              <code className="font-mono text-primary">{e.name}</code> — {e.use}
            </li>
          ))}
        </ul>
      </section>

      <Separator />

      <section>
        <h3 className="text-lg font-semibold mb-3">Library utilities</h3>
        <div className="flex flex-wrap items-center gap-8">
          <div className="text-center">
            <div className="size-12 rounded-lg bg-primary nvg-animate-pulse mx-auto" />
            <p className="mt-2 text-xs font-mono">.nvg-animate-pulse</p>
          </div>
          <div className="text-center">
            <div className="size-12 rounded-lg bg-primary nvg-animate-ping mx-auto" />
            <p className="mt-2 text-xs font-mono">.nvg-animate-ping</p>
          </div>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Used on map markers and loading emphasis. Overlays use{" "}
          <code className="text-xs">tw-animate-css</code> via shadcn components.
        </p>
      </section>
    </div>
  );
}
