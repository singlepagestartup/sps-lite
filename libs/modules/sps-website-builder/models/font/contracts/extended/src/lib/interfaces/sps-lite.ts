import type { IModel as IParentModel } from "@sps/sps-website-builder-models-font-contracts";
import type { IModel as IFile } from "@sps/sps-file-storage-models-file-contracts";

export interface IModel extends IParentModel {
  media?: IFile;
}
