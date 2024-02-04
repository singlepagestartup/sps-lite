import type { IModel as IParentModel } from "@sps/sps-file-storage-contracts/lib/models/file/interfaces";
import type { IModel as IParentModelExtended } from "@sps/sps-file-storage-contracts-extended/lib/models/file/interfaces";
import { populate as modelPopulate } from "@sps/sps-file-storage-contracts-extended/lib/models/file/populate";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "Upload";
export const route = "upload/files";
export const populate = modelPopulate;
