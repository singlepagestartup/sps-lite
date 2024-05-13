import type { IModel as IParentModel } from "@sps/sps-website-builder-relations-widgets-to-hero-section-blocks-contracts";
import {
  IModel as IParentModelExtended,
  populate as relationPopulate,
} from "@sps/sps-website-builder-relations-widgets-to-hero-section-blocks-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "widgets-to-hero-section-blocks";
export const route = "widgets-to-hero-section-blocks";
export const populate = relationPopulate;
