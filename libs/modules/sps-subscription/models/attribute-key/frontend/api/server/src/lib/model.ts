import type { IModel as IParentModel } from "@sps/sps-subscription-models-attribute-key-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-subscription-models-attribute-key-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "attribute-key";
export const route = "attribute-keys";
export const populate = modelPopulate;
