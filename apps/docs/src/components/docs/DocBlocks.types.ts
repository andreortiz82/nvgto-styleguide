export interface PropsTableProps {
  props: {
    name: string;
    type: string;
    default?: string;
    required?: boolean;
    description: string;
  }[];
}
