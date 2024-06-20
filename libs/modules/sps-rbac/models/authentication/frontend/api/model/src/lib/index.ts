import type { IModel as IParentModel } from "@sps/sps-rbac/models/authentication/contracts/root";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-rbac/models/authentication/contracts/extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "authentication";
export const route = "authentications";
export const populate = modelPopulate;
