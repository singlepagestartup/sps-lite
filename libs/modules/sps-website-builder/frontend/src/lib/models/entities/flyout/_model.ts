import type { IEntity } from "@sps/sps-website-builder-contracts/lib/models/flyout/interfaces";
import type { IEntity as IEntityExtended } from "@sps/sps-website-builder-contracts-extended/lib/models/flyout/interfaces";
import { populate as modelPopulate } from "@sps/sps-website-builder-contracts-extended/lib/models/flyout/populate";

export interface IModel extends IEntity {}
export interface IModelExtended extends IEntityExtended {}

export const tag = "Flyout";
export const route = "flyouts";
export const populate = modelPopulate;
