import { IRelation as IWidgetsToFiles } from "@sps/sps-file-storage/relations/widgets-to-files/contracts/root";
import type { IModel as IParentModel } from "@sps/sps-file-storage/models/widget/contracts/root";

export interface IModel extends IParentModel {
  widgetsToFiles: IWidgetsToFiles[];
}
