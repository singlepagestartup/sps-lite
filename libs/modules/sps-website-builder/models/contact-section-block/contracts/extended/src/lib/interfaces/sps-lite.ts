import type { IModel as IParentModel } from "@sps/sps-website-builder-models-contact-section-block-contracts";
import type { IModel as IForm } from "@sps/sps-crm-models-form-contracts";
import type { IModel as IFile } from "@sps/sps-file-storage-models-file-contracts";
import type { IModel as IButtonsArray } from "@sps/sps-website-builder-models-buttons-array-contracts";

export interface IModel extends IParentModel {
  media?: IFile | null;
  additionalMedia?: IFile[] | null;
  form?: IForm | null;
  buttonsArrays?: IButtonsArray[] | null;
}
