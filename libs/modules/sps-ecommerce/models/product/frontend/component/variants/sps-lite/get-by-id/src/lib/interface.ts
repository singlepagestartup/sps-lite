import { IModel } from "@sps/sps-ecommerce-models-product-contracts";
import { IModel as IModelExtended } from "@sps/sps-ecommerce-models-product-contracts-extended";
import { Dispatch, SetStateAction } from "react";

export const variant = "get-by-id" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
  id: number;
  set?: Dispatch<SetStateAction<IModelExtended | undefined>>;
  children?: ({ data }: { data: IModelExtended }) => any;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended;
}
