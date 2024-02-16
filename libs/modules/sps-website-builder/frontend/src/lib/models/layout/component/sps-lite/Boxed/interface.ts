import { ReactNode } from "react";
import { IModel, IModelExtended } from "../../../model";

export const variant = "boxed" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
  data: IModel;
  children: ReactNode;
}

export interface IComponentPropsExtended extends IComponentBase {
  isServer: boolean;
  data: IModelExtended;
  children: ReactNode;
  variant: typeof variant;
}
