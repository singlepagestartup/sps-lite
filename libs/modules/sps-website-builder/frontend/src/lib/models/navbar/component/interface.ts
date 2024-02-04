import { IModel, IModelExtended } from "../_model";

export interface IComponentProps extends IModel {
  isServer: boolean;
  showSkeletons?: boolean;
}
export interface IComponentPropsExtended
  extends IComponentProps,
    IModelExtended {}
