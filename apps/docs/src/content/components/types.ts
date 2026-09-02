export type ComponentTier = "atoms" | "molecules" | "organisms" | "pages";

export type DocStatus = "draft" | "preview" | "stable" | "deprecated";

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

export interface AnatomyPart {
  name: string;
  description: string;
}

export interface DocState {
  name: string;
  description: string;
}

export interface DoDont {
  do: string;
  dont: string;
}

export interface RelatedPattern {
  title: string;
  href: string;
}

export interface ComponentDocMeta {
  slug: string;
  tier: ComponentTier;
  title: string;
  description: string;
  usage: string;
  props: PropDoc[];
  examples?: DocExample[];
  /** When set, the DESIGN.md docs skeleton renders. Other catalog entries stay preview + usage + props. */
  status?: DocStatus;
  whenToUse?: string[];
  whenNot?: string[];
  anatomy?: AnatomyPart[];
  variants?: string;
  states?: DocState[];
  content?: string;
  a11y?: string;
  doDont?: DoDont;
  related?: RelatedPattern[];
}
