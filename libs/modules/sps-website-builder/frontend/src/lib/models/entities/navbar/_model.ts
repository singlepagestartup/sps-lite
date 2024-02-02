import type { IEntity } from "@sps/sps-website-builder-contracts/lib/models/navbar/interfaces";
import type { IEntity as IEntityExtended } from "@sps/sps-website-builder-contracts-extended/lib/models/navbar/interfaces";
import { populate as modelPopulate } from "@sps/sps-website-builder-contracts-extended/lib/models/navbar/populate";

export interface IModel extends IEntity {}
export interface IModelExtended extends IEntityExtended {}

export const tag = "Navbar";
export const route = "navbars";
export const populate = modelPopulate;
