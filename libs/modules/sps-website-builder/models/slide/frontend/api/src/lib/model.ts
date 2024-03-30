import type { IModel as IParentModel } from "@sps/sps-website-builder-models-slide-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-website-builder-models-slide-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "slide";
export const route = "components/elements.slide";
export const populate = modelPopulate;
