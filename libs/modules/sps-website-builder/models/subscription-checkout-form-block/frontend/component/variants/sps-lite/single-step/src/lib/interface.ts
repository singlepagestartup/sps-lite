import {
  IModel,
  variants,
} from "@sps/sps-website-builder-models-subscription-checkout-form-block-contracts";
import { IModel as IModelExtended } from "@sps/sps-website-builder-models-subscription-checkout-form-block-contracts-extended";

export const variant: (typeof variants)[number] = "single-step" as const;

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
