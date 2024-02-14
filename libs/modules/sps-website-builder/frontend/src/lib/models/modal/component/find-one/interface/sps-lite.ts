import { ReactNode } from "react";
import { IComponentPropsExtended as IPage } from "../../../../page/component/find-one/interface";
import { IModel, IModelExtended } from "../../../model";

export const variants = ["simple"] as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: (typeof variants)[number];
  children: ReactNode;
}

export interface IComponentPropsExtended extends IComponentBase {
  variant: (typeof variants)[number];
  data: IModelExtended;
  children: ReactNode;
}
