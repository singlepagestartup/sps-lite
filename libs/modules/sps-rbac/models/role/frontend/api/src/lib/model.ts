import type { IModel as IParentModel } from "@sps/sps-rbac-role-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-rbac-role-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "Role";
export const route = "roles";
export const populate = modelPopulate;
