import { IComponentPropsExtended as IPage } from "../../../../page/component/find-one/interface";
import { IModel, IModelExtended } from "../../../model";

export const variants = ["default"] as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: (typeof variants)[number];
  data: IModel;
}

export interface IComponentPropsExtended extends IComponentBase {
  variant: (typeof variants)[number];
  data: IModelExtended;
}
