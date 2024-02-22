import type { IModel as IModelExtended } from "@sps/sps-website-builder-models-button-contracts-extended";
import {
  IModel,
  variants as modelVariants,
} from "@sps/sps-website-builder-models-button-contracts";

export const variants = [...modelVariants] as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: (typeof variants)[number];
  data: IModel;
}

export interface IComponentPropsExtended extends IComponentBase {
  isServer: boolean;
  data: IModelExtended;
}
