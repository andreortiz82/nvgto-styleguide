export type ComponentTier = "atoms" | "molecules" | "organisms" | "pages";

export interface PropDoc {
  name: string;
  type: string;
  default?: string;
  required?: boolean;
  description: string;
}

export interface DocExample {
  id: string;
  title: string;
  description?: string;
  code?: string;
}

export interface ComponentDocMeta {
  slug: string;
  tier: ComponentTier;
  title: string;
  description: string;
  usage: string;
  props: PropDoc[];
  examples?: DocExample[];
}
