import { IComponentPropsExtended as IPage } from "../../../../entities/page/component/interface";
import { IModel, IModelExtended } from "../_model";

export interface IComponentProps extends IModel, Omit<IPage, "pageBlocks"> {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentPropsExtended
  extends IComponentProps,
    IModelExtended {
  showSkeletons?: boolean;
}
