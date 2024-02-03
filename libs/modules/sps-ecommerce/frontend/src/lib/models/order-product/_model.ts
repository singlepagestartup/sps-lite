import type { IModel as IParentModel } from "@sps/sps-ecommerce-contracts/lib/models/order-product/interfaces";
import type { IModel as IParentModelExtended } from "@sps/sps-ecommerce-contracts-extended/lib/models/order-product/interfaces";
import { populate as modelPopulate } from "@sps/sps-ecommerce-contracts/lib/models/order-product/populate";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "OrderProduct";
export const route = "order-products";
export const populate = modelPopulate;
