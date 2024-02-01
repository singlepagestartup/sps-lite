import type { IEntity } from "@sps/sps-website-builder-contracts/lib/entities/locale/interfaces";
import type { IEntity as IEntityExtended } from "@sps/sps-website-builder-contracts-extended/lib/entities/locale/interfaces";
import { populate as modelPopulate } from "@sps/sps-website-builder-contracts-extended/lib/entities/locale/populate";

export interface IModel extends IEntity {}
export interface IModelExtended extends IEntityExtended {}

export const tag = "Locale";
export const route = "locales";
export const populate = modelPopulate;
