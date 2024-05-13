import type { IModel as IParentModel } from "@sps/sps-billing-models-currency-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-billing-models-currency-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "currency";
export const route = "currencies";
export const populate = modelPopulate;
