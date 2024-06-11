import type { IModel as IParentModel } from "@sps/sps-website-builder-models-logotypes-list-block-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-website-builder-models-logotypes-list-block-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "logotypes-list-block";
export const route = "logotypes-list-blocks";
export const populate = modelPopulate;
