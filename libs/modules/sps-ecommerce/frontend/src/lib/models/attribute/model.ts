import type { IModel as IParentModel } from "@sps/sps-ecommerce-contracts/lib/models/attribute/interfaces";
import type { IModel as IParentModelExtended } from "@sps/sps-ecommerce-contracts-extended/lib/models/attribute/interfaces";
import { populate as modelPopulate } from "@sps/sps-ecommerce-contracts-extended/lib/models/attribute/populate";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "Attribute";
export const route = "attributes";
export const populate = modelPopulate;
