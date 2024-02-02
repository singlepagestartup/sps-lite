import { IModel as IParentModel } from "@sps/sps-website-builder-contracts/lib/models/cta-section-block/interfaces";
import { IModel as IButton } from "@sps/sps-website-builder-contracts/lib/models/button/interfaces";
import type { IModel as IFile } from "@sps/sps-file-storage-contracts/lib/models/file/interfaces";

export interface IModel extends IParentModel {
  media?: IFile[] | null;
  additionalMedia?: IFile[] | null;
  buttons?: IButton[];
}
