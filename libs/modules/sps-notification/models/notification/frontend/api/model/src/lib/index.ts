import type { IModel as IParentModel } from "@sps/sps-notification/models/notification/contracts/root";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-notification/models/notification/contracts/extended";
import { BACKEND_URL } from "@sps/shared-utils";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "notification";
export const route = "/api/sps-notification/notifications";
export const populate = modelPopulate;
export const host = BACKEND_URL;
