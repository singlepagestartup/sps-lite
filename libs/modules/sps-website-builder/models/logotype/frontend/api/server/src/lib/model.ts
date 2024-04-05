import type { IModel as IParentModel } from "@sps/sps-website-builder-models-logotype-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-website-builder-models-logotype-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "logotype";
export const route = "components/elements.logotype";
export const populate = modelPopulate;
