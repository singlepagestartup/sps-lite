import type { IModel as IParentModel } from "@sps/sps-subscription-subscription-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-subscription-subscription-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "Subscription";
export const route = "subscriptions";
export const populate = modelPopulate;
