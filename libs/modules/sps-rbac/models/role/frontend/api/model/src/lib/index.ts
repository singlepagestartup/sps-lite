import type { IModel as IParentModel } from "@sps/sps-rbac/models/role/contracts/root";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-rbac/models/role/contracts/extended";
import { BACKEND_URL } from "@sps/shared-utils";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "role";
export const route = "/api/sps-rbac/roles";
export const populate = modelPopulate;
export const host = BACKEND_URL;
