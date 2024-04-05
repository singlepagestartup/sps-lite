import {
  IModel as IParentModel,
  variants as parentVariants,
} from "@sps/sps-website-builder-models-topbar-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-website-builder-models-topbar-contracts-extended";

export const variants = [...parentVariants] as const;

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "topbar";
export const route = "topbars";
export const populate = modelPopulate;
