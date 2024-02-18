import type { IModel as IModelExtended } from "@sps/sps-website-builder-hero-section-block-contracts-extended";
import {
  IModel,
  variants,
} from "@sps/sps-website-builder-hero-section-block-contracts";

export const variant: (typeof variants)[number] = "split" as const;

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
