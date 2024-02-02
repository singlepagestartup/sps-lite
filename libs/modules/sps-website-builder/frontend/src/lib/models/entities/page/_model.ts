import type { IEntity } from "@sps/sps-website-builder-contracts/lib/models/page/interfaces";
import type { IEntity as IEntityExtended } from "@sps/sps-website-builder-contracts-extended/lib/models/page/interfaces";
import { populate as modelPopulate } from "@sps/sps-website-builder-contracts-extended/lib/models/page/populate";

export interface IModel extends IEntity {}
export interface IModelExtended extends IEntityExtended {}

export const tag = "Page";
export const route = "pages";
export const populate = modelPopulate;
