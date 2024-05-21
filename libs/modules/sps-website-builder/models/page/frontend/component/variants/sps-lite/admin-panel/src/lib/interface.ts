import { IModel } from "@sps/sps-website-builder-models-page-contracts";
import { IModel as IModelExtended } from "@sps/sps-website-builder-models-page-contracts-extended";

export const variant = "admin-panel" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
}

export interface IComponentPropsExtended extends IComponentProps {}
