import type { IModel as IParentModel } from "@sps/startup/models/widget/contracts/root";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/startup/models/widget/contracts/extended";
import { BACKEND_URL } from "@sps/shared-utils";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "widget";
export const route = "/api/startup/widgets";
export const populate = modelPopulate;
export const host = BACKEND_URL;
