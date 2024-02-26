import { IModel as IModelExtended } from "@sps/sps-billing-models-invoice-contracts-extended";

export const variant = "list" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended[];
}
