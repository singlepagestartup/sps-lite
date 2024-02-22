import type { IModel as IParentModel } from "@sps/sps-website-builder-models-checkout-form-block-contracts";
import type { IModel as IButton } from "@sps/sps-website-builder-models-button-contracts";
import type { IModel as IFile } from "@sps/sps-file-storage-models-file-contracts";

export interface IModel extends IParentModel {
  buttons: IButton[] | null;
  media?: IFile[] | null;
  additionalMedia?: IFile[] | null;
}
