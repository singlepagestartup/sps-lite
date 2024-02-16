import { IModel, IModelExtended } from "../../../model";

export const variant = "one-quarter" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
  data: IModel;
}

export interface IComponentPropsExtended extends IComponentBase {
  variant: typeof variant;
  isServer: boolean;
  data: IModelExtended;
}
