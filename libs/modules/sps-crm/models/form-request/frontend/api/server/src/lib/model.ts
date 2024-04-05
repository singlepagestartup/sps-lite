import type { IModel as IParentModel } from "@sps/sps-crm-models-form-request-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-crm-models-form-request-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "form-request";
export const route = "form-requests";
export const populate = modelPopulate;
