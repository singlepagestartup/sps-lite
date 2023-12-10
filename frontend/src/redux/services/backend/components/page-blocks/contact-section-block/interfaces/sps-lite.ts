import { ISpsLiteBackendApiForm } from "~redux/services/backend/api/form/interfaces/sps-lite";
import { ISpsLiteBackendExtensionUploadApiFile } from "~redux/services/backend/extensions/upload/api/file/interfaces/sps-lite";
import { ISpsLiteBackendComponentButtonsArray } from "../../../elements/buttons-array/interfaces/sps-lite";

export interface ISpsLiteBackendComponentContactSectonBlock {
  id: number;
  __component: "page-blocks.contact-section-block";
  variant: "centered";
  title: string | null;
  subtitle: string | null;
  description: string | null;
  className: string | null;
  anchor: string | null;
  media?: ISpsLiteBackendExtensionUploadApiFile | null;
  additionalMedia?: ISpsLiteBackendExtensionUploadApiFile[] | null;
  form?: ISpsLiteBackendApiForm | null;
  buttonsArrays?: ISpsLiteBackendComponentButtonsArray[] | null;
}
