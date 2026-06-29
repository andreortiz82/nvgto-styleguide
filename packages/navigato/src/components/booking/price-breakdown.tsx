import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

export interface PriceLineItem {
  label: string;
  amount: number;
}

export interface PriceBreakdownProps {
  lineItems: PriceLineItem[];
  taxes?: number;
  currency?: string;
  className?: string;
}

export function PriceBreakdown({
  lineItems,
  taxes = 0,
  currency = "$",
  className,
}: PriceBreakdownProps) {
  const subtotal = lineItems.reduce((sum, item) => sum + item.amount, 0);
  const total = subtotal + taxes;

  return (
    <div className={cn("space-y-2 text-sm", className)}>
      {lineItems.map((item) => (
        <div key={item.label} className="flex justify-between gap-4">
          <span className="text-muted-foreground underline decoration-dotted underline-offset-2">
            {item.label}
          </span>
          <span className="tabular-nums">
            {currency}
            {item.amount}
          </span>
        </div>
      ))}
      {taxes ? (
        <div className="flex justify-between gap-4">
          <span className="text-muted-foreground">Taxes</span>
          <span className="tabular-nums">
            {currency}
            {taxes}
          </span>
        </div>
      ) : null}
      <Separator />
      <div className="flex justify-between gap-4 font-semibold">
        <span>Total</span>
        <span className="tabular-nums">
          {currency}
          {total}
        </span>
      </div>
    </div>
  );
}
