import type { IModel as IParentModel } from "@sps/sps-crm-models-review-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-crm-models-review-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "review";
export const route = "reviews";
export const populate = modelPopulate;
