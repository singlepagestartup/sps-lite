import type { IModel as IParentModel } from "@sps/sps-ecommerce-models-attribute-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-ecommerce-models-attribute-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "attribute";
export const route = "attributes";
export const populate = modelPopulate;
