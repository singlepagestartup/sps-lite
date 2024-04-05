import type { IModel as IParentModel } from "@sps/sps-website-builder-models-feature-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-website-builder-models-feature-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "feature";
export const route = "components/elements.feature";
export const populate = modelPopulate;
