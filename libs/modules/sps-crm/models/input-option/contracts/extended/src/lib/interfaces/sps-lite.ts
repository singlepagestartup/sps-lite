import type { IModel as IParentModel } from "@sps/sps-crm-models-input-option-contracts";
import type { IModel as IFile } from "@sps/sps-file-storage-models-file-contracts";

export interface IModel extends IParentModel {
  media?: IFile[] | null;
  additionalMedia?: IFile[] | null;
  extraMedia?: IFile[] | null;
}
