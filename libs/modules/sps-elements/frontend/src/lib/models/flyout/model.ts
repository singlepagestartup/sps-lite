import type { IModel as IParentModel } from "@sps/sps-elements-contracts/lib/models/flyout/interfaces";
import type { IModel as IParentModelExtended } from "@sps/sps-elements-contracts-extended/lib/models/flyout/interfaces";
import { populate as modelPopulate } from "@sps/sps-elements-contracts-extended/lib/models/flyout/populate";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "Flyout";
export const route = "flyouts";
export const populate = modelPopulate;
