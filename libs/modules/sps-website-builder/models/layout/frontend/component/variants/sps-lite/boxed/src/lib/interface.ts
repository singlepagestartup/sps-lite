import { ReactNode } from "react";
import {
  IModel,
  variants,
} from "@sps/sps-website-builder-models-layout-contracts";
import { IModel as IModelExtended } from "@sps/sps-website-builder-models-layout-contracts-extended";
import { IModel as IPage } from "@sps/sps-website-builder-models-page-contracts";

export const variant: (typeof variants)[number] = "boxed" as const;

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
