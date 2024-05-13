import type { IModel as IParentModel } from "@sps/sps-crm-models-input-option-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-crm-models-input-option-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "input-option";
export const route = "input-option";
export const populate = modelPopulate;
