import type { IModel as IParentModel } from "@sps/sps-website-builder-models-modal-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-website-builder-models-modal-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "modal";
export const route = "modals";
export const populate = modelPopulate;
