import type { IModel as IParentModel } from "@sps/sps-host/models/layout/contracts/root";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-host/models/layout/contracts/extended";
import { BACKEND_URL } from "@sps/shared-utils";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "layout";
export const route = "/api/sps-host/layouts";
export const populate = modelPopulate;
export const host = BACKEND_URL;
