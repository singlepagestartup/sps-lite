import type { IEntity } from "@sps/sps-website-builder-contracts/lib/models/sidebar/interfaces";
import type { IEntity as IEntityExtended } from "@sps/sps-website-builder-contracts-extended/lib/models/sidebar/interfaces";
import { populate as modelPopulate } from "@sps/sps-website-builder-contracts-extended/lib/models/sidebar/populate";

export interface IModel extends IEntity {}
export interface IModelExtended extends IEntityExtended {}

export const tag = "Sidebar";
export const route = "sidebars";
export const populate = modelPopulate;
