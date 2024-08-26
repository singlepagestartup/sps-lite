export const variant = "order-receipt" as const;

export interface IComponentProps {
  variant: typeof variant;
  id?: string;
}

export interface IComponentPropsExtended extends IComponentProps {}
