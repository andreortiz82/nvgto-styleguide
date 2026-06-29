import type { ComponentDocMeta } from "../../content/components/types";
import { CodeExample, DocDivider, PropsTable } from "./DocBlocks";
import { ExampleSection, PreviewCard } from "./ExampleSection";

interface ComponentDocProps {
  meta: ComponentDocMeta;
  preview: React.ReactNode;
  examples?: { id: string; title: string; description?: string; Demo: React.ComponentType }[];
}

export function ComponentDoc({ meta, preview, examples = [] }: ComponentDocProps) {
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
