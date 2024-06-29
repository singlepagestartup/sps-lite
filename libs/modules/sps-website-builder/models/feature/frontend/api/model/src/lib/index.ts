import type { IModel as IParentModel } from "@sps/sps-website-builder/models/feature/contracts/root";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-website-builder/models/feature/contracts/extended";
import { BACKEND_URL } from "@sps/shared-utils";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "feature";
export const route = "/api/sps-website-builder/features";
export const populate = modelPopulate;
export const host = BACKEND_URL;
