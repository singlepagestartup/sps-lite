import { IModel as IModelExtended } from "@sps/sps-ecommerce-models-cart-contracts-extended";

export const variant = "checkout" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended;
}
