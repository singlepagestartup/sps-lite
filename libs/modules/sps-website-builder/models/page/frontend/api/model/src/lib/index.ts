import type { IModel as IParentModel } from "@sps/sps-website-builder/models/page/contracts/root";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-website-builder/models/page/contracts/extended";
import { BACKEND_URL } from "@sps/shared-utils";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "page";
export const route = "/api/sps-website-builder/pages";
export const populate = modelPopulate;
export const host = BACKEND_URL;
