import type { IModel as IParentModel } from "@sps/sps-website-builder/models/button/contracts/root";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-website-builder/models/button/contracts/extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "button";
export const route = "buttons";
export const populate = modelPopulate;
