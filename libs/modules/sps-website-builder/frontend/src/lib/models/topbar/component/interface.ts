import { ReactNode } from "react";
import { IModel, IModelExtended } from "../_model";

export interface IComponentProps extends IModel {
  showSkeletons?: boolean;
  isServer: boolean;
  children: ReactNode;
}
export interface IComponentPropsExtended
  extends IComponentProps,
    IModelExtended {}
