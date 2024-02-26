import { ReactNode } from "react";
import {
  IModel,
  variants,
} from "@sps/sps-website-builder-models-layout-contracts";
import { IModel as IModelExtended } from "@sps/sps-website-builder-models-layout-contracts-extended";

export const variant: (typeof variants)[number] = "wide" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
  data: IModel;
  children: ReactNode;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended;
}
