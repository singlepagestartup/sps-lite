import type { IModel as IParentModel } from "@sps/sps-website-builder-models-footer-block-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-website-builder-models-footer-block-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "footer-block";
export const route = "footer-blocks";
export const populate = modelPopulate;
