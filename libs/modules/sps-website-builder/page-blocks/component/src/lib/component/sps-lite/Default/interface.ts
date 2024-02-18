import { IModel } from "@sps/sps-website-builder-page-blocks-contracts";

export const variant = "default" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase, IModel {
  variant: typeof variant;
}
