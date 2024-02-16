import { IModel, IModelExtended } from "../../../model";

export const variant = "image" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
  data: IModel;
  containerClassName?: string;
  className?: string;
}

export interface IComponentPropsExtended extends IComponentProps {
  isServer: boolean;
  data: IModelExtended;
}
