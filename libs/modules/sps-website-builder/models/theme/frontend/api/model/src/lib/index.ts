import type { IModel as IParentModel } from "@sps/sps-website-builder-models-theme-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-website-builder-models-theme-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "theme";
export const route = "themes";
export const populate = modelPopulate;
