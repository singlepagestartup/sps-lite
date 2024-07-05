import type { IModel as IParentModel } from "@sps/sps-website-builder/models/footer/contracts/root";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-website-builder/models/footer/contracts/extended";
import { BACKEND_URL } from "@sps/shared-utils";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "footer";
export const route = "/api/sps-website-builder/footers";
export const populate = modelPopulate;
export const host = BACKEND_URL;
export const query = {
  populate,
};
