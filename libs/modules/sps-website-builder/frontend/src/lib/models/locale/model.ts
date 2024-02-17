import type { IModel as IParentModel } from "@sps/sps-website-builder-locale-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-website-builder-locale-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "Locale";
export const route = "locales";
export const populate = modelPopulate;
