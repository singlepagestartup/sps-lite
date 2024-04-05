import type { IModel as IParentModel } from "@sps/sps-crm-models-form-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-crm-models-form-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "form";
export const route = "forms";
export const populate = modelPopulate;
