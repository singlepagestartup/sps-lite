import type { IModel as IParentModel } from "@sps/sps-website-builder/models/features-section-block/contracts/root";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-website-builder/models/features-section-block/contracts/extended";
import { BACKEND_URL } from "@sps/shared-utils";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "features-section-block";
export const route = "/api/sps-website-builder/features-section-blocks";
export const populate = modelPopulate;
export const host = BACKEND_URL;
export const query = {
  populate,
};
