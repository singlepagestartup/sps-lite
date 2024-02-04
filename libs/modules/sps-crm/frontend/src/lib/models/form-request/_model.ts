import type { IModel as IParentModel } from "@sps/sps-crm-contracts/lib/models/form-request/interfaces";
import type { IModel as IParentModelExtended } from "@sps/sps-crm-contracts-extended/lib/models/form-request/interfaces";
import { populate as modelPopulate } from "@sps/sps-crm-contracts-extended/lib/models/form-request/populate";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "FormRequest";
export const route = "form-requests";
export const populate = modelPopulate;
