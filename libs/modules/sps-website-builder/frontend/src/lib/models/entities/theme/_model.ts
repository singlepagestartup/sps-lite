import type { IEntity } from "@sps/sps-website-builder-contracts/lib/models/theme/interfaces";
import type { IEntity as IEntityExtended } from "@sps/sps-website-builder-contracts-extended/lib/models/theme/interfaces";
import { populate as modelPopulate } from "@sps/sps-website-builder-contracts-extended/lib/models/theme/populate";

export interface IModel extends IEntity {}
export interface IModelExtended extends IEntityExtended {}

export const tag = "Theme";
export const route = "themes";
export const populate = modelPopulate;
