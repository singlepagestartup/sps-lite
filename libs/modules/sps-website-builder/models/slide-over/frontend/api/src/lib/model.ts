import {
  IModel as IParentModel,
  variants as parentVariants,
} from "@sps/sps-website-builder-models-slide-over-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-website-builder-models-slide-over-contracts-extended";

export const variants = [...parentVariants] as const;

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "slide-over";
export const route = "slide-overs";
export const populate = modelPopulate;
