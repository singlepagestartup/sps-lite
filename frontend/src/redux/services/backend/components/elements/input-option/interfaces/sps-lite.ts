import { ISpsLiteBackendUploadFile } from "~redux/services/backend/models/upload/interfaces/sps-lite";

export interface ISpsLiteBackendInputOption {
  id: number;
  __component: "elements.input-option";
  title: string | null;
  description: string | null;
  media?: ISpsLiteBackendUploadFile[] | null;
  additionalMedia?: ISpsLiteBackendUploadFile[] | null;
  extraMedia?: ISpsLiteBackendUploadFile[] | null;
}
