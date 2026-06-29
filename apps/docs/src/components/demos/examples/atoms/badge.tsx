import { Badge } from "@navigato/react";

export function BadgeDefaultDemo() {
  return <Badge>Guest favorite</Badge>;
}

export function BadgeVariantsDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
    </div>
  );
}

export function BadgeUsageDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge>New</Badge>
      <Badge variant="secondary">Superhost</Badge>
      <Badge variant="outline">Free cancellation</Badge>
    </div>
  );
}
