import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export interface ListingCardSkeletonProps {
  className?: string;
}

export function ListingCardSkeleton({ className }: ListingCardSkeletonProps) {
  return (
    <Card className={cn("overflow-hidden p-0", className)}>
      <Skeleton className="aspect-[4/3] w-full rounded-none" />
      <div className="space-y-2 p-4">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-1/2" />
        <Skeleton className="h-4 w-1/3" />
      </div>
    </Card>
  );
}
