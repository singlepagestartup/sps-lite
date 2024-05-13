import type { IModel as IParentModel } from "@sps/sps-website-builder-models-faq-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-website-builder-models-faq-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "faq";
export const route = "faq";
export const populate = modelPopulate;
