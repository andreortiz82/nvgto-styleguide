export function DemoFrame({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-6 border border-mid rounded-md overflow-hidden">
      {title ? (
        <div className="px-4 py-2 bg-white border-b border-mid text-xs uppercase text-silver tracking-wide">
          {title}
        </div>
      ) : null}
      <div className="p-6 bg-white">{children}</div>
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
