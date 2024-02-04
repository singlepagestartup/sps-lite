import type { IModel as IParentModel } from "@sps/sps-crm-contracts/lib/models/contact-section-block/interfaces";
import type { IModel as IForm } from "@sps/sps-crm-contracts/lib/models/form/interfaces";
import type { IModel as IFile } from "@sps/sps-file-storage-contracts/lib/models/file/interfaces";
import type { IModel as IButtonsArray } from "@sps/sps-elements-contracts/lib/models/buttons-array/interfaces";

export interface IModel extends IParentModel {
  media?: IFile | null;
  additionalMedia?: IFile[] | null;
  form?: IForm | null;
  buttonsArrays?: IButtonsArray[] | null;
}
