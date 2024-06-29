import type { IModel as IParentModel } from "@sps/sps-website-builder/models/modal/contracts/root";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-website-builder/models/modal/contracts/extended";
import { BACKEND_URL } from "@sps/shared-utils";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "modal";
export const route = "/api/sps-website-builder/modals";
export const populate = modelPopulate;
export const host = BACKEND_URL;
