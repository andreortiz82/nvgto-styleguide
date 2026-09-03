import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export type ProductBadgeTone = "default" | "new" | "sale" | "sold-out";

export interface ProductBadgeProps {
  children: React.ReactNode;
  tone?: ProductBadgeTone;
  className?: string;
}

const TONE_VARIANT: Record<ProductBadgeTone, "default" | "secondary" | "outline"> = {
  default: "default",
  new: "secondary",
  sale: "outline",
  "sold-out": "secondary",
};

export function ProductBadge({ children, tone = "default", className }: ProductBadgeProps) {
  return (
    <Badge variant={TONE_VARIANT[tone]} className={cn(className)}>
      {children}
    </Badge>
  );
}
