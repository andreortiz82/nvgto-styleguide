import type { SVGProps } from "react";
import { cn } from "@/lib/utils";

type MarkProps = SVGProps<SVGSVGElement> & { title?: string };

/**
 * Navigato globe — hairline circle, equator, meridian, two longitudes, eight-point compass star.
 * Stroke follows `currentColor`.
 */
export function GlobeMark({ title, className, ...props }: MarkProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={cn("size-full", className)}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <g
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="square"
        strokeLinejoin="miter"
      >
        <circle cx="32" cy="32" r="29.25" />
        <line x1="2.75" y1="32" x2="61.25" y2="32" />
        <line x1="32" y1="2.75" x2="32" y2="61.25" />
        <ellipse cx="32" cy="32" rx="14" ry="29.25" />
        <polygon points="32,18.5 35.89,28.11 45.5,32 35.89,35.89 32,45.5 28.11,35.89 18.5,32 28.11,28.11" />
      </g>
    </svg>
  );
}

/** Nox & Vale quiet/header mark — filled cobalt disc. */
export function DiscMark({ title, className, ...props }: MarkProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("size-full", className)}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <circle cx="32" cy="32" r="32" fill="#1E4FD6" />
    </svg>
  );
}

/**
 * Nox & Vale hero/signature — original brush N in an open enso.
 * Cobalt only. Not derived from a stock file.
 */
export function BrushNMark({ title, className, ...props }: MarkProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      className={cn("size-full", className)}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path
        fill="#1E4FD6"
        d="M84 18c9.2 3.4 20.4 12 25.6 24.2 6.8 16 4.8 35.2-8.2 47.8-12.6 12.4-32.4 16.4-48.6 10.6C36.4 95.2 22 80.4 19.6 62.2 17 42.4 28.8 24.2 47.2 18.8c5.6-1.6 10.2 1.2 10.8 5.6.6 4.2-3 7-7.2 8.2C36.4 37.2 28.8 50 30.6 64.2c1.8 15.4 14.8 28.4 30.2 31.2 15.2 2.8 31.6-4.4 38.4-18.2 6.6-13.4 4.2-29.8-6.4-40.2-2.8-2.8-3.2-7.4-.4-10.2 2.8-2.8 7.6-2.4 11.6-.8z"
      />
      <path fill="#1E4FD6" d="M41 32c-3.4.8-5.6 4.2-5.2 8.2.6 14.8 1.8 30.2 3.4 44.8.4 3.8 4.2 6.2 7.8 5.4 3.4-.8 5.4-4.2 5-7.8L48.6 40c-.4-4.2-4-8.6-7.6-8z" />
      <path fill="#1E4FD6" d="M47.2 36.4c-3.2 1.8-3.6 6.4-1.2 9.4l24.8 32.6c2.2 2.8 6.6 3.2 9.4.8 2.8-2.2 3.4-6.4 1.2-9.4L56.8 37.4c-2.4-3-6.4-3.2-9.6-1z" />
      <path fill="#1E4FD6" d="M79.4 31.2c-3.6.6-6 4-5.6 8.2l4.2 46.6c.4 4 4.4 6.4 8.2 5.6 3.6-.8 5.8-4.4 5.4-8.2l-4.4-46c-.4-4.2-4.2-7-7.8-6.2z" />
    </svg>
  );
}
