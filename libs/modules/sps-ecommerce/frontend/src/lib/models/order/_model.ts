import type { IModel as IParentModel } from "@sps/sps-ecommerce-contracts/lib/models/order/interfaces";
import type { IModel as IParentModelExtended } from "@sps/sps-ecommerce-contracts-extended/lib/models/order/interfaces";
import { populate as modelPopulate } from "@sps/sps-ecommerce-contracts-extended/lib/models/order/populate";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "Order";
export const route = "orders";
export const populate = modelPopulate;
