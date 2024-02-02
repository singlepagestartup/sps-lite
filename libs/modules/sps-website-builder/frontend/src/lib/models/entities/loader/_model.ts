import type { IModel as IParentModel } from "@sps/sps-website-builder-contracts/lib/models/loader/interfaces";
import type { IModel as IParentModelExtended } from "@sps/sps-website-builder-contracts-extended/lib/models/loader/interfaces";
import { populate as modelPopulate } from "@sps/sps-website-builder-contracts-extended/lib/models/loader/populate";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "Loader";
export const route = "loaders";
export const populate = modelPopulate;
