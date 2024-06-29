import type { IModel as IParentModel } from "@sps/sps-website-builder/models/navbar/contracts/root";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-website-builder/models/navbar/contracts/extended";
import { BACKEND_URL } from "@sps/shared-utils";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "navbar";
export const route = "/api/sps-website-builder/navbars";
export const populate = modelPopulate;
export const host = BACKEND_URL;
