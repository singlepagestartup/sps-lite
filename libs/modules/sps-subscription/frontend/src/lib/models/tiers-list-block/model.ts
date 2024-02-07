import type { IModel as IParentModel } from "@sps/sps-subscription-contracts/lib/models/tiers-list-block/interfaces";
import type { IModel as IParentModelExtended } from "@sps/sps-subscription-contracts-extended/lib/models/tiers-list-block/interfaces";
import { populate as modelPopulate } from "@sps/sps-subscription-contracts-extended/lib/models/tiers-list-block/populate";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "TiersListBlock";
export const route = "components/page-blocks.tiers-list-block";
export const populate = modelPopulate;
