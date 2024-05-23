import type { IRelation as IParentRelation } from "@sps/sps-file-storage-relations-widgets-to-files-contracts";
import { IModel as IWidget } from "@sps/sps-file-storage-models-widget-contracts";

import { IModel as IFile } from "@sps/sps-file-storage-models-file-contracts";

export interface IRelation extends IParentRelation {
  widget: IWidget;

  file: IFile;
}
