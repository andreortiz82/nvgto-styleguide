import { ArrowSquareOut } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

export interface RateComparisonItem {
  provider: string;
  price: number;
  currency?: string;
  description?: string;
  href?: string;
}

export interface RateComparisonProps {
  items: RateComparisonItem[];
  className?: string;
}

function RateRowBody({ item }: { item: RateComparisonItem }) {
  return (
    <>
      <div>
        <p className="font-semibold">
          {item.currency ?? "$"}
          {item.price}
          <span className="text-sm font-normal text-muted-foreground"> / night</span>
        </p>
        <p className="text-sm text-muted-foreground">{item.provider}</p>
        {item.description ? (
          <p className="text-xs italic text-muted-foreground">{item.description}</p>
        ) : null}
      </div>
      {item.href ? (
        <span className="flex items-center gap-1 text-sm opacity-0 transition-opacity group-hover:opacity-100">
          View
          <ArrowSquareOut size={14} className="text-primary" />
        </span>
      ) : null}
    </>
  );
}

export function RateComparison({ items, className }: RateComparisonProps) {
  return (
    <div className={cn("divide-y rounded-lg border", className)}>
      {items.map((item) => {
        const rowClass = cn(
          "flex items-center justify-between gap-4 px-4 py-3",
          item.href && "group transition-colors hover:bg-muted/50",
        );

        if (item.href) {
          return (
            <a key={item.provider} href={item.href} className={rowClass}>
              <RateRowBody item={item} />
            </a>
          );
        }

        return (
          <div key={item.provider} className={rowClass}>
            <RateRowBody item={item} />
          </div>
        );
      })}
    </div>
  );
}
