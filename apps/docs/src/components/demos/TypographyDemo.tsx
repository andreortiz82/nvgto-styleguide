"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Separator,
} from "@navigato/react";

interface TypeSpec {
  label: string;
  value: string;
}

interface TypeSample {
  name: string;
  role: string;
  specs: TypeSpec[];
  className?: string;
  sample: string;
  as?: "p" | "span" | "h1" | "h2" | "h3" | "h4";
}

function SpecGrid({ specs }: { specs: TypeSpec[] }) {
  return (
    <dl className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-2 m-0 text-xs">
      {specs.map(({ label, value }) => (
        <div key={label}>
          <dt className="text-muted-foreground font-medium m-0">{label}</dt>
          <dd className="font-mono text-foreground m-0 mt-0.5">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

function TypeSampleRow({ name, role, specs, className, sample, as: Tag = "p" }: TypeSample) {
  return (
    <div className="py-5 first:pt-0 last:pb-0 border-b border-border last:border-0">
      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
        <div>
          <p className="text-sm font-semibold m-0">{name}</p>
          <p className="text-xs text-muted-foreground m-0 mt-0.5">{role}</p>
        </div>
      </div>
      <Tag className={className}>{sample}</Tag>
      <div className="mt-4">
        <SpecGrid specs={specs} />
      </div>
    </div>
  );
}

const typeScale: TypeSample[] = [
  {
    name: "Display",
    role: "Marketing heroes, empty states, large numerals",
    sample: "Find your next stay",
    as: "h1",
    className:
      "nvg-font-heading text-5xl font-bold leading-[1.08] tracking-[-0.035em] m-0 text-foreground",
    specs: [
      { label: "Size", value: "3rem / 48px" },
      { label: "Line height", value: "1.08" },
      { label: "Weight", value: "700" },
      { label: "Tracking", value: "-0.035em" },
      { label: "Class", value: "text-5xl font-bold" },
    ],
  },
  {
    name: "Heading 1",
    role: "Page titles in docs and primary screens",
    sample: "Navigato Design System",
    as: "h1",
    className:
      "nvg-font-heading text-4xl font-bold leading-[1.15] tracking-[-0.03em] m-0 text-foreground",
    specs: [
      { label: "Size", value: "2.25rem / 36px" },
      { label: "Line height", value: "1.15" },
      { label: "Weight", value: "700" },
      { label: "Tracking", value: "-0.03em" },
      { label: "Context", value: ".docs-prose > h1" },
    ],
  },
  {
    name: "Heading 2",
    role: "Major section headings",
    sample: "Explore components",
    as: "h2",
    className:
      "nvg-font-heading text-2xl font-bold leading-[1.25] tracking-[-0.025em] m-0 text-foreground",
    specs: [
      { label: "Size", value: "1.5rem / 24px" },
      { label: "Line height", value: "1.25" },
      { label: "Weight", value: "700" },
      { label: "Tracking", value: "-0.025em" },
      { label: "Context", value: ".docs-prose > h2" },
    ],
  },
  {
    name: "Heading 3",
    role: "Subsections, dialog titles, card groups",
    sample: "Booking widget",
    as: "h3",
    className:
      "nvg-font-heading text-lg font-semibold leading-[1.35] tracking-[-0.015em] m-0 text-foreground",
    specs: [
      { label: "Size", value: "1.125rem / 18px" },
      { label: "Line height", value: "1.35" },
      { label: "Weight", value: "600" },
      { label: "Tracking", value: "-0.015em" },
      { label: "Context", value: ".docs-prose > h3" },
    ],
  },
  {
    name: "Heading 4",
    role: "Card titles, compact headers, table sections",
    sample: "Amenities & highlights",
    as: "h4",
    className:
      "nvg-font-heading text-base font-semibold leading-[1.4] tracking-[-0.01em] m-0 text-foreground",
    specs: [
      { label: "Size", value: "1rem / 16px" },
      { label: "Line height", value: "1.4" },
      { label: "Weight", value: "600" },
      { label: "Tracking", value: "-0.01em" },
      { label: "Context", value: ".docs-prose > h4" },
    ],
  },
  {
    name: "Lead",
    role: "Intro paragraphs, overview copy",
    sample:
      "A React component library for travel booking — search, map, and checkout flows with consistent patterns.",
    className: "nvg-lead m-0 max-w-2xl",
    specs: [
      { label: "Size", value: "1.125rem / 18px" },
      { label: "Line height", value: "1.7" },
      { label: "Weight", value: "400" },
      { label: "Color", value: "muted-foreground" },
      { label: "Class", value: ".nvg-lead" },
    ],
  },
  {
    name: "Body",
    role: "Default paragraphs, lists, descriptions",
    sample:
      "Compare rates across OTAs, filter by amenities, and book with a sticky price breakdown that stays visible while you review photos and reviews.",
    className: "text-[0.9375rem] leading-[1.65] m-0 max-w-2xl text-foreground",
    specs: [
      { label: "Size", value: "0.9375rem / 15px" },
      { label: "Line height", value: "1.65" },
      { label: "Weight", value: "400" },
      { label: "Tracking", value: "0" },
      { label: "Context", value: ".docs-prose > p" },
    ],
  },
  {
    name: "Body small",
    role: "Secondary descriptions, helper text",
    sample: "Free cancellation until 48 hours before check-in. Taxes and fees calculated at checkout.",
    className: "text-sm leading-normal m-0 max-w-2xl text-muted-foreground",
    specs: [
      { label: "Size", value: "0.875rem / 14px" },
      { label: "Line height", value: "1.5" },
      { label: "Weight", value: "400" },
      { label: "Color", value: "muted-foreground" },
      { label: "Class", value: "text-sm" },
    ],
  },
  {
    name: "Caption",
    role: "Timestamps, meta rows, fine print",
    sample: "Updated 2 hours ago · 12 properties in Lisbon",
    className: "text-[0.8125rem] leading-snug m-0 text-muted-foreground",
    specs: [
      { label: "Size", value: "0.8125rem / 13px" },
      { label: "Line height", value: "1.45" },
      { label: "Weight", value: "400" },
      { label: "Color", value: "muted-foreground" },
      { label: "Class", value: "text-[13px]" },
    ],
  },
  {
    name: "Label",
    role: "Overlines, nav groups, filter chips, table headers",
    sample: "Components · Atomic Design",
    className: "nvg-uppercase text-muted-foreground m-0",
    specs: [
      { label: "Size", value: "0.6875rem / 11px" },
      { label: "Line height", value: "1.2" },
      { label: "Weight", value: "600" },
      { label: "Tracking", value: "0.06em" },
      { label: "Class", value: ".nvg-uppercase" },
    ],
  },
  {
    name: "Monospace",
    role: "Code snippets, token names, prop values",
    sample: "oklch(0.705 0.213 47.604)",
    className: "font-mono text-sm m-0 text-foreground",
    specs: [
      { label: "Size", value: "0.875rem / 14px" },
      { label: "Family", value: "ui-monospace" },
      { label: "Weight", value: "400" },
      { label: "Context", value: "code, pre" },
      { label: "Class", value: "font-mono text-sm" },
    ],
  },
];

const weights = [
  { weight: 300, label: "Light" },
  { weight: 400, label: "Regular" },
  { weight: 500, label: "Medium" },
  { weight: 600, label: "Semibold" },
  { weight: 700, label: "Bold" },
  { weight: 800, label: "Extrabold" },
] as const;

function WeightSample({ weight, label }: { weight: number; label: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 py-3 border-b border-border last:border-0">
      <div className="shrink-0 w-28">
        <p className="text-sm font-semibold m-0">{label}</p>
        <p className="text-xs font-mono text-muted-foreground m-0">{weight}</p>
      </div>
      <p
        className="nvg-font-heading text-2xl tracking-tight m-0 flex-1"
        style={{ fontWeight: weight }}
      >
        Lisbon riverfront loft
      </p>
    </div>
  );
}

function TravelUiExample() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <Card className="overflow-hidden">
        <CardHeader className="pb-3">
          <p className="nvg-uppercase text-muted-foreground m-0 mb-2">Search header</p>
          <div className="flex items-center gap-2">
            <span className="inline-flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shrink-0">
              <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
              </svg>
            </span>
            <span className="nvg-font-heading text-lg font-bold tracking-tight">Navigato</span>
          </div>
        </CardHeader>
        <CardContent className="space-y-1 pt-0">
          <p className="text-base font-semibold m-0">Lisbon, Portugal</p>
          <p className="text-sm text-muted-foreground m-0">Jun 12 – 18 · 2 guests</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <p className="nvg-uppercase text-muted-foreground m-0 mb-2">Listing card</p>
          <CardTitle className="text-base font-semibold leading-snug">
            Alfama studio with terrace views
          </CardTitle>
          <CardDescription className="text-sm">Entire apartment · Alfama</CardDescription>
        </CardHeader>
        <CardContent className="pt-0 flex items-baseline gap-1">
          <span className="text-xl font-bold tabular-nums">$142</span>
          <span className="text-sm text-muted-foreground">/ night</span>
          <span className="ml-auto text-sm font-semibold tabular-nums text-foreground">4.92 ★</span>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <p className="nvg-uppercase text-muted-foreground m-0 mb-2">Price breakdown</p>
        </CardHeader>
        <CardContent className="pt-0 space-y-2 text-sm">
          <div className="flex justify-between gap-4">
            <span className="text-muted-foreground">$142 × 6 nights</span>
            <span className="tabular-nums">$852</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-muted-foreground">Cleaning fee</span>
            <span className="tabular-nums">$45</span>
          </div>
          <Separator />
          <div className="flex justify-between gap-4 font-semibold text-base">
            <span>Total</span>
            <span className="tabular-nums">$897</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <p className="nvg-uppercase text-muted-foreground m-0 mb-2">Review quote</p>
        </CardHeader>
        <CardContent className="pt-0">
          <blockquote className="nvg-font-quote text-lg text-muted-foreground border-l-4 border-primary pl-4 m-0">
            “Walkable to everything — the typography and layout made scanning listings effortless.”
          </blockquote>
          <p className="text-sm font-medium mt-3 mb-0">Marta R.</p>
          <p className="text-[0.8125rem] text-muted-foreground mt-0.5 mb-0">
            Stayed March 2026
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export function TypographyPage() {
  return (
    <div className="space-y-10 mt-8 not-prose">
      <Card className="border-dashed">
        <CardHeader>
          <CardTitle className="text-base">SN Pro</CardTitle>
          <CardDescription>
            Single family for headings, body, and UI. Loaded from Google Fonts with weights 300–800.
            Headings use negative letter-spacing; labels use uppercase with wide tracking.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-6xl nvg-font-heading font-bold tracking-tight m-0 text-foreground/90">
            Aa Bb Cc
          </p>
          <p className="text-sm text-muted-foreground mt-3 mb-0 font-mono">
            ABCDEFGHIJKLMNOPQRSTUVWXYZ · abcdefghijklmnopqrstuvwxyz · 0123456789
          </p>
        </CardContent>
      </Card>

      <section className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold m-0">Type scale</h2>
          <p className="text-sm text-muted-foreground mt-1 mb-0">
            From display down to labels — each row shows live sample text and specs.
          </p>
        </div>
        <Card>
          <CardContent className="p-6">
            {typeScale.map((sample) => (
              <TypeSampleRow key={sample.name} {...sample} />
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold m-0">Font weights</h2>
          <p className="text-sm text-muted-foreground mt-1 mb-0">
            SN Pro at 24px — use 700 for headings, 600 for emphasis, 400 for body.
          </p>
        </div>
        <Card>
          <CardContent className="p-6">
            {weights.map(({ weight, label }) => (
              <WeightSample key={weight} weight={weight} label={label} />
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold m-0">Travel UI in context</h2>
          <p className="text-sm text-muted-foreground mt-1 mb-0">
            Real component patterns showing how type sizes compose in booking flows.
          </p>
        </div>
        <TravelUiExample />
      </section>

      <section className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold m-0">Links &amp; inline styles</h2>
          <p className="text-sm text-muted-foreground mt-1 mb-0">
            Body copy with{" "}
            <a href="#" className="text-primary underline underline-offset-[3px] font-medium">
              primary links
            </a>
            ,{" "}
            <strong className="font-semibold text-foreground">semibold emphasis</strong>, and{" "}
            <code className="font-mono text-sm bg-muted px-1.5 py-0.5 rounded border border-border">
              inline code
            </code>
            .
          </p>
        </div>
        <Card>
          <CardContent className="p-6 space-y-4">
            <ul className="text-[0.9375rem] leading-[1.65] m-0 pl-5 space-y-2 text-foreground">
              <li>Date range pickers with compact 14px field labels</li>
              <li>
                Listing titles at{" "}
                <span className="font-semibold">16px semibold</span> with 14px metadata below
              </li>
              <li>
                Prices at{" "}
                <span className="text-xl font-bold tabular-nums">20px bold tabular-nums</span>
              </li>
            </ul>
            <blockquote className="nvg-font-quote text-lg text-muted-foreground border-l-4 border-primary pl-4 m-0">
              Block quotes use italic SN Pro with a brand accent border — ideal for guest reviews.
            </blockquote>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
