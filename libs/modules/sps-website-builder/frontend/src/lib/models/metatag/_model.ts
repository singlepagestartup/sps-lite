import type { IModel as IParentModel } from "@sps/sps-website-builder-contracts/lib/models/metatag/interfaces";
import type { IModel as IParentModelExtended } from "@sps/sps-website-builder-contracts-extended/lib/models/metatag/interfaces";
import { populate as modelPopulate } from "@sps/sps-website-builder-contracts-extended/lib/models/metatag/populate";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "Metatag";
export const route = "metatags";
export const populate = modelPopulate;
