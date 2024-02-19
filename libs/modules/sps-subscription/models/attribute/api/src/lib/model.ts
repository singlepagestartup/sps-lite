import type { IModel as IParentModel } from "@sps/sps-subscription-attribute-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-subscription-attribute-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "Attribute";
export const route = "attributes";
export const populate = modelPopulate;
