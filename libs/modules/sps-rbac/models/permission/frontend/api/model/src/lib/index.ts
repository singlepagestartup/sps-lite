import type { IModel as IParentModel } from "@sps/sps-rbac/models/permission/contracts/root";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-rbac/models/permission/contracts/extended";
import { BACKEND_URL } from "@sps/shared-utils";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "permission";
export const route = "/api/sps-rbac/permissions";
export const populate = modelPopulate;
export const host = BACKEND_URL;
export const query = {
  populate,
};
