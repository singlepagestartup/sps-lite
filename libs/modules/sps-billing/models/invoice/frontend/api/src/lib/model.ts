import type { IModel as IParentModel } from "@sps/sps-billing-models-invoice-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-billing-models-invoice-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "invoice";
export const route = "invoices";
export const populate = modelPopulate;
