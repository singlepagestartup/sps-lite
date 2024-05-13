import {
  IModel as IParentModel,
  variants as parentVariants,
} from "@sps/sps-website-builder-models-footer-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-website-builder-models-footer-contracts-extended";

export const variants = [...parentVariants] as const;

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "footer";
export const route = "footers";
export const populate = modelPopulate;
