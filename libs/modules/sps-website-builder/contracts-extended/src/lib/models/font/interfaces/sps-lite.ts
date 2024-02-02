import { IModel as IParentModel } from "@sps/sps-website-builder-contracts/lib/models/font/interfaces";
import type { IModel as IFile } from "@sps/sps-file-storage-contracts/lib/entities/file/interfaces";

export interface IModel extends IParentModel {
  media?: IFile;
}
