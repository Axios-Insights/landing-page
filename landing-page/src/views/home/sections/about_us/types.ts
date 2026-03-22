export interface CardContentType {
  title: string;
  description: string;
}

export interface FlowDescription {
  title: string;
  description: string;
  steps: CardContentType[];
}

export interface AboutUsSectionPropsType {
  title: string;
  subtitle: string;
  pillars: CardContentType[];
  workflow: FlowDescription;
}
