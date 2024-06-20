import type { IModel as IParentModel } from "@sps/sps-website-builder/models/logotype/contracts/root";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-website-builder/models/logotype/contracts/extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "logotype";
export const route = "logotypes";
export const populate = modelPopulate;
