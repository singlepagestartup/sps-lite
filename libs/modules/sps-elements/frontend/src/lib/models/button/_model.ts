import type { IModel as IParentModel } from "@sps/sps-elements-contracts/lib/models/button/interfaces";
import type { IModel as IParentModelExtended } from "@sps/sps-elements-contracts-extended/lib/models/button/interfaces";
import { populate as modelPopulate } from "@sps/sps-elements-contracts-extended/lib/models/button/populate";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "Button";
export const route = "components/elements.button";
export const populate = modelPopulate;
