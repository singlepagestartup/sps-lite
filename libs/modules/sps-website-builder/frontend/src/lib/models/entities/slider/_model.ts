import type { IEntity } from "@sps/sps-website-builder-contracts/lib/entities/slider/interfaces";
import type { IEntity as IEntityExtended } from "@sps/sps-website-builder-contracts-extended/lib/entities/slider/interfaces";
import { populate as modelPopulate } from "@sps/sps-website-builder-contracts-extended/lib/entities/slider/populate";

export interface IModel extends IEntity {}
export interface IModelExtended extends IEntityExtended {}

export const tag = "Slider";
export const route = "sliders";
export const populate = modelPopulate;
