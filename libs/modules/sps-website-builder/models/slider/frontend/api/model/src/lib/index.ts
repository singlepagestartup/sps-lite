import type { IModel as IParentModel } from "@sps/sps-website-builder-models-slider-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-website-builder-models-slider-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "slider";
export const route = "sliders";
export const populate = modelPopulate;
