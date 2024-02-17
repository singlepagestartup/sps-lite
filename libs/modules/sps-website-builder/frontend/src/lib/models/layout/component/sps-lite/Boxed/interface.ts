import { ReactNode } from "react";
import { IModel, IModelExtended, variants } from "../../../model";

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
