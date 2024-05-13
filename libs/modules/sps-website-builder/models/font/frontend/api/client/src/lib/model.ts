import type { IModel as IParentModel } from "@sps/sps-website-builder-models-font-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-website-builder-models-font-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "font";
export const route = "font";
export const populate = modelPopulate;
