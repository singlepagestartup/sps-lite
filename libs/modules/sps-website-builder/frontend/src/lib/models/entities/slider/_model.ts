import type { IEntity } from "@sps/sps-website-builder-contracts/lib/models/slider/interfaces";
import type { IEntity as IEntityExtended } from "@sps/sps-website-builder-contracts-extended/lib/models/slider/interfaces";
import { populate as modelPopulate } from "@sps/sps-website-builder-contracts-extended/lib/models/slider/populate";

export interface IModel extends IEntity {}
export interface IModelExtended extends IEntityExtended {}

export const tag = "Slider";
export const route = "sliders";
export const populate = modelPopulate;
