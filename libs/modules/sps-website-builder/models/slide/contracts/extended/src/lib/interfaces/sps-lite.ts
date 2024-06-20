import { IRelation as ISlidesToButtonsArrays } from "@sps/sps-website-builder/relations/slides-to-buttons-arrays/contracts/root";
import { IRelation as ISlidesToSpsFileStorageWidgets } from "@sps/sps-website-builder/relations/slides-to-sps-file-storage-module-widgets/contracts/root";
import type { IModel as IParentModel } from "@sps/sps-website-builder/models/slide/contracts/root";
import type { IModel as IFile } from "@sps/sps-file-storage/models/file/contracts/root";

export interface IModel extends IParentModel {
  slidesToButtonsArrays: ISlidesToButtonsArrays[];
  slidesToSpsFileStorageWidgets: ISlidesToSpsFileStorageWidgets[];
  media?: IFile[] | null;
  additionalMedia?: IFile[] | null;
}
