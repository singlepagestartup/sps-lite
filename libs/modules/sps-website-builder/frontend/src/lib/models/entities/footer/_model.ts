import type { IEntity } from "@sps/sps-website-builder-contracts/lib/models/footer/interfaces";
import type { IEntity as IEntityExtended } from "@sps/sps-website-builder-contracts-extended/lib/models/footer/interfaces";
import { populate as modelPopulate } from "@sps/sps-website-builder-contracts-extended/lib/models/footer/populate";

export interface IModel extends IEntity {}
export interface IModelExtended extends IEntityExtended {}

export const tag = "Footer";
export const route = "footers";
export const populate = modelPopulate;
