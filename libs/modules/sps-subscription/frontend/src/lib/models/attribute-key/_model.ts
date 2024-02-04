import type { IModel as IParentModel } from "@sps/sps-subscription-contracts/lib/models/attribute-key/interfaces";
import type { IModel as IParentModelExtended } from "@sps/sps-subscription-contracts-extended/lib/models/attribute-key/interfaces";
import { populate as modelPopulate } from "@sps/sps-subscription-contracts-extended/lib/models/attribute-key/populate";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "AttributeKey";
export const route = "attribute-keys";
export const populate = modelPopulate;
