import type { IModel as IParentModel } from "@sps/sps-ecommerce-attribute-key-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-ecommerce-attribute-key-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "AttributeKey";
export const route = "attribute-keys";
export const populate = modelPopulate;
