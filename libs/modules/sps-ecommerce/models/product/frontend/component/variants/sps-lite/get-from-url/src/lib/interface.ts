import { IModel } from "@sps/sps-ecommerce-models-product-contracts";
import { IModel as IModelExtended } from "@sps/sps-ecommerce-models-product-contracts-extended";

export const variant = "get-from-url" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
  children?: any;
}

export interface IComponentPropsExtended extends IComponentProps {}
