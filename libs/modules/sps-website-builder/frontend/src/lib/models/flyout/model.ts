import {
  IModel as IParentModel,
  variants as parentVariants,
} from "@sps/sps-website-builder-flyout-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-website-builder-flyout-contracts-extended";

export const variants = [...parentVariants] as const;

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "Flyout";
export const route = "flyouts";
export const populate = modelPopulate;
