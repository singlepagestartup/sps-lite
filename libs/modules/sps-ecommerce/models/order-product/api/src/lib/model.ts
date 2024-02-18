import type { IModel as IParentModel } from "@sps/sps-ecommerce-order-product-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-ecommerce-order-product-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "OrderProduct";
export const route = "orders-products";
export const populate = modelPopulate;
