import type { IModel as IParentModel } from "@sps/sps-ecommerce-contracts/lib/models/checkout-form-block/interfaces";
import type { IModel as IParentModelExtended } from "@sps/sps-ecommerce-contracts-extended/lib/models/checkout-form-block/interfaces";
import { populate as modelPopulate } from "@sps/sps-ecommerce-contracts/lib/models/checkout-form-block/populate";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "CheckoutFormBlock";
export const route = "components/page-blocks.checkout-form-block";
export const populate = modelPopulate;
