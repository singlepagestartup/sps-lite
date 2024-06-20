import type { IModel as IParentModel } from "@sps/sps-rbac/models/identity/contracts/root";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-rbac/models/identity/contracts/extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "identity";
export const route = "identities";
export const populate = modelPopulate;
