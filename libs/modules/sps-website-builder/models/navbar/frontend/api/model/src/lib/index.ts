import type { IModel as IParentModel } from "@sps/sps-website-builder-models-navbar-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-website-builder-models-navbar-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "navbar";
export const route = "navbars";
export const populate = modelPopulate;
