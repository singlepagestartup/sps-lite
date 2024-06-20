import type { IModel as IParentModel } from "@sps/sps-website-builder/models/footer/contracts/root";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-website-builder/models/footer/contracts/extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "footer";
export const route = "footers";
export const populate = modelPopulate;
