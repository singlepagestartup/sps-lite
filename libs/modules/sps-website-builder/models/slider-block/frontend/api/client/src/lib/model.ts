import {
  IModel as IParentModel,
  variants as parentVariants,
} from "@sps/sps-website-builder/models/slider-block/contracts/root";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-website-builder/models/slider-block/contracts/extended";

export const variants = [...parentVariants] as const;

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "slider-block";
export const route = "slider-blocks";
export const populate = modelPopulate;
