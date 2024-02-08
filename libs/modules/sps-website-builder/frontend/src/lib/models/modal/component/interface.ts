import { ReactNode } from "react";
import { IModel, IModelExtended } from "../model";

export interface IComponentProps extends IModel {
  showSkeletons?: boolean;
  children: ReactNode;
  isServer: boolean;
}
export interface IComponentPropsExtended
  extends IComponentProps,
    IModelExtended {}
