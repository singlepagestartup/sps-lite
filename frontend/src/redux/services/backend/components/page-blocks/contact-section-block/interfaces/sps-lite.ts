import { IBackendApiEntity as IBackendApiForm } from "~redux/services/backend/api/form/interfaces";
import { IBackendExtensionUploadApiEntity as IBackendExtensionUploadApiFile } from "~redux/services/backend/extensions/upload/api/file/interfaces";
import { IBackendComponentElement as IBackendComponentButtonsArray } from "../../../elements/buttons-array/interfaces";

export interface IBackendComponentPageBlock {
  id: number;
  __component: "page-blocks.contact-section-block";
  variant: "centered";
  title: string | null;
  subtitle: string | null;
  description: string | null;
  className: string | null;
  anchor: string | null;
  media?: IBackendExtensionUploadApiFile | null;
  additionalMedia?: IBackendExtensionUploadApiFile[] | null;
  form?: IBackendApiForm | null;
  buttonsArrays?: IBackendComponentButtonsArray[] | null;
}
