import { ISpsLiteBackendForm } from "~redux/services/backend/models/form/interfaces/sps-lite";
import { ISpsLiteBackendUploadFile } from "~redux/services/backend/models/upload/interfaces/sps-lite";
import { ISpsLiteBackendButtonsArray } from "../../../elements/buttons-array/interfaces/sps-lite";

export interface ISpsLiteBackendContactSectonBlock {
  id: number;
  __component: "page-blocks.contact-section-block";
  variant: "centered";
  title: string | null;
  subtitle: string | null;
  description: string | null;
  className: string | null;
  anchor: string | null;
  media?: ISpsLiteBackendUploadFile | null;
  additionalMedia?: ISpsLiteBackendUploadFile[] | null;
  form?: ISpsLiteBackendForm | null;
  buttonsArrays?: ISpsLiteBackendButtonsArray[] | null;
}
