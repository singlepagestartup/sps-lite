import type { IModel as IParentModel } from "@sps/sps-website-builder/models/hero-section-block/contracts/root";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-website-builder/models/hero-section-block/contracts/extended";
import { BACKEND_URL } from "@sps/shared-utils";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "hero-section-block";
export const route = "/api/sps-website-builder/hero-section-blocks";
export const populate = modelPopulate;
export const host = BACKEND_URL;
export const query = {
  populate,
};
