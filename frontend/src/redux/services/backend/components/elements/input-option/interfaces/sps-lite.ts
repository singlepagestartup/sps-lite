import { ISpsLiteBackendExtensionUploadApiFile } from "~redux/services/backend/extensions/upload/api/file/interfaces/sps-lite";

export interface IBackendComponentElement {
  id: number;
  __component: "elements.input-option";
  title: string | null;
  description: string | null;
  media?: ISpsLiteBackendExtensionUploadApiFile[] | null;
  additionalMedia?: ISpsLiteBackendExtensionUploadApiFile[] | null;
  extraMedia?: ISpsLiteBackendExtensionUploadApiFile[] | null;
}
