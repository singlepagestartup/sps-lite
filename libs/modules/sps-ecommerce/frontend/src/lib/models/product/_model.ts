import type { IModel as IParentModel } from "@sps/sps-ecommerce-contracts/lib/models/product/interfaces";
import type { IModel as IParentModelExtended } from "@sps/sps-ecommerce-contracts-extended/lib/models/product/interfaces";
import { populate as modelPopulate } from "@sps/sps-ecommerce-contracts-extended/lib/models/product/populate";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "Product";
export const route = "products";
export const populate = modelPopulate;
