import { IModel } from "@sps/sps-website-builder-models-layout-contracts";
import { IModel as IModelExtended } from "@sps/sps-website-builder-models-layout-contracts-extended";

export const variant = "admin-panel" as const;

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
