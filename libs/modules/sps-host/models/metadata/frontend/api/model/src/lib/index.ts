import type { IModel as IParentModel } from "@sps/sps-host/models/metadata/contracts/root";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-host/models/metadata/contracts/extended";
import { BACKEND_URL, REVALIDATE } from "@sps/shared-utils";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "metadata";
export const route = "/api/sps-host/metadata";
export const populate = modelPopulate;
export const host = BACKEND_URL;
export const query = {
  populate,
};
export const options = {
  next: {
    tag,
    revalidate: REVALIDATE,
  },
};
