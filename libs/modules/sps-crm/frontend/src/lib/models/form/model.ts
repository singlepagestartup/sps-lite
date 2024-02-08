import type { IModel as IParentModel } from "@sps/sps-crm-contracts/lib/models/form/interfaces";
import type { IModel as IParentModelExtended } from "@sps/sps-crm-contracts-extended/lib/models/form/interfaces";
import { populate as modelPopulate } from "@sps/sps-crm-contracts-extended/lib/models/form/populate";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "Form";
export const route = "forms";
export const populate = modelPopulate;
