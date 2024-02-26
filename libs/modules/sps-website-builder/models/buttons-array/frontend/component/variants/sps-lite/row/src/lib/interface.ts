import {
  IModel,
  variants,
} from "@sps/sps-website-builder-models-buttons-array-contracts";
import { IModel as IModelExtended } from "@sps/sps-website-builder-models-buttons-array-contracts-extended";

export const variant: (typeof variants)[number] = "row" as const;

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
