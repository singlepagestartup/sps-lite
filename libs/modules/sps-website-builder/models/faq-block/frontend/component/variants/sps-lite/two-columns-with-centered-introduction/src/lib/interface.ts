import {
  IModel,
  variants,
} from "@sps/sps-website-builder-models-faq-block-contracts";
import { IModel as IModelExtended } from "@sps/sps-website-builder-models-faq-block-contracts-extended";

export const variant: (typeof variants)[number] =
  "two-columns-with-centered-introduction" as const;

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
