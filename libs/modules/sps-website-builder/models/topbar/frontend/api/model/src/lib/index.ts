import type { IModel as IParentModel } from "@sps/sps-website-builder-models-topbar-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-website-builder-models-topbar-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "topbar";
export const route = "topbars";
export const populate = modelPopulate;
