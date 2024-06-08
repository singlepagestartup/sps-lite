import type { IModel as IParentModel } from "@sps/sps-website-builder-models-slider-block-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-website-builder-models-slider-block-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "slider-block";
export const route = "slider-blocks";
export const populate = modelPopulate;
