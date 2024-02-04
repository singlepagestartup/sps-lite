import type { IModel as IParentModel } from "@sps/sps-rbac-contracts/lib/models/user/interfaces";
import type { IModel as IParentModelExtended } from "@sps/sps-rbac-contracts-extended/lib/models/user/interfaces";
import { populate as modelPopulate } from "@sps/sps-rbac-contracts-extended/lib/models/user/populate";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "User";
export const route = "users";
export const populate = modelPopulate;
