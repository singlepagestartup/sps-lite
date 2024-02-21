import type { IModel as IParentModel } from "@sps/sps-crm-form-request-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-crm-form-request-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "FormRequest";
export const route = "form-requests";
export const populate = modelPopulate;
