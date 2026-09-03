import { cn } from "@/lib/utils";
import { ProductCard, type ProductCardProps } from "./product-card";
import { ProductCardSkeleton } from "./product-card-skeleton";

export interface ProductGridProps {
  products: ProductCardProps[];
  loading?: boolean;
  emptyTitle?: string;
  emptyDescription?: string;
  className?: string;
}

export function ProductGrid({
  products,
  loading = false,
  emptyTitle = "No pieces here",
  emptyDescription = "This look is empty. Try another row, or wait for the drop.",
  className,
}: ProductGridProps) {
  if (loading) {
    return (
      <div className={cn("grid grid-cols-2 gap-4 md:grid-cols-3", className)} aria-busy="true">
        {Array.from({ length: 6 }, (_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (!products.length) {
    return (
      <div className={cn("border border-dashed border-border px-6 py-16 text-center", className)}>
        <h3 className="text-lg font-semibold m-0">{emptyTitle}</h3>
        <p className="mt-1 mb-0 text-sm text-muted-foreground">{emptyDescription}</p>
      </div>
    );
  }

  return (
    <div className={cn("grid grid-cols-2 gap-4 md:grid-cols-3", className)}>
      {products.map((product) => (
        <ProductCard key={product.title} {...product} />
      ))}
    </div>
  );
}
