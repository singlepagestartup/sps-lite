import type { IEntity } from "@sps/sps-website-builder-contracts/lib/entities/layout/interfaces";
import type { IEntity as IEntityExtended } from "@sps/sps-website-builder-contracts-extended/lib/entities/layout/interfaces";
import { populate as modelPopulate } from "@sps/sps-website-builder-contracts-extended/lib/entities/layout/populate";

export interface IModel extends IEntity {}
export interface IModelExtended extends IEntityExtended {}

export const tag = "Layout";
export const route = "layouts";
export const populate = modelPopulate;
