import {
  IModel as IParentModel,
  variants as parentVariants,
} from "@sps/sps-website-builder-models-sidebar-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-website-builder-models-sidebar-contracts-extended";

export const variants = [...parentVariants] as const;

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "sidebar";
export const route = "sidebars";
export const populate = modelPopulate;
