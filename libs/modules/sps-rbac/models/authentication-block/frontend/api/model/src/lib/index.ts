import type { IModel as IParentModel } from "@sps/sps-rbac/models/authentication-block/contracts/root";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-rbac/models/authentication-block/contracts/extended";
import { BACKEND_URL } from "@sps/shared-utils";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "authentication-block";
export const route = "/api/sps-rbac/authentication-blocks";
export const populate = modelPopulate;
export const host = BACKEND_URL;
