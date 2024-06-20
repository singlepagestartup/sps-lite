import type { IModel as IParentModel } from "@sps/startup/models/widget/contracts/root";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/startup/models/widget/contracts/extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "widget";
export const route = "widgets";
export const populate = modelPopulate;
