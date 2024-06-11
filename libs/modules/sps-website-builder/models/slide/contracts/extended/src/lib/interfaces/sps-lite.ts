import { IRelation as ISlidesToButtonsArrays } from "@sps/sps-website-builder-relations-slides-to-buttons-arrays-contracts";
import { IRelation as ISlidesToSpsFileStorageWidgets } from "@sps/sps-website-builder-relations-slides-to-sps-file-storage-widgets-contracts";
import type { IModel as IParentModel } from "@sps/sps-website-builder-models-slide-contracts";
import type { IModel as IFile } from "@sps/sps-file-storage-models-file-contracts";

export interface IModel extends IParentModel {
  slidesToButtonsArrays: ISlidesToButtonsArrays[];
  slidesToSpsFileStorageWidgets: ISlidesToSpsFileStorageWidgets[];
  media?: IFile[] | null;
  additionalMedia?: IFile[] | null;
}
