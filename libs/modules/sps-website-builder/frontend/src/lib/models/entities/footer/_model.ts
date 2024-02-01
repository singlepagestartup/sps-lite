import type { IEntity } from "@sps/sps-website-builder-contracts/lib/entities/footer/interfaces";
import type { IEntity as IEntityExtended } from "@sps/sps-website-builder-contracts-extended/lib/entities/footer/interfaces";
import { populate as modelPopulate } from "@sps/sps-website-builder-contracts-extended/lib/entities/footer/populate";

export interface IModel extends IEntity {}
export interface IModelExtended extends IEntityExtended {}

export const tag = "Footer";
export const route = "footers";
export const populate = modelPopulate;
