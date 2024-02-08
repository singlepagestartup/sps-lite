import { IModel, IModelExtended } from "../../model";

export interface IComponentProps extends IModel {
  showSkeletons?: boolean;
  isServer: boolean;
  children?: React.ReactNode;
}

export interface IComponentPropsExtended
  extends IComponentProps,
    IModelExtended {}
