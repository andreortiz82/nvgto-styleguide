"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@navigato/react";

const OCCUPANCY = [
  { label: "Jan", value: 62 },
  { label: "Feb", value: 58 },
  { label: "Mar", value: 71 },
  { label: "Apr", value: 76 },
  { label: "May", value: 81 },
  { label: "Jun", value: 88 },
  { label: "Jul", value: 94 },
  { label: "Aug", value: 91 },
  { label: "Sep", value: 79 },
  { label: "Oct", value: 73 },
  { label: "Nov", value: 64 },
  { label: "Dec", value: 82 },
];

const SALES = [
  { label: "Jan", value: 42 },
  { label: "Feb", value: 48 },
  { label: "Mar", value: 55 },
  { label: "Apr", value: 51 },
  { label: "May", value: 63 },
  { label: "Jun", value: 71 },
  { label: "Jul", value: 68 },
  { label: "Aug", value: 74 },
  { label: "Sep", value: 80 },
  { label: "Oct", value: 86 },
  { label: "Nov", value: 92 },
  { label: "Dec", value: 98 },
];

const CATEGORIES = [
  { label: "Menswear", value: 38, token: "var(--chart-1)" },
  { label: "Womenswear", value: 44, token: "var(--chart-2)" },
  { label: "Accessories", value: 27, token: "var(--chart-3)" },
  { label: "Objects", value: 18, token: "var(--chart-5)" },
];

function BarChart({
  data,
  unit,
  caption,
}: {
  data: { label: string; value: number }[];
  unit: string;
  caption: string;
}) {
  const max = Math.max(...data.map((d) => d.value));
  return (
    <figure className="m-0">
      <div className="flex items-end gap-1.5 h-48 border-b border-border pb-0">
        {data.map((d) => (
          <div key={d.label} className="flex min-w-0 flex-1 flex-col items-center justify-end gap-1 h-full">
            <span className="text-[0.65rem] tabular-nums text-muted-foreground">{d.value}</span>
            <div
              className="w-full bg-chart-1"
              style={{ height: `${(d.value / max) * 100}%` }}
              title={`${d.label}: ${d.value}${unit}`}
            />
          </div>
        ))}
      </div>
      <div className="mt-1 flex gap-1.5">
        {data.map((d) => (
          <span key={d.label} className="min-w-0 flex-1 text-center text-[0.65rem] text-muted-foreground">
            {d.label}
          </span>
        ))}
      </div>
      <figcaption className="mt-3 text-xs text-muted-foreground">{caption}</figcaption>
    </figure>
  );
}

function LineChart({
  data,
  unit,
  caption,
}: {
  data: { label: string; value: number }[];
  unit: string;
  caption: string;
}) {
  const w = 600;
  const h = 200;
  const pad = { t: 16, r: 12, b: 28, l: 36 };
  const max = 100;
  const innerW = w - pad.l - pad.r;
  const innerH = h - pad.t - pad.b;
  const pts = data.map((d, i) => {
    const x = pad.l + (i / (data.length - 1)) * innerW;
    const y = pad.t + (1 - d.value / max) * innerH;
    return { ...d, x, y };
  });
  const d = pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");

  return (
    <figure className="m-0">
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto" role="img" aria-label={caption}>
        {[0, 25, 50, 75, 100].map((tick) => {
          const y = pad.t + (1 - tick / max) * innerH;
          return (
            <g key={tick}>
              <line x1={pad.l} x2={w - pad.r} y1={y} y2={y} stroke="var(--border)" strokeWidth="1" />
              <text x={pad.l - 8} y={y + 3} textAnchor="end" fill="var(--muted-foreground)" fontSize="10">
                {tick}
                {unit}
              </text>
            </g>
          );
        })}
        <path d={d} fill="none" stroke="var(--chart-1)" strokeWidth="2" />
        {pts.map((p) => (
          <circle key={p.label} cx={p.x} cy={p.y} r="3" fill="var(--chart-1)" />
        ))}
        {pts.map((p, i) =>
          i % 2 === 0 ? (
            <text
              key={p.label}
              x={p.x}
              y={h - 8}
              textAnchor="middle"
              fill="var(--muted-foreground)"
              fontSize="10"
            >
              {p.label}
            </text>
          ) : null,
        )}
      </svg>
      <figcaption className="mt-2 text-xs text-muted-foreground">{caption}</figcaption>
    </figure>
  );
}

export function ChartsPage() {
  return (
    <div className="not-prose mt-8 space-y-8">
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">Chart tokens</CardTitle>
          <CardDescription>
            Series use <code className="text-xs">--chart-1</code> through{" "}
            <code className="text-xs">--chart-5</code>. Navigato is champagne-led; Nox &amp; Vale is
            cobalt-led. Switch brand and mode in the sidebar — dark must remain readable. Example
            data, not live inventory.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {["--chart-1", "--chart-2", "--chart-3", "--chart-4", "--chart-5"].map((token) => (
              <span key={token} className="flex items-center gap-2 text-xs font-mono">
                <span className="size-4 border border-border" style={{ background: `var(${token})` }} />
                {token}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">Occupancy — bar</CardTitle>
          <CardDescription>
            Example private-stay occupancy by month. Navigato villa mix, not a live property feed.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <BarChart data={OCCUPANCY} unit="%" caption="Example data: occupancy % by month." />
        </CardContent>
      </Card>

      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">Sales — line</CardTitle>
          <CardDescription>
            Example Nox &amp; Vale lookbook sales index (100 = December peak). Not a POS export.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LineChart data={SALES} unit="" caption="Example data: sales index by month." />
        </CardContent>
      </Card>

      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">Category mix — bar</CardTitle>
          <CardDescription>Example units sold by category this season.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {CATEGORIES.map((row) => (
              <div key={row.label} className="grid grid-cols-[7rem_1fr_3rem] items-center gap-3">
                <span className="text-sm">{row.label}</span>
                <div className="h-4 bg-muted">
                  <div className="h-4" style={{ width: `${row.value * 2}%`, background: row.token }} />
                </div>
                <span className="text-right text-sm tabular-nums">{row.value}</span>
              </div>
            ))}
          </div>
          <p className="mt-3 mb-0 text-xs text-muted-foreground">Example data: units, not revenue.</p>
        </CardContent>
      </Card>
    </div>
  );
}
