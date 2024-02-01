import type { IEntity } from "@sps/sps-website-builder-contracts/lib/entities/page/interfaces";
import type { IEntity as IEntityExtended } from "@sps/sps-website-builder-contracts-extended/lib/entities/page/interfaces";
import { populate as modelPopulate } from "@sps/sps-website-builder-contracts-extended/lib/entities/page/populate";

export interface IModel extends IEntity {}
export interface IModelExtended extends IEntityExtended {}

export const tag = "Page";
export const route = "pages";
export const populate = modelPopulate;
