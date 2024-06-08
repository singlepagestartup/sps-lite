import type { IModel as IParentModel } from "@sps/sps-website-builder-models-sidebar-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-website-builder-models-sidebar-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "sidebar";
export const route = "sidebars";
export const populate = modelPopulate;
