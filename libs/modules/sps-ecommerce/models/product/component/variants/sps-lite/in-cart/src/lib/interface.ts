import { IModel } from "@sps/sps-ecommerce-product-contracts";
import { IModel as IModelExtended } from "@sps/sps-ecommerce-product-contracts-extended";

export const variant = "in-cart" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
  data: IModel;
}

export interface IComponentPropsExtended extends IComponentBase {
  isServer: boolean;
  data: IModelExtended;
}
