import {
  IModel as IParentModel,
  variants as parentVariants,
} from "@sps/sps-website-builder-topbar-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-website-builder-topbar-contracts-extended";

export const variants = [...parentVariants] as const;

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "Topbar";
export const route = "topbars";
export const populate = modelPopulate;
