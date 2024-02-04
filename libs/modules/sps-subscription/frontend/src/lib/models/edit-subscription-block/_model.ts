import type { IModel as IParentModel } from "@sps/sps-subscription-contracts/lib/models/edit-subscription-block/interfaces";
import type { IModel as IParentModelExtended } from "@sps/sps-subscription-contracts-extended/lib/models/edit-subscription-block/interfaces";
import { populate as modelPopulate } from "@sps/sps-subscription-contracts-extended/lib/models/edit-subscription-block/populate";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "EditSubscriptionBlock";
export const route = "components/page-blocks.edit-subscription-block";
export const populate = modelPopulate;
