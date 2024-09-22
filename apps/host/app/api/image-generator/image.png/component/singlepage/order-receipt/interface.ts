export const variant = "order-receipt" as const;

export interface IComponentProps {
  variant: typeof variant;
  data: {
    id?: string;
  };
}

export interface IComponentPropsExtended extends IComponentProps {}
