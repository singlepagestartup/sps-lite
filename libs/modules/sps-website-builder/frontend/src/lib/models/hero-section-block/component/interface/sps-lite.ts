import { IComponentPropsExtended as IPage } from "../../../page/component/interface";
import { IModel, IModelExtended } from "../../model";

type IComponentBase = {
  showSkeletons?: boolean;
  isServer: boolean;
};

export interface IComponentProps extends IComponentBase {
  variant: IModel["variant"];
  data: IModel;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended;
}
