import type { IModel as IParentModel } from "@sps/sps-third-parties/models/telegram-message/contracts/root";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-third-parties/models/telegram-message/contracts/extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "telegram-message";
export const route = "telegram-messages";
export const populate = modelPopulate;
