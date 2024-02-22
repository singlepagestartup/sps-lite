import type { IModel as IParentModel } from "@sps/sps-website-builder-models-metatag-contracts";
import type { IModel as IFile } from "@sps/sps-file-storage-models-file-contracts";

export interface IModel extends IParentModel {
  favicon?: IFile | null;
}
