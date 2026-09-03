"use client";

import { BrushNMark, DiscMark, GlobeMark } from "@navigato/react";

export function NavigatoLockup({
  size = 28,
  withWordmark = true,
  sublabel,
}: {
  size?: number;
  withWordmark?: boolean;
  sublabel?: string;
}) {
  return (
    <span className="flex items-center gap-2.5 min-w-0">
      <GlobeMark className="shrink-0 text-foreground" style={{ width: size, height: size }} title="Navigato" />
      {withWordmark ? (
        <span className="min-w-0">
          <span className="nvg-wordmark block text-[0.7rem] text-foreground">Navigato</span>
          {sublabel ? (
            <span className="nvg-uppercase text-muted-foreground block mt-0.5">{sublabel}</span>
          ) : null}
        </span>
      ) : null}
    </span>
  );
}

export function NoxValeLockup({
  size = 22,
  mark = "disc",
  withWordmark = true,
  sublabel,
}: {
  size?: number;
  mark?: "disc" | "brush";
  withWordmark?: boolean;
  sublabel?: string;
}) {
  const Mark = mark === "brush" ? BrushNMark : DiscMark;
  return (
    <span className="flex items-center gap-2.5 min-w-0">
      <Mark className="shrink-0" style={{ width: size, height: size }} title="Nox & Vale" />
      {withWordmark ? (
        <span className="min-w-0">
          <span className="nvg-wordmark block text-[0.65rem] text-foreground">Nox & Vale</span>
          {sublabel ? (
            <span className="nvg-uppercase text-muted-foreground block mt-0.5">{sublabel}</span>
          ) : null}
        </span>
      ) : null}
    </span>
  );
}

/** Docs chrome: kit title is Leo; mark + subline follow `data-brand`. */
export function DocsBrandLockup({ compact = false }: { compact?: boolean }) {
  const globeSize = compact ? 22 : 32;
  const discSize = compact ? 16 : 20;
  return (
    <span className="flex items-center gap-2.5 min-w-0">
      <span
        className="docs-mark docs-mark--globe shrink-0 text-foreground"
        style={{ width: globeSize, height: globeSize }}
      >
        <GlobeMark className="size-full" title="Navigato" />
      </span>
      <span className="docs-mark docs-mark--disc shrink-0" style={{ width: discSize, height: discSize }}>
        <DiscMark className="size-full" title="Nox & Vale" />
      </span>
      <span className="min-w-0">
        <span className="nvg-wordmark block text-[0.65rem] text-foreground">Leo Design System</span>
        {compact ? null : (
          <>
            <span className="docs-brand-sub docs-brand-sub--navigato nvg-uppercase text-muted-foreground mt-0.5">
              Navigato
            </span>
            <span className="docs-brand-sub docs-brand-sub--nox nvg-uppercase text-muted-foreground mt-0.5">
              Nox & Vale
            </span>
          </>
        )}
      </span>
    </span>
  );
}
