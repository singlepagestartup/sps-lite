import type { IModel as IParentModel } from "@sps/sps-website-builder-button-contracts";
import type { IModel as IFlyout } from "libs/modules/sps-website-builder/flyout/contracts/src/lib/interfaces";
import type { IModel as IFile } from "@sps/sps-file-storage-contracts/lib/models/file/interfaces";

export interface IModel extends IParentModel {
  media?: IFile[] | null;
  additionalMedia?: IFile[] | null;
  flyout?: IFlyout | null;
}
