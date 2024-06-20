import type { IModel as IParentModel } from "@sps/sps-website-builder/models/metadata/contracts/root";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-website-builder/models/metadata/contracts/extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "metadata";
export const route = "metadata";
export const populate = modelPopulate;
