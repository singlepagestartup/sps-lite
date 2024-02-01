import type { IEntity } from "@sps/sps-website-builder-contracts/lib/entities/flyout/interfaces";
import type { IEntity as IEntityExtended } from "@sps/sps-website-builder-contracts-extended/lib/entities/flyout/interfaces";
import { populate as modelPopulate } from "@sps/sps-website-builder-contracts-extended/lib/entities/flyout/populate";

export interface IModel extends IEntity {}
export interface IModelExtended extends IEntityExtended {}

export const tag = "Flyout";
export const route = "flyouts";
export const populate = modelPopulate;
