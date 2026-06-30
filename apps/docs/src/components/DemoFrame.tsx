export function DemoFrame({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-6 border border-border rounded-lg overflow-hidden shadow-sm">
      {title ? (
        <div className="px-4 py-2.5 bg-muted/50 border-b border-border nvg-uppercase text-muted-foreground">
          {title}
        </div>
      ) : null}
      <div className="p-6 bg-card">{children}</div>
    </div>
  );
}

export function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="mt-4">
      <code>{code.trim()}</code>
    </pre>
  );
}
