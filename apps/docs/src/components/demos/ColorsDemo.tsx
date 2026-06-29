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

const sections: TokenSection[] = [
  {
    title: "Semantic",
    description: "Core UI tokens mapped to Tailwind utilities.",
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

function Swatch({ token }: { token: TokenSwatch }) {
  const [value, setValue] = useState("");
  const [fgValue, setFgValue] = useState<string | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    setValue(getComputedStyle(root).getPropertyValue(token.cssVar).trim());
    if (token.foreground) {
      setFgValue(getComputedStyle(root).getPropertyValue(token.foreground).trim());
    }
  }, [token.cssVar, token.foreground]);

  return (
    <Card className="overflow-hidden">
      <div
        className="h-20 border-b flex items-end p-3"
        style={{
          backgroundColor: `var(${token.cssVar})`,
          color: token.foreground ? `var(${token.foreground})` : undefined,
        }}
      >
        {token.foreground ? (
          <span className="text-xs font-medium opacity-90">Aa</span>
        ) : null}
      </div>
      <CardContent className="p-3 space-y-1">
        <p className="font-semibold text-sm m-0">{token.name}</p>
        <p className="text-xs font-mono text-muted-foreground m-0">{token.cssVar}</p>
        {value ? (
          <p className="text-xs font-mono text-muted-foreground m-0 truncate" title={value}>
            {value}
          </p>
        ) : null}
        {fgValue ? (
          <p className="text-xs font-mono text-muted-foreground m-0 truncate" title={fgValue}>
            fg: {fgValue}
          </p>
        ) : null}
        {token.utility ? (
          <p className="text-xs text-muted-foreground m-0">{token.utility}</p>
        ) : null}
        {token.desc ? <p className="text-xs text-muted-foreground m-0">{token.desc}</p> : null}
      </CardContent>
    </Card>
  );
}

function RadiusDemo() {
  const [radius, setRadius] = useState("0.875rem");

  useEffect(() => {
    setRadius(getComputedStyle(document.documentElement).getPropertyValue("--radius").trim() || "0.875rem");
  }, []);

  const scales = [
    { label: "sm", value: "calc(var(--radius) * 0.6)" },
    { label: "md", value: "calc(var(--radius) * 0.8)" },
    { label: "default", value: "var(--radius)" },
    { label: "lg", value: "var(--radius-lg)" },
    { label: "xl", value: "var(--radius-xl)" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Radius</CardTitle>
        <CardDescription>
          Base radius <code className="text-xs">{radius}</code> — scales derive from{" "}
          <code className="text-xs">--radius</code>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-4">
        {scales.map(({ label, value }) => (
          <div key={label} className="flex flex-col items-center gap-2">
            <div
              className="size-16 bg-primary/15 border border-primary/30"
              style={{ borderRadius: value }}
            />
            <span className="text-xs text-muted-foreground">{label}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export function ThemeColorsPage() {
  return (
    <div className="space-y-10 mt-8">
      <Card className="border-dashed">
        <CardHeader>
          <CardTitle className="text-base">Default shadcn theme</CardTitle>
          <CardDescription>
            Neutral zinc palette with light mode default. Add <code className="text-xs">.dark</code> on{" "}
            <code className="text-xs">html</code> to enable dark tokens.
          </CardDescription>
        </CardHeader>
      </Card>

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

      <RadiusDemo />
    </div>
  );
}
