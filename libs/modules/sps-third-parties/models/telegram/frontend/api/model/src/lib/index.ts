import type { IModel as IParentModel } from "@sps/sps-third-parties/models/telegram/contracts/root";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-third-parties/models/telegram/contracts/extended";
import { BACKEND_URL } from "@sps/shared-utils";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "telegram";
export const route = "/api/sps-third-parties/telegrams";
export const populate = modelPopulate;
export const host = BACKEND_URL;
