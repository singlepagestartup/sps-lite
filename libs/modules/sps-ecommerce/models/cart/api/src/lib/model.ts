import type { IModel as IParentModel } from "@sps/sps-ecommerce-cart-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-ecommerce-cart-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "Cart";
export const route = "carts";
export const populate = modelPopulate;
