import { IPage } from "@sps/sps-website-builder-contracts-extended/lib/props";
import { IModel, IModelExtended } from "../_model";

export interface IComponentProps extends IModel, IPage {
  isServer?: boolean;
  showSkeletons?: boolean;
}

export interface IComponentPropsExtended
  extends IComponentProps,
    IModelExtended {
  showSkeletons?: boolean;
}
