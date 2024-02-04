import type { IModel as IParentModel } from "@sps/sps-crm-contracts/lib/models/reviews-table-block/interfaces";
import type { IModel as IParentModelExtended } from "@sps/sps-crm-contracts-extended/lib/models/reviews-table-block/interfaces";
import { populate as modelPopulate } from "@sps/sps-crm-contracts-extended/lib/models/reviews-table-block/populate";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "ReviewsTableBlock";
export const route = "components/page-blocks.reviews-table-block";
export const populate = modelPopulate;
