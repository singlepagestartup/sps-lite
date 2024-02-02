import type { IModel as IParentModel } from "@sps/sps-website-builder-contracts/lib/models/sidebar/interfaces";
import type { IModel as IParentModelExtended } from "@sps/sps-website-builder-contracts-extended/lib/models/sidebar/interfaces";
import { populate as modelPopulate } from "@sps/sps-website-builder-contracts-extended/lib/models/sidebar/populate";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "Sidebar";
export const route = "sidebars";
export const populate = modelPopulate;
