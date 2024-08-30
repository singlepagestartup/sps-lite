export const variant = "opengraph-image" as const;

export interface IComponentProps {
  variant: typeof variant;
  data: {
    title?: string;
    subtitle?: string;
  };
}

export interface IComponentPropsExtended extends IComponentProps {}
