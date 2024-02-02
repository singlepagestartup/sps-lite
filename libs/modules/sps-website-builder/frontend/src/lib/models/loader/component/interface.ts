import { IModel, IModelExtended } from "../_model";

export interface IComponentProps extends IModel {
  showSkeletons?: boolean;
  isServer: boolean;
}
export interface IComponentPropsExtended
  extends IComponentProps,
    IModelExtended {}
