import type { IModel as IParentModel } from "@sps/sps-notification-models-notification-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-notification-models-notification-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "notification";
export const route = "notifications";
export const populate = modelPopulate;
