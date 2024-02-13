import { IModel, IModelExtended } from "../../../model";

type IComponentBase = {
  showSkeletons?: boolean;
  isServer: boolean;
};

export interface IComponentProps extends IComponentBase {
  variant: "default";
  data: IModel;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended;
}
