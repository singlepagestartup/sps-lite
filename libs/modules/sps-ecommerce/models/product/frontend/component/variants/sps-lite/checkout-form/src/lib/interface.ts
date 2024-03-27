import { IModel } from "@sps/sps-ecommerce-models-product-contracts";
import { IModel as IModelExtended } from "@sps/sps-ecommerce-models-product-contracts-extended";

export const variant = "checkout-form" as const;

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
