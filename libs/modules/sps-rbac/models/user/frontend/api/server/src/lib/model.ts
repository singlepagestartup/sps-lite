import type { IModel as IParentModel } from "@sps/sps-rbac-models-user-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-rbac-models-user-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "user";
export const route = "users";
export const populate = modelPopulate;
