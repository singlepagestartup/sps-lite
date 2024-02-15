import { IModel, IModelExtended } from "../../../model";

export const variants = ["default", "image"] as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
  containerClassName?: string;
  className?: string;
}

export interface IComponentProps extends IComponentBase {
  variant: (typeof variants)[number];
  data: IModel;
}

export interface IComponentPropsExtended extends IComponentBase {
  variant: (typeof variants)[number];
  data: IModelExtended;
}
