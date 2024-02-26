import {
  IModel,
  variants,
} from "@sps/sps-website-builder-models-cta-section-block-contracts";
import { IModel as IModelExtended } from "@sps/sps-website-builder-models-cta-section-block-contracts-extended";

export const variant: (typeof variants)[number] = "dark-with-image" as const;

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
