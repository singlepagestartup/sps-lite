import {
  IModel,
  variants,
} from "@sps/sps-website-builder-models-alert-block-contracts";
import { IModel as IModelExtended } from "@sps/sps-website-builder-models-alert-block-contracts-extended";

export const variant: (typeof variants)[number] = "centered" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
  data: IModel;
}

export interface IComponentPropsExtended extends Omit<IComponentProps, "data"> {
  data: IModelExtended;
}
