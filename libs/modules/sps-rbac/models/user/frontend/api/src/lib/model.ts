import type { IModel as IParentModel } from "@sps/sps-rbac-user-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-rbac-user-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "User";
export const route = "users";
export const populate = modelPopulate;
