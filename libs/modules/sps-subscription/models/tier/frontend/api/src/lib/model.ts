import type { IModel as IParentModel } from "@sps/sps-subscription-tier-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-subscription-tier-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "Tier";
export const route = "tiers";
export const populate = modelPopulate;
