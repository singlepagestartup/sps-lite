export const variant = "order-status-changed-to-paid" as const;

export interface IComponentProps {
  variant: typeof variant;
  data: {
    id: string;
  };
}

export interface IComponentPropsExtended extends IComponentProps {}
