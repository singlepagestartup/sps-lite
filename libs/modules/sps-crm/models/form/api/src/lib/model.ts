import type { IModel as IParentModel } from "@sps/sps-crm-form-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-crm-form-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "Form";
export const route = "forms";
export const populate = modelPopulate;
