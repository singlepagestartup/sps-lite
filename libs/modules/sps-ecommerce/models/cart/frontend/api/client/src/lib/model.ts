import type { IModel as IParentModel } from "@sps/sps-ecommerce-models-cart-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-ecommerce-models-cart-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "cart";
export const route = "carts";
export const populate = modelPopulate;
