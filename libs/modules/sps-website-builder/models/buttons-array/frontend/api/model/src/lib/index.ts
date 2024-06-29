import type { IModel as IParentModel } from "@sps/sps-website-builder/models/buttons-array/contracts/root";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-website-builder/models/buttons-array/contracts/extended";
import { BACKEND_URL } from "@sps/shared-utils";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "buttons-array";
export const route = "/api/sps-website-builder/buttons-arrays";
export const populate = modelPopulate;
export const host = BACKEND_URL;
