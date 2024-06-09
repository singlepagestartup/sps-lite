import type { IModel as IParentModel } from "@sps/sps-website-builder-models-not-found-block-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-website-builder-models-not-found-block-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "not-found-block";
export const route = "not-found-blocks";
export const populate = modelPopulate;
