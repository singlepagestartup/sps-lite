import type { IModel as IParentModel } from "@sps/sps-rbac-models-authentication-block-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-rbac-models-authentication-block-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "authentication-block";
export const route = "authentication-blocks";
export const populate = modelPopulate;
