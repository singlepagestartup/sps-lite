import { IRelation as IWidgetsToFiles } from "@sps/sps-file-storage-relations-widgets-to-files-contracts";
import type { IModel as IParentModel } from "@sps/sps-file-storage-models-file-contracts";

export interface IModel extends IParentModel {
  widgetsToFiles: IWidgetsToFiles[];
}
