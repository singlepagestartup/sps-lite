import type { IModel as IParentModel } from "@sps/sps-subscription-models-subscription-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-subscription-models-subscription-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "subscription";
export const route = "subscriptions";
export const populate = modelPopulate;
