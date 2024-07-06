import type { IModel as IParentModel } from "@sps/sps-website-builder/models/widget/contracts/root";
import {
  IModel as IParentModelExtended,
  populate as relationPopulate,
} from "@sps/sps-website-builder/models/widget/contracts/extended";
import { BACKEND_URL, REVALIDATE } from "@sps/shared-utils";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

/**
 * @deprecated
 */
export const tag = "widget";
export const route = "/api/sps-website-builder/widgets";
export const populate = relationPopulate;
export const host = BACKEND_URL;
export const query = {
  populate,
};
export const options = {
  next: {
    revalidate: REVALIDATE,
  },
};
