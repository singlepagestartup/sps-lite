import type { IModel as IParentModel } from "@sps/sps-crm-models-input-contracts";
import type { IModel as IFile } from "@sps/sps-file-storage-models-file-contracts";
import type { IModel as IOption } from "@sps/sps-crm-models-input-option-contracts";

export interface IModel extends IParentModel {
  options?: Omit<IOption, "__component">[];
  media?: IFile[] | null;
  extraMedia?: IFile[] | null;
  additionalMedia?: IFile[] | null;
}
