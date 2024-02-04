import type { IModel as IParentModel } from "@sps/sps-crm-contracts/lib/models/review/interfaces";
import type { IModel as IParentModelExtended } from "@sps/sps-crm-contracts-extended/lib/models/review/interfaces";
import { populate as modelPopulate } from "@sps/sps-crm-contracts-extended/lib/models/review/populate";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "Review";
export const route = "reviews";
export const populate = modelPopulate;
