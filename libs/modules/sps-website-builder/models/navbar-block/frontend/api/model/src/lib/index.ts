import type { IModel as IParentModel } from "@sps/sps-website-builder/models/navbar-block/contracts/root";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-website-builder/models/navbar-block/contracts/extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "navbar-block";
export const route = "navbar-blocks";
export const populate = modelPopulate;
