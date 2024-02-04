import type { IModel as IParentModel } from "@sps/sps-crm-contracts/lib/models/input/interfaces";
import type { IModel as IParentModelExtended } from "@sps/sps-crm-contracts-extended/lib/models/input/interfaces";
import { populate as modelPopulate } from "@sps/sps-crm-contracts-extended/lib/models/input/populate";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "Input";
export const route = "components/elements.input";
export const populate = modelPopulate;
