import type { IModel as IParentModel } from "@sps/sps-website-builder-models-hero-section-block-contracts";
import type { IModel as IFile } from "@sps/sps-file-storage-models-file-contracts";
import type { IModel as IButton } from "@sps/sps-website-builder-models-button-contracts";

export interface IModel extends IParentModel {
  buttons?: IButton[] | null;
  media?: IFile[] | null;
  additionalMedia?: IFile[] | null;
}
