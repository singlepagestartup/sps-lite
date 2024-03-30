import type { IModel as IParentModel } from "@sps/sps-website-builder-models-metatag-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-website-builder-models-metatag-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "metatag";
export const route = "metatags";
export const populate = modelPopulate;
