import type { IEntity } from "@sps/sps-website-builder-contracts/lib/entities/metatag/interfaces";
import type { IEntity as IEntityExtended } from "@sps/sps-website-builder-contracts-extended/lib/entities/metatag/interfaces";
import { populate as modelPopulate } from "@sps/sps-website-builder-contracts-extended/lib/entities/metatag/populate";

export interface IModel extends IEntity {}
export interface IModelExtended extends IEntityExtended {}

export const tag = "Metatag";
export const route = "metatags";
export const populate = modelPopulate;
