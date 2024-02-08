import type { IModel as IParentModel } from "@sps/sps-website-builder-contracts/lib/models/button/interfaces";
import type { IModel as IFlyout } from "@sps/sps-website-builder-contracts/lib/models/flyout/interfaces";
import type { IModel as IFile } from "@sps/sps-file-storage-contracts/lib/models/file/interfaces";

export interface IModel extends IParentModel {
  media?: IFile[] | null;
  additionalMedia?: IFile[] | null;
  flyout?: IFlyout | null;
}
