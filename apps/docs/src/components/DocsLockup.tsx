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

export function DocsBrandLockup({ compact = false }: { compact?: boolean }) {
  const size = compact ? 22 : 32;
  return (
    <>
      <span className="docs-lockup docs-lockup--navigato">
        <NavigatoLockup size={size} sublabel={compact ? undefined : "Design system"} />
      </span>
      <span className="docs-lockup docs-lockup--nox">
        <NoxValeLockup size={compact ? 18 : 22} mark="disc" sublabel={compact ? undefined : "Design system"} />
      </span>
    </>
  );
}
