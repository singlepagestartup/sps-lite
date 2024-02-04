import type { IModel as IParentModel } from "@sps/sps-website-builder-contracts/lib/models/slider/interfaces";
import type { IModel as IParentModelExtended } from "@sps/sps-website-builder-contracts-extended/lib/models/slider/interfaces";
import { populate as modelPopulate } from "@sps/sps-website-builder-contracts-extended/lib/models/slider/populate";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "Slider";
export const route = "sliders";
export const populate = modelPopulate;
