import type { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@navigato/react";

interface ExampleSectionProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export function ExampleSection({ title, description, children }: ExampleSectionProps) {
  return (
    <section className="space-y-3">
      <div>
        <h3 className="text-base font-semibold tracking-tight m-0">{title}</h3>
        {description ? (
          <p className="text-sm text-muted-foreground mt-1 mb-0">{description}</p>
        ) : null}
      </div>
      <Card>
        <CardContent className="pt-6">{children}</CardContent>
      </Card>
    </section>
  );
}

interface PreviewCardProps {
  title?: string;
  description?: string;
  children: ReactNode;
}

export function PreviewCard({ title = "Preview", description, children }: PreviewCardProps) {
  return (
    <Card>
      <CardHeader className="pb-4">
        <CardTitle className="text-base">{title}</CardTitle>
        {description ? <CardDescription>{description}</CardDescription> : null}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
