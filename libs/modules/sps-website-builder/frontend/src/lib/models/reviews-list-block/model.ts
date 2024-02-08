import type { IModel as IParentModel } from "@sps/sps-website-builder-contracts/lib/models/reviews-list-block/interfaces";
import type { IModel as IParentModelExtended } from "@sps/sps-website-builder-contracts-extended/lib/models/reviews-list-block/interfaces";
import { populate as modelPopulate } from "@sps/sps-website-builder-contracts-extended/lib/models/reviews-list-block/populate";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "ReviewsListBlock";
export const route = "components/page-blocks.reviews-list-block";
export const populate = modelPopulate;
