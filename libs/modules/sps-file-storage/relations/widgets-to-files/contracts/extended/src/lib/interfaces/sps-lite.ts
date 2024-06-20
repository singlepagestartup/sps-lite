import type { IRelation as IParentRelation } from "@sps/sps-file-storage/relations/widgets-to-files/contracts/root";
import { IModel as IWidget } from "@sps/sps-file-storage/models/widget/contracts/root";

import { IModel as IFile } from "@sps/sps-file-storage/models/file/contracts/root";

export interface IRelation extends IParentRelation {
  widget: IWidget;

  file: IFile;
}
