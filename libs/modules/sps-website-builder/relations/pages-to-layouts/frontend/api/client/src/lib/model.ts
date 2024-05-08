import type { IModel as IParentModel } from "@sps/sps-website-builder-models-pages-to-layouts-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-website-builder-models-pages-to-layouts-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "pages-to-layouts";
export const route = "pages-to-layouts";
export const populate = modelPopulate;
