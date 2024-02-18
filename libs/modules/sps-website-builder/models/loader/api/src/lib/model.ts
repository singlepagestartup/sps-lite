import {
  IModel as IParentModel,
  variants as parentVariants,
} from "@sps/sps-website-builder-loader-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-website-builder-loader-contracts-extended";

export const variants = [...parentVariants] as const;

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "Loader";
export const route = "loaders";
export const populate = modelPopulate;
