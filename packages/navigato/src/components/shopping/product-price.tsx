import { cn } from "@/lib/utils";

export interface ProductPriceProps {
  amount: number;
  currency?: string;
  compareAt?: number;
  className?: string;
}

function money(currency: string, amount: number) {
  return `${currency}${amount.toLocaleString("en-US")}`;
}

export function ProductPrice({
  amount,
  currency = "$",
  compareAt,
  className,
}: ProductPriceProps) {
  const onSale = typeof compareAt === "number" && compareAt > amount;

  return (
    <p className={cn("m-0 tabular-nums tracking-wide", className)}>
      <span className="font-medium">{money(currency, amount)}</span>
      {onSale ? (
        <span className="ml-2 text-sm text-muted-foreground line-through">
          {money(currency, compareAt)}
        </span>
      ) : null}
    </p>
  );
}
