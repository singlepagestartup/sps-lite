import type { IModel as IParentModel } from "@sps/sps-ecommerce-models-order-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-ecommerce-models-order-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "order";
export const route = "orders";
export const populate = modelPopulate;
