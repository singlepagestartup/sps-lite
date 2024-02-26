import {
  IModel,
  variants,
} from "@sps/sps-website-builder-models-not-found-block-contracts";
import { IModel as IModelExtended } from "@sps/sps-website-builder-models-not-found-block-contracts-extended";

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
