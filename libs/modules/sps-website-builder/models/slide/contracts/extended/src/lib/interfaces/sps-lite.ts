import { IRelation as IWidgetsToSlides } from "@sps/sps-website-builder-relations-widgets-to-slides-contracts";
import type { IModel as IParentModel } from "@sps/sps-website-builder-models-slide-contracts";
import type { IModel as IFile } from "@sps/sps-file-storage-models-file-contracts";

export interface IModel extends IParentModel {
  widgetsToSlides: IWidgetsToSlides[];
  media?: IFile[] | null;
  additionalMedia?: IFile[] | null;
}
