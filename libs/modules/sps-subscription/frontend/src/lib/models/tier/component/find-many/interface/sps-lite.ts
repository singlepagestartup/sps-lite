import { IModelExtended } from "../../../model";

type IComponentBase = {
  showSkeletons?: boolean;
  isServer: boolean;
};

export interface IComponentProps extends IComponentBase {
  variant: "list";
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended[];
}
