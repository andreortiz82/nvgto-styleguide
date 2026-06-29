import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StarRating } from "./star-rating";

export interface ReviewDistribution {
  stars: number;
  count: number;
}

export interface Review {
  author: string;
  date: string;
  rating: number;
  text: string;
}

export interface ReviewSummaryProps {
  average: number;
  totalReviews: number;
  distribution?: ReviewDistribution[];
  reviews?: Review[];
  className?: string;
}

export function ReviewSummary({
  average,
  totalReviews,
  distribution = [
    { stars: 5, count: 180 },
    { stars: 4, count: 62 },
    { stars: 3, count: 18 },
    { stars: 2, count: 6 },
    { stars: 1, count: 2 },
  ],
  reviews = [],
  className,
}: ReviewSummaryProps) {
  const max = Math.max(...distribution.map((d) => d.count), 1);

  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <span className="text-3xl font-bold tabular-nums">{average.toFixed(1)}</span>
          <StarRating value={average} readOnly />
          <span className="text-sm font-normal text-muted-foreground">
            {totalReviews} reviews
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-1">
          {distribution.map((row) => (
            <div key={row.stars} className="flex items-center gap-2 text-sm">
              <span className="w-3 tabular-nums">{row.stars}</span>
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-primary"
                  style={{ width: `${(row.count / max) * 100}%` }}
                />
              </div>
              <span className="w-8 text-right text-muted-foreground tabular-nums">{row.count}</span>
            </div>
          ))}
        </div>
        {reviews.length ? (
          <div className="space-y-4 border-t pt-4">
            {reviews.map((review) => (
              <article key={review.author + review.date}>
                <div className="mb-1 flex items-center gap-2">
                  <span className="font-medium">{review.author}</span>
                  <span className="text-xs text-muted-foreground">{review.date}</span>
                  <StarRating value={review.rating} readOnly size="sm" />
                </div>
                <p className="text-sm text-muted-foreground">{review.text}</p>
              </article>
            ))}
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
