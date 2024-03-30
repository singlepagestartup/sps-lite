import type { IModel as IParentModel } from "@sps/sps-rbac-models-role-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-rbac-models-role-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "role";
export const route = "roles";
export const populate = modelPopulate;
