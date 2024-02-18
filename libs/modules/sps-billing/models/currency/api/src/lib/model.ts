import type { IModel as IParentModel } from "@sps/sps-billing-currency-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-billing-currency-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "Currency";
export const route = "currencies";
export const populate = modelPopulate;
