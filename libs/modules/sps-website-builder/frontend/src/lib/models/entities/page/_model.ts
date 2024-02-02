import type { IModel as IParentModel } from "@sps/sps-website-builder-contracts/lib/models/page/interfaces";
import type { IModel as IParentModelExtended } from "@sps/sps-website-builder-contracts-extended/lib/models/page/interfaces";
import { populate as modelPopulate } from "@sps/sps-website-builder-contracts-extended/lib/models/page/populate";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "Page";
export const route = "pages";
export const populate = modelPopulate;
