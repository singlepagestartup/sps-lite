import { IModel as IParentModel } from "@sps/sps-website-builder-contracts/lib/models/buttons-array/interfaces";
import { IModel as IButton } from "@sps/sps-website-builder-contracts/lib/models/button/interfaces";
import type { IModel as IFile } from "@sps/sps-file-storage-contracts/lib/entities/file/interfaces";

export interface IModel extends IParentModel {
  buttons: IButton[];
  media?: IFile[] | null;
  additionalMedia?: IFile[] | null;
}
