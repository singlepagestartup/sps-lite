import { IModel } from "@sps/sps-third-parties-models-widget-contracts";
import { IModel as IModelExtended } from "@sps/sps-third-parties-models-widget-contracts-extended";

export const variant = "default" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
  data: Partial<IModel>;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended;
}
