import type { IEntity } from "@sps/sps-website-builder-contracts/lib/entities/topbar/interfaces";
import type { IEntity as IEntityExtended } from "@sps/sps-website-builder-contracts-extended/lib/entities/topbar/interfaces";
import { populate as modelPopulate } from "@sps/sps-website-builder-contracts-extended/lib/entities/topbar/populate";

export interface IModel extends IEntity {}
export interface IModelExtended extends IEntityExtended {}

export const tag = "Topbar";
export const route = "topbars";
export const populate = modelPopulate;
