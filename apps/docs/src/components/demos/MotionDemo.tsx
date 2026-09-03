"use client";

import { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Separator,
} from "@navigato/react";

const durations = [
  { name: "micro", range: "100–150ms", cls: "nvg-duration-micro", use: "Color, opacity, border on hover/focus" },
  { name: "short", range: "200ms", cls: "nvg-duration-short", use: "Fade, scale, hairline ring" },
  { name: "medium", range: "250–400ms", cls: "nvg-duration-medium", use: "Sheet, dialog, slide" },
];

const easings = [
  { name: "ease-out", use: "Enter — elements appearing" },
  { name: "ease-in", use: "Exit — elements leaving" },
  { name: "ease-in-out", use: "Hover transforms, continuous motion" },
];

const utilities = [
  { name: ".nvg-animate-bounce", cls: "nvg-animate-bounce", note: "Bounce" },
  { name: ".nvg-animate-fade-in", cls: "nvg-animate-fade-in", note: "Fade In" },
  { name: ".nvg-animate-fade-out", cls: "nvg-animate-fade-out", note: "Fade Out" },
  { name: ".nvg-animate-spin", cls: "nvg-animate-spin", note: "Spin" },
  { name: ".nvg-animate-ping", cls: "nvg-animate-ping", note: "Ping" },
  { name: ".nvg-animate-pulse", cls: "nvg-animate-pulse", note: "Pulse" },
  { name: ".nvg-animate-slide", cls: "nvg-animate-slide", note: "Slide" },
  { name: ".nvg-animate-scale", cls: "nvg-animate-scale", note: "Scale" },
];

export function MotionPage() {
  const [key, setKey] = useState(0);

  return (
    <div className="not-prose mt-8 space-y-8">
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">Approach</CardTitle>
          <CardDescription>
            CSS-first. No GSAP. Intentional motion on booking and shopping surfaces.{" "}
            <code className="text-xs">prefers-reduced-motion</code> falls back to opacity-only
            (fade / reduced pulse) — not a hard kill of every transition.
          </CardDescription>
        </CardHeader>
      </Card>

      <section>
        <h3 className="text-lg font-semibold mb-3">Duration scale</h3>
        <div className="grid gap-3 sm:grid-cols-3">
          {durations.map((d) => (
            <Card key={d.name} className="shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-mono">{d.name}</CardTitle>
                <CardDescription>
                  {d.range} · <code className="text-xs">{d.cls}</code>
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{d.use}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      <section>
        <h3 className="text-lg font-semibold mb-3">Easing</h3>
        <ul className="space-y-2 text-sm m-0">
          {easings.map((e) => (
            <li key={e.name}>
              <code className="font-mono text-primary">{e.name}</code> — {e.use}
            </li>
          ))}
        </ul>
      </section>

      <Separator />

      <section>
        <div className="mb-3 flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold m-0">Live examples</h3>
          <Button type="button" size="sm" variant="outline" onClick={() => setKey((k) => k + 1)}>
            Replay
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          Replay remounts one-shot enter animations (fade, slide, scale). Infinite loops keep running.
          Reduce motion in OS settings to see the opacity-only fallback.
        </p>
        <div key={key} className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {utilities.map((u) => (
            <div key={u.name} className="border border-border bg-card p-4 text-center shadow-sm">
              <div className={`size-12 bg-primary mx-auto ${u.cls}`} />
              <p className="mt-3 mb-0 text-xs font-medium">{u.note}</p>
              <p className="mt-1 mb-0 text-[0.65rem] font-mono text-muted-foreground">{u.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
