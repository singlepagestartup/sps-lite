import type { IModel as IParentModel } from "@sps/sps-ecommerce-product-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-ecommerce-product-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "Product";
export const route = "products";
export const populate = modelPopulate;
