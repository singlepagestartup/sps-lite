import type { IModel as IParentModel } from "@sps/sps-website-builder-buttons-array-contracts";
import type { IModel as IButton } from "@sps/sps-website-builder-button-contracts";
import type { IModel as IFile } from "@sps/sps-file-storage-file-contracts";

export interface IModel extends IParentModel {
  buttons: IButton[];
  media?: IFile[] | null;
  additionalMedia?: IFile[] | null;
}
