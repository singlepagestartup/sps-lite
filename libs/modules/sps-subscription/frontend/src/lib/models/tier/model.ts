import type { IModel as IParentModel } from "@sps/sps-subscription-contracts/lib/models/tier/interfaces";
import type { IModel as IParentModelExtended } from "@sps/sps-subscription-contracts-extended/lib/models/tier/interfaces";
import { populate as modelPopulate } from "@sps/sps-subscription-contracts-extended/lib/models/tier/populate";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "Tier";
export const route = "tiers";
export const populate = modelPopulate;
