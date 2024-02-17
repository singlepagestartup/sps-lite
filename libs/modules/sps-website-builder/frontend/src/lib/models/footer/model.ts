import {
  IModel as IParentModel,
  variants as parentVariants,
} from "@sps/sps-website-builder-footer-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-website-builder-footer-contracts-extended";

export const variants = [...parentVariants] as const;

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "Footer";
export const route = "footers";
export const populate = modelPopulate;
