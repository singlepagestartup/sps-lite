import type { IEntity } from "@sps/sps-website-builder-contracts/lib/models/loader/interfaces";
import type { IEntity as IEntityExtended } from "@sps/sps-website-builder-contracts-extended/lib/models/loader/interfaces";
import { populate as modelPopulate } from "@sps/sps-website-builder-contracts-extended/lib/models/loader/populate";

export interface IModel extends IEntity {}
export interface IModelExtended extends IEntityExtended {}

export const tag = "Loader";
export const route = "loaders";
export const populate = modelPopulate;
