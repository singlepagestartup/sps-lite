import { IModel } from "@sps/sps-ecommerce-models-order-contracts";
import { IModel as IModelExtended } from "@sps/sps-ecommerce-models-order-contracts-extended";

export const variant = "checkout" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
  data: IModel;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended;
}
