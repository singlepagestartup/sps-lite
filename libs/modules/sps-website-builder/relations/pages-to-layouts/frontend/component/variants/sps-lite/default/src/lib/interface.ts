import { IModel } from "@sps/sps-website-builder-models-pages-to-layouts-contracts";
import { IModel as IModelExtended } from "@sps/sps-website-builder-models-pages-to-layouts-contracts-extended";

export const variant = "default" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
}

export interface IComponentPropsExtended extends IComponentProps {}
