import type { IModel as IParentModel } from "@sps/sps-website-builder-contracts/lib/models/subscription-checkout-form-block/interfaces";
import type { IModel as IParentModelExtended } from "@sps/sps-website-builder-contracts-extended/lib/models/subscription-checkout-form-block/interfaces";
import { populate as modelPopulate } from "@sps/sps-website-builder-contracts-extended/lib/models/subscription-checkout-form-block/populate";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "SubscriptionCheckoutFormBlock";
export const route = "components/page-blocks.subscription-checkout-form-block";
export const populate = modelPopulate;
