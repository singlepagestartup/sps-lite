import type { IModel as IParentModel } from "@sps/sps-website-builder-models-hero-section-block-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-website-builder-models-hero-section-block-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "hero-section-block";
export const route = "components/page-blocks.hero-section-block";
export const populate = modelPopulate;
