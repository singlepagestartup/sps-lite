import type { IModel as IParentModel } from "@sps/sps-file-storage-models-file-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-file-storage-models-file-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "Upload";
export const route = "upload/files";
export const populate = modelPopulate;
