import type { IModel as IParentModel } from "@sps/sps-billing-contracts/lib/models/currency/interfaces";
import type { IModel as IParentModelExtended } from "@sps/sps-billing-contracts-extended/lib/models/currency/interfaces";
import { populate as modelPopulate } from "@sps/sps-billing-contracts-extended/lib/models/currency/populate";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "Currency";
export const route = "currencies";
export const populate = modelPopulate;
