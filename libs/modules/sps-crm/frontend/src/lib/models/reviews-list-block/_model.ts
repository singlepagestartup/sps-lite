import type { IModel as IParentModel } from "@sps/sps-crm-contracts/lib/models/reviews-list-block/interfaces";
import type { IModel as IParentModelExtended } from "@sps/sps-crm-contracts-extended/lib/models/reviews-list-block/interfaces";
import { populate as modelPopulate } from "@sps/sps-crm-contracts-extended/lib/models/reviews-list-block/populate";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "ReviewsListBlock";
export const route = "reviews-list-blocks";
export const populate = modelPopulate;
