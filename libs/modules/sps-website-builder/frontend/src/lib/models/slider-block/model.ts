import {
  IModel as IParentModel,
  variants as parentVariants,
} from "@sps/sps-website-builder-slider-block-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-website-builder-slider-block-contracts-extended";

export const variants = [...parentVariants] as const;

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "SliderBlock";
export const route = "components/page-blocks.slider-block";
export const populate = modelPopulate;
