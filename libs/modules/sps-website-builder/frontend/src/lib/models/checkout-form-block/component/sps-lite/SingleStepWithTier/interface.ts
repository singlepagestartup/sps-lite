import { IModel, IModelExtended, variants } from "../../../model";

export const variant: (typeof variants)[number] =
  "single-step-with-tier" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
  data: IModel;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended;
}
