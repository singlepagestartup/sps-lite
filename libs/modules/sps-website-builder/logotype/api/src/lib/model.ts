import type { IModel as IParentModel } from "@sps/sps-website-builder-logotype-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-website-builder-logotype-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "Logotype";
export const route = "components/elements.logotype";
export const populate = modelPopulate;
