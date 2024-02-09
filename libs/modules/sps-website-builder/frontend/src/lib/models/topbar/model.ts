import type { IModel as IParentModel } from "@sps/sps-website-builder-contracts/lib/models/topbar/interfaces";
import type { IModel as IParentModelExtended } from "@sps/sps-website-builder-contracts-extended/lib/models/topbar/interfaces";
import { populate as modelPopulate } from "@sps/sps-website-builder-contracts-extended/lib/models/topbar/populate";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "Topbar";
export const route = "topbars";
export const populate = modelPopulate;
