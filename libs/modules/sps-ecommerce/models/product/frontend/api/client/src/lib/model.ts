import type { IModel as IParentModel } from "@sps/sps-ecommerce-models-product-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-ecommerce-models-product-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "product";
export const route = "products";
export const populate = modelPopulate;
