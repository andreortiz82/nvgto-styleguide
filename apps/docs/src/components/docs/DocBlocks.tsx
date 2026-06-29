"use client";

import { useState } from "react";
import {
  Button,
  Separator,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@navigato/react";
import { Copy, Check } from "@phosphor-icons/react";
import type { PropsTableProps } from "./DocBlocks.types";

export type { PropsTableProps };

export function PropsTable({ props }: PropsTableProps) {
  return (
    <div className="rounded-lg border overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="px-4">Prop</TableHead>
            <TableHead className="px-4">Type</TableHead>
            <TableHead className="px-4">Default</TableHead>
            <TableHead className="px-4">Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.map((prop) => (
            <TableRow key={prop.name}>
              <TableCell className="px-4 font-mono text-primary">
                {prop.name}
                {prop.required ? <span className="text-destructive">*</span> : null}
              </TableCell>
              <TableCell className="px-4 font-mono text-xs text-muted-foreground">
                {prop.type}
              </TableCell>
              <TableCell className="px-4 font-mono text-xs">{prop.default ?? "—"}</TableCell>
              <TableCell className="px-4 whitespace-normal">{prop.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export function CodeExample({ code, title = "Usage" }: { code: string; title?: string }) {
  const [copied, setCopied] = useState(false);
  const trimmed = code.trim();

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-lg font-semibold m-0">{title}</h2>
        <Button
          variant="outline"
          size="sm"
          onClick={async () => {
            await navigator.clipboard.writeText(trimmed);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          }}
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
          {copied ? "Copied" : "Copy"}
        </Button>
      </div>
      <div className="relative overflow-hidden rounded-lg border bg-zinc-950">
        <pre className="overflow-x-auto p-4 text-sm text-zinc-50 m-0">
          <code>{trimmed}</code>
        </pre>
      </div>
    </div>
  );
}

export function DocDivider() {
  return <Separator className="my-8" />;
}
