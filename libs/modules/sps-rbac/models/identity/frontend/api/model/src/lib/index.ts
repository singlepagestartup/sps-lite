import type { IModel as IParentModel } from "@sps/sps-rbac/models/identity/contracts/root";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-rbac/models/identity/contracts/extended";
import { BACKEND_URL } from "@sps/shared-utils";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "identity";
export const route = "/api/sps-rbac/identities";
export const populate = modelPopulate;
export const host = BACKEND_URL;
