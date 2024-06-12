import type { IModel as IParentModel } from "@sps/sps-rbac-models-session-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-rbac-models-session-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "session";
export const route = "sessions";
export const populate = modelPopulate;
