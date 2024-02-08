import type { IModel as IParentModel } from "@sps/sps-website-builder-contracts/lib/models/slider-block/interfaces";
import type { IModel as IParentModelExtended } from "@sps/sps-website-builder-contracts-extended/lib/models/slider-block/interfaces";
import { populate as modelPopulate } from "@sps/sps-website-builder-contracts-extended/lib/models/slider-block/populate";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "SliderBlock";
export const route = "components/page-blocks.slider-block";
export const populate = modelPopulate;
