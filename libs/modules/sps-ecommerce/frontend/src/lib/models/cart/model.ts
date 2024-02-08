import type { IModel as IParentModel } from "@sps/sps-ecommerce-contracts/lib/models/cart/interfaces";
import type { IModel as IParentModelExtended } from "@sps/sps-ecommerce-contracts-extended/lib/models/cart/interfaces";
import { populate as modelPopulate } from "@sps/sps-ecommerce-contracts-extended/lib/models/cart/populate";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "Cart";
export const route = "carts";
export const populate = modelPopulate;
