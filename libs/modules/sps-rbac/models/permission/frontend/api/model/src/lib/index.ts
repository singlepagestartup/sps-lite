import type { IModel as IParentModel } from "@sps/sps-rbac/models/permission/contracts/root";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-rbac/models/permission/contracts/extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "permission";
export const route = "permissions";
export const populate = modelPopulate;
