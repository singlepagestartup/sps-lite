import type { IModel as IParentModel } from "@sps/sps-website-builder-models-buttons-array-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-website-builder-models-buttons-array-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "buttons-array";
export const route = "buttons-arrays";
export const populate = modelPopulate;
