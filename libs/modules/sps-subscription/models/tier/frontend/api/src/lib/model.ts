import type { IModel as IParentModel } from "@sps/sps-subscription-models-tier-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-subscription-models-tier-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "tier";
export const route = "tiers";
export const populate = modelPopulate;
