import type { IModel as IParentModel } from "@sps/sps-rbac-contracts/lib/models/role/interfaces";
import type { IModel as IParentModelExtended } from "@sps/sps-rbac-contracts-extended/lib/models/role/interfaces";
import { populate as modelPopulate } from "@sps/sps-rbac-contracts-extended/lib/models/role/populate";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "Role";
export const route = "roles";
export const populate = modelPopulate;
