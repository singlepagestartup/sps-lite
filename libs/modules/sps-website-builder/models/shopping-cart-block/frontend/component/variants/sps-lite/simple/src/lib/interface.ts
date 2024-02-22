import {
  IModel,
  variants,
} from "@sps/sps-website-builder-models-shopping-cart-block-contracts";
import { IModel as IModelExtended } from "@sps/sps-website-builder-models-shopping-cart-block-contracts-extended";

export const variant: (typeof variants)[number] = "simple" as const;

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
