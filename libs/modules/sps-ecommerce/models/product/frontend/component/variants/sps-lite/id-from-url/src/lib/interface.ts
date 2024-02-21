import { IModel as IModelExtended } from "@sps/sps-ecommerce-product-contracts-extended";

export const variant = "id-from-url" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
}

export interface IComponentPropsExtended extends IComponentBase {
  isServer: boolean;
  data: IModelExtended;
}
