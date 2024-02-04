import { ReactNode } from "react";
import { IModel, IModelExtended } from "../_model";

export interface IComponentProps extends IModel {
  showSkeletons?: boolean;
  children: ReactNode;
  isServer: boolean;
}
export interface IComponentPropsExtended
  extends IComponentProps,
    IModelExtended {}
