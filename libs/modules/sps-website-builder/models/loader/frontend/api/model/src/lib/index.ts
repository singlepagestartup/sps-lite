import type { IModel as IParentModel } from "@sps/sps-website-builder-models-loader-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-website-builder-models-loader-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "loader";
export const route = "loaders";
export const populate = modelPopulate;
