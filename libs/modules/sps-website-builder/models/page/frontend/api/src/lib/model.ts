import type { IModel as IParentModel } from "@sps/sps-website-builder-models-page-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-website-builder-models-page-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "page";
export const route = "pages";
export const populate = modelPopulate;
