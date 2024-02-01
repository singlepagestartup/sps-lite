import type { IEntity } from "@sps/sps-website-builder-contracts/lib/entities/navbar/interfaces";
import type { IEntity as IEntityExtended } from "@sps/sps-website-builder-contracts-extended/lib/entities/navbar/interfaces";
import { populate as modelPopulate } from "@sps/sps-website-builder-contracts-extended/lib/entities/navbar/populate";

export interface IModel extends IEntity {}
export interface IModelExtended extends IEntityExtended {}

export const tag = "Navbar";
export const route = "navbars";
export const populate = modelPopulate;
