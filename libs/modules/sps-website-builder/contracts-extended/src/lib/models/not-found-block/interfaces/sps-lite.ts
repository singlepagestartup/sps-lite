import type { IModel as IParentModel } from "@sps/sps-website-builder-contracts/lib/models/not-found-block/interfaces";
import type { IModel as IFile } from "@sps/sps-file-storage-contracts/lib/models/file/interfaces";
import type { IModel as IButton } from "@sps/sps-website-builder-contracts/lib/models/button/interfaces";

export interface IModel extends IParentModel {
  buttons?: IButton[] | null;
  media?: IFile[] | null;
  additionalMedia?: IFile[] | null;
}
