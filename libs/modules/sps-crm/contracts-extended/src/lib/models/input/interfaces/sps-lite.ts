import type { IModel as IParentModel } from "@sps/sps-crm-contracts/lib/models/input/interfaces";
import type { IModel as IFile } from "@sps/sps-file-storage-contracts/lib/models/file/interfaces";
import type { IModel as IInputOption } from "../../input-option/interfaces";

export interface IModel extends IParentModel {
  options?: Omit<IInputOption, "__component">[];
  media?: IFile[] | null;
  extraMedia?: IFile[] | null;
  additionalMedia?: IFile[] | null;
}
