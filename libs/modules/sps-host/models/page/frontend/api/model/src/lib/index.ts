import type { IModel as IParentModel } from "@sps/sps-host/models/page/contracts/root";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-host/models/page/contracts/extended";
import { BACKEND_URL } from "@sps/shared-utils";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "page";
export const route = "/api/sps-host/pages";
export const populate = modelPopulate;
export const host = BACKEND_URL;
export const query = {
  populate,
};
