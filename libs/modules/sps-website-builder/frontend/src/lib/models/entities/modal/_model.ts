import type { IEntity } from "@sps/sps-website-builder-contracts/lib/models/modal/interfaces";
import type { IEntity as IEntityExtended } from "@sps/sps-website-builder-contracts-extended/lib/models/modal/interfaces";
import { populate as modelPopulate } from "@sps/sps-website-builder-contracts-extended/lib/models/modal/populate";

export interface IModel extends IEntity {}
export interface IModelExtended extends IEntityExtended {}

export const tag = "Modal";
export const route = "modals";
export const populate = modelPopulate;
