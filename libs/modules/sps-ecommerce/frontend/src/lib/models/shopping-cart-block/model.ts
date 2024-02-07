import type { IModel as IParentModel } from "@sps/sps-ecommerce-contracts/lib/models/shopping-cart-block/interfaces";
import type { IModel as IParentModelExtended } from "@sps/sps-ecommerce-contracts-extended/lib/models/shopping-cart-block/interfaces";
import { populate as modelPopulate } from "@sps/sps-ecommerce-contracts/lib/models/shopping-cart-block/populate";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "ShoppingCartBlock";
export const route = "components/page-blocks.shopping-cart-block";
export const populate = modelPopulate;
