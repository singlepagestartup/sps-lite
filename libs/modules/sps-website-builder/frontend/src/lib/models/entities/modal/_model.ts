import type { IModel as IParentModel } from "@sps/sps-website-builder-contracts/lib/models/modal/interfaces";
import type { IModel as IParentModelExtended } from "@sps/sps-website-builder-contracts-extended/lib/models/modal/interfaces";
import { populate as modelPopulate } from "@sps/sps-website-builder-contracts-extended/lib/models/modal/populate";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "Modal";
export const route = "modals";
export const populate = modelPopulate;
