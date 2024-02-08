import type { IModel as IParentModel } from "@sps/sps-subscription-contracts/lib/models/subscription/interfaces";
import type { IModel as IParentModelExtended } from "@sps/sps-subscription-contracts-extended/lib/models/subscription/interfaces";
import { populate as modelPopulate } from "@sps/sps-subscription-contracts-extended/lib/models/subscription/populate";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "Subscription";
export const route = "subscriptions";
export const populate = modelPopulate;
