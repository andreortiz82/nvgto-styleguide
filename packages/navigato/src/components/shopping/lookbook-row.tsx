import { cn } from "@/lib/utils";
import { ProductCard, type ProductCardProps } from "./product-card";

export interface LookbookRowProps {
  products: ProductCardProps[];
  className?: string;
}

export function LookbookRow({ products, className }: LookbookRowProps) {
  if (!products.length) {
    return (
      <p className={cn("text-sm text-muted-foreground m-0", className)}>
        No pieces in this look.
      </p>
    );
  }

  return (
    <div className={cn("flex gap-4 overflow-x-auto pb-2", className)}>
      {products.map((product) => (
        <ProductCard key={product.title} {...product} className="w-56 shrink-0" />
      ))}
    </div>
  );
}
