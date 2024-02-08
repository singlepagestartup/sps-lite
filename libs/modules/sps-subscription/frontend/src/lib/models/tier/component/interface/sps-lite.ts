import { IModel, IModelExtended } from "../../model";

export interface IComponentProps extends IModel {
  isServer: boolean;
  showSkeletons?: boolean;
  variant: "default";
}

export interface IComponentPropsExtended
  extends IComponentProps,
    IModelExtended {
  showSkeletons?: boolean;
}
