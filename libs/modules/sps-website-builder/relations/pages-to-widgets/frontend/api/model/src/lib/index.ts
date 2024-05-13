import type { IModel as IParentModel } from "@sps/sps-website-builder-relations-pages-to-widgets-contracts";
import {
  IModel as IParentModelExtended,
  populate as relationPopulate,
} from "@sps/sps-website-builder-relations-pages-to-widgets-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "pages-to-widgets";
export const route = "pages-to-widgets";
export const populate = relationPopulate;
