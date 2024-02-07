import { IComponentPropsExtended as IPage } from "../../../page/component/interface";
import { IModel, IModelExtended } from "../../model";

export interface IComponentProps extends IModel, Omit<IPage, "pageBlocks"> {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentPropsExtended
  extends IComponentProps,
    IModelExtended {}
