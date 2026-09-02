import { Badge } from "@navigato/react";
import type { ComponentDocMeta, DocStatus } from "../../content/components/types";
import { CodeExample, DocDivider, PropsTable } from "./DocBlocks";
import { ExampleSection, PreviewCard } from "./ExampleSection";

interface ComponentDocProps {
  meta: ComponentDocMeta;
  preview: React.ReactNode;
  examples?: { id: string; title: string; description?: string; Demo: React.ComponentType }[];
}

const STATUS_VARIANT: Record<DocStatus, "default" | "secondary" | "outline" | "destructive"> = {
  stable: "default",
  preview: "secondary",
  draft: "outline",
  deprecated: "destructive",
};

function withBase(href: string) {
  const base = import.meta.env.BASE_URL ?? "/nvgto-styleguide/";
  const normalized = href.startsWith("/") ? href.slice(1) : href;
  return `${base}${normalized}`;
}

export function ComponentDoc({ meta, preview, examples = [] }: ComponentDocProps) {
  if (!meta.status) {
    return (
      <div className="mt-8 space-y-8">
        <PreviewCard description="Default configuration">{preview}</PreviewCard>

        {examples.map(({ id, title, description, Demo }) => (
          <ExampleSection key={id} title={title} description={description}>
            <Demo />
          </ExampleSection>
        ))}

        <DocDivider />

        <CodeExample code={meta.usage} title="Usage" />

        <div className="space-y-4">
          <h2 className="text-lg font-semibold m-0">API</h2>
          <PropsTable props={meta.props} />
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8 space-y-10">
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant={STATUS_VARIANT[meta.status]}>{meta.status}</Badge>
        <span className="text-sm text-muted-foreground">
          A component is not <code>stable</code> without this skeleton.
        </span>
      </div>

      <PreviewCard title="Live example" description="Copy-paste sits under the preview.">
        {preview}
      </PreviewCard>

      <CodeExample code={meta.usage} title="Copy-paste" />

      {meta.whenToUse || meta.whenNot ? (
        <section className="grid gap-4 sm:grid-cols-2">
          {meta.whenToUse ? (
            <div className="rounded-xl border bg-card p-5 space-y-2">
              <h2 className="text-lg font-semibold m-0">When to use</h2>
              <ul className="m-0 pl-5 space-y-1 text-sm">
                {meta.whenToUse.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ) : null}
          {meta.whenNot ? (
            <div className="rounded-xl border bg-card p-5 space-y-2">
              <h2 className="text-lg font-semibold m-0">When not</h2>
              <ul className="m-0 pl-5 space-y-1 text-sm">
                {meta.whenNot.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </section>
      ) : null}

      {meta.anatomy?.length ? (
        <section className="space-y-3">
          <h2 className="text-lg font-semibold m-0">Anatomy</h2>
          <ul className="m-0 pl-5 space-y-1 text-sm">
            {meta.anatomy.map((part) => (
              <li key={part.name}>
                <span className="font-medium">{part.name}.</span> {part.description}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {meta.variants ? (
        <section className="space-y-3">
          <h2 className="text-lg font-semibold m-0">Variants</h2>
          <p className="text-sm text-muted-foreground m-0">{meta.variants}</p>
        </section>
      ) : null}

      {examples.map(({ id, title, description, Demo }) => (
        <ExampleSection key={id} title={title} description={description}>
          <Demo />
        </ExampleSection>
      ))}

      {meta.states?.length ? (
        <section className="space-y-3">
          <h2 className="text-lg font-semibold m-0">States</h2>
          <ul className="m-0 pl-5 space-y-1 text-sm">
            {meta.states.map((state) => (
              <li key={state.name}>
                <span className="font-medium">{state.name}.</span> {state.description}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {meta.content ? (
        <section className="space-y-3">
          <h2 className="text-lg font-semibold m-0">Content</h2>
          <p className="text-sm text-muted-foreground m-0">{meta.content}</p>
        </section>
      ) : null}

      {meta.a11y ? (
        <section className="space-y-3">
          <h2 className="text-lg font-semibold m-0">Accessibility contract</h2>
          <p className="text-sm text-muted-foreground m-0">{meta.a11y}</p>
        </section>
      ) : null}

      {meta.doDont ? (
        <section className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-primary/30 bg-accent/40 p-5 space-y-2">
            <h2 className="text-lg font-semibold m-0">Do</h2>
            <p className="text-sm m-0">{meta.doDont.do}</p>
          </div>
          <div className="rounded-xl border border-destructive/30 bg-card p-5 space-y-2">
            <h2 className="text-lg font-semibold m-0 text-destructive">Don&apos;t</h2>
            <p className="text-sm m-0">{meta.doDont.dont}</p>
          </div>
        </section>
      ) : null}

      <DocDivider />

      <div className="space-y-4">
        <h2 className="text-lg font-semibold m-0">Props API</h2>
        <p className="text-sm text-muted-foreground m-0">
          Matches the TypeScript export. Do not invent extra props.
        </p>
        <PropsTable props={meta.props} />
      </div>

      {meta.related?.length ? (
        <section className="space-y-3">
          <h2 className="text-lg font-semibold m-0">Related patterns</h2>
          <ul className="m-0 pl-5 space-y-1 text-sm">
            {meta.related.map((item) => (
              <li key={item.href}>
                <a href={withBase(item.href)}>{item.title}</a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
