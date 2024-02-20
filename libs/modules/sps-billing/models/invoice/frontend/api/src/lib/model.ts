import type { IModel as IParentModel } from "@sps/sps-billing-invoice-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-billing-invoice-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "Invoice";
export const route = "invoices";
export const populate = modelPopulate;
