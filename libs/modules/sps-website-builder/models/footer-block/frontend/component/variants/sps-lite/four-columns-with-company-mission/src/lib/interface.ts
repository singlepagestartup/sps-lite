import {
  IModel,
  variants,
} from "@sps/sps-website-builder-footer-block-contracts";
import { IModel as IModelExtended } from "@sps/sps-website-builder-footer-block-contracts-extended";

export const variant: (typeof variants)[number] =
  "four-columns-with-company-mission" as const;

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