import type { IModel as IParentModel } from "@sps/sps-website-builder-theme-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-website-builder-theme-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "Theme";
export const route = "themes";
export const populate = modelPopulate;
