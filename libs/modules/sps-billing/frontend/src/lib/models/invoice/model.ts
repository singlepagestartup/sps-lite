import type { IModel as IParentModel } from "@sps/sps-billing-contracts/lib/models/invoice/interfaces";
import type { IModel as IParentModelExtended } from "@sps/sps-billing-contracts-extended/lib/models/invoice/interfaces";
import { populate as modelPopulate } from "@sps/sps-billing-contracts-extended/lib/models/invoice/populate";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "Invoice";
export const route = "invoices";
export const populate = modelPopulate;
