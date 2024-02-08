import { IModel, IModelExtended } from "../../model";

export interface IComponentProps extends IModel {
  showSkeletons?: boolean;
  isServer: boolean;
  variant: "default" | "redirect";
}

export interface IComponentPropsExtended
  extends IComponentProps,
    IModelExtended {}
